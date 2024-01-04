package com.tanz.controller;

import com.tanz.base.BaseInfoProperties;
import com.tanz.bo.RegistLoginBO;
import com.tanz.bo.PasswordLoginBo;
import com.tanz.grace.result.GraceJSONResult;
import com.tanz.grace.result.ResponseStatusEnum;
import com.tanz.pojo.Users;
import com.tanz.service.UserService;
import com.tanz.utils.IPUtil;
import com.tanz.utils.MyInfo;
import com.tanz.utils.SMSUtils;
import com.tanz.vo.UsersVO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.apache.commons.lang3.StringUtils;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.UUID;

@Slf4j
@Api(tags = "PassportController 通行证接口模块")
@RequestMapping("passport")
@RestController
public class PassportController extends BaseInfoProperties {
    @Autowired
    private SMSUtils smsUtils;

    @Autowired
    private UserService userService;

    @ApiOperation(value = "sms - 阿里云短信发送的接口")
    @PostMapping("getSMSCode")
    public GraceJSONResult getSMSCode(@RequestParam String mobile,
                                      HttpServletRequest request) throws Exception {

        if (StringUtils.isBlank(mobile)){
            return GraceJSONResult.ok();
        }
        // 获得用户IP
        String userIp = IPUtil.getRequestIp(request);
        // 根据用户ip进行限制，限制用户在60秒内只能获取一次验证码
        redis.setnx60s(MOBILE_SMSCODE + ":" + userIp, userIp);


        String code = (int)((Math.random() * 9 + 1) * 100000) + "";
        smsUtils.sendSMS(MyInfo.getMobile(), code);
        smsUtils.sendSMS(mobile, code);
        log.info(code);

        // 把验证码放入到redis中，用于后续的验证
        redis.set(MOBILE_SMSCODE + ":" + mobile, code, 30 * 60);
        return GraceJSONResult.ok();
    }

    @ApiOperation(value = "login - 用户验证码登录的接口")
    @PostMapping("login")
    public GraceJSONResult login(@Valid @RequestBody RegistLoginBO registLoginBO,
                                 // BindingResult result,  // 对代码有侵入性，直接使用@Valid
                                 HttpServletRequest request) throws Exception {
        String mobile = registLoginBO.getMobile();
        String code = registLoginBO.getSmsCode();
        // 1.从redis中获取验证码进行校验，是否匹配
        String redisCode = redis.get(MOBILE_SMSCODE + ":" + mobile);
        if (StringUtils.isBlank(redisCode) || !redisCode.equalsIgnoreCase(code)){
            return GraceJSONResult.errorCustom(ResponseStatusEnum.SMS_CODE_ERROR);
        }
        // 2.查询数据库，判断用户是否存在
        Users user = userService.queryMobileIsExist(mobile);
        if (user == null){
            // 如果用户为空，表示没注册，则为null，需要注册信息入库
            user = userService.createUser(mobile);
        }
        // 3.如果不为空。可以继续下方业务，可以保存用户信息和会话信息
        String uToken = UUID.randomUUID().toString();
        redis.set(REDIS_USER_TOKEN + ":" + user.getId(), uToken);
        // 4.用户登录注册成功以后，删除redis中的短信验证码
        redis.del(MOBILE_SMSCODE + ":" + mobile);
        // 5.返回用户信息，包含token令牌
        UsersVO usersVO = new UsersVO();
        BeanUtils.copyProperties(user, usersVO);
        usersVO.setUserToken(uToken);

        return GraceJSONResult.ok(usersVO);
    }

    @ApiOperation(value = "logout - 用户退出的接口")
    @PostMapping("logout")
    public GraceJSONResult logout(@RequestParam String userId,
                                  HttpServletRequest request) throws Exception {
        // 后端只需要清除用户的token信息即可，前端也需要清除，清楚本地app中用户信息和token会话信息
        redis.del(REDIS_USER_TOKEN + ":" + userId);

        return GraceJSONResult.ok();
    }

    @ApiOperation(value = "password - 用户密码登录的接口")
    @PostMapping("passwordLogin")
    public GraceJSONResult passwordLogin(@Valid @RequestBody PasswordLoginBo passwordLoginBo) throws Exception{
        String mobile = passwordLoginBo.getMobile();
        String password = passwordLoginBo.getPassword();
        // 1. 判断手机号和密码是否为空
        if (StringUtils.isEmpty(mobile) || StringUtils.isEmpty(password)) {
            return GraceJSONResult.errorCustom(ResponseStatusEnum.MOBILE_OR_PASSWORD_NULL);
        }
        // 2. 查询数据库，判断用户是否存在
        Users user = userService.queryMobileIsExist(mobile);
        if (user == null) {
            return GraceJSONResult.errorCustom(ResponseStatusEnum.MOBILE_NOT_EXIST_ERROR);
        }
        // 3. 验证密码是否正确
        if (!user.getPassword().equals(password)) {
            return GraceJSONResult.errorCustom(ResponseStatusEnum.PASSWORD_ERROR);
        }
        // 4. 如果密码正确，生成用户会话token
        String userToken = userService.generateUserToken(user.getId());
        // 5. 返回用户信息，包含token令牌
        UsersVO usersVO = new UsersVO();
        BeanUtils.copyProperties(user, usersVO);
        usersVO.setUserToken(userToken);

        return GraceJSONResult.ok(usersVO);
    }


}

package com.tanz.controller;

import com.tanz.base.BaseInfoProperties;
import com.tanz.grace.result.GraceJSONResult;
import com.tanz.grace.result.ResponseStatusEnum;
import com.tanz.pojo.Users;
import com.tanz.service.FansService;
import com.tanz.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.models.auth.In;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Slf4j
@Api(tags = "FansController 粉丝相关业务功能的接口")
@RequestMapping("fans")
@RestController
public class FansController extends BaseInfoProperties {

    @Autowired
    private UserService userService;

    @Autowired
    private FansService fansService;

    @ApiOperation(value = "follow - 点击关注-博主主页的接口")
    @PostMapping("follow")
    public GraceJSONResult follow(@RequestParam String myId,
                                  @RequestParam String vlogerId){
        // 判断两个id不能为空
        if (StringUtils.isBlank(myId) || StringUtils.isBlank(vlogerId)){
            return GraceJSONResult.errorCustom(ResponseStatusEnum.SYSTEM_ERROR);
        }
        //判断当前用户，自己不能关注自己
        if (myId.equalsIgnoreCase(vlogerId)){
            return GraceJSONResult.errorCustom(ResponseStatusEnum.SYSTEM_RESPONSE_NO_INFO);
        }
        // 判断两个id对应的用户是否存在
        Users vloger = userService.getUser(vlogerId);
        Users myInfo = userService.getUser(myId);
        if (myInfo == null || vloger == null){
            return GraceJSONResult.errorCustom(ResponseStatusEnum.SYSTEM_RESPONSE_NO_INFO);
        }
        // 保存粉丝关系到数据库
        fansService.doFollow(myId, vlogerId);

        // 博主的粉丝+1，我的关注+1
        redis.increment(REDIS_MY_FOLLOWS_COUNTS + ":" + myId, 1);
        redis.increment(REDIS_MY_FANS_COUNTS + ":" + vlogerId, 1);

        // 我和博主的关联关系，依赖redis，不存到储数据库——避免mysql的性能瓶颈
        redis.set(REDIS_FANS_AND_VLOGGER_RELATIONSHIP + ":" + myId + ":" + vlogerId, "1");

        return GraceJSONResult.ok();
    }

    @ApiOperation(value = "cancel - 取消关注-博主主页的接口")
    @PostMapping("cancel")
    public GraceJSONResult cancel(@RequestParam String myId,
                                  @RequestParam String vlogerId){
        // 删除粉丝关系到数据库
        fansService.doCancel(myId, vlogerId);

        // 博主的粉丝-1，我的关注-1
        redis.decrement(REDIS_MY_FOLLOWS_COUNTS + ":" + myId, 1);
        redis.decrement(REDIS_MY_FANS_COUNTS + ":" + vlogerId, 1);

        // 我和博主的关联关系，依赖redis，不存到储数据库——避免mysql的性能瓶颈
        redis.del(REDIS_FANS_AND_VLOGGER_RELATIONSHIP + ":" + myId + ":" + vlogerId);

        return GraceJSONResult.ok();
    }

    @ApiOperation(value = "queryDoIFollowVloger - 判断用户是否关注博主-主页为已关注的接口")
    @GetMapping("queryDoIFollowVloger")
    public GraceJSONResult queryDoIFollowVloger(@RequestParam String myId,
                                                @RequestParam String vlogerId) {
        return GraceJSONResult.ok(fansService.queryDoIFollowVloger(myId, vlogerId));
    }

    @ApiOperation(value = "queryMyFollows - 我的个人关注列表接口")
    @GetMapping("queryMyFollows")
    public GraceJSONResult queryMyFollows(@RequestParam String myId,
                                          @RequestParam Integer page,
                                          @RequestParam Integer pageSize) {
        return GraceJSONResult.ok(fansService.queryMyFollows(myId, page, pageSize));
    }

    @ApiOperation(value = "queryMyFans - 我的个人粉丝列表接口")
    @GetMapping("queryMyFans")
    public GraceJSONResult queryMyFans(@RequestParam String myId,
                                       @RequestParam Integer page,
                                       @RequestParam Integer pageSize) {
        return GraceJSONResult.ok(fansService.queryMyFans(myId, page, pageSize));
    }



}

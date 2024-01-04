package com.tanz.service.impl;

import com.tanz.bo.UpdatedUserBO;
import com.tanz.enums.Sex;
import com.tanz.enums.UserInfoModifyType;
import com.tanz.enums.YesOrNo;
import com.tanz.exceptions.GraceException;
import com.tanz.grace.result.ResponseStatusEnum;
import com.tanz.mapper.UsersMapper;
import com.tanz.pojo.Users;
import com.tanz.service.UserService;
import com.tanz.utils.DateUtil;
import com.tanz.utils.DesensitizationUtil;
import org.n3r.idworker.Sid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tk.mybatis.mapper.entity.Example;

import java.util.Date;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UsersMapper usersMapper;

    @Autowired
    private Sid sid;
    private static final String USER_FACE1 = "http://47.98.124.227:9000/tanz/w1.jpg";
    private static final String USER_PASSWORD = "123456";  // 设置默认密码

    @Override
    public Users queryMobileIsExist(String mobile) {  //  手机号是否存在
        Example userExample = new Example(Users.class);
        Example.Criteria criteria = userExample.createCriteria();
        criteria.andEqualTo("mobile",mobile);
        Users user = usersMapper.selectOneByExample(userExample);
        return user;
    }

    @Transactional
    @Override
    public Users createUser(String mobile) {
        //获得全局唯一主键
        String userId = sid.nextShort();

        Users user = new Users();
        user.setId(userId);

        user.setMobile(mobile);
        user.setNickname("用户：" + DesensitizationUtil.commonDisplay(mobile));
        user.setUliveNum("用户：" + DesensitizationUtil.commonDisplay(mobile));
        user.setFace(USER_FACE1);

        user.setBirthday(DateUtil.stringToDate("2000-01-01"));
        user.setSex(Sex.secret.type);

        user.setCountry("中国"); // 依次为国家、省份、区域
        user.setProvince("");
        user.setCity("");
        user.setDistrict("");
        user.setDescription("这家伙很懒，什么都没留下~");
        user.setCanUliveNumBeUpdated(YesOrNo.YES.type);

        user.setCreatedTime(new Date());  // 用户的创建时间
        user.setUpdatedTime(new Date());  // 用户的更新时间
        user.setPassword(USER_PASSWORD);
        usersMapper.insert(user);

        return user;
    }

    @Override
    public Users getUser(String userId) {

        return usersMapper.selectByPrimaryKey(userId);

    }

    @Transactional
    @Override
    public Users updateUserInfo(UpdatedUserBO updatedUserBO) {
        Users pendingUser = new Users();
        BeanUtils.copyProperties(updatedUserBO, pendingUser);
        Integer result = usersMapper.updateByPrimaryKeySelective(pendingUser);
        if(result != 1){
            GraceException.display(ResponseStatusEnum.USER_UPDATE_ERROR);
        }
        return getUser(updatedUserBO.getId());
    }

    @Transactional
    @Override
    public Users updateUserInfo(UpdatedUserBO updatedUserBO, Integer type) {
        Example example = new Example(Users.class);
        Example.Criteria criteria = example.createCriteria();
        if (type == UserInfoModifyType.NICKNAME.type){
            criteria.andEqualTo("nickname", updatedUserBO.getNickname());
            Users users = usersMapper.selectOneByExample(example);
            if (users != null){
                GraceException.display(ResponseStatusEnum.USER_INFO_UPDATED_NICKNAME_EXIST_ERROR);
            }
        }
        if (type == UserInfoModifyType.ULIVENUM.type){
            criteria.andEqualTo("uliveNum", updatedUserBO.getUliveNum());
            Users users = usersMapper.selectOneByExample(example);
            if (users != null){
                GraceException.display(ResponseStatusEnum.USER_INFO_UPDATED_NICKNAME_EXIST_ERROR);
            }
            Users tempUser = getUser(updatedUserBO.getId());
            if (tempUser.getCanUliveNumBeUpdated() == YesOrNo.NO.type){
                GraceException.display(ResponseStatusEnum.USER_INFO_CANT_UPDATED_ULIVENUM_ERROR);
            }
            updatedUserBO.setCanUliveNumBeUpdated(YesOrNo.NO.type);
        }
        return updateUserInfo(updatedUserBO);
    }

    @Override
    public String generateUserToken(String userId) {
        return UUID.randomUUID().toString();
    }

}

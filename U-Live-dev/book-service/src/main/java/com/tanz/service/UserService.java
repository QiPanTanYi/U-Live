package com.tanz.service;

import com.tanz.bo.UpdatedUserBO;
import com.tanz.pojo.Users;

public interface UserService {
    // 判断用户是否存在，如果存在则返回用户信息
    public Users queryMobileIsExist(String mobile);

    // 创建用户信息并返回用户对象
    public Users createUser(String mobile);

    // 根据用户主键查询用户信息
    public Users getUser(String userId);

    // 用户信息修改
    public Users updateUserInfo (UpdatedUserBO updatedUserBO);
    // 用户信息修改
    public Users updateUserInfo (UpdatedUserBO updatedUserBO, Integer type);

    // 生成用户会话token
    public String generateUserToken(String userId);

}

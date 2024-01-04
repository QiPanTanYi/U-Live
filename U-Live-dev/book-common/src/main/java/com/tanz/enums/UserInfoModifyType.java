package com.tanz.enums;

import com.tanz.exceptions.GraceException;
import com.tanz.grace.result.ResponseStatusEnum;

/**
 * @Desc: 修改用户信息类型 枚举
 */
public enum UserInfoModifyType {
    NICKNAME(1, "昵称"),
    ULIVENUM(2, "游Live号"),
    SEX(3, "性别"),
    BIRTHDAY(4, "生日"),
    LOCATION(5, "所在地"),
    DESC(6, "简介");

    public final Integer type;
    public final String value;

    UserInfoModifyType(Integer type, String value) {
        this.type = type;
        this.value = value;
    }

    public static void checkUserInfoTypeIsRight(Integer type) {
        if (type != UserInfoModifyType.NICKNAME.type &&
                type != UserInfoModifyType.ULIVENUM.type &&
                type != UserInfoModifyType.SEX.type &&
                type != UserInfoModifyType.BIRTHDAY.type &&
                type != UserInfoModifyType.LOCATION.type &&
                type != UserInfoModifyType.DESC.type) {
            GraceException.display(ResponseStatusEnum.USER_INFO_UPDATED_ERROR);
        }
    }
}

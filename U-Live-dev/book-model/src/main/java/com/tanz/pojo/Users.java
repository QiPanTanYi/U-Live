package com.tanz.pojo;

import javax.persistence.Column;
import javax.persistence.Id;
import java.util.Date;

public class Users {
    @Id
    private String id;

    /**
     * 手机号
     */
    private String mobile;

    /**
     * 用户昵称
     */
    private String nickname;

    /**
     * 游Live号,用户唯一标识,有限制修改次数
     */
    @Column(name = "ulive_num")
    private String uliveNum;

    /**
     * 头像
     */
    private String face;

    /**
     * 性别 1:男  0:女  2:保密
     */
    private Integer sex;

    /**
     * 生日
     */
    private Date birthday;

    /**
     * 国家
     */
    private String country;

    /**
     * 省份
     */
    private String province;

    /**
     * 城市
     */
    private String city;

    /**
     * 区县
     */
    private String district;

    /**
     * 简介
     */
    private String description;

    /**
     * 个人介绍的背景图
     */
    @Column(name = "bg_img")
    private String bgImg;

    /**
     * 游Live号能否被修改，1：默认，可以修改；0，无法修改
     */
    @Column(name = "can_ulive_num_be_updated")
    private Integer canUliveNumBeUpdated;

    /**
     * 创建时间 创建时间
     */
    @Column(name = "created_time")
    private Date createdTime;

    /**
     * 更新时间 更新时间
     */
    @Column(name = "updated_time")
    private Date updatedTime;

    /**
     * 密码
     */
    @Column(name = "password")
    private String password;

    /**
     * @return password
     */
    public String getPassword() {
        return password;
    }

    /**
     * 密码
     *
     * @param password 密码
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * @return id
     */
    public String getId() {
        return id;
    }

    /**
     * @param id
     */
    public void setId(String id) {
        this.id = id;
    }

    /**
     * 获取手机号
     *
     * @return mobile - 手机号
     */
    public String getMobile() {
        return mobile;
    }

    /**
     * 设置手机号
     *
     * @param mobile 手机号
     */
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    /**
     * 获取昵称
     *
     * @return nickname - 用户昵称
     */
    public String getNickname() {
        return nickname;
    }

    /**
     * 设置昵称
     *
     * @param nickname 用户昵称
     */
    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    /**
     * 游Live号,用户唯一标识,有限制修改次数
     *
     * @return ulive_num - 游Live号,用户唯一标识,有限制修改次数
     */
    public String getUliveNum() {
        return uliveNum;
    }

    /**
     * 游Live号,用户唯一标识,有限制修改次数
     *
     * @param uliveNum 游Live号,用户唯一标识,有限制修改次数
     */
    public void setUliveNum(String uliveNum) {
        this.uliveNum = uliveNum;
    }

    /**
     * 获取头像
     *
     * @return face - 头像
     */
    public String getFace() {
        return face;
    }

    /**
     * 设置头像
     *
     * @param face 头像
     */
    public void setFace(String face) {
        this.face = face;
    }

    /**
     * 获取性别 1:男  0:女  2:保密
     *
     * @return sex - 性别 1:男  0:女  2:保密
     */
    public Integer getSex() {
        return sex;
    }

    /**
     * 设置性别 1:男  0:女  2:保密
     *
     * @param sex 性别 1:男  0:女  2:保密
     */
    public void setSex(Integer sex) {
        this.sex = sex;
    }

    /**
     * 获取生日
     *
     * @return birthday - 生日
     */
    public Date getBirthday() {
        return birthday;
    }

    /**
     * 设置生日
     *
     * @param birthday 生日
     */
    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    /**
     * 获取国家
     *
     * @return country - 国家
     */
    public String getCountry() {
        return country;
    }

    /**
     * 设置国家
     *
     * @param country 国家
     */
    public void setCountry(String country) {
        this.country = country;
    }

    /**
     * 获取省份
     *
     * @return province - 省份
     */
    public String getProvince() {
        return province;
    }

    /**
     * 设置省份
     *
     * @param province 省份
     */
    public void setProvince(String province) {
        this.province = province;
    }

    /**
     * 获取城市
     *
     * @return city - 城市
     */
    public String getCity() {
        return city;
    }

    /**
     * 设置城市
     *
     * @param city 城市
     */
    public void setCity(String city) {
        this.city = city;
    }

    /**
     * 获取区县
     *
     * @return district - 区县
     */
    public String getDistrict() {
        return district;
    }

    /**
     * 设置区县
     *
     * @param district 区县
     */
    public void setDistrict(String district) {
        this.district = district;
    }

    /**
     * 获取简介
     *
     * @return description - 简介
     */
    public String getDescription() {
        return description;
    }

    /**
     * 设置简介
     *
     * @param description 简介
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * 获取个人介绍的背景图
     *
     * @return bg_img - 个人介绍的背景图
     */
    public String getBgImg() {
        return bgImg;
    }

    /**
     * 设置个人介绍的背景图
     *
     * @param bgImg 个人介绍的背景图
     */
    public void setBgImg(String bgImg) {
        this.bgImg = bgImg;
    }

    /**
     * 游Live号能否被修改，1：默认，可以修改；0，无法修改
     *
     * @return can_ulive_num_be_updated - 游Live号能否被修改，1：默认，可以修改；0，无法修改
     */
    public Integer getCanUliveNumBeUpdated() {
        return canUliveNumBeUpdated;
    }

    /**
     * 游Live号能否被修改，1：默认，可以修改；0，无法修改
     *
     * @param canUliveNumBeUpdated 游Live号能否被修改，1：默认，可以修改；0，无法修改
     */
    public void setCanUliveNumBeUpdated(Integer canUliveNumBeUpdated) {
        this.canUliveNumBeUpdated = canUliveNumBeUpdated;
    }

    /**
     * 获取创建时间 创建时间
     *
     * @return created_time - 创建时间 创建时间
     */
    public Date getCreatedTime() {
        return createdTime;
    }

    /**
     * 设置创建时间 创建时间
     *
     * @param createdTime 创建时间 创建时间
     */
    public void setCreatedTime(Date createdTime) {
        this.createdTime = createdTime;
    }

    /**
     * 获取更新时间 更新时间
     *
     * @return updated_time - 更新时间 更新时间
     */
    public Date getUpdatedTime() {
        return updatedTime;
    }

    /**
     * 设置更新时间 更新时间
     *
     * @param updatedTime 更新时间 更新时间
     */
    public void setUpdatedTime(Date updatedTime) {
        this.updatedTime = updatedTime;
    }


}
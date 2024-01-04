package com.tanz.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UsersVO {
    private String id;
    private String mobile;
    private String nickname;
    private String uliveNum;
    private String face;
    private Integer sex;
    private Date birthday;
    private String country;
    private String province;
    private String city;
    private String district;
    private String description;
    private String bgImg;
    private Integer canUliveNumBeUpdated;
    private Date createdTime;
    private Date updatedTime;

    private String userToken;       // 用户token，传递给前端

    private Integer myFollowsCounts;   // 我关注的总数
    private Integer myFansCounts;   // 我被关注（粉丝）的总数
//    private Integer myLikedVlogCounts;   // 所有喜欢我视频的总数
    private Integer totalLikeMeCounts;      // 所有喜欢我的总数

}
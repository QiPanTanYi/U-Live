package com.tanz.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class IndexVlogVO {
    private String vlogId;
    private String vlogerId;
    private String vlogerFace;
    private String vlogerName;
    private String content;
    private String url;
    private String cover;
    private Integer width;
    private Integer height;
    private Integer likeCounts;
    private Integer commentsCounts;
    private Integer isPrivate;
    private boolean isPlay = false;     // 是否播放（默认不播放）
    private boolean doIFollowVloger = false;    // 是否关注该up主（默认不关注）
    private boolean doILikeThisVlog = false;    // 是否喜欢该视频（默认不点赞）
}
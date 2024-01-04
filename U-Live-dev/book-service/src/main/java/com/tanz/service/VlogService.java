package com.tanz.service;

import com.tanz.bo.VlogBO;
import com.tanz.pojo.Vlog;
import com.tanz.utils.PagedGridResult;
import com.tanz.vo.IndexVlogVO;

public interface VlogService {

    // 新增vlog视频
    public void createVlog(VlogBO vlogBO);

    // 查询首页/搜索的vlog列表
    public PagedGridResult getIndexVlogList(String userId, String search, Integer page, Integer pageSize);

    // 根据视频组件查询vlog
    public IndexVlogVO getVlogDetailById(String userId, String vlogId);

    // 用户把视频设置为公开/私密的视频
    public void changeToPrivateOrPublid(String userId, String vlogId, Integer yesOrNo);

    // 查询用户公开/私密的视频列表
    public PagedGridResult queryMyVlogList(String userId, Integer page, Integer pageSize, Integer yesOrNo);

    // 用户点赞/喜欢的视频
    public void userLikeVlog(String userId, String vlogId);

    // 用户取消点赞/喜欢的视频
    public void userUnLikeVlog(String userId, String vlogId);

    // 获得用户点赞视频的总数
    public Integer getVlogBeLikedCounts(String vlogId);

    // 查询用户点赞过的视频
    public PagedGridResult getMyLikedVlogList(String userId, Integer page, Integer pageSize);

    // 查询用户关注的博主发布的短视频列表
    public PagedGridResult getMyFollowVlogList(String myId, Integer page, Integer pageSize);

    // 查询朋友发布的短视频列表
    public PagedGridResult getMyFriendVlogList(String myId, Integer page, Integer pageSize);

    //根据主键查询vlog
    public Vlog getVlog(String id);

    // 将counts刷入数据库（从Redis到Nacos再到MySQL）
    public void flushCounts(String vlogId, Integer counts);
}

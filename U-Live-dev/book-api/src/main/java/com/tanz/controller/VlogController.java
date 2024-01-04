package com.tanz.controller;

import com.tanz.base.BaseInfoProperties;
import com.tanz.bo.VlogBO;
import com.tanz.enums.YesOrNo;
import com.tanz.grace.result.GraceJSONResult;
import com.tanz.service.VlogService;
import com.tanz.utils.PagedGridResult;
import com.tanz.vo.IndexVlogVO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@Slf4j
@Api(tags = "VlogController 短视频业务接口")
@RequestMapping("vlog")
@RestController
@RefreshScope
public class VlogController extends BaseInfoProperties {
    @Autowired
    private VlogService vlogService;
    @ApiOperation(value = "publish - 发布视频的接口")
    @PostMapping("publish")
    public GraceJSONResult publish(@RequestBody VlogBO vlogBO) throws Exception {
        vlogService.createVlog(vlogBO);
        return GraceJSONResult.ok();
    }

    @ApiOperation(value = "indexList - 搜索框/首页视频分页的接口")
    @GetMapping("indexList")
    public GraceJSONResult indexList(@RequestParam(defaultValue = "") String userId,
                                     @RequestParam(defaultValue = "") String search,
                                     @RequestParam Integer page,
                                     @RequestParam Integer pageSize) throws Exception {
        if (page == null){
            page = COMMON_START_PAGE;
        }
        if (pageSize == null){
            pageSize = COMMON_PAGE_SIZE;
        }

        PagedGridResult gridResult = vlogService.getIndexVlogList(userId, search, page, pageSize);
        return GraceJSONResult.ok(gridResult);
    }

    @ApiOperation(value = "detail - 搜索后显示视频的接口")
    @GetMapping("detail")
    public GraceJSONResult detail(@RequestParam(defaultValue = "") String userId,
                                  @RequestParam String vlogId){
        IndexVlogVO vlogVO = vlogService.getVlogDetailById(userId, vlogId);
        return GraceJSONResult.ok(vlogVO);
    }

    @ApiOperation(value = "changeToPrivate - 设定视频隐私为私密的接口")
    @PostMapping("changeToPrivate")
    public GraceJSONResult changeToPrivate(@RequestParam String userId,
                                          @RequestParam String vlogId){
        vlogService.changeToPrivateOrPublid(userId, vlogId, YesOrNo.YES.type);
        return GraceJSONResult.ok();
    }

    @ApiOperation(value = "changeToPublic - 设定视频隐私为公开的接口")
    @PostMapping("changeToPublic")
    public GraceJSONResult changeToPublic(@RequestParam String userId,
                                          @RequestParam String vlogId){
        vlogService.changeToPrivateOrPublid(userId, vlogId, YesOrNo.NO.type);
        return GraceJSONResult.ok();
    }

    @ApiOperation(value = "myPublicList - 个人公开视频的接口")
    @GetMapping("myPublicList")
    public GraceJSONResult myPublicList(@RequestParam String userId,
                                     @RequestParam Integer page,
                                     @RequestParam Integer pageSize) throws Exception {
        if (page == null){
            page = COMMON_START_PAGE;
        }
        if (pageSize == null){
            pageSize = COMMON_PAGE_SIZE;
        }

        PagedGridResult gridResult = vlogService.queryMyVlogList(userId, page,
                                        pageSize, YesOrNo.NO.type);

        return GraceJSONResult.ok(gridResult);
    }

    @ApiOperation(value = "myPrivateList - 个人私密视频的接口")
    @GetMapping("myPrivateList")
    public GraceJSONResult myPrivateList(@RequestParam String userId,
                                        @RequestParam Integer page,
                                        @RequestParam Integer pageSize) throws Exception {
        if (page == null){
            page = COMMON_START_PAGE;
        }
        if (pageSize == null){
            pageSize = COMMON_PAGE_SIZE;
        }

        PagedGridResult gridResult = vlogService.queryMyVlogList(userId, page,
                pageSize, YesOrNo.YES.type);

        return GraceJSONResult.ok(gridResult);
    }

    @Value("${nacos.counts}")
    private Integer nacosCounts;

    @ApiOperation(value = "like - 点击点赞的接口")
    @PostMapping("like")
    public GraceJSONResult like(@RequestParam String userId,
                                @RequestParam String vlogerId,
                                @RequestParam String vlogId) {
        // 我点赞的视频，关联关系保存到数据库
        vlogService.userLikeVlog(userId,vlogId);
        // 点赞后，视频和博主的获赞都会 +1
        redis.increment(REDIS_VLOGER_BE_LIKED_COUNTS + ":" + vlogerId, 1);
        redis.increment(REDIS_VLOG_BE_LIKED_COUNTS + ":" + vlogId, 1);
        // 我点赞的视频，需要在redis中保存关联关系
        redis.set(REDIS_USER_LIKE_VLOG + ":" + userId + ":" + vlogId, "1");

        // 点赞完成后，获取当前在redis中的总数，同步阈值入库到MySQL
        String countsStr = redis.get(REDIS_VLOG_BE_LIKED_COUNTS + ":" + vlogId);
        log.info("======" + REDIS_VLOG_BE_LIKED_COUNTS + ":" + vlogId + "======");
        Integer counts = 0;
        if (StringUtils.isNotBlank(countsStr)) {
            counts = Integer.valueOf(countsStr);
            if (counts >= nacosCounts) {
                vlogService.flushCounts(vlogId, counts);
            }
        }

        return GraceJSONResult.ok();
    }

    @ApiOperation(value = "unlike - 点赞取消的接口")
    @PostMapping("unlike")
    public GraceJSONResult unlike(@RequestParam String userId,
                                @RequestParam String vlogerId,
                                @RequestParam String vlogId) {
        // fixme 记得增加注解
        // 我取消点赞的视频，删除关联关系
        vlogService.userUnLikeVlog(userId,vlogId);
        // 点赞后，视频和博主的获赞都会 +1
        redis.decrement(REDIS_VLOGER_BE_LIKED_COUNTS + ":" + vlogerId, 1);
        redis.decrement(REDIS_VLOG_BE_LIKED_COUNTS + ":" + vlogId, 1);
        // 我点赞的视频，需要在redis中保存关联关系
        redis.del(REDIS_USER_LIKE_VLOG + ":" + userId + ":" + vlogId);
        return GraceJSONResult.ok();
    }

    @ApiOperation(value = "totalLikedCounts - 视频页面点赞总数持久化的接口")
    @PostMapping("totalLikedCounts")
    public GraceJSONResult totalLikedCounts(@RequestParam String vlogId) {
        // 点击和取消赞后，会落实到mysql和redis
        return GraceJSONResult.ok(vlogService.getVlogBeLikedCounts(vlogId));
    }

    @ApiOperation(value = "myLikedList - 赞过的视频合集的接口")
    @GetMapping("myLikedList")
    public GraceJSONResult myLikedList(@RequestParam String userId,
                                       @RequestParam Integer page,
                                       @RequestParam Integer pageSize) {
        if (page == null){
            page = COMMON_START_PAGE;
        }
        if (pageSize == null) {
            pageSize = COMMON_PAGE_SIZE;
        }
        PagedGridResult gridResult = vlogService.getMyLikedVlogList(userId, page, pageSize);

        return GraceJSONResult.ok(gridResult);
    }

    @ApiOperation(value = "followList - 关注视频列表展示的接口")
    @GetMapping("followList")
    public GraceJSONResult followList(@RequestParam String myId,
                                      @RequestParam Integer page,
                                      @RequestParam Integer pageSize){
        if (page == null) {
            page = COMMON_START_PAGE;
        }
        if (pageSize == null){
            pageSize = COMMON_PAGE_SIZE;
        }
        PagedGridResult gridResult = vlogService.getMyFollowVlogList(myId, page, pageSize);
        return GraceJSONResult.ok(gridResult);
    }

    @ApiOperation(value = "friendList - 好友（互关）视频列表展示的接口")
    @GetMapping("friendList")
    public GraceJSONResult friendList(@RequestParam String myId,
                                      @RequestParam Integer page,
                                      @RequestParam Integer pageSize){
        if (page == null) {
            page = COMMON_START_PAGE;
        }
        if (pageSize == null){
            pageSize = COMMON_PAGE_SIZE;
        }
        PagedGridResult gridResult = vlogService.getMyFriendVlogList(myId, page, pageSize);
        return GraceJSONResult.ok(gridResult);
    }

}

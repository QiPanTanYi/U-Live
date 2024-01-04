package com.tanz.controller;

import com.tanz.base.BaseInfoProperties;
import com.tanz.base.RabbitMQConfig;
import com.tanz.bo.CommentBO;
import com.tanz.enums.MessageEnum;
import com.tanz.grace.result.GraceJSONResult;
import com.tanz.mo.MessageMO;
import com.tanz.pojo.Comment;
import com.tanz.pojo.Vlog;
import com.tanz.service.CommentService;
import com.tanz.service.MsgService;
import com.tanz.service.VlogService;
import com.tanz.utils.JsonUtils;
import com.tanz.vo.CommentVO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@Api(tags = "CommentController 评论模块的接口")
@RequestMapping("comment")
@RestController
public class CommentController extends BaseInfoProperties {

    @Autowired
    private CommentService commentService;

    @Autowired
    private MsgService msgService;

    @Autowired
    private VlogService vlogService;

    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    @Autowired
    public RabbitTemplate rabbitTemplate;

    @ApiOperation(value = "create - 发表评论的接口")
    @PostMapping("create")
    public GraceJSONResult create(@RequestBody @Valid CommentBO commentBO) throws Exception{
        CommentVO commentVO = commentService.createComment(commentBO);
        return GraceJSONResult.ok(commentVO);
    }

    @ApiOperation(value = "counts - 评论计数的接口")
    @GetMapping("counts")
    public GraceJSONResult counts(@RequestParam String vlogId) {

        String countsStr = redis.get(REDIS_VLOG_COMMENT_COUNTS + ":" + vlogId);
        if (StringUtils.isBlank(countsStr)) {
            countsStr = "0";
        }

        return GraceJSONResult.ok(Integer.valueOf(countsStr));
    }

    @ApiOperation(value = "list - 评论列表的接口")
    @GetMapping("list")
    public GraceJSONResult list(@RequestParam String vlogId,
                                @RequestParam(defaultValue = "") String userId,
                                @RequestParam Integer page,
                                @RequestParam Integer pageSize) {

        return GraceJSONResult.ok(
                commentService.queryVlogComments(vlogId, userId, page, pageSize));
    }

    @ApiOperation(value = "delete - 用户自删评论的接口")
    @DeleteMapping("delete")
    public GraceJSONResult delete(@RequestParam String commentUserId,
                                  @RequestParam String commentId,
                                  @RequestParam String vlogId) {
        commentService.deleteComment(commentUserId, commentId, vlogId);
        return GraceJSONResult.ok();
    }

    @ApiOperation(value = "like - 点赞评论的接口")
    @PostMapping("like")
    public GraceJSONResult like(@RequestParam String commentId,
                                @RequestParam String userId) {

        redis.incrementHash(REDIS_VLOG_COMMENT_LIKED_COUNTS, commentId, 1);
        redis.setHashValue(REDIS_USER_LIKE_COMMENT, userId + ":" + commentId, "1");

        // 系统消息：点赞评论
        Comment comment = commentService.getComment(commentId);
        Vlog vlog = vlogService.getVlog(comment.getVlogId());
        Map msgContent = new HashMap();
        msgContent.put("vlogId", vlog.getId());
        msgContent.put("vlogCover", vlog.getCover());
        msgContent.put("commentId", commentId);
        // MQ异步解耦
        MessageMO messageMO = new MessageMO();
        messageMO.setFromUserId(userId);
        messageMO.setToUserId(comment.getCommentUserId());
        messageMO.setMsgContent(msgContent);
        rabbitTemplate.convertAndSend(
                RabbitMQConfig.EXCHANGE_MSG,
                "sys.msg." + MessageEnum.LIKE_COMMENT.enValue,
                JsonUtils.objectToJson(messageMO));

        return GraceJSONResult.ok();
    }

    @ApiOperation(value = "unlike - 取消评论点赞的接口")
    @PostMapping("unlike")
    public GraceJSONResult unlike(@RequestParam String commentId,
                                  @RequestParam String userId) {

        redis.decrementHash(REDIS_VLOG_COMMENT_LIKED_COUNTS, commentId, 1);
        redis.hdel(REDIS_USER_LIKE_COMMENT, userId + ":" + commentId);

        return GraceJSONResult.ok();
    }
}

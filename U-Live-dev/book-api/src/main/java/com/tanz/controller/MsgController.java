package com.tanz.controller;

import com.tanz.base.BaseInfoProperties;
import com.tanz.grace.result.GraceJSONResult;
import com.tanz.mo.MessageMO;
import com.tanz.service.MsgService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@Api(tags = "MsgController 消息功能模块的接口")
@RequestMapping("msg")
@RestController
public class MsgController extends BaseInfoProperties {

    @Autowired
    private MsgService msgService;

    @ApiOperation(value = "list - 查询消息列表的接口")
    @GetMapping("list")
    public GraceJSONResult list(@RequestParam String userId,
                                @RequestParam Integer page,
                                @RequestParam Integer pageSize) {

        // mongodb 从0分页，区别于数据库
        if (page == null) {
            page = COMMON_START_PAGE_ZERO;
        }
        if (pageSize == null) {
            pageSize = COMMON_PAGE_SIZE;
        }

        List<MessageMO> list = msgService.queryList(userId, page, pageSize);

        return GraceJSONResult.ok(list);
    }
}

package com.tanz.mapper;

import com.tanz.my.mapper.MyMapper;
import com.tanz.pojo.Comment;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentMapper extends MyMapper<Comment> {
}
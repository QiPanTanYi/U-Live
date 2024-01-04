/*
 Navicat Premium Data Transfer

 Source Server         : .
 Source Server Type    : MySQL
 Source Server Version : 100313
 Source Host           : localhost:3306
 Source Schema         : aaa

 Target Server Type    : MySQL
 Target Server Version : 100313
 File Encoding         : 65001

 Date: 13/12/2023 10:32:53
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` varchar(24) NOT NULL,
  `vloger_id` varchar(24) NOT NULL COMMENT '评论的视频是哪个作者(vloger)的关联id',
  `father_comment_id` varchar(24) NOT NULL COMMENT '如果是回复留言，则本条为子留言，需要关联查询',
  `vlog_id` varchar(24) NOT NULL COMMENT '回复的那个视频id',
  `comment_user_id` varchar(24) NOT NULL COMMENT '发布留言的用户id',
  `content` varchar(128) NOT NULL COMMENT '留言内容',
  `like_counts` int(20) NOT NULL COMMENT '留言的点赞总数',
  `create_time` datetime NOT NULL COMMENT '留言时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='评论表';

-- ----------------------------
-- Records of comment
-- ----------------------------


-- ----------------------------
-- Table structure for fans
-- ----------------------------
DROP TABLE IF EXISTS `fans`;
CREATE TABLE `fans` (
  `id` varchar(24) NOT NULL,
  `vloger_id` varchar(24) NOT NULL COMMENT '作家用户id',
  `fan_id` varchar(24) NOT NULL COMMENT '粉丝用户id',
  `is_fan_friend_of_mine` int(1) NOT NULL COMMENT '粉丝是否是vloger的朋友,如果成为朋友,则本表的双方此字段都需要设置为1,如果有一人取关,则两边都需要设置为0',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `writer_id` (`vloger_id`,`fan_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='粉丝表';

-- ----------------------------
-- Records of fans
-- ----------------------------


-- ----------------------------
-- Table structure for my_liked_vlog
-- ----------------------------
DROP TABLE IF EXISTS `my_liked_vlog`;
CREATE TABLE `my_liked_vlog` (
  `id` varchar(24) NOT NULL,
  `user_id` varchar(24) NOT NULL COMMENT '用户id',
  `vlog_id` varchar(24) NOT NULL COMMENT '喜欢的短视频id',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `writer_id` (`user_id`,`vlog_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='点赞短视频关联表';

-- ----------------------------
-- Records of my_liked_vlog
-- ----------------------------


-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` varchar(24) NOT NULL,
  `mobile` varchar(32) NOT NULL COMMENT '手机号',
  `nickname` varchar(16) NOT NULL COMMENT '用户昵称',
  `ulive_num` varchar(16) NOT NULL COMMENT '游Live号,用户唯一标识,有限制修改次数',
  `face` varchar(128) NOT NULL COMMENT '头像',
  `sex` int(11) NOT NULL COMMENT '性别 1:男  0:女  2:保密',
  `birthday` date NOT NULL COMMENT '生日',
  `country` varchar(32) DEFAULT NULL COMMENT '国家',
  `province` varchar(32) DEFAULT NULL COMMENT '省份',
  `city` varchar(32) DEFAULT NULL COMMENT '城市',
  `district` varchar(32) DEFAULT NULL COMMENT '区县',
  `description` varchar(100) NOT NULL COMMENT '简介',
  `bg_img` varchar(255) DEFAULT NULL COMMENT '个人介绍的背景图',
  `can_ulive_num_be_updated` int(1) NOT NULL COMMENT '游Live号能否被修改,1:默认,可以修改;0,无法修改',
  `created_time` datetime NOT NULL COMMENT '创建时间 创建时间',
  `updated_time` datetime NOT NULL COMMENT '更新时间 更新时间',
  `password` varchar(32) NOT NULL COMMENT '密码',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `mobile` (`mobile`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户表';

-- ----------------------------
-- Records of users
-- ----------------------------


-- ----------------------------
-- Table structure for vlog
-- ----------------------------
DROP TABLE IF EXISTS `vlog`;
CREATE TABLE `vlog` (
  `id` varchar(24) NOT NULL,
  `vloger_id` varchar(24) NOT NULL COMMENT '对应用户表id,vlog视频发布者',
  `url` varchar(255) NOT NULL COMMENT '视频播放地址',
  `cover` varchar(255) NOT NULL COMMENT '视频封面',
  `title` varchar(128) DEFAULT NULL COMMENT '视频标题，可以为空',
  `width` int(6) NOT NULL COMMENT '视频width',
  `height` int(6) NOT NULL COMMENT '视频height',
  `like_counts` int(12) NOT NULL COMMENT '点赞总数',
  `comments_counts` int(12) NOT NULL COMMENT '评论总数',
  `is_private` int(1) NOT NULL COMMENT '是否私密，用户可以设置私密，如此可以不公开给比人看',
  `created_time` datetime NOT NULL COMMENT '创建时间 创建时间',
  `updated_time` datetime NOT NULL COMMENT '更新时间 更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='短视频表';

-- ----------------------------
-- Records of vlog
-- ----------------------------


SET FOREIGN_KEY_CHECKS = 1;

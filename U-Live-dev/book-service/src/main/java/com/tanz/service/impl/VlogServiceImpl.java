package com.tanz.service.impl;


import com.github.pagehelper.PageHelper;
import com.tanz.base.BaseInfoProperties;
import com.tanz.base.RabbitMQConfig;
import com.tanz.bo.VlogBO;
import com.tanz.enums.MessageEnum;
import com.tanz.enums.YesOrNo;
import com.tanz.mapper.MyLikedVlogMapper;
import com.tanz.mapper.VlogMapper;
import com.tanz.mapper.VlogMapperCustom;
import com.tanz.mo.MessageMO;
import com.tanz.pojo.MyLikedVlog;
import com.tanz.pojo.Vlog;
import com.tanz.service.FansService;
import com.tanz.service.VlogService;
import com.tanz.utils.JsonUtils;
import com.tanz.utils.PagedGridResult;
import com.tanz.vo.IndexVlogVO;
import org.apache.commons.lang3.StringUtils;
import org.n3r.idworker.Sid;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tk.mybatis.mapper.entity.Example;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class VlogServiceImpl extends BaseInfoProperties implements VlogService {

    @Autowired
    private VlogMapper vlogMapper;

    @Autowired
    private VlogMapperCustom vlogMapperCustom;

    @Autowired
    private MyLikedVlogMapper myLikedVlogMapper;

    @Autowired
    private MsgServiceImpl msgService;

    @Autowired
    private FansService fansService;

    @Autowired
    private Sid sid;

    @Transactional
    @Override
    public void createVlog(VlogBO vlogBO) {
        String vid = sid.nextShort();
        Vlog vlog = new Vlog();
        BeanUtils.copyProperties(vlogBO, vlog);

        vlog.setId(vid);        // vlog的id
        vlog.setLikeCounts(0);      // 点赞数默认为0
        vlog.setCommentsCounts(0);      // 评论数默认为0
        vlog.setIsPrivate(YesOrNo.NO.type);     // 视频是否私有（NO代表公开）
        vlog.setCreatedTime(new Date());    // 视频创建时间
        vlog.setUpdatedTime(new Date());    // 视频更新时间

        vlogMapper.insert(vlog);
    }

    @Override
    public PagedGridResult getIndexVlogList(String userId,
                                            String search,
                                            Integer page,
                                            Integer pageSize) {
        PageHelper.startPage(page, pageSize);
        Map<String, Object> map = new HashMap<>();
        if (StringUtils.isNotBlank(search)){
            map.put("search", search);
        }
        List<IndexVlogVO> list = vlogMapperCustom.getIndexVlogList(map);
        // 判断用户有没有点赞过
        for (IndexVlogVO v : list){
            String vlogerId = v.getVlogerId();
            String vlogId = v.getVlogId();
            // 判断当前用户是否点赞过该视频
            if (StringUtils.isNotBlank(userId)){
                // 用户是否关注该博主
                boolean doIFollowVloger = fansService.queryDoIFollowVloger(userId, vlogerId);
                v.setDoIFollowVloger(doIFollowVloger);
                // 判断当前用户是否点赞过视频
                v.setDoILikeThisVlog(doILikeVlog(userId, vlogId));
            }
            // 获取当前视频被点赞过的总数
            v.setLikeCounts(getVlogBeLikedCounts(vlogId));
        }
        return setterPagedGrid(list, page);
    }

    private boolean doILikeVlog(String myId, String vlogId) {
        String doILike = redis.get(REDIS_USER_LIKE_VLOG + ":" + myId + ":" + vlogId);
        boolean isLike = false;
        if (StringUtils.isNotBlank(doILike) && doILike.equalsIgnoreCase("1")){
            isLike = true;
        }
        return isLike;
    }
    private IndexVlogVO setterVo(IndexVlogVO v, String userId){
        // 判断用户有没有点赞过
        String vlogerId = v.getVlogerId();
        String vlogId = v.getVlogId();
        // 用户是否关注该博主
        if (StringUtils.isNotBlank(userId)) {
            boolean doIFollowVloger = fansService.queryDoIFollowVloger(userId, vlogerId);
            v.setDoIFollowVloger(doIFollowVloger);
            // 判断当前用户是否点赞过视频
            v.setDoILikeThisVlog(doILikeVlog(userId, vlogId));
        }
        // 获取当前视频被点赞过的总数
        v.setLikeCounts(getVlogBeLikedCounts(vlogId));
        return v;
    }


    @Override
    public Integer getVlogBeLikedCounts(String vlogId){
        String countsStr = redis.get(REDIS_VLOG_BE_LIKED_COUNTS + ":" + vlogId);
        if (StringUtils.isBlank(countsStr)){
            countsStr = "0";
        }
        return Integer.valueOf(countsStr);
    }

    @Override
    public IndexVlogVO getVlogDetailById(String userId, String vlogId) {
        Map<String, Object> map = new HashMap<>();
        map.put("vlogId", vlogId);

        List<IndexVlogVO> list = vlogMapperCustom.getVlogDetailById(map);
        if (list != null && list.size() > 0 && !list.isEmpty()){
            IndexVlogVO vlogVO = list.get(0);
            return setterVo(vlogVO, userId);

        }

        return null;
    }

    @Transactional
    @Override
    public void changeToPrivateOrPublid(String userId,
                                        String vlogId,
                                        Integer yesOrNo) {

        Example example = new Example(Vlog.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("id", vlogId);
        criteria.andEqualTo("vlogerId", userId);

        Vlog pendingVlog = new Vlog();
        pendingVlog.setIsPrivate(yesOrNo);
        vlogMapper.updateByExampleSelective(pendingVlog, example);
    }

    @Override
    public PagedGridResult queryMyVlogList(String userId,
                                           Integer page,
                                           Integer pageSize,
                                           Integer yesOrNo) {
        Example example = new Example(Vlog.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("vlogerId", userId);
        criteria.andEqualTo("isPrivate", yesOrNo);

        PageHelper.startPage(page, pageSize);
        List<Vlog> list = vlogMapper.selectByExample(example);
        return setterPagedGrid(list, page);
    }

    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    @Autowired
    public RabbitTemplate rabbitTemplate;

    @Transactional
    @Override
    public void userLikeVlog(String userId, String vlogId) {
        String rid = sid.nextShort();
        MyLikedVlog likedVlog = new MyLikedVlog();
        likedVlog.setId(rid);
        likedVlog.setVlogId(vlogId);
        likedVlog.setUserId(userId);

        myLikedVlogMapper.insert(likedVlog);

        // 系统消息：点赞短视频
        Vlog vlog = this.getVlog(vlogId);
        Map msgContent = new HashMap();
        msgContent.put("vlogId", vlogId);
        msgContent.put("vlogCover", vlog.getCover());
//        msgService.createMsg(userId,
//                            vlog.getVlogerId(),
//                            MessageEnum.LIKE_VLOG.type,
//                            msgContent);
        // MQ异步解耦
        MessageMO messageMO = new MessageMO();
        messageMO.setFromUserId(userId);
        messageMO.setToUserId(vlog.getVlogerId());
        messageMO.setMsgContent(msgContent);
        rabbitTemplate.convertAndSend(
                RabbitMQConfig.EXCHANGE_MSG,
                "sys.msg." + MessageEnum.LIKE_VLOG.enValue,
                JsonUtils.objectToJson(messageMO));
    }

    @Transactional
    @Override
    public void userUnLikeVlog(String userId, String vlogId) {
        MyLikedVlog likedVlog = new MyLikedVlog();
        likedVlog.setVlogId(vlogId);
        likedVlog.setUserId(userId);
        myLikedVlogMapper.delete(likedVlog);
    }

    @Override
    public PagedGridResult getMyLikedVlogList(String userId,
                                              Integer page,
                                              Integer pageSize) {
        PageHelper.startPage(page, pageSize);
        Map<String, Object> map = new HashMap<>();
        map.put("userId", userId);
        List<IndexVlogVO> list = vlogMapperCustom.getMyLikedVlogList(map);
        return setterPagedGrid(list, page);
    }

    @Override
    public PagedGridResult getMyFollowVlogList(String myId,
                                               Integer page,
                                               Integer pageSize) {
        PageHelper.startPage(page, pageSize);
        Map<String, Object> map = new HashMap<>();
        map.put("myId", myId);
        List<IndexVlogVO> list = vlogMapperCustom.getMyFollowVlogList(map);

        for (IndexVlogVO v : list){
            String vlogerId = v.getVlogerId();
            String vlogId = v.getVlogId();

            if (StringUtils.isNotBlank(myId)){
                // 用户必须关注该博主，否则此页面无信息
                v.setDoIFollowVloger(true);
                // 判断当前用户是否点赞过该视频
                v.setDoILikeThisVlog(doILikeVlog(myId, vlogId));
            }
            // 获得当前视频被点赞过的总数
            v.setLikeCounts(getVlogBeLikedCounts(vlogId));
        }
        return setterPagedGrid(list, page);
    }

    @Override
    public PagedGridResult getMyFriendVlogList(String myId,
                                               Integer page,
                                               Integer pageSize) {
        PageHelper.startPage(page, pageSize);
        Map<String, Object> map = new HashMap<>();
        map.put("myId", myId);
        List<IndexVlogVO> list = vlogMapperCustom.getMyFriendVlogList(map);

        for (IndexVlogVO v : list){
            String vlogerId = v.getVlogerId();
            String vlogId = v.getVlogId();

            if (StringUtils.isNotBlank(myId)){
                // 用户必须关注该博主，否则此页面无信息
                v.setDoIFollowVloger(true);
                // 判断当前用户是否点赞过该视频
                v.setDoILikeThisVlog(doILikeVlog(myId, vlogId));
            }
            // 获得当前视频被点赞过的总数
            v.setLikeCounts(getVlogBeLikedCounts(vlogId));
        }
        return setterPagedGrid(list, page);
    }

    @Override
    public Vlog getVlog(String id) {
        return vlogMapper.selectByPrimaryKey(id);
    }

    @Transactional
    @Override
    public void flushCounts(String vlogId, Integer counts) {
        Vlog vlog = new Vlog();
        vlog.setId(vlogId);
        vlog.setLikeCounts(counts);
        vlogMapper.updateByPrimaryKeySelective(vlog);
    }
}

package com.tanz.utils;
import lombok.Data;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Component
@Data

//@PropertySource("classpath:aliyuncloud.properties")
@ConfigurationProperties(prefix = "aliyun.cloud")
public class AliyunCloudProperties {
    private final String accessKeyId = "LTAI5tBwdjy34WpyRXumfyp7";
    private final String accessKeySecret = "3u3g53xvEkISFodGny8GwVSweH6kuR";
    private final String templateCode = "SMS_463785094";
    private final String signName = "陈培鑫的博客";

//    private String accessKeyId;
//    private String accessKeySecret;
//    private String signName;
//    private String templateCode;
}

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
    private final String accessKeyId = "LTAI5tBwdjy34WpyRX??????";
    private final String accessKeySecret = "3u3g53xvEkISFodGny8GwVSw??????";
    private final String templateCode = "SMS_463??????";
    private final String signName = "??????";

//    private String accessKeyId;
//    private String accessKeySecret;
//    private String signName;
//    private String templateCode;
}

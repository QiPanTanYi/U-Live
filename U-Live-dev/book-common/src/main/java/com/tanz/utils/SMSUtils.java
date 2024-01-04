package com.tanz.utils;

import com.aliyun.dysmsapi20170525.Client;
import com.aliyun.dysmsapi20170525.models.SendSmsRequest;
import com.aliyun.dysmsapi20170525.models.SendSmsResponse;
import com.aliyun.teaopenapi.models.Config;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class SMSUtils {
    private final AliyunCloudProperties aliyunCloudProperties;

    @Autowired
    public SMSUtils(AliyunCloudProperties aliyunCloudProperties) {
        this.aliyunCloudProperties = aliyunCloudProperties;
    }

    public void sendSMS(String phoneNumber, String verificationCode) throws Exception {
        Config config = new Config();
        // 设置阿里云短信API的Access Key ID和Access Key Secret
        config.accessKeyId = aliyunCloudProperties.getAccessKeyId();
        config.accessKeySecret = aliyunCloudProperties.getAccessKeySecret();
        config.endpoint = "dysmsapi.aliyuncs.com";
        // 创建DysmsapiClient对象
        Client dysmsapiClient = new Client(config);

        // 创建SendSmsRequest对象并设置相关参数
        SendSmsRequest sendSmsRequest = new SendSmsRequest();
        // 设置手机号码
        sendSmsRequest.setPhoneNumbers(phoneNumber);
        // 设置短信签名
        sendSmsRequest.setSignName(aliyunCloudProperties.getSignName());
        // 设置短信模板ID
        sendSmsRequest.setTemplateCode(aliyunCloudProperties.getTemplateCode());
        // 设置模板参数，可以自定义
        sendSmsRequest.setTemplateParam("{\"code\":\"" + verificationCode + "\"}");

        try {
            // 调用发送短信API，并获取响应结果
            SendSmsResponse sendSmsResponse = dysmsapiClient.sendSms(sendSmsRequest);
            // 处理响应结果，根据需要进行异常处理或日志记录
            System.out.println("短信发送结果：" + sendSmsResponse.getBody().toString());
        } catch (Exception e) {
            // 异常处理
            e.printStackTrace();
        }
    }
}

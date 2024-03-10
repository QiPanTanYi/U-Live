package com.tanz;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2WebMvc;

@Configuration
@EnableSwagger2WebMvc
public class Knife4jConfig {

    @Bean
    public Docket defaultApi2() {
        Docket docket=new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(new ApiInfoBuilder()
                        .description("U-Live短视频平台接口开发文档")
                        .termsOfServiceUrl("http://47.98.xxx.xxx:8099")
                        .contact(new Contact("Tanz",
                                "http://47.98.xxx.xxx:8099",
                                "t1748XXXXXX@163.com"))
                        .version("1.0")
                        .build())
                //分组名称
                .groupName("1.0版本")
                .select()
                // 指定Controller扫描包路径
                .apis(RequestHandlerSelectors.basePackage("com.tanz.controller"))
                .paths(PathSelectors.any())
                .build();
        return docket;
    }
}

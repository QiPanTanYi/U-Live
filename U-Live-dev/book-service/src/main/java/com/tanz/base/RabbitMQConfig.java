package com.tanz.base;

import org.springframework.amqp.core.*;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQConfig {

    // 定义交换机
    public static final String EXCHANGE_MSG = "exchange_msg";

    // 定义队列
    public static final String QUEUE_SYS_MSG = "queue_sys_msg";

    // 创建交换机
    @Bean(EXCHANGE_MSG)
    public Exchange exchange() {
        return ExchangeBuilder                      // 构建交换机
                .topicExchange(EXCHANGE_MSG)        // 使用topic类型，出处：https://www.rabbitmq.com/getstarted.html
                .durable(true)                      // 设置持久化，重启mq后依然存在
                .build();
    }

    // 创建队列
    @Bean(QUEUE_SYS_MSG)
    public Queue queue() {
        return new Queue(QUEUE_SYS_MSG);
    }

    // 队列和交换机的绑定
    @Bean
    public Binding binding(@Qualifier(EXCHANGE_MSG) Exchange exchange,
                           @Qualifier(QUEUE_SYS_MSG) Queue queue) {

        return BindingBuilder
                .bind(queue)
                .to(exchange)
                .with("sys.msg.*")          // 定义路由规则（requestMapping）
                .noargs();
    }


}

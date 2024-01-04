package com.tanz.exceptions;

import com.tanz.grace.result.ResponseStatusEnum;

/**
 * 优雅的处理异常，统一封装
 */
public class GraceException {

    public static void display(ResponseStatusEnum responseStatusEnum) {
        throw new MyCustomException(responseStatusEnum);
    }

}

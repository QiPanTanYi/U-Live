package com.tanz.bo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.validator.constraints.URL;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class VlogBO {
    private String id;

    @NotBlank(message = "vlogerId不能为空")
    private String vlogerId;

    @NotBlank(message = "url不能为空")
    @URL(regexp="^(http(s)?://)?([\\w-]+\\.)+[\\w-]+(/[\\w- ./?%&=]*)?$", message = "url格式不正确")
    private String url;

    @NotBlank(message = "cover不能为空")
    private String cover;

    @NotBlank(message = "title不能为空")
    private String title;

    @NotNull(message = "width不能为空")
    @Min(value = 1, message = "width最小为1")
    @Max(value = Integer.MAX_VALUE, message = "width超出范围")
    private Integer width;

    @NotNull(message = "height不能为空")
    @Min(value = 1, message = "height最小为1")
    @Max(value = Integer.MAX_VALUE, message = "height超出范围")
    private Integer height;

    private Integer likeCounts;
    private Integer commentsCounts;

}
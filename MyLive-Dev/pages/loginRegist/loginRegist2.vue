<style>
	.page {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: #FFFFFF;
		padding: 20rpx;
		display: flex;
		flex-direction: column;
	}
	.login-box {
		display: flex;
		flex-direction: column;
		margin-top: 200rpx;
		padding: 20rpx;
	}
	.code-text {
		font-weight: 600;
		font-size: 60rpx;
	}
	.code-tips {
		font-weight: 300;
		font-size: 34rpx;
		color: #808080;
		margin-top: 20rpx;
	}
	.mobile-box {
		height: 100rpx;
		display: flex;
		flex-direction: row;
		padding: 0 20rpx;
		border-color: #808080;
		border-width: 1px;
	}
	.mobile-prefix {
		color: #808080;
		font-weight: 400;
		font-size: 36rpx;
	}
	.mobile {
		color: #0C0C0C;
		font-weight: 400;
		font-size: 38rpx;
	}
	.middle {
		width: 1rpx;
		background-color: #afafb3;
		height: 60rpx;
		margin: 0 40rpx;
	}
	.line {
		height: 1rpx;
		background-color: #afafb3;
	}
	.login-btn-text {
		font-size: 40rpx;
		color: #FFFFFF;
		font-weight: 500;
	}
	.code-btn-text {
		font-size: 30rpx;
		color: #FFFFFF;
		font-weight: 300;
	}
	.btn-login {
		background-color: #ef274d;
		/* border-color: #343438; */
	}
	.btn-login-touched {
		background-color: #e27c82;
		/* border-color: #000000; */
	}

</style>
<template>
	<view class="page">
		<!-- 这里是状态栏, 每个页面都需要有，目的不让页面覆盖状态栏 -->
		<view :style="{height: statusBarHeight + 'px'}"></view>
		
		<image src="../../static/images/icon-close-black.png" style="width: 50rpx;height: 50rpx;" @click="close()"></image>
		
		<view class="login-box">
			<text class="code-text">密码登录</text>
			<text class="code-tips"> 注：忘记密码请联系管理员</text>
			
			<view class="mobile-box">
				<text class="mobile-prefix" style="align-self: center;">+86</text>
				
				<view class="middle" style="align-self: center;"></view>
				
				<input type="number" 
					class="mobile" 
					:value="mobile" 
					:model="mobile" 
					@input="typingMobile"
					placeholder="请输入手机号" 
					maxlength="11"
					style="align-self: center;"/>
			</view>
			<view class="line" style="height: 1rpx;background-color: #afafb3;"></view>
			
			<view class="mobile-box" style="margin-top: 20rpx;">
				<input type="number" 
					class="mobile" 
					:value="password"
					:model="password"
					@input="typingVerifyCode"
					placeholder="请输入密码" 
					maxlength="24" 
					style="width: 540rpx;align-self: center;"/>
			</view>
			<view class="line"></view>
			<view >
				<button style="color: #808080;font-size: 30rpx;" @tap="goLogin2">验证码登录</button>
			</view>
			<view 
				:class="{'btn-login':!loginTouched, 'btn-login-touched': loginTouched}"
				@touchstart="touchstartLogin"
				@touchend="touchendLogin"
				@click="Passwordlogin()"
				style="margin-top: 50rpx;border-width: 1px;border-color: #FFFFFF;width: 650rpx;height: 120rpx;opacity: 0.8;border-radius: 100rpx;display: flex;flex-direction: row;justify-content: center;align-self: center;">
					<text class="login-btn-text" style="align-self: center;">登录</text>
			</view>
			

		</view>.
	</view>
</template>

<script>
	var system = uni.getSystemInfoSync();
	var app = getApp();
	export default {
	  data() {
	    return {
	      // 在data中定义数据
		  statusBarHeight: 0,
		  
		  mobile: "",
		  password: "",
		  loginTouched: false,
	    };
	  },
	  onLoad(){
		  this.statusBarHeight = system.statusBarHeight;
	  },
	  methods: {
		  touchstartLogin() {
		  	this.loginTouched = true;
		  },
		  touchendLogin() {
		  	this.loginTouched = false;
		  },
		  close() {
		  	uni.navigateBack({
		  		delta: 1,
		  		animationType: "slide-out-bottom"
		  	})
		  },
		  typingMobile(e) {
		  	var event = e;
		  	this.mobile = e.detail.value;
		  },
		  typingVerifyCode(e) {
		  	var event = e;
		  	this.password = e.detail.value;
		  },
		  Passwordlogin(){
			  var me = this;
			  var mobile = me.mobile;
			  var password = me.password;
			  
			  if(app.isStrEmpty(password)){
				  uni.showToast({
				  	title: "请填写密码",
					icon: "none"
				  });
				  console.log(password)
				  return;
			  }
			  
			  if (app.isStrEmpty(mobile) || mobile.length != 11) {
			  	uni.showToast({
			  		title: "手机号不正确",
			  		icon: "none"
			  	});
			  	return;
			  }
			  var serverUrl = app.globalData.serverUrl;
			  // 调用后端密码登录
			  uni.request({
			  	method: "POST",
				url: serverUrl + "/passport/passwordLogin",
				data: {
					"mobile": mobile,
					"password": password
				},
				success(result) {
					var status = result.data.status;
					if (status == 200) {
						var userInfo = result.data.data;
						app.setUserInfoSession(userInfo);
						app.setUserSessionToken(userInfo.userToken);
						// 登录成功，关闭当前页
						// me.close();
						uni.reLaunch({
							url: "../me/me"
						})
					} else if (status != 200) {
						console.log(status)
						uni.showToast({
							title: result.data.msg,
							icon: "none",
							duration: 3000
						});
					}
				}
			  });
		  },
	    goLogin2() {
	    uni.redirectTo({
	      url: "/pages/loginRegist/loginRegist",
	      success: () => {
	        // 页面跳转成功的处理
	        console.log('跳转成功');
	      },
	      fail: (error) => {
	        // 捕捉异步错误并进行处理
	        console.error('导航到页面发生错误:', error);
	      }
	    });
	    }
	  }
	};
</script>


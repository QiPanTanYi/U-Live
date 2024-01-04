<style>
.page {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background-color: #000000;
}
.bg-wrapper {
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.bg-size {
	width: 750rpx;
	height: 750rpx;
}
.button-change-bg {
	background-color: #1e1e1e;
}
.button-change-bg-touched {
	background-color: #646262;
}
.icon-search {
	width: 40rpx;
	height: 40rpx;
	opacity: 0.8;
	top: -30px;
	left: 10px;
}
</style>

<template>
	<view class="page">
		
		<view class="bg-wrapper" :style="{height: screenHeight + 'px'}">
			<image class="header-right-search icon-search" src="/static/images/icon-back.png"  style="width: 50rpx;height: 50rpx;"  @click="back()">
			<view>&nbsp</view>
			<image :src="faceUrl" class="bg-size" style="align-self: center;"></image>
			
			<view 
				:class="{'button-change-bg':!changeTouched, 'button-change-bg-touched': changeTouched}"
				@touchstart="touchstartChange"
				@touchend="touchendChange"
				@click="changeFace()"
				style="width: 250rpx;height: 80rpx;border-radius: 50px;display: flex;flex-direction: column;justify-content: center;margin-top: 150rpx;align-self: center;">
				<text style="color: #FFFFFF;align-self: center;">更换头像</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	var system = uni.getSystemInfoSync();
	var app = getApp();
	export default {
		data() {
			return {
				faceUrl: getApp().getUserInfoSession().face,
				
				changeTouched: false,
				
				screenHeight: system.safeArea.bottom,
			}
		},
		methods: {
			back() {
							uni.navigateBack({
								delta: 1
							})
						},
			touchstartChange() {
				this.changeTouched = true;
			},
			touchendChange() {
				this.changeTouched = false;
			},
			changeFace() {
				var me = this;
				var userId = getApp().getUserInfoSession().id;
				
				uni.chooseImage({
					count: 1,
					sizeType: ["compressed"],
					crop: {
						quality: 60,
						width: 300,
						height: 300
					},
					success: (e) => {
						var newFace = e.tempFilePaths[0];
						me.faceUrl = newFace;
						
						// 上传
						var serverUrl = app.globalData.serverUrl;
						uni.uploadFile({
							header: {
								headerUserId: userId,
								headerUserToken: app.getUserSessionToken()
							},
							url: serverUrl + "/userInfo/modifyImage?userId=" + userId + "&type=2",
							name: "file",
							filePath: newFace,
							success(result) {
								
								if (result.statusCode == 200) {
									var res = JSON.parse(result.data);
									
									if (res.status = 200) {
										var userInfoUpdated = res.data;
										// 重置本地用户信息
										app.setUserInfoSession(userInfoUpdated);
										
										uni.navigateBack({
											delta: 1,
											animationType: "fade-out"
										})
									} else {
										uni.showToast({
											title: res.msg,
											icon: 'error'
										})
									}
								} else {
									uni.showToast({
										title: "上传失败",
										icon: 'error'
									})
								}
								
							}
						})
					}
				})
			} 
		}
	}
</script>



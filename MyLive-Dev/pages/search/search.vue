<style>
.page {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background-color: #ececec;
}
.header-right-search {
	height: 100rpx;
	/* align-items: flex-start;
	justify-content: flex-end; */
}

.big-search-wrapper {
	padding: 30rpx;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.icon-search {
	width: 40rpx;
	height: 40rpx;
	opacity: 0.8;
	align-self: center;
}
.search-box {
	display: flex;
	flex-direction: row;
}
.search-box-left {
	padding: 0 10rpx;
	display: flex;
	flex-direction: row;
	background-color: #cfd1e3;
	border-top-left-radius: 3px; 
	border-bottom-left-radius: 3px;
}
.search-image {
	width: 50rpx;
	height: 50rpx;
	opacity: 0.8;
	align-self: center;
}
.search-input {
	width: 360rpx;
	background-color: #cfd1e3;
	height: 80rpx;
	font-size: 14px;
	color: #000000;
}
.search-box-right {
	padding: 0 16rpx;
	display: flex;
	flex-direction: row;
	background-color: #cfd1e3;
	border-top-right-radius: 3px; 
	border-bottom-right-radius: 3px;	
}
.scan-image {
	width: 50rpx;
	height: 50rpx;
	opacity: 0.8;
	align-self: center;
}
.search-btn {
	color: #000000;
	font-size: 16px;
	align-self: center;
}
.time-image {
	width: 40rpx;
	height: 40rpx;
	align-self: center;
}
.delete-image {
	width: 30rpx;
	height: 30rpx;
	opacity: 0.9;
	align-self: center;
}
.history-item-wrapper {
	padding: 16rpx 26rpx;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.time-and-text {
	display: flex;
	flex-direction: row;
	width: 500rpx;
}
.history-text {
	color: #000000;
	font-size: 15px;
	align-self: center;
	margin-left: 20rpx;
}
.clear-all-wrapper {
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 40rpx;
}
.clear-all {
	color: #000000;
	font-size: 14px;
	align-self: center;
}
</style>

<template>
	<view class="page">
		<!-- 这里是状态栏, 每个页面都需要有，目的不让页面覆盖状态栏 -->
		<view :style="{height: statusBarHeight + 'px'}"></view>
		
		<view class="big-search-wrapper">
			<image class="header-right-search icon-search" src="/static/images/fanhuijian.png" @click="back()">
			<view class="search-box">
				<view class="search-box-left">
					<image class="header-right-search search-image" src="/static/images/shousuo.png" />
				</view>
				<view style="">
					<input type="text" 
						:model="searchContent" 
						:value="searchContent"  
						@input="typingContent" 
						placeholder="请输入内容~" 
						maxlength="10"
						class="search-input"/>
				</view>
				<view class="search-box-right">
					<image class="scan-image" src="/static/images/saoma.png" @click="scan()"/>
				</view>
			</view>
			<view style="align-self: center;" @click="doSearch"><text class="search-btn">搜索</text></view>
		</view>
		
		<view>
			<view v-for="(h, index) in historyList" :key="index" class="history-item-wrapper">
				<view class="time-and-text" @click="searchByHistory(h)">
					<image class="time-image" src="/static/images/icon-time.png"/>
					<text class="history-text">{{h}}</text>
				</view>
				<image class="delete-image" src="/static/images/icon-close-black.png" @click="removeHistoryItem(index)"/>
			</view>
			
			<view class="clear-all-wrapper" @click="removeAllHistory()">
				<text class="clear-all">清除所有搜索记录</text>
			</view>
		</view>
	</view>
</template>

<script>
	var system = uni.getSystemInfoSync();
	export default {
		data() {
			return {
				searchContent: "",
				historyList: []
			}
		},
		onLoad(option) {
			this.statusBarHeight = system.statusBarHeight;
			
			// 从本地缓存获得搜索的历史记录
			var historyListJSON = uni.getStorageSync("historyList");
			if (historyListJSON == undefined || historyListJSON == "" || historyListJSON == null) {
				this.historyList = [];
				uni.setStorageSync("historyList", JSON.stringify(this.historyList));
			} else {
				this.historyList = JSON.parse(historyListJSON);
			}
			
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			scan() {
				uni.scanCode({
					success: (e) => {
						// url地址
						var result = e.result;
						var vlogId = JSON.parse(result).content;
						// 跳转页面，把搜索条件携带过去
						uni.navigateTo({
							url: "../vlog/vlog?vlogId=" + vlogId
						})
					}
				})
			},
			typingContent(e) {
				this.searchContent = e.target.value;
			},
			searchByHistory(searchContent) {
				this.searchContent = searchContent;
				this.doSearch();
			},
			doSearch() {
				var me = this;
				var searchContent = this.searchContent;
				if (searchContent == undefined || searchContent == "" || searchContent == null) {
					return;
				}
				
				var tempList = this.historyList;
				// 判断搜索内容是否已经存在，如果存在，则移除
				for (var i = 0 ; i < tempList.length ; i ++) {
					var old = tempList[i];
					if (searchContent === old) {
						tempList.splice(i, 1);
						break;
					}
				}
				tempList.unshift(searchContent);
				
				
				// 如果超过10个，则删除最后一项
				tempList.splice(10, 1);
				
				
				this.historyList = tempList;
				// 清空搜索框内容
				this.searchContent = "";
				// 保存到本地缓存
				uni.setStorageSync("historyList", JSON.stringify(this.historyList));
				
				// 跳转页面，把搜索条件携带过去
				uni.navigateTo({
					url: "searchList?search=" + searchContent
				})
			},
			removeHistoryItem(index) {
				this.historyList.splice(index, 1);
				uni.setStorageSync("historyList", JSON.stringify(this.historyList));
			},
			removeAllHistory() {
				this.historyList = [];
				uni.setStorageSync("historyList", JSON.stringify(this.historyList));
			}
		}
	}
</script>



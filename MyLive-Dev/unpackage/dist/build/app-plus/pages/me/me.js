!function(e){var t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=206)}({0:function(e,t){e.exports={".activate-line":{"":{backgroundColor:["#FFFFFF",0,0,1]}},"@VERSION":2}},1:function(e,t,i){"use strict";function r(e,t,i,r,n,o,a,s,l,c){var p,u="function"==typeof e?e.options:e;if(l){u.components||(u.components={});var f=Object.prototype.hasOwnProperty;for(var g in l)f.call(l,g)&&!f.call(u.components,g)&&(u.components[g]=l[g])}if(c&&("function"==typeof c.beforeCreate&&(c.beforeCreate=[c.beforeCreate]),(c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(u.mixins||(u.mixins=[])).push(c)),t&&(u.render=t,u.staticRenderFns=i,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(p=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=p):n&&(p=s?function(){n.call(this,this.$root.$options.shadowRoot)}:n),p)if(u.functional){u._injectStyles=p;var d=u.render;u.render=function(e,t){return p.call(t),d(e,t)}}else{var y=u.beforeCreate;u.beforeCreate=y?[].concat(y,p):[p]}return{exports:e,options:u}}i.d(t,"a",(function(){return r}))},111:function(e,t,i){"use strict";var r=i(112),n=i.n(r);t.default=n.a},112:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=uni.getSystemInfoSync(),n=getApp(),o={data:function(){return{userIsLogin:!1,pageUserInfo:{},userPageId:"",astro:"",animal:"",loginWords:"\u8bf7\u767b\u5f55",screenHeight:0,statusBarHeight:0,screenHeightUnLogin:0,currentTab:0,vlogList:getApp().getDefaultVlogList(),isFollow:!1,isAndroid:"android"==uni.getSystemInfoSync().platform,publicPage:0,publicTotalPage:0,publicVlogList:[],privatePage:0,privateTotalPage:0,privateVlogList:[],likedPage:0,likedTotalPage:0,likedVlogList:[],listRouteType:"myPublicList"}},onLoad:function(){this.statusBarHeight=r.statusBarHeight;var e=r.safeArea.bottom+50;this.screenHeight=e;var t=r.safeArea.bottom;this.screenHeightUnLogin=t},onShow:function(){var e=this;this.userIsLogin=n.userIsLogin();var t=getApp().getUserInfoSession();if(null!=t){this.pageUserInfo=t;var i=t.id,r=n.globalData.serverUrl;uni.request({method:"GET",url:r+"/userInfo/query?userId="+i,success:function(t){200==t.data.status&&(e.pageUserInfo=t.data.data,e.setBasicUserInfo(e.pageUserInfo))}}),this.switchTab(0)}},onTabItemTap:function(e){var t=this;n.userIsLogin()||uni.navigateTo({url:"../loginRegist/loginRegist",animationType:"slide-in-bottom",success:function(){t.loginWords="\u8bf7\u767b\u5f55"}})},methods:{setBasicUserInfo:function(e){var t=e.bgImg;n.isStrEmpty(e.bgImg)&&(t="../../static/images/defaultBgImg.png"),this.userBgImg=t;var i=e.birthday,r=n.dateFormat("YYYY-mm-dd",new Date(i)).split("-"),o=r[0],a=r[1],s=r[2];n.testAstro(a,s);var l=n.getAstro(a,s);this.astro=l;var c=n.getAnimal(o);this.animal=c},switchTab:function(e){this.currentTab=e,0==e?(this.publicPage=0,this.publicTotalPage=0,this.listRouteType="myPublicList",this.myPublicList(0)):1==e?(this.publicPage=0,this.publicTotalPage=0,this.listRouteType="myPrivateList",this.myPublicList(0)):2==e&&(this.publicPage=0,this.publicTotalPage=0,this.listRouteType="myLikedList",this.myPublicList(0))},loadMore:function(){this.publicPage>=this.publicTotalPage||this.myPublicList(this.publicPage)},myPublicList:function(e){var t=this;0==e&&(t.publicVlogList=[]),e+=1,t.publicPage=e;var i=getApp().getUserInfoSession().id,r=n.globalData.serverUrl,o=t.listRouteType;uni.request({method:"GET",header:{headerUserId:i,headerUserToken:n.getUserSessionToken()},url:r+"/vlog/"+o+"?userId="+i+"&page="+e+"&pageSize=10",success:function(i){if(200==i.data.status){var r=i.data.data.rows,n=i.data.data.total;t.publicVlogList=t.publicVlogList.concat(r),t.publicPage=e,t.publicTotalPage=n}}})},cancelFollow:function(e){var t=this,i=(e=t.userPageId,getApp().getUserInfoSession().id),r=n.globalData.serverUrl;uni.request({method:"POST",header:{headerUserId:i,headerUserToken:n.getUserSessionToken()},url:r+"/fans/cancel?myId="+i+"&vlogerId="+e,success:function(i){200==i.data.status?(t.isFollow=!1,uni.setStorageSync("justCancelVlogerId",e)):uni.showToast({title:i.data.msg,icon:"none",duration:3e3})}})},followMe:function(){var e=this,t=e.userPageId,i=getApp().getUserInfoSession().id,r=n.globalData.serverUrl;uni.request({method:"POST",header:{headerUserId:i,headerUserToken:n.getUserSessionToken()},url:r+"/fans/follow?myId="+i+"&vlogerId="+t,success:function(i){200==i.data.status?(e.isFollow=!0,uni.setStorageSync("justFollowVlogerId",t)):uni.showToast({title:i.data.msg,icon:"none",duration:3e3})}})},goLogin:function(){uni.navigateTo({url:"../loginRegist/loginRegist",animationType:"slide-in-bottom"})},getGraceNumber:function(e){return getApp().graceNumber(e)},goToVlog:function(e){uni.navigateTo({url:"../vlog/vlog?vlogId="+e})},changeMyBg:function(){uni.navigateTo({animationType:"fade-in",url:"myBackImg"})},changeMyFace:function(){uni.navigateTo({animationType:"fade-in",url:"myFace"})},goMyInfo:function(){uni.navigateTo({animationType:"fade-in",url:"myInfo"})},goSettings:function(){uni.navigateTo({animationType:"fade-in",url:"settings"})},goMyFans:function(){uni.navigateTo({animationType:"fade-in",url:"myFans"})},goMyFollows:function(){uni.navigateTo({animationType:"fade-in",url:"myFollows"})}}};t.default=o},113:function(e,t){e.exports={".page":{"":{position:["absolute",0,0,0],left:[0,0,0,0],right:[0,0,0,0],top:[0,0,0,0],bottom:[0,0,0,0],backgroundColor:["#ececec",0,0,0]}},".page-write":{"":{position:["absolute",0,0,1],left:[0,0,0,1],right:[0,0,0,1],top:[0,0,0,1],bottom:[0,0,0,1],backgroundColor:["#ececec",0,0,1]}},".constellation":{"":{display:["flex",0,0,2],flexDirection:["row",0,0,2],justifyContent:["center",0,0,2],backgroundColor:["#000000",0,0,2],opacity:[.5,0,0,2],width:["130rpx",0,0,2],height:["40rpx",0,0,2],borderRadius:["10",0,0,2]}},".animal":{"":{marginLeft:["10rpx",0,0,3],display:["flex",0,0,3],flexDirection:["row",0,0,3],justifyContent:["center",0,0,3],backgroundColor:["#000000",0,0,3],opacity:[.5,0,0,3],width:["60rpx",0,0,3],height:["40rpx",0,0,3],borderRadius:["10",0,0,3]}},".tab-wrapper":{"":{position:["relative",0,0,4],top:["-480rpx",0,0,4],height:["40",0,0,4],backgroundColor:["#171825",0,0,4],display:["flex",0,0,4],flexDirection:["row",0,0,4],justifyContent:["space-between",0,0,4],paddingTop:["3",0,0,4],borderTopLeftRadius:["12",0,0,4],borderTopRightRadius:["12",0,0,4]}},".tab-normal":{"":{fontSize:["18",0,0,5],fontWeight:["500",0,0,5],color:["#808080",0,0,5]}},".tab-unselected":{"":{color:["#808080",0,0,6]}},".tab-selected":{"":{color:["#FFFFFF",0,0,7]}},".vlog-list":{"":{position:["relative",0,0,8],top:["-480rpx",0,0,8],display:["flex",0,0,8],flexDirection:["row",0,0,8],flexWrap:["wrap",0,0,8],justifyContent:["flex-start",0,0,8],backgroundColor:["#ececec",0,0,8]}},".vlog-cover":{"":{width:["248rpx",0,0,9],height:["360rpx",0,0,9],borderWidth:["1rpx",0,0,9]}},".login-info-wrapper":{"":{display:["flex",0,0,10],flexDirection:["column",0,0,10],justifyContent:["center",0,0,10]}},".login-info":{"":{color:["#000000",0,0,11],fontSize:["36rpx",0,0,11],fontWeight:["600",0,0,11]}},"@VERSION":2}},151:function(e,t,i){"use strict";i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){}));var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[i("view",{staticClass:["page"]},[e.userIsLogin?e._e():i("view",{staticClass:["login-info-wrapper"],style:{height:e.screenHeightUnLogin+"px"},on:{click:function(t){e.goLogin()}}},[i("u-text",{staticClass:["login-info"],staticStyle:{alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.loginWords))])]),e.userIsLogin?i("scroll-view",{staticStyle:{backgroundColor:"#ececec"},style:{height:e.screenHeight+"px"},attrs:{scrollY:"true"},on:{scrolltolower:e.loadMore}},[i("u-image",{staticStyle:{width:"750rpx",height:"750rpx",boxShadow:"inset 0 -150px 180px #313030"},attrs:{id:"mybg",src:e.userBgImg,mode:"aspectFill"},on:{click:function(t){e.changeMyBg()}}}),e.isAndroid?i("u-image",{staticClass:["page"],staticStyle:{width:"750rpx",height:"750rpx",opacity:"0.5"},attrs:{src:"../../static/images/bg.png",mode:"aspectFill"},on:{click:function(t){e.changeMyBg()}}}):e._e(),i("view",{staticStyle:{position:"relative",left:"30rpx",top:"-560rpx",display:"flex",flexDirection:"column",width:"500rpx"}},[i("view",{staticStyle:{display:"flex",flexDirection:"row"}},[i("u-image",{staticStyle:{width:"200rpx",height:"200rpx",borderRadius:"100rpx",borderWidth:"1px",borderColor:"#F1F1F1"},attrs:{src:e.pageUserInfo.face,mode:"scaleToFill"},on:{click:function(t){e.changeMyFace()}}}),i("view",{staticStyle:{marginLeft:"30rpx",paddingTop:"20rpx"}},[i("u-text",{staticStyle:{fontSize:"20px",color:"#FFFFFF",fontWeight:"600"},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.pageUserInfo.nickname))]),i("view",{staticStyle:{display:"flex",flexDirection:"row"}},[i("u-text",{staticStyle:{fontSize:"10px",color:"#FFFFFF",fontWeight:"300"},appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u6e38Live\u53f7\uff1a")]),i("u-text",{staticStyle:{fontSize:"10px",color:"#FFFFFF",fontWeight:"300"},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.pageUserInfo.uliveNum))])]),i("view",{staticStyle:{display:"flex",flexDirection:"row",marginTop:"10rpx"}},[i("view",{staticClass:["constellation"]},[1==e.pageUserInfo.sex?i("u-image",{staticStyle:{width:"22rpx",height:"22rpx",alignSelf:"center"},attrs:{src:"../../static/images/icon-sex-boy.png"}}):e._e(),0==e.pageUserInfo.sex?i("u-image",{staticStyle:{width:"22rpx",height:"22rpx",alignSelf:"center"},attrs:{src:"../../static/images/icon-sex-girl.png"}}):e._e(),i("u-text",{staticStyle:{fontSize:"10px",color:"#FFFFFF",fontWeight:"bold",marginLeft:"6rpx",alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.astro)+"\u5ea7")])],1),i("view",{staticClass:["animal"]},[i("u-text",{staticStyle:{fontSize:"10px",color:"#FFFFFF",fontWeight:"bold",alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.animal))])])])])],1)]),i("u-text",{staticStyle:{position:"relative",top:"-520rpx",color:"#ffffff",fontSize:"14px",margin:"0 30rpx"},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.pageUserInfo.description))]),i("view",{staticStyle:{position:"relative",top:"-510rpx",display:"flex",flexDirection:"row",justifyContent:"space-between"}},[i("view",{staticStyle:{display:"flex",flexDirection:"row"}},[i("view",{staticStyle:{marginLeft:"30rpx",display:"flex",flexDirection:"column",justifyContent:"center"},on:{click:function(t){e.goMyFollows()}}},[i("u-text",{staticStyle:{color:"#ffffff",fontSize:"14px",fontWeight:"bold",alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.getGraceNumber(e.pageUserInfo.myFollowsCounts)))]),i("u-text",{staticStyle:{color:"#ffffff",fontSize:"12px",fontWeight:"300",alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u5173\u6ce8")])]),i("view",{staticStyle:{marginLeft:"50rpx",display:"flex",flexDirection:"column",justifyContent:"center"},on:{click:function(t){e.goMyFans()}}},[i("u-text",{staticStyle:{color:"#ffffff",fontSize:"14px",fontWeight:"bold",alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.getGraceNumber(e.pageUserInfo.myFansCounts)))]),i("u-text",{staticStyle:{color:"#ffffff",fontSize:"12px",fontWeight:"300",alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u7c89\u4e1d")])]),i("view",{staticStyle:{marginLeft:"50rpx",display:"flex",flexDirection:"column",justifyContent:"center"}},[i("u-text",{staticStyle:{color:"#ffffff",fontSize:"14px",fontWeight:"bold",alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.getGraceNumber(e.pageUserInfo.totalLikeMeCounts)))]),i("u-text",{staticStyle:{color:"#ffffff",fontSize:"12px",fontWeight:"300",alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u83b7\u8d5e")])])]),i("view",{staticStyle:{display:"flex",flexDirection:"row",justifyContent:"center",marginRight:"30rpx"}},[i("view",{staticStyle:{marginLeft:"20rpx",borderWidth:"1px",borderColor:"#FFFFFF",width:"200rpx",height:"66rpx",backgroundColor:"#545456",opacity:"0.8",borderRadius:"40rpx",display:"flex",flexDirection:"row",justifyContent:"center",alignSelf:"center"},on:{click:function(t){e.goMyInfo()}}},[i("u-text",{staticStyle:{fontSize:"13px",color:"#FFFFFF",fontWeight:"500",alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u7f16\u8f91\u8d44\u6599")])]),i("view",{staticStyle:{marginLeft:"20rpx",borderWidth:"1px",borderColor:"#FFFFFF",width:"100rpx",height:"66rpx",backgroundColor:"#545456",opacity:"0.8",borderRadius:"40rpx",display:"flex",flexDirection:"row",justifyContent:"center",alignSelf:"center"},on:{click:function(t){e.goSettings()}}},[i("u-image",{staticStyle:{width:"32rpx",height:"32rpx",alignSelf:"center"},attrs:{src:"../../static/images/icon-settings.png"}})],1)])]),i("view",{staticClass:["tab-wrapper"]},[i("view",{staticStyle:{width:"250rpx",alignSelf:"center"},on:{click:function(t){e.switchTab(0)}}},[i("u-text",{staticClass:["tab-normal"],class:{"tab-selected":0==e.currentTab},staticStyle:{alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u4f5c\u54c1")]),0==e.currentTab?i("view",{staticStyle:{marginTop:"5px",height:"5rpx",width:"250rpx",borderRadius:"6rpx",backgroundColor:"#ef274d"}}):e._e()]),i("view",{staticStyle:{width:"250rpx",alignSelf:"center"},on:{click:function(t){e.switchTab(1)}}},[i("u-text",{staticClass:["tab-normal"],class:{"tab-selected":1==e.currentTab},staticStyle:{alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u79c1\u5bc6")]),1==e.currentTab?i("view",{staticStyle:{marginTop:"5px",height:"5rpx",width:"250rpx",borderRadius:"6rpx",backgroundColor:"#ef274d"}}):e._e()]),i("view",{staticStyle:{width:"250rpx",alignSelf:"center"},on:{click:function(t){e.switchTab(2)}}},[i("u-text",{staticClass:["tab-normal"],class:{"tab-selected":2==e.currentTab},staticStyle:{alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u8d5e\u8fc7")]),2==e.currentTab?i("view",{staticStyle:{marginTop:"5px",height:"5rpx",width:"250rpx",borderRadius:"6rpx",backgroundColor:"#ef274d"}}):e._e()])]),i("view",{staticClass:["vlog-list"]},e._l(e.publicVlogList,(function(t,r){return i("block",{key:r},[i("u-image",{staticClass:["vlog-cover"],staticStyle:{alignSelf:"center"},attrs:{src:t.cover,mode:"aspectFill"},on:{click:function(i){2===e.currentTab?e.goToVlog(t.vlogId):e.goToVlog(t.id)}}})],1)})),1),0==e.publicVlogList.length?i("view",{staticStyle:{backgroundColor:"#ececec",width:"750rpx",height:"300rpx",display:"flex",flexDirection:"row",justifyContent:"center",position:"relative",top:"-480rpx"}},[i("u-text",{staticStyle:{color:"#FFFFFF",fontSize:"14px",marginTop:"200rpx"},appendAsTree:!0,attrs:{append:"tree"}},[e._v("~ \u7a7a\u7a7a\u5982\u4e5f ~")])]):e._e(),e.publicVlogList.length>0?i("view",{staticStyle:{width:"750rpx",display:"flex",flexDirection:"row",justifyContent:"center",position:"relative",top:"-260rpx"}},[i("u-text",{staticStyle:{color:"#FFFFFF",fontSize:"14px"},appendAsTree:!0,attrs:{append:"tree"}},[e._v("- \u77e5\u6df1\u6d45 | \u552f\u6709\u4f60 -")])]):e._e()],1):e._e()],1)])},n=[]},178:function(e,t,i){"use strict";i.r(t);var r=i(113),n=i.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(o);t.default=n.a},2:function(e,t,i){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(i(3).default,Vue.prototype.__$appStyle__)},206:function(e,t,i){"use strict";i.r(t);i(2),i(4);var r=i(55);r.default.mpType="page",r.default.route="pages/me/me",r.default.el="#root",new Vue(r.default)},3:function(e,t,i){"use strict";i.r(t);var r=i(0),n=i.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(o);t.default=n.a},4:function(e,t){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(i){return t.resolve(e()).then((function(){return i}))}),(function(i){return t.resolve(e()).then((function(){throw i}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var i=uni.requireGlobal();ArrayBuffer=i.ArrayBuffer,Int8Array=i.Int8Array,Uint8Array=i.Uint8Array,Uint8ClampedArray=i.Uint8ClampedArray,Int16Array=i.Int16Array,Uint16Array=i.Uint16Array,Int32Array=i.Int32Array,Uint32Array=i.Uint32Array,Float32Array=i.Float32Array,Float64Array=i.Float64Array,BigInt64Array=i.BigInt64Array,BigUint64Array=i.BigUint64Array}},55:function(e,t,i){"use strict";var r=i(151),n=i(111),o=i(1);var a=Object(o.a)(n.default,r.b,r.c,!1,null,null,"60e423e5",!1,r.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(178).default,this.options.style):Object.assign(this.options.style,i(178).default)}).call(a),t.default=a.exports}});
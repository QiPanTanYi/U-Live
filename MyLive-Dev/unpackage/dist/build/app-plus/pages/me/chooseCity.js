!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=193)}({0:function(t,e){t.exports={".activate-line":{"":{backgroundColor:["#FFFFFF",0,0,1]}},"@VERSION":2}},1:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a,c,u,s){var l,f="function"==typeof t?t.options:t;if(u){f.components||(f.components={});var p=Object.prototype.hasOwnProperty;for(var d in u)p.call(u,d)&&!p.call(f.components,d)&&(f.components[d]=u[d])}if(s&&("function"==typeof s.beforeCreate&&(s.beforeCreate=[s.beforeCreate]),(s.beforeCreate||(s.beforeCreate=[])).unshift((function(){this[s.__module]=this})),(f.mixins||(f.mixins=[])).push(s)),e&&(f.render=e,f.staticRenderFns=r,f._compiled=!0),n&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},f._ssrRegister=l):o&&(l=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(f.functional){f._injectStyles=l;var y=f.render;f.render=function(t,e){return l.call(e),y(t,e)}}else{var _=f.beforeCreate;f.beforeCreate=_?[].concat(_,l):[l]}return{exports:t,options:f}}r.d(e,"a",(function(){return n}))},138:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[r("view",{staticClass:["page"]},[r("view",{staticClass:["line"]}),r("scroll-view",{attrs:{scrollY:"true"}},t._l(t.cityList,(function(e,n){return r("view",{key:n,class:{active:n==t.activeIndex},staticStyle:{paddingLeft:"30rpx",paddingRight:"30rpx",width:"750rpx",height:"120rpx",display:"flex",flexDirection:"row",justifyContent:"space-between"},on:{click:function(r){t.chooseLocation(e.city_id,t.showDistrict?e.district_name:e.city_name)},touchstart:function(e){t.touchstartLocation(n)},touchend:function(e){t.touchendLocation()}}},[r("u-text",{staticStyle:{color:"#FFFFFF",alignSelf:"center",fontSize:"15px"},appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.showDistrict?e.district_name:e.city_name))])])})),0)],1)])},o=[]},165:function(t,e,r){"use strict";r.r(e);var n=r(74),o=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e.default=o.a},193:function(t,e,r){"use strict";r.r(e);r(2),r(4);var n=r(42);n.default.mpType="page",n.default.route="pages/me/chooseCity",n.default.el="#root",new Vue(n.default)},2:function(t,e,r){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(r(3).default,Vue.prototype.__$appStyle__)},3:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e.default=o.a},4:function(t,e){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(r){return e.resolve(t()).then((function(){return r}))}),(function(r){return e.resolve(t()).then((function(){throw r}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var r=uni.requireGlobal();ArrayBuffer=r.ArrayBuffer,Int8Array=r.Int8Array,Uint8Array=r.Uint8Array,Uint8ClampedArray=r.Uint8ClampedArray,Int16Array=r.Int16Array,Uint16Array=r.Uint16Array,Int32Array=r.Int32Array,Uint32Array=r.Uint32Array,Float32Array=r.Float32Array,Float64Array=r.Float64Array,BigInt64Array=r.BigInt64Array,BigUint64Array=r.BigUint64Array}},42:function(t,e,r){"use strict";var n=r(138),o=r(72),i=r(1);var a=Object(i.a)(o.default,n.b,n.c,!1,null,null,"24d61f9b",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(r(165).default,this.options.style):Object.assign(this.options.style,r(165).default)}).call(a),e.default=a.exports},72:function(t,e,r){"use strict";var n=r(73),o=r.n(n);e.default=o.a},73:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={components:{},data:function(){return{placeTouched:!1,cityList:[],activeIndex:-1,showDistrict:!1}},onLoad:function(t){var e=t.provinceId,r=getApp().globalData.cityList,n=getApp().globalData.districtList;this.showDistrict=!1;for(var o=[],i=0;i<r.length;i++){r[i].province_id==e&&o.push(r[i])}if(1==e||2==e||9==e||22==e){var a=o[0].city_id;o=[];for(i=0;i<n.length;i++){n[i].city_id==a&&o.push(n[i])}this.showDistrict=!0}this.cityList=o},methods:{updateBirthday:function(){},touchstartLocation:function(t){this.activeIndex=t},touchendLocation:function(){this.activeIndex=-1},chooseLocation:function(t,e){uni.setStorageSync("myLocationArea",e),uni.navigateBack({delta:2})}}};e.default=n},74:function(t,e){t.exports={".page":{"":{position:["absolute",0,0,0],left:[0,0,0,0],right:[0,0,0,0],top:[0,0,0,0],bottom:[0,0,0,0],backgroundColor:["#181b27",0,0,0]}},".line":{"":{height:["1rpx",0,0,1],backgroundColor:["#393a41",0,0,1],width:["750rpx",0,0,1]}},".place-box":{"":{backgroundColor:["#4a4c52",0,0,2]}},".place-box-touched":{"":{backgroundColor:["#6d6b6b",0,0,3]}},".right-arrow":{"":{width:["32rpx",0,0,4],height:["32rpx",0,0,4],marginLeft:["20rpx",0,0,4]}},".active":{"":{backgroundColor:["#4a4c52",0,0,6]}},"@VERSION":2}}});
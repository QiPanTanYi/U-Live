"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 235);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!********************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/main.js?{"type":"appStyle"} ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!********************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/App.vue?vue&type=style&index=0&lang=css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ASUS/Desktop/MyLive-Dev/App.vue?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".activate-line": {
    "": {
      "backgroundColor": [
        "#FFFFFF",
        0,
        0,
        1
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatLog;
exports.log = log;
function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}
function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}
function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;
  }
}
function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}
function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }
  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();
    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();
        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }
    return v;
  });
  var msg = '';
  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');
    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }
  console[type](msg);
}

/***/ }),
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = requireNativePlugin;
function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),
/* 150 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 151 */,
/* 152 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 159);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 159 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 160 */,
/* 161 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 162);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 163);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 158);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 164);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 162 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 159);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 163 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 164 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 165 */,
/* 166 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 167);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 167 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 152)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 168);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 168 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 152)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 178 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 167);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */
/*!*************************************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-popup/components/uni-popup/uni-popup.vue ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_popup_vue_vue_type_template_id_7c43d41b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-popup.vue?vue&type=template&id=7c43d41b&scoped=true& */ 194);\n/* harmony import */ var _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-popup.vue?vue&type=script&lang=js& */ 202);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-popup.vue?vue&type=style&index=0&id=7c43d41b&lang=scss&scoped=true& */ 204).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-popup.vue?vue&type=style&index=0&id=7c43d41b&lang=scss&scoped=true& */ 204).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_popup_vue_vue_type_template_id_7c43d41b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_popup_vue_vue_type_template_id_7c43d41b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"7c43d41b\",\n  \"40eaff38\",\n  false,\n  _uni_popup_vue_vue_type_template_id_7c43d41b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/uni-popup/components/uni-popup/uni-popup.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0k7QUFDbEk7QUFDNkQ7QUFDTDtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG9GQUEyRTtBQUMvSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsb0ZBQTJFO0FBQ3BJOztBQUVBOztBQUVBO0FBQytLO0FBQy9LLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxOTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2M0M2Q0MWImc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdjNDNkNDFiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdjNDNkNDFiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3YzQzZDQxYlwiLFxuICBcIjQwZWFmZjM4XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInVuaV9tb2R1bGVzL3VuaS1wb3B1cC9jb21wb25lbnRzL3VuaS1wb3B1cC91bmktcG9wdXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///193\n");

/***/ }),
/* 194 */
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=template&id=7c43d41b&scoped=true& ***!
  \********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=template&id=7c43d41b&scoped=true& */ 195);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 195 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=template&id=7c43d41b&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniTransition:
      __webpack_require__(/*! @/uni_modules/uni-transition/components/uni-transition/uni-transition.vue */ 196)
        .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.showPopup
    ? _c(
        "view",
        {
          staticClass: ["uni-popup"],
          class: [_vm.popupstyle, _vm.isDesktop ? "fixforpc-z-index" : ""],
          on: { touchmove: _vm.clear },
        },
        [
          _c(
            "view",
            { on: { touchstart: _vm.touchstart } },
            [
              _vm.maskShow
                ? _c("uni-transition", {
                    key: "1",
                    attrs: {
                      name: "mask",
                      modeClass: "fade",
                      styles: _vm.maskClass,
                      duration: _vm.duration,
                      show: _vm.showTrans,
                    },
                    on: { click: _vm.onTap },
                  })
                : _vm._e(),
              _c(
                "uni-transition",
                {
                  key: "2",
                  attrs: {
                    modeClass: _vm.ani,
                    name: "content",
                    styles: _vm.transClass,
                    duration: _vm.duration,
                    show: _vm.showTrans,
                  },
                  on: { click: _vm.onTap },
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: ["uni-popup__wrapper"],
                      class: [_vm.popupstyle],
                      style: { backgroundColor: _vm.bg },
                      on: { click: _vm.clear },
                    },
                    [_vm._t("default")],
                    2
                  ),
                ]
              ),
            ],
            1
          ),
        ]
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 196 */
/*!****************************************************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-transition/components/uni-transition/uni-transition.vue ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-transition.vue?vue&type=template&id=6369f8c4& */ 197);\n/* harmony import */ var _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-transition.vue?vue&type=script&lang=js& */ 199);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      \n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"55509f61\",\n  false,\n  _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/uni-transition/components/uni-transition/uni-transition.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkg7QUFDM0g7QUFDa0U7QUFDTDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDK0s7QUFDL0ssZ0JBQWdCLDZLQUFVO0FBQzFCLEVBQUUsb0ZBQU07QUFDUixFQUFFLHlGQUFNO0FBQ1IsRUFBRSxrR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2RkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNlLGdGIiwiZmlsZSI6IjE5Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdW5pLXRyYW5zaXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYzNjlmOGM0JlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLXRyYW5zaXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBcbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiNTU1MDlmNjFcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pX21vZHVsZXMvdW5pLXRyYW5zaXRpb24vY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///196\n");

/***/ }),
/* 197 */
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=template&id=6369f8c4& ***!
  \***********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=template&id=6369f8c4& */ 198);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 198 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=template&id=6369f8c4& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isShow
    ? _c(
        "view",
        {
          ref: "ani",
          class: _vm.customClass,
          style: _vm.transformStyles,
          attrs: { animation: _vm.animationData },
          on: { click: _vm.onClick },
        },
        [_vm._t("default")],
        2
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 199 */
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=script&lang=js& */ 200);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlkLENBQWdCLGtkQUFHLEVBQUMiLCJmaWxlIjoiMTk5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS10cmFuc2l0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS10cmFuc2l0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///199\n");

/***/ }),
/* 200 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 150);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 161));\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 152));\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 166));\nvar _createAnimation = __webpack_require__(/*! ./createAnimation */ 201);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n/**\n * Transition 过渡动画\n * @description 简单过渡动画组件\n * @tutorial https://ext.dcloud.net.cn/plugin?id=985\n * @property {Boolean} show = [false|true] 控制组件显示或隐藏\n * @property {Array|String} modeClass = [fade|slide-top|slide-right|slide-bottom|slide-left|zoom-in|zoom-out] 过渡动画类型\n *  @value fade 渐隐渐出过渡\n *  @value slide-top 由上至下过渡\n *  @value slide-right 由右至左过渡\n *  @value slide-bottom 由下至上过渡\n *  @value slide-left 由左至右过渡\n *  @value zoom-in 由小到大过渡\n *  @value zoom-out 由大到小过渡\n * @property {Number} duration 过渡动画持续时间\n * @property {Object} styles 组件样式，同 css 样式，注意带’-‘连接符的属性需要使用小驼峰写法如：`backgroundColor:red`\n */\nvar _default2 = {\n  name: 'uniTransition',\n  emits: ['click', 'change'],\n  props: {\n    show: {\n      type: Boolean,\n      default: false\n    },\n    modeClass: {\n      type: [Array, String],\n      default: function _default() {\n        return 'fade';\n      }\n    },\n    duration: {\n      type: Number,\n      default: 300\n    },\n    styles: {\n      type: Object,\n      default: function _default() {\n        return {};\n      }\n    },\n    customClass: {\n      type: String,\n      default: ''\n    }\n  },\n  data: function data() {\n    return {\n      isShow: false,\n      transform: '',\n      opacity: 1,\n      animationData: {},\n      durationTime: 300,\n      config: {}\n    };\n  },\n  watch: {\n    show: {\n      handler: function handler(newVal) {\n        if (newVal) {\n          this.open();\n        } else {\n          // 避免上来就执行 close,导致动画错乱\n          if (this.isShow) {\n            this.close();\n          }\n        }\n      },\n      immediate: true\n    }\n  },\n  computed: {\n    // 生成样式数据\n    stylesObject: function stylesObject() {\n      var styles = _objectSpread(_objectSpread({}, this.styles), {}, {\n        'transition-duration': this.duration / 1000 + 's'\n      });\n      var transform = '';\n      for (var i in styles) {\n        var line = this.toLine(i);\n        transform += line + ':' + styles[i] + ';';\n      }\n      return transform;\n    },\n    // 初始化动画条件\n    transformStyles: function transformStyles() {\n      return 'transform:' + this.transform + ';' + 'opacity:' + this.opacity + ';' + this.stylesObject;\n    }\n  },\n  created: function created() {\n    // 动画默认配置\n    this.config = {\n      duration: this.duration,\n      timingFunction: 'ease',\n      transformOrigin: '50% 50%',\n      delay: 0\n    };\n    this.durationTime = this.duration;\n  },\n  methods: {\n    /**\n     *  ref 触发 初始化动画\n     */\n    init: function init() {\n      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      if (obj.duration) {\n        this.durationTime = obj.duration;\n      }\n      this.animation = (0, _createAnimation.createAnimation)(Object.assign(this.config, obj));\n    },\n    /**\n     * 点击组件触发回调\n     */\n    onClick: function onClick() {\n      this.$emit('click', {\n        detail: this.isShow\n      });\n    },\n    /**\n     * ref 触发 动画分组\n     * @param {Object} obj\n     */\n    step: function step(obj) {\n      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      if (!this.animation) return;\n      for (var i in obj) {\n        try {\n          if ((0, _typeof2.default)(obj[i]) === 'object') {\n            var _this$animation;\n            (_this$animation = this.animation)[i].apply(_this$animation, (0, _toConsumableArray2.default)(obj[i]));\n          } else {\n            this.animation[i](obj[i]);\n          }\n        } catch (e) {\n          __f__(\"error\", \"\\u65B9\\u6CD5 \".concat(i, \" \\u4E0D\\u5B58\\u5728\"), \" at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:139\");\n        }\n      }\n      this.animation.step(config);\n      return this;\n    },\n    /**\n     *  ref 触发 执行动画\n     */\n    run: function run(fn) {\n      if (!this.animation) return;\n      this.animation.run(fn);\n    },\n    // 开始过度动画\n    open: function open() {\n      var _this = this;\n      clearTimeout(this.timer);\n      this.transform = '';\n      this.isShow = true;\n      var _this$styleInit = this.styleInit(false),\n        opacity = _this$styleInit.opacity,\n        transform = _this$styleInit.transform;\n      if (typeof opacity !== 'undefined') {\n        this.opacity = opacity;\n      }\n      this.transform = transform;\n      // 确保动态样式已经生效后，执行动画，如果不加 nextTick ，会导致 wx 动画执行异常\n      this.$nextTick(function () {\n        // TODO 定时器保证动画完全执行，目前有些问题，后面会取消定时器\n        _this.timer = setTimeout(function () {\n          _this.animation = (0, _createAnimation.createAnimation)(_this.config, _this);\n          _this.tranfromInit(false).step();\n          _this.animation.run();\n          _this.$emit('change', {\n            detail: _this.isShow\n          });\n        }, 20);\n      });\n    },\n    // 关闭过度动画\n    close: function close(type) {\n      var _this2 = this;\n      if (!this.animation) return;\n      this.tranfromInit(true).step().run(function () {\n        _this2.isShow = false;\n        _this2.animationData = null;\n        _this2.animation = null;\n        var _this2$styleInit = _this2.styleInit(false),\n          opacity = _this2$styleInit.opacity,\n          transform = _this2$styleInit.transform;\n        _this2.opacity = opacity || 1;\n        _this2.transform = transform;\n        _this2.$emit('change', {\n          detail: _this2.isShow\n        });\n      });\n    },\n    // 处理动画开始前的默认样式\n    styleInit: function styleInit(type) {\n      var _this3 = this;\n      var styles = {\n        transform: ''\n      };\n      var buildStyle = function buildStyle(type, mode) {\n        if (mode === 'fade') {\n          styles.opacity = _this3.animationType(type)[mode];\n        } else {\n          styles.transform += _this3.animationType(type)[mode] + ' ';\n        }\n      };\n      if (typeof this.modeClass === 'string') {\n        buildStyle(type, this.modeClass);\n      } else {\n        this.modeClass.forEach(function (mode) {\n          buildStyle(type, mode);\n        });\n      }\n      return styles;\n    },\n    // 处理内置组合动画\n    tranfromInit: function tranfromInit(type) {\n      var _this4 = this;\n      var buildTranfrom = function buildTranfrom(type, mode) {\n        var aniNum = null;\n        if (mode === 'fade') {\n          aniNum = type ? 0 : 1;\n        } else {\n          aniNum = type ? '-100%' : '0';\n          if (mode === 'zoom-in') {\n            aniNum = type ? 0.8 : 1;\n          }\n          if (mode === 'zoom-out') {\n            aniNum = type ? 1.2 : 1;\n          }\n          if (mode === 'slide-right') {\n            aniNum = type ? '100%' : '0';\n          }\n          if (mode === 'slide-bottom') {\n            aniNum = type ? '100%' : '0';\n          }\n        }\n        _this4.animation[_this4.animationMode()[mode]](aniNum);\n      };\n      if (typeof this.modeClass === 'string') {\n        buildTranfrom(type, this.modeClass);\n      } else {\n        this.modeClass.forEach(function (mode) {\n          buildTranfrom(type, mode);\n        });\n      }\n      return this.animation;\n    },\n    animationType: function animationType(type) {\n      return {\n        fade: type ? 1 : 0,\n        'slide-top': \"translateY(\".concat(type ? '0' : '-100%', \")\"),\n        'slide-right': \"translateX(\".concat(type ? '0' : '100%', \")\"),\n        'slide-bottom': \"translateY(\".concat(type ? '0' : '100%', \")\"),\n        'slide-left': \"translateX(\".concat(type ? '0' : '-100%', \")\"),\n        'zoom-in': \"scaleX(\".concat(type ? 1 : 0.8, \") scaleY(\").concat(type ? 1 : 0.8, \")\"),\n        'zoom-out': \"scaleX(\".concat(type ? 1 : 1.2, \") scaleY(\").concat(type ? 1 : 1.2, \")\")\n      };\n    },\n    // 内置动画类型与实际动画对应字典\n    animationMode: function animationMode() {\n      return {\n        fade: 'opacity',\n        'slide-top': 'translateY',\n        'slide-right': 'translateX',\n        'slide-bottom': 'translateY',\n        'slide-left': 'translateX',\n        'zoom-in': 'scale',\n        'zoom-out': 'scale'\n      };\n    },\n    // 驼峰转中横线\n    toLine: function toLine(name) {\n      return name.replace(/([A-Z])/g, '-$1').toLowerCase();\n    }\n  }\n};\nexports.default = _default2;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 123)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXRyYW5zaXRpb24vY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWUiXSwibmFtZXMiOlsibmFtZSIsImVtaXRzIiwicHJvcHMiLCJzaG93IiwidHlwZSIsImRlZmF1bHQiLCJtb2RlQ2xhc3MiLCJkdXJhdGlvbiIsInN0eWxlcyIsImN1c3RvbUNsYXNzIiwiZGF0YSIsImlzU2hvdyIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJhbmltYXRpb25EYXRhIiwiZHVyYXRpb25UaW1lIiwiY29uZmlnIiwid2F0Y2giLCJoYW5kbGVyIiwiaW1tZWRpYXRlIiwiY29tcHV0ZWQiLCJzdHlsZXNPYmplY3QiLCJ0cmFuc2Zvcm1TdHlsZXMiLCJjcmVhdGVkIiwidGltaW5nRnVuY3Rpb24iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJkZWxheSIsIm1ldGhvZHMiLCJpbml0Iiwib25DbGljayIsImRldGFpbCIsInN0ZXAiLCJydW4iLCJvcGVuIiwiY2xlYXJUaW1lb3V0IiwiY2xvc2UiLCJzdHlsZUluaXQiLCJidWlsZFN0eWxlIiwidHJhbmZyb21Jbml0IiwiYW5pTnVtIiwiYnVpbGRUcmFuZnJvbSIsImFuaW1hdGlvblR5cGUiLCJmYWRlIiwiYW5pbWF0aW9uTW9kZSIsInRvTGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkEsZ0JBZ0JBO0VBQ0FBO0VBQ0FDO0VBQ0FDO0lBQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7SUFDQUM7TUFDQUY7TUFDQUM7UUFDQTtNQUNBO0lBQ0E7SUFDQUU7TUFDQUg7TUFDQUM7SUFDQTtJQUNBRztNQUNBSjtNQUNBQztRQUNBO01BQ0E7SUFDQTtJQUNBSTtNQUNBTDtNQUNBQztJQUNBO0VBQ0E7RUFDQUs7SUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQWQ7TUFDQWU7UUFDQTtVQUNBO1FBQ0E7VUFDQTtVQUNBO1lBQ0E7VUFDQTtRQUNBO01BQ0E7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQUM7TUFDQSw2Q0FDQTtRQUNBO01BQUEsRUFDQTtNQUNBO01BQ0E7UUFDQTtRQUNBVDtNQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FVO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQTtNQUNBaEI7TUFDQWlCO01BQ0FDO01BQ0FDO0lBQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQUE7TUFDQTtRQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQ0E7UUFDQUM7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDQUM7TUFBQTtNQUNBO01BQ0E7UUFDQTtVQUNBO1lBQUE7WUFDQTtVQUNBO1lBQ0E7VUFDQTtRQUNBO1VBQ0E7UUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFBQTtNQUNBQztNQUNBO01BQ0E7TUFDQTtRQUFBckI7UUFBQUQ7TUFDQTtRQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7UUFDQTtRQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7WUFDQWtCO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBSztNQUFBO01BQ0E7TUFDQSx3QkFDQUosT0FDQUM7UUFDQTtRQUNBO1FBQ0E7UUFDQTtVQUFBbkI7VUFBQUQ7UUFDQTtRQUNBO1FBQ0E7VUFDQWtCO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQU07TUFBQTtNQUNBO1FBQ0F4QjtNQUNBO01BQ0E7UUFDQTtVQUNBSjtRQUNBO1VBQ0FBO1FBQ0E7TUFDQTtNQUNBO1FBQ0E2QjtNQUNBO1FBQ0E7VUFDQUE7UUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQUE7TUFDQTtRQUNBO1FBQ0E7VUFDQUM7UUFDQTtVQUNBQTtVQUNBO1lBQ0FBO1VBQ0E7VUFDQTtZQUNBQTtVQUNBO1VBQ0E7WUFDQUE7VUFDQTtVQUNBO1lBQ0FBO1VBQ0E7UUFDQTtRQUNBO01BQ0E7TUFDQTtRQUNBQztNQUNBO1FBQ0E7VUFDQUE7UUFDQTtNQUNBO01BRUE7SUFDQTtJQUNBQztNQUNBO1FBQ0FDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7UUFDQUQ7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQUU7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBLDRCIiwiZmlsZSI6IjIwMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXcgdi1pZj1cImlzU2hvd1wiIHJlZj1cImFuaVwiIDphbmltYXRpb249XCJhbmltYXRpb25EYXRhXCIgOmNsYXNzPVwiY3VzdG9tQ2xhc3NcIiA6c3R5bGU9XCJ0cmFuc2Zvcm1TdHlsZXNcIiBAY2xpY2s9XCJvbkNsaWNrXCI+PHNsb3Q+PC9zbG90Pjwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBjcmVhdGVBbmltYXRpb24gfSBmcm9tICcuL2NyZWF0ZUFuaW1hdGlvbidcblxuLyoqXG4gKiBUcmFuc2l0aW9uIOi/h+a4oeWKqOeUu1xuICogQGRlc2NyaXB0aW9uIOeugOWNlei/h+a4oeWKqOeUu+e7hOS7tlxuICogQHR1dG9yaWFsIGh0dHBzOi8vZXh0LmRjbG91ZC5uZXQuY24vcGx1Z2luP2lkPTk4NVxuICogQHByb3BlcnR5IHtCb29sZWFufSBzaG93ID0gW2ZhbHNlfHRydWVdIOaOp+WItue7hOS7tuaYvuekuuaIlumakOiXj1xuICogQHByb3BlcnR5IHtBcnJheXxTdHJpbmd9IG1vZGVDbGFzcyA9IFtmYWRlfHNsaWRlLXRvcHxzbGlkZS1yaWdodHxzbGlkZS1ib3R0b218c2xpZGUtbGVmdHx6b29tLWlufHpvb20tb3V0XSDov4fmuKHliqjnlLvnsbvlnotcbiAqICBAdmFsdWUgZmFkZSDmuJDpmpDmuJDlh7rov4fmuKFcbiAqICBAdmFsdWUgc2xpZGUtdG9wIOeUseS4iuiHs+S4i+i/h+a4oVxuICogIEB2YWx1ZSBzbGlkZS1yaWdodCDnlLHlj7Poh7Plt6bov4fmuKFcbiAqICBAdmFsdWUgc2xpZGUtYm90dG9tIOeUseS4i+iHs+S4iui/h+a4oVxuICogIEB2YWx1ZSBzbGlkZS1sZWZ0IOeUseW3puiHs+WPs+i/h+a4oVxuICogIEB2YWx1ZSB6b29tLWluIOeUseWwj+WIsOWkp+i/h+a4oVxuICogIEB2YWx1ZSB6b29tLW91dCDnlLHlpKfliLDlsI/ov4fmuKFcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBkdXJhdGlvbiDov4fmuKHliqjnlLvmjIHnu63ml7bpl7RcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBzdHlsZXMg57uE5Lu25qC35byP77yM5ZCMIGNzcyDmoLflvI/vvIzms6jmhI/luKbigJkt4oCY6L+e5o6l56ym55qE5bGe5oCn6ZyA6KaB5L2/55So5bCP6am85bOw5YaZ5rOV5aaC77yaYGJhY2tncm91bmRDb2xvcjpyZWRgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ3VuaVRyYW5zaXRpb24nLFxuXHRlbWl0czpbJ2NsaWNrJywnY2hhbmdlJ10sXG5cdHByb3BzOiB7XG5cdFx0c2hvdzoge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IGZhbHNlXG5cdFx0fSxcblx0XHRtb2RlQ2xhc3M6IHtcblx0XHRcdHR5cGU6IFtBcnJheSwgU3RyaW5nXSxcblx0XHRcdGRlZmF1bHQoKSB7XG5cdFx0XHRcdHJldHVybiAnZmFkZSdcblx0XHRcdH1cblx0XHR9LFxuXHRcdGR1cmF0aW9uOiB7XG5cdFx0XHR0eXBlOiBOdW1iZXIsXG5cdFx0XHRkZWZhdWx0OiAzMDBcblx0XHR9LFxuXHRcdHN0eWxlczoge1xuXHRcdFx0dHlwZTogT2JqZWN0LFxuXHRcdFx0ZGVmYXVsdCgpIHtcblx0XHRcdFx0cmV0dXJuIHt9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjdXN0b21DbGFzczp7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRkZWZhdWx0OiAnJ1xuXHRcdH1cblx0fSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aXNTaG93OiBmYWxzZSxcblx0XHRcdHRyYW5zZm9ybTogJycsXG5cdFx0XHRvcGFjaXR5OiAxLFxuXHRcdFx0YW5pbWF0aW9uRGF0YToge30sXG5cdFx0XHRkdXJhdGlvblRpbWU6IDMwMCxcblx0XHRcdGNvbmZpZzoge31cblx0XHR9XG5cdH0sXG5cdHdhdGNoOiB7XG5cdFx0c2hvdzoge1xuXHRcdFx0aGFuZGxlcihuZXdWYWwpIHtcblx0XHRcdFx0aWYgKG5ld1ZhbCkge1xuXHRcdFx0XHRcdHRoaXMub3BlbigpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8g6YG/5YWN5LiK5p2l5bCx5omn6KGMIGNsb3NlLOWvvOiHtOWKqOeUu+mUmeS5sVxuXHRcdFx0XHRcdGlmICh0aGlzLmlzU2hvdykge1xuXHRcdFx0XHRcdFx0dGhpcy5jbG9zZSgpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0aW1tZWRpYXRlOiB0cnVlXG5cdFx0fVxuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdC8vIOeUn+aIkOagt+W8j+aVsOaNrlxuXHRcdHN0eWxlc09iamVjdCgpIHtcblx0XHRcdGxldCBzdHlsZXMgPSB7XG5cdFx0XHRcdC4uLnRoaXMuc3R5bGVzLFxuXHRcdFx0XHQndHJhbnNpdGlvbi1kdXJhdGlvbic6IHRoaXMuZHVyYXRpb24gLyAxMDAwICsgJ3MnXG5cdFx0XHR9XG5cdFx0XHRsZXQgdHJhbnNmb3JtID0gJydcblx0XHRcdGZvciAobGV0IGkgaW4gc3R5bGVzKSB7XG5cdFx0XHRcdGxldCBsaW5lID0gdGhpcy50b0xpbmUoaSlcblx0XHRcdFx0dHJhbnNmb3JtICs9IGxpbmUgKyAnOicgKyBzdHlsZXNbaV0gKyAnOydcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cmFuc2Zvcm1cblx0XHR9LFxuXHRcdC8vIOWIneWni+WMluWKqOeUu+adoeS7tlxuXHRcdHRyYW5zZm9ybVN0eWxlcygpIHtcblx0XHRcdHJldHVybiAndHJhbnNmb3JtOicgKyB0aGlzLnRyYW5zZm9ybSArICc7JyArICdvcGFjaXR5OicgKyB0aGlzLm9wYWNpdHkgKyAnOycgKyB0aGlzLnN0eWxlc09iamVjdFxuXHRcdH1cblx0fSxcblx0Y3JlYXRlZCgpIHtcblx0XHQvLyDliqjnlLvpu5jorqTphY3nva5cblx0XHR0aGlzLmNvbmZpZyA9IHtcblx0XHRcdGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uLFxuXHRcdFx0dGltaW5nRnVuY3Rpb246ICdlYXNlJyxcblx0XHRcdHRyYW5zZm9ybU9yaWdpbjogJzUwJSA1MCUnLFxuXHRcdFx0ZGVsYXk6IDBcblx0XHR9XG5cdFx0dGhpcy5kdXJhdGlvblRpbWUgPSB0aGlzLmR1cmF0aW9uXG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHQvKipcblx0XHQgKiAgcmVmIOinpuWPkSDliJ3lp4vljJbliqjnlLtcblx0XHQgKi9cblx0XHRpbml0KG9iaiA9IHt9KSB7XG5cdFx0XHRpZiAob2JqLmR1cmF0aW9uKSB7XG5cdFx0XHRcdHRoaXMuZHVyYXRpb25UaW1lID0gb2JqLmR1cmF0aW9uXG5cdFx0XHR9XG5cdFx0XHR0aGlzLmFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbihPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLCBvYmopKVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICog54K55Ye757uE5Lu26Kem5Y+R5Zue6LCDXG5cdFx0ICovXG5cdFx0b25DbGljaygpIHtcblx0XHRcdHRoaXMuJGVtaXQoJ2NsaWNrJywge1xuXHRcdFx0XHRkZXRhaWw6IHRoaXMuaXNTaG93XG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogcmVmIOinpuWPkSDliqjnlLvliIbnu4Rcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gb2JqXG5cdFx0ICovXG5cdFx0c3RlcChvYmosIGNvbmZpZyA9IHt9KSB7XG5cdFx0XHRpZiAoIXRoaXMuYW5pbWF0aW9uKSByZXR1cm5cblx0XHRcdGZvciAobGV0IGkgaW4gb2JqKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aWYodHlwZW9mIG9ialtpXSA9PT0gJ29iamVjdCcpe1xuXHRcdFx0XHRcdFx0dGhpcy5hbmltYXRpb25baV0oLi4ub2JqW2ldKVxuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0dGhpcy5hbmltYXRpb25baV0ob2JqW2ldKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYOaWueazlSAke2l9IOS4jeWtmOWcqGApXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuYW5pbWF0aW9uLnN0ZXAoY29uZmlnKVxuXHRcdFx0cmV0dXJuIHRoaXNcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqICByZWYg6Kem5Y+RIOaJp+ihjOWKqOeUu1xuXHRcdCAqL1xuXHRcdHJ1bihmbikge1xuXHRcdFx0aWYgKCF0aGlzLmFuaW1hdGlvbikgcmV0dXJuXG5cdFx0XHR0aGlzLmFuaW1hdGlvbi5ydW4oZm4pXG5cdFx0fSxcblx0XHQvLyDlvIDlp4vov4fluqbliqjnlLtcblx0XHRvcGVuKCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXG5cdFx0XHR0aGlzLnRyYW5zZm9ybSA9ICcnXG5cdFx0XHR0aGlzLmlzU2hvdyA9IHRydWVcblx0XHRcdGxldCB7IG9wYWNpdHksIHRyYW5zZm9ybSB9ID0gdGhpcy5zdHlsZUluaXQoZmFsc2UpXG5cdFx0XHRpZiAodHlwZW9mIG9wYWNpdHkgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHRoaXMub3BhY2l0eSA9IG9wYWNpdHlcblx0XHRcdH1cblx0XHRcdHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5cdFx0XHQvLyDnoa7kv53liqjmgIHmoLflvI/lt7Lnu4/nlJ/mlYjlkI7vvIzmiafooYzliqjnlLvvvIzlpoLmnpzkuI3liqAgbmV4dFRpY2sg77yM5Lya5a+86Ie0IHd4IOWKqOeUu+aJp+ihjOW8guW4uFxuXHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHQvLyBUT0RPIOWumuaXtuWZqOS/neivgeWKqOeUu+WujOWFqOaJp+ihjO+8jOebruWJjeacieS6m+mXrumimO+8jOWQjumdouS8muWPlua2iOWumuaXtuWZqFxuXHRcdFx0XHR0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5hbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24odGhpcy5jb25maWcsIHRoaXMpXG5cdFx0XHRcdFx0dGhpcy50cmFuZnJvbUluaXQoZmFsc2UpLnN0ZXAoKVxuXHRcdFx0XHRcdHRoaXMuYW5pbWF0aW9uLnJ1bigpXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywge1xuXHRcdFx0XHRcdFx0ZGV0YWlsOiB0aGlzLmlzU2hvd1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0sIDIwKVxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdC8vIOWFs+mXrei/h+W6puWKqOeUu1xuXHRcdGNsb3NlKHR5cGUpIHtcblx0XHRcdGlmICghdGhpcy5hbmltYXRpb24pIHJldHVyblxuXHRcdFx0dGhpcy50cmFuZnJvbUluaXQodHJ1ZSlcblx0XHRcdFx0LnN0ZXAoKVxuXHRcdFx0XHQucnVuKCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmlzU2hvdyA9IGZhbHNlXG5cdFx0XHRcdFx0dGhpcy5hbmltYXRpb25EYXRhID0gbnVsbFxuXHRcdFx0XHRcdHRoaXMuYW5pbWF0aW9uID0gbnVsbFxuXHRcdFx0XHRcdGxldCB7IG9wYWNpdHksIHRyYW5zZm9ybSB9ID0gdGhpcy5zdHlsZUluaXQoZmFsc2UpXG5cdFx0XHRcdFx0dGhpcy5vcGFjaXR5ID0gb3BhY2l0eSB8fCAxXG5cdFx0XHRcdFx0dGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XG5cdFx0XHRcdFx0XHRkZXRhaWw6IHRoaXMuaXNTaG93XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSlcblx0XHR9LFxuXHRcdC8vIOWkhOeQhuWKqOeUu+W8gOWni+WJjeeahOm7mOiupOagt+W8j1xuXHRcdHN0eWxlSW5pdCh0eXBlKSB7XG5cdFx0XHRsZXQgc3R5bGVzID0ge1xuXHRcdFx0XHR0cmFuc2Zvcm06ICcnXG5cdFx0XHR9XG5cdFx0XHRsZXQgYnVpbGRTdHlsZSA9ICh0eXBlLCBtb2RlKSA9PiB7XG5cdFx0XHRcdGlmIChtb2RlID09PSAnZmFkZScpIHtcblx0XHRcdFx0XHRzdHlsZXMub3BhY2l0eSA9IHRoaXMuYW5pbWF0aW9uVHlwZSh0eXBlKVttb2RlXVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN0eWxlcy50cmFuc2Zvcm0gKz0gdGhpcy5hbmltYXRpb25UeXBlKHR5cGUpW21vZGVdICsgJyAnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5tb2RlQ2xhc3MgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGJ1aWxkU3R5bGUodHlwZSwgdGhpcy5tb2RlQ2xhc3MpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLm1vZGVDbGFzcy5mb3JFYWNoKG1vZGUgPT4ge1xuXHRcdFx0XHRcdGJ1aWxkU3R5bGUodHlwZSwgbW9kZSlcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHRcdHJldHVybiBzdHlsZXNcblx0XHR9LFxuXHRcdC8vIOWkhOeQhuWGhee9rue7hOWQiOWKqOeUu1xuXHRcdHRyYW5mcm9tSW5pdCh0eXBlKSB7XG5cdFx0XHRsZXQgYnVpbGRUcmFuZnJvbSA9ICh0eXBlLCBtb2RlKSA9PiB7XG5cdFx0XHRcdGxldCBhbmlOdW0gPSBudWxsXG5cdFx0XHRcdGlmIChtb2RlID09PSAnZmFkZScpIHtcblx0XHRcdFx0XHRhbmlOdW0gPSB0eXBlID8gMCA6IDFcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRhbmlOdW0gPSB0eXBlID8gJy0xMDAlJyA6ICcwJ1xuXHRcdFx0XHRcdGlmIChtb2RlID09PSAnem9vbS1pbicpIHtcblx0XHRcdFx0XHRcdGFuaU51bSA9IHR5cGUgPyAwLjggOiAxXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChtb2RlID09PSAnem9vbS1vdXQnKSB7XG5cdFx0XHRcdFx0XHRhbmlOdW0gPSB0eXBlID8gMS4yIDogMVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAobW9kZSA9PT0gJ3NsaWRlLXJpZ2h0Jykge1xuXHRcdFx0XHRcdFx0YW5pTnVtID0gdHlwZSA/ICcxMDAlJyA6ICcwJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAobW9kZSA9PT0gJ3NsaWRlLWJvdHRvbScpIHtcblx0XHRcdFx0XHRcdGFuaU51bSA9IHR5cGUgPyAnMTAwJScgOiAnMCdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5hbmltYXRpb25bdGhpcy5hbmltYXRpb25Nb2RlKClbbW9kZV1dKGFuaU51bSlcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5tb2RlQ2xhc3MgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGJ1aWxkVHJhbmZyb20odHlwZSwgdGhpcy5tb2RlQ2xhc3MpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLm1vZGVDbGFzcy5mb3JFYWNoKG1vZGUgPT4ge1xuXHRcdFx0XHRcdGJ1aWxkVHJhbmZyb20odHlwZSwgbW9kZSlcblx0XHRcdFx0fSlcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXMuYW5pbWF0aW9uXG5cdFx0fSxcblx0XHRhbmltYXRpb25UeXBlKHR5cGUpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGZhZGU6IHR5cGUgPyAxIDogMCxcblx0XHRcdFx0J3NsaWRlLXRvcCc6IGB0cmFuc2xhdGVZKCR7dHlwZSA/ICcwJyA6ICctMTAwJSd9KWAsXG5cdFx0XHRcdCdzbGlkZS1yaWdodCc6IGB0cmFuc2xhdGVYKCR7dHlwZSA/ICcwJyA6ICcxMDAlJ30pYCxcblx0XHRcdFx0J3NsaWRlLWJvdHRvbSc6IGB0cmFuc2xhdGVZKCR7dHlwZSA/ICcwJyA6ICcxMDAlJ30pYCxcblx0XHRcdFx0J3NsaWRlLWxlZnQnOiBgdHJhbnNsYXRlWCgke3R5cGUgPyAnMCcgOiAnLTEwMCUnfSlgLFxuXHRcdFx0XHQnem9vbS1pbic6IGBzY2FsZVgoJHt0eXBlID8gMSA6IDAuOH0pIHNjYWxlWSgke3R5cGUgPyAxIDogMC44fSlgLFxuXHRcdFx0XHQnem9vbS1vdXQnOiBgc2NhbGVYKCR7dHlwZSA/IDEgOiAxLjJ9KSBzY2FsZVkoJHt0eXBlID8gMSA6IDEuMn0pYFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly8g5YaF572u5Yqo55S757G75Z6L5LiO5a6e6ZmF5Yqo55S75a+55bqU5a2X5YW4XG5cdFx0YW5pbWF0aW9uTW9kZSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGZhZGU6ICdvcGFjaXR5Jyxcblx0XHRcdFx0J3NsaWRlLXRvcCc6ICd0cmFuc2xhdGVZJyxcblx0XHRcdFx0J3NsaWRlLXJpZ2h0JzogJ3RyYW5zbGF0ZVgnLFxuXHRcdFx0XHQnc2xpZGUtYm90dG9tJzogJ3RyYW5zbGF0ZVknLFxuXHRcdFx0XHQnc2xpZGUtbGVmdCc6ICd0cmFuc2xhdGVYJyxcblx0XHRcdFx0J3pvb20taW4nOiAnc2NhbGUnLFxuXHRcdFx0XHQnem9vbS1vdXQnOiAnc2NhbGUnXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvLyDpqbzls7DovazkuK3mqKrnur9cblx0XHR0b0xpbmUobmFtZSkge1xuXHRcdFx0cmV0dXJuIG5hbWUucmVwbGFjZSgvKFtBLVpdKS9nLCAnLSQxJykudG9Mb3dlckNhc2UoKVxuXHRcdH1cblx0fVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///200\n");

/***/ }),
/* 201 */
/*!****************************************************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-transition/components/uni-transition/createAnimation.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 150);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createAnimation = createAnimation;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 166));\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 177));\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 178));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n// const defaultOption = {\n// \tduration: 300,\n// \ttimingFunction: 'linear',\n// \tdelay: 0,\n// \ttransformOrigin: '50% 50% 0'\n// }\n\nvar nvueAnimation = __webpack_provided_uni_dot_requireNativePlugin('animation');\nvar MPAnimation = /*#__PURE__*/function () {\n  function MPAnimation(options, _this) {\n    (0, _classCallCheck2.default)(this, MPAnimation);\n    this.options = options;\n    this.animation = uni.createAnimation(options);\n    this.currentStepAnimates = {};\n    this.next = 0;\n    this.$ = _this;\n  }\n  (0, _createClass2.default)(MPAnimation, [{\n    key: \"_nvuePushAnimates\",\n    value: function _nvuePushAnimates(type, args) {\n      var aniObj = this.currentStepAnimates[this.next];\n      var styles = {};\n      if (!aniObj) {\n        styles = {\n          styles: {},\n          config: {}\n        };\n      } else {\n        styles = aniObj;\n      }\n      if (animateTypes1.includes(type)) {\n        if (!styles.styles.transform) {\n          styles.styles.transform = '';\n        }\n        var unit = '';\n        if (type === 'rotate') {\n          unit = 'deg';\n        }\n        styles.styles.transform += \"\".concat(type, \"(\").concat(args + unit, \") \");\n      } else {\n        styles.styles[type] = \"\".concat(args);\n      }\n      this.currentStepAnimates[this.next] = styles;\n    }\n  }, {\n    key: \"_animateRun\",\n    value: function _animateRun() {\n      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      var ref = this.$.$refs['ani'].ref;\n      if (!ref) return;\n      return new Promise(function (resolve, reject) {\n        nvueAnimation.transition(ref, _objectSpread({\n          styles: styles\n        }, config), function (res) {\n          resolve();\n        });\n      });\n    }\n  }, {\n    key: \"_nvueNextAnimate\",\n    value: function _nvueNextAnimate(animates) {\n      var _this2 = this;\n      var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n      var fn = arguments.length > 2 ? arguments[2] : undefined;\n      var obj = animates[step];\n      if (obj) {\n        var styles = obj.styles,\n          config = obj.config;\n        this._animateRun(styles, config).then(function () {\n          step += 1;\n          _this2._nvueNextAnimate(animates, step, fn);\n        });\n      } else {\n        this.currentStepAnimates = {};\n        typeof fn === 'function' && fn();\n        this.isEnd = true;\n      }\n    }\n  }, {\n    key: \"step\",\n    value: function step() {\n      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      this.currentStepAnimates[this.next].config = Object.assign({}, this.options, config);\n      this.currentStepAnimates[this.next].styles.transformOrigin = this.currentStepAnimates[this.next].config.transformOrigin;\n      this.next++;\n      return this;\n    }\n  }, {\n    key: \"run\",\n    value: function run(fn) {\n      this.isEnd = false;\n      var ref = this.$.$refs['ani'] && this.$.$refs['ani'].ref;\n      if (!ref) return;\n      this._nvueNextAnimate(this.currentStepAnimates, 0, fn);\n      this.next = 0;\n    }\n  }]);\n  return MPAnimation;\n}();\nvar animateTypes1 = ['matrix', 'matrix3d', 'rotate', 'rotate3d', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scale3d', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'translate', 'translate3d', 'translateX', 'translateY', 'translateZ'];\nvar animateTypes2 = ['opacity', 'backgroundColor'];\nvar animateTypes3 = ['width', 'height', 'left', 'right', 'top', 'bottom'];\nanimateTypes1.concat(animateTypes2, animateTypes3).forEach(function (type) {\n  MPAnimation.prototype[type] = function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    this._nvuePushAnimates(type, args);\n    return this;\n  };\n});\nfunction createAnimation(option, _this) {\n  if (!_this) return;\n  clearTimeout(_this.timer);\n  return new MPAnimation(option, _this);\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 149)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXRyYW5zaXRpb24vY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi9jcmVhdGVBbmltYXRpb24uanMiXSwibmFtZXMiOlsibnZ1ZUFuaW1hdGlvbiIsInVuaSIsIk1QQW5pbWF0aW9uIiwib3B0aW9ucyIsIl90aGlzIiwiYW5pbWF0aW9uIiwiY3JlYXRlQW5pbWF0aW9uIiwiY3VycmVudFN0ZXBBbmltYXRlcyIsIm5leHQiLCIkIiwidHlwZSIsImFyZ3MiLCJhbmlPYmoiLCJzdHlsZXMiLCJjb25maWciLCJhbmltYXRlVHlwZXMxIiwiaW5jbHVkZXMiLCJ0cmFuc2Zvcm0iLCJ1bml0IiwicmVmIiwiJHJlZnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRyYW5zaXRpb24iLCJyZXMiLCJhbmltYXRlcyIsInN0ZXAiLCJmbiIsIm9iaiIsIl9hbmltYXRlUnVuIiwidGhlbiIsIl9udnVlTmV4dEFuaW1hdGUiLCJpc0VuZCIsIk9iamVjdCIsImFzc2lnbiIsInRyYW5zZm9ybU9yaWdpbiIsImFuaW1hdGVUeXBlczIiLCJhbmltYXRlVHlwZXMzIiwiY29uY2F0IiwiZm9yRWFjaCIsInByb3RvdHlwZSIsIl9udnVlUHVzaEFuaW1hdGVzIiwib3B0aW9uIiwiY2xlYXJUaW1lb3V0IiwidGltZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLDhDQUF1QixDQUFDLFdBQVcsQ0FBQztBQUFBLElBRXBEQyxXQUFXO0VBQ2hCLHFCQUFZQyxPQUFPLEVBQUVDLEtBQUssRUFBRTtJQUFBO0lBQzNCLElBQUksQ0FBQ0QsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ0UsU0FBUyxHQUFHSixHQUFHLENBQUNLLGVBQWUsQ0FBQ0gsT0FBTyxDQUFDO0lBQzdDLElBQUksQ0FBQ0ksbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHLENBQUM7SUFDYixJQUFJLENBQUNDLENBQUMsR0FBR0wsS0FBSztFQUVmO0VBQUM7SUFBQTtJQUFBLE9BRUQsMkJBQWtCTSxJQUFJLEVBQUVDLElBQUksRUFBRTtNQUM3QixJQUFJQyxNQUFNLEdBQUcsSUFBSSxDQUFDTCxtQkFBbUIsQ0FBQyxJQUFJLENBQUNDLElBQUksQ0FBQztNQUNoRCxJQUFJSyxNQUFNLEdBQUcsQ0FBQyxDQUFDO01BQ2YsSUFBSSxDQUFDRCxNQUFNLEVBQUU7UUFDWkMsTUFBTSxHQUFHO1VBQ1JBLE1BQU0sRUFBRSxDQUFDLENBQUM7VUFDVkMsTUFBTSxFQUFFLENBQUM7UUFDVixDQUFDO01BQ0YsQ0FBQyxNQUFNO1FBQ05ELE1BQU0sR0FBR0QsTUFBTTtNQUNoQjtNQUNBLElBQUlHLGFBQWEsQ0FBQ0MsUUFBUSxDQUFDTixJQUFJLENBQUMsRUFBRTtRQUNqQyxJQUFJLENBQUNHLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDSSxTQUFTLEVBQUU7VUFDN0JKLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDSSxTQUFTLEdBQUcsRUFBRTtRQUM3QjtRQUNBLElBQUlDLElBQUksR0FBRyxFQUFFO1FBQ2IsSUFBR1IsSUFBSSxLQUFLLFFBQVEsRUFBQztVQUNwQlEsSUFBSSxHQUFHLEtBQUs7UUFDYjtRQUNBTCxNQUFNLENBQUNBLE1BQU0sQ0FBQ0ksU0FBUyxjQUFPUCxJQUFJLGNBQUlDLElBQUksR0FBQ08sSUFBSSxPQUFJO01BQ3BELENBQUMsTUFBTTtRQUNOTCxNQUFNLENBQUNBLE1BQU0sQ0FBQ0gsSUFBSSxDQUFDLGFBQU1DLElBQUksQ0FBRTtNQUNoQztNQUNBLElBQUksQ0FBQ0osbUJBQW1CLENBQUMsSUFBSSxDQUFDQyxJQUFJLENBQUMsR0FBR0ssTUFBTTtJQUM3QztFQUFDO0lBQUE7SUFBQSxPQUNELHVCQUFzQztNQUFBLElBQTFCQSxNQUFNLHVFQUFHLENBQUMsQ0FBQztNQUFBLElBQUVDLE1BQU0sdUVBQUcsQ0FBQyxDQUFDO01BQ25DLElBQUlLLEdBQUcsR0FBRyxJQUFJLENBQUNWLENBQUMsQ0FBQ1csS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDRCxHQUFHO01BQ2pDLElBQUksQ0FBQ0EsR0FBRyxFQUFFO01BQ1YsT0FBTyxJQUFJRSxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7UUFDdkN2QixhQUFhLENBQUN3QixVQUFVLENBQUNMLEdBQUc7VUFDM0JOLE1BQU0sRUFBTkE7UUFBTSxHQUNIQyxNQUFNLEdBQ1AsVUFBQVcsR0FBRyxFQUFJO1VBQ1RILE9BQU8sRUFBRTtRQUNWLENBQUMsQ0FBQztNQUNILENBQUMsQ0FBQztJQUNIO0VBQUM7SUFBQTtJQUFBLE9BRUQsMEJBQWlCSSxRQUFRLEVBQWdCO01BQUE7TUFBQSxJQUFkQyxJQUFJLHVFQUFHLENBQUM7TUFBQSxJQUFFQyxFQUFFO01BQ3RDLElBQUlDLEdBQUcsR0FBR0gsUUFBUSxDQUFDQyxJQUFJLENBQUM7TUFDeEIsSUFBSUUsR0FBRyxFQUFFO1FBQ1IsSUFDQ2hCLE1BQU0sR0FFSGdCLEdBQUcsQ0FGTmhCLE1BQU07VUFDTkMsTUFBTSxHQUNIZSxHQUFHLENBRE5mLE1BQU07UUFFUCxJQUFJLENBQUNnQixXQUFXLENBQUNqQixNQUFNLEVBQUVDLE1BQU0sQ0FBQyxDQUFDaUIsSUFBSSxDQUFDLFlBQU07VUFDM0NKLElBQUksSUFBSSxDQUFDO1VBQ1QsTUFBSSxDQUFDSyxnQkFBZ0IsQ0FBQ04sUUFBUSxFQUFFQyxJQUFJLEVBQUVDLEVBQUUsQ0FBQztRQUMxQyxDQUFDLENBQUM7TUFDSCxDQUFDLE1BQU07UUFDTixJQUFJLENBQUNyQixtQkFBbUIsR0FBRyxDQUFDLENBQUM7UUFDN0IsT0FBT3FCLEVBQUUsS0FBSyxVQUFVLElBQUlBLEVBQUUsRUFBRTtRQUNoQyxJQUFJLENBQUNLLEtBQUssR0FBRyxJQUFJO01BQ2xCO0lBQ0Q7RUFBQztJQUFBO0lBQUEsT0FFRCxnQkFBa0I7TUFBQSxJQUFibkIsTUFBTSx1RUFBRyxDQUFDLENBQUM7TUFLZixJQUFJLENBQUNQLG1CQUFtQixDQUFDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUNNLE1BQU0sR0FBR29CLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ2hDLE9BQU8sRUFBRVcsTUFBTSxDQUFDO01BQ3BGLElBQUksQ0FBQ1AsbUJBQW1CLENBQUMsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQ0ssTUFBTSxDQUFDdUIsZUFBZSxHQUFHLElBQUksQ0FBQzdCLG1CQUFtQixDQUFDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUNNLE1BQU0sQ0FBQ3NCLGVBQWU7TUFDdkgsSUFBSSxDQUFDNUIsSUFBSSxFQUFFO01BRVgsT0FBTyxJQUFJO0lBQ1o7RUFBQztJQUFBO0lBQUEsT0FFRCxhQUFJb0IsRUFBRSxFQUFFO01BUVAsSUFBSSxDQUFDSyxLQUFLLEdBQUcsS0FBSztNQUNsQixJQUFJZCxHQUFHLEdBQUcsSUFBSSxDQUFDVixDQUFDLENBQUNXLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUNYLENBQUMsQ0FBQ1csS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDRCxHQUFHO01BQ3hELElBQUcsQ0FBQ0EsR0FBRyxFQUFFO01BQ1QsSUFBSSxDQUFDYSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUN6QixtQkFBbUIsRUFBRSxDQUFDLEVBQUVxQixFQUFFLENBQUM7TUFDdEQsSUFBSSxDQUFDcEIsSUFBSSxHQUFHLENBQUM7SUFFZDtFQUFDO0VBQUE7QUFBQTtBQUlGLElBQU1PLGFBQWEsR0FBRyxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUNySCxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQzlHLFlBQVksQ0FDWjtBQUNELElBQU1zQixhQUFhLEdBQUcsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUM7QUFDcEQsSUFBTUMsYUFBYSxHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUM7QUFDM0V2QixhQUFhLENBQUN3QixNQUFNLENBQUNGLGFBQWEsRUFBRUMsYUFBYSxDQUFDLENBQUNFLE9BQU8sQ0FBQyxVQUFBOUIsSUFBSSxFQUFJO0VBQ2xFUixXQUFXLENBQUN1QyxTQUFTLENBQUMvQixJQUFJLENBQUMsR0FBRyxZQUFrQjtJQUFBLGtDQUFOQyxJQUFJO01BQUpBLElBQUk7SUFBQTtJQUs3QyxJQUFJLENBQUMrQixpQkFBaUIsQ0FBQ2hDLElBQUksRUFBRUMsSUFBSSxDQUFDO0lBRWxDLE9BQU8sSUFBSTtFQUNaLENBQUM7QUFDRixDQUFDLENBQUM7QUFFSyxTQUFTTCxlQUFlLENBQUNxQyxNQUFNLEVBQUV2QyxLQUFLLEVBQUU7RUFDOUMsSUFBRyxDQUFDQSxLQUFLLEVBQUU7RUFDWHdDLFlBQVksQ0FBQ3hDLEtBQUssQ0FBQ3lDLEtBQUssQ0FBQztFQUN6QixPQUFPLElBQUkzQyxXQUFXLENBQUN5QyxNQUFNLEVBQUV2QyxLQUFLLENBQUM7QUFDdEMsQyIsImZpbGUiOiIyMDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBkZWZhdWx0T3B0aW9uID0ge1xuLy8gXHRkdXJhdGlvbjogMzAwLFxuLy8gXHR0aW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsXG4vLyBcdGRlbGF5OiAwLFxuLy8gXHR0cmFuc2Zvcm1PcmlnaW46ICc1MCUgNTAlIDAnXG4vLyB9XG5cbmNvbnN0IG52dWVBbmltYXRpb24gPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignYW5pbWF0aW9uJylcblxuY2xhc3MgTVBBbmltYXRpb24ge1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zLCBfdGhpcykge1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcblx0XHR0aGlzLmFuaW1hdGlvbiA9IHVuaS5jcmVhdGVBbmltYXRpb24ob3B0aW9ucylcblx0XHR0aGlzLmN1cnJlbnRTdGVwQW5pbWF0ZXMgPSB7fVxuXHRcdHRoaXMubmV4dCA9IDBcblx0XHR0aGlzLiQgPSBfdGhpc1xuXG5cdH1cblxuXHRfbnZ1ZVB1c2hBbmltYXRlcyh0eXBlLCBhcmdzKSB7XG5cdFx0bGV0IGFuaU9iaiA9IHRoaXMuY3VycmVudFN0ZXBBbmltYXRlc1t0aGlzLm5leHRdXG5cdFx0bGV0IHN0eWxlcyA9IHt9XG5cdFx0aWYgKCFhbmlPYmopIHtcblx0XHRcdHN0eWxlcyA9IHtcblx0XHRcdFx0c3R5bGVzOiB7fSxcblx0XHRcdFx0Y29uZmlnOiB7fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZXMgPSBhbmlPYmpcblx0XHR9XG5cdFx0aWYgKGFuaW1hdGVUeXBlczEuaW5jbHVkZXModHlwZSkpIHtcblx0XHRcdGlmICghc3R5bGVzLnN0eWxlcy50cmFuc2Zvcm0pIHtcblx0XHRcdFx0c3R5bGVzLnN0eWxlcy50cmFuc2Zvcm0gPSAnJ1xuXHRcdFx0fVxuXHRcdFx0bGV0IHVuaXQgPSAnJ1xuXHRcdFx0aWYodHlwZSA9PT0gJ3JvdGF0ZScpe1xuXHRcdFx0XHR1bml0ID0gJ2RlZydcblx0XHRcdH1cblx0XHRcdHN0eWxlcy5zdHlsZXMudHJhbnNmb3JtICs9IGAke3R5cGV9KCR7YXJncyt1bml0fSkgYFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZXMuc3R5bGVzW3R5cGVdID0gYCR7YXJnc31gXG5cdFx0fVxuXHRcdHRoaXMuY3VycmVudFN0ZXBBbmltYXRlc1t0aGlzLm5leHRdID0gc3R5bGVzXG5cdH1cblx0X2FuaW1hdGVSdW4oc3R5bGVzID0ge30sIGNvbmZpZyA9IHt9KSB7XG5cdFx0bGV0IHJlZiA9IHRoaXMuJC4kcmVmc1snYW5pJ10ucmVmXG5cdFx0aWYgKCFyZWYpIHJldHVyblxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRudnVlQW5pbWF0aW9uLnRyYW5zaXRpb24ocmVmLCB7XG5cdFx0XHRcdHN0eWxlcyxcblx0XHRcdFx0Li4uY29uZmlnXG5cdFx0XHR9LCByZXMgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKClcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdF9udnVlTmV4dEFuaW1hdGUoYW5pbWF0ZXMsIHN0ZXAgPSAwLCBmbikge1xuXHRcdGxldCBvYmogPSBhbmltYXRlc1tzdGVwXVxuXHRcdGlmIChvYmopIHtcblx0XHRcdGxldCB7XG5cdFx0XHRcdHN0eWxlcyxcblx0XHRcdFx0Y29uZmlnXG5cdFx0XHR9ID0gb2JqXG5cdFx0XHR0aGlzLl9hbmltYXRlUnVuKHN0eWxlcywgY29uZmlnKS50aGVuKCgpID0+IHtcblx0XHRcdFx0c3RlcCArPSAxXG5cdFx0XHRcdHRoaXMuX252dWVOZXh0QW5pbWF0ZShhbmltYXRlcywgc3RlcCwgZm4pXG5cdFx0XHR9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmN1cnJlbnRTdGVwQW5pbWF0ZXMgPSB7fVxuXHRcdFx0dHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIGZuKClcblx0XHRcdHRoaXMuaXNFbmQgPSB0cnVlXG5cdFx0fVxuXHR9XG5cblx0c3RlcChjb25maWcgPSB7fSkge1xuXG5cblxuXG5cdFx0dGhpcy5jdXJyZW50U3RlcEFuaW1hdGVzW3RoaXMubmV4dF0uY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCBjb25maWcpXG5cdFx0dGhpcy5jdXJyZW50U3RlcEFuaW1hdGVzW3RoaXMubmV4dF0uc3R5bGVzLnRyYW5zZm9ybU9yaWdpbiA9IHRoaXMuY3VycmVudFN0ZXBBbmltYXRlc1t0aGlzLm5leHRdLmNvbmZpZy50cmFuc2Zvcm1PcmlnaW5cblx0XHR0aGlzLm5leHQrK1xuXG5cdFx0cmV0dXJuIHRoaXNcblx0fVxuXG5cdHJ1bihmbikge1xuXG5cblxuXG5cblxuXG5cdFx0dGhpcy5pc0VuZCA9IGZhbHNlXG5cdFx0bGV0IHJlZiA9IHRoaXMuJC4kcmVmc1snYW5pJ10gJiYgdGhpcy4kLiRyZWZzWydhbmknXS5yZWZcblx0XHRpZighcmVmKSByZXR1cm5cblx0XHR0aGlzLl9udnVlTmV4dEFuaW1hdGUodGhpcy5jdXJyZW50U3RlcEFuaW1hdGVzLCAwLCBmbilcblx0XHR0aGlzLm5leHQgPSAwXG5cblx0fVxufVxuXG5cbmNvbnN0IGFuaW1hdGVUeXBlczEgPSBbJ21hdHJpeCcsICdtYXRyaXgzZCcsICdyb3RhdGUnLCAncm90YXRlM2QnLCAncm90YXRlWCcsICdyb3RhdGVZJywgJ3JvdGF0ZVonLCAnc2NhbGUnLCAnc2NhbGUzZCcsXG5cdCdzY2FsZVgnLCAnc2NhbGVZJywgJ3NjYWxlWicsICdza2V3JywgJ3NrZXdYJywgJ3NrZXdZJywgJ3RyYW5zbGF0ZScsICd0cmFuc2xhdGUzZCcsICd0cmFuc2xhdGVYJywgJ3RyYW5zbGF0ZVknLFxuXHQndHJhbnNsYXRlWidcbl1cbmNvbnN0IGFuaW1hdGVUeXBlczIgPSBbJ29wYWNpdHknLCAnYmFja2dyb3VuZENvbG9yJ11cbmNvbnN0IGFuaW1hdGVUeXBlczMgPSBbJ3dpZHRoJywgJ2hlaWdodCcsICdsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICdib3R0b20nXVxuYW5pbWF0ZVR5cGVzMS5jb25jYXQoYW5pbWF0ZVR5cGVzMiwgYW5pbWF0ZVR5cGVzMykuZm9yRWFjaCh0eXBlID0+IHtcblx0TVBBbmltYXRpb24ucHJvdG90eXBlW3R5cGVdID0gZnVuY3Rpb24oLi4uYXJncykge1xuXG5cblxuXG5cdFx0dGhpcy5fbnZ1ZVB1c2hBbmltYXRlcyh0eXBlLCBhcmdzKVxuXG5cdFx0cmV0dXJuIHRoaXNcblx0fVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFuaW1hdGlvbihvcHRpb24sIF90aGlzKSB7XG5cdGlmKCFfdGhpcykgcmV0dXJuXG5cdGNsZWFyVGltZW91dChfdGhpcy50aW1lcilcblx0cmV0dXJuIG5ldyBNUEFuaW1hdGlvbihvcHRpb24sIF90aGlzKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///201\n");

/***/ }),
/* 202 */
/*!**************************************************************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=script&lang=js& */ 203);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRjLENBQWdCLDZjQUFHLEVBQUMiLCJmaWxlIjoiMjAyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///202\n");

/***/ }),
/* 203 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/**\n * PopUp 弹出层\n * @description 弹出层组件，为了解决遮罩弹层的问题\n * @tutorial https://ext.dcloud.net.cn/plugin?id=329\n * @property {String} type = [top|center|bottom|left|right|message|dialog|share] 弹出方式\n * \t@value top 顶部弹出\n * \t@value center 中间弹出\n * \t@value bottom 底部弹出\n * \t@value left\t\t左侧弹出\n * \t@value right  右侧弹出\n * \t@value message 消息提示\n * \t@value dialog 对话框\n * \t@value share 底部分享示例\n * @property {Boolean} animation = [ture|false] 是否开启动画\n * @property {Boolean} maskClick = [ture|false] 蒙版点击是否关闭弹窗\n * @property {String}  backgroundColor \t\t\t\t\t主窗口背景色\n * @property {Boolean} safeArea\t\t\t\t\t\t\t\t\t是否适配底部安全区\n * @event {Function} change 打开关闭弹窗触发，e={show: false}\n */\nvar _default = {\n  name: 'uniPopup',\n  components: {},\n  emits: ['change', 'maskClick'],\n  props: {\n    // 开启动画\n    animation: {\n      type: Boolean,\n      default: true\n    },\n    // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层\n    // message: 消息提示 ; dialog : 对话框\n    type: {\n      type: String,\n      default: 'center'\n    },\n    // maskClick\n    maskClick: {\n      type: Boolean,\n      default: true\n    },\n    backgroundColor: {\n      type: String,\n      default: 'none'\n    },\n    safeArea: {\n      type: Boolean,\n      default: true\n    }\n  },\n  watch: {\n    /**\n     * 监听type类型\n     */\n    type: {\n      handler: function handler(type) {\n        if (!this.config[type]) return;\n        this[this.config[type]](true);\n      },\n      immediate: true\n    },\n    isDesktop: {\n      handler: function handler(newVal) {\n        if (!this.config[newVal]) return;\n        this[this.config[this.type]](true);\n      },\n      immediate: true\n    },\n    /**\n     * 监听遮罩是否可点击\n     * @param {Object} val\n     */\n    maskClick: {\n      handler: function handler(val) {\n        this.mkclick = val;\n      },\n      immediate: true\n    }\n  },\n  data: function data() {\n    return {\n      duration: 300,\n      ani: [],\n      showPopup: false,\n      showTrans: false,\n      popupWidth: 0,\n      popupHeight: 0,\n      config: {\n        top: 'top',\n        bottom: 'bottom',\n        center: 'center',\n        left: 'left',\n        right: 'right',\n        message: 'top',\n        dialog: 'center',\n        share: 'bottom',\n        comment: 'bottom'\n      },\n      maskClass: {\n        position: 'fixed',\n        bottom: 0,\n        top: 0,\n        left: 0,\n        right: 0,\n        backgroundColor: 'rgba(0, 0, 0, 0.4)'\n      },\n      transClass: {\n        position: 'fixed',\n        left: 0,\n        right: 0\n      },\n      maskShow: true,\n      mkclick: true,\n      popupstyle: this.isDesktop ? 'fixforpc-top' : 'top'\n    };\n  },\n  computed: {\n    isDesktop: function isDesktop() {\n      return this.popupWidth >= 500 && this.popupHeight >= 500;\n    },\n    bg: function bg() {\n      if (this.backgroundColor === '' || this.backgroundColor === 'none') {\n        return 'transparent';\n      }\n      return this.backgroundColor;\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n    var fixSize = function fixSize() {\n      var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),\n        windowWidth = _uni$getSystemInfoSyn.windowWidth,\n        windowHeight = _uni$getSystemInfoSyn.windowHeight,\n        windowTop = _uni$getSystemInfoSyn.windowTop,\n        safeAreaInsets = _uni$getSystemInfoSyn.safeAreaInsets;\n      _this.popupWidth = windowWidth;\n      _this.popupHeight = windowHeight + windowTop;\n      // 是否适配底部安全区\n      if (_this.safeArea) {\n        _this.safeAreaInsets = safeAreaInsets;\n      } else {\n        _this.safeAreaInsets = 0;\n      }\n    };\n    fixSize();\n  },\n  created: function created() {\n    this.mkclick = this.maskClick;\n    if (this.animation) {\n      this.duration = 300;\n    } else {\n      this.duration = 0;\n    }\n    // TODO 处理 message 组件生命周期异常的问题\n    this.messageChild = null;\n    // TODO 解决头条冒泡的问题\n    this.clearPropagation = false;\n  },\n  methods: {\n    /**\n     * 公用方法，不显示遮罩层\n     */\n    closeMask: function closeMask() {\n      this.maskShow = false;\n    },\n    /**\n     * 公用方法，遮罩层禁止点击\n     */\n    disableMask: function disableMask() {\n      this.mkclick = false;\n    },\n    // TODO nvue 取消冒泡\n    clear: function clear(e) {\n      this.clearPropagation = true;\n    },\n    open: function open(direction) {\n      var innerType = ['top', 'center', 'bottom', 'left', 'right', 'message', 'dialog', 'share', 'comment'];\n      if (!(direction && innerType.indexOf(direction) !== -1)) {\n        direction = this.type;\n      }\n      if (!this.config[direction]) {\n        __f__(\"error\", '缺少类型：', direction, \" at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:211\");\n        return;\n      }\n      this[this.config[direction]]();\n      this.$emit('change', {\n        show: true,\n        type: direction\n      });\n    },\n    close: function close(type) {\n      var _this2 = this;\n      this.showTrans = false;\n      this.$emit('change', {\n        show: false,\n        type: this.type\n      });\n      clearTimeout(this.timer);\n      // // 自定义关闭事件\n      // this.customOpen && this.customClose()\n      this.timer = setTimeout(function () {\n        _this2.showPopup = false;\n      }, 300);\n    },\n    // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容\n    touchstart: function touchstart() {\n      this.clearPropagation = false;\n    },\n    onTap: function onTap() {\n      if (this.clearPropagation) {\n        // fix by mehaotian 兼容 nvue\n        this.clearPropagation = false;\n        return;\n      }\n      this.$emit('maskClick');\n      if (!this.mkclick) return;\n      this.close();\n      // console.log(\"点击遮罩\");\n      uni.showTabBar({\n        animation: true\n      });\n    },\n    /**\n     * 顶部弹出样式处理\n     */\n    top: function top(type) {\n      var _this3 = this;\n      this.popupstyle = this.isDesktop ? 'fixforpc-top' : 'top';\n      this.ani = ['slide-top'];\n      this.transClass = {\n        position: 'fixed',\n        left: 0,\n        right: 0,\n        backgroundColor: this.bg\n      };\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n      this.$nextTick(function () {\n        if (_this3.messageChild && _this3.type === 'message') {\n          _this3.messageChild.timerClose();\n        }\n      });\n    },\n    /**\n     * 底部弹出样式处理\n     */\n    bottom: function bottom(type) {\n      this.popupstyle = 'bottom';\n      this.ani = ['slide-bottom'];\n      this.transClass = {\n        position: 'fixed',\n        left: 0,\n        right: 0,\n        bottom: 0,\n        paddingBottom: this.safeAreaInsets && this.safeAreaInsets.bottom || 0,\n        backgroundColor: this.bg\n      };\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    },\n    /**\n     * 中间弹出样式处理\n     */\n    center: function center(type) {\n      this.popupstyle = 'center';\n      this.ani = ['zoom-out', 'fade'];\n      this.transClass = {\n        position: 'fixed',\n        bottom: 0,\n        left: 0,\n        right: 0,\n        top: 0,\n        justifyContent: 'center',\n        alignItems: 'center'\n      };\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    },\n    left: function left(type) {\n      this.popupstyle = 'left';\n      this.ani = ['slide-left'];\n      this.transClass = {\n        position: 'fixed',\n        left: 0,\n        bottom: 0,\n        top: 0,\n        backgroundColor: this.bg\n      };\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    },\n    right: function right(type) {\n      this.popupstyle = 'right';\n      this.ani = ['slide-right'];\n      this.transClass = {\n        position: 'fixed',\n        bottom: 0,\n        right: 0,\n        top: 0,\n        backgroundColor: this.bg\n      };\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 123)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXBvcHVwL2NvbXBvbmVudHMvdW5pLXBvcHVwL3VuaS1wb3B1cC52dWUiXSwibmFtZXMiOlsibmFtZSIsImNvbXBvbmVudHMiLCJlbWl0cyIsInByb3BzIiwiYW5pbWF0aW9uIiwidHlwZSIsImRlZmF1bHQiLCJtYXNrQ2xpY2siLCJiYWNrZ3JvdW5kQ29sb3IiLCJzYWZlQXJlYSIsIndhdGNoIiwiaGFuZGxlciIsImltbWVkaWF0ZSIsImlzRGVza3RvcCIsImRhdGEiLCJkdXJhdGlvbiIsImFuaSIsInNob3dQb3B1cCIsInNob3dUcmFucyIsInBvcHVwV2lkdGgiLCJwb3B1cEhlaWdodCIsImNvbmZpZyIsInRvcCIsImJvdHRvbSIsImNlbnRlciIsImxlZnQiLCJyaWdodCIsIm1lc3NhZ2UiLCJkaWFsb2ciLCJzaGFyZSIsImNvbW1lbnQiLCJtYXNrQ2xhc3MiLCJwb3NpdGlvbiIsInRyYW5zQ2xhc3MiLCJtYXNrU2hvdyIsIm1rY2xpY2siLCJwb3B1cHN0eWxlIiwiY29tcHV0ZWQiLCJiZyIsIm1vdW50ZWQiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsIndpbmRvd1RvcCIsInNhZmVBcmVhSW5zZXRzIiwiZml4U2l6ZSIsImNyZWF0ZWQiLCJtZXRob2RzIiwiY2xvc2VNYXNrIiwiZGlzYWJsZU1hc2siLCJjbGVhciIsIm9wZW4iLCJkaXJlY3Rpb24iLCJzaG93IiwiY2xvc2UiLCJjbGVhclRpbWVvdXQiLCJ0b3VjaHN0YXJ0Iiwib25UYXAiLCJ1bmkiLCJwYWRkaW5nQm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQSxlQW9CQTtFQUNBQTtFQUNBQyxhQUlBO0VBQ0FDO0VBQ0FDO0lBQ0E7SUFDQUM7TUFDQUM7TUFDQUM7SUFDQTtJQUNBO0lBQ0E7SUFDQUQ7TUFDQUE7TUFDQUM7SUFDQTtJQUNBO0lBQ0FDO01BQ0FGO01BQ0FDO0lBQ0E7SUFDQUU7TUFDQUg7TUFDQUM7SUFDQTtJQUNBRztNQUNBSjtNQUNBQztJQUNBO0VBQ0E7RUFFQUk7SUFDQTtBQUNBO0FBQ0E7SUFDQUw7TUFDQU07UUFDQTtRQUNBO01BQ0E7TUFDQUM7SUFDQTtJQUNBQztNQUNBRjtRQUNBO1FBQ0E7TUFDQTtNQUNBQztJQUNBO0lBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDQUw7TUFDQUk7UUFDQTtNQUNBO01BQ0FDO0lBQ0E7RUFDQTtFQUNBRTtJQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO01BQ0E7TUFDQUM7UUFDQUM7UUFDQVQ7UUFDQUQ7UUFDQUc7UUFDQUM7UUFDQWxCO01BQ0E7TUFDQXlCO1FBQ0FEO1FBQ0FQO1FBQ0FDO01BQ0E7TUFDQVE7TUFDQUM7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0F4QjtNQUNBO0lBQ0E7SUFDQXlCO01BQ0E7UUFDQTtNQUNBO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQUE7SUFDQTtNQUNBO1FBQUFDO1FBQUFDO1FBQUFDO1FBQUFDO01BQ0E7TUFDQTtNQUNBO01BQ0E7UUFDQTtNQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FDO0VBT0E7RUFDQUM7SUFDQTtJQUNBO01BQ0E7SUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUlBO0lBQ0E7SUFFQUM7TUFDQTtNQUNBO1FBQ0FDO01BQ0E7TUFDQTtRQUNBO1FBQ0E7TUFDQTtNQUNBO01BQ0E7UUFDQUM7UUFDQS9DO01BQ0E7SUFDQTtJQUNBZ0Q7TUFBQTtNQUNBO01BQ0E7UUFDQUQ7UUFDQS9DO01BQ0E7TUFDQWlEO01BQ0E7TUFDQTtNQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBRUFDO01BQ0E7UUFDQTtRQUNBO1FBQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0FDO1FBQ0FyRDtNQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQWtCO01BQUE7TUFDQTtNQUNBO01BQ0E7UUFDQVU7UUFDQVA7UUFDQUM7UUFDQWxCO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO1FBQ0E7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBZTtNQUNBO01BQ0E7TUFFQTtRQUNBUztRQUNBUDtRQUNBQztRQUNBSDtRQUNBbUM7UUFDQWxEO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0FnQjtNQUNBO01BQ0E7TUFDQTtRQUNBUTtRQUtBVDtRQUNBRTtRQUNBQztRQUNBSjtRQUNBcUM7UUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQW5DO01BQ0E7TUFDQTtNQUNBO1FBQ0FPO1FBQ0FQO1FBQ0FGO1FBQ0FEO1FBQ0FkO01BS0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0FrQjtNQUNBO01BQ0E7TUFDQTtRQUNBTTtRQUNBVDtRQUNBRztRQUNBSjtRQUNBZDtNQUtBO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDQTtFQUNBO0FBQ0E7QUFBQSwyQiIsImZpbGUiOiIyMDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDx2aWV3IHYtaWY9XCJzaG93UG9wdXBcIiBjbGFzcz1cInVuaS1wb3B1cFwiIDpjbGFzcz1cIltwb3B1cHN0eWxlLCBpc0Rlc2t0b3AgPyAnZml4Zm9ycGMtei1pbmRleCcgOiAnJ11cIiBAdG91Y2htb3ZlLnN0b3AucHJldmVudD1cImNsZWFyXCI+XG5cdFx0PHZpZXcgQHRvdWNoc3RhcnQ9XCJ0b3VjaHN0YXJ0XCIgPlxuXHRcdFx0PHVuaS10cmFuc2l0aW9uIGtleT1cIjFcIiB2LWlmPVwibWFza1Nob3dcIiBuYW1lPVwibWFza1wiIG1vZGUtY2xhc3M9XCJmYWRlXCIgOnN0eWxlcz1cIm1hc2tDbGFzc1wiIDpkdXJhdGlvbj1cImR1cmF0aW9uXCIgOnNob3c9XCJzaG93VHJhbnNcIiBAY2xpY2s9XCJvblRhcFwiIC8+XG5cdFx0XHQ8dW5pLXRyYW5zaXRpb24ga2V5PVwiMlwiIDptb2RlLWNsYXNzPVwiYW5pXCIgbmFtZT1cImNvbnRlbnRcIiA6c3R5bGVzPVwidHJhbnNDbGFzc1wiIDpkdXJhdGlvbj1cImR1cmF0aW9uXCIgOnNob3c9XCJzaG93VHJhbnNcIiBAY2xpY2s9XCJvblRhcFwiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1wb3B1cF9fd3JhcHBlclwiIDpzdHlsZT1cInsgYmFja2dyb3VuZENvbG9yOiBiZyB9XCIgOmNsYXNzPVwiW3BvcHVwc3R5bGVdXCIgQGNsaWNrPVwiY2xlYXJcIj48c2xvdCAvPjwvdmlldz5cblx0XHRcdDwvdW5pLXRyYW5zaXRpb24+XG5cdFx0PC92aWV3PlxuXHRcdDwhLS0gI2lmZGVmIEg1IC0tPlxuXHRcdDxrZXlwcmVzcyB2LWlmPVwibWFza1Nob3dcIiBAZXNjPVwib25UYXBcIiAvPlxuXHRcdDwhLS0gI2VuZGlmIC0tPlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuLy8gI2lmZGVmIEg1XG5pbXBvcnQga2V5cHJlc3MgZnJvbSAnLi9rZXlwcmVzcy5qcydcbi8vICNlbmRpZlxuXG4vKipcbiAqIFBvcFVwIOW8ueWHuuWxglxuICogQGRlc2NyaXB0aW9uIOW8ueWHuuWxgue7hOS7tu+8jOS4uuS6huino+WGs+mBrue9qeW8ueWxgueahOmXrumimFxuICogQHR1dG9yaWFsIGh0dHBzOi8vZXh0LmRjbG91ZC5uZXQuY24vcGx1Z2luP2lkPTMyOVxuICogQHByb3BlcnR5IHtTdHJpbmd9IHR5cGUgPSBbdG9wfGNlbnRlcnxib3R0b218bGVmdHxyaWdodHxtZXNzYWdlfGRpYWxvZ3xzaGFyZV0g5by55Ye65pa55byPXG4gKiBcdEB2YWx1ZSB0b3Ag6aG26YOo5by55Ye6XG4gKiBcdEB2YWx1ZSBjZW50ZXIg5Lit6Ze05by55Ye6XG4gKiBcdEB2YWx1ZSBib3R0b20g5bqV6YOo5by55Ye6XG4gKiBcdEB2YWx1ZSBsZWZ0XHRcdOW3puS+p+W8ueWHulxuICogXHRAdmFsdWUgcmlnaHQgIOWPs+S+p+W8ueWHulxuICogXHRAdmFsdWUgbWVzc2FnZSDmtojmga/mj5DnpLpcbiAqIFx0QHZhbHVlIGRpYWxvZyDlr7nor53moYZcbiAqIFx0QHZhbHVlIHNoYXJlIOW6lemDqOWIhuS6q+ekuuS+i1xuICogQHByb3BlcnR5IHtCb29sZWFufSBhbmltYXRpb24gPSBbdHVyZXxmYWxzZV0g5piv5ZCm5byA5ZCv5Yqo55S7XG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IG1hc2tDbGljayA9IFt0dXJlfGZhbHNlXSDokpnniYjngrnlh7vmmK/lkKblhbPpl63lvLnnqpdcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSAgYmFja2dyb3VuZENvbG9yIFx0XHRcdFx0XHTkuLvnqpflj6Pog4zmma/oibJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gc2FmZUFyZWFcdFx0XHRcdFx0XHRcdFx0XHTmmK/lkKbpgILphY3lupXpg6jlronlhajljLpcbiAqIEBldmVudCB7RnVuY3Rpb259IGNoYW5nZSDmiZPlvIDlhbPpl63lvLnnqpfop6blj5HvvIxlPXtzaG93OiBmYWxzZX1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICd1bmlQb3B1cCcsXG5cdGNvbXBvbmVudHM6IHtcblx0XHQvLyAjaWZkZWYgSDVcblx0XHRrZXlwcmVzc1xuXHRcdC8vICNlbmRpZlxuXHR9LFxuXHRlbWl0czpbJ2NoYW5nZScsJ21hc2tDbGljayddLFxuXHRwcm9wczoge1xuXHRcdC8vIOW8gOWQr+WKqOeUu1xuXHRcdGFuaW1hdGlvbjoge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IHRydWVcblx0XHR9LFxuXHRcdC8vIOW8ueWHuuWxguexu+Wei++8jOWPr+mAieWAvO+8jHRvcDog6aG26YOo5by55Ye65bGC77ybYm90dG9t77ya5bqV6YOo5by55Ye65bGC77ybY2VudGVy77ya5YWo5bGP5by55Ye65bGCXG5cdFx0Ly8gbWVzc2FnZTog5raI5oGv5o+Q56S6IDsgZGlhbG9nIDog5a+56K+d5qGGXG5cdFx0dHlwZToge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogJ2NlbnRlcidcblx0XHR9LFxuXHRcdC8vIG1hc2tDbGlja1xuXHRcdG1hc2tDbGljazoge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IHRydWVcblx0XHR9LFxuXHRcdGJhY2tncm91bmRDb2xvcjoge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogJ25vbmUnXG5cdFx0fSxcblx0XHRzYWZlQXJlYTp7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdHJ1ZVxuXHRcdH1cblx0fSxcblxuXHR3YXRjaDoge1xuXHRcdC8qKlxuXHRcdCAqIOebkeWQrHR5cGXnsbvlnotcblx0XHQgKi9cblx0XHR0eXBlOiB7XG5cdFx0XHRoYW5kbGVyOiBmdW5jdGlvbih0eXBlKSB7XG5cdFx0XHRcdGlmICghdGhpcy5jb25maWdbdHlwZV0pIHJldHVyblxuXHRcdFx0XHR0aGlzW3RoaXMuY29uZmlnW3R5cGVdXSh0cnVlKVxuXHRcdFx0fSxcblx0XHRcdGltbWVkaWF0ZTogdHJ1ZVxuXHRcdH0sXG5cdFx0aXNEZXNrdG9wOiB7XG5cdFx0XHRoYW5kbGVyOiBmdW5jdGlvbihuZXdWYWwpIHtcblx0XHRcdFx0aWYgKCF0aGlzLmNvbmZpZ1tuZXdWYWxdKSByZXR1cm5cblx0XHRcdFx0dGhpc1t0aGlzLmNvbmZpZ1t0aGlzLnR5cGVdXSh0cnVlKVxuXHRcdFx0fSxcblx0XHRcdGltbWVkaWF0ZTogdHJ1ZVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICog55uR5ZCs6YGu572p5piv5ZCm5Y+v54K55Ye7XG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IHZhbFxuXHRcdCAqL1xuXHRcdG1hc2tDbGljazoge1xuXHRcdFx0aGFuZGxlcjogZnVuY3Rpb24odmFsKSB7XG5cdFx0XHRcdHRoaXMubWtjbGljayA9IHZhbFxuXHRcdFx0fSxcblx0XHRcdGltbWVkaWF0ZTogdHJ1ZVxuXHRcdH1cblx0fSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZHVyYXRpb246IDMwMCxcblx0XHRcdGFuaTogW10sXG5cdFx0XHRzaG93UG9wdXA6IGZhbHNlLFxuXHRcdFx0c2hvd1RyYW5zOiBmYWxzZSxcblx0XHRcdHBvcHVwV2lkdGg6IDAsXG5cdFx0XHRwb3B1cEhlaWdodDogMCxcblx0XHRcdGNvbmZpZzoge1xuXHRcdFx0XHR0b3A6ICd0b3AnLFxuXHRcdFx0XHRib3R0b206ICdib3R0b20nLFxuXHRcdFx0XHRjZW50ZXI6ICdjZW50ZXInLFxuXHRcdFx0XHRsZWZ0OiAnbGVmdCcsXG5cdFx0XHRcdHJpZ2h0OiAncmlnaHQnLFxuXHRcdFx0XHRtZXNzYWdlOiAndG9wJyxcblx0XHRcdFx0ZGlhbG9nOiAnY2VudGVyJyxcblx0XHRcdFx0c2hhcmU6ICdib3R0b20nLFxuXHRcdFx0XHRjb21tZW50OiAnYm90dG9tJ1xuXHRcdFx0fSxcblx0XHRcdG1hc2tDbGFzczoge1xuXHRcdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcblx0XHRcdFx0Ym90dG9tOiAwLFxuXHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRcdHJpZ2h0OiAwLFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNCknXG5cdFx0XHR9LFxuXHRcdFx0dHJhbnNDbGFzczoge1xuXHRcdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcblx0XHRcdFx0bGVmdDogMCxcblx0XHRcdFx0cmlnaHQ6IDBcblx0XHRcdH0sXG5cdFx0XHRtYXNrU2hvdzogdHJ1ZSxcblx0XHRcdG1rY2xpY2s6IHRydWUsXG5cdFx0XHRwb3B1cHN0eWxlOiB0aGlzLmlzRGVza3RvcCA/ICdmaXhmb3JwYy10b3AnIDogJ3RvcCdcblx0XHR9XG5cdH0sXG5cdGNvbXB1dGVkOiB7XG5cdFx0aXNEZXNrdG9wKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucG9wdXBXaWR0aCA+PSA1MDAgJiYgdGhpcy5wb3B1cEhlaWdodCA+PSA1MDBcblx0XHR9LFxuXHRcdGJnKCkge1xuXHRcdFx0aWYgKHRoaXMuYmFja2dyb3VuZENvbG9yID09PSAnJyB8fCB0aGlzLmJhY2tncm91bmRDb2xvciA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdHJldHVybiAndHJhbnNwYXJlbnQnXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5iYWNrZ3JvdW5kQ29sb3Jcblx0XHR9XG5cdH0sXG5cdG1vdW50ZWQoKSB7XG5cdFx0Y29uc3QgZml4U2l6ZSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IHsgd2luZG93V2lkdGgsIHdpbmRvd0hlaWdodCwgd2luZG93VG9wLCBzYWZlQXJlYUluc2V0cyB9ID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKClcblx0XHRcdHRoaXMucG9wdXBXaWR0aCA9IHdpbmRvd1dpZHRoXG5cdFx0XHR0aGlzLnBvcHVwSGVpZ2h0ID0gd2luZG93SGVpZ2h0ICsgd2luZG93VG9wXG5cdFx0XHQvLyDmmK/lkKbpgILphY3lupXpg6jlronlhajljLpcblx0XHRcdGlmKHRoaXMuc2FmZUFyZWEpe1xuXHRcdFx0XHR0aGlzLnNhZmVBcmVhSW5zZXRzID0gc2FmZUFyZWFJbnNldHNcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLnNhZmVBcmVhSW5zZXRzID0gMFxuXHRcdFx0fVxuXHRcdH1cblx0XHRmaXhTaXplKClcblx0XHQvLyAjaWZkZWYgSDVcblx0XHQvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZml4U2l6ZSlcblx0XHQvLyB0aGlzLiRvbmNlKCdob29rOmJlZm9yZURlc3Ryb3knLCAoKSA9PiB7XG5cdFx0Ly8gXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZml4U2l6ZSlcblx0XHQvLyB9KVxuXHRcdC8vICNlbmRpZlxuXHR9LFxuXHRjcmVhdGVkKCkge1xuXHRcdHRoaXMubWtjbGljayA9IHRoaXMubWFza0NsaWNrXG5cdFx0aWYgKHRoaXMuYW5pbWF0aW9uKSB7XG5cdFx0XHR0aGlzLmR1cmF0aW9uID0gMzAwXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZHVyYXRpb24gPSAwXG5cdFx0fVxuXHRcdC8vIFRPRE8g5aSE55CGIG1lc3NhZ2Ug57uE5Lu255Sf5ZG95ZGo5pyf5byC5bi455qE6Zeu6aKYXG5cdFx0dGhpcy5tZXNzYWdlQ2hpbGQgPSBudWxsXG5cdFx0Ly8gVE9ETyDop6PlhrPlpLTmnaHlhpLms6HnmoTpl67pophcblx0XHR0aGlzLmNsZWFyUHJvcGFnYXRpb24gPSBmYWxzZVxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0LyoqXG5cdFx0ICog5YWs55So5pa55rOV77yM5LiN5pi+56S66YGu572p5bGCXG5cdFx0ICovXG5cdFx0Y2xvc2VNYXNrKCkge1xuXHRcdFx0dGhpcy5tYXNrU2hvdyA9IGZhbHNlXG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiDlhaznlKjmlrnms5XvvIzpga7nvanlsYLnpoHmraLngrnlh7tcblx0XHQgKi9cblx0XHRkaXNhYmxlTWFzaygpIHtcblx0XHRcdHRoaXMubWtjbGljayA9IGZhbHNlXG5cdFx0fSxcblx0XHQvLyBUT0RPIG52dWUg5Y+W5raI5YaS5rOhXG5cdFx0Y2xlYXIoZSkge1xuXHRcdFx0Ly8gI2lmbmRlZiBBUFAtTlZVRVxuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdFx0Ly8gI2VuZGlmXG5cdFx0XHR0aGlzLmNsZWFyUHJvcGFnYXRpb24gPSB0cnVlXG5cdFx0fSxcblxuXHRcdG9wZW4oZGlyZWN0aW9uKSB7XG5cdFx0XHRsZXQgaW5uZXJUeXBlID0gWyd0b3AnLCAnY2VudGVyJywgJ2JvdHRvbScsICdsZWZ0JywgJ3JpZ2h0JywgJ21lc3NhZ2UnLCAnZGlhbG9nJywgJ3NoYXJlJywgJ2NvbW1lbnQnXVxuXHRcdFx0aWYgKCEoZGlyZWN0aW9uICYmIGlubmVyVHlwZS5pbmRleE9mKGRpcmVjdGlvbikgIT09IC0xKSkge1xuXHRcdFx0XHRkaXJlY3Rpb24gPSB0aGlzLnR5cGVcblx0XHRcdH1cblx0XHRcdGlmICghdGhpcy5jb25maWdbZGlyZWN0aW9uXSkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKCfnvLrlsJHnsbvlnovvvJonLCBkaXJlY3Rpb24pXG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXHRcdFx0dGhpc1t0aGlzLmNvbmZpZ1tkaXJlY3Rpb25dXSgpXG5cdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XG5cdFx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHRcdHR5cGU6IGRpcmVjdGlvblxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdGNsb3NlKHR5cGUpIHtcblx0XHRcdHRoaXMuc2hvd1RyYW5zID0gZmFsc2Vcblx0XHRcdHRoaXMuJGVtaXQoJ2NoYW5nZScsIHtcblx0XHRcdFx0c2hvdzogZmFsc2UsXG5cdFx0XHRcdHR5cGU6IHRoaXMudHlwZVxuXHRcdFx0fSlcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKVxuXHRcdFx0Ly8gLy8g6Ieq5a6a5LmJ5YWz6Zet5LqL5Lu2XG5cdFx0XHQvLyB0aGlzLmN1c3RvbU9wZW4gJiYgdGhpcy5jdXN0b21DbG9zZSgpXG5cdFx0XHR0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2hvd1BvcHVwID0gZmFsc2Vcblx0XHRcdH0sIDMwMClcblx0XHR9LFxuXHRcdC8vIFRPRE8g5aSE55CG5YaS5rOh5LqL5Lu277yM5aS05p2h55qE5YaS5rOh5LqL5Lu25pyJ6Zeu6aKYIO+8jOWFiOi/meagt+WFvOWuuVxuXHRcdHRvdWNoc3RhcnQoKXtcblx0XHRcdHRoaXMuY2xlYXJQcm9wYWdhdGlvbiA9IGZhbHNlXG5cdFx0fSxcblxuXHRcdG9uVGFwKCkge1xuXHRcdFx0aWYgKHRoaXMuY2xlYXJQcm9wYWdhdGlvbikge1xuXHRcdFx0XHQvLyBmaXggYnkgbWVoYW90aWFuIOWFvOWuuSBudnVlXG5cdFx0XHRcdHRoaXMuY2xlYXJQcm9wYWdhdGlvbiA9IGZhbHNlXG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXHRcdFx0dGhpcy4kZW1pdCgnbWFza0NsaWNrJylcblx0XHRcdGlmICghdGhpcy5ta2NsaWNrKSByZXR1cm5cblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKFwi54K55Ye76YGu572pXCIpO1xuXHRcdFx0dW5pLnNob3dUYWJCYXIoe1xuXHRcdFx0XHRhbmltYXRpb246IHRydWVcblx0XHRcdH0pXG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiDpobbpg6jlvLnlh7rmoLflvI/lpITnkIZcblx0XHQgKi9cblx0XHR0b3AodHlwZSkge1xuXHRcdFx0dGhpcy5wb3B1cHN0eWxlID0gdGhpcy5pc0Rlc2t0b3AgPyAnZml4Zm9ycGMtdG9wJyA6ICd0b3AnXG5cdFx0XHR0aGlzLmFuaSA9IFsnc2xpZGUtdG9wJ11cblx0XHRcdHRoaXMudHJhbnNDbGFzcyA9IHtcblx0XHRcdFx0cG9zaXRpb246ICdmaXhlZCcsXG5cdFx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRcdHJpZ2h0OiAwLFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmdcblx0XHRcdH1cblx0XHRcdC8vIFRPRE8g5YW85a65IHR5cGUg5bGe5oCnIO+8jOWQjue7reS8muW6n+W8g1xuXHRcdFx0aWYgKHR5cGUpIHJldHVyblxuXHRcdFx0dGhpcy5zaG93UG9wdXAgPSB0cnVlXG5cdFx0XHR0aGlzLnNob3dUcmFucyA9IHRydWVcblx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcblx0XHRcdFx0aWYgKHRoaXMubWVzc2FnZUNoaWxkICYmIHRoaXMudHlwZSA9PT0gJ21lc3NhZ2UnKSB7XG5cdFx0XHRcdFx0dGhpcy5tZXNzYWdlQ2hpbGQudGltZXJDbG9zZSgpXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiDlupXpg6jlvLnlh7rmoLflvI/lpITnkIZcblx0XHQgKi9cblx0XHRib3R0b20odHlwZSkge1xuXHRcdFx0dGhpcy5wb3B1cHN0eWxlID0gJ2JvdHRvbSdcblx0XHRcdHRoaXMuYW5pID0gWydzbGlkZS1ib3R0b20nXVxuXG5cdFx0XHR0aGlzLnRyYW5zQ2xhc3MgPSB7XG5cdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0XHRyaWdodDogMCxcblx0XHRcdFx0Ym90dG9tOiAwLFxuXHRcdFx0XHRwYWRkaW5nQm90dG9tOiAodGhpcy5zYWZlQXJlYUluc2V0cyAmJiB0aGlzLnNhZmVBcmVhSW5zZXRzLmJvdHRvbSkgfHwgMCxcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGlzLmJnXG5cdFx0XHR9XG5cdFx0XHQvLyBUT0RPIOWFvOWuuSB0eXBlIOWxnuaApyDvvIzlkI7nu63kvJrlup/lvINcblx0XHRcdGlmICh0eXBlKSByZXR1cm5cblx0XHRcdHRoaXMuc2hvd1BvcHVwID0gdHJ1ZVxuXHRcdFx0dGhpcy5zaG93VHJhbnMgPSB0cnVlXG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiDkuK3pl7TlvLnlh7rmoLflvI/lpITnkIZcblx0XHQgKi9cblx0XHRjZW50ZXIodHlwZSkge1xuXHRcdFx0dGhpcy5wb3B1cHN0eWxlID0gJ2NlbnRlcidcblx0XHRcdHRoaXMuYW5pID0gWyd6b29tLW91dCcsICdmYWRlJ11cblx0XHRcdHRoaXMudHJhbnNDbGFzcyA9IHtcblx0XHRcdFx0cG9zaXRpb246ICdmaXhlZCcsXG5cdFx0XHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdFx0XHRmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcblx0XHRcdFx0LyogI2VuZGlmICovXG5cdFx0XHRcdGJvdHRvbTogMCxcblx0XHRcdFx0bGVmdDogMCxcblx0XHRcdFx0cmlnaHQ6IDAsXG5cdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXHRcdFx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuXHRcdFx0fVxuXHRcdFx0Ly8gVE9ETyDlhbzlrrkgdHlwZSDlsZ7mgKcg77yM5ZCO57ut5Lya5bqf5byDXG5cdFx0XHRpZiAodHlwZSkgcmV0dXJuXG5cdFx0XHR0aGlzLnNob3dQb3B1cCA9IHRydWVcblx0XHRcdHRoaXMuc2hvd1RyYW5zID0gdHJ1ZVxuXHRcdH0sXG5cdFx0bGVmdCh0eXBlKSB7XG5cdFx0XHR0aGlzLnBvcHVwc3R5bGUgPSAnbGVmdCdcblx0XHRcdHRoaXMuYW5pID0gWydzbGlkZS1sZWZ0J11cblx0XHRcdHRoaXMudHJhbnNDbGFzcyA9IHtcblx0XHRcdFx0cG9zaXRpb246ICdmaXhlZCcsXG5cdFx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRcdGJvdHRvbTogMCxcblx0XHRcdFx0dG9wOiAwLFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmcsXG5cdFx0XHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdFx0XHRmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuXHRcdFx0XHQvKiAjZW5kaWYgKi9cblx0XHRcdH1cblx0XHRcdC8vIFRPRE8g5YW85a65IHR5cGUg5bGe5oCnIO+8jOWQjue7reS8muW6n+W8g1xuXHRcdFx0aWYgKHR5cGUpIHJldHVyblxuXHRcdFx0dGhpcy5zaG93UG9wdXAgPSB0cnVlXG5cdFx0XHR0aGlzLnNob3dUcmFucyA9IHRydWVcblx0XHR9LFxuXHRcdHJpZ2h0KHR5cGUpIHtcblx0XHRcdHRoaXMucG9wdXBzdHlsZSA9ICdyaWdodCdcblx0XHRcdHRoaXMuYW5pID0gWydzbGlkZS1yaWdodCddXG5cdFx0XHR0aGlzLnRyYW5zQ2xhc3MgPSB7XG5cdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdFx0XHRib3R0b206IDAsXG5cdFx0XHRcdHJpZ2h0OiAwLFxuXHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogdGhpcy5iZyxcblx0XHRcdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG5cdFx0XHRcdC8qICNlbmRpZiAqL1xuXHRcdFx0fVxuXHRcdFx0Ly8gVE9ETyDlhbzlrrkgdHlwZSDlsZ7mgKcg77yM5ZCO57ut5Lya5bqf5byDXG5cdFx0XHRpZiAodHlwZSkgcmV0dXJuXG5cdFx0XHR0aGlzLnNob3dQb3B1cCA9IHRydWVcblx0XHRcdHRoaXMuc2hvd1RyYW5zID0gdHJ1ZVxuXHRcdH1cblx0fVxufVxuPC9zY3JpcHQ+XG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4udW5pLXBvcHVwIHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdHotaW5kZXg6IDk5O1xuXHQvKiAjZW5kaWYgKi9cblx0Ji50b3AsXG5cdCYubGVmdCxcblx0Ji5yaWdodCB7XG5cdFx0LyogI2lmZGVmIEg1ICovXG5cdFx0dG9wOiB2YXIoLS13aW5kb3ctdG9wKTtcblx0XHQvKiAjZW5kaWYgKi9cblx0XHQvKiAjaWZuZGVmIEg1ICovXG5cdFx0dG9wOiAwO1xuXHRcdC8qICNlbmRpZiAqL1xuXHR9XG5cdC51bmktcG9wdXBfX3dyYXBwZXIge1xuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHQvKiAjZW5kaWYgKi9cblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0LyogaXBob25leCDnrYnlronlhajljLrorr7nva7vvIzlupXpg6jlronlhajljLrpgILphY0gKi9cblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0Ly8gcGFkZGluZy1ib3R0b206IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuXHRcdC8vIHBhZGRpbmctYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG5cdFx0LyogI2VuZGlmICovXG5cdFx0Ji5sZWZ0LFxuXHRcdCYucmlnaHQge1xuXHRcdFx0LyogI2lmbmRlZiBINSAqL1xuXHRcdFx0cGFkZGluZy10b3A6IDA7XG5cdFx0XHQvKiAjZW5kaWYgKi9cblx0XHRcdGZsZXg6IDE7XG5cdFx0fVxuXHR9XG59XG5cbi5maXhmb3JwYy16LWluZGV4IHtcblx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHR6LWluZGV4OiA5OTk7XG5cdC8qICNlbmRpZiAqL1xufVxuXG4uZml4Zm9ycGMtdG9wIHtcblx0dG9wOiAwO1xufVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///203\n");

/***/ }),
/* 204 */
/*!***********************************************************************************************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=style&index=0&id=7c43d41b&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_7c43d41b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--11-oneOf-0-2!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=style&index=0&id=7c43d41b&lang=scss&scoped=true& */ 205);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_7c43d41b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_7c43d41b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_7c43d41b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_7c43d41b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_7c43d41b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 205 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=style&index=0&id=7c43d41b&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".uni-popup": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        13
      ]
    },
    ".top": {
      "top": [
        0,
        0,
        1,
        14
      ]
    },
    ".left": {
      "top": [
        0,
        0,
        1,
        14
      ]
    },
    ".right": {
      "top": [
        0,
        0,
        1,
        14
      ]
    }
  },
  ".uni-popup__wrapper": {
    ".uni-popup ": {
      "position": [
        "relative",
        0,
        1,
        15
      ]
    },
    ".uni-popup .left": {
      "paddingTop": [
        0,
        0,
        2,
        16
      ],
      "flex": [
        1,
        0,
        2,
        16
      ]
    },
    ".uni-popup .right": {
      "paddingTop": [
        0,
        0,
        2,
        16
      ],
      "flex": [
        1,
        0,
        2,
        16
      ]
    }
  },
  ".fixforpc-top": {
    "": {
      "top": [
        0,
        0,
        0,
        17
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 206 */
/*!*******************************************************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_popup_comments_vue_vue_type_template_id_9da5e18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-popup-comments.vue?vue&type=template&id=9da5e18a&scoped=true& */ 207);\n/* harmony import */ var _uni_popup_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-popup-comments.vue?vue&type=script&lang=js& */ 209);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_popup_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_popup_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-popup-comments.vue?vue&type=style&index=0&id=9da5e18a&lang=scss&scoped=true& */ 212).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-popup-comments.vue?vue&type=style&index=0&id=9da5e18a&lang=scss&scoped=true& */ 212).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_popup_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_popup_comments_vue_vue_type_template_id_9da5e18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_popup_comments_vue_vue_type_template_id_9da5e18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"9da5e18a\",\n  \"3f094352\",\n  false,\n  _uni_popup_comments_vue_vue_type_template_id_9da5e18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkk7QUFDM0k7QUFDc0U7QUFDTDtBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDZGQUFvRjtBQUN4SSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsNkZBQW9GO0FBQzdJOztBQUVBOztBQUVBO0FBQytLO0FBQy9LLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSx5R0FBTTtBQUNSLEVBQUUsa0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyMDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1wb3B1cC1jb21tZW50cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWRhNWUxOGEmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktcG9wdXAtY29tbWVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktcG9wdXAtY29tbWVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdW5pLXBvcHVwLWNvbW1lbnRzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTlkYTVlMThhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdW5pLXBvcHVwLWNvbW1lbnRzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTlkYTVlMThhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI5ZGE1ZTE4YVwiLFxuICBcIjNmMDk0MzUyXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInVuaV9tb2R1bGVzL3VuaS1wb3B1cC9jb21wb25lbnRzL3VuaS1wb3B1cC1jb21tZW50cy91bmktcG9wdXAtY29tbWVudHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///206\n");

/***/ }),
/* 207 */
/*!**************************************************************************************************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue?vue&type=template&id=9da5e18a&scoped=true& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_template_id_9da5e18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup-comments.vue?vue&type=template&id=9da5e18a&scoped=true& */ 208);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_template_id_9da5e18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_template_id_9da5e18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_template_id_9da5e18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_template_id_9da5e18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 208 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue?vue&type=template&id=9da5e18a&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticClass: ["uni-popup-share"] }, [
    _c(
      "view",
      { staticClass: ["uni-share-title"] },
      [
        _c("u-image", {
          staticClass: ["icon-close-left"],
          attrs: { src: "/static/images/icon-close.png" },
        }),
        _c(
          "u-text",
          {
            staticClass: ["uni-share-title-text"],
            appendAsTree: true,
            attrs: { append: "tree" },
          },
          [
            _vm._v(
              _vm._s(_vm.getGraceNumber(_vm.thisVlogTotalComentCounts)) +
                "条评论"
            ),
          ]
        ),
        _c("u-image", {
          staticClass: ["icon-close-right"],
          attrs: { src: "/static/images/icon-close.png" },
          on: { click: _vm.close },
        }),
      ],
      1
    ),
    _c("view", { staticClass: ["uni-share-content"] }, [
      _c(
        "view",
        { staticStyle: { height: "800rpx" } },
        [
          _c(
            "scroll-view",
            {
              staticClass: ["all-comments"],
              style: { width: _vm.screenWidth + "px" },
              attrs: {
                scrollY: "true",
                lowerThreshold: "150",
                scrollTop: _vm.scrollTop,
              },
              on: { scrolltolower: _vm.loadMore },
            },
            [
              _vm._l(_vm.commentList, function (commentContent, index) {
                return _c(
                  "view",
                  {
                    key: index,
                    class: { active: index == _vm.activeIndex },
                    attrs: { dataIndex: index },
                    on: {
                      touchstart: function ($event) {
                        _vm.touchstartComment(index)
                      },
                      touchend: function ($event) {
                        _vm.touchendComment()
                      },
                      longpress: function ($event) {
                        _vm.deleteComment(
                          commentContent.commentUserId,
                          commentContent.commentId
                        )
                      },
                    },
                  },
                  [
                    _c(
                      "view",
                      {
                        staticClass: ["comments-wrapper"],
                        staticStyle: {
                          marginLeft: "16rpx",
                          marginTop: "16rpx",
                          marginRight: "16rpx",
                        },
                      },
                      [
                        _c(
                          "view",
                          { staticClass: ["comments-wrapper-sub-up"] },
                          [
                            _c(
                              "view",
                              { staticClass: ["vlogger-wrapper"] },
                              [
                                _c("u-image", {
                                  staticClass: ["img-face"],
                                  attrs: {
                                    src: commentContent.commentUserFace,
                                  },
                                }),
                                _c(
                                  "view",
                                  {
                                    staticStyle: {
                                      marginLeft: "10px",
                                      width: "456rpx",
                                    },
                                  },
                                  [
                                    _c(
                                      "view",
                                      {
                                        staticStyle: {
                                          display: "flex",
                                          flexDirection: "row",
                                        },
                                      },
                                      [
                                        _c(
                                          "u-text",
                                          {
                                            staticStyle: {
                                              fontSize: "30rpx",
                                              color: "#878585",
                                              alignSelf: "center",
                                            },
                                            appendAsTree: true,
                                            attrs: { append: "tree" },
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                commentContent.commentUserNickname
                                              )
                                            ),
                                          ]
                                        ),
                                        commentContent.vlogerId ==
                                        _vm.thisVlogerId
                                          ? _c(
                                              "view",
                                              {
                                                staticClass: ["tag-writer"],
                                                staticStyle: {
                                                  alignSelf: "center",
                                                },
                                              },
                                              [
                                                _c(
                                                  "u-text",
                                                  {
                                                    staticClass: [
                                                      "writer-words",
                                                    ],
                                                    staticStyle: {
                                                      alignSelf: "center",
                                                    },
                                                    appendAsTree: true,
                                                    attrs: { append: "tree" },
                                                  },
                                                  [_vm._v("作者")]
                                                ),
                                              ]
                                            )
                                          : _vm._e(),
                                        commentContent.replyedUserNickname !=
                                          null &&
                                        commentContent.replyedUserNickname != ""
                                          ? _c("u-image", {
                                              staticStyle: {
                                                opacity: "0.8",
                                                width: "40rpx",
                                                height: "40rpx",
                                                marginLeft: "16rpx",
                                                marginRight: "10rpx",
                                                alignSelf: "center",
                                              },
                                              attrs: {
                                                src: "/static/images/icon-right-arrow3.png",
                                              },
                                            })
                                          : _vm._e(),
                                        commentContent.replyedUserNickname !=
                                          null &&
                                        commentContent.replyedUserNickname != ""
                                          ? _c(
                                              "u-text",
                                              {
                                                staticStyle: {
                                                  fontSize: "30rpx",
                                                  color: "#878585",
                                                  alignSelf: "center",
                                                },
                                                appendAsTree: true,
                                                attrs: { append: "tree" },
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    commentContent.replyedUserNickname
                                                  )
                                                ),
                                              ]
                                            )
                                          : _vm._e(),
                                      ],
                                      1
                                    ),
                                    _c(
                                      "u-text",
                                      {
                                        staticStyle: {
                                          fontSize: "32rpx",
                                          color: "#FFFFFF",
                                          marginTop: "2px",
                                        },
                                        appendAsTree: true,
                                        attrs: { append: "tree" },
                                      },
                                      [_vm._v(_vm._s(commentContent.content))]
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                            _c(
                              "view",
                              {
                                staticStyle: {
                                  display: "flex",
                                  flexDirection: "column",
                                  width: "26px",
                                },
                              },
                              [
                                commentContent.isLike == 1
                                  ? _c("u-image", {
                                      staticClass: ["like-or-not"],
                                      staticStyle: { alignSelf: "center" },
                                      attrs: {
                                        src: "/static/images/icon-comment-like.png",
                                      },
                                      on: {
                                        click: function ($event) {
                                          _vm.unlike(
                                            commentContent.commentUserId,
                                            commentContent.commentId,
                                            index
                                          )
                                        },
                                      },
                                    })
                                  : _vm._e(),
                                commentContent.isLike == 0
                                  ? _c("u-image", {
                                      staticClass: ["like-or-not"],
                                      staticStyle: { alignSelf: "center" },
                                      attrs: {
                                        src: "/static/images/icon-comment-unlike.png",
                                      },
                                      on: {
                                        click: function ($event) {
                                          _vm.like(
                                            commentContent.commentUserId,
                                            commentContent.commentId,
                                            index
                                          )
                                        },
                                      },
                                    })
                                  : _vm._e(),
                                _c(
                                  "u-text",
                                  {
                                    staticStyle: {
                                      fontSize: "22rpx",
                                      color: "#878585",
                                      alignSelf: "center",
                                    },
                                    appendAsTree: true,
                                    attrs: { append: "tree" },
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.getGraceNumber(
                                          commentContent.likeCounts
                                        )
                                      )
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ]
                        ),
                        _c(
                          "view",
                          { staticClass: ["comments-wrapper-sub-down"] },
                          [
                            _c("u-image", {
                              staticClass: ["img-face"],
                              staticStyle: { opacity: "0" },
                              attrs: { src: "/static/face/face-arrow-1.png" },
                            }),
                            _c(
                              "u-text",
                              {
                                staticStyle: {
                                  fontSize: "30rpx",
                                  color: "#878585",
                                  marginLeft: "10px",
                                },
                                appendAsTree: true,
                                attrs: { append: "tree" },
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.getGraceDateBeforeNow(
                                      commentContent.createTime
                                    )
                                  )
                                ),
                              ]
                            ),
                            _c(
                              "u-text",
                              {
                                staticStyle: {
                                  fontSize: "30rpx",
                                  color: "#878585",
                                  marginLeft: "20px",
                                },
                                appendAsTree: true,
                                attrs: { append: "tree" },
                                on: {
                                  click: function ($event) {
                                    _vm.replyComment(
                                      commentContent.commentId,
                                      commentContent.commentUserNickname
                                    )
                                  },
                                },
                              },
                              [_vm._v("回复")]
                            ),
                          ],
                          1
                        ),
                      ]
                    ),
                  ]
                )
              }),
              _c(
                "view",
                {
                  staticStyle: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: "50rpx",
                    height: "100rpx",
                  },
                },
                [
                  _c(
                    "u-text",
                    {
                      staticStyle: { color: "#444446", fontSize: "13px" },
                      appendAsTree: true,
                      attrs: { append: "tree" },
                    },
                    [_vm._v(_vm._s(_vm.bottomTxt))]
                  ),
                ]
              ),
            ],
            2
          ),
        ],
        1
      ),
      _c(
        "view",
        {
          staticClass: ["comment-wrapper"],
          class: {
            commentWrapperBlack: _vm.commentWrapperBlack,
            commentWrapperWhite: _vm.commentWrapperWhite,
          },
        },
        [
          _c("u-input", {
            staticClass: ["comment-box"],
            class: {
              commentBoxBlack: _vm.commentBoxBlack,
              commentBoxWhite: _vm.commentBoxWhite,
            },
            style: { width: _vm.screenWidth - 70 + "px" },
            attrs: {
              placeholderClass: "comment-box-placeholder",
              placeholder: _vm.placeholder,
              cursorSpacing: "10px",
              confirmType: "done",
              focus: _vm.commentFocus,
              value: _vm.currentComment,
            },
            on: {
              focus: _vm.typingComment,
              blur: _vm.noTypingComment,
              input: function ($event) {
                _vm.currentComment = $event.detail.value
              },
            },
          }),
          _c(
            "view",
            {
              staticStyle: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              },
            },
            [
              _c("u-image", {
                staticClass: ["icon-comment"],
                attrs: { src: "/static/images/icon-comment.png" },
                on: {
                  click: function ($event) {
                    _vm.doCommentPublish()
                  },
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
    ]),
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 209 */
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup-comments.vue?vue&type=script&lang=js& */ 210);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFkLENBQWdCLHNkQUFHLEVBQUMiLCJmaWxlIjoiMjA5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1wb3B1cC1jb21tZW50cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktcG9wdXAtY29tbWVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///209\n");

/***/ }),
/* 210 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 150);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _popup = _interopRequireDefault(__webpack_require__(/*! ../uni-popup/popup.js */ 211));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar app = getApp();\nvar _default = {\n  name: 'UniPopupShare',\n  mixins: [_popup.default],\n  emits: ['select'],\n  props: {\n    title: {\n      type: String,\n      default: '分享到'\n    },\n    beforeClose: {\n      type: Boolean,\n      default: false\n    },\n    thisVlogerId: {\n      type: String,\n      default: ''\n    },\n    thisVlogId: {\n      type: String,\n      default: ''\n    }\n  },\n  data: function data() {\n    return {\n      commentWrapperBlack: true,\n      commentWrapperWhite: false,\n      commentBoxBlack: true,\n      commentBoxWhite: false,\n      // commentWrapperBlack: false,\n      // commentWrapperWhite: true,\n      // commentBoxBlack: false,\n      // commentBoxWhite: true,\n      screenWidth: uni.getSystemInfoSync().screenWidth,\n      currentComment: \"\",\n      scrollTop: 0,\n      old: {\n        scrollTop: 0\n      },\n      // commentTouched: false,\n      activeIndex: -1,\n      bottomTxt: \"已经到底啦~\",\n      placeholder: \"良言三冬暖，恶语六月寒\",\n      commentFocus: false,\n      thisFatherCommentId: \"0\",\n      // 用于标识当前的回复是否有父id，还是仅仅只是普通评论\n\n      thisVlogTotalComentCounts: 0,\n      loginUserId: \"\",\n      page: 0,\n      totalPage: 0,\n      commentCounts: 88,\n      commentList: [],\n      commentList2: []\n    };\n  },\n  created: function created() {\n    // console.log(\"comment...created...thisVlogId = \" + this.thisVlogId)\t\t\n    var me = this;\n    var myUserInfo = getApp().getUserInfoSession();\n    var userId = \"\";\n    if (myUserInfo != null) {\n      userId = myUserInfo.id;\n    }\n    me.loginUserId = userId;\n    this.freshCommentCounts();\n    this.doCommentPagingList(this.page + 1, true);\n  },\n  methods: {\n    freshCommentCounts: function freshCommentCounts() {\n      var me = this;\n      var vlogId = me.thisVlogId;\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"GET\",\n        url: serverUrl + \"/comment/counts?vlogId=\" + vlogId,\n        success: function success(result) {\n          __f__(\"log\", result, \" at uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue:373\");\n          if (result.data.status == 200) {\n            me.thisVlogTotalComentCounts = result.data.data;\n          } else {\n            me.thisVlogTotalComentCounts = 0;\n          }\n          if (me.thisVlogTotalComentCounts == 0) {\n            me.bottomTxt = \"抢一个沙发吧~\";\n          } else {\n            me.bottomTxt = \"到底啦~\";\n          }\n        }\n      });\n    },\n    unlike: function unlike(commentUserId, commentId, index) {\n      var me = this;\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"POST\",\n        header: {\n          headerUserId: me.loginUserId,\n          headerUserToken: app.getUserSessionToken()\n        },\n        url: serverUrl + \"/comment/unlike?userId=\" + me.loginUserId + \"&commentId=\" + commentId,\n        success: function success(result) {\n          __f__(\"log\", result, \" at uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue:403\");\n          if (result.data.status == 200) {\n            me.reLikeCommentList(index, 0);\n            me.reCountsCommentList(index, -1);\n          } else {\n            uni.showToast({\n              title: result.data.msg,\n              icon: \"none\",\n              duration: 3000\n            });\n          }\n        }\n      });\n    },\n    like: function like(commentUserId, commentId, index) {\n      var me = this;\n      var myUserInfo = getApp().getUserInfoSession();\n      if (myUserInfo == null) {\n        uni.showTabBar({\n          animation: false\n        });\n        uni.showToast({\n          duration: 3000,\n          title: \"请登录~\",\n          icon: \"none\"\n        });\n        uni.navigateTo({\n          url: \"../loginRegist/loginRegist\",\n          animationType: \"slide-in-bottom\"\n        });\n        return;\n      }\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"POST\",\n        header: {\n          headerUserId: me.loginUserId,\n          headerUserToken: app.getUserSessionToken()\n        },\n        url: serverUrl + \"/comment/like?userId=\" + me.loginUserId + \"&commentId=\" + commentId,\n        success: function success(result) {\n          __f__(\"log\", result, \" at uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue:449\");\n          if (result.data.status == 200) {\n            me.reLikeCommentList(index, 1);\n            me.reCountsCommentList(index, 1);\n          } else {\n            uni.showToast({\n              title: result.data.msg,\n              icon: \"none\",\n              duration: 3000\n            });\n          }\n        }\n      });\n    },\n    reCountsCommentList: function reCountsCommentList(index, number) {\n      var me = this;\n      var commentList = me.commentList;\n      commentList[index].likeCounts = commentList[index].likeCounts + number;\n      commentList.splice(index, 1, commentList[index]);\n      me.commentList = commentList;\n    },\n    reLikeCommentList: function reLikeCommentList(index, isLike) {\n      var me = this;\n      var commentList = me.commentList;\n      commentList[index].isLike = isLike;\n      commentList.splice(index, 1, commentList[index]);\n      me.commentList = commentList;\n    },\n    deleteComment: function deleteComment(commentUserId, commentId) {\n      var me = this;\n      var vlogId = me.thisVlogId;\n      // console.log(\"deleteComment...deleteComment=\" + commentId);\n      // 判断如果当前登陆者userId和评论的留言者id不同，不能删除\n      if (commentUserId != me.loginUserId) {\n        return;\n      }\n      uni.showModal({\n        title: '提示',\n        content: '确认删除评论吗？',\n        success: function success(res) {\n          if (res.confirm) {\n            // console.log('用户点击确定');\n            var serverUrl = app.globalData.serverUrl;\n            uni.request({\n              method: \"DELETE\",\n              header: {\n                headerUserId: commentUserId,\n                headerUserToken: app.getUserSessionToken()\n              },\n              url: serverUrl + \"/comment/delete?commentUserId=\" + commentUserId + \"&commentId=\" + commentId + \"&vlogId=\" + vlogId,\n              success: function success(result) {\n                __f__(\"log\", result, \" at uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue:509\");\n                if (result.data.status == 200) {\n                  me.doCommentPagingList(1, true);\n                } else {\n                  uni.showToast({\n                    title: result.data.msg,\n                    icon: \"none\",\n                    duration: 3000\n                  });\n                }\n                me.freshCommentCounts();\n              }\n            });\n          } else if (res.cancel) {\n            // console.log('用户点击取消');\n          }\n        }\n      });\n    },\n    loadMore: function loadMore() {\n      if (this.page == this.totalPage) {\n        return;\n      }\n      this.doCommentPagingList(this.page + 1, false);\n    },\n    // 分页查询评论列表\n    doCommentPagingList: function doCommentPagingList(page, needClearList) {\n      // 查询首页短视频列表\n      var me = this;\n      me.page = page;\n      var vlogId = me.thisVlogId;\n      // console.log(vlogId);\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"GET\",\n        url: serverUrl + \"/comment/list?vlogId=\" + vlogId + \"&userId=\" + me.loginUserId + \"&page=\" + page + \"&pageSize=10\",\n        success: function success(result) {\n          __f__(\"log\", result, \" at uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue:548\");\n          if (result.data.status == 200) {\n            var commentList = result.data.data.rows;\n            var totalPage = result.data.data.total;\n            // console.log(commentList);\n\n            if (needClearList) {\n              me.commentList = [];\n            }\n            me.commentList = me.commentList.concat(commentList);\n            me.totalPage = totalPage;\n          } else {\n            uni.showToast({\n              title: result.data.msg,\n              icon: \"none\",\n              duration: 3000\n            });\n          }\n        }\n      });\n    },\n    // 获得焦点，改变底部文本框颜色\n    typingComment: function typingComment() {\n      this.commentWrapperBlack = false;\n      this.commentWrapperWhite = true;\n      this.commentBoxBlack = false;\n      this.commentBoxWhite = true;\n\n      // console.log(this.thisFatherCommentId);\n    },\n    // 失去焦点，改变底部文本框颜色\n    noTypingComment: function noTypingComment() {\n      this.commentWrapperBlack = true;\n      this.commentWrapperWhite = false;\n      this.commentBoxBlack = true;\n      this.commentBoxWhite = false;\n      this.thisFatherCommentId = \"0\"; // 恢复默认的回复fatherId为“0”\n      this.commentFocus = false;\n      this.placeholder = \"爱评论的人都是天使~\";\n    },\n    // 回复他人的评论\n    replyComment: function replyComment(commentId, commentUserNickname) {\n      this.thisFatherCommentId = commentId;\n      this.commentFocus = true;\n      this.placeholder = \"回复 @\" + commentUserNickname;\n      // this.typingComment();\n    },\n    // 发布留言\n    doCommentPublish: function doCommentPublish() {\n      var me = this;\n      var myUserInfo = getApp().getUserInfoSession();\n      if (myUserInfo == null) {\n        uni.showTabBar({\n          animation: false\n        });\n        uni.showToast({\n          duration: 3000,\n          title: \"请登录~\",\n          icon: \"none\"\n        });\n        uni.navigateTo({\n          url: \"../loginRegist/loginRegist\",\n          animationType: \"slide-in-bottom\"\n        });\n        return;\n      }\n      if (me.currentComment == null || me.currentComment == \"\" || me.currentComment == undefined) {\n        uni.showToast({\n          title: \"请填入您的评论~\",\n          mask: true,\n          position: \"bottom\"\n        });\n        return;\n      }\n      if (me.currentComment.length > 50) {\n        uni.showToast({\n          title: \"评论字数限制50以内噢~\",\n          mask: true,\n          position: \"bottom\"\n        });\n        return;\n      }\n      var userId = myUserInfo.id;\n      var serverUrl = app.globalData.serverUrl;\n      var pendingCommentObject = {\n        vlogId: me.thisVlogId,\n        vlogerId: me.thisVlogerId,\n        fatherCommentId: me.thisFatherCommentId,\n        commentUserId: userId,\n        content: me.currentComment\n      };\n      uni.request({\n        method: \"POST\",\n        header: {\n          headerUserId: userId,\n          headerUserToken: app.getUserSessionToken()\n        },\n        url: serverUrl + \"/comment/create\",\n        data: pendingCommentObject,\n        success: function success(result) {\n          __f__(\"log\", result, \" at uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue:666\");\n          if (result.data.status == 200) {\n            var newCommentObject = result.data.data;\n            newCommentObject.commentId = newCommentObject.id;\n            newCommentObject.commentUserNickname = myUserInfo.nickname;\n            newCommentObject.commentUserFace = myUserInfo.face;\n            newCommentObject.isLike = 0;\n            // newCommentObject.isOwner = 0;\n            // if (me.thisVlogerId == userId) {\n            // \tnewCommentObject.isOwner = 1;\n            // }\n\n            me.doCommentPagingList(1, true);\n\n            // 评论/回复完毕后，回复thisFatherCommentId为“0”\n            me.thisFatherCommentId = \"0\";\n\n            // 把新评论添加到第一个位置，弱一致性，不需要从数据库里再去取\n            me.commentList.unshift(newCommentObject);\n            // 清空文本框\n            me.currentComment = \"\";\n            // 隐藏键盘\n            uni.hideKeyboard();\n            // 底部变色\n            me.noTypingComment();\n\n            // 把滚动list到第一个位置\n            me.scrollTop = me.scrollTop + 1;\n            me.$nextTick(function () {\n              me.scrollTop = 0; //赋值为0即代表返回顶部\n            });\n          } else {\n            uni.showToast({\n              title: result.data.msg,\n              icon: \"none\",\n              duration: 3000\n            });\n          }\n          me.freshCommentCounts();\n        }\n      });\n    },\n    // 把超过1000或10000的数字调整，比如1.3k/6.8w\n    getGraceNumber: function getGraceNumber(num) {\n      return getApp().graceNumber(num);\n    },\n    // 时间显示 刚刚/xx小时前/...\n    getGraceDateBeforeNow: function getGraceDateBeforeNow(dateTimeStr) {\n      var date = app.dateFormat(\"YYYY-mm-dd\", new Date(dateTimeStr));\n      // console.log(date);\n      return getApp().getDateBeforeNow(date);\n    },\n    /**\n     * 选择内容\n     */\n    select: function select(item, index) {\n      this.$emit('select', {\n        item: item,\n        index: index\n      });\n      this.close();\n    },\n    /**\n     * 关闭窗口\n     */\n    close: function close() {\n      if (this.beforeClose) return;\n      this.popup.close();\n      uni.showTabBar({\n        animation: true\n      });\n    },\n    touchstartComment: function touchstartComment(index) {\n      // this.commentTouched = true;\n      this.activeIndex = index;\n    },\n    touchendComment: function touchendComment() {\n      // this.commentTouched = false;\n      this.activeIndex = -1;\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 123)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXBvcHVwL2NvbXBvbmVudHMvdW5pLXBvcHVwLWNvbW1lbnRzL3VuaS1wb3B1cC1jb21tZW50cy52dWUiXSwibmFtZXMiOlsibmFtZSIsIm1peGlucyIsImVtaXRzIiwicHJvcHMiLCJ0aXRsZSIsInR5cGUiLCJkZWZhdWx0IiwiYmVmb3JlQ2xvc2UiLCJ0aGlzVmxvZ2VySWQiLCJ0aGlzVmxvZ0lkIiwiZGF0YSIsImNvbW1lbnRXcmFwcGVyQmxhY2siLCJjb21tZW50V3JhcHBlcldoaXRlIiwiY29tbWVudEJveEJsYWNrIiwiY29tbWVudEJveFdoaXRlIiwic2NyZWVuV2lkdGgiLCJjdXJyZW50Q29tbWVudCIsInNjcm9sbFRvcCIsIm9sZCIsImFjdGl2ZUluZGV4IiwiYm90dG9tVHh0IiwicGxhY2Vob2xkZXIiLCJjb21tZW50Rm9jdXMiLCJ0aGlzRmF0aGVyQ29tbWVudElkIiwidGhpc1Zsb2dUb3RhbENvbWVudENvdW50cyIsImxvZ2luVXNlcklkIiwicGFnZSIsInRvdGFsUGFnZSIsImNvbW1lbnRDb3VudHMiLCJjb21tZW50TGlzdCIsImNvbW1lbnRMaXN0MiIsImNyZWF0ZWQiLCJ1c2VySWQiLCJtZSIsIm1ldGhvZHMiLCJmcmVzaENvbW1lbnRDb3VudHMiLCJ1bmkiLCJtZXRob2QiLCJ1cmwiLCJzdWNjZXNzIiwidW5saWtlIiwiaGVhZGVyIiwiaGVhZGVyVXNlcklkIiwiaGVhZGVyVXNlclRva2VuIiwiaWNvbiIsImR1cmF0aW9uIiwibGlrZSIsImFuaW1hdGlvbiIsImFuaW1hdGlvblR5cGUiLCJyZUNvdW50c0NvbW1lbnRMaXN0IiwicmVMaWtlQ29tbWVudExpc3QiLCJkZWxldGVDb21tZW50IiwiY29udGVudCIsImxvYWRNb3JlIiwiZG9Db21tZW50UGFnaW5nTGlzdCIsInR5cGluZ0NvbW1lbnQiLCJub1R5cGluZ0NvbW1lbnQiLCJyZXBseUNvbW1lbnQiLCJkb0NvbW1lbnRQdWJsaXNoIiwibWFzayIsInBvc2l0aW9uIiwidmxvZ0lkIiwidmxvZ2VySWQiLCJmYXRoZXJDb21tZW50SWQiLCJjb21tZW50VXNlcklkIiwibmV3Q29tbWVudE9iamVjdCIsImdldEdyYWNlTnVtYmVyIiwiZ2V0R3JhY2VEYXRlQmVmb3JlTm93Iiwic2VsZWN0IiwiaXRlbSIsImluZGV4IiwiY2xvc2UiLCJ0b3VjaHN0YXJ0Q29tbWVudCIsInRvdWNoZW5kQ29tbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQW9TQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBQUEsZUFFQTtFQUNBQTtFQUNBQztFQUNBQztFQUNBQztJQUNBQztNQUNBQztNQUNBQztJQUNBO0lBQ0FDO01BQ0FGO01BQ0FDO0lBQ0E7SUFDQUU7TUFDQUg7TUFDQUM7SUFDQTtJQUNBRztNQUNBSjtNQUNBQztJQUNBO0VBQ0E7RUFDQUk7SUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO1FBQ0FEO01BQ0E7TUFFQTtNQUNBRTtNQUVBQztNQUNBQztNQUNBQztNQUNBQztNQUFBOztNQUVBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO01BQ0FDO0lBQ0E7SUFDQUM7SUFFQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7TUFDQTtNQUNBO01BRUE7TUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7VUFDQTtVQUVBO1lBQ0FOO1VBQ0E7WUFDQUE7VUFDQTtVQUVBO1lBQ0FBO1VBQ0E7WUFDQUE7VUFDQTtRQUVBO01BQ0E7SUFDQTtJQUVBTztNQUNBO01BRUE7TUFDQUo7UUFDQUM7UUFDQUk7VUFDQUM7VUFDQUM7UUFDQTtRQUNBTDtRQUNBQztVQUNBO1VBRUE7WUFDQU47WUFDQUE7VUFDQTtZQUNBRztjQUNBaEM7Y0FDQXdDO2NBQ0FDO1lBQ0E7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUVBQztNQUNBO01BRUE7TUFDQTtRQUNBVjtVQUNBVztRQUNBO1FBQ0FYO1VBQ0FTO1VBQ0F6QztVQUNBd0M7UUFDQTtRQUNBUjtVQUNBRTtVQUNBVTtRQUNBO1FBQ0E7TUFDQTtNQUdBO01BQ0FaO1FBQ0FDO1FBQ0FJO1VBQ0FDO1VBQ0FDO1FBQ0E7UUFDQUw7UUFDQUM7VUFDQTtVQUVBO1lBQ0FOO1lBQ0FBO1VBQ0E7WUFDQUc7Y0FDQWhDO2NBQ0F3QztjQUNBQztZQUNBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFFQUk7TUFDQTtNQUNBO01BRUFwQjtNQUNBQTtNQUVBSTtJQUNBO0lBRUFpQjtNQUNBO01BQ0E7TUFFQXJCO01BQ0FBO01BRUFJO0lBQ0E7SUFFQWtCO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtRQUNBO01BQ0E7TUFFQWY7UUFDQWhDO1FBQ0FnRDtRQUNBYjtVQUNBO1lBQ0E7WUFDQTtZQUNBSDtjQUNBQztjQUNBSTtnQkFDQUM7Z0JBQ0FDO2NBQ0E7Y0FDQUw7Y0FDQUM7Z0JBQ0E7Z0JBRUE7a0JBQ0FOO2dCQUNBO2tCQUNBRztvQkFDQWhDO29CQUNBd0M7b0JBQ0FDO2tCQUNBO2dCQUNBO2dCQUNBWjtjQUNBO1lBQ0E7VUFDQTtZQUNBO1VBQUE7UUFFQTtNQUNBO0lBRUE7SUFDQW9CO01BQ0E7UUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBckI7TUFDQTtNQUNBO01BQ0E7TUFDQUc7UUFDQUM7UUFDQUM7UUFDQUM7VUFDQTtVQUVBO1lBQ0E7WUFDQTtZQUNBOztZQUVBO2NBQ0FOO1lBQ0E7WUFDQUE7WUFDQUE7VUFFQTtZQUNBRztjQUNBaEM7Y0FDQXdDO2NBQ0FDO1lBQ0E7VUFDQTtRQUVBO01BQ0E7SUFDQTtJQUdBO0lBQ0FVO01BQ0E7TUFDQTtNQUNBO01BQ0E7O01BRUE7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFFQTtNQUNBO01BQ0E7SUFDQTtJQUVBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUVBO0lBQ0FDO01BQ0E7TUFHQTtNQUNBO1FBQ0F0QjtVQUNBVztRQUNBO1FBQ0FYO1VBQ0FTO1VBQ0F6QztVQUNBd0M7UUFDQTtRQUNBUjtVQUNBRTtVQUNBVTtRQUNBO1FBQ0E7TUFDQTtNQUdBO1FBQ0FaO1VBQ0FoQztVQUNBdUQ7VUFDQUM7UUFDQTtRQUNBO01BQ0E7TUFFQTtRQUNBeEI7VUFDQWhDO1VBQ0F1RDtVQUNBQztRQUNBO1FBQ0E7TUFDQTtNQUlBO01BQ0E7TUFFQTtRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBWjtNQUNBO01BRUFoQjtRQUNBQztRQUNBSTtVQUNBQztVQUNBQztRQUNBO1FBQ0FMO1FBQ0E1QjtRQUNBNkI7VUFDQTtVQUVBO1lBQ0E7WUFDQTBCO1lBQ0FBO1lBQ0FBO1lBQ0FBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7O1lBRUFoQzs7WUFFQTtZQUNBQTs7WUFFQTtZQUNBQTtZQUNBO1lBQ0FBO1lBQ0E7WUFDQUc7WUFDQTtZQUNBSDs7WUFFQTtZQUNBQTtZQUNBQTtjQUNBQTtZQUNBO1VBQ0E7WUFDQUc7Y0FDQWhDO2NBQ0F3QztjQUNBQztZQUNBO1VBQ0E7VUFFQVo7UUFDQTtNQUNBO0lBRUE7SUFDQTtJQUNBaUM7TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUdBO0FBQ0E7QUFDQTtJQUNBQztNQUNBO1FBQ0FDO1FBQ0FDO01BQ0E7TUFDQTtJQUVBO0lBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBbkM7UUFDQVc7TUFDQTtJQUNBO0lBRUF5QjtNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7SUFDQTtFQUNBO0FBQ0E7QUFBQSwyQiIsImZpbGUiOiIyMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5cdC51bmktcG9wdXAtc2hhcmUge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICMxODE3MTc7XG5cdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTZycHg7XG5cdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE2cnB4O1xuXHR9XG5cdC51bmktc2hhcmUtdGl0bGUge1xuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdC8qICNlbmRpZiAqL1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0aGVpZ2h0OiA0MHB4O1xuXHR9XG5cdC51bmktc2hhcmUtdGl0bGUtdGV4dCB7XG5cdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdGNvbG9yOiAjZmZmZmZmO1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdH1cblx0LnVuaS1zaGFyZS1jb250ZW50IHtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHQvKiAjZW5kaWYgKi9cblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHR9XG5cblx0LnVuaS1zaGFyZS1jb250ZW50LWJveCB7XG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0LyogI2VuZGlmICovXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0d2lkdGg6IDM2MHB4O1xuXHR9XG5cblx0LnVuaS1zaGFyZS1jb250ZW50LWl0ZW0ge1xuXHRcdHdpZHRoOiA5MHB4O1xuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdC8qICNlbmRpZiAqL1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0cGFkZGluZzogMTBweCAwO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdH1cblxuXHQudW5pLXNoYXJlLWNvbnRlbnQtaXRlbTphY3RpdmUge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG5cdH1cblxuXHQudW5pLXNoYXJlLWltYWdlIHtcblx0XHR3aWR0aDogMzBweDtcblx0XHRoZWlnaHQ6IDMwcHg7XG5cdH1cblxuXHQudW5pLXNoYXJlLXRleHQge1xuXHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdGNvbG9yOiAjM0I0MTQ0O1xuXHR9XG5cblx0LnVuaS1zaGFyZS1idXR0b24tYm94IHtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHQvKiAjZW5kaWYgKi9cblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdHBhZGRpbmc6IDEwcHggMTVweDtcblx0fVxuXG5cdC51bmktc2hhcmUtYnV0dG9uIHtcblx0XHRmbGV4OiAxO1xuXHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0Y29sb3I6ICM2NjY7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHR9XG5cblx0LnVuaS1zaGFyZS1idXR0b246OmFmdGVyIHtcblx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHR9XG5cdFxuXHQuaWNvbi1jbG9zZS1sZWZ0IHtcblx0XHR3aWR0aDogMjBycHg7XG5cdFx0aGVpZ2h0OiAyMHJweDtcblx0XHRtYXJnaW4tbGVmdDogMzBycHg7XG5cdFx0b3BhY2l0eTogMDtcblx0fVxuXHQuaWNvbi1jbG9zZS1yaWdodCB7XG5cdFx0d2lkdGg6IDIycnB4O1xuXHRcdGhlaWdodDogMjJycHg7XG5cdFx0bWFyZ2luLXJpZ2h0OiAzMHJweDtcblx0fVxuXHRcblx0LmNvbW1lbnQtd3JhcHBlciB7XG5cdFx0Ly8gaGVpZ2h0OiA0MHB4O1xuXHRcdHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXHR9XG5cdC5jb21tZW50V3JhcHBlckJsYWNrIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMGUwZDBkO1xuXHR9XG5cdC5jb21tZW50V3JhcHBlcldoaXRlIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXHR9XG5cdC5jb21tZW50LWJveCB7XG5cdFx0Zm9udC1zaXplOiAxNXB4O1xuXHRcdGhlaWdodDogNDBweDtcblx0XHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRcdHBhZGRpbmc6IDAgMThweCAwIDE4cHg7XG5cdH1cblx0LmNvbW1lbnRCb3hCbGFjayB7XG5cdFx0Y29sb3I6ICNGRkZGRkY7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzE1MTUxNTtcblx0fVxuXHQuY29tbWVudEJveFdoaXRlIHtcblx0XHRjb2xvcjogIzAwMDAwMDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmY1O1xuXHR9XG5cdC5jb21tZW50LWJveC1wbGFjZWhvbGRlciB7XG5cdFx0Zm9udC1zaXplOiAxNXB4O1xuXHR9XG5cdC5pY29uLWNvbW1lbnQge1xuXHRcdHdpZHRoOiAzMHB4O1xuXHRcdGhlaWdodDogMzBweDtcblx0fVxuXHRcblx0LmFsbC1jb21tZW50cyB7XG5cdFx0aGVpZ2h0OiA4MDBycHg7XG5cdFx0Ly8gcGFkZGluZzogMTZycHggMzBycHg7XG5cdH1cblx0LmltZy1mYWNlIHtcblx0XHR3aWR0aDogODBycHg7XG5cdFx0aGVpZ2h0OiA4MHJweDtcblx0XHRib3JkZXItcmFkaXVzOiAxMDBycHg7XG5cdH1cblx0Lmxpa2Utb3Itbm90IHtcblx0XHRtYXJnaW4tdG9wOiAxNnB4O1xuXHRcdHdpZHRoOiA1MHJweDtcblx0XHRoZWlnaHQ6IDUwcnB4O1xuXHR9XG5cdC5jb21tZW50cy13cmFwcGVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdH1cblx0LmNvbW1lbnRzLXdyYXBwZXItc3ViLXVwIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR9XG5cdC5jb21tZW50cy13cmFwcGVyLXN1Yi1kb3duIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0bWFyZ2luLXRvcDogMnB4O1xuXHR9XG5cdC52bG9nZ2VyLXdyYXBwZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0fVxuXHQudGFnLXdyaXRlciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmMDJhNTA7IFxuXHRcdGJvcmRlci1yYWRpdXM6IDNweDtcblx0XHR3aWR0aDogMzBweDtcblx0XHRoZWlnaHQ6IDE2cHg7XG5cdFx0bWFyZ2luLWxlZnQ6IDJweDtcblx0fVxuXHQud3JpdGVyLXdvcmRzIHtcblx0XHRmb250LXNpemU6IDI2cnB4O1xuXHRcdGNvbG9yOiAjRkZGRkZGO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuXHRcblx0LnNpbmdsZS1jb21tZW50LWJveCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzE4MTcxNztcblx0fVxuXHQuc2luZ2xlLWNvbW1lbnQtYm94LXRvdWNoZWQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XG5cdH1cblx0LmFjdGl2ZSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcblx0fVxuPC9zdHlsZT5cblxuPHRlbXBsYXRlPlxuXHQ8dmlldyBjbGFzcz1cInVuaS1wb3B1cC1zaGFyZVwiPlxuXHRcdDx2aWV3IGNsYXNzPVwidW5pLXNoYXJlLXRpdGxlXCI+XG5cdFx0XHQ8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi1jbG9zZS5wbmdcIiBjbGFzcz1cImljb24tY2xvc2UtbGVmdFwiPjwvaW1hZ2U+XG5cdFx0XHQ8dGV4dCBjbGFzcz1cInVuaS1zaGFyZS10aXRsZS10ZXh0XCI+e3tnZXRHcmFjZU51bWJlcih0aGlzVmxvZ1RvdGFsQ29tZW50Q291bnRzKX195p2h6K+E6K66PC90ZXh0PlxuXHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tY2xvc2UucG5nXCIgY2xhc3M9XCJpY29uLWNsb3NlLXJpZ2h0XCIgQGNsaWNrPVwiY2xvc2VcIj48L2ltYWdlPlxuXHRcdDwvdmlldz5cblx0XHQ8dmlldyBjbGFzcz1cInVuaS1zaGFyZS1jb250ZW50XCI+XG5cdFx0XHQ8IS0tIDx2aWV3IGNsYXNzPVwidW5pLXNoYXJlLWNvbnRlbnQtYm94XCI+IC0tPlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJcIiBzdHlsZT1cImhlaWdodDogODAwcnB4O1wiPjwhLS0gYmFja2dyb3VuZC1jb2xvcjogIzAwNzdBQTsgLS0+XG5cdFx0XHRcdDxzY3JvbGwtdmlldyBcblx0XHRcdFx0XHRjbGFzcz1cImFsbC1jb21tZW50c1wiIFxuXHRcdFx0XHRcdDpzdHlsZT1cInt3aWR0aDogc2NyZWVuV2lkdGggKyAncHgnfVwiIFxuXHRcdFx0XHRcdHNjcm9sbC15PVwidHJ1ZVwiIFxuXHRcdFx0XHRcdGxvd2VyLXRocmVzaG9sZD1cIjE1MFwiXG5cdFx0XHRcdFx0QHNjcm9sbHRvbG93ZXI9XCJsb2FkTW9yZVwiXG5cdFx0XHRcdFx0OnNjcm9sbC10b3A9XCJzY3JvbGxUb3BcIj5cblx0XHRcdFx0XHQ8dmlldyBcblx0XHRcdFx0XHRcdHYtZm9yPVwiKGNvbW1lbnRDb250ZW50LCBpbmRleCkgaW4gY29tbWVudExpc3RcIiBcblx0XHRcdFx0XHRcdDprZXk9XCJpbmRleFwiIFxuXHRcdFx0XHRcdFx0OmRhdGEtaW5kZXg9XCJpbmRleFwiIFxuXHRcdFx0XHRcdFx0OmNsYXNzPVwie2FjdGl2ZSA6IGluZGV4ID09IGFjdGl2ZUluZGV4fVwiXG5cdFx0XHRcdFx0XHRAdG91Y2hzdGFydD1cInRvdWNoc3RhcnRDb21tZW50KGluZGV4KVwiXG5cdFx0XHRcdFx0XHRAdG91Y2hlbmQ9XCJ0b3VjaGVuZENvbW1lbnQoKVwiXG5cdFx0XHRcdFx0XHRAbG9uZ3ByZXNzPVwiZGVsZXRlQ29tbWVudChjb21tZW50Q29udGVudC5jb21tZW50VXNlcklkLCBjb21tZW50Q29udGVudC5jb21tZW50SWQpXCI+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbW1lbnRzLXdyYXBwZXJcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxNnJweDttYXJnaW4tdG9wOiAxNnJweDttYXJnaW4tcmlnaHQ6IDE2cnB4O1wiPlxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbW1lbnRzLXdyYXBwZXItc3ViLXVwXCIgPlxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidmxvZ2dlci13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cImNvbW1lbnRDb250ZW50LmNvbW1lbnRVc2VyRmFjZVwiIGNsYXNzPVwiaW1nLWZhY2VcIj48L2ltYWdlPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgc3R5bGU9XCJtYXJnaW4tbGVmdDogMTBweDt3aWR0aDogNDU2cnB4O1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBzdHlsZT1cImRpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IHJvdztcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogMzBycHg7Y29sb3I6ICM4Nzg1ODU7YWxpZ24tc2VsZjogY2VudGVyO1wiPnt7Y29tbWVudENvbnRlbnQuY29tbWVudFVzZXJOaWNrbmFtZX19PC90ZXh0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IHYtaWY9XCJjb21tZW50Q29udGVudC52bG9nZXJJZCA9PSB0aGlzVmxvZ2VySWRcIiBjbGFzcz1cInRhZy13cml0ZXJcIiBzdHlsZT1cImFsaWduLXNlbGY6IGNlbnRlcjtcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwid3JpdGVyLXdvcmRzXCIgc3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXI7XCI+5L2c6ICFPC90ZXh0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2LWlmPVwiY29tbWVudENvbnRlbnQucmVwbHllZFVzZXJOaWNrbmFtZSAhPSBudWxsICAmJiBjb21tZW50Q29udGVudC5yZXBseWVkVXNlck5pY2tuYW1lICE9ICcnXCIgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLXJpZ2h0LWFycm93My5wbmdcIiBjbGFzcz1cIlwiIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9XCJvcGFjaXR5OiAwLjg7d2lkdGg6IDQwcnB4O2hlaWdodDogNDBycHg7bWFyZ2luLWxlZnQ6IDE2cnB4O21hcmdpbi1yaWdodDogMTBycHg7YWxpZ24tc2VsZjogY2VudGVyO1wiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2LWlmPVwiY29tbWVudENvbnRlbnQucmVwbHllZFVzZXJOaWNrbmFtZSAhPSBudWxsICAmJiBjb21tZW50Q29udGVudC5yZXBseWVkVXNlck5pY2tuYW1lICE9ICcnXCIgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT1cImZvbnQtc2l6ZTogMzBycHg7Y29sb3I6ICM4Nzg1ODU7YWxpZ24tc2VsZjogY2VudGVyO1wiPnt7Y29tbWVudENvbnRlbnQucmVwbHllZFVzZXJOaWNrbmFtZX19PC90ZXh0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiAzMnJweDtjb2xvcjogI0ZGRkZGRjttYXJnaW4tdG9wOiAycHg7XCI+e3tjb21tZW50Q29udGVudC5jb250ZW50fX08L3RleHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IHN0eWxlPVwiZGlzcGxheTogZmxleDtmbGV4LWRpcmVjdGlvbjogY29sdW1uO3dpZHRoOiAyNnB4O1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHYtaWY9XCJjb21tZW50Q29udGVudC5pc0xpa2UgPT0gMVwiIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLWNvbW1lbnQtbGlrZS5wbmdcIiBcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJsaWtlLW9yLW5vdFwiIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT1cImFsaWduLXNlbGY6IGNlbnRlcjtcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRAY2xpY2s9XCJ1bmxpa2UoY29tbWVudENvbnRlbnQuY29tbWVudFVzZXJJZCwgY29tbWVudENvbnRlbnQuY29tbWVudElkLCBpbmRleClcIj48L2ltYWdlPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHYtaWY9XCJjb21tZW50Q29udGVudC5pc0xpa2UgPT0gMFwiIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLWNvbW1lbnQtdW5saWtlLnBuZ1wiIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImxpa2Utb3Itbm90XCIgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPVwiYWxpZ24tc2VsZjogY2VudGVyO1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEBjbGljaz1cImxpa2UoY29tbWVudENvbnRlbnQuY29tbWVudFVzZXJJZCwgY29tbWVudENvbnRlbnQuY29tbWVudElkLCBpbmRleClcIj48L2ltYWdlPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJmb250LXNpemU6IDIycnB4O2NvbG9yOiAjODc4NTg1O2FsaWduLXNlbGY6IGNlbnRlcjtcIj57e2dldEdyYWNlTnVtYmVyKGNvbW1lbnRDb250ZW50Lmxpa2VDb3VudHMpfX08L3RleHQ+XG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29tbWVudHMtd3JhcHBlci1zdWItZG93blwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIvc3RhdGljL2ZhY2UvZmFjZS1hcnJvdy0xLnBuZ1wiIGNsYXNzPVwiaW1nLWZhY2VcIiBzdHlsZT1cIm9wYWNpdHk6IDA7XCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogMzBycHg7Y29sb3I6ICM4Nzg1ODU7bWFyZ2luLWxlZnQ6IDEwcHg7XCI+e3tnZXRHcmFjZURhdGVCZWZvcmVOb3coY29tbWVudENvbnRlbnQuY3JlYXRlVGltZSl9fTwvdGV4dD5cblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogMzBycHg7Y29sb3I6ICM4Nzg1ODU7bWFyZ2luLWxlZnQ6IDIwcHg7XCIgQGNsaWNrPVwicmVwbHlDb21tZW50KGNvbW1lbnRDb250ZW50LmNvbW1lbnRJZCwgY29tbWVudENvbnRlbnQuY29tbWVudFVzZXJOaWNrbmFtZSlcIj7lm57lpI08L3RleHQ+XG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0PCEtLSBUT0RPOiDliKTmlq3mgLvor4TorrrmlbDlkozlvZPliY1saXN05Lit5pWw6YeP5piv5ZCm5LiA6Ie077yM5aaC5p6c5LiA6Ie077yM5YiZ5pi+54S25aaC5LiLIC0tPlxuXHRcdFx0XHRcdDx2aWV3IHN0eWxlPVwiZGlzcGxheTogZmxleDtmbGV4LWRpcmVjdGlvbjogcm93O2p1c3RpZnktY29udGVudDogY2VudGVyO21hcmdpbi10b3A6IDUwcnB4O2hlaWdodDogMTAwcnB4O1wiPlxuXHRcdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJjb2xvcjogIzQ0NDQ0Njtmb250LXNpemU6IDEzcHg7XCI+e3tib3R0b21UeHR9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdDwvc2Nyb2xsLXZpZXc+XG5cblx0XHRcdDwvdmlldz5cblx0XHRcdFxuXHRcdFx0PCEtLSDor4TorrrovpPlhaXmoYYgLS0+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImNvbW1lbnQtd3JhcHBlclwiIFxuXHRcdFx0XHQ6Y2xhc3M9XCJ7Y29tbWVudFdyYXBwZXJCbGFjazogY29tbWVudFdyYXBwZXJCbGFjaywgY29tbWVudFdyYXBwZXJXaGl0ZTogY29tbWVudFdyYXBwZXJXaGl0ZX1cIj5cblx0XHRcdFx0PGlucHV0IFxuXHRcdFx0XHRcdGNsYXNzPVwiY29tbWVudC1ib3hcIiBcblx0XHRcdFx0XHQ6Y2xhc3M9XCJ7Y29tbWVudEJveEJsYWNrOiBjb21tZW50Qm94QmxhY2ssIGNvbW1lbnRCb3hXaGl0ZTogY29tbWVudEJveFdoaXRlfVwiXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXItY2xhc3M9XCJjb21tZW50LWJveC1wbGFjZWhvbGRlclwiXG5cdFx0XHRcdFx0OnN0eWxlPVwie3dpZHRoOiBzY3JlZW5XaWR0aC03MCArICdweCd9XCIgXG5cdFx0XHRcdFx0OnBsYWNlaG9sZGVyPVwicGxhY2Vob2xkZXJcIiBcblx0XHRcdFx0XHRjdXJzb3Itc3BhY2luZz1cIjEwcHhcIlxuXHRcdFx0XHRcdHYtbW9kZWw9XCJjdXJyZW50Q29tbWVudFwiXG5cdFx0XHRcdFx0Y29uZmlybS10eXBlPVwiZG9uZVwiXG5cdFx0XHRcdFx0OmZvY3VzPVwiY29tbWVudEZvY3VzXCJcblx0XHRcdFx0XHRAZm9jdXM9XCJ0eXBpbmdDb21tZW50XCJcblx0XHRcdFx0XHRAYmx1cj1cIm5vVHlwaW5nQ29tbWVudFwiPlxuXHRcdFx0XHRcdDwhLS0gQGNvbmZpcm09XCJkb0NvbW1lbnRQdWJsaXNoXCIgLS0+XG5cdFx0XHRcdDx2aWV3IHN0eWxlPVwiZGlzcGxheTogZmxleDtmbGV4LWRpcmVjdGlvbjogY29sdW1uO2p1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxuXHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLWNvbW1lbnQucG5nXCIgY2xhc3M9XCJpY29uLWNvbW1lbnRcIiBAY2xpY2s9XCJkb0NvbW1lbnRQdWJsaXNoKClcIj48L2ltYWdlPlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XG5cdFx0PC92aWV3PlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHR2YXIgYXBwID0gZ2V0QXBwKCk7XG5cdGltcG9ydCBwb3B1cCBmcm9tICcuLi91bmktcG9wdXAvcG9wdXAuanMnXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAnVW5pUG9wdXBTaGFyZScsXG5cdFx0bWl4aW5zOltwb3B1cF0sXG5cdFx0ZW1pdHM6WydzZWxlY3QnXSxcblx0XHRwcm9wczoge1xuXHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAn5YiG5Lqr5YiwJ1xuXHRcdFx0fSxcblx0XHRcdGJlZm9yZUNsb3NlOiB7XG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0dGhpc1Zsb2dlcklkOiB7XG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogJydcblx0XHRcdH0sXG5cdFx0XHR0aGlzVmxvZ0lkOiB7XG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogJydcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y29tbWVudFdyYXBwZXJCbGFjazogdHJ1ZSxcblx0XHRcdFx0Y29tbWVudFdyYXBwZXJXaGl0ZTogZmFsc2UsXG5cdFx0XHRcdGNvbW1lbnRCb3hCbGFjazogdHJ1ZSxcblx0XHRcdFx0Y29tbWVudEJveFdoaXRlOiBmYWxzZSxcblx0XHRcdFx0Ly8gY29tbWVudFdyYXBwZXJCbGFjazogZmFsc2UsXG5cdFx0XHRcdC8vIGNvbW1lbnRXcmFwcGVyV2hpdGU6IHRydWUsXG5cdFx0XHRcdC8vIGNvbW1lbnRCb3hCbGFjazogZmFsc2UsXG5cdFx0XHRcdC8vIGNvbW1lbnRCb3hXaGl0ZTogdHJ1ZSxcblx0XHRcdFx0c2NyZWVuV2lkdGg6IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnNjcmVlbldpZHRoLFxuXHRcdFx0XHRjdXJyZW50Q29tbWVudDogXCJcIixcblx0XHRcdFx0c2Nyb2xsVG9wOiAwLFxuXHRcdFx0XHRvbGQ6IHtcblx0XHRcdFx0XHRzY3JvbGxUb3A6IDBcblx0XHRcdFx0fSxcblx0XHRcdFx0XG5cdFx0XHRcdC8vIGNvbW1lbnRUb3VjaGVkOiBmYWxzZSxcblx0XHRcdFx0YWN0aXZlSW5kZXg6IC0xLFxuXHRcdFx0XHRcblx0XHRcdFx0Ym90dG9tVHh0OiBcIuW3sue7j+WIsOW6leWVpn5cIixcblx0XHRcdFx0cGxhY2Vob2xkZXI6IFwi6Imv6KiA5LiJ5Yas5pqW77yM5oG26K+t5YWt5pyI5a+SXCIsXG5cdFx0XHRcdGNvbW1lbnRGb2N1czogZmFsc2UsXG5cdFx0XHRcdHRoaXNGYXRoZXJDb21tZW50SWQ6IFwiMFwiLFx0Ly8g55So5LqO5qCH6K+G5b2T5YmN55qE5Zue5aSN5piv5ZCm5pyJ54i2aWTvvIzov5jmmK/ku4Xku4Xlj6rmmK/mma7pgJror4Torrpcblx0XHRcdFx0XG5cdFx0XHRcdHRoaXNWbG9nVG90YWxDb21lbnRDb3VudHM6IDAsXG5cdFx0XHRcdGxvZ2luVXNlcklkOiBcIlwiLFxuXHRcdFx0XHRwYWdlOiAwLFxuXHRcdFx0XHR0b3RhbFBhZ2U6IDAsXG5cdFx0XHRcdGNvbW1lbnRDb3VudHM6IDg4LFxuXHRcdFx0XHRjb21tZW50TGlzdDogW10sXG5cdFx0XHRcdGNvbW1lbnRMaXN0MjogW11cblx0XHRcdH1cblx0XHR9LFxuXHRcdGNyZWF0ZWQoKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcImNvbW1lbnQuLi5jcmVhdGVkLi4udGhpc1Zsb2dJZCA9IFwiICsgdGhpcy50aGlzVmxvZ0lkKVx0XHRcblx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHR2YXIgbXlVc2VySW5mbyA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpO1xuXHRcdFx0dmFyIHVzZXJJZCA9IFwiXCI7XG5cdFx0XHRpZiAobXlVc2VySW5mbyAhPSBudWxsKSB7XG5cdFx0XHRcdHVzZXJJZCA9IG15VXNlckluZm8uaWQ7XG5cdFx0XHR9XG5cdFx0XHRtZS5sb2dpblVzZXJJZCA9IHVzZXJJZDtcblx0XHRcdFxuXHRcdFx0dGhpcy5mcmVzaENvbW1lbnRDb3VudHMoKTtcblx0XHRcdHRoaXMuZG9Db21tZW50UGFnaW5nTGlzdCh0aGlzLnBhZ2UgKyAxLCB0cnVlKTtcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGZyZXNoQ29tbWVudENvdW50cygpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHZsb2dJZCA9IG1lLnRoaXNWbG9nSWQ7XG5cdFx0XHRcdFxuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0XHRcdHVybDogc2VydmVyVXJsICsgXCIvY29tbWVudC9jb3VudHM/dmxvZ0lkPVwiICsgdmxvZ0lkLFxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0LmRhdGEuc3RhdHVzID09IDIwMCkge1xuXHRcdFx0XHRcdFx0XHRtZS50aGlzVmxvZ1RvdGFsQ29tZW50Q291bnRzID0gcmVzdWx0LmRhdGEuZGF0YTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdG1lLnRoaXNWbG9nVG90YWxDb21lbnRDb3VudHMgPSAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRpZiAobWUudGhpc1Zsb2dUb3RhbENvbWVudENvdW50cyA9PSAwKSB7XG5cdFx0XHRcdFx0XHRcdG1lLmJvdHRvbVR4dCA9IFwi5oqi5LiA5Liq5rKZ5Y+R5ZCnflwiO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0bWUuYm90dG9tVHh0ID0gXCLliLDlupXllaZ+XCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0dW5saWtlKGNvbW1lbnRVc2VySWQsIGNvbW1lbnRJZCwgaW5kZXgpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0XG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0XHRcdGhlYWRlcjoge1xuXHRcdFx0XHRcdFx0aGVhZGVyVXNlcklkOiBtZS5sb2dpblVzZXJJZCxcblx0XHRcdFx0XHRcdGhlYWRlclVzZXJUb2tlbjogYXBwLmdldFVzZXJTZXNzaW9uVG9rZW4oKVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dXJsOiBzZXJ2ZXJVcmwgKyBcIi9jb21tZW50L3VubGlrZT91c2VySWQ9XCIgKyBtZS5sb2dpblVzZXJJZCArIFwiJmNvbW1lbnRJZD1cIiArIGNvbW1lbnRJZCxcblx0XHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0XHRcdFx0bWUucmVMaWtlQ29tbWVudExpc3QoaW5kZXgsIDApO1xuXHRcdFx0XHRcdFx0XHRtZS5yZUNvdW50c0NvbW1lbnRMaXN0KGluZGV4LCAtMSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzdWx0LmRhdGEubXNnLFxuXHRcdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRsaWtlKGNvbW1lbnRVc2VySWQsIGNvbW1lbnRJZCwgaW5kZXgpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0XG5cdFx0XHRcdHZhciBteVVzZXJJbmZvID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCk7XG5cdFx0XHRcdGlmIChteVVzZXJJbmZvID09IG51bGwpIHtcblx0XHRcdFx0XHR1bmkuc2hvd1RhYkJhcih7XG5cdFx0XHRcdFx0XHRhbmltYXRpb246IGZhbHNlXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMCxcblx0XHRcdFx0XHRcdHRpdGxlOiBcIuivt+eZu+W9lX5cIixcblx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdFx0dXJsOiBcIi4uL2xvZ2luUmVnaXN0L2xvZ2luUmVnaXN0XCIsXG5cdFx0XHRcdFx0XHRhbmltYXRpb25UeXBlOiBcInNsaWRlLWluLWJvdHRvbVwiLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0XHRcdGhlYWRlcjoge1xuXHRcdFx0XHRcdFx0aGVhZGVyVXNlcklkOiBtZS5sb2dpblVzZXJJZCxcblx0XHRcdFx0XHRcdGhlYWRlclVzZXJUb2tlbjogYXBwLmdldFVzZXJTZXNzaW9uVG9rZW4oKVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dXJsOiBzZXJ2ZXJVcmwgKyBcIi9jb21tZW50L2xpa2U/dXNlcklkPVwiICsgbWUubG9naW5Vc2VySWQgKyBcIiZjb21tZW50SWQ9XCIgKyBjb21tZW50SWQsXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXN1bHQpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRcdG1lLnJlTGlrZUNvbW1lbnRMaXN0KGluZGV4LCAxKTtcblx0XHRcdFx0XHRcdFx0bWUucmVDb3VudHNDb21tZW50TGlzdChpbmRleCwgMSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzdWx0LmRhdGEubXNnLFxuXHRcdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRyZUNvdW50c0NvbW1lbnRMaXN0KGluZGV4LCBudW1iZXIpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIGNvbW1lbnRMaXN0ID0gbWUuY29tbWVudExpc3Q7XG5cdFx0XHRcdFxuXHRcdFx0XHRjb21tZW50TGlzdFtpbmRleF0ubGlrZUNvdW50cyA9IGNvbW1lbnRMaXN0W2luZGV4XS5saWtlQ291bnRzICsgbnVtYmVyO1xuXHRcdFx0XHRjb21tZW50TGlzdC5zcGxpY2UoaW5kZXgsIDEsIGNvbW1lbnRMaXN0W2luZGV4XSk7XG5cdFx0XHRcdFxuXHRcdFx0XHRtZS5jb21tZW50TGlzdCA9IGNvbW1lbnRMaXN0O1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0cmVMaWtlQ29tbWVudExpc3QoaW5kZXgsIGlzTGlrZSkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgY29tbWVudExpc3QgPSBtZS5jb21tZW50TGlzdDtcblx0XHRcdFx0XG5cdFx0XHRcdGNvbW1lbnRMaXN0W2luZGV4XS5pc0xpa2UgPSBpc0xpa2U7XG5cdFx0XHRcdGNvbW1lbnRMaXN0LnNwbGljZShpbmRleCwgMSwgY29tbWVudExpc3RbaW5kZXhdKTtcblx0XHRcdFx0XG5cdFx0XHRcdG1lLmNvbW1lbnRMaXN0ID0gY29tbWVudExpc3Q7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRkZWxldGVDb21tZW50KGNvbW1lbnRVc2VySWQsIGNvbW1lbnRJZCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgdmxvZ0lkID0gbWUudGhpc1Zsb2dJZDtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCJkZWxldGVDb21tZW50Li4uZGVsZXRlQ29tbWVudD1cIiArIGNvbW1lbnRJZCk7XG5cdFx0XHRcdC8vIOWIpOaWreWmguaenOW9k+WJjeeZu+mZhuiAhXVzZXJJZOWSjOivhOiuuueahOeVmeiogOiAhWlk5LiN5ZCM77yM5LiN6IO95Yig6ZmkXG5cdFx0XHRcdGlmIChjb21tZW50VXNlcklkICE9IG1lLmxvZ2luVXNlcklkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcblx0XHRcdFx0ICAgIHRpdGxlOiAn5o+Q56S6Jyxcblx0XHRcdFx0ICAgIGNvbnRlbnQ6ICfnoa7orqTliKDpmaTor4TorrrlkJfvvJ8nLFxuXHRcdFx0XHQgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuXHRcdFx0XHQgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuXHRcdFx0XHQgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJyk7XG5cdFx0XHRcdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdFx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0XHRcdFx0XHRtZXRob2Q6IFwiREVMRVRFXCIsXG5cdFx0XHRcdFx0XHRcdFx0aGVhZGVyOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRoZWFkZXJVc2VySWQ6IGNvbW1lbnRVc2VySWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWFkZXJVc2VyVG9rZW46IGFwcC5nZXRVc2VyU2Vzc2lvblRva2VuKClcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdHVybDogc2VydmVyVXJsICsgXCIvY29tbWVudC9kZWxldGU/Y29tbWVudFVzZXJJZD1cIiArIGNvbW1lbnRVc2VySWQgKyBcIiZjb21tZW50SWQ9XCIgKyBjb21tZW50SWQgKyBcIiZ2bG9nSWQ9XCIgKyB2bG9nSWQsXG5cdFx0XHRcdFx0XHRcdFx0c3VjY2VzcyhyZXN1bHQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1lLmRvQ29tbWVudFBhZ2luZ0xpc3QoMSwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzdWx0LmRhdGEubXNnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0bWUuZnJlc2hDb21tZW50Q291bnRzKCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0ICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcblx0XHRcdFx0ICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpO1xuXHRcdFx0XHQgICAgICAgIH1cblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdFxuXHRcdFx0fSxcblx0XHRcdGxvYWRNb3JlKCkge1xuXHRcdFx0XHRpZiAodGhpcy5wYWdlID09IHRoaXMudG90YWxQYWdlKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuZG9Db21tZW50UGFnaW5nTGlzdCh0aGlzLnBhZ2UgKyAxLCBmYWxzZSk7XG5cdFx0XHR9LFxuXHRcdFx0Ly8g5YiG6aG15p+l6K+i6K+E6K665YiX6KGoXG5cdFx0XHRkb0NvbW1lbnRQYWdpbmdMaXN0KHBhZ2UsIG5lZWRDbGVhckxpc3QpIHtcblx0XHRcdFx0Ly8g5p+l6K+i6aaW6aG155+t6KeG6aKR5YiX6KGoXG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdG1lLnBhZ2UgPSBwYWdlO1xuXHRcdFx0XHR2YXIgdmxvZ0lkID0gbWUudGhpc1Zsb2dJZDtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2codmxvZ0lkKTtcblx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xuXHRcdFx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdFx0XHR1cmw6IHNlcnZlclVybCArIFwiL2NvbW1lbnQvbGlzdD92bG9nSWQ9XCIgKyB2bG9nSWQgKyBcIiZ1c2VySWQ9XCIgKyBtZS5sb2dpblVzZXJJZCArIFwiJnBhZ2U9XCIgKyBwYWdlICsgXCImcGFnZVNpemU9MTBcIixcblx0XHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0XHRcdFx0dmFyIGNvbW1lbnRMaXN0ID0gcmVzdWx0LmRhdGEuZGF0YS5yb3dzO1xuXHRcdFx0XHRcdFx0XHR2YXIgdG90YWxQYWdlID0gcmVzdWx0LmRhdGEuZGF0YS50b3RhbDtcblx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coY29tbWVudExpc3QpO1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0aWYgKG5lZWRDbGVhckxpc3QpIHtcblx0XHRcdFx0XHRcdFx0XHRtZS5jb21tZW50TGlzdCA9IFtdO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdG1lLmNvbW1lbnRMaXN0ID0gbWUuY29tbWVudExpc3QuY29uY2F0KGNvbW1lbnRMaXN0KTtcblx0XHRcdFx0XHRcdFx0bWUudG90YWxQYWdlID0gdG90YWxQYWdlO1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZXN1bHQuZGF0YS5tc2csXG5cdFx0XHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCIsXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDBcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHQvLyDojrflvpfnhKbngrnvvIzmlLnlj5jlupXpg6jmlofmnKzmoYbpopzoibJcblx0XHRcdHR5cGluZ0NvbW1lbnQoKSB7XG5cdFx0XHRcdHRoaXMuY29tbWVudFdyYXBwZXJCbGFjayA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLmNvbW1lbnRXcmFwcGVyV2hpdGUgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLmNvbW1lbnRCb3hCbGFjayA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLmNvbW1lbnRCb3hXaGl0ZSA9IHRydWU7XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnRoaXNGYXRoZXJDb21tZW50SWQpO1xuXHRcdFx0fSxcblx0XHRcdC8vIOWkseWOu+eEpueCue+8jOaUueWPmOW6lemDqOaWh+acrOahhuminOiJslxuXHRcdFx0bm9UeXBpbmdDb21tZW50KCkge1xuXHRcdFx0XHR0aGlzLmNvbW1lbnRXcmFwcGVyQmxhY2sgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLmNvbW1lbnRXcmFwcGVyV2hpdGUgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5jb21tZW50Qm94QmxhY2sgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLmNvbW1lbnRCb3hXaGl0ZSA9IGZhbHNlO1xuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy50aGlzRmF0aGVyQ29tbWVudElkID0gXCIwXCI7XHRcdC8vIOaBouWkjem7mOiupOeahOWbnuWkjWZhdGhlcklk5Li64oCcMOKAnVxuXHRcdFx0XHR0aGlzLmNvbW1lbnRGb2N1cyA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLnBsYWNlaG9sZGVyID0gXCLniLHor4TorrrnmoTkurrpg73mmK/lpKnkvb9+XCI7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHQvLyDlm57lpI3ku5bkurrnmoTor4Torrpcblx0XHRcdHJlcGx5Q29tbWVudChjb21tZW50SWQsIGNvbW1lbnRVc2VyTmlja25hbWUpIHtcblx0XHRcdFx0dGhpcy50aGlzRmF0aGVyQ29tbWVudElkID0gY29tbWVudElkO1xuXHRcdFx0XHR0aGlzLmNvbW1lbnRGb2N1cyA9IHRydWU7XG5cdFx0XHRcdHRoaXMucGxhY2Vob2xkZXIgPSBcIuWbnuWkjSBAXCIgKyBjb21tZW50VXNlck5pY2tuYW1lO1xuXHRcdFx0XHQvLyB0aGlzLnR5cGluZ0NvbW1lbnQoKTtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8vIOWPkeW4g+eVmeiogFxuXHRcdFx0ZG9Db21tZW50UHVibGlzaCgpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0XG5cdFx0XHRcdFxuXHRcdFx0XHR2YXIgbXlVc2VySW5mbyA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpO1xuXHRcdFx0XHRpZiAobXlVc2VySW5mbyA9PSBudWxsKSB7XG5cdFx0XHRcdFx0dW5pLnNob3dUYWJCYXIoe1xuXHRcdFx0XHRcdFx0YW5pbWF0aW9uOiBmYWxzZVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDAsXG5cdFx0XHRcdFx0XHR0aXRsZTogXCLor7fnmbvlvZV+XCIsXG5cdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHRcdHVybDogXCIuLi9sb2dpblJlZ2lzdC9sb2dpblJlZ2lzdFwiLFxuXHRcdFx0XHRcdFx0YW5pbWF0aW9uVHlwZTogXCJzbGlkZS1pbi1ib3R0b21cIixcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAobWUuY3VycmVudENvbW1lbnQgPT0gbnVsbCB8fCBtZS5jdXJyZW50Q29tbWVudCA9PSBcIlwiIHx8IG1lLmN1cnJlbnRDb21tZW50ID09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0dGl0bGU6IFwi6K+35aGr5YWl5oKo55qE6K+E6K66flwiLFxuXHRcdFx0XHRcdFx0bWFzazogdHJ1ZSxcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBcImJvdHRvbVwiXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAobWUuY3VycmVudENvbW1lbnQubGVuZ3RoID4gNTApIHtcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdHRpdGxlOiBcIuivhOiuuuWtl+aVsOmZkOWItjUw5Lul5YaF5ZmiflwiLFxuXHRcdFx0XHRcdFx0bWFzazogdHJ1ZSxcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBcImJvdHRvbVwiXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHRcdHZhciB1c2VySWQgPSBteVVzZXJJbmZvLmlkO1xuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHRcblx0XHRcdFx0dmFyIHBlbmRpbmdDb21tZW50T2JqZWN0ID0ge1xuXHRcdFx0XHRcdHZsb2dJZDogbWUudGhpc1Zsb2dJZCxcblx0XHRcdFx0XHR2bG9nZXJJZDogbWUudGhpc1Zsb2dlcklkLFxuXHRcdFx0XHRcdGZhdGhlckNvbW1lbnRJZDogbWUudGhpc0ZhdGhlckNvbW1lbnRJZCxcblx0XHRcdFx0XHRjb21tZW50VXNlcklkOiB1c2VySWQsXG5cdFx0XHRcdFx0Y29udGVudDogbWUuY3VycmVudENvbW1lbnQsXG5cdFx0XHRcdH07XG5cdFx0XHRcdFxuXHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdFx0XHRoZWFkZXI6IHtcblx0XHRcdFx0XHRcdGhlYWRlclVzZXJJZDogdXNlcklkLFxuXHRcdFx0XHRcdFx0aGVhZGVyVXNlclRva2VuOiBhcHAuZ2V0VXNlclNlc3Npb25Ub2tlbigpXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR1cmw6IHNlcnZlclVybCArIFwiL2NvbW1lbnQvY3JlYXRlXCIsXG5cdFx0XHRcdFx0ZGF0YTogcGVuZGluZ0NvbW1lbnRPYmplY3QsXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXN1bHQpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBuZXdDb21tZW50T2JqZWN0ID0gcmVzdWx0LmRhdGEuZGF0YTtcblx0XHRcdFx0XHRcdFx0bmV3Q29tbWVudE9iamVjdC5jb21tZW50SWQgPSBuZXdDb21tZW50T2JqZWN0LmlkO1xuXHRcdFx0XHRcdFx0XHRuZXdDb21tZW50T2JqZWN0LmNvbW1lbnRVc2VyTmlja25hbWUgPSBteVVzZXJJbmZvLm5pY2tuYW1lO1xuXHRcdFx0XHRcdFx0XHRuZXdDb21tZW50T2JqZWN0LmNvbW1lbnRVc2VyRmFjZSA9IG15VXNlckluZm8uZmFjZTtcblx0XHRcdFx0XHRcdFx0bmV3Q29tbWVudE9iamVjdC5pc0xpa2UgPSAwO1xuXHRcdFx0XHRcdFx0XHQvLyBuZXdDb21tZW50T2JqZWN0LmlzT3duZXIgPSAwO1xuXHRcdFx0XHRcdFx0XHQvLyBpZiAobWUudGhpc1Zsb2dlcklkID09IHVzZXJJZCkge1xuXHRcdFx0XHRcdFx0XHQvLyBcdG5ld0NvbW1lbnRPYmplY3QuaXNPd25lciA9IDE7XG5cdFx0XHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdG1lLmRvQ29tbWVudFBhZ2luZ0xpc3QoMSwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQvLyDor4Torrov5Zue5aSN5a6M5q+V5ZCO77yM5Zue5aSNdGhpc0ZhdGhlckNvbW1lbnRJZOS4uuKAnDDigJ1cblx0XHRcdFx0XHRcdFx0bWUudGhpc0ZhdGhlckNvbW1lbnRJZCA9IFwiMFwiO1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0Ly8g5oqK5paw6K+E6K665re75Yqg5Yiw56ys5LiA5Liq5L2N572u77yM5byx5LiA6Ie05oCn77yM5LiN6ZyA6KaB5LuO5pWw5o2u5bqT6YeM5YaN5Y675Y+WXG5cdFx0XHRcdFx0XHRcdG1lLmNvbW1lbnRMaXN0LnVuc2hpZnQobmV3Q29tbWVudE9iamVjdCk7XG5cdFx0XHRcdFx0XHRcdC8vIOa4heepuuaWh+acrOahhlxuXHRcdFx0XHRcdFx0XHRtZS5jdXJyZW50Q29tbWVudCA9IFwiXCI7XG5cdFx0XHRcdFx0XHRcdC8vIOmakOiXj+mUruebmFxuXHRcdFx0XHRcdFx0XHR1bmkuaGlkZUtleWJvYXJkKCk7XG5cdFx0XHRcdFx0XHRcdC8vIOW6lemDqOWPmOiJslxuXHRcdFx0XHRcdFx0XHRtZS5ub1R5cGluZ0NvbW1lbnQoKTtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdC8vIOaKiua7muWKqGxpc3TliLDnrKzkuIDkuKrkvY3nva5cblx0XHRcdFx0XHRcdFx0bWUuc2Nyb2xsVG9wID0gbWUuc2Nyb2xsVG9wICsgMTtcblx0XHRcdFx0XHRcdFx0bWUuJG5leHRUaWNrKCgpPT57XG5cdFx0XHRcdFx0XHRcdFx0bWUuc2Nyb2xsVG9wID0gMCAvL+i1i+WAvOS4ujDljbPku6Pooajov5Tlm57pobbpg6hcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzdWx0LmRhdGEubXNnLFxuXHRcdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRtZS5mcmVzaENvbW1lbnRDb3VudHMoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0XHQvLyDmiorotoXov4cxMDAw5oiWMTAwMDDnmoTmlbDlrZfosIPmlbTvvIzmr5TlpoIxLjNrLzYuOHdcblx0XHRcdGdldEdyYWNlTnVtYmVyKG51bSkge1xuXHRcdFx0XHRyZXR1cm4gZ2V0QXBwKCkuZ3JhY2VOdW1iZXIobnVtKTtcblx0XHRcdH0sXG5cdFx0XHQvLyDml7bpl7TmmL7npLog5Yia5YiaL3h45bCP5pe25YmNLy4uLlxuXHRcdFx0Z2V0R3JhY2VEYXRlQmVmb3JlTm93KGRhdGVUaW1lU3RyKSB7XG5cdFx0XHRcdHZhciBkYXRlID0gYXBwLmRhdGVGb3JtYXQoXCJZWVlZLW1tLWRkXCIsIG5ldyBEYXRlKGRhdGVUaW1lU3RyKSk7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRhdGUpO1xuXHRcdFx0XHRyZXR1cm4gZ2V0QXBwKCkuZ2V0RGF0ZUJlZm9yZU5vdyhkYXRlKTtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0LyoqXG5cdFx0XHQgKiDpgInmi6nlhoXlrrlcblx0XHRcdCAqL1xuXHRcdFx0c2VsZWN0KGl0ZW0sIGluZGV4KSB7XG5cdFx0XHRcdHRoaXMuJGVtaXQoJ3NlbGVjdCcsIHtcblx0XHRcdFx0XHRpdGVtLFxuXHRcdFx0XHRcdGluZGV4XG5cdFx0XHRcdH0pXG5cdFx0XHRcdHRoaXMuY2xvc2UoKVxuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIOWFs+mXreeql+WPo1xuXHRcdFx0ICovXG5cdFx0XHRjbG9zZSgpIHtcblx0XHRcdFx0aWYodGhpcy5iZWZvcmVDbG9zZSkgcmV0dXJuXG5cdFx0XHRcdHRoaXMucG9wdXAuY2xvc2UoKTtcblx0XHRcdFx0dW5pLnNob3dUYWJCYXIoe1xuXHRcdFx0XHRcdGFuaW1hdGlvbjogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdHRvdWNoc3RhcnRDb21tZW50KGluZGV4KSB7XG5cdFx0XHRcdC8vIHRoaXMuY29tbWVudFRvdWNoZWQgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLmFjdGl2ZUluZGV4ID0gaW5kZXg7XG5cdFx0XHR9LFxuXHRcdFx0dG91Y2hlbmRDb21tZW50KCkge1xuXHRcdFx0XHQvLyB0aGlzLmNvbW1lbnRUb3VjaGVkID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMuYWN0aXZlSW5kZXggPSAtMTtcblx0XHRcdH0sXG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///210\n");

/***/ }),
/* 211 */
/*!********************************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-popup/components/uni-popup/popup.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  data: function data() {\n    return {};\n  },\n  created: function created() {\n    this.popup = this.getParent();\n  },\n  methods: {\n    /**\n     * 获取父元素实例\n     */\n    getParent: function getParent() {\n      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'uniPopup';\n      var parent = this.$parent;\n      var parentName = parent.$options.name;\n      while (parentName !== name) {\n        parent = parent.$parent;\n        if (!parent) return false;\n        parentName = parent.$options.name;\n      }\n      return parent;\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXBvcHVwL2NvbXBvbmVudHMvdW5pLXBvcHVwL3BvcHVwLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJjcmVhdGVkIiwicG9wdXAiLCJnZXRQYXJlbnQiLCJtZXRob2RzIiwibmFtZSIsInBhcmVudCIsIiRwYXJlbnQiLCJwYXJlbnROYW1lIiwiJG9wdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7OztlQUNlO0VBQ2RBLElBQUksa0JBQUc7SUFDTixPQUFPLENBRVAsQ0FBQztFQUNGLENBQUM7RUFDREMsT0FBTyxxQkFBRTtJQUNSLElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUksQ0FBQ0MsU0FBUyxFQUFFO0VBQzlCLENBQUM7RUFDREMsT0FBTyxFQUFDO0lBQ1A7QUFDRjtBQUNBO0lBQ0VELFNBQVMsdUJBQW9CO01BQUEsSUFBbkJFLElBQUksdUVBQUcsVUFBVTtNQUMxQixJQUFJQyxNQUFNLEdBQUcsSUFBSSxDQUFDQyxPQUFPO01BQ3pCLElBQUlDLFVBQVUsR0FBR0YsTUFBTSxDQUFDRyxRQUFRLENBQUNKLElBQUk7TUFDckMsT0FBT0csVUFBVSxLQUFLSCxJQUFJLEVBQUU7UUFDM0JDLE1BQU0sR0FBR0EsTUFBTSxDQUFDQyxPQUFPO1FBQ3ZCLElBQUksQ0FBQ0QsTUFBTSxFQUFFLE9BQU8sS0FBSztRQUN6QkUsVUFBVSxHQUFHRixNQUFNLENBQUNHLFFBQVEsQ0FBQ0osSUFBSTtNQUNsQztNQUNBLE9BQU9DLE1BQU07SUFDZDtFQUNEO0FBQ0QsQ0FBQztBQUFBIiwiZmlsZSI6IjIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRcblx0XHR9XG5cdH0sXG5cdGNyZWF0ZWQoKXtcblx0XHR0aGlzLnBvcHVwID0gdGhpcy5nZXRQYXJlbnQoKVxuXHR9LFxuXHRtZXRob2RzOntcblx0XHQvKipcblx0XHQgKiDojrflj5bniLblhYPntKDlrp7kvotcblx0XHQgKi9cblx0XHRnZXRQYXJlbnQobmFtZSA9ICd1bmlQb3B1cCcpIHtcblx0XHRcdGxldCBwYXJlbnQgPSB0aGlzLiRwYXJlbnQ7XG5cdFx0XHRsZXQgcGFyZW50TmFtZSA9IHBhcmVudC4kb3B0aW9ucy5uYW1lO1xuXHRcdFx0d2hpbGUgKHBhcmVudE5hbWUgIT09IG5hbWUpIHtcblx0XHRcdFx0cGFyZW50ID0gcGFyZW50LiRwYXJlbnQ7XG5cdFx0XHRcdGlmICghcGFyZW50KSByZXR1cm4gZmFsc2Vcblx0XHRcdFx0cGFyZW50TmFtZSA9IHBhcmVudC4kb3B0aW9ucy5uYW1lO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHBhcmVudDtcblx0XHR9LFxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///211\n");

/***/ }),
/* 212 */
/*!*****************************************************************************************************************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue?vue&type=style&index=0&id=9da5e18a&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_style_index_0_id_9da5e18a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--11-oneOf-0-2!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup-comments.vue?vue&type=style&index=0&id=9da5e18a&lang=scss&scoped=true& */ 213);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_style_index_0_id_9da5e18a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_style_index_0_id_9da5e18a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_style_index_0_id_9da5e18a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_style_index_0_id_9da5e18a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_style_index_0_id_9da5e18a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 213 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue?vue&type=style&index=0&id=9da5e18a&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".uni-popup-share": {
    "": {
      "backgroundColor": [
        "#181717",
        0,
        0,
        13
      ],
      "borderTopLeftRadius": [
        "16rpx",
        0,
        0,
        13
      ],
      "borderTopRightRadius": [
        "16rpx",
        0,
        0,
        13
      ]
    }
  },
  ".uni-share-title": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        14
      ],
      "alignItems": [
        "center",
        0,
        0,
        14
      ],
      "justifyContent": [
        "space-between",
        0,
        0,
        14
      ],
      "height": [
        "40",
        0,
        0,
        14
      ]
    }
  },
  ".uni-share-title-text": {
    "": {
      "fontSize": [
        "12",
        0,
        0,
        15
      ],
      "color": [
        "#ffffff",
        0,
        0,
        15
      ],
      "fontWeight": [
        "500",
        0,
        0,
        15
      ]
    }
  },
  ".uni-share-content": {
    "": {
      "flexDirection": [
        "column",
        0,
        0,
        16
      ]
    }
  },
  ".uni-share-content-box": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        17
      ],
      "flexWrap": [
        "wrap",
        0,
        0,
        17
      ],
      "width": [
        "360",
        0,
        0,
        17
      ]
    }
  },
  ".uni-share-content-item": {
    "": {
      "width": [
        "90",
        0,
        0,
        18
      ],
      "flexDirection": [
        "column",
        0,
        0,
        18
      ],
      "justifyContent": [
        "center",
        0,
        0,
        18
      ],
      "paddingTop": [
        "10",
        0,
        0,
        18
      ],
      "paddingRight": [
        0,
        0,
        0,
        18
      ],
      "paddingBottom": [
        "10",
        0,
        0,
        18
      ],
      "paddingLeft": [
        0,
        0,
        0,
        18
      ],
      "alignItems": [
        "center",
        0,
        0,
        18
      ],
      "backgroundColor:active": [
        "#f5f5f5",
        0,
        0,
        19
      ]
    }
  },
  ".uni-share-image": {
    "": {
      "width": [
        "30",
        0,
        0,
        20
      ],
      "height": [
        "30",
        0,
        0,
        20
      ]
    }
  },
  ".uni-share-text": {
    "": {
      "marginTop": [
        "10",
        0,
        0,
        21
      ],
      "fontSize": [
        "14",
        0,
        0,
        21
      ],
      "color": [
        "#3B4144",
        0,
        0,
        21
      ]
    }
  },
  ".uni-share-button-box": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        22
      ],
      "paddingTop": [
        "10",
        0,
        0,
        22
      ],
      "paddingRight": [
        "15",
        0,
        0,
        22
      ],
      "paddingBottom": [
        "10",
        0,
        0,
        22
      ],
      "paddingLeft": [
        "15",
        0,
        0,
        22
      ]
    }
  },
  ".uni-share-button": {
    "": {
      "flex": [
        1,
        0,
        0,
        23
      ],
      "borderRadius": [
        "50",
        0,
        0,
        23
      ],
      "color": [
        "#666666",
        0,
        0,
        23
      ],
      "fontSize": [
        "16",
        0,
        0,
        23
      ],
      "borderRadius::after": [
        "50",
        0,
        0,
        24
      ]
    }
  },
  ".icon-close-left": {
    "": {
      "width": [
        "20rpx",
        0,
        0,
        25
      ],
      "height": [
        "20rpx",
        0,
        0,
        25
      ],
      "marginLeft": [
        "30rpx",
        0,
        0,
        25
      ],
      "opacity": [
        0,
        0,
        0,
        25
      ]
    }
  },
  ".icon-close-right": {
    "": {
      "width": [
        "22rpx",
        0,
        0,
        26
      ],
      "height": [
        "22rpx",
        0,
        0,
        26
      ],
      "marginRight": [
        "30rpx",
        0,
        0,
        26
      ]
    }
  },
  ".comment-wrapper": {
    "": {
      "paddingTop": [
        "10",
        0,
        0,
        27
      ],
      "paddingRight": [
        "10",
        0,
        0,
        27
      ],
      "paddingBottom": [
        "10",
        0,
        0,
        27
      ],
      "paddingLeft": [
        "10",
        0,
        0,
        27
      ],
      "display": [
        "flex",
        0,
        0,
        27
      ],
      "flexDirection": [
        "row",
        0,
        0,
        27
      ],
      "justifyContent": [
        "space-around",
        0,
        0,
        27
      ]
    }
  },
  ".commentWrapperBlack": {
    "": {
      "backgroundColor": [
        "#0e0d0d",
        0,
        0,
        28
      ]
    }
  },
  ".commentWrapperWhite": {
    "": {
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        29
      ]
    }
  },
  ".comment-box": {
    "": {
      "fontSize": [
        "15",
        0,
        0,
        30
      ],
      "height": [
        "40",
        0,
        0,
        30
      ],
      "borderRadius": [
        "20",
        0,
        0,
        30
      ],
      "paddingTop": [
        0,
        0,
        0,
        30
      ],
      "paddingRight": [
        "18",
        0,
        0,
        30
      ],
      "paddingBottom": [
        0,
        0,
        0,
        30
      ],
      "paddingLeft": [
        "18",
        0,
        0,
        30
      ]
    }
  },
  ".commentBoxBlack": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        31
      ],
      "backgroundColor": [
        "#151515",
        0,
        0,
        31
      ]
    }
  },
  ".commentBoxWhite": {
    "": {
      "color": [
        "#000000",
        0,
        0,
        32
      ],
      "backgroundColor": [
        "#f2f2f5",
        0,
        0,
        32
      ]
    }
  },
  ".comment-box-placeholder": {
    "": {
      "fontSize": [
        "15",
        0,
        0,
        33
      ]
    }
  },
  ".icon-comment": {
    "": {
      "width": [
        "30",
        0,
        0,
        34
      ],
      "height": [
        "30",
        0,
        0,
        34
      ]
    }
  },
  ".all-comments": {
    "": {
      "height": [
        "800rpx",
        0,
        0,
        35
      ]
    }
  },
  ".img-face": {
    "": {
      "width": [
        "80rpx",
        0,
        0,
        36
      ],
      "height": [
        "80rpx",
        0,
        0,
        36
      ],
      "borderRadius": [
        "100rpx",
        0,
        0,
        36
      ]
    }
  },
  ".like-or-not": {
    "": {
      "marginTop": [
        "16",
        0,
        0,
        37
      ],
      "width": [
        "50rpx",
        0,
        0,
        37
      ],
      "height": [
        "50rpx",
        0,
        0,
        37
      ]
    }
  },
  ".comments-wrapper": {
    "": {
      "display": [
        "flex",
        0,
        0,
        38
      ],
      "flexDirection": [
        "column",
        0,
        0,
        38
      ]
    }
  },
  ".comments-wrapper-sub-up": {
    "": {
      "display": [
        "flex",
        0,
        0,
        39
      ],
      "flexDirection": [
        "row",
        0,
        0,
        39
      ],
      "justifyContent": [
        "space-between",
        0,
        0,
        39
      ]
    }
  },
  ".comments-wrapper-sub-down": {
    "": {
      "display": [
        "flex",
        0,
        0,
        40
      ],
      "flexDirection": [
        "row",
        0,
        0,
        40
      ],
      "marginTop": [
        "2",
        0,
        0,
        40
      ]
    }
  },
  ".vlogger-wrapper": {
    "": {
      "display": [
        "flex",
        0,
        0,
        41
      ],
      "flexDirection": [
        "row",
        0,
        0,
        41
      ]
    }
  },
  ".tag-writer": {
    "": {
      "display": [
        "flex",
        0,
        0,
        42
      ],
      "flexDirection": [
        "column",
        0,
        0,
        42
      ],
      "justifyContent": [
        "center",
        0,
        0,
        42
      ],
      "backgroundColor": [
        "#f02a50",
        0,
        0,
        42
      ],
      "borderRadius": [
        "3",
        0,
        0,
        42
      ],
      "width": [
        "30",
        0,
        0,
        42
      ],
      "height": [
        "16",
        0,
        0,
        42
      ],
      "marginLeft": [
        "2",
        0,
        0,
        42
      ]
    }
  },
  ".writer-words": {
    "": {
      "fontSize": [
        "26rpx",
        0,
        0,
        43
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        43
      ],
      "textAlign": [
        "center",
        0,
        0,
        43
      ]
    }
  },
  ".single-comment-box": {
    "": {
      "backgroundColor": [
        "#181717",
        0,
        0,
        44
      ]
    }
  },
  ".single-comment-box-touched": {
    "": {
      "backgroundColor": [
        "#202020",
        0,
        0,
        45
      ]
    }
  },
  ".active": {
    "": {
      "backgroundColor": [
        "#202020",
        0,
        0,
        46
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 214 */
/*!*************************************************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_popup_share_vue_vue_type_template_id_0485c93f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-popup-share.vue?vue&type=template&id=0485c93f& */ 215);\n/* harmony import */ var _uni_popup_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-popup-share.vue?vue&type=script&lang=js& */ 217);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_popup_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_popup_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-popup-share.vue?vue&type=style&index=0&lang=css& */ 219).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-popup-share.vue?vue&type=style&index=0&lang=css& */ 219).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_popup_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_popup_share_vue_vue_type_template_id_0485c93f___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_popup_share_vue_vue_type_template_id_0485c93f___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"71db431c\",\n  false,\n  _uni_popup_share_vue_vue_type_template_id_0485c93f___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEg7QUFDNUg7QUFDbUU7QUFDTDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGlFQUF3RDtBQUM1RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsaUVBQXdEO0FBQ2pIOztBQUVBOztBQUVBO0FBQytLO0FBQy9LLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSwwRkFBTTtBQUNSLEVBQUUsbUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1wb3B1cC1zaGFyZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDQ4NWM5M2YmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktcG9wdXAtc2hhcmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktcG9wdXAtc2hhcmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdW5pLXBvcHVwLXNoYXJlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi91bmktcG9wdXAtc2hhcmUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiNzFkYjQzMWNcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pX21vZHVsZXMvdW5pLXBvcHVwL2NvbXBvbmVudHMvdW5pLXBvcHVwLXNoYXJlL3VuaS1wb3B1cC1zaGFyZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///214\n");

/***/ }),
/* 215 */
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue?vue&type=template&id=0485c93f& ***!
  \********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_template_id_0485c93f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup-share.vue?vue&type=template&id=0485c93f& */ 216);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_template_id_0485c93f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_template_id_0485c93f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_template_id_0485c93f___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_template_id_0485c93f___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 216 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue?vue&type=template&id=0485c93f& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticClass: ["page"] }, [
    _c("view", { staticClass: ["all-box"] }, [
      _c(
        "view",
        {
          staticClass: ["share-item"],
          on: {
            click: function ($event) {
              _vm.downloadVlog()
            },
          },
        },
        [
          _c(
            "view",
            {
              staticClass: ["icon-wrapper"],
              staticStyle: { alignSelf: "center" },
            },
            [
              _c("u-image", {
                staticClass: ["icon-image"],
                staticStyle: { alignSelf: "center" },
                attrs: { src: "/static/images/icon-download.png" },
              }),
            ],
            1
          ),
          _c(
            "u-text",
            {
              staticClass: ["icon-tag-text"],
              staticStyle: { alignSelf: "center" },
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v("保存到相册")]
          ),
        ]
      ),
      _c(
        "view",
        {
          staticClass: ["share-item"],
          on: {
            click: function ($event) {
              _vm.copyLink()
            },
          },
        },
        [
          _c(
            "view",
            {
              staticClass: ["icon-wrapper"],
              staticStyle: { alignSelf: "center" },
            },
            [
              _c("u-image", {
                staticClass: ["icon-image"],
                staticStyle: { alignSelf: "center" },
                attrs: { src: "/static/images/icon-copy.png" },
              }),
            ],
            1
          ),
          _c(
            "u-text",
            {
              staticClass: ["icon-tag-text"],
              staticStyle: { alignSelf: "center" },
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v("复制链接")]
          ),
        ]
      ),
      _c(
        "view",
        {
          staticClass: ["share-item"],
          on: {
            click: function ($event) {
              _vm.gotoQRCode()
            },
          },
        },
        [
          _c(
            "view",
            {
              staticClass: ["icon-wrapper"],
              staticStyle: { alignSelf: "center" },
            },
            [
              _c("u-image", {
                staticClass: ["icon-image"],
                staticStyle: { alignSelf: "center" },
                attrs: { src: "/static/images/icon-qrcode.png" },
              }),
            ],
            1
          ),
          _c(
            "u-text",
            {
              staticClass: ["icon-tag-text"],
              staticStyle: { alignSelf: "center" },
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v("二维码")]
          ),
        ]
      ),
      _vm.thisVlogerId == _vm.userId && _vm.isPrivate == 0
        ? _c(
            "view",
            {
              staticClass: ["share-item"],
              on: {
                click: function ($event) {
                  _vm.changeVlogToPrivate()
                },
              },
            },
            [
              _c(
                "view",
                {
                  staticClass: ["icon-wrapper"],
                  staticStyle: { alignSelf: "center" },
                },
                [
                  _c("u-image", {
                    staticClass: ["icon-image"],
                    staticStyle: { alignSelf: "center" },
                    attrs: { src: "/static/images/icon-private.png" },
                  }),
                ],
                1
              ),
              _c(
                "u-text",
                {
                  staticClass: ["icon-tag-text"],
                  staticStyle: { alignSelf: "center" },
                  appendAsTree: true,
                  attrs: { append: "tree" },
                },
                [_vm._v("转为私密")]
              ),
            ]
          )
        : _vm._e(),
      _vm.thisVlogerId == _vm.userId && _vm.isPrivate == 1
        ? _c(
            "view",
            {
              staticClass: ["share-item"],
              on: {
                click: function ($event) {
                  _vm.changeVlogToPublic()
                },
              },
            },
            [
              _c(
                "view",
                {
                  staticClass: ["icon-wrapper"],
                  staticStyle: { alignSelf: "center" },
                },
                [
                  _c("u-image", {
                    staticClass: ["icon-image"],
                    staticStyle: { alignSelf: "center" },
                    attrs: { src: "/static/images/icon-private.png" },
                  }),
                ],
                1
              ),
              _c(
                "u-text",
                {
                  staticClass: ["icon-tag-text"],
                  staticStyle: { alignSelf: "center" },
                  appendAsTree: true,
                  attrs: { append: "tree" },
                },
                [_vm._v("转为公开")]
              ),
            ]
          )
        : _vm._e(),
    ]),
    _c("view", { staticStyle: { padding: "0 20rpx" } }, [
      _c(
        "view",
        {
          class: {
            "btn-cancel": !_vm.cancelTouched,
            "btn-cancel-touched": _vm.cancelTouched,
          },
          staticStyle: {
            height: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderWidth: "1rpx",
            borderRadius: "10px",
          },
          on: {
            click: _vm.close,
            touchstart: _vm.touchstartCancel,
            touchend: _vm.touchendCancel,
          },
        },
        [
          _c(
            "u-text",
            {
              staticStyle: {
                color: "#FFFFFF",
                fontSize: "16px",
                alignSelf: "center",
                alignSelf: "center",
              },
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v("取消")]
          ),
        ]
      ),
    ]),
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 217 */
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup-share.vue?vue&type=script&lang=js& */ 218);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtkLENBQWdCLG1kQUFHLEVBQUMiLCJmaWxlIjoiMjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1wb3B1cC1zaGFyZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktcG9wdXAtc2hhcmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///217\n");

/***/ }),
/* 218 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 150);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _popup = _interopRequireDefault(__webpack_require__(/*! ../uni-popup/popup.js */ 211));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar app = getApp();\nvar _default = {\n  name: 'UniPopupShare',\n  mixins: [_popup.default],\n  emits: ['select'],\n  props: {\n    title: {\n      type: String,\n      default: ''\n    },\n    beforeClose: {\n      type: Boolean,\n      default: false\n    },\n    thisVlogerId: {\n      type: String,\n      default: ''\n    },\n    thisVlogId: {\n      type: String,\n      default: ''\n    },\n    vlogUrl: {\n      type: String,\n      default: ''\n    },\n    isPrivate: {\n      type: Number,\n      default: 0\n    }\n  },\n  data: function data() {\n    return {\n      userId: \"\",\n      cancelTouched: false\n    };\n  },\n  created: function created() {\n    var userId = getApp().getUserInfoSession().id;\n    this.userId = userId;\n  },\n  methods: {\n    /**\n     * 选择内容\n     */\n    select: function select(item, index) {\n      this.$emit('select', {\n        item: item,\n        index: index\n      });\n      this.close();\n    },\n    /**\n     * 关闭窗口\n     */\n    close: function close() {\n      if (this.beforeClose) return;\n      this.popup.close();\n      uni.showTabBar({\n        animation: true\n      });\n    },\n    touchstartCancel: function touchstartCancel() {\n      this.cancelTouched = true;\n    },\n    touchendCancel: function touchendCancel() {\n      this.cancelTouched = false;\n    },\n    downloadVlog: function downloadVlog() {\n      __f__(\"log\", \"downloadVlog...thisVlogId = \" + this.vlogUrl, \" at uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue:178\");\n      uni.showLoading();\n      uni.downloadFile({\n        url: this.vlogUrl,\n        success: function success(res) {\n          if (res.statusCode === 200) {\n            __f__(\"log\", '下载成功', \" at uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue:184\");\n            uni.saveVideoToPhotosAlbum({\n              filePath: res.tempFilePath,\n              success: function success() {\n                __f__(\"log\", 'save success', \" at uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue:188\");\n                uni.hideLoading();\n                uni.showToast({\n                  title: \"保存成功~！\",\n                  duration: 5000\n                });\n              }\n            });\n          }\n        }\n      });\n    },\n    copyLink: function copyLink() {\n      uni.setClipboardData({\n        data: this.vlogUrl,\n        success: function success() {\n          uni.showToast({\n            //提示\n            title: '复制成功'\n          });\n        }\n      });\n    },\n    gotoQRCode: function gotoQRCode() {\n      uni.navigateTo({\n        url: \"/pages/qrcode/qrcode?vlogId=\" + this.thisVlogId\n      });\n    },\n    changeVlogToPublic: function changeVlogToPublic() {\n      var vlogId = this.thisVlogId;\n      var me = this;\n      var userId = getApp().getUserInfoSession().id;\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"POST\",\n        header: {\n          headerUserId: userId,\n          headerUserToken: app.getUserSessionToken()\n        },\n        url: serverUrl + \"/vlog/changeToPublic?userId=\" + userId + \"&vlogId=\" + vlogId,\n        success: function success(result) {\n          __f__(\"log\", result, \" at uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue:233\");\n          if (result.data.status == 200) {\n            uni.showToast({\n              title: \"设置完毕~\"\n            });\n          }\n        }\n      });\n    },\n    changeVlogToPrivate: function changeVlogToPrivate() {\n      var vlogId = this.thisVlogId;\n      var me = this;\n      var userId = getApp().getUserInfoSession().id;\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"POST\",\n        header: {\n          headerUserId: userId,\n          headerUserToken: app.getUserSessionToken()\n        },\n        url: serverUrl + \"/vlog/changeToPrivate?userId=\" + userId + \"&vlogId=\" + vlogId,\n        success: function success(result) {\n          __f__(\"log\", result, \" at uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue:257\");\n          if (result.data.status == 200) {\n            uni.showToast({\n              title: \"设置完毕~\"\n            });\n          }\n        }\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 123)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXBvcHVwL2NvbXBvbmVudHMvdW5pLXBvcHVwLXNoYXJlL3VuaS1wb3B1cC1zaGFyZS52dWUiXSwibmFtZXMiOlsibmFtZSIsIm1peGlucyIsImVtaXRzIiwicHJvcHMiLCJ0aXRsZSIsInR5cGUiLCJkZWZhdWx0IiwiYmVmb3JlQ2xvc2UiLCJ0aGlzVmxvZ2VySWQiLCJ0aGlzVmxvZ0lkIiwidmxvZ1VybCIsImlzUHJpdmF0ZSIsImRhdGEiLCJ1c2VySWQiLCJjYW5jZWxUb3VjaGVkIiwiY3JlYXRlZCIsIm1ldGhvZHMiLCJzZWxlY3QiLCJpdGVtIiwiaW5kZXgiLCJjbG9zZSIsInVuaSIsImFuaW1hdGlvbiIsInRvdWNoc3RhcnRDYW5jZWwiLCJ0b3VjaGVuZENhbmNlbCIsImRvd25sb2FkVmxvZyIsInVybCIsInN1Y2Nlc3MiLCJmaWxlUGF0aCIsImR1cmF0aW9uIiwiY29weUxpbmsiLCJnb3RvUVJDb2RlIiwiY2hhbmdlVmxvZ1RvUHVibGljIiwibWV0aG9kIiwiaGVhZGVyIiwiaGVhZGVyVXNlcklkIiwiaGVhZGVyVXNlclRva2VuIiwiY2hhbmdlVmxvZ1RvUHJpdmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQXlHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFBQSxlQUVBO0VBQ0FBO0VBQ0FDO0VBQ0FDO0VBQ0FDO0lBQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7SUFDQUM7TUFDQUY7TUFDQUM7SUFDQTtJQUNBRTtNQUNBSDtNQUNBQztJQUNBO0lBQ0FHO01BQ0FKO01BQ0FDO0lBQ0E7SUFDQUk7TUFDQUw7TUFDQUM7SUFDQTtJQUNBSztNQUNBTjtNQUNBQztJQUNBO0VBQ0E7RUFDQU07SUFDQTtNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQTtBQUNBO0FBQ0E7SUFDQUM7TUFDQTtRQUNBQztRQUNBQztNQUNBO01BQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBQztNQUNBO01BQ0E7TUFDQUM7UUFDQUM7TUFDQTtJQUNBO0lBRUFDO01BQ0E7SUFDQTtJQUVBQztNQUNBO0lBQ0E7SUFFQUM7TUFDQTtNQUNBSjtNQUNBQTtRQUNBSztRQUNBQztVQUNBO1lBQ0E7WUFDQU47Y0FDQU87Y0FDQUQ7Z0JBQ0E7Z0JBQ0FOO2dCQUNBQTtrQkFDQWpCO2tCQUNBeUI7Z0JBQ0E7Y0FDQTtZQUNBO1VBQ0E7UUFDQTtNQUNBO0lBRUE7SUFFQUM7TUFDQVQ7UUFDQVQ7UUFDQWU7VUFDQU47WUFBQTtZQUNBakI7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUVBMkI7TUFDQVY7UUFDQUs7TUFDQTtJQUNBO0lBR0FNO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQVg7UUFDQVk7UUFDQUM7VUFDQUM7VUFDQUM7UUFDQTtRQUNBVjtRQUNBQztVQUNBO1VBRUE7WUFDQU47Y0FDQWpCO1lBQ0E7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUVBaUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBaEI7UUFDQVk7UUFDQUM7VUFDQUM7VUFDQUM7UUFDQTtRQUNBVjtRQUNBQztVQUNBO1VBRUE7WUFDQU47Y0FDQWpCO1lBQ0E7VUFDQTtRQUNBO01BQ0E7SUFFQTtFQUNBO0FBQ0E7QUFBQSwyQiIsImZpbGUiOiIyMTguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c3R5bGU+XG4ucGFnZSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG5cdG9wYWNpdHk6IDAuOTtcbn1cblxuLmJ0bi1jYW5jZWwge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFlO1xuXHRib3JkZXItY29sb3I6ICMzYTNhM2Q7XG59XG4uYnRuLWNhbmNlbC10b3VjaGVkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzUxNTE1Njtcblx0Ym9yZGVyLWNvbG9yOiAjMmIyYjJmO1xufVxuLmFsbC1ib3gge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblx0aGVpZ2h0OiAyODBycHg7XG59XG4uc2hhcmUtaXRlbSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdG1hcmdpbi10b3A6IDYwcnB4O1xufVxuLmljb24td3JhcHBlciB7XG5cdHdpZHRoOiAxMjBycHg7XG5cdGhlaWdodDogMTIwcnB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM3O1xuXHRib3JkZXItcmFkaXVzOiAxMDBweDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdG9wYWNpdHk6IDAuODtcbn1cbi5pY29uLWltYWdlIHtcblx0d2lkdGg6IDYwcnB4O1xuXHRoZWlnaHQ6IDYwcnB4O1xufVxuLmljb24tdGFnLXRleHQge1xuXHRjb2xvcjogI0ZGRkZGRjtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRtYXJnaW4tdG9wOiAxMHJweDtcbn1cbjwvc3R5bGU+XG5cbjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJwYWdlXCI+XG5cdFx0XG5cdFx0PHZpZXcgY2xhc3M9XCJhbGwtYm94XCI+XG5cdFx0XHQ8dmlldyBjbGFzcz1cInNoYXJlLWl0ZW1cIiBAY2xpY2s9XCJkb3dubG9hZFZsb2coKVwiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb24td3JhcHBlclwiIHN0eWxlPVwiYWxpZ24tc2VsZjogY2VudGVyO1wiPlxuXHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImljb24taW1hZ2VcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLWRvd25sb2FkLnBuZ1wiIHN0eWxlPVwiYWxpZ24tc2VsZjogY2VudGVyO1wiPjwvaW1hZ2U+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uLXRhZy10ZXh0XCIgc3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXI7XCI+5L+d5a2Y5Yiw55u45YaMPC90ZXh0PlxuXHRcdFx0PC92aWV3PlxuXHRcdFx0XG5cdFx0XHQ8dmlldyBjbGFzcz1cInNoYXJlLWl0ZW1cIiBAY2xpY2s9XCJjb3B5TGluaygpXCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvbi13cmFwcGVyXCIgc3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXI7XCI+XG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiaWNvbi1pbWFnZVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tY29weS5wbmdcIiBzdHlsZT1cImFsaWduLXNlbGY6IGNlbnRlcjtcIj48L2ltYWdlPlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbi10YWctdGV4dFwiIHN0eWxlPVwiYWxpZ24tc2VsZjogY2VudGVyO1wiPuWkjeWItumTvuaOpTwvdGV4dD5cblx0XHRcdDwvdmlldz5cblx0XHRcdFxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzaGFyZS1pdGVtXCIgQGNsaWNrPVwiZ290b1FSQ29kZSgpXCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvbi13cmFwcGVyXCIgc3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXI7XCI+XG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiaWNvbi1pbWFnZVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tcXJjb2RlLnBuZ1wiIHN0eWxlPVwiYWxpZ24tc2VsZjogY2VudGVyO1wiPjwvaW1hZ2U+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uLXRhZy10ZXh0XCIgc3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXI7XCI+5LqM57u056CBPC90ZXh0PlxuXHRcdFx0PC92aWV3PlxuXHRcdFx0XG5cdFx0XHQ8IS0tIOWIpOaWreWPquacieaIkeiHquW3seaJjeiDveaYvuekuui/meS4quaMiemSriAtLT5cblx0XHRcdDx2aWV3IHYtaWY9XCIodGhpc1Zsb2dlcklkID09IHVzZXJJZCkgJiYgKGlzUHJpdmF0ZSA9PSAwKVwiIGNsYXNzPVwic2hhcmUtaXRlbVwiICBAY2xpY2s9XCJjaGFuZ2VWbG9nVG9Qcml2YXRlKClcIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uLXdyYXBwZXJcIiBzdHlsZT1cImFsaWduLXNlbGY6IGNlbnRlcjtcIj5cblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJpY29uLWltYWdlXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi1wcml2YXRlLnBuZ1wiIHN0eWxlPVwiYWxpZ24tc2VsZjogY2VudGVyO1wiPjwvaW1hZ2U+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uLXRhZy10ZXh0XCIgc3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXI7XCI+6L2s5Li656eB5a+GPC90ZXh0PlxuXHRcdFx0PC92aWV3PlxuXHRcdFx0PHZpZXcgdi1pZj1cIih0aGlzVmxvZ2VySWQgPT0gdXNlcklkKSAmJiAoaXNQcml2YXRlID09IDEpXCIgY2xhc3M9XCJzaGFyZS1pdGVtXCIgIEBjbGljaz1cImNoYW5nZVZsb2dUb1B1YmxpYygpXCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvbi13cmFwcGVyXCIgc3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXI7XCI+XG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiaWNvbi1pbWFnZVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tcHJpdmF0ZS5wbmdcIiBzdHlsZT1cImFsaWduLXNlbGY6IGNlbnRlcjtcIj48L2ltYWdlPlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbi10YWctdGV4dFwiIHN0eWxlPVwiYWxpZ24tc2VsZjogY2VudGVyO1wiPui9rOS4uuWFrOW8gDwvdGV4dD5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cblx0XHQ8dmlldyBjbGFzcz1cIlwiIHN0eWxlPVwicGFkZGluZzogMCAyMHJweDtcIj5cblx0XHRcdDwhLS0gOmNsYXNzPVwieydidG4tcHJlcGxheSc6IXByZXBsYXlUb3VjaGVkLCAnYnRuLXByZXBsYXktdG91Y2hlZCc6IHByZXBsYXlUb3VjaGVkfVwiXG5cdFx0XHRAY2xpY2s9XCJwcmV2aWV3XCJcblx0XHRcdEB0b3VjaHN0YXJ0PVwidG91Y2hzdGFydFByZXBsYXlcIiBcblx0XHRcdEB0b3VjaGVuZD1cInRvdWNoZW5kUHJlcGxheVwiIC0tPlxuXHRcdFx0XG5cdFx0XHQ8dmlldyA6Y2xhc3M9XCJ7J2J0bi1jYW5jZWwnOiFjYW5jZWxUb3VjaGVkLCAnYnRuLWNhbmNlbC10b3VjaGVkJzogY2FuY2VsVG91Y2hlZH1cIlxuXHRcdFx0XHRAY2xpY2s9XCJjbG9zZVwiIFxuXHRcdFx0XHRAdG91Y2hzdGFydD1cInRvdWNoc3RhcnRDYW5jZWxcIlxuXHRcdFx0XHRAdG91Y2hlbmQ9XCJ0b3VjaGVuZENhbmNlbFwiIFxuXHRcdFx0XHRzdHlsZT1cImhlaWdodDogNTBweDtkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47anVzdGlmeS1jb250ZW50OiBjZW50ZXI7Ym9yZGVyLXdpZHRoOiAxcnB4O2JvcmRlci1yYWRpdXM6IDEwcHg7XCI+XG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiXCIgc3R5bGU9XCJjb2xvcjogI0ZGRkZGRjtmb250LXNpemU6IDE2cHg7YWxpZ24tc2VsZjogY2VudGVyO2FsaWduLXNlbGY6IGNlbnRlcjtcIj7lj5bmtog8L3RleHQ+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC92aWV3PlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHR2YXIgYXBwID0gZ2V0QXBwKCk7XG5cdGltcG9ydCBwb3B1cCBmcm9tICcuLi91bmktcG9wdXAvcG9wdXAuanMnXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAnVW5pUG9wdXBTaGFyZScsXG5cdFx0bWl4aW5zOltwb3B1cF0sXG5cdFx0ZW1pdHM6WydzZWxlY3QnXSxcblx0XHRwcm9wczoge1xuXHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xuXHRcdFx0fSxcblx0XHRcdGJlZm9yZUNsb3NlOiB7XG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0dGhpc1Zsb2dlcklkOiB7XG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogJydcblx0XHRcdH0sXG5cdFx0XHR0aGlzVmxvZ0lkOiB7XG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogJydcblx0XHRcdH0sXG5cdFx0XHR2bG9nVXJsOiB7XG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogJydcblx0XHRcdH0sXG5cdFx0XHRpc1ByaXZhdGU6IHtcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxuXHRcdFx0XHRkZWZhdWx0OiAwXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dXNlcklkOiBcIlwiLFxuXHRcdFx0XHRjYW5jZWxUb3VjaGVkOiBmYWxzZVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y3JlYXRlZCgpIHtcblx0XHRcdHZhciB1c2VySWQgPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKS5pZDtcblx0XHRcdHRoaXMudXNlcklkID0gdXNlcklkO1xuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiDpgInmi6nlhoXlrrlcblx0XHRcdCAqL1xuXHRcdFx0c2VsZWN0KGl0ZW0sIGluZGV4KSB7XG5cdFx0XHRcdHRoaXMuJGVtaXQoJ3NlbGVjdCcsIHtcblx0XHRcdFx0XHRpdGVtLFxuXHRcdFx0XHRcdGluZGV4XG5cdFx0XHRcdH0pXG5cdFx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIOWFs+mXreeql+WPo1xuXHRcdFx0ICovXG5cdFx0XHRjbG9zZSgpIHtcblx0XHRcdFx0aWYodGhpcy5iZWZvcmVDbG9zZSkgcmV0dXJuXG5cdFx0XHRcdHRoaXMucG9wdXAuY2xvc2UoKTtcblx0XHRcdFx0dW5pLnNob3dUYWJCYXIoe1xuXHRcdFx0XHRcdGFuaW1hdGlvbjogdHJ1ZVxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0dG91Y2hzdGFydENhbmNlbCgpIHtcblx0XHRcdFx0dGhpcy5jYW5jZWxUb3VjaGVkID0gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdHRvdWNoZW5kQ2FuY2VsKCkge1xuXHRcdFx0XHR0aGlzLmNhbmNlbFRvdWNoZWQgPSBmYWxzZTtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdGRvd25sb2FkVmxvZygpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJkb3dubG9hZFZsb2cuLi50aGlzVmxvZ0lkID0gXCIgKyB0aGlzLnZsb2dVcmwpO1xuXHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoKTtcblx0XHRcdFx0dW5pLmRvd25sb2FkRmlsZSh7XG5cdFx0XHRcdCAgICB1cmw6IHRoaXMudmxvZ1VybCxcblx0XHRcdFx0ICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcblx0XHRcdFx0ICAgICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT09IDIwMCkge1xuXHRcdFx0XHQgICAgICAgICAgICBjb25zb2xlLmxvZygn5LiL6L295oiQ5YqfJyk7XG5cdFx0XHRcdFx0XHRcdHVuaS5zYXZlVmlkZW9Ub1Bob3Rvc0FsYnVtKHtcblx0XHRcdFx0XHRcdFx0XHRmaWxlUGF0aDogcmVzLnRlbXBGaWxlUGF0aCxcblx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnc2F2ZSBzdWNjZXNzJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcblx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogXCLkv53lrZjmiJDlip9+77yBXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA1MDAwXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdCAgICAgICAgfVxuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRjb3B5TGluaygpIHtcblx0XHRcdFx0dW5pLnNldENsaXBib2FyZERhdGEoe1xuXHRcdFx0XHRcdGRhdGE6IHRoaXMudmxvZ1VybCxcblx0XHRcdFx0XHRzdWNjZXNzOigpPT57XG5cdFx0XHRcdFx0ICB1bmkuc2hvd1RvYXN0KHsvL+aPkOekulxuXHRcdFx0XHRcdFx0dGl0bGU6J+WkjeWItuaIkOWKnydcblx0XHRcdFx0XHQgIH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdGdvdG9RUkNvZGUoKSB7XG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHR1cmw6IFwiL3BhZ2VzL3FyY29kZS9xcmNvZGU/dmxvZ0lkPVwiICsgdGhpcy50aGlzVmxvZ0lkXG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdGNoYW5nZVZsb2dUb1B1YmxpYygpIHtcblx0XHRcdFx0dmFyIHZsb2dJZCA9IHRoaXMudGhpc1Zsb2dJZDtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHVzZXJJZCA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpLmlkO1xuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdFx0XHRoZWFkZXI6IHtcblx0XHRcdFx0XHRcdGhlYWRlclVzZXJJZDogdXNlcklkLFxuXHRcdFx0XHRcdFx0aGVhZGVyVXNlclRva2VuOiBhcHAuZ2V0VXNlclNlc3Npb25Ub2tlbigpXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR1cmw6IHNlcnZlclVybCArIFwiL3Zsb2cvY2hhbmdlVG9QdWJsaWM/dXNlcklkPVwiICsgdXNlcklkICsgXCImdmxvZ0lkPVwiICsgdmxvZ0lkLFxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0LmRhdGEuc3RhdHVzID09IDIwMCkge1xuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogXCLorr7nva7lrozmr5V+XCJcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Y2hhbmdlVmxvZ1RvUHJpdmF0ZSgpIHtcblx0XHRcdFx0dmFyIHZsb2dJZCA9IHRoaXMudGhpc1Zsb2dJZDtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHVzZXJJZCA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpLmlkO1xuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdFx0XHRoZWFkZXI6IHtcblx0XHRcdFx0XHRcdGhlYWRlclVzZXJJZDogdXNlcklkLFxuXHRcdFx0XHRcdFx0aGVhZGVyVXNlclRva2VuOiBhcHAuZ2V0VXNlclNlc3Npb25Ub2tlbigpXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR1cmw6IHNlcnZlclVybCArIFwiL3Zsb2cvY2hhbmdlVG9Qcml2YXRlP3VzZXJJZD1cIiArIHVzZXJJZCArIFwiJnZsb2dJZD1cIiArIHZsb2dJZCxcblx0XHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi6K6+572u5a6M5q+VflwiXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0XG5cdFx0XHR9LFxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///218\n");

/***/ }),
/* 219 */
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup-share.vue?vue&type=style&index=0&lang=css& */ 220);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 220 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ASUS/Desktop/MyLive-Dev/uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".page": {
    "": {
      "backgroundColor": [
        "#000000",
        0,
        0,
        0
      ],
      "opacity": [
        0.9,
        0,
        0,
        0
      ]
    }
  },
  ".btn-cancel": {
    "": {
      "backgroundColor": [
        "#1d1d1e",
        0,
        0,
        1
      ],
      "borderColor": [
        "#3a3a3d",
        0,
        0,
        1
      ]
    }
  },
  ".btn-cancel-touched": {
    "": {
      "backgroundColor": [
        "#515156",
        0,
        0,
        2
      ],
      "borderColor": [
        "#2b2b2f",
        0,
        0,
        2
      ]
    }
  },
  ".all-box": {
    "": {
      "display": [
        "flex",
        0,
        0,
        3
      ],
      "flexDirection": [
        "row",
        0,
        0,
        3
      ],
      "justifyContent": [
        "space-around",
        0,
        0,
        3
      ],
      "height": [
        "280rpx",
        0,
        0,
        3
      ]
    }
  },
  ".share-item": {
    "": {
      "display": [
        "flex",
        0,
        0,
        4
      ],
      "flexDirection": [
        "column",
        0,
        0,
        4
      ],
      "marginTop": [
        "60rpx",
        0,
        0,
        4
      ]
    }
  },
  ".icon-wrapper": {
    "": {
      "width": [
        "120rpx",
        0,
        0,
        5
      ],
      "height": [
        "120rpx",
        0,
        0,
        5
      ],
      "backgroundColor": [
        "#343437",
        0,
        0,
        5
      ],
      "borderRadius": [
        "100",
        0,
        0,
        5
      ],
      "display": [
        "flex",
        0,
        0,
        5
      ],
      "flexDirection": [
        "row",
        0,
        0,
        5
      ],
      "justifyContent": [
        "center",
        0,
        0,
        5
      ],
      "opacity": [
        0.8,
        0,
        0,
        5
      ]
    }
  },
  ".icon-image": {
    "": {
      "width": [
        "60rpx",
        0,
        0,
        6
      ],
      "height": [
        "60rpx",
        0,
        0,
        6
      ]
    }
  },
  ".icon-tag-text": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        7
      ],
      "fontSize": [
        "14",
        0,
        0,
        7
      ],
      "marginTop": [
        "10rpx",
        0,
        0,
        7
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */
/*!*********************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/index/index.nvue?mpType=page */ 236);\n\n        \n        \n        \n        \n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/index/index'\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBOEQ7QUFDOUQsUUFBUSwyRUFBRztBQUNYLFFBQVEsMkVBQUc7QUFDWCxRQUFRLDJFQUFHO0FBQ1gsZ0JBQWdCLDJFQUFHIiwiZmlsZSI6IjIzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgJ3VuaS1wb2x5ZmlsbCdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL2luZGV4L2luZGV4Lm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2luZGV4L2luZGV4J1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///235\n");

/***/ }),
/* 236 */
/*!***************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/pages/index/index.nvue?mpType=page ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.nvue?vue&type=template&id=7b909402&scoped=true&mpType=page */ 237);\n/* harmony import */ var _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.nvue?vue&type=script&lang=js&mpType=page */ 239);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&id=7b909402&scoped=true&lang=css&mpType=page */ 255).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&id=7b909402&scoped=true&lang=css&mpType=page */ 255).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"7b909402\",\n  \"d8176b8e\",\n  false,\n  _index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/index/index.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEk7QUFDMUk7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDJGQUFrRjtBQUN0SSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMkZBQWtGO0FBQzNJOztBQUVBOztBQUVBO0FBQ3lLO0FBQ3pLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSx3R0FBTTtBQUNSLEVBQUUsaUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyMzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2I5MDk0MDImc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiOTA5NDAyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YjkwOTQwMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjdiOTA5NDAyXCIsXG4gIFwiZDgxNzZiOGVcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///236\n");

/***/ }),
/* 237 */
/*!*********************************************************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/pages/index/index.nvue?vue&type=template&id=7b909402&scoped=true&mpType=page ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=template&id=7b909402&scoped=true&mpType=page */ 238);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 238 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ASUS/Desktop/MyLive-Dev/pages/index/index.nvue?vue&type=template&id=7b909402&scoped=true&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true",
      },
    },
    [
      _c(
        "view",
        { staticClass: ["page"] },
        [
          _c(
            "swiper",
            {
              style: { height: _vm.screenHeight + "px" },
              attrs: { current: _vm.curIndex },
              on: { change: _vm.changeTopTab },
            },
            [
              _c("swiper-item", [
                _c(
                  "view",
                  {
                    staticClass: ["near-by"],
                    style: { height: _vm.screenHeight + "px" },
                  },
                  [
                    _c("u-image", {
                      staticClass: ["img"],
                      attrs: { src: "/static/images/ybjc.png" },
                    }),
                  ],
                  1
                ),
              ]),
              _c(
                "swiper-item",
                [
                  _vm.myUserInfo == null
                    ? _c(
                        "view",
                        {
                          staticClass: ["my-follow"],
                          style: { height: _vm.screenHeight + "px" },
                        },
                        [
                          _c(
                            "u-text",
                            {
                              staticClass: ["warn-info"],
                              appendAsTree: true,
                              attrs: { append: "tree" },
                            },
                            [_vm._v("请登录后查看！")]
                          ),
                        ]
                      )
                    : _vm._e(),
                  _c("video-follow-comp", {
                    ref: "videoFollowComp",
                    attrs: {
                      screenHeight: _vm.screenHeight,
                      playFollowStatus: _vm.playFollowStatus,
                      videoList: _vm.videoList,
                      refreshList: _vm.refreshList,
                      pagingList: _vm.pagingList,
                    },
                    on: {
                      showLoading: _vm.showLoading,
                      hideLoading: _vm.hideLoading,
                      letFollowVideoPause: _vm.letFollowVideoPause,
                      displayVideoPaging: _vm.displayVideoPaging,
                    },
                  }),
                ],
                1
              ),
              _c(
                "swiper-item",
                [
                  _c("video-comp", {
                    ref: "videoComp",
                    attrs: {
                      screenHeight: _vm.screenHeight,
                      playStatus: _vm.playStatus,
                      videoList: _vm.videoList,
                      refreshList: _vm.refreshList,
                      pagingList: _vm.pagingList,
                    },
                    on: {
                      showLoading: _vm.showLoading,
                      hideLoading: _vm.hideLoading,
                      displayVideoPaging: _vm.displayVideoPaging,
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          !_vm.isLoading
            ? _c(
                "view",
                {
                  staticClass: ["header"],
                  style: { marginTop: _vm.statusBarHeight + "px" },
                },
                [
                  _c("u-text", {
                    staticClass: ["header-left"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  }),
                  _c("view", { staticClass: ["header-center"] }, [
                    _c(
                      "view",
                      {
                        staticClass: ["header-item"],
                        on: {
                          click: function ($event) {
                            _vm.tapFollow(0)
                          },
                        },
                      },
                      [
                        _c(
                          "u-text",
                          {
                            staticClass: ["header-item-title"],
                            staticStyle: { color: "#acacac" },
                            appendAsTree: true,
                            attrs: { append: "tree" },
                          },
                          [_vm._v("保眼操")]
                        ),
                        _c("view", {
                          staticClass: ["header-item-line"],
                          class: { "activate-line": _vm.curIndex === 0 },
                        }),
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticClass: ["header-item"],
                        on: {
                          click: function ($event) {
                            _vm.tapFollow(1)
                          },
                        },
                      },
                      [
                        _c(
                          "u-text",
                          {
                            staticClass: ["header-item-title"],
                            staticStyle: { color: "#acacac" },
                            appendAsTree: true,
                            attrs: { append: "tree" },
                          },
                          [_vm._v("关注")]
                        ),
                        _c("view", {
                          staticClass: ["header-item-line"],
                          class: { "activate-line": _vm.curIndex === 1 },
                        }),
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticClass: ["header-item"],
                        on: {
                          click: function ($event) {
                            _vm.tapFollow(2)
                          },
                        },
                      },
                      [
                        _c(
                          "u-text",
                          {
                            staticClass: ["header-item-title"],
                            staticStyle: { color: "#acacac" },
                            appendAsTree: true,
                            attrs: { append: "tree" },
                          },
                          [_vm._v("推荐")]
                        ),
                        _c("view", {
                          staticClass: ["header-item-line"],
                          class: { "activate-line": _vm.curIndex === 2 },
                        }),
                      ]
                    ),
                  ]),
                  _c("u-image", {
                    staticClass: ["header-right-search", "normal-img"],
                    attrs: { src: "../../static/images/shousuo.png" },
                    on: { click: _vm.goSearch },
                  }),
                ],
                1
              )
            : _vm._e(),
          _vm.isLoading
            ? _c(
                "view",
                {
                  staticClass: ["header"],
                  style: { marginTop: _vm.statusBarHeight + "px" },
                },
                [
                  _c("u-text", {
                    staticClass: ["header-left"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  }),
                  _c("view", { staticClass: ["header-center"] }, [
                    _c("view", { staticClass: ["header-item"] }, [
                      _c(
                        "u-text",
                        {
                          staticClass: ["header-refresh-title"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v("下拉刷新视频")]
                      ),
                    ]),
                  ]),
                  _c("u-image", {
                    staticClass: ["header-right-search", "normal-img"],
                    attrs: { src: "../../static/images/loading.gif" },
                  }),
                ],
                1
              )
            : _vm._e(),
        ],
        1
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 239 */
/*!***************************************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=script&lang=js&mpType=page */ 240);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtjLENBQWdCLHFkQUFHLEVBQUMiLCJmaWxlIjoiMjM5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///239\n");

/***/ }),
/* 240 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ASUS/Desktop/MyLive-Dev/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 150);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _videoComp = _interopRequireDefault(__webpack_require__(/*! @/components/videoComp.vue */ 241));\nvar _videoFollowComp = _interopRequireDefault(__webpack_require__(/*! @/components/videoFollowComp.vue */ 248));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar system = uni.getSystemInfoSync();\nvar app = getApp();\n// import uniHeader from '@/components/header';\n// import uniFooter from '@/components/footer';\n// import uniSwiper from '@/components/swiper';\nvar _default = {\n  components: {\n    // uniHeader,\n    // uniFooter,\n    // uniSwiper,\n    videoComp: _videoComp.default,\n    videoFollowComp: _videoFollowComp.default\n  },\n  data: function data() {\n    return {\n      isLoading: false,\n      statusBarHeight: system.statusBarHeight,\n      screenHeight: system.screenHeight,\n      // screenHeight: system.safeArea.bottom,// - 50,\n      curIndex: 2,\n      playStatus: false,\n      playFollowStatus: false,\n      // videoList: getApp().getDefaultVlogList(),\t\t\t// 首页一开始查询所得的默认视频列表\n      videoList: [],\n      // 首页一开始查询所得的默认视频列表\n      refreshList: [],\n      // 下拉刷新后获得的新的列表\n      pagingList: [],\n      // 分页list\n      refresh: 0 // 从me页面传来的refresh，用于退出登录后重新刷新当前页的视频\n    };\n  },\n  onLoad: function onLoad() {\n    var have = plus.navigator.hasNotchInScreen(); // 判断是否有下拉\n  },\n\n  onTabItemTap: function onTabItemTap(e) {\n    var tabIndex = e.index;\n    // this.playStatus = tabIndex === 0 ? true : false;\n\n    // 切换视频要做暂停或播放的判断\n    var me = this;\n    if (tabIndex == 0) {\n      // 虚位以待\n    } else if (tabIndex == 1) {\n      me.playStatus = false;\n      me.playFollowStatus = true;\n    } else if (tabIndex == 2) {\n      me.playStatus = true;\n      me.playFollowStatus = false;\n    }\n  },\n  onShow: function onShow() {\n    var me = this;\n    var myUserInfo = app.getUserInfoSession();\n    this.myUserInfo = myUserInfo;\n\n    // 如果当前没有list，则relaunch\n    if (this.$refs.videoComp != undefined) {\n      var playerList = this.$refs.videoComp.playerList;\n      if (playerList != undefined && playerList.length == 0) {\n        this.$refs.videoComp.displayVideoPaging(1, true);\n      }\n    }\n\n    // 判断如果当前是tab为1或2，则播放，否则不播放\n    if (me.curIndex == 0) {\n      // 虚位以待\n    } else if (me.curIndex == 1) {\n      me.playFollowStatus = true;\n    } else if (me.curIndex == 2) {\n      me.playStatus = true;\n    }\n\n    // onShow的时候，关注的话，则重新刷一下list\n    var justFollowVlogerId = uni.getStorageSync(\"justFollowVlogerId\");\n    if (!app.isStrEmpty(justFollowVlogerId)) {\n      this.$refs.videoComp.reFollowPlayList(justFollowVlogerId);\n      uni.setStorageSync(\"justFollowVlogerId\", \"\");\n    }\n    // 取消关注也要重新刷一下list\n    var justCancelVlogerId = uni.getStorageSync(\"justCancelVlogerId\");\n    if (!app.isStrEmpty(justCancelVlogerId)) {\n      this.$refs.videoComp.reCancelPlayList(justCancelVlogerId);\n      uni.setStorageSync(\"justCancelVlogerId\", \"\");\n    }\n  },\n  onHide: function onHide() {\n    var me = this;\n    // 显示和隐藏，需要判断根据不同tab做暂停或者隐藏\n    if (me.curIndex == 0) {\n      // 虚位以待\n    } else if (me.curIndex == 1) {\n      me.playFollowStatus = false;\n    } else if (me.curIndex == 2) {\n      me.playStatus = false;\n    }\n  },\n  // 当前页下拉刷新\n  onPullDownRefresh: function onPullDownRefresh() {\n    var me = this;\n\n    // 下拉刷新判断，如果是不同tab，那么组件中刷新的请求也不同\n    if (me.curIndex == 0) {\n      // 虚位以待\n    } else if (me.curIndex == 1) {\n      this.$refs.videoFollowComp.displayVideoPaging(1, true);\n    } else if (me.curIndex == 2) {\n      this.$refs.videoComp.displayVideoPaging(1, true);\n    }\n  },\n  methods: {\n    // 前往搜索页面\n    goSearch: function goSearch() {\n      uni.navigateTo({\n        url: \"/pages/search/search\"\n      });\n    },\n    // 左滑右滑选项卡改变选中状态\n    changeTopTab: function changeTopTab(e) {\n      var current = e.detail.current;\n      this.curIndex = current;\n      this.playFollowStatus = this.curIndex === 1 ? true : false;\n      this.playStatus = this.curIndex === 2 ? true : false;\n    },\n    // 点击头部选项卡，切换页面\n    tapFollow: function tapFollow(current) {\n      this.curIndex = current;\n      this.playFollowStatus = this.curIndex === 1 ? true : false;\n      this.playStatus = this.curIndex === 2 ? true : false;\n    },\n    // 下拉刷新，改变head的字样显示\n    showLoading: function showLoading() {\n      this.isLoading = true;\n    },\n    hideLoading: function hideLoading() {\n      this.isLoading = false;\n    },\n    letFollowVideoPause: function letFollowVideoPause() {\n      this.playFollowStatus = false;\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZSJdLCJuYW1lcyI6WyJjb21wb25lbnRzIiwidmlkZW9Db21wIiwidmlkZW9Gb2xsb3dDb21wIiwiZGF0YSIsImlzTG9hZGluZyIsInN0YXR1c0JhckhlaWdodCIsInNjcmVlbkhlaWdodCIsImN1ckluZGV4IiwicGxheVN0YXR1cyIsInBsYXlGb2xsb3dTdGF0dXMiLCJ2aWRlb0xpc3QiLCJyZWZyZXNoTGlzdCIsInBhZ2luZ0xpc3QiLCJyZWZyZXNoIiwib25Mb2FkIiwib25UYWJJdGVtVGFwIiwibWUiLCJvblNob3ciLCJ1bmkiLCJvbkhpZGUiLCJvblB1bGxEb3duUmVmcmVzaCIsIm1ldGhvZHMiLCJnb1NlYXJjaCIsInVybCIsImNoYW5nZVRvcFRhYiIsInRhcEZvbGxvdyIsInNob3dMb2FkaW5nIiwiaGlkZUxvYWRpbmciLCJsZXRGb2xsb3dWaWRlb1BhdXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBa01BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUEsZUFHQTtFQUNBQTtJQUNBO0lBQ0E7SUFDQTtJQUNBQztJQUNBQztFQUNBO0VBQ0FDO0lBQ0E7TUFDQUM7TUFFQUM7TUFDQUM7TUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUVBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO0lBRUE7RUFDQTtFQUNBQztJQUNBO0VBQ0E7O0VBQ0FDO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7TUFDQTtJQUFBLENBQ0E7TUFDQUM7TUFDQUE7SUFDQTtNQUNBQTtNQUNBQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUVBO0lBQ0E7O0lBR0E7SUFDQTtNQUNBO01BQ0E7UUFDQTtNQUNBO0lBQ0E7O0lBR0E7SUFDQTtNQUNBO0lBQUEsQ0FDQTtNQUNBRDtJQUNBO01BQ0FBO0lBQ0E7O0lBRUE7SUFDQTtJQUNBO01BQ0E7TUFDQUU7SUFDQTtJQUNBO0lBQ0E7SUFDQTtNQUNBO01BQ0FBO0lBQ0E7RUFFQTtFQUNBQztJQUNBO0lBQ0E7SUFDQTtNQUNBO0lBQUEsQ0FDQTtNQUNBSDtJQUNBO01BQ0FBO0lBQ0E7RUFDQTtFQUNBO0VBQ0FJO0lBQ0E7O0lBRUE7SUFDQTtNQUNBO0lBQUEsQ0FDQTtNQUNBO0lBQ0E7TUFDQTtJQUNBO0VBRUE7RUFDQUM7SUFDQTtJQUNBQztNQUNBSjtRQUNBSztNQUNBO0lBQ0E7SUFFQTtJQUNBQztNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7TUFDQTtJQUNBO0lBRUE7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEiLCJmaWxlIjoiMjQwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHN0eWxlIHNjb3BlZD5cblx0LyogaW5kZXggc3RhcnQgKi9cblx0LnBhZ2Uge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdHRvcDogMDtcblx0XHRib3R0b206IDA7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogICNlY2VjZWM7XG5cdH1cblx0LyogaW5kZXggZW5kICovXG5cdFxuXHQvKiDpobbpg6jpgInpobnljaEgc3RhcnQgKi9cblx0LmhlYWRlciB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGxlZnQ6IDA7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRoZWlnaHQ6IDEwMHJweDtcblx0XHRsaW5lLWhlaWdodDogMTAwcnB4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0cGFkZGluZy1sZWZ0OiA0MHJweDtcblx0XHRwYWRkaW5nLXJpZ2h0OiA0MHJweDtcblx0fVxuXHRcblx0LmhlYWRlci1jZW50ZXIge1xuXHRcdGZsZXg6IDE7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR9XG5cdFxuXHQuaGVhZGVyLWxlZnQsXG5cdC5oZWFkZXItcmlnaHQge1xuXHRcdGNvbG9yOiAjOTk5O1xuXHRcdGhlaWdodDogMTAwcnB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAxMDBycHg7XG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0XHRmb250LWZhbWlseTogaWNvbmZvbnQ7XG5cdH1cblx0XG5cdC5oZWFkZXItcmlnaHQtc2VhcmNoIHtcblx0XHRoZWlnaHQ6IDEwMHJweDtcblx0XHQvKiBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAqL1xuXHR9XG5cdFxuXHQuaGVhZGVyLWl0ZW0ge1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0bWFyZ2luLWxlZnQ6IDZycHg7XG5cdFx0bWFyZ2luLXJpZ2h0OiA2cnB4O1xuXHR9XG5cdFxuXHQuaGVhZGVyLWl0ZW0tdGl0bGUge1xuXHRcdHdpZHRoOiAxMjBycHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGhlaWdodDogNjBycHg7XG5cdFx0bGluZS1oZWlnaHQ6IDYwcnB4O1xuXHRcdGNvbG9yOiAjMDAwMDAwO1xuXHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHR9XG5cdC5oZWFkZXItcmVmcmVzaC10aXRsZSB7XG5cdFx0d2lkdGg6IDMwMHJweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0aGVpZ2h0OiA2MHJweDtcblx0XHRsaW5lLWhlaWdodDogNjBycHg7XG5cdFx0Y29sb3I6ICNGRkZGRkY7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdH1cblx0LmhlYWRlci1pdGVtLWxpbmUge1xuXHRcdGhlaWdodDogNXJweDtcblx0XHRsaW5lLWhlaWdodDogOHJweDtcblx0XHR3aWR0aDogNjBycHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogOHJweDtcblx0fVxuXHQvKiDpobbpg6jpgInpobnljaEgZW5kICovXG5cdFxuXHQvKiDpgInpobnljaHova7mkq3nu4Tku7Ygc3RhcnQgKi9cblx0Lm15LXN3aXBlciB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGxlZnQ6IDA7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0dG9wOiAwO1xuXHRcdGJvdHRvbTogMDtcblx0fVxuXHQubmVhci1ieSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjojZWNlY2VjO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdH1cblx0Lm15LWZvbGxvdyB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR9XG5cdC8qIOmAiemhueWNoei9ruaSree7hOS7tiBlbmQgKi9cblx0Lndhcm4taW5mbyB7XG5cdFx0Y29sb3I6ICNGRkZGRkY7XG5cdFx0Zm9udC1zaXplOiAzNnJweDtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHR9XG5cdC5ub3JtYWwtaW1nIHtcblx0XHR3aWR0aDogNTBycHg7XG5cdFx0aGVpZ2h0OiA1MHJweDtcblx0XHRvcGFjaXR5OiAwLjg7XG5cdH1cclxuXHQuaW1nIHtcclxuXHRcdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdFx0aGVpZ2h0OiAxMTAwcnB4O1xyXG5cdFx0XHRvcGFjaXR5OiAwLjg7XHJcblx0XHR9XG48L3N0eWxlPlxuPHRlbXBsYXRlPlxuXHQ8dmlldyBjbGFzcz1cInBhZ2VcIj5cblx0XHQ8IS0tIOW3puS4reWPs+eahOS4ieS4qumhtemdouWIh+aNou+8jOS+neasoeaYr++8mumZhOi/kSAtIOWFs+azqCAtIOaOqOiNkCAtLT5cblx0XHQ8c3dpcGVyIHN0eWxlPVwibXktc3dpcGVyXCIgOnN0eWxlPVwie2hlaWdodDogc2NyZWVuSGVpZ2h0ICsgJ3B4J31cIiA6Y3VycmVudD1cImN1ckluZGV4XCIgQGNoYW5nZT1cImNoYW5nZVRvcFRhYlwiPlxuXHRcdFx0PHN3aXBlci1pdGVtPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIm5lYXItYnlcIiA6c3R5bGU9XCJ7aGVpZ2h0OiBzY3JlZW5IZWlnaHQrJ3B4J31cIj5cblx0XHRcdFx0XHQ8IS0tIDx0ZXh0IGNsYXNzPVwid2Fybi1pbmZvXCI+5pqC5pyq5byA5pS+77yM5pWs6K+35pyf5b6F77yBPC90ZXh0PiAtLT5cclxuXHRcdFx0XHRcdDxpbWFnZSAgY2xhc3M9XCJpbWdcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy95YmpjLnBuZ1wiID5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC9zd2lwZXItaXRlbT5cblx0XHRcdDxzd2lwZXItaXRlbT5cblx0XHRcdFx0PHZpZXcgdi1pZj1cIm15VXNlckluZm8gPT0gbnVsbFwiIGNsYXNzPVwibXktZm9sbG93XCIgOnN0eWxlPVwie2hlaWdodDogc2NyZWVuSGVpZ2h0KydweCd9XCI+XG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ3YXJuLWluZm9cIj7or7fnmbvlvZXlkI7mn6XnnIvvvIE8L3RleHQ+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlkZW8tZm9sbG93LWNvbXBcblx0XHRcdFx0XHRcdHJlZj1cInZpZGVvRm9sbG93Q29tcFwiXG5cdFx0XHRcdFx0XHQ6c2NyZWVuSGVpZ2h0PVwic2NyZWVuSGVpZ2h0XCIgXG5cdFx0XHRcdFx0XHQ6cGxheUZvbGxvd1N0YXR1cz1cInBsYXlGb2xsb3dTdGF0dXNcIiBcblx0XHRcdFx0XHRcdDp2aWRlb0xpc3Q9XCJ2aWRlb0xpc3RcIlxuXHRcdFx0XHRcdFx0OnJlZnJlc2hMaXN0PVwicmVmcmVzaExpc3RcIlxuXHRcdFx0XHRcdFx0OnBhZ2luZ0xpc3Q9XCJwYWdpbmdMaXN0XCJcblx0XHRcdFx0XHRcdEBzaG93TG9hZGluZz1cInNob3dMb2FkaW5nXCJcblx0XHRcdFx0XHRcdEBoaWRlTG9hZGluZz1cImhpZGVMb2FkaW5nXCJcblx0XHRcdFx0XHRcdEBsZXRGb2xsb3dWaWRlb1BhdXNlPVwibGV0Rm9sbG93VmlkZW9QYXVzZVwiXG5cdFx0XHRcdFx0XHRAZGlzcGxheVZpZGVvUGFnaW5nPVwiZGlzcGxheVZpZGVvUGFnaW5nXCI+PC92aWRlby1mb2xsb3ctY29tcD5cblx0XHRcdDwvc3dpcGVyLWl0ZW0+XG5cdFx0XHQ8c3dpcGVyLWl0ZW0+XG5cdFx0XHRcdFx0PHZpZGVvLWNvbXBcblx0XHRcdFx0XHRcdHJlZj1cInZpZGVvQ29tcFwiXG5cdFx0XHRcdFx0XHQ6c2NyZWVuSGVpZ2h0PVwic2NyZWVuSGVpZ2h0XCIgXG5cdFx0XHRcdFx0XHQ6cGxheVN0YXR1cz1cInBsYXlTdGF0dXNcIiBcblx0XHRcdFx0XHRcdDp2aWRlb0xpc3Q9XCJ2aWRlb0xpc3RcIlxuXHRcdFx0XHRcdFx0OnJlZnJlc2hMaXN0PVwicmVmcmVzaExpc3RcIlxuXHRcdFx0XHRcdFx0OnBhZ2luZ0xpc3Q9XCJwYWdpbmdMaXN0XCJcblx0XHRcdFx0XHRcdEBzaG93TG9hZGluZz1cInNob3dMb2FkaW5nXCJcblx0XHRcdFx0XHRcdEBoaWRlTG9hZGluZz1cImhpZGVMb2FkaW5nXCJcblx0XHRcdFx0XHRcdEBkaXNwbGF5VmlkZW9QYWdpbmc9XCJkaXNwbGF5VmlkZW9QYWdpbmdcIj48L3ZpZGVvLWNvbXA+XG5cdFx0XHQ8L3N3aXBlci1pdGVtPlxuXHRcdDwvc3dpcGVyPlxuXHRcdFxuXHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyXCIgOnN0eWxlPVwie21hcmdpblRvcDpzdGF0dXNCYXJIZWlnaHQrJ3B4J31cIiB2LWlmPVwiIWlzTG9hZGluZ1wiPlxuXHRcdFx0PHRleHQgY2xhc3M9XCJoZWFkZXItbGVmdFwiPjwvdGV4dD5cblx0XHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyLWNlbnRlclwiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRlci1pdGVtXCIgQGNsaWNrPVwidGFwRm9sbG93KDApXCI+XHJcblx0XHRcdFx0XHQ8IS0tICMg6ZmE6L+RIC0tPlxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaGVhZGVyLWl0ZW0tdGl0bGVcIiBzdHlsZT1cImNvbG9yOiAjYWNhY2FjO1wiPuS/neecvOaTjTwvdGV4dD4gIFxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyLWl0ZW0tbGluZVwiIDpjbGFzcz1cInsnYWN0aXZhdGUtbGluZSc6IGN1ckluZGV4ID09PSAwfVwiPjwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRlci1pdGVtXCIgQGNsaWNrPVwidGFwRm9sbG93KDEpXCI+XG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJoZWFkZXItaXRlbS10aXRsZVwiIHN0eWxlPVwiY29sb3I6ICNhY2FjYWM7XCI+5YWz5rOoPC90ZXh0PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyLWl0ZW0tbGluZVwiIDpjbGFzcz1cInsnYWN0aXZhdGUtbGluZSc6IGN1ckluZGV4ID09PSAxfVwiPjwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRlci1pdGVtXCIgQGNsaWNrPVwidGFwRm9sbG93KDIpXCI+XG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJoZWFkZXItaXRlbS10aXRsZVwiIHN0eWxlPVwiY29sb3I6ICNhY2FjYWM7XCI+5o6o6I2QPC90ZXh0PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyLWl0ZW0tbGluZVwiIDpjbGFzcz1cInsnYWN0aXZhdGUtbGluZSc6IGN1ckluZGV4ID09PSAyfVwiPjwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC92aWV3PlxuXHRcdFx0PGltYWdlIGNsYXNzPVwiaGVhZGVyLXJpZ2h0LXNlYXJjaCBub3JtYWwtaW1nXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9zaG91c3VvLnBuZ1wiIEBjbGljaz1cImdvU2VhcmNoXCI+XG5cdFx0PC92aWV3PlxuXHRcdFxuXHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyXCIgOnN0eWxlPVwie21hcmdpblRvcDpzdGF0dXNCYXJIZWlnaHQrJ3B4J31cIiB2LWlmPVwiaXNMb2FkaW5nXCI+XG5cdFx0XHQ8dGV4dCBjbGFzcz1cImhlYWRlci1sZWZ0XCI+PC90ZXh0PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJoZWFkZXItY2VudGVyXCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyLWl0ZW1cIj5cblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImhlYWRlci1yZWZyZXNoLXRpdGxlXCI+5LiL5ouJ5Yi35paw6KeG6aKRPC90ZXh0PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8aW1hZ2UgY2xhc3M9XCJoZWFkZXItcmlnaHQtc2VhcmNoIG5vcm1hbC1pbWdcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2xvYWRpbmcuZ2lmXCI+XG5cdFx0PC92aWV3PlxuXHRcdDwhLS0g6aG26YOo5YiH5o2i55qE5a+86IiqIGVuZCAtLT5cblx0XHRcblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cdHZhciBzeXN0ZW0gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcblx0dmFyIGFwcCA9IGdldEFwcCgpO1xuXHQvLyBpbXBvcnQgdW5pSGVhZGVyIGZyb20gJ0AvY29tcG9uZW50cy9oZWFkZXInO1xuXHQvLyBpbXBvcnQgdW5pRm9vdGVyIGZyb20gJ0AvY29tcG9uZW50cy9mb290ZXInO1xuXHQvLyBpbXBvcnQgdW5pU3dpcGVyIGZyb20gJ0AvY29tcG9uZW50cy9zd2lwZXInO1xuXHRpbXBvcnQgdmlkZW9Db21wIGZyb20gJ0AvY29tcG9uZW50cy92aWRlb0NvbXAudnVlJztcblx0aW1wb3J0IHZpZGVvRm9sbG93Q29tcCBmcm9tICdAL2NvbXBvbmVudHMvdmlkZW9Gb2xsb3dDb21wLnZ1ZSc7XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRjb21wb25lbnRzOiB7XG5cdFx0XHQvLyB1bmlIZWFkZXIsXG5cdFx0XHQvLyB1bmlGb290ZXIsXG5cdFx0XHQvLyB1bmlTd2lwZXIsXG5cdFx0XHR2aWRlb0NvbXAsXG5cdFx0XHR2aWRlb0ZvbGxvd0NvbXBcblx0XHR9LFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpc0xvYWRpbmc6IGZhbHNlLFxuXHRcdFx0XHRcblx0XHRcdFx0c3RhdHVzQmFySGVpZ2h0OiBzeXN0ZW0uc3RhdHVzQmFySGVpZ2h0LFxuXHRcdFx0XHRzY3JlZW5IZWlnaHQ6IHN5c3RlbS5zY3JlZW5IZWlnaHQsXG5cdFx0XHRcdC8vIHNjcmVlbkhlaWdodDogc3lzdGVtLnNhZmVBcmVhLmJvdHRvbSwvLyAtIDUwLFxuXHRcdFx0XHRjdXJJbmRleDogMixcblx0XHRcdFx0cGxheVN0YXR1czogZmFsc2UsXG5cdFx0XHRcdHBsYXlGb2xsb3dTdGF0dXM6IGZhbHNlLFxuXHRcdFx0XHRcblx0XHRcdFx0Ly8gdmlkZW9MaXN0OiBnZXRBcHAoKS5nZXREZWZhdWx0VmxvZ0xpc3QoKSxcdFx0XHQvLyDpppbpobXkuIDlvIDlp4vmn6Xor6LmiYDlvpfnmoTpu5jorqTop4bpopHliJfooahcblx0XHRcdFx0dmlkZW9MaXN0OiBbXSxcdFx0XHQvLyDpppbpobXkuIDlvIDlp4vmn6Xor6LmiYDlvpfnmoTpu5jorqTop4bpopHliJfooahcblx0XHRcdFx0cmVmcmVzaExpc3Q6IFtdLFx0XHRcdC8vIOS4i+aLieWIt+aWsOWQjuiOt+W+l+eahOaWsOeahOWIl+ihqFxuXHRcdFx0XHRwYWdpbmdMaXN0OiBbXSxcdFx0XHRcdC8vIOWIhumhtWxpc3Rcblx0XHRcdFx0cmVmcmVzaDogMCxcdFx0XHRcdFx0Ly8g5LuObWXpobXpnaLkvKDmnaXnmoRyZWZyZXNo77yM55So5LqO6YCA5Ye655m75b2V5ZCO6YeN5paw5Yi35paw5b2T5YmN6aG155qE6KeG6aKRXG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25Mb2FkKCkge1xuXHRcdFx0dmFyIGhhdmUgPSBwbHVzLm5hdmlnYXRvci5oYXNOb3RjaEluU2NyZWVuKCk7XHQvLyDliKTmlq3mmK/lkKbmnInkuIvmi4lcblx0XHR9LFxuXHRcdG9uVGFiSXRlbVRhcCA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciB0YWJJbmRleCA9IGUuaW5kZXg7XG5cdFx0XHQvLyB0aGlzLnBsYXlTdGF0dXMgPSB0YWJJbmRleCA9PT0gMCA/IHRydWUgOiBmYWxzZTtcblx0XHRcdFxuXHRcdFx0Ly8g5YiH5o2i6KeG6aKR6KaB5YGa5pqC5YGc5oiW5pKt5pS+55qE5Yik5patXG5cdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0aWYgKHRhYkluZGV4ID09IDApIHtcblx0XHRcdFx0Ly8g6Jma5L2N5Lul5b6FXG5cdFx0XHR9IGVsc2UgaWYgKHRhYkluZGV4ID09IDEpIHtcblx0XHRcdFx0bWUucGxheVN0YXR1cyA9IGZhbHNlO1xuXHRcdFx0XHRtZS5wbGF5Rm9sbG93U3RhdHVzID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZiAodGFiSW5kZXggPT0gMikge1xuXHRcdFx0XHRtZS5wbGF5U3RhdHVzID0gdHJ1ZTtcblx0XHRcdFx0bWUucGxheUZvbGxvd1N0YXR1cyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25TaG93KCkge1xuXHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFxuXHRcdFx0dmFyIG15VXNlckluZm8gPSBhcHAuZ2V0VXNlckluZm9TZXNzaW9uKCk7XG5cdFx0XHR0aGlzLm15VXNlckluZm8gPSBteVVzZXJJbmZvO1xuXHRcdFx0XG5cdFx0XHRcblx0XHRcdC8vIOWmguaenOW9k+WJjeayoeaciWxpc3TvvIzliJlyZWxhdW5jaFxuXHRcdFx0aWYgKHRoaXMuJHJlZnMudmlkZW9Db21wICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR2YXIgcGxheWVyTGlzdCA9IHRoaXMuJHJlZnMudmlkZW9Db21wLnBsYXllckxpc3Q7XG5cdFx0XHRcdGlmIChwbGF5ZXJMaXN0ICE9IHVuZGVmaW5lZCAmJiBwbGF5ZXJMaXN0Lmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRcdFx0dGhpcy4kcmVmcy52aWRlb0NvbXAuZGlzcGxheVZpZGVvUGFnaW5nKDEsIHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0Ly8g5Yik5pat5aaC5p6c5b2T5YmN5pivdGFi5Li6MeaIljLvvIzliJnmkq3mlL7vvIzlkKbliJnkuI3mkq3mlL5cblx0XHRcdGlmIChtZS5jdXJJbmRleCA9PSAwKSB7XG5cdFx0XHRcdC8vIOiZmuS9jeS7peW+hVxuXHRcdFx0fSBlbHNlIGlmIChtZS5jdXJJbmRleCA9PSAxKSB7XG5cdFx0XHRcdG1lLnBsYXlGb2xsb3dTdGF0dXMgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmIChtZS5jdXJJbmRleCA9PSAyKSB7XG5cdFx0XHRcdG1lLnBsYXlTdGF0dXMgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyBvblNob3fnmoTml7blgJnvvIzlhbPms6jnmoTor53vvIzliJnph43mlrDliLfkuIDkuItsaXN0XG5cdFx0XHR2YXIganVzdEZvbGxvd1Zsb2dlcklkID0gdW5pLmdldFN0b3JhZ2VTeW5jKFwianVzdEZvbGxvd1Zsb2dlcklkXCIpO1xuXHRcdFx0aWYgKCFhcHAuaXNTdHJFbXB0eShqdXN0Rm9sbG93VmxvZ2VySWQpKSB7XG5cdFx0XHRcdHRoaXMuJHJlZnMudmlkZW9Db21wLnJlRm9sbG93UGxheUxpc3QoanVzdEZvbGxvd1Zsb2dlcklkKTtcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwianVzdEZvbGxvd1Zsb2dlcklkXCIsIFwiXCIpO1xuXHRcdFx0fVxuXHRcdFx0Ly8g5Y+W5raI5YWz5rOo5Lmf6KaB6YeN5paw5Yi35LiA5LiLbGlzdFxuXHRcdFx0dmFyIGp1c3RDYW5jZWxWbG9nZXJJZCA9IHVuaS5nZXRTdG9yYWdlU3luYyhcImp1c3RDYW5jZWxWbG9nZXJJZFwiKTtcblx0XHRcdGlmICghYXBwLmlzU3RyRW1wdHkoanVzdENhbmNlbFZsb2dlcklkKSkge1xuXHRcdFx0XHR0aGlzLiRyZWZzLnZpZGVvQ29tcC5yZUNhbmNlbFBsYXlMaXN0KGp1c3RDYW5jZWxWbG9nZXJJZCk7XG5cdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcImp1c3RDYW5jZWxWbG9nZXJJZFwiLCBcIlwiKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH0sXG5cdFx0b25IaWRlKCkge1xuXHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdC8vIOaYvuekuuWSjOmakOiXj++8jOmcgOimgeWIpOaWreagueaNruS4jeWQjHRhYuWBmuaaguWBnOaIluiAhemakOiXj1xuXHRcdFx0aWYgKG1lLmN1ckluZGV4ID09IDApIHtcblx0XHRcdFx0Ly8g6Jma5L2N5Lul5b6FXG5cdFx0XHR9IGVsc2UgaWYgKG1lLmN1ckluZGV4ID09IDEpIHtcblx0XHRcdFx0bWUucGxheUZvbGxvd1N0YXR1cyA9IGZhbHNlO1xuXHRcdFx0fSBlbHNlIGlmIChtZS5jdXJJbmRleCA9PSAyKSB7XG5cdFx0XHRcdG1lLnBsYXlTdGF0dXMgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8vIOW9k+WJjemhteS4i+aLieWIt+aWsFxuXHRcdG9uUHVsbERvd25SZWZyZXNoKCkge1xuXHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFxuXHRcdFx0Ly8g5LiL5ouJ5Yi35paw5Yik5pat77yM5aaC5p6c5piv5LiN5ZCMdGFi77yM6YKj5LmI57uE5Lu25Lit5Yi35paw55qE6K+35rGC5Lmf5LiN5ZCMXG5cdFx0XHRpZiAobWUuY3VySW5kZXggPT0gMCkge1xuXHRcdFx0XHQvLyDomZrkvY3ku6XlvoVcblx0XHRcdH0gZWxzZSBpZiAobWUuY3VySW5kZXggPT0gMSkge1xuXHRcdFx0XHR0aGlzLiRyZWZzLnZpZGVvRm9sbG93Q29tcC5kaXNwbGF5VmlkZW9QYWdpbmcoMSwgdHJ1ZSk7XG5cdFx0XHR9IGVsc2UgaWYgKG1lLmN1ckluZGV4ID09IDIpIHtcblx0XHRcdFx0dGhpcy4kcmVmcy52aWRlb0NvbXAuZGlzcGxheVZpZGVvUGFnaW5nKDEsIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHQvLyDliY3lvoDmkJzntKLpobXpnaJcblx0XHRcdGdvU2VhcmNoKCkge1xuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0dXJsOiBcIi9wYWdlcy9zZWFyY2gvc2VhcmNoXCJcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8vIOW3pua7keWPs+a7kemAiemhueWNoeaUueWPmOmAieS4reeKtuaAgVxuXHRcdFx0Y2hhbmdlVG9wVGFiOiBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdHZhciBjdXJyZW50ID0gZS5kZXRhaWwuY3VycmVudDtcblx0XHRcdFx0dGhpcy5jdXJJbmRleCA9IGN1cnJlbnQ7XG5cdFx0XHRcdHRoaXMucGxheUZvbGxvd1N0YXR1cyA9IHRoaXMuY3VySW5kZXggPT09IDEgPyB0cnVlIDogZmFsc2U7XG5cdFx0XHRcdHRoaXMucGxheVN0YXR1cyA9IHRoaXMuY3VySW5kZXggPT09IDIgPyB0cnVlIDogZmFsc2U7XG5cdFx0XHR9LFxuXHRcdFx0Ly8g54K55Ye75aS06YOo6YCJ6aG55Y2h77yM5YiH5o2i6aG16Z2iXG5cdFx0XHR0YXBGb2xsb3c6IGZ1bmN0aW9uKGN1cnJlbnQpIHtcblx0XHRcdFx0dGhpcy5jdXJJbmRleCA9IGN1cnJlbnQ7XG5cdFx0XHRcdHRoaXMucGxheUZvbGxvd1N0YXR1cyA9IHRoaXMuY3VySW5kZXggPT09IDEgPyB0cnVlIDogZmFsc2U7XG5cdFx0XHRcdHRoaXMucGxheVN0YXR1cyA9IHRoaXMuY3VySW5kZXggPT09IDIgPyB0cnVlIDogZmFsc2U7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHQvLyDkuIvmi4nliLfmlrDvvIzmlLnlj5hoZWFk55qE5a2X5qC35pi+56S6XG5cdFx0XHRzaG93TG9hZGluZygpIHtcblx0XHRcdFx0dGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdGhpZGVMb2FkaW5nKCkge1xuXHRcdFx0XHR0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0fSxcblx0XHRcdGxldEZvbGxvd1ZpZGVvUGF1c2UoKSB7XG5cdFx0XHRcdHRoaXMucGxheUZvbGxvd1N0YXR1cyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///240\n");

/***/ }),
/* 241 */
/*!*****************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/components/videoComp.vue ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _videoComp_vue_vue_type_template_id_3067027f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videoComp.vue?vue&type=template&id=3067027f& */ 242);\n/* harmony import */ var _videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoComp.vue?vue&type=script&lang=js& */ 244);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./videoComp.vue?vue&type=style&index=0&lang=css& */ 246).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./videoComp.vue?vue&type=style&index=0&lang=css& */ 246).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _videoComp_vue_vue_type_template_id_3067027f___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _videoComp_vue_vue_type_template_id_3067027f___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"1778decf\",\n  false,\n  _videoComp_vue_vue_type_template_id_3067027f___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/videoComp.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0g7QUFDdEg7QUFDNkQ7QUFDTDtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDJEQUFrRDtBQUN0RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMkRBQWtEO0FBQzNHOztBQUVBOztBQUVBO0FBQ3NLO0FBQ3RLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyNDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3ZpZGVvQ29tcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzA2NzAyN2YmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi92aWRlb0NvbXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi92aWRlb0NvbXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdmlkZW9Db21wLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi92aWRlb0NvbXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiMTc3OGRlY2ZcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy92aWRlb0NvbXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///241\n");

/***/ }),
/* 242 */
/*!************************************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/components/videoComp.vue?vue&type=template&id=3067027f& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_template_id_3067027f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoComp.vue?vue&type=template&id=3067027f& */ 243);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_template_id_3067027f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_template_id_3067027f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_template_id_3067027f___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_template_id_3067027f___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 243 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ASUS/Desktop/MyLive-Dev/components/videoComp.vue?vue&type=template&id=3067027f& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniPopup:
      __webpack_require__(/*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 193)
        .default,
    uniPopupComments:
      __webpack_require__(/*! @/uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue */ 206)
        .default,
    uniPopupShare:
      __webpack_require__(/*! @/uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue */ 214)
        .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticStyle: { flex: "1" } }, [
    _c(
      "list",
      {
        attrs: { pagingEnabled: true, showScrollbar: false, scrollable: true },
        on: { scroll: _vm.listScroll, scrollend: _vm.scroll },
      },
      [
        _c(
          "refresh",
          {
            attrs: { display: _vm.refreshing ? "show" : "hide" },
            on: { pullingdown: _vm.onpullingdown, refresh: _vm.onrefresh },
          },
          [
            _c("u-text", {
              staticClass: ["refresh-info-txt"],
              appendAsTree: true,
              attrs: { append: "tree" },
            }),
            _c("loading-indicator"),
          ]
        ),
        _vm._l(_vm.playerList, function (item, index) {
          return _c(
            "cell",
            {
              key: index,
              style: { height: _vm.screenHeight + "px" },
              appendAsTree: true,
              attrs: { recycle: false, dataIndex: index, append: "tree" },
            },
            [
              _vm.playerCur === index
                ? _c("u-video", {
                    ref: "myVideo",
                    refInFor: true,
                    staticStyle: { width: "750rpx" },
                    style: { height: _vm.screenHeight + "px" },
                    attrs: {
                      id: "myVideo",
                      objectFit: item.width >= item.height ? "contain" : "fill",
                      src: item.url,
                      controls: false,
                      enableProgressGesture: false,
                      loop: true,
                      autoplay: true,
                      showLoading: "true",
                    },
                    on: {
                      click: _vm.playOrPause,
                      play: _vm.onplay,
                      error: _vm.onerror,
                      timeupdate: _vm.timeupdate,
                    },
                  })
                : _vm._e(),
              !item.play
                ? _c("u-image", {
                    staticStyle: { width: "750rpx", filter: "blur(10px)" },
                    style: { height: _vm.screenHeight + "px" },
                    attrs: {
                      lazyLoad: true,
                      fadeShow: false,
                      src: item.cover,
                      mode:
                        item.width >= item.height ? "aspectFit" : "scaleToFill",
                    },
                  })
                : _vm._e(),
              _c("view", { staticClass: ["publish-info-box"] }, [
                _c("view", {}, [
                  _c(
                    "u-text",
                    {
                      staticClass: ["publish-info-vloger-name"],
                      appendAsTree: true,
                      attrs: { append: "tree" },
                    },
                    [_vm._v("@" + _vm._s(item.vlogerName))]
                  ),
                  _c(
                    "u-text",
                    {
                      staticClass: ["publish-info-content"],
                      appendAsTree: true,
                      attrs: { append: "tree" },
                    },
                    [_vm._v(_vm._s(item.content))]
                  ),
                  _c(
                    "view",
                    { staticClass: ["publish-info-music-box"] },
                    [
                      _c("u-image", {
                        staticClass: ["icon-fire"],
                        attrs: { src: "/static/images/icon-fire.png" },
                      }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["muisc-words"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v(_vm._s(item.vlogerName) + "的原声创作")]
                      ),
                    ],
                    1
                  ),
                ]),
                _c(
                  "view",
                  { staticStyle: { flexDirection: "row" } },
                  [
                    !_vm.isIOS
                      ? _c("u-image", {
                          staticClass: ["play-cd"],
                          staticStyle: { width: "120rpx", height: "120rpx" },
                          attrs: { src: "/static/images/icon-cd.png" },
                        })
                      : _vm._e(),
                    _vm.isIOS
                      ? _c("u-image", {
                          staticClass: ["play-cd"],
                          attrs: {
                            src:
                              "https://imooc-news.oss-cn-shanghai.aliyuncs.com/image/cd-play-4.gif?time=" +
                              _vm.times,
                          },
                        })
                      : _vm._e(),
                  ],
                  1
                ),
              ]),
              _c(
                "view",
                { staticClass: ["operation-box"] },
                [
                  _c(
                    "view",
                    { staticClass: ["operation-face-box"] },
                    [
                      _c("u-image", {
                        staticClass: ["user-face"],
                        attrs: { src: item.vlogerFace },
                        on: {
                          click: function ($event) {
                            _vm.goUserInfoSeeSee(item.vlogerId)
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  !item.doIFollowVloger && _vm.userId != _vm.thisVlogerId
                    ? _c("u-image", {
                        staticClass: ["follow-me"],
                        attrs: { src: "/static/images/icon-follow.png" },
                        on: {
                          click: function ($event) {
                            _vm.followMe(item.vlogerId)
                          },
                        },
                      })
                    : _vm._e(),
                  _c(
                    "view",
                    { staticClass: ["like-box"] },
                    [
                      !item.doILikeThisVlog
                        ? _c("u-image", {
                            staticClass: ["icon"],
                            attrs: { src: "/static/images/icon-unlike.png" },
                            on: {
                              click: function ($event) {
                                _vm.likeOrDislikeVlog(1)
                              },
                            },
                          })
                        : _vm._e(),
                      item.doILikeThisVlog
                        ? _c("u-image", {
                            staticClass: ["icon"],
                            attrs: { src: "/static/images/icon-like.png" },
                            on: {
                              click: function ($event) {
                                _vm.likeOrDislikeVlog(0)
                              },
                            },
                          })
                        : _vm._e(),
                      _c(
                        "u-text",
                        {
                          staticClass: ["some-counts"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v(_vm._s(_vm.getGraceNumber(item.likeCounts)))]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "view",
                    { staticClass: ["comment-and-share-box"] },
                    [
                      _c("u-image", {
                        staticClass: ["icon"],
                        attrs: { src: "/static/images/icon-comments.png" },
                        on: { click: _vm.commentToggle },
                      }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["some-counts"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.getGraceNumber(_vm.thisVlogTotalComentCounts)
                            )
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "view",
                    { staticClass: ["comment-and-share-box"] },
                    [
                      _c("u-image", {
                        staticClass: ["icon"],
                        attrs: { src: "/static/images/icon-share.png" },
                        on: { click: _vm.shareToggle },
                      }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["some-counts"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v("分享")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        }),
      ],
      2
    ),
    _c(
      "view",
      [
        _c(
          "uni-popup",
          { ref: "comment", attrs: { type: "comment" } },
          [
            _c("uni-popup-comments", {
              attrs: {
                thisVlogerId: _vm.thisVlogerId,
                thisVlogId: _vm.thisVlogId,
              },
            }),
          ],
          1
        ),
        _c(
          "uni-popup",
          { ref: "share", attrs: { backgroundColor: "#fff", type: "share" } },
          [
            _c("uni-popup-share", {
              attrs: {
                thisVlogerId: _vm.thisVlogerId,
                thisVlogId: _vm.thisVlogId,
                vlogUrl: _vm.thisVlog.url,
                isPrivate: _vm.thisVlog.isPrivate,
              },
            }),
          ],
          1
        ),
      ],
      1
    ),
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 244 */
/*!******************************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/components/videoComp.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoComp.vue?vue&type=script&lang=js& */ 245);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWliLENBQWdCLDZjQUFHLEVBQUMiLCJmaWxlIjoiMjQ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ZpZGVvQ29tcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92aWRlb0NvbXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///244\n");

/***/ }),
/* 245 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ASUS/Desktop/MyLive-Dev/components/videoComp.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar app = getApp();\nvar _default = {\n  props: {\n    screenHeight: {\n      default: 0\n    },\n    src: {\n      default: false\n    },\n    playStatus: {\n      default: false\n    },\n    videoList: {\n      default: []\n    },\n    refreshList: {\n      default: []\n    },\n    pagingList: {\n      default: []\n    }\n  },\n  data: function data() {\n    return {\n      thisVlog: {},\n      // 当前的短视频对象\n      thisVlogId: \"\",\n      // 当前的短视频主键id\n      thisVlogerId: \"\",\n      // 当前的短视频博主的主键id\n      userId: \"\",\n      // 当前用户id\n\n      refreshing: false,\n      showRefreshLoading: \"hide\",\n      playerCur: 0,\n      page: 0,\n      totalPage: 0,\n      playerList: this.videoList,\n      thisVlogTotalComentCounts: 0,\n      videoContext: {},\n      currentIndex: 0,\n      contentOffsetY: 0,\n      times: new Date().getTime(),\n      objectFit: \"fill\",\n      isIOS: uni.getSystemInfoSync().platform == \"ios\"\n    };\n  },\n  created: function created() {\n    if (!this.isIOS) {\n      this.objectFit = \"cover\";\n    }\n    var myUserInfo = getApp().getUserInfoSession();\n    if (myUserInfo != null) {\n      this.userId = getApp().getUserInfoSession().id;\n    }\n\n    // 查询首页短视频列表\n    this.displayVideoPaging(this.page + 1, true);\n    var videoContext = uni.createVideoContext('myVideo');\n    this.videoContext = videoContext;\n  },\n  watch: {\n    refreshList: function refreshList(value) {\n      var me = this;\n      var newList = value;\n      if (newList != null && newList != undefined && newList.length > 0) {\n        me.playerList = newList;\n      }\n\n      // 重置\n      this.playerCur = 0;\n      this.currentIndex = 0;\n      this.contentOffsetY = 0;\n    },\n    playStatus: function playStatus(val) {\n      var me = this;\n      if (!val) {\n        me.videoContext.pause();\n      } else {\n        me.videoContext.play();\n      }\n    }\n  },\n  methods: {\n    // 把超过1000或10000的数字调整，比如1.3k/6.8w\n    getGraceNumber: function getGraceNumber(num) {\n      return getApp().graceNumber(num);\n    },\n    freshCommentCounts: function freshCommentCounts() {\n      var me = this;\n      var serverUrl = app.globalData.serverUrl;\n      var currentIndex = me.playerCur;\n      var vlog = me.playerList[currentIndex];\n      var vlogId = vlog.vlogId;\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"GET\",\n        url: serverUrl + \"/comment/counts?vlogId=\" + vlogId,\n        success: function success(result) {\n          if (result.data.status == 200) {\n            me.thisVlogTotalComentCounts = result.data.data;\n          } else {\n            me.thisVlogTotalComentCounts = 0;\n          }\n        }\n      });\n    },\n    likeOrDislikeVlog: function likeOrDislikeVlog(isLike) {\n      var me = this;\n      if (isLike == 1) {\n        // 喜欢/点赞视频\n\n        var myUserInfo = getApp().getUserInfoSession();\n        if (myUserInfo == null) {\n          uni.showToast({\n            duration: 3000,\n            title: \"请登录~\",\n            icon: \"none\"\n          });\n          uni.navigateTo({\n            url: \"../loginRegist/loginRegist\",\n            animationType: \"slide-in-bottom\",\n            success: function success() {\n              me.loginWords = \"请登录\";\n            }\n          });\n          return;\n        }\n        var userId = getApp().getUserInfoSession().id;\n        var serverUrl = app.globalData.serverUrl;\n        var currentIndex = me.playerCur;\n        var vlog = me.playerList[currentIndex];\n        uni.request({\n          method: \"POST\",\n          header: {\n            headerUserId: userId,\n            headerUserToken: app.getUserSessionToken()\n          },\n          url: serverUrl + \"/vlog/like?userId=\" + userId + \"&vlogerId=\" + vlog.vlogerId + \"&vlogId=\" + vlog.vlogId,\n          success: function success(result) {\n            if (result.data.status == 200) {\n              me.reLikePlayList(vlog.vlogId);\n              me.refreshVlogCounts();\n            } else {\n              uni.showToast({\n                title: result.data.msg,\n                icon: \"none\",\n                duration: 3000\n              });\n            }\n          }\n        });\n      } else if (isLike == 0) {\n        // 取消喜欢/点赞视频\n\n        var myUserInfo = getApp().getUserInfoSession();\n        if (myUserInfo == null) {\n          uni.showToast({\n            duration: 3000,\n            title: \"请登录~\",\n            icon: \"none\"\n          });\n          uni.navigateTo({\n            url: \"../loginRegist/loginRegist\",\n            animationType: \"slide-in-bottom\",\n            success: function success() {\n              me.loginWords = \"请登录\";\n            }\n          });\n          return;\n        }\n        var userId = getApp().getUserInfoSession().id;\n        var serverUrl = app.globalData.serverUrl;\n        var currentIndex = me.playerCur;\n        var vlog = me.playerList[currentIndex];\n        uni.request({\n          method: \"POST\",\n          header: {\n            headerUserId: userId,\n            headerUserToken: app.getUserSessionToken()\n          },\n          url: serverUrl + \"/vlog/unlike?userId=\" + userId + \"&vlogerId=\" + vlog.vlogerId + \"&vlogId=\" + vlog.vlogId,\n          success: function success(result) {\n            if (result.data.status == 200) {\n              me.reDislikePlayList(vlog.vlogId);\n              me.refreshVlogCounts();\n            } else {\n              uni.showToast({\n                title: result.data.msg,\n                icon: \"none\",\n                duration: 3000\n              });\n            }\n          }\n        });\n      }\n    },\n    // 喜欢/点赞的list重新设置\n    reLikePlayList: function reLikePlayList(vlogId) {\n      var me = this;\n      var playerList = me.playerList;\n\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogId == vlogId) {\n          vlog.doILikeThisVlog = true;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n    reDislikePlayList: function reDislikePlayList(vlogId) {\n      var me = this;\n      var playerList = me.playerList;\n\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogId == vlogId) {\n          vlog.doILikeThisVlog = false;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n    // 关注后的list重新设置\n    reFollowPlayList: function reFollowPlayList(vlogerId) {\n      var me = this;\n      var playerList = me.playerList;\n\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogerId == vlogerId) {\n          vlog.doIFollowVloger = true;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n    // 取关后的list重新设置\n    reCancelPlayList: function reCancelPlayList(vlogerId) {\n      var me = this;\n      var playerList = me.playerList;\n\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogerId == vlogerId) {\n          vlog.doIFollowVloger = false;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n    // 关注博主\n    followMe: function followMe(vlogerId) {\n      var me = this;\n      var myUserInfo = getApp().getUserInfoSession();\n      if (myUserInfo == null) {\n        uni.showToast({\n          duration: 3000,\n          title: \"请登录~\",\n          icon: \"none\"\n        });\n        uni.navigateTo({\n          url: \"../loginRegist/loginRegist\",\n          animationType: \"slide-in-bottom\",\n          success: function success() {\n            me.loginWords = \"请登录\";\n          }\n        });\n        return;\n      }\n      var userId = getApp().getUserInfoSession().id;\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"POST\",\n        header: {\n          headerUserId: userId,\n          headerUserToken: app.getUserSessionToken()\n        },\n        url: serverUrl + \"/fans/follow?myId=\" + userId + \"&vlogerId=\" + vlogerId,\n        success: function success(result) {\n          if (result.data.status == 200) {\n            me.reFollowPlayList(vlogerId);\n          } else {\n            uni.showToast({\n              title: result.data.msg,\n              icon: \"none\",\n              duration: 3000\n            });\n          }\n        }\n      });\n    },\n    goUserInfoSeeSee: function goUserInfoSeeSee(userId) {\n      uni.setStorageSync(\"userPageId\", userId);\n      uni.navigateTo({\n        url: \"/pages/me/vlogerInfo?userPageId=\" + userId\n      });\n    },\n    listScroll: function listScroll(e) {\n      if (e.contentOffset.y > 0) {\n        this.$emit(\"showLoading\");\n      }\n    },\n    downloadVlog: function downloadVlog() {\n      var me = this;\n      var serverUrl = app.globalData.serverUrl;\n      var currentIndex = me.playerCur;\n      var vlog = me.playerList[currentIndex];\n      var pendingLength = vlog.url;\n    },\n    copyLink: function copyLink() {\n      var me = me;\n    },\n    showQRCode: function showQRCode() {\n      var me = me;\n    },\n    changeVlogToPrivate: function changeVlogToPrivate() {\n      var me = me;\n    },\n    // 下拉刷新的过程中，改变头部tab显示的字样\n    onpullingdown: function onpullingdown(e) {},\n    onrefresh: function onrefresh(e) {\n      var _this = this;\n      this.refreshing = true;\n      setTimeout(function () {\n        _this.refreshing = false;\n        _this.$emit(\"hideLoading\");\n        _this.refreshText = '↓ Pull To Refresh';\n      }, 300);\n\n      // 通过list组件的下拉刷新触发当前所在页面的下拉刷新\n      uni.startPullDownRefresh();\n    },\n    onplay: function onplay(e) {\n      if (uni.getSystemInfoSync().platform == 'ios') {\n        this.doplay(0.1);\n      }\n    },\n    onerror: function onerror(err) {},\n    timeupdate: function timeupdate(e) {\n      if (e.detail.currentTime > 0.2) {\n        this.doplay(e.detail.currentTime);\n      }\n    },\n    playOrPause: function playOrPause() {\n      var me = this;\n      var playStatus = this.playStatus;\n      if (!playStatus) {\n        me.videoContext.pause();\n      } else {\n        me.videoContext.play();\n      }\n      this.playStatus = !playStatus;\n    },\n    scroll: function scroll(e) {\n      var originalIndex = this.currentIndex;\n      var isNext = false;\n      if (e.contentOffset.y < this.contentOffsetY) {\n        isNext = true;\n      }\n      this.contentOffsetY = e.contentOffset.y;\n      var num = this.playerList.length;\n      this.currentIndex = Math.round(Math.abs(this.contentOffsetY) / (e.contentSize.height / num));\n      this.onchange(this.currentIndex);\n      this.times = new Date().getTime();\n      // 判断如果视频列表总长度-当前下标，少于3个，则开始分页查询后续的视频，并且追加到现有list中\n      if (this.playerList.length - this.currentIndex < 3) {\n        // 如果要分页的page和总数totalPage相等，则没有更多\n        if (this.page == this.totalPage) {\n          return;\n        }\n        this.displayVideoPaging(this.page + 1, false);\n      }\n    },\n    // 分页查询新的list，并且追加到现有list中\n    displayVideoPaging: function displayVideoPaging(page, needClearList) {\n      // 查询首页短视频列表\n      var me = this;\n      var myUserInfo = getApp().getUserInfoSession();\n      var userId = \"\";\n      if (myUserInfo != null) {\n        userId = myUserInfo.id;\n      }\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"GET\",\n        url: serverUrl + \"/vlog/indexList?userId=\" + userId + \"&page=\" + page + \"&pageSize=10\",\n        success: function success(result) {\n          if (result.data.status == 200) {\n            var vlogList = result.data.data.rows;\n            var totalPage = result.data.data.total;\n            // me.playerList = vlogList;\n            if (needClearList) {\n              me.playerList = [];\n            }\n            me.playerList = me.playerList.concat(vlogList);\n            me.page = page;\n            me.totalPage = totalPage;\n            if (needClearList) {\n              me.setThisVlogInfo();\n              me.freshCommentCounts();\n            }\n          } else {\n            uni.showToast({\n              title: result.data.msg,\n              icon: \"none\",\n              duration: 3000\n            });\n          }\n        },\n        complete: function complete() {\n          uni.stopPullDownRefresh();\n        }\n      });\n    },\n    doplay: function doplay(time) {\n      if (time > 0) {\n        this.playerList[this.playerCur].play = true;\n      }\n    },\n    onchange: function onchange(index) {\n      if (index != this.playerCur) {\n        this.playerList[this.playerCur].play = false;\n        this.playerCur = index;\n      }\n      this.refreshVlogCounts();\n      this.setThisVlogInfo();\n      this.freshCommentCounts();\n    },\n    // 设置当前vlog的信息\n    setThisVlogInfo: function setThisVlogInfo() {\n      var me = this;\n      var serverUrl = app.globalData.serverUrl;\n      var currentIndex = me.playerCur;\n      var vlog = me.playerList[currentIndex];\n      this.thisVlog = vlog;\n      this.thisVlogId = vlog.vlogId;\n      this.thisVlogerId = vlog.vlogerId;\n    },\n    refreshVlogCounts: function refreshVlogCounts() {\n      // 查询当前点赞数，重新赋值给当前视频\n      var me = this;\n      var serverUrl = app.globalData.serverUrl;\n      var currentIndex = me.playerCur;\n      var vlog = me.playerList[currentIndex];\n      uni.request({\n        method: \"POST\",\n        url: serverUrl + \"/vlog/totalLikedCounts?vlogId=\" + vlog.vlogId,\n        success: function success(result) {\n          if (result.data.status == 200) {\n            var counts = result.data.data;\n            me.reChangeVlogLikedCountsInPlayList(vlog.vlogId, counts);\n          }\n        }\n      });\n    },\n    reChangeVlogLikedCountsInPlayList: function reChangeVlogLikedCountsInPlayList(vlogId, counts) {\n      var me = this;\n      var playerList = me.playerList;\n\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogId == vlogId) {\n          vlog.likeCounts = counts;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n    commentToggle: function commentToggle() {\n      this.$refs.comment.open();\n      uni.hideTabBar({\n        animation: true\n      });\n    },\n    shareToggle: function shareToggle() {\n      this.$refs.share.open();\n      uni.hideTabBar({\n        animation: true\n      });\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy92aWRlb0NvbXAudnVlIl0sIm5hbWVzIjpbInByb3BzIiwic2NyZWVuSGVpZ2h0IiwiZGVmYXVsdCIsInNyYyIsInBsYXlTdGF0dXMiLCJ2aWRlb0xpc3QiLCJyZWZyZXNoTGlzdCIsInBhZ2luZ0xpc3QiLCJkYXRhIiwidGhpc1Zsb2ciLCJ0aGlzVmxvZ0lkIiwidGhpc1Zsb2dlcklkIiwidXNlcklkIiwicmVmcmVzaGluZyIsInNob3dSZWZyZXNoTG9hZGluZyIsInBsYXllckN1ciIsInBhZ2UiLCJ0b3RhbFBhZ2UiLCJwbGF5ZXJMaXN0IiwidGhpc1Zsb2dUb3RhbENvbWVudENvdW50cyIsInZpZGVvQ29udGV4dCIsImN1cnJlbnRJbmRleCIsImNvbnRlbnRPZmZzZXRZIiwidGltZXMiLCJvYmplY3RGaXQiLCJpc0lPUyIsImNyZWF0ZWQiLCJ3YXRjaCIsIm1lIiwibWV0aG9kcyIsImdldEdyYWNlTnVtYmVyIiwiZnJlc2hDb21tZW50Q291bnRzIiwidW5pIiwibWV0aG9kIiwidXJsIiwic3VjY2VzcyIsImxpa2VPckRpc2xpa2VWbG9nIiwiZHVyYXRpb24iLCJ0aXRsZSIsImljb24iLCJhbmltYXRpb25UeXBlIiwiaGVhZGVyIiwiaGVhZGVyVXNlcklkIiwiaGVhZGVyVXNlclRva2VuIiwicmVMaWtlUGxheUxpc3QiLCJ2bG9nIiwicmVEaXNsaWtlUGxheUxpc3QiLCJyZUZvbGxvd1BsYXlMaXN0IiwicmVDYW5jZWxQbGF5TGlzdCIsImZvbGxvd01lIiwiZ29Vc2VySW5mb1NlZVNlZSIsImxpc3RTY3JvbGwiLCJkb3dubG9hZFZsb2ciLCJjb3B5TGluayIsInNob3dRUkNvZGUiLCJjaGFuZ2VWbG9nVG9Qcml2YXRlIiwib25wdWxsaW5nZG93biIsIm9ucmVmcmVzaCIsInNldFRpbWVvdXQiLCJvbnBsYXkiLCJvbmVycm9yIiwidGltZXVwZGF0ZSIsInBsYXlPclBhdXNlIiwic2Nyb2xsIiwiaXNOZXh0IiwiZGlzcGxheVZpZGVvUGFnaW5nIiwiY29tcGxldGUiLCJkb3BsYXkiLCJvbmNoYW5nZSIsInNldFRoaXNWbG9nSW5mbyIsInJlZnJlc2hWbG9nQ291bnRzIiwicmVDaGFuZ2VWbG9nTGlrZWRDb3VudHNJblBsYXlMaXN0IiwiY29tbWVudFRvZ2dsZSIsImFuaW1hdGlvbiIsInNoYXJlVG9nZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrTkE7QUFBQSxlQUNBO0VBQ0FBO0lBQ0FDO01BQ0FDO0lBQ0E7SUFDQUM7TUFDQUQ7SUFDQTtJQUNBRTtNQUNBRjtJQUNBO0lBQ0FHO01BQ0FIO0lBQ0E7SUFDQUk7TUFDQUo7SUFDQTtJQUNBSztNQUNBTDtJQUNBO0VBQ0E7RUFDQU07SUFDQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBOztNQUdBQztNQUNBQztNQUVBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUVBQztNQUVBQztNQUNBQztNQUVBQztNQUVBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFFQTtNQUNBO0lBQ0E7SUFFQTtJQUNBO01BQ0E7SUFDQTs7SUFFQTtJQUNBO0lBRUE7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FyQjtNQUNBO01BQ0E7TUFDQTtRQUNBc0I7TUFDQTs7TUFFQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBRUF4QjtNQUNBO01BRUE7UUFDQXdCO01BQ0E7UUFDQUE7TUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BRUE7TUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7VUFFQTtZQUNBUDtVQUNBO1lBQ0FBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQVE7TUFDQTtNQUNBO1FBQ0E7O1FBRUE7UUFDQTtVQUNBSjtZQUNBSztZQUNBQztZQUNBQztVQUNBO1VBQ0FQO1lBQ0FFO1lBQ0FNO1lBQ0FMO2NBQ0FQO1lBQ0E7VUFDQTtVQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUVBSTtVQUNBQztVQUNBUTtZQUNBQztZQUNBQztVQUNBO1VBQ0FUO1VBQ0FDO1lBRUE7Y0FDQVA7Y0FDQUE7WUFDQTtjQUNBSTtnQkFDQU07Z0JBQ0FDO2dCQUNBRjtjQUNBO1lBQ0E7VUFDQTtRQUNBO01BRUE7UUFDQTs7UUFFQTtRQUNBO1VBQ0FMO1lBQ0FLO1lBQ0FDO1lBQ0FDO1VBQ0E7VUFDQVA7WUFDQUU7WUFDQU07WUFDQUw7Y0FDQVA7WUFDQTtVQUNBO1VBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBRUFJO1VBQ0FDO1VBQ0FRO1lBQ0FDO1lBQ0FDO1VBQ0E7VUFDQVQ7VUFDQUM7WUFFQTtjQUNBUDtjQUNBQTtZQUNBO2NBQ0FJO2dCQUNBTTtnQkFDQUM7Z0JBQ0FGO2NBQ0E7WUFDQTtVQUNBO1FBQ0E7TUFFQTtJQUNBO0lBRUE7SUFDQU87TUFDQTtNQUNBOztNQUVBO01BQ0E7UUFDQTtRQUNBO1VBQ0FDO1VBQ0EzQjtRQUNBO01BQ0E7TUFDQVU7SUFDQTtJQUNBa0I7TUFDQTtNQUNBOztNQUVBO01BQ0E7UUFDQTtRQUNBO1VBQ0FEO1VBQ0EzQjtRQUNBO01BQ0E7TUFDQVU7SUFDQTtJQUVBO0lBQ0FtQjtNQUNBO01BQ0E7O01BRUE7TUFDQTtRQUNBO1FBQ0E7VUFDQUY7VUFFQTNCO1FBQ0E7TUFDQTtNQUNBVTtJQUNBO0lBQ0E7SUFDQW9CO01BQ0E7TUFDQTs7TUFFQTtNQUNBO1FBQ0E7UUFDQTtVQUNBSDtVQUNBM0I7UUFDQTtNQUNBO01BQ0FVO0lBQ0E7SUFHQTtJQUNBcUI7TUFDQTtNQUNBO01BQ0E7UUFDQWpCO1VBQ0FLO1VBQ0FDO1VBQ0FDO1FBQ0E7UUFFQVA7VUFDQUU7VUFDQU07VUFDQUw7WUFDQVA7VUFDQTtRQUNBO1FBRUE7TUFDQTtNQUNBO01BQ0E7TUFDQUk7UUFDQUM7UUFDQVE7VUFDQUM7VUFDQUM7UUFDQTtRQUNBVDtRQUNBQztVQUVBO1lBQ0FQO1VBQ0E7WUFDQUk7Y0FDQU07Y0FDQUM7Y0FDQUY7WUFDQTtVQUNBO1FBQ0E7TUFDQTtJQUVBO0lBRUFhO01BQ0FsQjtNQUNBQTtRQUNBRTtNQUNBO0lBQ0E7SUFFQWlCO01BQ0E7UUFDQTtNQUNBO0lBQ0E7SUFFQUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFFQUM7TUFDQTtJQUNBO0lBRUFDO01BQ0E7SUFDQTtJQUVBQztNQUNBO0lBQ0E7SUFFQTtJQUNBQywwQ0FDQTtJQUNBQztNQUFBO01BQ0E7TUFDQUM7UUFDQTtRQUNBO1FBQ0E7TUFDQTs7TUFFQTtNQUNBMUI7SUFDQTtJQUVBMkI7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBQyxnQ0FDQTtJQUNBQztNQUNBO1FBQ0E7TUFDQTtJQUNBO0lBRUFDO01BQ0E7TUFDQTtNQUVBO1FBQ0FsQztNQUNBO1FBQ0FBO01BQ0E7TUFDQTtJQUNBO0lBR0FtQztNQUNBO01BQ0E7TUFDQTtRQUNBQztNQUNBO01BQ0E7TUFFQTtNQUVBO01BQ0E7TUFFQTtNQUNBO01BQ0E7UUFDQTtRQUNBO1VBQ0E7UUFDQTtRQUNBO01BQ0E7SUFFQTtJQUVBO0lBQ0FDO01BRUE7TUFDQTtNQUNBO01BQ0E7TUFDQTtRQUNBckQ7TUFDQTtNQUNBO01BQ0FvQjtRQUNBQztRQUNBQztRQUNBQztVQUVBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7Y0FDQVA7WUFDQTtZQUNBQTtZQUNBQTtZQUNBQTtZQUVBO2NBQ0FBO2NBQ0FBO1lBQ0E7VUFDQTtZQUNBSTtjQUNBTTtjQUNBQztjQUNBRjtZQUNBO1VBQ0E7UUFFQTtRQUNBNkI7VUFDQWxDO1FBQ0E7TUFDQTtJQUNBO0lBRUFtQztNQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7UUFDQTtRQUNBO01BQ0E7TUFFQTtNQUNBO01BQ0E7SUFDQTtJQUVBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUVBQztNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQXRDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1VBQ0E7WUFDQTtZQUNBUDtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBRUEyQztNQUNBO01BQ0E7O01BRUE7TUFDQTtRQUNBO1FBQ0E7VUFDQTFCO1VBQ0EzQjtRQUNBO01BQ0E7TUFDQVU7SUFDQTtJQUVBNEM7TUFDQTtNQUNBeEM7UUFDQXlDO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0ExQztRQUNBeUM7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBIiwiZmlsZSI6IjI0NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzdHlsZT5cblx0Lmljb24ge1xuXHRcdHdpZHRoOiA4MHJweDtcblx0XHRoZWlnaHQ6IDgwcnB4O1xuXHRcdG9wYWNpdHk6IDAuOTtcblx0fVxuXHRcblx0LnVzZXItZmFjZSB7XG5cdFx0d2lkdGg6IDEwMHJweDtcblx0XHRoZWlnaHQ6IDEwMHJweDtcblx0XHRib3JkZXItcmFkaXVzOiAxMDBycHg7XG5cdH1cblx0XG5cdC5wbGF5LWNkIHtcblx0XHR3aWR0aDogMTUwcnB4O1xuXHRcdGhlaWdodDogMTUwcnB4O1xuXHRcdG9wYWNpdHk6IDAuODtcblx0fVxuXHQucmVmcmVzaC1pbmZvLXR4dCB7XG5cdFx0Y29sb3I6ICNGMUYxRjE7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGZvbnQtc2l6ZTogMTJweDtcblx0fVxuXHQucHVibGlzaC1pbmZvLWJveCB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGJvdHRvbTogMjAwcnB4O1xuXHRcdGxlZnQ6IDA7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0cGFkZGluZy1sZWZ0OiAyMHJweDtcblx0XHRwYWRkaW5nLXJpZ2h0OiAyMHJweDsgXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0fVxuXHQucHVibGlzaC1pbmZvLXZsb2dlci1uYW1lIHtcblx0XHRjb2xvcjogI0ZGRkZGRjtcblx0XHRmb250LXNpemU6IDQwcnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0cGFkZGluZzogMTBycHg7XG5cdH1cblx0LnB1Ymxpc2gtaW5mby1tdXNpYy1ib3gge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0fVxuXHQucHVibGlzaC1pbmZvLWNvbnRlbnQge1xuXHRcdGNvbG9yOiAjRkZGRkZGO1xuXHRcdGZvbnQtc2l6ZTogMjhycHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRwYWRkaW5nOiAxMHJweDtcblx0XHRsaW5lczogNTtcblx0XHR3aWR0aDogNTIwcnB4O1xuXHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXHR9XG5cdC5pY29uLWZpcmUge1xuXHRcdHdpZHRoOiAzNnJweDtcblx0XHRoZWlnaHQ6IDM2cnB4O1xuXHR9XG5cdC5tdWlzYy13b3JkcyB7XG5cdFx0Y29sb3I6ICNGRkZGRkY7XG5cdFx0Zm9udC1zaXplOiAyOHJweDtcblx0XHRwYWRkaW5nOiAxMHJweDtcblx0XHR3aWR0aDo0MDBycHg7XG5cdH1cblx0LnNvbWUtY291bnRzIHtcblx0XHRmb250LXNpemU6MjRycHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Y29sb3I6ICNGRkZGRkY7XG5cdFx0bWFyZ2luLXRvcDogMnJweDtcblx0fVxuXHQub3BlcmF0aW9uLWJveCB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogMDtcblx0XHRib3R0b206IDA7IFxuXHRcdHJpZ2h0OiAwO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0cGFkZGluZy1yaWdodDogMjBycHg7XG5cdH1cblx0Lm9wZXJhdGlvbi1mYWNlLWJveCB7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTAwcnB4O1xuXHRcdGJvcmRlci1jb2xvcjogI0ZGRkZGRjtcblx0XHRib3JkZXItd2lkdGg6IDNycHg7XG5cdH1cblx0LmZvbGxvdy1tZSB7XG5cdFx0d2lkdGg6IDQwcnB4O1xuXHRcdGhlaWdodDogNDBycHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0dG9wOiAtMjBycHg7XG5cdH1cblx0Lmxpa2UtYm94IHtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0bWFyZ2luLXRvcDogMzBycHg7XG5cdH1cblx0LmNvbW1lbnQtYW5kLXNoYXJlLWJveCB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdG1hcmdpbi10b3A6IDQ1cnB4O1xuXHR9XG48L3N0eWxlPlxuXG48dGVtcGxhdGU+XG5cdDx2aWV3IHN0eWxlPVwiZmxleDogMTtcIj5cblx0XHQ8IS0tIDx1bmktbGlzdCBAY2hhbmdlPVwib25jaGFuZ2VcIiA6bnVtPVwicGxheWVyTGlzdC5sZW5ndGhcIj4gLS0+XG5cdFx0PGxpc3QgOnBhZ2luZ0VuYWJsZWQ9XCJ0cnVlXCIgOnNob3ctc2Nyb2xsYmFyPVwiZmFsc2VcIiBAc2Nyb2xsPVwibGlzdFNjcm9sbFwiIEBzY3JvbGxlbmQ9XCJzY3JvbGxcIiA6c2Nyb2xsYWJsZT1cInRydWVcIiA+XHRcblx0XHRcdDxyZWZyZXNoIEBwdWxsaW5nZG93bj1cIm9ucHVsbGluZ2Rvd25cIiBAcmVmcmVzaD1cIm9ucmVmcmVzaFwiIDpkaXNwbGF5PVwicmVmcmVzaGluZyA/ICdzaG93JyA6ICdoaWRlJ1wiPlxuXHRcdFx0ICA8dGV4dCBjbGFzcz1cInJlZnJlc2gtaW5mby10eHRcIj48L3RleHQ+XG5cdFx0XHQgIDxsb2FkaW5nLWluZGljYXRvcj48L2xvYWRpbmctaW5kaWNhdG9yPlxuXHRcdFx0PC9yZWZyZXNoPlxuXHRcdFx0PGNlbGwgOnJlY3ljbGU9XCJmYWxzZVwiIFxuXHRcdFx0XHR2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gcGxheWVyTGlzdFwiIFxuXHRcdFx0XHQ6a2V5PVwiaW5kZXhcIiBcblx0XHRcdFx0OmRhdGEtaW5kZXg9XCJpbmRleFwiIFxuXHRcdFx0XHQ6c3R5bGU9XCJ7J2hlaWdodCc6IHNjcmVlbkhlaWdodCArICdweCd9XCI+XG5cdFx0XHRcdDx2aWRlbyBcblx0XHRcdFx0XHRyZWY9XCJteVZpZGVvXCIgXG5cdFx0XHRcdFx0aWQ9XCJteVZpZGVvXCIgXG5cdFx0XHRcdFx0Om9iamVjdC1maXQ9XCJpdGVtLndpZHRoID49IGl0ZW0uaGVpZ2h0ID8gJ2NvbnRhaW4nIDogJ2ZpbGwnXCIgXG5cdFx0XHRcdFx0OnNyYz1cIml0ZW0udXJsXCIgXG5cdFx0XHRcdFx0OmNvbnRyb2xzPVwiZmFsc2VcIlxuXHRcdFx0XHRcdDplbmFibGUtcHJvZ3Jlc3MtZ2VzdHVyZT1cImZhbHNlXCJcblx0XHRcdFx0XHQgdi1pZj1cInBsYXllckN1ciA9PT0gaW5kZXhcIlxuXHRcdFx0XHRcdGxvb3AgXG5cdFx0XHRcdFx0YXV0b3BsYXkgXG5cdFx0XHRcdFx0c2hvdy1sb2FkaW5nPVwidHJ1ZVwiXG5cdFx0XHRcdFx0c3R5bGU9XCJ3aWR0aDogNzUwcnB4O1wiIFxuXHRcdFx0XHRcdDpzdHlsZT1cIntoZWlnaHQ6IHNjcmVlbkhlaWdodCArICdweCd9XCIgXG5cdFx0XHRcdFx0QGNsaWNrPVwicGxheU9yUGF1c2VcIlxuXHRcdFx0XHRcdEBwbGF5PVwib25wbGF5XCIgXG5cdFx0XHRcdFx0QGVycm9yPVwib25lcnJvclwiIFxuXHRcdFx0XHRcdEB0aW1ldXBkYXRlPVwidGltZXVwZGF0ZVwiPjwvdmlkZW8+XG5cdFx0XHRcdDxpbWFnZSBcblx0XHRcdFx0XHQ6bGF6eS1sb2FkPVwidHJ1ZVwiIFxuXHRcdFx0XHRcdDpmYWRlLXNob3c9XCJmYWxzZVwiIFxuXHRcdFx0XHRcdHYtaWY9XCIhaXRlbS5wbGF5XCIgXG5cdFx0XHRcdFx0OnNyYz1cIml0ZW0uY292ZXJcIiBcblx0XHRcdFx0XHQ6bW9kZT1cIml0ZW0ud2lkdGggPj0gaXRlbS5oZWlnaHQgPyAnYXNwZWN0Rml0JyA6ICdzY2FsZVRvRmlsbCdcIiBcblx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOiA3NTBycHg7IGZpbHRlcjogYmx1cigxMHB4KTtcIlxuXHRcdFx0XHRcdDpzdHlsZT1cIntoZWlnaHQ6IHNjcmVlbkhlaWdodCsgJ3B4J31cIj48L2ltYWdlPlxuXHRcdFx0XHQ8IS0tPGltYWdlIDpsYXp5LWxvYWQ9XCJ0cnVlXCIgOmZhZGUtc2hvdz1cImZhbHNlXCIgdi1pZj1cIiFpdGVtLnBsYXlcIiA6c3JjPVwiaXRlbS5jb3ZlclwiIG1vZGU9XCJcIiBzdHlsZT1cIndpZHRoOiA3NTBycHg7cG9zaXRpb246YWJzb2x1dGU7bGVmdDogMDtyaWdodDogMDt0b3A6IDA7Ym90dG9tOiAwOyBmaWx0ZXI6IGJsdXIoMTBweCk7XCIgOnN0eWxlPVwie2hlaWdodDogc2NyZWVuSGVpZ2h0KyAncHgnfVwiPjwvaW1hZ2U+LS0+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicHVibGlzaC1pbmZvLWJveFwiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInB1Ymxpc2gtaW5mby12bG9nZXItbmFtZVwiPkB7e2l0ZW0udmxvZ2VyTmFtZX19PC90ZXh0PlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJwdWJsaXNoLWluZm8tY29udGVudFwiPnt7aXRlbS5jb250ZW50fX08L3RleHQ+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInB1Ymxpc2gtaW5mby1tdXNpYy1ib3hcIj5cblx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tZmlyZS5wbmdcIiBjbGFzcz1cImljb24tZmlyZVwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibXVpc2Mtd29yZHNcIj57e2l0ZW0udmxvZ2VyTmFtZX1955qE5Y6f5aOw5Yib5L2cPC90ZXh0PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiIHN0eWxlPVwiZmxleC1kaXJlY3Rpb246IHJvdztcIj5cblx0XHRcdFx0XHRcdDwhLS0gPGltYWdlIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2NkLXBsYXktNC5naWZcIlxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPVwid2lkdGg6IDE1MHJweDtoZWlnaHQ6IDE1MHJweDtvcGFjaXR5OiAwLjg7XCI+PC9pbWFnZT4gLS0+XG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cIiFpc0lPU1wiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tY2QucG5nXCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cInBsYXktY2RcIiBzdHlsZT1cIndpZHRoOiAxMjBycHg7aGVpZ2h0OiAxMjBycHg7XCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwiaXNJT1NcIiA6c3JjPVwiJ2h0dHBzOi8vaW1vb2MtbmV3cy5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL2ltYWdlL2NkLXBsYXktNC5naWY/dGltZT0nK3RpbWVzXCIgXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJwbGF5LWNkXCI+PC9pbWFnZT5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PCEtLSDop4bpopHlsZXnpLrlj7PkvqfnmoTmk43kvZzmjInpkq7vvIzlpLTlg48gLSDngrnotZ4gLSDor4TorrogLSDovazlj5EgLS0+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwib3BlcmF0aW9uLWJveFwiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3BlcmF0aW9uLWZhY2UtYm94XCI+XG5cdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIml0ZW0udmxvZ2VyRmFjZVwiIGNsYXNzPVwidXNlci1mYWNlXCIgQGNsaWNrPVwiZ29Vc2VySW5mb1NlZVNlZShpdGVtLnZsb2dlcklkKVwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwiIWl0ZW0uZG9JRm9sbG93VmxvZ2VyICYmIHVzZXJJZCAhPSB0aGlzVmxvZ2VySWRcIiBcblx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tZm9sbG93LnBuZ1wiIFxuXHRcdFx0XHRcdFx0QGNsaWNrPVwiZm9sbG93TWUoaXRlbS52bG9nZXJJZClcIiBcblx0XHRcdFx0XHRcdGNsYXNzPVwiZm9sbG93LW1lXCI+PC9pbWFnZT5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpa2UtYm94XCI+XG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cIiFpdGVtLmRvSUxpa2VUaGlzVmxvZ1wiIFxuXHRcdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLXVubGlrZS5wbmdcIlxuXHRcdFx0XHRcdFx0XHRAY2xpY2s9XCJsaWtlT3JEaXNsaWtlVmxvZygxKVwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiaWNvblwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cIml0ZW0uZG9JTGlrZVRoaXNWbG9nXCIgXG5cdFx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tbGlrZS5wbmdcIiBcblx0XHRcdFx0XHRcdFx0QGNsaWNrPVwibGlrZU9yRGlzbGlrZVZsb2coMClcIlxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImljb25cIj48L2ltYWdlPlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJzb21lLWNvdW50c1wiPnt7Z2V0R3JhY2VOdW1iZXIoaXRlbS5saWtlQ291bnRzKX19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbW1lbnQtYW5kLXNoYXJlLWJveFwiPlxuXHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tY29tbWVudHMucG5nXCIgQGNsaWNrPVwiY29tbWVudFRvZ2dsZVwiIGNsYXNzPVwiaWNvblwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNvbWUtY291bnRzXCI+e3tnZXRHcmFjZU51bWJlcih0aGlzVmxvZ1RvdGFsQ29tZW50Q291bnRzKX19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbW1lbnQtYW5kLXNoYXJlLWJveFwiPlxuXHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tc2hhcmUucG5nXCIgQGNsaWNrPVwic2hhcmVUb2dnbGVcIiBjbGFzcz1cImljb25cIj48L2ltYWdlPlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJzb21lLWNvdW50c1wiPuWIhuS6qzwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvY2VsbD5cblx0XHQ8L2xpc3Q+XG5cdFx0XG5cdFx0PHZpZXc+XG5cdFx0XHQ8IS0tIOW6lemDqOeql+WPo3BvcHVwIC0tPlxuXHRcdFx0PHVuaS1wb3B1cCByZWY9XCJjb21tZW50XCIgdHlwZT1cImNvbW1lbnRcIj5cblx0XHRcdFx0PHVuaS1wb3B1cC1jb21tZW50cyA6dGhpc1Zsb2dlcklkPVwidGhpc1Zsb2dlcklkXCIgOnRoaXNWbG9nSWQ9XCJ0aGlzVmxvZ0lkXCI+PC91bmktcG9wdXAtY29tbWVudHM+XG5cdFx0XHQ8L3VuaS1wb3B1cD5cblx0XHRcdDx1bmktcG9wdXAgcmVmPVwic2hhcmVcIiBiYWNrZ3JvdW5kLWNvbG9yPVwiI2ZmZlwiIHR5cGU9XCJzaGFyZVwiPlxuXHRcdFx0XHQ8dW5pLXBvcHVwLXNoYXJlIFxuXHRcdFx0XHRcdDp0aGlzVmxvZ2VySWQ9XCJ0aGlzVmxvZ2VySWRcIiBcblx0XHRcdFx0XHQ6dGhpc1Zsb2dJZD1cInRoaXNWbG9nSWRcIiBcblx0XHRcdFx0XHQ6dmxvZ1VybD1cInRoaXNWbG9nLnVybFwiXG5cdFx0XHRcdFx0OmlzUHJpdmF0ZT1cInRoaXNWbG9nLmlzUHJpdmF0ZVwiXG5cdFx0XHRcdFx0PjwvdW5pLXBvcHVwLXNoYXJlPlxuXHRcdFx0PC91bmktcG9wdXA+XG5cdFx0PC92aWV3PlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHR2YXIgYXBwID0gZ2V0QXBwKCk7XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRwcm9wczoge1xuXHRcdFx0c2NyZWVuSGVpZ2h0OiB7XG5cdFx0XHRcdGRlZmF1bHQ6IDBcblx0XHRcdH0sXG5cdFx0XHRzcmM6IHtcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHRwbGF5U3RhdHVzOiB7XG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0dmlkZW9MaXN0OiB7XG5cdFx0XHRcdGRlZmF1bHQ6IFtdXG5cdFx0XHR9LFxuXHRcdFx0cmVmcmVzaExpc3Q6IHtcblx0XHRcdFx0ZGVmYXVsdDogW11cblx0XHRcdH0sXG5cdFx0XHRwYWdpbmdMaXN0OiB7XG5cdFx0XHRcdGRlZmF1bHQ6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dGhpc1Zsb2c6IHt9LFx0XHRcdC8vIOW9k+WJjeeahOefreinhumikeWvueixoVxuXHRcdFx0XHR0aGlzVmxvZ0lkOiBcIlwiLFx0XHRcdC8vIOW9k+WJjeeahOefreinhumikeS4u+mUrmlkXG5cdFx0XHRcdHRoaXNWbG9nZXJJZDogXCJcIixcdFx0Ly8g5b2T5YmN55qE55+t6KeG6aKR5Y2a5Li755qE5Li76ZSuaWRcblx0XHRcdFx0dXNlcklkOiBcIlwiLFx0XHRcdFx0Ly8g5b2T5YmN55So5oi3aWRcblx0XHRcdFx0XG5cdFx0XHRcdFxuXHRcdFx0XHRyZWZyZXNoaW5nOiBmYWxzZSxcblx0XHRcdFx0c2hvd1JlZnJlc2hMb2FkaW5nOiBcImhpZGVcIixcblx0XHRcdFx0XG5cdFx0XHRcdHBsYXllckN1cjogMCxcblx0XHRcdFx0cGFnZTogMCxcblx0XHRcdFx0dG90YWxQYWdlOiAwLFxuXHRcdFx0XHRwbGF5ZXJMaXN0OiB0aGlzLnZpZGVvTGlzdCxcblx0XHRcdFx0dGhpc1Zsb2dUb3RhbENvbWVudENvdW50czogMCxcblx0XHRcdFx0XG5cdFx0XHRcdHZpZGVvQ29udGV4dDoge30sXG5cdFx0XHRcdFxuXHRcdFx0XHRjdXJyZW50SW5kZXg6IDAsXG5cdFx0XHRcdGNvbnRlbnRPZmZzZXRZOiAwLFxuXHRcdFx0XHRcblx0XHRcdFx0dGltZXM6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuXHRcdFx0XHRcblx0XHRcdFx0b2JqZWN0Rml0OiBcImZpbGxcIixcblx0XHRcdFx0aXNJT1M6IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtID09IFwiaW9zXCJcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNyZWF0ZWQoKSB7XG5cdFx0XHRcblx0XHRcdGlmKCF0aGlzLmlzSU9TKSB7XG5cdFx0XHRcdHRoaXMub2JqZWN0Rml0ID0gXCJjb3ZlclwiO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR2YXIgbXlVc2VySW5mbyA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpO1xuXHRcdFx0aWYgKG15VXNlckluZm8gIT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnVzZXJJZCA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpLmlkO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyDmn6Xor6LpppbpobXnn63op4bpopHliJfooahcblx0XHRcdHRoaXMuZGlzcGxheVZpZGVvUGFnaW5nKHRoaXMucGFnZSArIDEsIHRydWUpO1xuXHRcdFx0XG5cdFx0XHR2YXIgdmlkZW9Db250ZXh0ID0gdW5pLmNyZWF0ZVZpZGVvQ29udGV4dCgnbXlWaWRlbycpO1xuXHRcdFx0dGhpcy52aWRlb0NvbnRleHQgPSB2aWRlb0NvbnRleHQ7XG5cdFx0fSxcblx0XHR3YXRjaDoge1xuXHRcdFx0cmVmcmVzaExpc3QodmFsdWUpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIG5ld0xpc3QgPSB2YWx1ZTtcblx0XHRcdFx0aWYgKG5ld0xpc3QgIT0gbnVsbCAmJiBuZXdMaXN0ICE9IHVuZGVmaW5lZCAmJiBuZXdMaXN0Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gbmV3TGlzdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0Ly8g6YeN572uXG5cdFx0XHRcdHRoaXMucGxheWVyQ3VyID0gMDtcblx0XHRcdFx0dGhpcy5jdXJyZW50SW5kZXggPSAwO1xuXHRcdFx0XHR0aGlzLmNvbnRlbnRPZmZzZXRZID0wO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0cGxheVN0YXR1czogZnVuY3Rpb24odmFsKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoIXZhbCkge1xuXHRcdFx0XHRcdG1lLnZpZGVvQ29udGV4dC5wYXVzZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1lLnZpZGVvQ29udGV4dC5wbGF5KCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdC8vIOaKiui2hei/hzEwMDDmiJYxMDAwMOeahOaVsOWtl+iwg+aVtO+8jOavlOWmgjEuM2svNi44d1xuXHRcdFx0Z2V0R3JhY2VOdW1iZXIobnVtKSB7XG5cdFx0XHRcdHJldHVybiBnZXRBcHAoKS5ncmFjZU51bWJlcihudW0pO1xuXHRcdFx0fSxcblx0XHRcdGZyZXNoQ29tbWVudENvdW50cygpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcblx0XHRcdFx0dmFyIGN1cnJlbnRJbmRleCA9IG1lLnBsYXllckN1cjtcblx0XHRcdFx0dmFyIHZsb2cgPSBtZS5wbGF5ZXJMaXN0W2N1cnJlbnRJbmRleF07XG5cdFx0XHRcdHZhciB2bG9nSWQgPSB2bG9nLnZsb2dJZDtcblx0XHRcdFx0XG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRcdFx0dXJsOiBzZXJ2ZXJVcmwgKyBcIi9jb21tZW50L2NvdW50cz92bG9nSWQ9XCIgKyB2bG9nSWQsXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXN1bHQpIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0XHRcdFx0bWUudGhpc1Zsb2dUb3RhbENvbWVudENvdW50cyA9IHJlc3VsdC5kYXRhLmRhdGE7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRtZS50aGlzVmxvZ1RvdGFsQ29tZW50Q291bnRzID0gMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdGxpa2VPckRpc2xpa2VWbG9nKGlzTGlrZSkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHRpZiAoaXNMaWtlID09IDEpIHtcblx0XHRcdFx0XHQvLyDllpzmrKIv54K56LWe6KeG6aKRXG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR2YXIgbXlVc2VySW5mbyA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpO1xuXHRcdFx0XHRcdGlmIChteVVzZXJJbmZvID09IG51bGwpIHtcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMCxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi6K+355m75b2VflwiLFxuXHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0XHRcdHVybDogXCIuLi9sb2dpblJlZ2lzdC9sb2dpblJlZ2lzdFwiLFxuXHRcdFx0XHRcdFx0XHRhbmltYXRpb25UeXBlOiBcInNsaWRlLWluLWJvdHRvbVwiLFxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzKCkge1xuXHRcdFx0XHRcdFx0XHRcdG1lLmxvZ2luV29yZHMgPSBcIuivt+eZu+W9lVwiXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2YXIgdXNlcklkID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCkuaWQ7XG5cdFx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcblx0XHRcdFx0XHR2YXIgY3VycmVudEluZGV4ID0gbWUucGxheWVyQ3VyO1xuXHRcdFx0XHRcdHZhciB2bG9nID0gbWUucGxheWVyTGlzdFtjdXJyZW50SW5kZXhdO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRcdFx0XHRoZWFkZXI6IHtcblx0XHRcdFx0XHRcdFx0aGVhZGVyVXNlcklkOiB1c2VySWQsXG5cdFx0XHRcdFx0XHRcdGhlYWRlclVzZXJUb2tlbjogYXBwLmdldFVzZXJTZXNzaW9uVG9rZW4oKVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHVybDogc2VydmVyVXJsICsgXCIvdmxvZy9saWtlP3VzZXJJZD1cIiArIHVzZXJJZCArIFwiJnZsb2dlcklkPVwiICsgdmxvZy52bG9nZXJJZCArIFwiJnZsb2dJZD1cIiArIHZsb2cudmxvZ0lkLFxuXHRcdFx0XHRcdFx0c3VjY2VzcyhyZXN1bHQpIHtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWUucmVMaWtlUGxheUxpc3QodmxvZy52bG9nSWQpO1xuXHRcdFx0XHRcdFx0XHRcdG1lLnJlZnJlc2hWbG9nQ291bnRzKCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzdWx0LmRhdGEubXNnLFxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMFxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXNMaWtlID09IDApIHtcblx0XHRcdFx0XHQvLyDlj5bmtojllpzmrKIv54K56LWe6KeG6aKRXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dmFyIG15VXNlckluZm8gPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKTtcblx0XHRcdFx0XHRpZiAobXlVc2VySW5mbyA9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDAsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuivt+eZu+W9lX5cIixcblx0XHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCJcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdFx0XHR1cmw6IFwiLi4vbG9naW5SZWdpc3QvbG9naW5SZWdpc3RcIixcblx0XHRcdFx0XHRcdFx0YW5pbWF0aW9uVHlwZTogXCJzbGlkZS1pbi1ib3R0b21cIixcblx0XHRcdFx0XHRcdFx0c3VjY2VzcygpIHtcblx0XHRcdFx0XHRcdFx0XHRtZS5sb2dpbldvcmRzID0gXCLor7fnmbvlvZVcIlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFyIHVzZXJJZCA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpLmlkO1xuXHRcdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdFx0dmFyIGN1cnJlbnRJbmRleCA9IG1lLnBsYXllckN1cjtcblx0XHRcdFx0XHR2YXIgdmxvZyA9IG1lLnBsYXllckxpc3RbY3VycmVudEluZGV4XTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0XHRcdFx0aGVhZGVyOiB7XG5cdFx0XHRcdFx0XHRcdGhlYWRlclVzZXJJZDogdXNlcklkLFxuXHRcdFx0XHRcdFx0XHRoZWFkZXJVc2VyVG9rZW46IGFwcC5nZXRVc2VyU2Vzc2lvblRva2VuKClcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR1cmw6IHNlcnZlclVybCArIFwiL3Zsb2cvdW5saWtlP3VzZXJJZD1cIiArIHVzZXJJZCArIFwiJnZsb2dlcklkPVwiICsgdmxvZy52bG9nZXJJZCArIFwiJnZsb2dJZD1cIiArIHZsb2cudmxvZ0lkLFxuXHRcdFx0XHRcdFx0c3VjY2VzcyhyZXN1bHQpIHtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWUucmVEaXNsaWtlUGxheUxpc3QodmxvZy52bG9nSWQpO1xuXHRcdFx0XHRcdFx0XHRcdG1lLnJlZnJlc2hWbG9nQ291bnRzKCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzdWx0LmRhdGEubXNnLFxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMFxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8vIOWWnOasoi/ngrnotZ7nmoRsaXN06YeN5paw6K6+572uXG5cdFx0XHRyZUxpa2VQbGF5TGlzdCh2bG9nSWQpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHBsYXllckxpc3QgPSBtZS5wbGF5ZXJMaXN0O1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8g5YWz5rOo5Lul5ZCO77yM5b6q546v5b2T5YmNcGxheWVyTGlzdO+8jOS/ruaUueWvueW6lOeyieS4neWFs+ezu+eahGRvSUZvbGxvd1Zsb2dlcuaUueS4unRydWVcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAgOyBpIDwgcGxheWVyTGlzdC5sZW5ndGggOyBpICsrKSB7XG5cdFx0XHRcdFx0dmFyIHZsb2cgPSBwbGF5ZXJMaXN0W2ldO1xuXHRcdFx0XHRcdGlmICh2bG9nLnZsb2dJZCA9PSB2bG9nSWQpIHtcblx0XHRcdFx0XHRcdHZsb2cuZG9JTGlrZVRoaXNWbG9nID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHBsYXllckxpc3Quc3BsaWNlKGksMSwgdmxvZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdG1lLnBsYXllckxpc3QgPSBwbGF5ZXJMaXN0O1xuXHRcdFx0fSxcblx0XHRcdHJlRGlzbGlrZVBsYXlMaXN0KHZsb2dJZCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgcGxheWVyTGlzdCA9IG1lLnBsYXllckxpc3Q7XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyDlhbPms6jku6XlkI7vvIzlvqrnjq/lvZPliY1wbGF5ZXJMaXN077yM5L+u5pS55a+55bqU57KJ5Lid5YWz57O755qEZG9JRm9sbG93VmxvZ2Vy5pS55Li6dHJ1ZVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCA7IGkgPCBwbGF5ZXJMaXN0Lmxlbmd0aCA7IGkgKyspIHtcblx0XHRcdFx0XHR2YXIgdmxvZyA9IHBsYXllckxpc3RbaV07XG5cdFx0XHRcdFx0aWYgKHZsb2cudmxvZ0lkID09IHZsb2dJZCkge1xuXHRcdFx0XHRcdFx0dmxvZy5kb0lMaWtlVGhpc1Zsb2cgPSBmYWxzZTtcblx0XHRcdFx0XHRcdHBsYXllckxpc3Quc3BsaWNlKGksMSwgdmxvZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdG1lLnBsYXllckxpc3QgPSBwbGF5ZXJMaXN0O1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Ly8g5YWz5rOo5ZCO55qEbGlzdOmHjeaWsOiuvue9rlxuXHRcdFx0cmVGb2xsb3dQbGF5TGlzdCh2bG9nZXJJZCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgcGxheWVyTGlzdCA9IG1lLnBsYXllckxpc3Q7XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyDlhbPms6jku6XlkI7vvIzlvqrnjq/lvZPliY1wbGF5ZXJMaXN077yM5L+u5pS55a+55bqU57KJ5Lid5YWz57O755qEZG9JRm9sbG93VmxvZ2Vy5pS55Li6dHJ1ZVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCA7IGkgPCBwbGF5ZXJMaXN0Lmxlbmd0aCA7IGkgKyspIHtcblx0XHRcdFx0XHR2YXIgdmxvZyA9IHBsYXllckxpc3RbaV07XG5cdFx0XHRcdFx0aWYgKHZsb2cudmxvZ2VySWQgPT0gdmxvZ2VySWQpIHtcblx0XHRcdFx0XHRcdHZsb2cuZG9JRm9sbG93VmxvZ2VyID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0cGxheWVyTGlzdC5zcGxpY2UoaSwxLCB2bG9nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0bWUucGxheWVyTGlzdCA9IHBsYXllckxpc3Q7XG5cdFx0XHR9LFxuXHRcdFx0Ly8g5Y+W5YWz5ZCO55qEbGlzdOmHjeaWsOiuvue9rlxuXHRcdFx0cmVDYW5jZWxQbGF5TGlzdCh2bG9nZXJJZCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgcGxheWVyTGlzdCA9IG1lLnBsYXllckxpc3Q7XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyDlhbPms6jku6XlkI7vvIzlvqrnjq/lvZPliY1wbGF5ZXJMaXN077yM5L+u5pS55a+55bqU57KJ5Lid5YWz57O755qEZG9JRm9sbG93VmxvZ2Vy5pS55Li6dHJ1ZVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCA7IGkgPCBwbGF5ZXJMaXN0Lmxlbmd0aCA7IGkgKyspIHtcblx0XHRcdFx0XHR2YXIgdmxvZyA9IHBsYXllckxpc3RbaV07XG5cdFx0XHRcdFx0aWYgKHZsb2cudmxvZ2VySWQgPT0gdmxvZ2VySWQpIHtcblx0XHRcdFx0XHRcdHZsb2cuZG9JRm9sbG93VmxvZ2VyID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRwbGF5ZXJMaXN0LnNwbGljZShpLDEsIHZsb2cpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gcGxheWVyTGlzdDtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0Ly8g5YWz5rOo5Y2a5Li7XG5cdFx0XHRmb2xsb3dNZSh2bG9nZXJJZCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgbXlVc2VySW5mbyA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpO1xuXHRcdFx0XHRpZiAobXlVc2VySW5mbyA9PSBudWxsKSB7XG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMCxcblx0XHRcdFx0XHRcdHRpdGxlOiBcIuivt+eZu+W9lX5cIixcblx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdFx0dXJsOiBcIi4uL2xvZ2luUmVnaXN0L2xvZ2luUmVnaXN0XCIsXG5cdFx0XHRcdFx0XHRhbmltYXRpb25UeXBlOiBcInNsaWRlLWluLWJvdHRvbVwiLFxuXHRcdFx0XHRcdFx0c3VjY2VzcygpIHtcblx0XHRcdFx0XHRcdFx0bWUubG9naW5Xb3JkcyA9IFwi6K+355m75b2VXCJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIHVzZXJJZCA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpLmlkO1xuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdFx0XHRoZWFkZXI6IHtcblx0XHRcdFx0XHRcdGhlYWRlclVzZXJJZDogdXNlcklkLFxuXHRcdFx0XHRcdFx0aGVhZGVyVXNlclRva2VuOiBhcHAuZ2V0VXNlclNlc3Npb25Ub2tlbigpXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR1cmw6IHNlcnZlclVybCArIFwiL2ZhbnMvZm9sbG93P215SWQ9XCIgKyB1c2VySWQgKyBcIiZ2bG9nZXJJZD1cIiArIHZsb2dlcklkLFxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRcdG1lLnJlRm9sbG93UGxheUxpc3QodmxvZ2VySWQpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHJlc3VsdC5kYXRhLm1zZyxcblx0XHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdGdvVXNlckluZm9TZWVTZWUodXNlcklkKSB7XG5cdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcInVzZXJQYWdlSWRcIiwgdXNlcklkKTtcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdHVybDogXCIvcGFnZXMvbWUvdmxvZ2VySW5mbz91c2VyUGFnZUlkPVwiICsgdXNlcklkXG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRsaXN0U2Nyb2xsKGUpIHtcblx0XHRcdFx0aWYoZS5jb250ZW50T2Zmc2V0LnkgPiAwKSB7XG5cdFx0XHRcdFx0dGhpcy4kZW1pdChcInNob3dMb2FkaW5nXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRkb3dubG9hZFZsb2coKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdHZhciBjdXJyZW50SW5kZXggPSBtZS5wbGF5ZXJDdXI7XG5cdFx0XHRcdHZhciB2bG9nID0gbWUucGxheWVyTGlzdFtjdXJyZW50SW5kZXhdO1xuXHRcdFx0XHR2YXIgcGVuZGluZ0xlbmd0aCA9IHZsb2cudXJsO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Y29weUxpbmsoKSB7XG5cdFx0XHRcdHZhciBtZSA9IG1lO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0c2hvd1FSQ29kZSgpIHtcblx0XHRcdFx0dmFyIG1lID0gbWU7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRjaGFuZ2VWbG9nVG9Qcml2YXRlKCkge1xuXHRcdFx0XHR2YXIgbWUgPSBtZTtcblx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcblx0XHRcdC8vIOS4i+aLieWIt+aWsOeahOi/h+eoi+S4re+8jOaUueWPmOWktOmDqHRhYuaYvuekuueahOWtl+agt1xuXHRcdFx0b25wdWxsaW5nZG93bihlKSB7XG5cdFx0XHR9LFxuXHRcdFx0b25yZWZyZXNoKGUpIHtcblx0XHRcdFx0dGhpcy5yZWZyZXNoaW5nID0gdHJ1ZTtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5yZWZyZXNoaW5nID0gZmFsc2U7XG5cdFx0XHRcdFx0dGhpcy4kZW1pdChcImhpZGVMb2FkaW5nXCIpO1xuXHRcdFx0XHRcdHRoaXMucmVmcmVzaFRleHQgPSAn4oaTIFB1bGwgVG8gUmVmcmVzaCdcblx0XHRcdFx0fSwgMzAwKVxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0Ly8g6YCa6L+HbGlzdOe7hOS7tueahOS4i+aLieWIt+aWsOinpuWPkeW9k+WJjeaJgOWcqOmhtemdoueahOS4i+aLieWIt+aWsFxuXHRcdFx0XHR1bmkuc3RhcnRQdWxsRG93blJlZnJlc2goKTtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdG9ucGxheTogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAodW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT0gJ2lvcycpIHtcblx0XHRcdFx0XHR0aGlzLmRvcGxheSgwLjEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0b25lcnJvcjogZnVuY3Rpb24oZXJyKSB7XG5cdFx0XHR9LFxuXHRcdFx0dGltZXVwZGF0ZTogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5kZXRhaWwuY3VycmVudFRpbWUgPiAwLjIpIHtcblx0XHRcdFx0XHR0aGlzLmRvcGxheShlLmRldGFpbC5jdXJyZW50VGltZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdHBsYXlPclBhdXNlKCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgcGxheVN0YXR1cyA9IHRoaXMucGxheVN0YXR1cztcblx0XHRcdFx0XG5cdFx0XHRcdGlmICghcGxheVN0YXR1cykge1xuXHRcdFx0XHRcdG1lLnZpZGVvQ29udGV4dC5wYXVzZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1lLnZpZGVvQ29udGV4dC5wbGF5KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5wbGF5U3RhdHVzID0gIXBsYXlTdGF0dXM7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdHNjcm9sbDogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRsZXQgb3JpZ2luYWxJbmRleCA9IHRoaXMuY3VycmVudEluZGV4O1xuXHRcdFx0XHRsZXQgaXNOZXh0ID0gZmFsc2U7XG5cdFx0XHRcdGlmIChlLmNvbnRlbnRPZmZzZXQueSA8IHRoaXMuY29udGVudE9mZnNldFkpIHtcblx0XHRcdFx0XHRpc05leHQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuY29udGVudE9mZnNldFkgPSBlLmNvbnRlbnRPZmZzZXQueTtcblx0XHRcdFx0XG5cdFx0XHRcdHZhciBudW0gPSB0aGlzLnBsYXllckxpc3QubGVuZ3RoO1xuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy5jdXJyZW50SW5kZXggPSBNYXRoLnJvdW5kKE1hdGguYWJzKHRoaXMuY29udGVudE9mZnNldFkpIC8gKGUuY29udGVudFNpemUuaGVpZ2h0IC8gbnVtKSk7XG5cdFx0XHRcdHRoaXMub25jaGFuZ2UodGhpcy5jdXJyZW50SW5kZXgpO1xuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy50aW1lcyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHRcdFx0XHQvLyDliKTmlq3lpoLmnpzop4bpopHliJfooajmgLvplb/luqYt5b2T5YmN5LiL5qCH77yM5bCR5LqOM+S4qu+8jOWImeW8gOWni+WIhumhteafpeivouWQjue7reeahOinhumike+8jOW5tuS4lOi/veWKoOWIsOeOsOaciWxpc3TkuK1cblx0XHRcdFx0aWYgKCh0aGlzLnBsYXllckxpc3QubGVuZ3RoIC0gdGhpcy5jdXJyZW50SW5kZXgpIDwgMykge1xuXHRcdFx0XHRcdC8vIOWmguaenOimgeWIhumhteeahHBhZ2XlkozmgLvmlbB0b3RhbFBhZ2Xnm7jnrYnvvIzliJnmsqHmnInmm7TlpJpcblx0XHRcdFx0XHRpZiAodGhpcy5wYWdlID09IHRoaXMudG90YWxQYWdlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuZGlzcGxheVZpZGVvUGFnaW5nKHRoaXMucGFnZSArIDEsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8vIOWIhumhteafpeivouaWsOeahGxpc3TvvIzlubbkuJTov73liqDliLDnjrDmnIlsaXN05LitXG5cdFx0XHRkaXNwbGF5VmlkZW9QYWdpbmcocGFnZSwgbmVlZENsZWFyTGlzdCkge1xuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHQvLyDmn6Xor6LpppbpobXnn63op4bpopHliJfooahcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIG15VXNlckluZm8gPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKTtcblx0XHRcdFx0dmFyIHVzZXJJZCA9IFwiXCI7XG5cdFx0XHRcdGlmIChteVVzZXJJbmZvICE9IG51bGwpIHtcblx0XHRcdFx0XHR1c2VySWQgPSBteVVzZXJJbmZvLmlkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRcdFx0dXJsOiBzZXJ2ZXJVcmwgKyBcIi92bG9nL2luZGV4TGlzdD91c2VySWQ9XCIgKyB1c2VySWQgKyBcIiZwYWdlPVwiICsgcGFnZSArIFwiJnBhZ2VTaXplPTEwXCIsXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXN1bHQpIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0XHRcdFx0dmFyIHZsb2dMaXN0ID0gcmVzdWx0LmRhdGEuZGF0YS5yb3dzO1xuXHRcdFx0XHRcdFx0XHR2YXIgdG90YWxQYWdlID0gcmVzdWx0LmRhdGEuZGF0YS50b3RhbDtcblx0XHRcdFx0XHRcdFx0Ly8gbWUucGxheWVyTGlzdCA9IHZsb2dMaXN0O1xuXHRcdFx0XHRcdFx0XHRpZiAobmVlZENsZWFyTGlzdCkge1xuXHRcdFx0XHRcdFx0XHRcdG1lLnBsYXllckxpc3QgPSBbXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gbWUucGxheWVyTGlzdC5jb25jYXQodmxvZ0xpc3QpO1xuXHRcdFx0XHRcdFx0XHRtZS5wYWdlID0gcGFnZTtcblx0XHRcdFx0XHRcdFx0bWUudG90YWxQYWdlID0gdG90YWxQYWdlO1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0aWYgKG5lZWRDbGVhckxpc3QpIHtcblx0XHRcdFx0XHRcdFx0XHRtZS5zZXRUaGlzVmxvZ0luZm8oKTtcblx0XHRcdFx0XHRcdFx0XHRtZS5mcmVzaENvbW1lbnRDb3VudHMoKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHJlc3VsdC5kYXRhLm1zZyxcblx0XHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y29tcGxldGUoKSB7XG5cdFx0XHRcdFx0XHR1bmkuc3RvcFB1bGxEb3duUmVmcmVzaCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRkb3BsYXk6IGZ1bmN0aW9uKHRpbWUpIHtcblx0XHRcdFx0aWYgKHRpbWUgPiAwKSB7XG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXJMaXN0W3RoaXMucGxheWVyQ3VyXS5wbGF5ID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdG9uY2hhbmdlOiBmdW5jdGlvbihpbmRleCkge1xuXHRcdFx0XHRpZiAoaW5kZXggIT0gdGhpcy5wbGF5ZXJDdXIpIHtcblx0XHRcdFx0XHR0aGlzLnBsYXllckxpc3RbdGhpcy5wbGF5ZXJDdXJdLnBsYXkgPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLnBsYXllckN1ciA9IGluZGV4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHR0aGlzLnJlZnJlc2hWbG9nQ291bnRzKCk7XG5cdFx0XHRcdHRoaXMuc2V0VGhpc1Zsb2dJbmZvKCk7XG5cdFx0XHRcdHRoaXMuZnJlc2hDb21tZW50Q291bnRzKCk7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHQvLyDorr7nva7lvZPliY12bG9n55qE5L+h5oGvXG5cdFx0XHRzZXRUaGlzVmxvZ0luZm8oKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdHZhciBjdXJyZW50SW5kZXggPSBtZS5wbGF5ZXJDdXI7XG5cdFx0XHRcdHZhciB2bG9nID0gbWUucGxheWVyTGlzdFtjdXJyZW50SW5kZXhdO1xuXHRcdFx0XHR0aGlzLnRoaXNWbG9nID0gdmxvZztcblx0XHRcdFx0dGhpcy50aGlzVmxvZ0lkID0gdmxvZy52bG9nSWQ7XG5cdFx0XHRcdHRoaXMudGhpc1Zsb2dlcklkID0gdmxvZy52bG9nZXJJZDtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdHJlZnJlc2hWbG9nQ291bnRzKCkge1xuXHRcdFx0XHQvLyDmn6Xor6LlvZPliY3ngrnotZ7mlbDvvIzph43mlrDotYvlgLznu5nlvZPliY3op4bpopFcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcblx0XHRcdFx0dmFyIGN1cnJlbnRJbmRleCA9IG1lLnBsYXllckN1cjtcblx0XHRcdFx0dmFyIHZsb2cgPSBtZS5wbGF5ZXJMaXN0W2N1cnJlbnRJbmRleF07XG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0XHRcdHVybDogc2VydmVyVXJsICsgXCIvdmxvZy90b3RhbExpa2VkQ291bnRzP3Zsb2dJZD1cIiArIHZsb2cudmxvZ0lkLFxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0LmRhdGEuc3RhdHVzID09IDIwMCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgY291bnRzID0gcmVzdWx0LmRhdGEuZGF0YTtcblx0XHRcdFx0XHRcdFx0bWUucmVDaGFuZ2VWbG9nTGlrZWRDb3VudHNJblBsYXlMaXN0KHZsb2cudmxvZ0lkLCBjb3VudHMpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRyZUNoYW5nZVZsb2dMaWtlZENvdW50c0luUGxheUxpc3QodmxvZ0lkLCBjb3VudHMpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHBsYXllckxpc3QgPSBtZS5wbGF5ZXJMaXN0O1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8g5YWz5rOo5Lul5ZCO77yM5b6q546v5b2T5YmNcGxheWVyTGlzdO+8jOS/ruaUueWvueW6lOeyieS4neWFs+ezu+eahGRvSUZvbGxvd1Zsb2dlcuaUueS4unRydWVcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAgOyBpIDwgcGxheWVyTGlzdC5sZW5ndGggOyBpICsrKSB7XG5cdFx0XHRcdFx0dmFyIHZsb2cgPSBwbGF5ZXJMaXN0W2ldO1xuXHRcdFx0XHRcdGlmICh2bG9nLnZsb2dJZCA9PSB2bG9nSWQpIHtcblx0XHRcdFx0XHRcdHZsb2cubGlrZUNvdW50cyA9IGNvdW50cztcblx0XHRcdFx0XHRcdHBsYXllckxpc3Quc3BsaWNlKGksMSwgdmxvZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdG1lLnBsYXllckxpc3QgPSBwbGF5ZXJMaXN0O1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Y29tbWVudFRvZ2dsZSgpIHtcblx0XHRcdFx0dGhpcy4kcmVmcy5jb21tZW50Lm9wZW4oKTtcblx0XHRcdFx0dW5pLmhpZGVUYWJCYXIoe1xuXHRcdFx0XHRcdGFuaW1hdGlvbjogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRzaGFyZVRvZ2dsZSgpIHtcblx0XHRcdFx0dGhpcy4kcmVmcy5zaGFyZS5vcGVuKCk7XG5cdFx0XHRcdHVuaS5oaWRlVGFiQmFyKHtcblx0XHRcdFx0XHRhbmltYXRpb246IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///245\n");

/***/ }),
/* 246 */
/*!**************************************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/components/videoComp.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoComp.vue?vue&type=style&index=0&lang=css& */ 247);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 247 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ASUS/Desktop/MyLive-Dev/components/videoComp.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".icon": {
    "": {
      "width": [
        "80rpx",
        0,
        0,
        0
      ],
      "height": [
        "80rpx",
        0,
        0,
        0
      ],
      "opacity": [
        0.9,
        0,
        0,
        0
      ]
    }
  },
  ".user-face": {
    "": {
      "width": [
        "100rpx",
        0,
        0,
        1
      ],
      "height": [
        "100rpx",
        0,
        0,
        1
      ],
      "borderRadius": [
        "100rpx",
        0,
        0,
        1
      ]
    }
  },
  ".play-cd": {
    "": {
      "width": [
        "150rpx",
        0,
        0,
        2
      ],
      "height": [
        "150rpx",
        0,
        0,
        2
      ],
      "opacity": [
        0.8,
        0,
        0,
        2
      ]
    }
  },
  ".refresh-info-txt": {
    "": {
      "color": [
        "#F1F1F1",
        0,
        0,
        3
      ],
      "textAlign": [
        "center",
        0,
        0,
        3
      ],
      "fontSize": [
        "12",
        0,
        0,
        3
      ]
    }
  },
  ".publish-info-box": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        4
      ],
      "bottom": [
        "200rpx",
        0,
        0,
        4
      ],
      "left": [
        0,
        0,
        0,
        4
      ],
      "right": [
        0,
        0,
        0,
        4
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        4
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        4
      ],
      "flexDirection": [
        "row",
        0,
        0,
        4
      ],
      "justifyContent": [
        "space-between",
        0,
        0,
        4
      ],
      "alignItems": [
        "center",
        0,
        0,
        4
      ]
    }
  },
  ".publish-info-vloger-name": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        5
      ],
      "fontSize": [
        "40rpx",
        0,
        0,
        5
      ],
      "fontWeight": [
        "600",
        0,
        0,
        5
      ],
      "paddingTop": [
        "10rpx",
        0,
        0,
        5
      ],
      "paddingRight": [
        "10rpx",
        0,
        0,
        5
      ],
      "paddingBottom": [
        "10rpx",
        0,
        0,
        5
      ],
      "paddingLeft": [
        "10rpx",
        0,
        0,
        5
      ]
    }
  },
  ".publish-info-music-box": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        6
      ],
      "alignItems": [
        "center",
        0,
        0,
        6
      ]
    }
  },
  ".publish-info-content": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        7
      ],
      "fontSize": [
        "28rpx",
        0,
        0,
        7
      ],
      "fontWeight": [
        "400",
        0,
        0,
        7
      ],
      "paddingTop": [
        "10rpx",
        0,
        0,
        7
      ],
      "paddingRight": [
        "10rpx",
        0,
        0,
        7
      ],
      "paddingBottom": [
        "10rpx",
        0,
        0,
        7
      ],
      "paddingLeft": [
        "10rpx",
        0,
        0,
        7
      ],
      "lines": [
        5,
        0,
        0,
        7
      ],
      "width": [
        "520rpx",
        0,
        0,
        7
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        7
      ]
    }
  },
  ".icon-fire": {
    "": {
      "width": [
        "36rpx",
        0,
        0,
        8
      ],
      "height": [
        "36rpx",
        0,
        0,
        8
      ]
    }
  },
  ".muisc-words": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        9
      ],
      "fontSize": [
        "28rpx",
        0,
        0,
        9
      ],
      "paddingTop": [
        "10rpx",
        0,
        0,
        9
      ],
      "paddingRight": [
        "10rpx",
        0,
        0,
        9
      ],
      "paddingBottom": [
        "10rpx",
        0,
        0,
        9
      ],
      "paddingLeft": [
        "10rpx",
        0,
        0,
        9
      ],
      "width": [
        "400rpx",
        0,
        0,
        9
      ]
    }
  },
  ".some-counts": {
    "": {
      "fontSize": [
        "24rpx",
        0,
        0,
        10
      ],
      "fontWeight": [
        "500",
        0,
        0,
        10
      ],
      "textAlign": [
        "center",
        0,
        0,
        10
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        10
      ],
      "marginTop": [
        "2rpx",
        0,
        0,
        10
      ]
    }
  },
  ".operation-box": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        11
      ],
      "top": [
        0,
        0,
        0,
        11
      ],
      "bottom": [
        0,
        0,
        0,
        11
      ],
      "right": [
        0,
        0,
        0,
        11
      ],
      "alignItems": [
        "center",
        0,
        0,
        11
      ],
      "justifyContent": [
        "center",
        0,
        0,
        11
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        11
      ]
    }
  },
  ".operation-face-box": {
    "": {
      "borderRadius": [
        "100rpx",
        0,
        0,
        12
      ],
      "borderColor": [
        "#FFFFFF",
        0,
        0,
        12
      ],
      "borderWidth": [
        "3rpx",
        0,
        0,
        12
      ]
    }
  },
  ".follow-me": {
    "": {
      "width": [
        "40rpx",
        0,
        0,
        13
      ],
      "height": [
        "40rpx",
        0,
        0,
        13
      ],
      "borderRadius": [
        "10",
        0,
        0,
        13
      ],
      "position": [
        "relative",
        0,
        0,
        13
      ],
      "top": [
        "-20rpx",
        0,
        0,
        13
      ]
    }
  },
  ".like-box": {
    "": {
      "flexDirection": [
        "column",
        0,
        0,
        14
      ],
      "alignItems": [
        "center",
        0,
        0,
        14
      ],
      "marginTop": [
        "30rpx",
        0,
        0,
        14
      ]
    }
  },
  ".comment-and-share-box": {
    "": {
      "flexDirection": [
        "column",
        0,
        0,
        15
      ],
      "alignItems": [
        "center",
        0,
        0,
        15
      ],
      "marginTop": [
        "45rpx",
        0,
        0,
        15
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 248 */
/*!***********************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/components/videoFollowComp.vue ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _videoFollowComp_vue_vue_type_template_id_7e58bf50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videoFollowComp.vue?vue&type=template&id=7e58bf50& */ 249);\n/* harmony import */ var _videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoFollowComp.vue?vue&type=script&lang=js& */ 251);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./videoFollowComp.vue?vue&type=style&index=0&lang=css& */ 253).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./videoFollowComp.vue?vue&type=style&index=0&lang=css& */ 253).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _videoFollowComp_vue_vue_type_template_id_7e58bf50___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _videoFollowComp_vue_vue_type_template_id_7e58bf50___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"77881fa0\",\n  false,\n  _videoFollowComp_vue_vue_type_template_id_7e58bf50___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/videoFollowComp.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEg7QUFDNUg7QUFDbUU7QUFDTDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGlFQUF3RDtBQUM1RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsaUVBQXdEO0FBQ2pIOztBQUVBOztBQUVBO0FBQ3NLO0FBQ3RLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSwwRkFBTTtBQUNSLEVBQUUsbUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyNDguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3ZpZGVvRm9sbG93Q29tcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2U1OGJmNTAmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi92aWRlb0ZvbGxvd0NvbXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi92aWRlb0ZvbGxvd0NvbXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdmlkZW9Gb2xsb3dDb21wLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi92aWRlb0ZvbGxvd0NvbXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiNzc4ODFmYTBcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy92aWRlb0ZvbGxvd0NvbXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///248\n");

/***/ }),
/* 249 */
/*!******************************************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/components/videoFollowComp.vue?vue&type=template&id=7e58bf50& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_template_id_7e58bf50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoFollowComp.vue?vue&type=template&id=7e58bf50& */ 250);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_template_id_7e58bf50___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_template_id_7e58bf50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_template_id_7e58bf50___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_template_id_7e58bf50___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 250 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ASUS/Desktop/MyLive-Dev/components/videoFollowComp.vue?vue&type=template&id=7e58bf50& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniPopup:
      __webpack_require__(/*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 193)
        .default,
    uniPopupComments:
      __webpack_require__(/*! @/uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue */ 206)
        .default,
    uniPopupShare:
      __webpack_require__(/*! @/uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue */ 214)
        .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticStyle: { flex: "1" } }, [
    _c(
      "list",
      {
        attrs: { pagingEnabled: true, showScrollbar: false, scrollable: true },
        on: { scroll: _vm.listScroll, scrollend: _vm.scroll },
      },
      [
        _c(
          "refresh",
          {
            attrs: { display: _vm.refreshing ? "show" : "hide" },
            on: { pullingdown: _vm.onpullingdown, refresh: _vm.onrefresh },
          },
          [
            _c("u-text", {
              staticClass: ["refresh-info-txt"],
              appendAsTree: true,
              attrs: { append: "tree" },
            }),
            _c("loading-indicator"),
          ]
        ),
        _vm._l(_vm.playerList, function (item, index) {
          return _c(
            "cell",
            {
              key: index,
              style: { height: _vm.screenHeight + "px" },
              appendAsTree: true,
              attrs: { recycle: false, dataIndex: index, append: "tree" },
            },
            [
              _vm.playerCur === index
                ? _c("u-video", {
                    ref: "myFollowVideo",
                    refInFor: true,
                    staticStyle: { width: "750rpx" },
                    style: { height: _vm.screenHeight + "px" },
                    attrs: {
                      id: "myFollowVideo",
                      objectFit: item.width >= item.height ? "contain" : "fill",
                      src: item.url,
                      controls: false,
                      enableProgressGesture: false,
                      loop: true,
                      autoplay: true,
                      showLoading: "true",
                    },
                    on: {
                      click: _vm.playOrPause,
                      play: _vm.onplay,
                      error: _vm.onerror,
                      timeupdate: _vm.timeupdate,
                    },
                  })
                : _vm._e(),
              !item.play
                ? _c("u-image", {
                    staticStyle: { width: "750rpx", filter: "blur(10px)" },
                    style: { height: _vm.screenHeight + "px" },
                    attrs: {
                      lazyLoad: true,
                      fadeShow: false,
                      src: item.cover,
                      mode:
                        item.width >= item.height ? "aspectFit" : "scaleToFill",
                    },
                  })
                : _vm._e(),
              _c("view", { staticClass: ["publish-info-box"] }, [
                _c("view", {}, [
                  _c(
                    "u-text",
                    {
                      staticClass: ["publish-info-vloger-name"],
                      appendAsTree: true,
                      attrs: { append: "tree" },
                    },
                    [_vm._v("@" + _vm._s(item.vlogerName))]
                  ),
                  _c(
                    "u-text",
                    {
                      staticClass: ["publish-info-content"],
                      appendAsTree: true,
                      attrs: { append: "tree" },
                    },
                    [_vm._v(_vm._s(item.content))]
                  ),
                  _c(
                    "view",
                    { staticClass: ["publish-info-music-box"] },
                    [
                      _c("u-image", {
                        staticClass: ["icon-fire"],
                        attrs: { src: "/static/images/icon-fire.png" },
                      }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["muisc-words"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v(_vm._s(item.vlogerName) + "的原声创作")]
                      ),
                    ],
                    1
                  ),
                ]),
                _c(
                  "view",
                  { staticStyle: { flexDirection: "row" } },
                  [
                    !_vm.isIOS
                      ? _c("u-image", {
                          staticClass: ["play-cd"],
                          staticStyle: { width: "120rpx", height: "120rpx" },
                          attrs: { src: "/static/images/icon-cd.png" },
                        })
                      : _vm._e(),
                    _vm.isIOS
                      ? _c("u-image", {
                          staticClass: ["play-cd"],
                          attrs: {
                            src:
                              "https://imooc-news.oss-cn-shanghai.aliyuncs.com/image/cd-play-4.gif?time=" +
                              _vm.times,
                          },
                        })
                      : _vm._e(),
                  ],
                  1
                ),
              ]),
              _c(
                "view",
                { staticClass: ["operation-box"] },
                [
                  _c(
                    "view",
                    { staticClass: ["operation-face-box"] },
                    [
                      _c("u-image", {
                        staticClass: ["user-face"],
                        attrs: { src: item.vlogerFace },
                        on: {
                          click: function ($event) {
                            _vm.goUserInfoSeeSee(item.vlogerId)
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  !item.doIFollowVloger
                    ? _c("u-image", {
                        staticClass: ["follow-me"],
                        attrs: { src: "/static/images/icon-follow.png" },
                        on: {
                          click: function ($event) {
                            _vm.followMe(item.vlogerId)
                          },
                        },
                      })
                    : _vm._e(),
                  _c(
                    "view",
                    { staticClass: ["like-box"] },
                    [
                      !item.doILikeThisVlog
                        ? _c("u-image", {
                            staticClass: ["icon"],
                            attrs: { src: "/static/images/icon-unlike.png" },
                            on: {
                              click: function ($event) {
                                _vm.likeOrDislikeVlog(1)
                              },
                            },
                          })
                        : _vm._e(),
                      item.doILikeThisVlog
                        ? _c("u-image", {
                            staticClass: ["icon"],
                            attrs: { src: "/static/images/icon-like.png" },
                            on: {
                              click: function ($event) {
                                _vm.likeOrDislikeVlog(0)
                              },
                            },
                          })
                        : _vm._e(),
                      _c(
                        "u-text",
                        {
                          staticClass: ["some-counts"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v(_vm._s(item.likeCounts))]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "view",
                    { staticClass: ["comment-and-share-box"] },
                    [
                      _c("u-image", {
                        staticClass: ["icon"],
                        attrs: { src: "/static/images/icon-comments.png" },
                        on: { click: _vm.commentToggle },
                      }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["some-counts"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v(_vm._s(_vm.thisVlogTotalComentCounts))]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "view",
                    { staticClass: ["comment-and-share-box"] },
                    [
                      _c("u-image", {
                        staticClass: ["icon"],
                        attrs: { src: "/static/images/icon-share.png" },
                        on: { click: _vm.shareToggle },
                      }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["some-counts"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v("分享")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        }),
      ],
      2
    ),
    _vm.thisVlog != null && _vm.thisVlog != {}
      ? _c(
          "view",
          [
            _c(
              "uni-popup",
              { ref: "comment", attrs: { type: "comment" } },
              [
                _c("uni-popup-comments", {
                  attrs: {
                    thisVlogerId: _vm.thisVlogerId,
                    thisVlogId: _vm.thisVlogId,
                  },
                }),
              ],
              1
            ),
            _c(
              "uni-popup",
              {
                ref: "share",
                attrs: { backgroundColor: "#fff", type: "share" },
              },
              [
                _c("uni-popup-share", {
                  attrs: {
                    thisVlogerId: _vm.thisVlogerId,
                    thisVlogId: _vm.thisVlogId,
                    vlogUrl: _vm.thisVlog.url,
                    isPrivate: _vm.thisVlog.isPrivate,
                  },
                }),
              ],
              1
            ),
          ],
          1
        )
      : _vm._e(),
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 251 */
/*!************************************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/components/videoFollowComp.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoFollowComp.vue?vue&type=script&lang=js& */ 252);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXViLENBQWdCLG1kQUFHLEVBQUMiLCJmaWxlIjoiMjUxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ZpZGVvRm9sbG93Q29tcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92aWRlb0ZvbGxvd0NvbXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///251\n");

/***/ }),
/* 252 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ASUS/Desktop/MyLive-Dev/components/videoFollowComp.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar app = getApp();\nvar _default = {\n  props: {\n    screenHeight: {\n      default: 0\n    },\n    src: {\n      default: false\n    },\n    playFollowStatus: {\n      default: false\n    },\n    playStatus: {\n      default: false\n    },\n    videoList: {\n      default: []\n    },\n    refreshList: {\n      default: []\n    },\n    pagingList: {\n      default: []\n    }\n  },\n  data: function data() {\n    return {\n      thisVlog: {},\n      // 当前的短视频对象\n      thisVlogId: \"\",\n      // 当前的短视频主键id\n      thisVlogerId: \"\",\n      // 当前的短视频博主的主键id\n\n      refreshing: false,\n      showRefreshLoading: \"hide\",\n      playerCur: 0,\n      page: 0,\n      totalPage: 0,\n      playerList: this.videoList,\n      thisVlogTotalComentCounts: 0,\n      videoContext: {},\n      currentIndex: 0,\n      contentOffsetY: 0,\n      times: new Date().getTime(),\n      objectFit: \"fill\",\n      isIOS: uni.getSystemInfoSync().platform == \"ios\"\n    };\n  },\n  created: function created() {\n    if (!this.isIOS) {\n      this.objectFit = \"cover\";\n    }\n\n    // 查询首页短视频列表\n    this.displayVideoPaging(this.page + 1, true);\n    var videoContext = uni.createVideoContext('myFollowVideo');\n    this.videoContext = videoContext;\n  },\n  watch: {\n    refreshList: function refreshList(value) {\n      var me = this;\n      var newList = value;\n      if (newList != null && newList != undefined && newList.length > 0) {\n        me.playerList = newList;\n      }\n\n      // 重置\n      this.playerCur = 0;\n      this.currentIndex = 0;\n      this.contentOffsetY = 0;\n    },\n    playFollowStatus: function playFollowStatus(val) {\n      var me = this;\n      if (!val) {\n        me.videoContext.pause();\n      } else {\n        me.videoContext.play();\n      }\n    }\n  },\n  methods: {\n    freshCommentCounts: function freshCommentCounts() {\n      var me = this;\n      var userId = getApp().getUserInfoSession().id;\n      var serverUrl = app.globalData.serverUrl;\n      if (me.playerList == null || me.playerList == undefined || me.playerList.length == 0) {\n        return;\n      }\n      var currentIndex = me.playerCur;\n      var vlog = me.playerList[currentIndex];\n      var vlogId = vlog.vlogId;\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"GET\",\n        url: serverUrl + \"/comment/counts?vlogId=\" + vlogId,\n        success: function success(result) {\n          if (result.data.status == 200) {\n            me.thisVlogTotalComentCounts = result.data.data;\n          } else {\n            me.thisVlogTotalComentCounts = 0;\n          }\n        }\n      });\n    },\n    likeOrDislikeVlog: function likeOrDislikeVlog(isLike) {\n      var me = this;\n      if (isLike == 1) {\n        // 喜欢/点赞视频\n\n        var myUserInfo = getApp().getUserInfoSession();\n        if (myUserInfo == null) {\n          uni.showToast({\n            duration: 3000,\n            title: \"请登录~\",\n            icon: \"none\"\n          });\n          uni.navigateTo({\n            url: \"../loginRegist/loginRegist\",\n            animationType: \"slide-in-bottom\",\n            success: function success() {\n              me.loginWords = \"请登录\";\n            }\n          });\n          return;\n        }\n        var userId = getApp().getUserInfoSession().id;\n        var serverUrl = app.globalData.serverUrl;\n        var currentIndex = me.playerCur;\n        var vlog = me.playerList[currentIndex];\n        uni.request({\n          method: \"POST\",\n          header: {\n            headerUserId: userId,\n            headerUserToken: app.getUserSessionToken()\n          },\n          url: serverUrl + \"/vlog/like?userId=\" + userId + \"&vlogerId=\" + vlog.vlogerId + \"&vlogId=\" + vlog.vlogId,\n          success: function success(result) {\n            if (result.data.status == 200) {\n              me.reLikePlayList(vlog.vlogId);\n              me.refreshVlogCounts();\n            } else {\n              uni.showToast({\n                title: result.data.msg,\n                icon: \"none\",\n                duration: 3000\n              });\n            }\n          }\n        });\n      } else if (isLike == 0) {\n        // 取消喜欢/点赞视频\n\n        var myUserInfo = getApp().getUserInfoSession();\n        if (myUserInfo == null) {\n          uni.showToast({\n            duration: 3000,\n            title: \"请登录~\",\n            icon: \"none\"\n          });\n          uni.navigateTo({\n            url: \"../loginRegist/loginRegist\",\n            animationType: \"slide-in-bottom\",\n            success: function success() {\n              me.loginWords = \"请登录\";\n            }\n          });\n          return;\n        }\n        var userId = getApp().getUserInfoSession().id;\n        var serverUrl = app.globalData.serverUrl;\n        var currentIndex = me.playerCur;\n        var vlog = me.playerList[currentIndex];\n        uni.request({\n          method: \"POST\",\n          header: {\n            headerUserId: userId,\n            headerUserToken: app.getUserSessionToken()\n          },\n          url: serverUrl + \"/vlog/unlike?userId=\" + userId + \"&vlogerId=\" + vlog.vlogerId + \"&vlogId=\" + vlog.vlogId,\n          success: function success(result) {\n            if (result.data.status == 200) {\n              me.reDislikePlayList(vlog.vlogId);\n              me.refreshVlogCounts();\n            } else {\n              uni.showToast({\n                title: result.data.msg,\n                icon: \"none\",\n                duration: 3000\n              });\n            }\n          }\n        });\n      }\n    },\n    // 喜欢/点赞的list重新设置\n    reLikePlayList: function reLikePlayList(vlogId) {\n      var me = this;\n      var playerList = me.playerList;\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogId == vlogId) {\n          vlog.doILikeThisVlog = true;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n    reDislikePlayList: function reDislikePlayList(vlogId) {\n      var me = this;\n      var playerList = me.playerList;\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogId == vlogId) {\n          vlog.doILikeThisVlog = false;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n    // 关注后的list重新设置\n    reFollowPlayList: function reFollowPlayList(vlogerId) {\n      var me = this;\n      var playerList = me.playerList;\n\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogerId == vlogerId) {\n          vlog.doIFollowVloger = true;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n    // 取关后的list重新设置\n    reCancelPlayList: function reCancelPlayList(vlogerId) {\n      var me = this;\n      var playerList = me.playerList;\n\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogerId == vlogerId) {\n          vlog.doIFollowVloger = false;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n    // 关注博主\n    followMe: function followMe(vlogerId) {\n      var me = this;\n      var myUserInfo = getApp().getUserInfoSession();\n      if (myUserInfo == null) {\n        uni.showToast({\n          duration: 3000,\n          title: \"请登录~\",\n          icon: \"none\"\n        });\n        uni.navigateTo({\n          url: \"../loginRegist/loginRegist\",\n          animationType: \"slide-in-bottom\",\n          success: function success() {\n            me.loginWords = \"请登录\";\n          }\n        });\n        return;\n      }\n      var userId = getApp().getUserInfoSession().id;\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"POST\",\n        header: {\n          headerUserId: userId,\n          headerUserToken: app.getUserSessionToken()\n        },\n        url: serverUrl + \"/fans/follow?myId=\" + userId + \"&vlogerId=\" + vlogerId,\n        success: function success(result) {\n          if (result.data.status == 200) {\n            me.reFollowPlayList(vlogerId);\n          } else {\n            uni.showToast({\n              title: result.data.msg,\n              icon: \"none\",\n              duration: 3000\n            });\n          }\n        }\n      });\n    },\n    goUserInfoSeeSee: function goUserInfoSeeSee(userId) {\n      uni.setStorageSync(\"userPageId\", userId);\n      uni.navigateTo({\n        url: \"/pages/me/vlogerInfo?userPageId=\" + userId\n      });\n    },\n    listScroll: function listScroll(e) {\n      if (e.contentOffset.y > 0) {\n        this.$emit(\"showLoading\");\n      }\n    },\n    downloadVlog: function downloadVlog() {\n      var me = this;\n      var serverUrl = app.globalData.serverUrl;\n      var currentIndex = me.playerCur;\n      var vlog = me.playerList[currentIndex];\n      var pendingLength = vlog.url;\n    },\n    copyLink: function copyLink() {\n      var me = me;\n    },\n    showQRCode: function showQRCode() {\n      var me = me;\n    },\n    changeVlogToPrivate: function changeVlogToPrivate() {\n      var me = me;\n    },\n    onrefresh: function onrefresh(e) {\n      var _this = this;\n      this.refreshing = true;\n      setTimeout(function () {\n        _this.refreshing = false;\n        _this.$emit(\"hideLoading\");\n        _this.refreshText = '↓ Pull To Refresh';\n      }, 300);\n\n      // 通过list组件的下拉刷新触发当前所在页面的下拉刷新\n      uni.startPullDownRefresh();\n    },\n    onplay: function onplay(e) {\n      if (uni.getSystemInfoSync().platform == 'ios') {\n        // this.$emit(\"play\", 0.1);\n        this.doplay(0.1);\n      }\n    },\n    onerror: function onerror(err) {},\n    timeupdate: function timeupdate(e) {\n      if (e.detail.currentTime > 0.2) {\n        // this.$emit(\"play\", e.detail.currentTime);\n        this.doplay(e.detail.currentTime);\n      }\n    },\n    playOrPause: function playOrPause() {\n      var me = this;\n      var playFollowStatus = this.playFollowStatus;\n      if (!playFollowStatus) {\n        me.videoContext.pause();\n      } else {\n        me.videoContext.play();\n      }\n      this.playFollowStatus = !playFollowStatus;\n    },\n    scroll: function scroll(e) {\n      var originalIndex = this.currentIndex;\n      var isNext = false;\n      if (e.contentOffset.y < this.contentOffsetY) {\n        isNext = true;\n      }\n      this.contentOffsetY = e.contentOffset.y;\n      var num = this.playerList.length;\n      this.currentIndex = Math.round(Math.abs(this.contentOffsetY) / (e.contentSize.height / num));\n      this.onchange(this.currentIndex);\n      this.times = new Date().getTime();\n\n      // 判断如果视频列表总长度-当前下标，少于3个，则开始分页查询后续的视频，并且追加到现有list中\n      if (this.playerList.length - this.currentIndex < 3) {\n        // 如果要分页的page和总数totalPage相等，则没有更多\n        if (this.page == this.totalPage) {\n          return;\n        }\n        this.displayVideoPaging(this.page + 1, false);\n      }\n    },\n    // 分页查询新的list，并且追加到现有list中\n    displayVideoPaging: function displayVideoPaging(page, needClearList) {\n      // 查询首页短视频列表\n      var me = this;\n      var myUserInfo = getApp().getUserInfoSession();\n      var userId = \"\";\n      if (myUserInfo != null) {\n        userId = myUserInfo.id;\n      } else {\n        return;\n      }\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"GET\",\n        header: {\n          headerUserId: userId,\n          headerUserToken: app.getUserSessionToken()\n        },\n        url: serverUrl + \"/vlog/followList?myId=\" + userId + \"&page=\" + page + \"&pageSize=10\",\n        success: function success(result) {\n          if (result.data.status == 200) {\n            var vlogList = result.data.data.rows;\n            var totalPage = result.data.data.total;\n            if (needClearList) {\n              me.playerList = [];\n            }\n            me.playerList = me.playerList.concat(vlogList);\n            me.page = page;\n            me.totalPage = totalPage;\n            if (needClearList) {\n              me.setThisVlogInfo();\n              me.freshCommentCounts();\n            }\n            me.doTimer();\n          } else {\n            uni.showToast({\n              title: result.data.msg,\n              icon: \"none\",\n              duration: 3000\n            });\n          }\n        },\n        complete: function complete() {\n          // me.doTimer();\n        }\n      });\n    },\n    doTimer: function doTimer() {\n      var me = this;\n      var t = setTimeout(function () {\n        if (me.playerList != null && me.playerList != undefined && me.playerList.length > 0) {\n          me.videoContext.pause();\n          me.playFollowStatus = false;\n        }\n      }, 3000);\n    },\n    doplay: function doplay(time) {\n      if (time > 0) {\n        this.playerList[this.playerCur].play = true;\n      }\n    },\n    onchange: function onchange(index) {\n      if (index != this.playerCur) {\n        this.playerList[this.playerCur].play = false;\n        this.playerCur = index;\n      }\n      this.refreshVlogCounts();\n      this.setThisVlogInfo();\n      this.freshCommentCounts();\n    },\n    // 设置当前vlog的信息\n    setThisVlogInfo: function setThisVlogInfo() {\n      var me = this;\n      var serverUrl = app.globalData.serverUrl;\n      if (me.playerList != null && me.playerList != undefined && me.playerList.length > 0) {\n        var currentIndex = me.playerCur;\n        var vlog = me.playerList[currentIndex];\n        this.thisVlog = vlog;\n        this.thisVlogId = vlog.vlogId;\n        this.thisVlogerId = vlog.vlogerId;\n      }\n    },\n    refreshVlogCounts: function refreshVlogCounts() {\n      // 查询当前点赞数，重新赋值给当前视频\n      var me = this;\n      var serverUrl = app.globalData.serverUrl;\n      var currentIndex = me.playerCur;\n      var vlog = me.playerList[currentIndex];\n      uni.request({\n        method: \"POST\",\n        url: serverUrl + \"/vlog/totalLikedCounts?vlogId=\" + vlog.vlogId,\n        success: function success(result) {\n          if (result.data.status == 200) {\n            var counts = result.data.data;\n            me.reChangeVlogLikedCountsInPlayList(vlog.vlogId, counts);\n          }\n        }\n      });\n    },\n    reChangeVlogLikedCountsInPlayList: function reChangeVlogLikedCountsInPlayList(vlogId, counts) {\n      var me = this;\n      var playerList = me.playerList;\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogId == vlogId) {\n          vlog.likeCounts = counts;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n    commentToggle: function commentToggle() {\n      this.$refs.comment.open();\n      uni.hideTabBar({\n        animation: true\n      });\n    },\n    shareToggle: function shareToggle() {\n      this.$refs.share.open();\n      uni.hideTabBar({\n        animation: true\n      });\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy92aWRlb0ZvbGxvd0NvbXAudnVlIl0sIm5hbWVzIjpbInByb3BzIiwic2NyZWVuSGVpZ2h0IiwiZGVmYXVsdCIsInNyYyIsInBsYXlGb2xsb3dTdGF0dXMiLCJwbGF5U3RhdHVzIiwidmlkZW9MaXN0IiwicmVmcmVzaExpc3QiLCJwYWdpbmdMaXN0IiwiZGF0YSIsInRoaXNWbG9nIiwidGhpc1Zsb2dJZCIsInRoaXNWbG9nZXJJZCIsInJlZnJlc2hpbmciLCJzaG93UmVmcmVzaExvYWRpbmciLCJwbGF5ZXJDdXIiLCJwYWdlIiwidG90YWxQYWdlIiwicGxheWVyTGlzdCIsInRoaXNWbG9nVG90YWxDb21lbnRDb3VudHMiLCJ2aWRlb0NvbnRleHQiLCJjdXJyZW50SW5kZXgiLCJjb250ZW50T2Zmc2V0WSIsInRpbWVzIiwib2JqZWN0Rml0IiwiaXNJT1MiLCJjcmVhdGVkIiwid2F0Y2giLCJtZSIsIm1ldGhvZHMiLCJmcmVzaENvbW1lbnRDb3VudHMiLCJ1bmkiLCJtZXRob2QiLCJ1cmwiLCJzdWNjZXNzIiwibGlrZU9yRGlzbGlrZVZsb2ciLCJkdXJhdGlvbiIsInRpdGxlIiwiaWNvbiIsImFuaW1hdGlvblR5cGUiLCJoZWFkZXIiLCJoZWFkZXJVc2VySWQiLCJoZWFkZXJVc2VyVG9rZW4iLCJyZUxpa2VQbGF5TGlzdCIsInZsb2ciLCJyZURpc2xpa2VQbGF5TGlzdCIsInJlRm9sbG93UGxheUxpc3QiLCJyZUNhbmNlbFBsYXlMaXN0IiwiZm9sbG93TWUiLCJnb1VzZXJJbmZvU2VlU2VlIiwibGlzdFNjcm9sbCIsImRvd25sb2FkVmxvZyIsImNvcHlMaW5rIiwic2hvd1FSQ29kZSIsImNoYW5nZVZsb2dUb1ByaXZhdGUiLCJvbnJlZnJlc2giLCJzZXRUaW1lb3V0Iiwib25wbGF5Iiwib25lcnJvciIsInRpbWV1cGRhdGUiLCJwbGF5T3JQYXVzZSIsInNjcm9sbCIsImlzTmV4dCIsImRpc3BsYXlWaWRlb1BhZ2luZyIsInVzZXJJZCIsImNvbXBsZXRlIiwiZG9UaW1lciIsImRvcGxheSIsIm9uY2hhbmdlIiwic2V0VGhpc1Zsb2dJbmZvIiwicmVmcmVzaFZsb2dDb3VudHMiLCJyZUNoYW5nZVZsb2dMaWtlZENvdW50c0luUGxheUxpc3QiLCJjb21tZW50VG9nZ2xlIiwiYW5pbWF0aW9uIiwic2hhcmVUb2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFOQTtBQUFBLGVBQ0E7RUFDQUE7SUFDQUM7TUFDQUM7SUFDQTtJQUNBQztNQUNBRDtJQUNBO0lBQ0FFO01BQ0FGO0lBQ0E7SUFDQUc7TUFDQUg7SUFDQTtJQUNBSTtNQUNBSjtJQUNBO0lBQ0FLO01BQ0FMO0lBQ0E7SUFDQU07TUFDQU47SUFDQTtFQUNBO0VBQ0FPO0lBQ0E7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7O01BRUFDO01BQ0FDO01BRUFDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BRUFDO01BRUFDO01BQ0FDO01BRUFDO01BRUFDO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBO01BQ0E7SUFDQTs7SUFFQTtJQUNBO0lBRUE7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FwQjtNQUNBO01BQ0E7TUFDQTtRQUNBcUI7TUFDQTs7TUFFQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBRUF4QjtNQUNBO01BRUE7UUFDQXdCO01BQ0E7UUFDQUE7TUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFHQTtRQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFFQTtNQUNBQztRQUNBQztRQUNBQztRQUNBQztVQUVBO1lBQ0FOO1VBQ0E7WUFDQUE7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBTztNQUNBO01BQ0E7UUFDQTs7UUFFQTtRQUNBO1VBQ0FKO1lBQ0FLO1lBQ0FDO1lBQ0FDO1VBQ0E7VUFDQVA7WUFDQUU7WUFDQU07WUFDQUw7Y0FDQU47WUFDQTtVQUNBO1VBQ0E7UUFDQTtRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBRUFHO1VBQ0FDO1VBQ0FRO1lBQ0FDO1lBQ0FDO1VBQ0E7VUFDQVQ7VUFDQUM7WUFFQTtjQUNBTjtjQUNBQTtZQUNBO2NBQ0FHO2dCQUNBTTtnQkFDQUM7Z0JBQ0FGO2NBQ0E7WUFDQTtVQUNBO1FBQ0E7TUFFQTtRQUNBOztRQUVBO1FBQ0E7VUFDQUw7WUFDQUs7WUFDQUM7WUFDQUM7VUFDQTtVQUNBUDtZQUNBRTtZQUNBTTtZQUNBTDtjQUNBTjtZQUNBO1VBQ0E7VUFDQTtRQUNBO1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFFQUc7VUFDQUM7VUFDQVE7WUFDQUM7WUFDQUM7VUFDQTtVQUNBVDtVQUNBQztZQUVBO2NBQ0FOO2NBQ0FBO1lBQ0E7Y0FDQUc7Z0JBQ0FNO2dCQUNBQztnQkFDQUY7Y0FDQTtZQUNBO1VBQ0E7UUFDQTtNQUVBO0lBQ0E7SUFFQTtJQUNBTztNQUNBO01BQ0E7TUFDQTtNQUNBO1FBQ0E7UUFDQTtVQUNBQztVQUNBMUI7UUFDQTtNQUNBO01BQ0FVO0lBQ0E7SUFDQWlCO01BQ0E7TUFDQTtNQUNBO01BQ0E7UUFDQTtRQUNBO1VBQ0FEO1VBQ0ExQjtRQUNBO01BQ0E7TUFDQVU7SUFDQTtJQUVBO0lBQ0FrQjtNQUNBO01BQ0E7O01BRUE7TUFDQTtRQUNBO1FBQ0E7VUFDQUY7VUFDQTFCO1FBQ0E7TUFDQTtNQUNBVTtJQUNBO0lBQ0E7SUFDQW1CO01BQ0E7TUFDQTs7TUFFQTtNQUNBO1FBQ0E7UUFDQTtVQUNBSDtVQUNBMUI7UUFDQTtNQUNBO01BQ0FVO0lBQ0E7SUFHQTtJQUNBb0I7TUFDQTtNQUNBO01BQ0E7UUFDQWpCO1VBQ0FLO1VBQ0FDO1VBQ0FDO1FBQ0E7UUFFQVA7VUFDQUU7VUFDQU07VUFDQUw7WUFDQU47VUFDQTtRQUNBO1FBRUE7TUFDQTtNQUVBO01BQ0E7TUFDQUc7UUFDQUM7UUFDQVE7VUFDQUM7VUFDQUM7UUFDQTtRQUNBVDtRQUNBQztVQUVBO1lBQ0FOO1VBQ0E7WUFDQUc7Y0FDQU07Y0FDQUM7Y0FDQUY7WUFDQTtVQUNBO1FBQ0E7TUFDQTtJQUVBO0lBRUFhO01BQ0FsQjtNQUNBQTtRQUNBRTtNQUNBO0lBQ0E7SUFFQWlCO01BQ0E7UUFDQTtNQUNBO0lBQ0E7SUFFQUM7TUFFQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBRUE7SUFFQUM7TUFDQTtJQUNBO0lBRUFDO01BQ0E7SUFDQTtJQUVBQztNQUNBO0lBQ0E7SUFFQUM7TUFBQTtNQUNBO01BQ0FDO1FBQ0E7UUFDQTtRQUNBO01BQ0E7O01BRUE7TUFDQXpCO0lBQ0E7SUFFQTBCO01BQ0E7UUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBQyxnQ0FDQTtJQUNBQztNQUNBO1FBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFFQUM7TUFDQTtNQUNBO01BRUE7UUFDQWhDO01BQ0E7UUFDQUE7TUFDQTtNQUNBO0lBQ0E7SUFHQWlDO01BQ0E7TUFDQTtNQUNBO1FBQ0FDO01BQ0E7TUFDQTtNQUVBO01BRUE7TUFDQTtNQUVBOztNQUVBO01BQ0E7UUFDQTtRQUNBO1VBQ0E7UUFDQTtRQUNBO01BQ0E7SUFFQTtJQUVBO0lBQ0FDO01BRUE7TUFDQTtNQUNBO01BQ0E7TUFDQTtRQUNBQztNQUNBO1FBQ0E7TUFDQTtNQUNBO01BQ0FqQztRQUNBQztRQUNBUTtVQUNBQztVQUNBQztRQUNBO1FBQ0FUO1FBQ0FDO1VBRUE7WUFDQTtZQUNBO1lBQ0E7Y0FDQU47WUFDQTtZQUNBQTtZQUNBQTtZQUNBQTtZQUVBO2NBQ0FBO2NBQ0FBO1lBQ0E7WUFDQUE7VUFDQTtZQUNBRztjQUNBTTtjQUNBQztjQUNBRjtZQUNBO1VBQ0E7UUFFQTtRQUNBNkI7VUFDQTtRQUFBO01BRUE7SUFDQTtJQUVBQztNQUNBO01BQ0E7UUFFQTtVQUNBdEM7VUFDQUE7UUFDQTtNQUNBO0lBQ0E7SUFFQXVDO01BQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtRQUNBO1FBQ0E7TUFDQTtNQUVBO01BQ0E7TUFDQTtJQUNBO0lBRUE7SUFDQUM7TUFDQTtNQUNBO01BRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO01BQ0E7SUFDQTtJQUVBQztNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQXZDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1VBQ0E7WUFDQTtZQUNBTjtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBRUEyQztNQUNBO01BQ0E7TUFDQTtNQUNBO1FBQ0E7UUFDQTtVQUNBM0I7VUFDQTFCO1FBQ0E7TUFDQTtNQUNBVTtJQUNBO0lBRUE0QztNQUNBO01BQ0F6QztRQUNBMEM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTNDO1FBQ0EwQztNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEiLCJmaWxlIjoiMjUyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHN0eWxlPlxuXHQuaWNvbiB7XG5cdFx0d2lkdGg6IDgwcnB4O1xuXHRcdGhlaWdodDogODBycHg7XG5cdFx0b3BhY2l0eTogMC45O1xuXHR9XG5cdFxuXHQudXNlci1mYWNlIHtcblx0XHR3aWR0aDogMTAwcnB4O1xuXHRcdGhlaWdodDogMTAwcnB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDEwMHJweDtcblx0fVxuXHRcblx0LnBsYXktY2Qge1xuXHRcdHdpZHRoOiAxNTBycHg7XG5cdFx0aGVpZ2h0OiAxNTBycHg7XG5cdFx0b3BhY2l0eTogMC44O1xuXHR9XG5cdC5yZWZyZXNoLWluZm8tdHh0IHtcblx0XHRjb2xvcjogI0YxRjFGMTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Zm9udC1zaXplOiAxMnB4O1xuXHR9XG5cdC5wdWJsaXNoLWluZm8tYm94IHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ym90dG9tOiAyMDBycHg7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHRwYWRkaW5nLWxlZnQ6IDIwcnB4O1xuXHRcdHBhZGRpbmctcmlnaHQ6IDIwcnB4OyBcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cdC5wdWJsaXNoLWluZm8tdmxvZ2VyLW5hbWUge1xuXHRcdGNvbG9yOiAjRkZGRkZGO1xuXHRcdGZvbnQtc2l6ZTogNDBycHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRwYWRkaW5nOiAxMHJweDtcblx0fVxuXHQucHVibGlzaC1pbmZvLW11c2ljLWJveCB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cdC5wdWJsaXNoLWluZm8tY29udGVudCB7XG5cdFx0Y29sb3I6ICNGRkZGRkY7XG5cdFx0Zm9udC1zaXplOiAyOHJweDtcblx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdHBhZGRpbmc6IDEwcnB4O1xuXHRcdGxpbmVzOiA1O1xuXHRcdHdpZHRoOiA1MjBycHg7XG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdH1cblx0Lmljb24tZmlyZSB7XG5cdFx0d2lkdGg6IDM2cnB4O1xuXHRcdGhlaWdodDogMzZycHg7XG5cdH1cblx0Lm11aXNjLXdvcmRzIHtcblx0XHRjb2xvcjogI0ZGRkZGRjtcblx0XHRmb250LXNpemU6IDI4cnB4O1xuXHRcdHBhZGRpbmc6IDEwcnB4O1xuXHRcdHdpZHRoOjQwMHJweDtcblx0fVxuXHQuc29tZS1jb3VudHMge1xuXHRcdGZvbnQtc2l6ZToyNHJweDtcblx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRjb2xvcjogI0ZGRkZGRjtcblx0XHRtYXJnaW4tdG9wOiAycnB4O1xuXHR9XG5cdC5vcGVyYXRpb24tYm94IHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAwO1xuXHRcdGJvdHRvbTogMDsgXG5cdFx0cmlnaHQ6IDA7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRwYWRkaW5nLXJpZ2h0OiAyMHJweDtcblx0fVxuXHQub3BlcmF0aW9uLWZhY2UtYm94IHtcblx0XHRib3JkZXItcmFkaXVzOiAxMDBycHg7XG5cdFx0Ym9yZGVyLWNvbG9yOiAjRkZGRkZGO1xuXHRcdGJvcmRlci13aWR0aDogM3JweDtcblx0fVxuXHQuZm9sbG93LW1lIHtcblx0XHR3aWR0aDogNDBycHg7XG5cdFx0aGVpZ2h0OiA0MHJweDtcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR0b3A6IC0yMHJweDtcblx0fVxuXHQubGlrZS1ib3gge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRtYXJnaW4tdG9wOiAzMHJweDtcblx0fVxuXHQuY29tbWVudC1hbmQtc2hhcmUtYm94IHtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0bWFyZ2luLXRvcDogNDVycHg7XG5cdH1cbjwvc3R5bGU+XG5cbjx0ZW1wbGF0ZT5cblx0PHZpZXcgc3R5bGU9XCJmbGV4OiAxO1wiPlxuXHRcdDwhLS0gPHVuaS1saXN0IEBjaGFuZ2U9XCJvbmNoYW5nZVwiIDpudW09XCJwbGF5ZXJMaXN0Lmxlbmd0aFwiPiAtLT5cblx0XHQ8bGlzdCA6cGFnaW5nRW5hYmxlZD1cInRydWVcIiA6c2hvdy1zY3JvbGxiYXI9XCJmYWxzZVwiIEBzY3JvbGw9XCJsaXN0U2Nyb2xsXCIgQHNjcm9sbGVuZD1cInNjcm9sbFwiIDpzY3JvbGxhYmxlPVwidHJ1ZVwiID5cdFxuXHRcdFx0PHJlZnJlc2ggQHB1bGxpbmdkb3duPVwib25wdWxsaW5nZG93blwiIEByZWZyZXNoPVwib25yZWZyZXNoXCIgOmRpc3BsYXk9XCJyZWZyZXNoaW5nID8gJ3Nob3cnIDogJ2hpZGUnXCI+XG5cdFx0XHQgIDx0ZXh0IGNsYXNzPVwicmVmcmVzaC1pbmZvLXR4dFwiPjwvdGV4dD5cblx0XHRcdCAgPGxvYWRpbmctaW5kaWNhdG9yPjwvbG9hZGluZy1pbmRpY2F0b3I+XG5cdFx0XHQ8L3JlZnJlc2g+XG5cdFx0XHQ8Y2VsbCA6cmVjeWNsZT1cImZhbHNlXCIgXG5cdFx0XHRcdHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBwbGF5ZXJMaXN0XCIgXG5cdFx0XHRcdDprZXk9XCJpbmRleFwiIFxuXHRcdFx0XHQ6ZGF0YS1pbmRleD1cImluZGV4XCIgXG5cdFx0XHRcdDpzdHlsZT1cInsnaGVpZ2h0Jzogc2NyZWVuSGVpZ2h0ICsgJ3B4J31cIj5cblx0XHRcdFx0PCEtLSA8dW5pLXZpZGVvIDpzcmM9XCJpdGVtLnVybFwiIDpwbGF5U3RhdHVzPVwicGxheVN0YXR1c1wiIDpzY3JlZW5IZWlnaHQ9XCJzY3JlZW5IZWlnaHRcIiB2LWlmPVwicGxheWVyQ3VyID09PSBpbmRleFwiIEBwbGF5PVwib25wbGF5XCI+PC91bmktdmlkZW8+IC0tPlxuXHRcdFx0XHQ8dmlkZW8gXG5cdFx0XHRcdFx0cmVmPVwibXlGb2xsb3dWaWRlb1wiIFxuXHRcdFx0XHRcdGlkPVwibXlGb2xsb3dWaWRlb1wiIFxuXHRcdFx0XHRcdDpvYmplY3QtZml0PVwiaXRlbS53aWR0aCA+PSBpdGVtLmhlaWdodCA/ICdjb250YWluJyA6ICdmaWxsJ1wiIFxuXHRcdFx0XHRcdDpzcmM9XCJpdGVtLnVybFwiIFxuXHRcdFx0XHRcdDpjb250cm9scz1cImZhbHNlXCJcblx0XHRcdFx0XHQ6ZW5hYmxlLXByb2dyZXNzLWdlc3R1cmU9XCJmYWxzZVwiXG5cdFx0XHRcdFx0IHYtaWY9XCJwbGF5ZXJDdXIgPT09IGluZGV4XCJcblx0XHRcdFx0XHRsb29wIFxuXHRcdFx0XHRcdGF1dG9wbGF5XG5cdFx0XHRcdFx0c2hvdy1sb2FkaW5nPVwidHJ1ZVwiXG5cdFx0XHRcdFx0c3R5bGU9XCJ3aWR0aDogNzUwcnB4O1wiIFxuXHRcdFx0XHRcdDpzdHlsZT1cIntoZWlnaHQ6IHNjcmVlbkhlaWdodCArICdweCd9XCIgXG5cdFx0XHRcdFx0QGNsaWNrPVwicGxheU9yUGF1c2VcIlxuXHRcdFx0XHRcdEBwbGF5PVwib25wbGF5XCIgXG5cdFx0XHRcdFx0QGVycm9yPVwib25lcnJvclwiIFxuXHRcdFx0XHRcdEB0aW1ldXBkYXRlPVwidGltZXVwZGF0ZVwiPjwvdmlkZW8+XG5cdFx0XHRcdDxpbWFnZSBcblx0XHRcdFx0XHQ6bGF6eS1sb2FkPVwidHJ1ZVwiIFxuXHRcdFx0XHRcdDpmYWRlLXNob3c9XCJmYWxzZVwiIFxuXHRcdFx0XHRcdHYtaWY9XCIhaXRlbS5wbGF5XCIgXG5cdFx0XHRcdFx0OnNyYz1cIml0ZW0uY292ZXJcIiBcblx0XHRcdFx0XHQ6bW9kZT1cIml0ZW0ud2lkdGggPj0gaXRlbS5oZWlnaHQgPyAnYXNwZWN0Rml0JyA6ICdzY2FsZVRvRmlsbCdcIiBcblx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOiA3NTBycHg7IGZpbHRlcjogYmx1cigxMHB4KTtcIlxuXHRcdFx0XHRcdDpzdHlsZT1cIntoZWlnaHQ6IHNjcmVlbkhlaWdodCsgJ3B4J31cIj48L2ltYWdlPlxuXHRcdFx0XHQ8IS0tPGltYWdlIDpsYXp5LWxvYWQ9XCJ0cnVlXCIgOmZhZGUtc2hvdz1cImZhbHNlXCIgdi1pZj1cIiFpdGVtLnBsYXlcIiA6c3JjPVwiaXRlbS5jb3ZlclwiIG1vZGU9XCJcIiBzdHlsZT1cIndpZHRoOiA3NTBycHg7cG9zaXRpb246YWJzb2x1dGU7bGVmdDogMDtyaWdodDogMDt0b3A6IDA7Ym90dG9tOiAwOyBmaWx0ZXI6IGJsdXIoMTBweCk7XCIgOnN0eWxlPVwie2hlaWdodDogc2NyZWVuSGVpZ2h0KyAncHgnfVwiPjwvaW1hZ2U+LS0+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicHVibGlzaC1pbmZvLWJveFwiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInB1Ymxpc2gtaW5mby12bG9nZXItbmFtZVwiPkB7e2l0ZW0udmxvZ2VyTmFtZX19PC90ZXh0PlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJwdWJsaXNoLWluZm8tY29udGVudFwiPnt7aXRlbS5jb250ZW50fX08L3RleHQ+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInB1Ymxpc2gtaW5mby1tdXNpYy1ib3hcIj5cblx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tZmlyZS5wbmdcIiBjbGFzcz1cImljb24tZmlyZVwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibXVpc2Mtd29yZHNcIj57e2l0ZW0udmxvZ2VyTmFtZX1955qE5Y6f5aOw5Yib5L2cPC90ZXh0PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiIHN0eWxlPVwiZmxleC1kaXJlY3Rpb246IHJvdztcIj5cblx0XHRcdFx0XHRcdDwhLS0gPGltYWdlIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2NkLXBsYXktNC5naWZcIlxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPVwid2lkdGg6IDE1MHJweDtoZWlnaHQ6IDE1MHJweDtvcGFjaXR5OiAwLjg7XCI+PC9pbWFnZT4gLS0+XG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cIiFpc0lPU1wiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tY2QucG5nXCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cInBsYXktY2RcIiBzdHlsZT1cIndpZHRoOiAxMjBycHg7aGVpZ2h0OiAxMjBycHg7XCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwiaXNJT1NcIiA6c3JjPVwiJ2h0dHBzOi8vaW1vb2MtbmV3cy5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL2ltYWdlL2NkLXBsYXktNC5naWY/dGltZT0nK3RpbWVzXCIgXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJwbGF5LWNkXCI+PC9pbWFnZT5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PCEtLSDop4bpopHlsZXnpLrlj7PkvqfnmoTmk43kvZzmjInpkq7vvIzlpLTlg48gLSDngrnotZ4gLSDor4TorrogLSDovazlj5EgLS0+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwib3BlcmF0aW9uLWJveFwiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3BlcmF0aW9uLWZhY2UtYm94XCI+XG5cdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIml0ZW0udmxvZ2VyRmFjZVwiIGNsYXNzPVwidXNlci1mYWNlXCIgQGNsaWNrPVwiZ29Vc2VySW5mb1NlZVNlZShpdGVtLnZsb2dlcklkKVwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwiIWl0ZW0uZG9JRm9sbG93VmxvZ2VyXCIgXG5cdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLWZvbGxvdy5wbmdcIiBcblx0XHRcdFx0XHRcdEBjbGljaz1cImZvbGxvd01lKGl0ZW0udmxvZ2VySWQpXCIgXG5cdFx0XHRcdFx0XHRjbGFzcz1cImZvbGxvdy1tZVwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaWtlLWJveFwiPlxuXHRcdFx0XHRcdFx0PGltYWdlIHYtaWY9XCIhaXRlbS5kb0lMaWtlVGhpc1Zsb2dcIiBcblx0XHRcdFx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi11bmxpa2UucG5nXCJcblx0XHRcdFx0XHRcdFx0QGNsaWNrPVwibGlrZU9yRGlzbGlrZVZsb2coMSlcIlxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImljb25cIj48L2ltYWdlPlxuXHRcdFx0XHRcdFx0PGltYWdlIHYtaWY9XCJpdGVtLmRvSUxpa2VUaGlzVmxvZ1wiIFxuXHRcdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLWxpa2UucG5nXCIgXG5cdFx0XHRcdFx0XHRcdEBjbGljaz1cImxpa2VPckRpc2xpa2VWbG9nKDApXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJpY29uXCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic29tZS1jb3VudHNcIj57e2l0ZW0ubGlrZUNvdW50c319PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbW1lbnQtYW5kLXNoYXJlLWJveFwiPlxuXHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tY29tbWVudHMucG5nXCIgQGNsaWNrPVwiY29tbWVudFRvZ2dsZVwiIGNsYXNzPVwiaWNvblwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHQ8IS0tIDx0ZXh0IGNsYXNzPVwic29tZS1jb3VudHNcIj57e2l0ZW0uY29tbWVudHNDb3VudHN9fTwvdGV4dD4gLS0+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNvbWUtY291bnRzXCI+e3t0aGlzVmxvZ1RvdGFsQ29tZW50Q291bnRzfX08L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29tbWVudC1hbmQtc2hhcmUtYm94XCI+XG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi1zaGFyZS5wbmdcIiBAY2xpY2s9XCJzaGFyZVRvZ2dsZVwiIGNsYXNzPVwiaWNvblwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNvbWUtY291bnRzXCI+5YiG5LqrPC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC9jZWxsPlxuXHRcdDwvbGlzdD5cblx0XHQ8IS0tIDwvdW5pLWxpc3Q+IC0tPlxuXHRcdFxuXHRcdDx2aWV3IHYtaWY9XCJ0aGlzVmxvZyAhPSBudWxsICYmIHRoaXNWbG9nICE9IHt9XCI+XG5cdFx0XHQ8IS0tIOW6lemDqOivhOiuuueql+WPo3BvcHVwIC0tPlxuXHRcdFx0PHVuaS1wb3B1cCByZWY9XCJjb21tZW50XCIgdHlwZT1cImNvbW1lbnRcIj5cblx0XHRcdFx0PHVuaS1wb3B1cC1jb21tZW50cyA6dGhpc1Zsb2dlcklkPVwidGhpc1Zsb2dlcklkXCIgOnRoaXNWbG9nSWQ9XCJ0aGlzVmxvZ0lkXCI+PC91bmktcG9wdXAtY29tbWVudHM+XG5cdFx0XHQ8L3VuaS1wb3B1cD5cblx0XHRcdDx1bmktcG9wdXAgcmVmPVwic2hhcmVcIiBiYWNrZ3JvdW5kLWNvbG9yPVwiI2ZmZlwiIHR5cGU9XCJzaGFyZVwiPlxuXHRcdFx0XHQ8dW5pLXBvcHVwLXNoYXJlXG5cdFx0XHRcdFx0OnRoaXNWbG9nZXJJZD1cInRoaXNWbG9nZXJJZFwiIFxuXHRcdFx0XHRcdDp0aGlzVmxvZ0lkPVwidGhpc1Zsb2dJZFwiIFxuXHRcdFx0XHRcdDp2bG9nVXJsPVwidGhpc1Zsb2cudXJsXCJcblx0XHRcdFx0XHQ6aXNQcml2YXRlPVwidGhpc1Zsb2cuaXNQcml2YXRlXCJcblx0XHRcdFx0XHQ+PC91bmktcG9wdXAtc2hhcmU+XG5cdFx0XHQ8L3VuaS1wb3B1cD5cblx0XHQ8L3ZpZXc+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdHZhciBhcHAgPSBnZXRBcHAoKTtcblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdHByb3BzOiB7XG5cdFx0XHRzY3JlZW5IZWlnaHQ6IHtcblx0XHRcdFx0ZGVmYXVsdDogMFxuXHRcdFx0fSxcblx0XHRcdHNyYzoge1xuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdHBsYXlGb2xsb3dTdGF0dXM6IHtcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHRwbGF5U3RhdHVzOiB7XG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0dmlkZW9MaXN0OiB7XG5cdFx0XHRcdGRlZmF1bHQ6IFtdXG5cdFx0XHR9LFxuXHRcdFx0cmVmcmVzaExpc3Q6IHtcblx0XHRcdFx0ZGVmYXVsdDogW11cblx0XHRcdH0sXG5cdFx0XHRwYWdpbmdMaXN0OiB7XG5cdFx0XHRcdGRlZmF1bHQ6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dGhpc1Zsb2c6IHt9LFx0XHRcdC8vIOW9k+WJjeeahOefreinhumikeWvueixoVxuXHRcdFx0XHR0aGlzVmxvZ0lkOiBcIlwiLFx0XHRcdC8vIOW9k+WJjeeahOefreinhumikeS4u+mUrmlkXG5cdFx0XHRcdHRoaXNWbG9nZXJJZDogXCJcIixcdFx0Ly8g5b2T5YmN55qE55+t6KeG6aKR5Y2a5Li755qE5Li76ZSuaWRcblx0XHRcdFx0XG5cdFx0XHRcdHJlZnJlc2hpbmc6IGZhbHNlLFxuXHRcdFx0XHRzaG93UmVmcmVzaExvYWRpbmc6IFwiaGlkZVwiLFxuXHRcdFx0XHRcblx0XHRcdFx0cGxheWVyQ3VyOiAwLFxuXHRcdFx0XHRwYWdlOiAwLFxuXHRcdFx0XHR0b3RhbFBhZ2U6IDAsXG5cdFx0XHRcdHBsYXllckxpc3Q6IHRoaXMudmlkZW9MaXN0LFxuXHRcdFx0XHR0aGlzVmxvZ1RvdGFsQ29tZW50Q291bnRzOiAwLFxuXHRcdFx0XHRcblx0XHRcdFx0dmlkZW9Db250ZXh0OiB7fSxcblx0XHRcdFx0XG5cdFx0XHRcdGN1cnJlbnRJbmRleDogMCxcblx0XHRcdFx0Y29udGVudE9mZnNldFk6IDAsXG5cdFx0XHRcdFxuXHRcdFx0XHR0aW1lczogbmV3IERhdGUoKS5nZXRUaW1lKCksXG5cdFx0XHRcdFxuXHRcdFx0XHRvYmplY3RGaXQ6IFwiZmlsbFwiLFxuXHRcdFx0XHRpc0lPUzogdW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT0gXCJpb3NcIlxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y3JlYXRlZCgpIHtcblx0XHRcdGlmKCF0aGlzLmlzSU9TKSB7XG5cdFx0XHRcdHRoaXMub2JqZWN0Rml0ID0gXCJjb3ZlclwiO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyDmn6Xor6LpppbpobXnn63op4bpopHliJfooahcblx0XHRcdHRoaXMuZGlzcGxheVZpZGVvUGFnaW5nKHRoaXMucGFnZSArIDEsIHRydWUpO1xuXHRcdFx0XG5cdFx0XHR2YXIgdmlkZW9Db250ZXh0ID0gdW5pLmNyZWF0ZVZpZGVvQ29udGV4dCgnbXlGb2xsb3dWaWRlbycpO1xuXHRcdFx0dGhpcy52aWRlb0NvbnRleHQgPSB2aWRlb0NvbnRleHQ7XG5cdFx0fSxcblx0XHR3YXRjaDoge1xuXHRcdFx0cmVmcmVzaExpc3QodmFsdWUpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIG5ld0xpc3QgPSB2YWx1ZTtcblx0XHRcdFx0aWYgKG5ld0xpc3QgIT0gbnVsbCAmJiBuZXdMaXN0ICE9IHVuZGVmaW5lZCAmJiBuZXdMaXN0Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gbmV3TGlzdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0Ly8g6YeN572uXG5cdFx0XHRcdHRoaXMucGxheWVyQ3VyID0gMDtcblx0XHRcdFx0dGhpcy5jdXJyZW50SW5kZXggPSAwO1xuXHRcdFx0XHR0aGlzLmNvbnRlbnRPZmZzZXRZID0wO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0cGxheUZvbGxvd1N0YXR1czogZnVuY3Rpb24odmFsKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoIXZhbCkge1xuXHRcdFx0XHRcdG1lLnZpZGVvQ29udGV4dC5wYXVzZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1lLnZpZGVvQ29udGV4dC5wbGF5KCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGZyZXNoQ29tbWVudENvdW50cygpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHVzZXJJZCA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpLmlkO1xuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHRcdGlmIChtZS5wbGF5ZXJMaXN0ID09IG51bGwgfHwgbWUucGxheWVyTGlzdCA9PSB1bmRlZmluZWQgfHwgbWUucGxheWVyTGlzdC5sZW5ndGggPT0gMCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgY3VycmVudEluZGV4ID0gbWUucGxheWVyQ3VyO1xuXHRcdFx0XHR2YXIgdmxvZyA9IG1lLnBsYXllckxpc3RbY3VycmVudEluZGV4XTtcblx0XHRcdFx0dmFyIHZsb2dJZCA9IHZsb2cudmxvZ0lkO1xuXHRcdFx0XHRcblx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xuXHRcdFx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdFx0XHR1cmw6IHNlcnZlclVybCArIFwiL2NvbW1lbnQvY291bnRzP3Zsb2dJZD1cIiArIHZsb2dJZCxcblx0XHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0LmRhdGEuc3RhdHVzID09IDIwMCkge1xuXHRcdFx0XHRcdFx0XHRtZS50aGlzVmxvZ1RvdGFsQ29tZW50Q291bnRzID0gcmVzdWx0LmRhdGEuZGF0YTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdG1lLnRoaXNWbG9nVG90YWxDb21lbnRDb3VudHMgPSAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0bGlrZU9yRGlzbGlrZVZsb2coaXNMaWtlKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdGlmIChpc0xpa2UgPT0gMSkge1xuXHRcdFx0XHRcdC8vIOWWnOasoi/ngrnotZ7op4bpopFcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdHZhciBteVVzZXJJbmZvID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCk7XG5cdFx0XHRcdFx0aWYgKG15VXNlckluZm8gPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogXCLor7fnmbvlvZV+XCIsXG5cdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHRcdFx0dXJsOiBcIi4uL2xvZ2luUmVnaXN0L2xvZ2luUmVnaXN0XCIsXG5cdFx0XHRcdFx0XHRcdGFuaW1hdGlvblR5cGU6IFwic2xpZGUtaW4tYm90dG9tXCIsXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3MoKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWUubG9naW5Xb3JkcyA9IFwi6K+355m75b2VXCJcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHZhciB1c2VySWQgPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKS5pZDtcblx0XHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHRcdHZhciBjdXJyZW50SW5kZXggPSBtZS5wbGF5ZXJDdXI7XG5cdFx0XHRcdFx0dmFyIHZsb2cgPSBtZS5wbGF5ZXJMaXN0W2N1cnJlbnRJbmRleF07XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xuXHRcdFx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdFx0XHRcdGhlYWRlcjoge1xuXHRcdFx0XHRcdFx0XHRoZWFkZXJVc2VySWQ6IHVzZXJJZCxcblx0XHRcdFx0XHRcdFx0aGVhZGVyVXNlclRva2VuOiBhcHAuZ2V0VXNlclNlc3Npb25Ub2tlbigpXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0dXJsOiBzZXJ2ZXJVcmwgKyBcIi92bG9nL2xpa2U/dXNlcklkPVwiICsgdXNlcklkICsgXCImdmxvZ2VySWQ9XCIgKyB2bG9nLnZsb2dlcklkICsgXCImdmxvZ0lkPVwiICsgdmxvZy52bG9nSWQsXG5cdFx0XHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0XHRcdFx0XHRtZS5yZUxpa2VQbGF5TGlzdCh2bG9nLnZsb2dJZCk7XG5cdFx0XHRcdFx0XHRcdFx0bWUucmVmcmVzaFZsb2dDb3VudHMoKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZXN1bHQuZGF0YS5tc2csXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0fSBlbHNlIGlmIChpc0xpa2UgPT0gMCkge1xuXHRcdFx0XHRcdC8vIOWPlua2iOWWnOasoi/ngrnotZ7op4bpopFcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR2YXIgbXlVc2VySW5mbyA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpO1xuXHRcdFx0XHRcdGlmIChteVVzZXJJbmZvID09IG51bGwpIHtcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMCxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi6K+355m75b2VflwiLFxuXHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0XHRcdHVybDogXCIuLi9sb2dpblJlZ2lzdC9sb2dpblJlZ2lzdFwiLFxuXHRcdFx0XHRcdFx0XHRhbmltYXRpb25UeXBlOiBcInNsaWRlLWluLWJvdHRvbVwiLFxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzKCkge1xuXHRcdFx0XHRcdFx0XHRcdG1lLmxvZ2luV29yZHMgPSBcIuivt+eZu+W9lVwiXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHR2YXIgdXNlcklkID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCkuaWQ7XG5cdFx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcblx0XHRcdFx0XHR2YXIgY3VycmVudEluZGV4ID0gbWUucGxheWVyQ3VyO1xuXHRcdFx0XHRcdHZhciB2bG9nID0gbWUucGxheWVyTGlzdFtjdXJyZW50SW5kZXhdO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRcdFx0XHRoZWFkZXI6IHtcblx0XHRcdFx0XHRcdFx0aGVhZGVyVXNlcklkOiB1c2VySWQsXG5cdFx0XHRcdFx0XHRcdGhlYWRlclVzZXJUb2tlbjogYXBwLmdldFVzZXJTZXNzaW9uVG9rZW4oKVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHVybDogc2VydmVyVXJsICsgXCIvdmxvZy91bmxpa2U/dXNlcklkPVwiICsgdXNlcklkICsgXCImdmxvZ2VySWQ9XCIgKyB2bG9nLnZsb2dlcklkICsgXCImdmxvZ0lkPVwiICsgdmxvZy52bG9nSWQsXG5cdFx0XHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0XHRcdFx0XHRtZS5yZURpc2xpa2VQbGF5TGlzdCh2bG9nLnZsb2dJZCk7XG5cdFx0XHRcdFx0XHRcdFx0bWUucmVmcmVzaFZsb2dDb3VudHMoKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZXN1bHQuZGF0YS5tc2csXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Ly8g5Zac5qyiL+eCuei1nueahGxpc3Tph43mlrDorr7nva5cblx0XHRcdHJlTGlrZVBsYXlMaXN0KHZsb2dJZCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgcGxheWVyTGlzdCA9IG1lLnBsYXllckxpc3Q7XG5cdFx0XHRcdC8vIOWFs+azqOS7peWQju+8jOW+queOr+W9k+WJjXBsYXllckxpc3TvvIzkv67mlLnlr7nlupTnsonkuJ3lhbPns7vnmoRkb0lGb2xsb3dWbG9nZXLmlLnkuLp0cnVlXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwIDsgaSA8IHBsYXllckxpc3QubGVuZ3RoIDsgaSArKykge1xuXHRcdFx0XHRcdHZhciB2bG9nID0gcGxheWVyTGlzdFtpXTtcblx0XHRcdFx0XHRpZiAodmxvZy52bG9nSWQgPT0gdmxvZ0lkKSB7XG5cdFx0XHRcdFx0XHR2bG9nLmRvSUxpa2VUaGlzVmxvZyA9IHRydWU7XG5cdFx0XHRcdFx0XHRwbGF5ZXJMaXN0LnNwbGljZShpLDEsIHZsb2cpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gcGxheWVyTGlzdDtcblx0XHRcdH0sXG5cdFx0XHRyZURpc2xpa2VQbGF5TGlzdCh2bG9nSWQpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHBsYXllckxpc3QgPSBtZS5wbGF5ZXJMaXN0O1xuXHRcdFx0XHQvLyDlhbPms6jku6XlkI7vvIzlvqrnjq/lvZPliY1wbGF5ZXJMaXN077yM5L+u5pS55a+55bqU57KJ5Lid5YWz57O755qEZG9JRm9sbG93VmxvZ2Vy5pS55Li6dHJ1ZVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCA7IGkgPCBwbGF5ZXJMaXN0Lmxlbmd0aCA7IGkgKyspIHtcblx0XHRcdFx0XHR2YXIgdmxvZyA9IHBsYXllckxpc3RbaV07XG5cdFx0XHRcdFx0aWYgKHZsb2cudmxvZ0lkID09IHZsb2dJZCkge1xuXHRcdFx0XHRcdFx0dmxvZy5kb0lMaWtlVGhpc1Zsb2cgPSBmYWxzZTtcblx0XHRcdFx0XHRcdHBsYXllckxpc3Quc3BsaWNlKGksMSwgdmxvZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdG1lLnBsYXllckxpc3QgPSBwbGF5ZXJMaXN0O1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Ly8g5YWz5rOo5ZCO55qEbGlzdOmHjeaWsOiuvue9rlxuXHRcdFx0cmVGb2xsb3dQbGF5TGlzdCh2bG9nZXJJZCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgcGxheWVyTGlzdCA9IG1lLnBsYXllckxpc3Q7XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyDlhbPms6jku6XlkI7vvIzlvqrnjq/lvZPliY1wbGF5ZXJMaXN077yM5L+u5pS55a+55bqU57KJ5Lid5YWz57O755qEZG9JRm9sbG93VmxvZ2Vy5pS55Li6dHJ1ZVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCA7IGkgPCBwbGF5ZXJMaXN0Lmxlbmd0aCA7IGkgKyspIHtcblx0XHRcdFx0XHR2YXIgdmxvZyA9IHBsYXllckxpc3RbaV07XG5cdFx0XHRcdFx0aWYgKHZsb2cudmxvZ2VySWQgPT0gdmxvZ2VySWQpIHtcblx0XHRcdFx0XHRcdHZsb2cuZG9JRm9sbG93VmxvZ2VyID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHBsYXllckxpc3Quc3BsaWNlKGksMSwgdmxvZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdG1lLnBsYXllckxpc3QgPSBwbGF5ZXJMaXN0O1xuXHRcdFx0fSxcblx0XHRcdC8vIOWPluWFs+WQjueahGxpc3Tph43mlrDorr7nva5cblx0XHRcdHJlQ2FuY2VsUGxheUxpc3QodmxvZ2VySWQpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHBsYXllckxpc3QgPSBtZS5wbGF5ZXJMaXN0O1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8g5YWz5rOo5Lul5ZCO77yM5b6q546v5b2T5YmNcGxheWVyTGlzdO+8jOS/ruaUueWvueW6lOeyieS4neWFs+ezu+eahGRvSUZvbGxvd1Zsb2dlcuaUueS4unRydWVcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAgOyBpIDwgcGxheWVyTGlzdC5sZW5ndGggOyBpICsrKSB7XG5cdFx0XHRcdFx0dmFyIHZsb2cgPSBwbGF5ZXJMaXN0W2ldO1xuXHRcdFx0XHRcdGlmICh2bG9nLnZsb2dlcklkID09IHZsb2dlcklkKSB7XG5cdFx0XHRcdFx0XHR2bG9nLmRvSUZvbGxvd1Zsb2dlciA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0cGxheWVyTGlzdC5zcGxpY2UoaSwxLCB2bG9nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0bWUucGxheWVyTGlzdCA9IHBsYXllckxpc3Q7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdC8vIOWFs+azqOWNmuS4u1xuXHRcdFx0Zm9sbG93TWUodmxvZ2VySWQpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIG15VXNlckluZm8gPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKTtcblx0XHRcdFx0aWYgKG15VXNlckluZm8gPT0gbnVsbCkge1xuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDAsXG5cdFx0XHRcdFx0XHR0aXRsZTogXCLor7fnmbvlvZV+XCIsXG5cdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHRcdHVybDogXCIuLi9sb2dpblJlZ2lzdC9sb2dpblJlZ2lzdFwiLFxuXHRcdFx0XHRcdFx0YW5pbWF0aW9uVHlwZTogXCJzbGlkZS1pbi1ib3R0b21cIixcblx0XHRcdFx0XHRcdHN1Y2Nlc3MoKSB7XG5cdFx0XHRcdFx0XHRcdG1lLmxvZ2luV29yZHMgPSBcIuivt+eZu+W9lVwiXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHR2YXIgdXNlcklkID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCkuaWQ7XG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0XHRcdGhlYWRlcjoge1xuXHRcdFx0XHRcdFx0aGVhZGVyVXNlcklkOiB1c2VySWQsXG5cdFx0XHRcdFx0XHRoZWFkZXJVc2VyVG9rZW46IGFwcC5nZXRVc2VyU2Vzc2lvblRva2VuKClcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHVybDogc2VydmVyVXJsICsgXCIvZmFucy9mb2xsb3c/bXlJZD1cIiArIHVzZXJJZCArIFwiJnZsb2dlcklkPVwiICsgdmxvZ2VySWQsXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXN1bHQpIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0XHRcdFx0bWUucmVGb2xsb3dQbGF5TGlzdCh2bG9nZXJJZCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzdWx0LmRhdGEubXNnLFxuXHRcdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdFxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Z29Vc2VySW5mb1NlZVNlZSh1c2VySWQpIHtcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwidXNlclBhZ2VJZFwiLCB1c2VySWQpO1xuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0dXJsOiBcIi9wYWdlcy9tZS92bG9nZXJJbmZvP3VzZXJQYWdlSWQ9XCIgKyB1c2VySWRcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdGxpc3RTY3JvbGwoZSkge1xuXHRcdFx0XHRpZihlLmNvbnRlbnRPZmZzZXQueSA+IDApIHtcblx0XHRcdFx0XHR0aGlzLiRlbWl0KFwic2hvd0xvYWRpbmdcIik7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdGRvd25sb2FkVmxvZygpIHtcblx0XHRcdFx0XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdHZhciBjdXJyZW50SW5kZXggPSBtZS5wbGF5ZXJDdXI7XG5cdFx0XHRcdHZhciB2bG9nID0gbWUucGxheWVyTGlzdFtjdXJyZW50SW5kZXhdO1xuXHRcdFx0XHR2YXIgcGVuZGluZ0xlbmd0aCA9IHZsb2cudXJsO1xuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdGNvcHlMaW5rKCkge1xuXHRcdFx0XHR2YXIgbWUgPSBtZTtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdHNob3dRUkNvZGUoKSB7XG5cdFx0XHRcdHZhciBtZSA9IG1lO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Y2hhbmdlVmxvZ1RvUHJpdmF0ZSgpIHtcblx0XHRcdFx0dmFyIG1lID0gbWU7XG5cdFx0XHR9LFxuXHRcdFx0XHRcdFx0XG5cdFx0XHRvbnJlZnJlc2goZSkge1xuXHRcdFx0XHR0aGlzLnJlZnJlc2hpbmcgPSB0cnVlO1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLnJlZnJlc2hpbmcgPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLiRlbWl0KFwiaGlkZUxvYWRpbmdcIik7XG5cdFx0XHRcdFx0dGhpcy5yZWZyZXNoVGV4dCA9ICfihpMgUHVsbCBUbyBSZWZyZXNoJ1xuXHRcdFx0XHR9LCAzMDApXG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHQvLyDpgJrov4dsaXN057uE5Lu255qE5LiL5ouJ5Yi35paw6Kem5Y+R5b2T5YmN5omA5Zyo6aG16Z2i55qE5LiL5ouJ5Yi35pawXG5cdFx0XHRcdHVuaS5zdGFydFB1bGxEb3duUmVmcmVzaCgpO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0b25wbGF5OiBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmICh1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSAnaW9zJykge1xuXHRcdFx0XHRcdC8vIHRoaXMuJGVtaXQoXCJwbGF5XCIsIDAuMSk7XG5cdFx0XHRcdFx0dGhpcy5kb3BsYXkoMC4xKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdG9uZXJyb3I6IGZ1bmN0aW9uKGVycikge1xuXHRcdFx0fSxcblx0XHRcdHRpbWV1cGRhdGU6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUuZGV0YWlsLmN1cnJlbnRUaW1lID4gMC4yKSB7XG5cdFx0XHRcdFx0Ly8gdGhpcy4kZW1pdChcInBsYXlcIiwgZS5kZXRhaWwuY3VycmVudFRpbWUpO1xuXHRcdFx0XHRcdHRoaXMuZG9wbGF5KGUuZGV0YWlsLmN1cnJlbnRUaW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0cGxheU9yUGF1c2UoKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdHZhciBwbGF5Rm9sbG93U3RhdHVzID0gdGhpcy5wbGF5Rm9sbG93U3RhdHVzO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKCFwbGF5Rm9sbG93U3RhdHVzKSB7XG5cdFx0XHRcdFx0bWUudmlkZW9Db250ZXh0LnBhdXNlKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bWUudmlkZW9Db250ZXh0LnBsYXkoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnBsYXlGb2xsb3dTdGF0dXMgPSAhcGxheUZvbGxvd1N0YXR1cztcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0c2Nyb2xsOiBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGxldCBvcmlnaW5hbEluZGV4ID0gdGhpcy5jdXJyZW50SW5kZXg7XG5cdFx0XHRcdGxldCBpc05leHQgPSBmYWxzZTtcblx0XHRcdFx0aWYgKGUuY29udGVudE9mZnNldC55IDwgdGhpcy5jb250ZW50T2Zmc2V0WSkge1xuXHRcdFx0XHRcdGlzTmV4dCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5jb250ZW50T2Zmc2V0WSA9IGUuY29udGVudE9mZnNldC55O1xuXHRcdFx0XHRcblx0XHRcdFx0dmFyIG51bSA9IHRoaXMucGxheWVyTGlzdC5sZW5ndGg7XG5cdFx0XHRcdFxuXHRcdFx0XHR0aGlzLmN1cnJlbnRJbmRleCA9IE1hdGgucm91bmQoTWF0aC5hYnModGhpcy5jb250ZW50T2Zmc2V0WSkgLyAoZS5jb250ZW50U2l6ZS5oZWlnaHQgLyBudW0pKTtcblx0XHRcdFx0dGhpcy5vbmNoYW5nZSh0aGlzLmN1cnJlbnRJbmRleCk7XG5cdFx0XHRcdFxuXHRcdFx0XHR0aGlzLnRpbWVzID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyDliKTmlq3lpoLmnpzop4bpopHliJfooajmgLvplb/luqYt5b2T5YmN5LiL5qCH77yM5bCR5LqOM+S4qu+8jOWImeW8gOWni+WIhumhteafpeivouWQjue7reeahOinhumike+8jOW5tuS4lOi/veWKoOWIsOeOsOaciWxpc3TkuK1cblx0XHRcdFx0aWYgKCh0aGlzLnBsYXllckxpc3QubGVuZ3RoIC0gdGhpcy5jdXJyZW50SW5kZXgpIDwgMykge1xuXHRcdFx0XHRcdC8vIOWmguaenOimgeWIhumhteeahHBhZ2XlkozmgLvmlbB0b3RhbFBhZ2Xnm7jnrYnvvIzliJnmsqHmnInmm7TlpJpcblx0XHRcdFx0XHRpZiAodGhpcy5wYWdlID09IHRoaXMudG90YWxQYWdlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuZGlzcGxheVZpZGVvUGFnaW5nKHRoaXMucGFnZSArIDEsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8vIOWIhumhteafpeivouaWsOeahGxpc3TvvIzlubbkuJTov73liqDliLDnjrDmnIlsaXN05LitXG5cdFx0XHRkaXNwbGF5VmlkZW9QYWdpbmcocGFnZSwgbmVlZENsZWFyTGlzdCkge1xuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHQvLyDmn6Xor6LpppbpobXnn63op4bpopHliJfooahcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIG15VXNlckluZm8gPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKTtcblx0XHRcdFx0dmFyIHVzZXJJZCA9IFwiXCI7XG5cdFx0XHRcdGlmIChteVVzZXJJbmZvICE9IG51bGwpIHtcblx0XHRcdFx0XHR1c2VySWQgPSBteVVzZXJJbmZvLmlkO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0XHRcdGhlYWRlcjoge1xuXHRcdFx0XHRcdFx0aGVhZGVyVXNlcklkOiB1c2VySWQsXG5cdFx0XHRcdFx0XHRoZWFkZXJVc2VyVG9rZW46IGFwcC5nZXRVc2VyU2Vzc2lvblRva2VuKClcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHVybDogc2VydmVyVXJsICsgXCIvdmxvZy9mb2xsb3dMaXN0P215SWQ9XCIgKyB1c2VySWQgKyBcIiZwYWdlPVwiICsgcGFnZSArIFwiJnBhZ2VTaXplPTEwXCIsXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXN1bHQpIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0XHRcdFx0dmFyIHZsb2dMaXN0ID0gcmVzdWx0LmRhdGEuZGF0YS5yb3dzO1xuXHRcdFx0XHRcdFx0XHR2YXIgdG90YWxQYWdlID0gcmVzdWx0LmRhdGEuZGF0YS50b3RhbDtcblx0XHRcdFx0XHRcdFx0aWYgKG5lZWRDbGVhckxpc3QpIHtcblx0XHRcdFx0XHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gW107XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0bWUucGxheWVyTGlzdCA9IG1lLnBsYXllckxpc3QuY29uY2F0KHZsb2dMaXN0KTtcblx0XHRcdFx0XHRcdFx0bWUucGFnZSA9IHBhZ2U7XG5cdFx0XHRcdFx0XHRcdG1lLnRvdGFsUGFnZSA9IHRvdGFsUGFnZTtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdGlmIChuZWVkQ2xlYXJMaXN0KSB7XG5cdFx0XHRcdFx0XHRcdFx0bWUuc2V0VGhpc1Zsb2dJbmZvKCk7XG5cdFx0XHRcdFx0XHRcdFx0bWUuZnJlc2hDb21tZW50Q291bnRzKCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0bWUuZG9UaW1lcigpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHJlc3VsdC5kYXRhLm1zZyxcblx0XHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y29tcGxldGUoKSB7XG5cdFx0XHRcdFx0XHQvLyBtZS5kb1RpbWVyKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdGRvVGltZXIoKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdHZhciB0ID0gc2V0VGltZW91dCgoKSA9PiB7IFxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmIChtZS5wbGF5ZXJMaXN0ICE9IG51bGwgJiYgbWUucGxheWVyTGlzdCAhPSB1bmRlZmluZWQgJiYgbWUucGxheWVyTGlzdC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRtZS52aWRlb0NvbnRleHQucGF1c2UoKTtcblx0XHRcdFx0XHRcdG1lLnBsYXlGb2xsb3dTdGF0dXMgPSBmYWxzZTtcblx0XHRcdFx0XHR9IFxuXHRcdFx0XHR9LCAzMDAwKVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0ZG9wbGF5OiBmdW5jdGlvbih0aW1lKSB7XG5cdFx0XHRcdGlmICh0aW1lID4gMCkge1xuXHRcdFx0XHRcdHRoaXMucGxheWVyTGlzdFt0aGlzLnBsYXllckN1cl0ucGxheSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRvbmNoYW5nZTogZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRcdFx0aWYgKGluZGV4ICE9IHRoaXMucGxheWVyQ3VyKSB7XG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXJMaXN0W3RoaXMucGxheWVyQ3VyXS5wbGF5ID0gZmFsc2U7XG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXJDdXIgPSBpbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy5yZWZyZXNoVmxvZ0NvdW50cygpO1xuXHRcdFx0XHR0aGlzLnNldFRoaXNWbG9nSW5mbygpO1xuXHRcdFx0XHR0aGlzLmZyZXNoQ29tbWVudENvdW50cygpO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Ly8g6K6+572u5b2T5YmNdmxvZ+eahOS/oeaBr1xuXHRcdFx0c2V0VGhpc1Zsb2dJbmZvKCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKG1lLnBsYXllckxpc3QgIT0gbnVsbCAmJiBtZS5wbGF5ZXJMaXN0ICE9IHVuZGVmaW5lZCAmJiBtZS5wbGF5ZXJMaXN0Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHR2YXIgY3VycmVudEluZGV4ID0gbWUucGxheWVyQ3VyO1xuXHRcdFx0XHRcdHZhciB2bG9nID0gbWUucGxheWVyTGlzdFtjdXJyZW50SW5kZXhdO1xuXHRcdFx0XHRcdHRoaXMudGhpc1Zsb2cgPSB2bG9nO1xuXHRcdFx0XHRcdHRoaXMudGhpc1Zsb2dJZCA9IHZsb2cudmxvZ0lkO1xuXHRcdFx0XHRcdHRoaXMudGhpc1Zsb2dlcklkID0gdmxvZy52bG9nZXJJZDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0cmVmcmVzaFZsb2dDb3VudHMoKSB7XG5cdFx0XHRcdC8vIOafpeivouW9k+WJjeeCuei1nuaVsO+8jOmHjeaWsOi1i+WAvOe7meW9k+WJjeinhumikVxuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHR2YXIgY3VycmVudEluZGV4ID0gbWUucGxheWVyQ3VyO1xuXHRcdFx0XHR2YXIgdmxvZyA9IG1lLnBsYXllckxpc3RbY3VycmVudEluZGV4XTtcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xuXHRcdFx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRcdFx0dXJsOiBzZXJ2ZXJVcmwgKyBcIi92bG9nL3RvdGFsTGlrZWRDb3VudHM/dmxvZ0lkPVwiICsgdmxvZy52bG9nSWQsXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXN1bHQpIHtcblx0XHRcdFx0XHRcdGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBjb3VudHMgPSByZXN1bHQuZGF0YS5kYXRhO1xuXHRcdFx0XHRcdFx0XHRtZS5yZUNoYW5nZVZsb2dMaWtlZENvdW50c0luUGxheUxpc3QodmxvZy52bG9nSWQsIGNvdW50cyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdHJlQ2hhbmdlVmxvZ0xpa2VkQ291bnRzSW5QbGF5TGlzdCh2bG9nSWQsIGNvdW50cykge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgcGxheWVyTGlzdCA9IG1lLnBsYXllckxpc3Q7XG5cdFx0XHRcdC8vIOWFs+azqOS7peWQju+8jOW+queOr+W9k+WJjXBsYXllckxpc3TvvIzkv67mlLnlr7nlupTnsonkuJ3lhbPns7vnmoRkb0lGb2xsb3dWbG9nZXLmlLnkuLp0cnVlXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwIDsgaSA8IHBsYXllckxpc3QubGVuZ3RoIDsgaSArKykge1xuXHRcdFx0XHRcdHZhciB2bG9nID0gcGxheWVyTGlzdFtpXTtcblx0XHRcdFx0XHRpZiAodmxvZy52bG9nSWQgPT0gdmxvZ0lkKSB7XG5cdFx0XHRcdFx0XHR2bG9nLmxpa2VDb3VudHMgPSBjb3VudHM7XG5cdFx0XHRcdFx0XHRwbGF5ZXJMaXN0LnNwbGljZShpLDEsIHZsb2cpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gcGxheWVyTGlzdDtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdGNvbW1lbnRUb2dnbGUoKSB7XG5cdFx0XHRcdHRoaXMuJHJlZnMuY29tbWVudC5vcGVuKCk7XG5cdFx0XHRcdHVuaS5oaWRlVGFiQmFyKHtcblx0XHRcdFx0XHRhbmltYXRpb246IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0c2hhcmVUb2dnbGUoKSB7XG5cdFx0XHRcdHRoaXMuJHJlZnMuc2hhcmUub3BlbigpO1xuXHRcdFx0XHR1bmkuaGlkZVRhYkJhcih7XG5cdFx0XHRcdFx0YW5pbWF0aW9uOiB0cnVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///252\n");

/***/ }),
/* 253 */
/*!********************************************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/components/videoFollowComp.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoFollowComp.vue?vue&type=style&index=0&lang=css& */ 254);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 254 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ASUS/Desktop/MyLive-Dev/components/videoFollowComp.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".icon": {
    "": {
      "width": [
        "80rpx",
        0,
        0,
        0
      ],
      "height": [
        "80rpx",
        0,
        0,
        0
      ],
      "opacity": [
        0.9,
        0,
        0,
        0
      ]
    }
  },
  ".user-face": {
    "": {
      "width": [
        "100rpx",
        0,
        0,
        1
      ],
      "height": [
        "100rpx",
        0,
        0,
        1
      ],
      "borderRadius": [
        "100rpx",
        0,
        0,
        1
      ]
    }
  },
  ".play-cd": {
    "": {
      "width": [
        "150rpx",
        0,
        0,
        2
      ],
      "height": [
        "150rpx",
        0,
        0,
        2
      ],
      "opacity": [
        0.8,
        0,
        0,
        2
      ]
    }
  },
  ".refresh-info-txt": {
    "": {
      "color": [
        "#F1F1F1",
        0,
        0,
        3
      ],
      "textAlign": [
        "center",
        0,
        0,
        3
      ],
      "fontSize": [
        "12",
        0,
        0,
        3
      ]
    }
  },
  ".publish-info-box": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        4
      ],
      "bottom": [
        "200rpx",
        0,
        0,
        4
      ],
      "left": [
        0,
        0,
        0,
        4
      ],
      "right": [
        0,
        0,
        0,
        4
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        4
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        4
      ],
      "flexDirection": [
        "row",
        0,
        0,
        4
      ],
      "justifyContent": [
        "space-between",
        0,
        0,
        4
      ],
      "alignItems": [
        "center",
        0,
        0,
        4
      ]
    }
  },
  ".publish-info-vloger-name": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        5
      ],
      "fontSize": [
        "40rpx",
        0,
        0,
        5
      ],
      "fontWeight": [
        "600",
        0,
        0,
        5
      ],
      "paddingTop": [
        "10rpx",
        0,
        0,
        5
      ],
      "paddingRight": [
        "10rpx",
        0,
        0,
        5
      ],
      "paddingBottom": [
        "10rpx",
        0,
        0,
        5
      ],
      "paddingLeft": [
        "10rpx",
        0,
        0,
        5
      ]
    }
  },
  ".publish-info-music-box": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        6
      ],
      "alignItems": [
        "center",
        0,
        0,
        6
      ]
    }
  },
  ".publish-info-content": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        7
      ],
      "fontSize": [
        "28rpx",
        0,
        0,
        7
      ],
      "fontWeight": [
        "400",
        0,
        0,
        7
      ],
      "paddingTop": [
        "10rpx",
        0,
        0,
        7
      ],
      "paddingRight": [
        "10rpx",
        0,
        0,
        7
      ],
      "paddingBottom": [
        "10rpx",
        0,
        0,
        7
      ],
      "paddingLeft": [
        "10rpx",
        0,
        0,
        7
      ],
      "lines": [
        5,
        0,
        0,
        7
      ],
      "width": [
        "520rpx",
        0,
        0,
        7
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        7
      ]
    }
  },
  ".icon-fire": {
    "": {
      "width": [
        "36rpx",
        0,
        0,
        8
      ],
      "height": [
        "36rpx",
        0,
        0,
        8
      ]
    }
  },
  ".muisc-words": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        9
      ],
      "fontSize": [
        "28rpx",
        0,
        0,
        9
      ],
      "paddingTop": [
        "10rpx",
        0,
        0,
        9
      ],
      "paddingRight": [
        "10rpx",
        0,
        0,
        9
      ],
      "paddingBottom": [
        "10rpx",
        0,
        0,
        9
      ],
      "paddingLeft": [
        "10rpx",
        0,
        0,
        9
      ],
      "width": [
        "400rpx",
        0,
        0,
        9
      ]
    }
  },
  ".some-counts": {
    "": {
      "fontSize": [
        "24rpx",
        0,
        0,
        10
      ],
      "fontWeight": [
        "500",
        0,
        0,
        10
      ],
      "textAlign": [
        "center",
        0,
        0,
        10
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        10
      ],
      "marginTop": [
        "2rpx",
        0,
        0,
        10
      ]
    }
  },
  ".operation-box": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        11
      ],
      "top": [
        0,
        0,
        0,
        11
      ],
      "bottom": [
        0,
        0,
        0,
        11
      ],
      "right": [
        0,
        0,
        0,
        11
      ],
      "alignItems": [
        "center",
        0,
        0,
        11
      ],
      "justifyContent": [
        "center",
        0,
        0,
        11
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        11
      ]
    }
  },
  ".operation-face-box": {
    "": {
      "borderRadius": [
        "100rpx",
        0,
        0,
        12
      ],
      "borderColor": [
        "#FFFFFF",
        0,
        0,
        12
      ],
      "borderWidth": [
        "3rpx",
        0,
        0,
        12
      ]
    }
  },
  ".follow-me": {
    "": {
      "width": [
        "40rpx",
        0,
        0,
        13
      ],
      "height": [
        "40rpx",
        0,
        0,
        13
      ],
      "borderRadius": [
        "10",
        0,
        0,
        13
      ],
      "position": [
        "relative",
        0,
        0,
        13
      ],
      "top": [
        "-20rpx",
        0,
        0,
        13
      ]
    }
  },
  ".like-box": {
    "": {
      "flexDirection": [
        "column",
        0,
        0,
        14
      ],
      "alignItems": [
        "center",
        0,
        0,
        14
      ],
      "marginTop": [
        "30rpx",
        0,
        0,
        14
      ]
    }
  },
  ".comment-and-share-box": {
    "": {
      "flexDirection": [
        "column",
        0,
        0,
        15
      ],
      "alignItems": [
        "center",
        0,
        0,
        15
      ],
      "marginTop": [
        "45rpx",
        0,
        0,
        15
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 255 */
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/ASUS/Desktop/MyLive-Dev/pages/index/index.nvue?vue&type=style&index=0&id=7b909402&scoped=true&lang=css&mpType=page ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_7b909402_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=style&index=0&id=7b909402&scoped=true&lang=css&mpType=page */ 256);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_7b909402_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_7b909402_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_7b909402_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_7b909402_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_7b909402_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 256 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ASUS/Desktop/MyLive-Dev/pages/index/index.nvue?vue&type=style&index=0&id=7b909402&scoped=true&lang=css&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".page": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        1
      ],
      "left": [
        0,
        0,
        0,
        1
      ],
      "right": [
        0,
        0,
        0,
        1
      ],
      "top": [
        0,
        0,
        0,
        1
      ],
      "bottom": [
        0,
        0,
        0,
        1
      ],
      "backgroundColor": [
        "#ececec",
        0,
        0,
        1
      ]
    }
  },
  ".header": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        4
      ],
      "left": [
        0,
        0,
        0,
        4
      ],
      "right": [
        0,
        0,
        0,
        4
      ],
      "flexDirection": [
        "row",
        0,
        0,
        4
      ],
      "height": [
        "100rpx",
        0,
        0,
        4
      ],
      "lineHeight": [
        "100rpx",
        0,
        0,
        4
      ],
      "alignItems": [
        "center",
        0,
        0,
        4
      ],
      "paddingLeft": [
        "40rpx",
        0,
        0,
        4
      ],
      "paddingRight": [
        "40rpx",
        0,
        0,
        4
      ]
    }
  },
  ".header-center": {
    "": {
      "flex": [
        1,
        0,
        0,
        5
      ],
      "flexDirection": [
        "row",
        0,
        0,
        5
      ],
      "alignItems": [
        "center",
        0,
        0,
        5
      ],
      "justifyContent": [
        "center",
        0,
        0,
        5
      ]
    }
  },
  ".header-left": {
    "": {
      "color": [
        "#999999",
        0,
        0,
        6
      ],
      "height": [
        "100rpx",
        0,
        0,
        6
      ],
      "lineHeight": [
        "100rpx",
        0,
        0,
        6
      ],
      "alignItems": [
        "flex-start",
        0,
        0,
        6
      ],
      "justifyContent": [
        "flex-end",
        0,
        0,
        6
      ],
      "fontFamily": [
        "iconfont",
        0,
        0,
        6
      ]
    }
  },
  ".header-right": {
    "": {
      "color": [
        "#999999",
        0,
        0,
        6
      ],
      "height": [
        "100rpx",
        0,
        0,
        6
      ],
      "lineHeight": [
        "100rpx",
        0,
        0,
        6
      ],
      "alignItems": [
        "flex-start",
        0,
        0,
        6
      ],
      "justifyContent": [
        "flex-end",
        0,
        0,
        6
      ],
      "fontFamily": [
        "iconfont",
        0,
        0,
        6
      ]
    }
  },
  ".header-right-search": {
    "": {
      "height": [
        "100rpx",
        0,
        0,
        7
      ]
    }
  },
  ".header-item": {
    "": {
      "alignItems": [
        "center",
        0,
        0,
        8
      ],
      "marginLeft": [
        "6rpx",
        0,
        0,
        8
      ],
      "marginRight": [
        "6rpx",
        0,
        0,
        8
      ]
    }
  },
  ".header-item-title": {
    "": {
      "width": [
        "120rpx",
        0,
        0,
        9
      ],
      "textAlign": [
        "center",
        0,
        0,
        9
      ],
      "height": [
        "60rpx",
        0,
        0,
        9
      ],
      "lineHeight": [
        "60rpx",
        0,
        0,
        9
      ],
      "color": [
        "#000000",
        0,
        0,
        9
      ],
      "fontSize": [
        "16",
        0,
        0,
        9
      ],
      "fontWeight": [
        "600",
        0,
        0,
        9
      ]
    }
  },
  ".header-refresh-title": {
    "": {
      "width": [
        "300rpx",
        0,
        0,
        10
      ],
      "textAlign": [
        "center",
        0,
        0,
        10
      ],
      "height": [
        "60rpx",
        0,
        0,
        10
      ],
      "lineHeight": [
        "60rpx",
        0,
        0,
        10
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        10
      ],
      "fontSize": [
        "16",
        0,
        0,
        10
      ],
      "fontWeight": [
        "600",
        0,
        0,
        10
      ]
    }
  },
  ".header-item-line": {
    "": {
      "height": [
        "5rpx",
        0,
        0,
        11
      ],
      "lineHeight": [
        "8rpx",
        0,
        0,
        11
      ],
      "width": [
        "60rpx",
        0,
        0,
        11
      ],
      "borderRadius": [
        "8rpx",
        0,
        0,
        11
      ]
    }
  },
  ".my-swiper": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        14
      ],
      "left": [
        0,
        0,
        0,
        14
      ],
      "right": [
        0,
        0,
        0,
        14
      ],
      "top": [
        0,
        0,
        0,
        14
      ],
      "bottom": [
        0,
        0,
        0,
        14
      ]
    }
  },
  ".near-by": {
    "": {
      "backgroundColor": [
        "#ececec",
        0,
        0,
        15
      ],
      "alignItems": [
        "center",
        0,
        0,
        15
      ],
      "justifyContent": [
        "center",
        0,
        0,
        15
      ]
    }
  },
  ".my-follow": {
    "": {
      "backgroundColor": [
        "#ececec",
        0,
        0,
        16
      ],
      "alignItems": [
        "center",
        0,
        0,
        16
      ],
      "justifyContent": [
        "center",
        0,
        0,
        16
      ]
    }
  },
  ".warn-info": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        18
      ],
      "fontSize": [
        "36rpx",
        0,
        0,
        18
      ],
      "fontWeight": [
        "600",
        0,
        0,
        18
      ]
    }
  },
  ".normal-img": {
    "": {
      "width": [
        "50rpx",
        0,
        0,
        19
      ],
      "height": [
        "50rpx",
        0,
        0,
        19
      ],
      "opacity": [
        0.8,
        0,
        0,
        19
      ]
    }
  },
  ".img": {
    "": {
      "width": [
        "750rpx",
        0,
        0,
        20
      ],
      "height": [
        "1100rpx",
        0,
        0,
        20
      ],
      "opacity": [
        0.8,
        0,
        0,
        20
      ]
    }
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);
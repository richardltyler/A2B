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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../../node_modules/normalize.css/normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  margin: 0; }\n\nh1 {\n  margin: 1rem 0rem 0rem 0rem;\n  color: #FFFFFF;\n  font-size: 4rem; }\n\nh2 {\n  font-size: 2rem; }\n\n.hidden {\n  display: none !important; }\n\n.heading {\n  background: #092327;\n  width: 100%;\n  height: 100px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding-left: 2rem; }\n\n.logo {\n  display: flex; }\n  .logo .plane-icon {\n    height: 2rem;\n    width: 3rem;\n    color: black; }\n\n.user-display {\n  color: #FFFFFF;\n  margin-right: 4rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n  .user-display .username {\n    margin: 0.3rem 0rem 0.5rem 0rem;\n    font-size: 1.5rem; }\n\n.trip-display {\n  padding-left: 1rem;\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-template-rows: 80px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-template-areas: \"headline headline headline headline headline headline\" \"sidebar card-grid card-grid card-grid card-grid card-grid\" \"sidebar card-grid card-grid card-grid card-grid card-grid\" \"sidebar card-grid card-grid card-grid card-grid card-grid\" \"sidebar card-grid card-grid card-grid card-grid card-grid\" \"sidebar card-grid card-grid card-grid card-grid card-grid\" \"sidebar card-grid card-grid card-grid card-grid card-grid\" \"sidebar card-grid card-grid card-grid card-grid card-grid\" \"sidebar card-grid card-grid card-grid card-grid card-grid\"; }\n  .trip-display--sidebar {\n    grid-area: sidebar;\n    padding: 0rem 1rem 0rem 1rem; }\n  .trip-display--headline {\n    grid-area: headline;\n    color: #092327;\n    padding-left: 1rem;\n    text-decoration: underline; }\n  .trip-display--card-grid {\n    grid-area: card-grid; }\n\n.sidebar--cost-display {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: #092327; }\n  .sidebar--cost-display h3 {\n    font-size: 1rem;\n    margin: 0px;\n    width: 10rem; }\n  .sidebar--cost-display h4 {\n    font-size: 2.25rem;\n    margin-top: .5rem; }\n\n.sidebar--booking {\n  display: flex;\n  flex-direction: column;\n  color: #092327; }\n  .sidebar--booking label {\n    margin-top: 1rem; }\n  .sidebar--booking button {\n    width: 8rem;\n    margin-top: 1rem; }\n  .sidebar--booking #sidebar--booking--button--label, .sidebar--booking #dropdown-menu-lable {\n    position: absolute;\n    display: block;\n    overflow: hidden;\n    clip: rect(1px 1px 1px 1px);\n    clip: rect(1px, 1px, 1px, 1px);\n    width: 1px;\n    height: 1px;\n    white-space: nowrap;\n    clip-path: inset(1px); }\n  .sidebar--booking h6 {\n    margin-top: 10px;\n    font-size: 2.5rem;\n    color: #092327; }\n\n@media screen and (max-width: 600px) {\n  .trip-display {\n    padding-left: 1rem;\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 50px 400px 1fr;\n    grid-template-areas: \"headline headline headline\" \"sidebar sidebar sidebar\" \"card-grid card-grid card-grid\"; }\n    .trip-display--sidebar {\n      grid-area: sidebar;\n      padding-left: 0; }\n    .trip-display--headline {\n      grid-area: headline;\n      color: #092327;\n      padding-left: 1rem;\n      text-decoration: underline; }\n    .trip-display--card-grid {\n      grid-area: card-grid; }\n  .trip-display--sidebar {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; }\n  .sidebar--cost-display {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100px;\n    height: 100%;\n    overflow-wrap: break-word;\n    word-wrap: break-word; }\n    .sidebar--cost-display h3 {\n      font-size: 0.75rem;\n      width: 100px; }\n    .sidebar--cost-display h4 {\n      font-size: 1.25rem;\n      margin-bottom: 10px; }\n  .sidebar--booking {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%; }\n    .sidebar--booking .input {\n      height: 20px;\n      width: 150px; }\n    .sidebar--booking select {\n      width: 100px; }\n    .sidebar--booking h6 {\n      font-size: 1rem; }\n    .sidebar--booking button {\n      height: 15px;\n      width: 50px;\n      font-size: 10px;\n      margin-top: 5px;\n      padding: 0; } }\n\n.trip-display--card-grid {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.container {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap; }\n\n.trip-display--card {\n  color: #092327;\n  background: #B4B3B2;\n  height: 23rem;\n  width: 18rem;\n  margin: 0rem 1rem 1rem 0rem;\n  border-radius: .3rem;\n  box-shadow: 10px 10px 50px #D2D1D1 inset;\n  display: block;\n  padding: 1rem; }\n  .trip-display--card img {\n    height: 10rem;\n    width: 100%;\n    border-radius: .3rem; }\n  .trip-display--card .card--time {\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n\n.trip-display--status {\n  height: 2rem;\n  width: 5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid #EFC027;\n  margin: 0px; }\n  .trip-display--status .card--trip-status {\n    font-size: 0.75rem;\n    margin: 0; }\n\n.overlay {\n  filter: alpha(opacity=50);\n  background-color: black;\n  height: 100%;\n  left: 0;\n  opacity: 0.5;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100; }\n\n.login--window {\n  z-index: 101;\n  background: white;\n  width: 200px;\n  height: 200px;\n  margin: 0 auto;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 30%;\n  border: 1px solid;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  padding: 1rem; }\n  .login--window .login-button {\n    align-self: flex-start;\n    height: 25px;\n    width: 50px; }\n", "",{"version":3,"sources":["webpack://./src/css/_base.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_header.scss","webpack://./src/css/_main.scss","webpack://./src/css/_cards.scss","webpack://./src/css/_login-window.scss"],"names":[],"mappings":"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","sourcesContent":["body {\n  margin: 0;\n}\n\nh1 {\n  margin: 1rem 0rem 0rem 0rem;\n  color: $white;\n  font-size: 4rem;\n}\n\nh2 {\n  font-size: 2rem;\n}\n\n.hidden {\n  display: none !important;\n}\n\n","// COLORS\n$green: #092327;\n$light-gray: #D2D1D1;\n$white: #FFFFFF;\n$dark-gray: #B4B3B2;\n$yellow: #EFC027;\n\n// MIXINS\n @mixin rounded-corners($radius) {\n  border-radius: .3rem;\n }",".heading {\n  background: $green;\n  width: 100%;\n  height: 100px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding-left: 2rem;\n}\n\n.logo {\n  display: flex;\n  \n  .plane-icon {\n    height: 2rem;\n    width: 3rem;\n    color: black;\n  }\n}\n\n.user-display {\n  color: $white;\n  margin-right: 4rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  .username {\n    margin: 0.3rem 0rem 0.5rem 0rem;\n    font-size: 1.5rem;\n  }\n}\n\n",".trip-display {\n  padding-left: 1rem;\n  height: 100%;\n  width: 100%;\n  display: grid; \n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-template-rows: 80px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-template-areas: \n    \"headline headline headline headline headline headline\"\n    \"sidebar card-grid card-grid card-grid card-grid card-grid\"\n    \"sidebar card-grid card-grid card-grid card-grid card-grid\"\n    \"sidebar card-grid card-grid card-grid card-grid card-grid\"\n    \"sidebar card-grid card-grid card-grid card-grid card-grid\"\n    \"sidebar card-grid card-grid card-grid card-grid card-grid\"\n    \"sidebar card-grid card-grid card-grid card-grid card-grid\"\n    \"sidebar card-grid card-grid card-grid card-grid card-grid\"\n    \"sidebar card-grid card-grid card-grid card-grid card-grid\"\n  ;\n\n  &--sidebar {\n    grid-area: sidebar;\n    padding: 0rem 1rem 0rem 1rem;\n  }\n\n  &--headline {\n    grid-area: headline;\n    color: $green;\n    padding-left: 1rem;\n    text-decoration: underline;\n  }\n\n  &--card-grid {\n    grid-area: card-grid;\n  }\n}\n\n.sidebar--cost-display {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: $green;\n\n  h3 {\n    font-size: 1rem;\n    margin: 0px;\n    width: 10rem;\n  }\n\n  h4 {\n    font-size: 2.25rem;\n    margin-top: .5rem;\n  }\n}\n\n.sidebar--booking {\n  display: flex;\n  flex-direction: column;\n  color: $green;\n  \n  label {\n    margin-top: 1rem;\n  }\n\n  button {\n    width: 8rem;\n    margin-top: 1rem;\n  }\n\n  #sidebar--booking--button--label, #dropdown-menu-lable  {\n    position: absolute;\n    display: block;\n    overflow: hidden;\n    clip: rect(1px 1px 1px 1px);\n    clip: rect(1px, 1px, 1px, 1px);\n    width: 1px;\n    height: 1px;\n    white-space: nowrap;\n    clip-path: inset(1px);\n  }\n\n  h6 {\n    margin-top: 10px;\n    font-size: 2.5rem;\n    color: $green;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .trip-display {\n    padding-left: 1rem;\n    height: 100%;\n    width: 100%;\n    display: grid; \n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 50px 400px 1fr;\n    grid-template-areas: \n      \"headline headline headline\"\n      \"sidebar sidebar sidebar\"\n      \"card-grid card-grid card-grid\"\n    ;\n  \n    &--sidebar {\n      grid-area: sidebar;\n      padding-left: 0;\n    }\n  \n    &--headline {\n      grid-area: headline;\n      color: $green;\n      padding-left: 1rem;\n      text-decoration: underline;\n    }\n  \n    &--card-grid {\n      grid-area: card-grid;\n    }\n  }\n\n  .trip-display--sidebar {\n   display: flex;\n   flex-direction: column;\n   justify-content: center;\n   align-items: center;\n  }\n\n  .sidebar--cost-display {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100px;\n    height: 100%;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n\n    h3 {\n      font-size: 0.75rem;  \n      width: 100px;    \n    }\n\n    h4 {\n      font-size: 1.25rem;\n      margin-bottom: 10px;\n    }\n  }\n\n  .sidebar--booking {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n\n    .input {\n      height: 20px;\n      width: 150px;\n    }\n\n    select {\n      width: 100px;\n    }\n\n    h6 {\n      font-size: 1rem;\n    }\n\n    button {\n      height: 15px;\n      width: 50px;\n      font-size: 10px;\n      margin-top: 5px;\n      padding: 0;\n    }\n  }\n\n\n}",".trip-display--card-grid {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.container {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.trip-display--card {\n  color: $green;\n  background: $dark-gray;\n  height: 23rem;\n  width: 18rem;\n  margin: 0rem 1rem 1rem 0rem;\n  @include rounded-corners(0.3rem);\n  box-shadow: 10px 10px 50px $light-gray inset;\n  display: block;\n  padding: 1rem;\n\n  img {\n    height: 10rem;\n    width: 100%;\n    @include rounded-corners(0.3rem)\n  }\n\n  .card--time {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n}\n\n.trip-display--status {\n  height: 2rem;\n  width: 5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid $yellow;\n  margin: 0px;\n\n  .card--trip-status {\n    font-size: 0.75rem;\n    margin: 0;\n  }\n}",".overlay {\n  filter: alpha(opacity=50);\n  background-color: black;\n  height: 100%;\n  left: 0;\n  opacity: 0.5;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100;\n}\n\n.login--window {\n  z-index: 101; \n  background: white;\n  width: 200px;\n  height: 200px;\n  margin:0 auto;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 30%; \n  border: 1px solid;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  padding: 1rem;\n\n  .login-button {\n    align-self: flex-start;\n    height: 25px;\n    width: 50px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Trip.js":
/*!*********************!*\
  !*** ./src/Trip.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Trip {
  constructor(tripData) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.travelers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivities = tripData.suggestedActivities;
  }

  getDestination(destinationData) {
    this.destination = destinationData.find(destination => destination.id === this.destinationID);
  }

  getTravelCost() {
    const lodging = this.destination.estimatedLodgingCostPerDay * this.duration;
    const flights = this.destination.estimatedFlightCostPerPerson * this.travelers;
    const agentsFee = 1.1;

    return parseInt((agentsFee * (lodging + flights)).toFixed(2));
  }

  getUnixDepartureDate() {
    return new Date(this.date).getTime();
  }

  getUnixReturnDate() {
    const durationTime = this.duration * 86400000;
    const departureDate = this.getUnixDepartureDate();
    const returnDate = new Date(departureDate + durationTime).getTime();
    
    return returnDate;
  }
}

module.exports = Trip;

/***/ }),

/***/ "./src/User.js":
/*!*********************!*\
  !*** ./src/User.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.travelerType = userData.travelerType;
  }

  getTripData(tripData) {
    const usersTrips = tripData.filter(trip => trip.userID === this.id);
    this.trips = usersTrips.sort((a, b) => a.getUnixDepartureDate() - b.getUnixDepartureDate());
  }

  getCostOfYearsTravel(currentDate) {
    const pastYearsTrips = this.getTripsFromPastYear(currentDate);
    const cost = pastYearsTrips.reduce((acc, trip) => {
      acc += trip.getTravelCost();
      return acc;
    }, 0);

    return `$${cost}`;
  }

  getTripsFromPastYear(currentDate) {
    const currentYear = currentDate.getFullYear();
    const pastYearsTrips = this.trips.reduce((acc, trip) => {
      const tripYear = new Date(trip.date).getFullYear();

      if (tripYear === currentYear - 1) {
        acc.push(trip);
      }

      return acc;
    }, [])

    return pastYearsTrips;
  }
}

module.exports = User;

/***/ }),

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const domUpdates = {
  hideElement(element) {
    const elementToHide = document.getElementById(element);

    if (!elementToHide.classList.value.includes('hidden')) {
      elementToHide.classList.add('hidden');
    }
  },

  revealElement(element) {
    const elementToHide = document.getElementById(element);
  
    elementToHide.classList.remove('hidden');
  },

  displayCurrrentUser(user) {
    const usernameDisplay = document.querySelector('.username');
    usernameDisplay.innerText = user.name.split(' ')[0];
    usernameDisplay.id = user.id;
  },

  clearCards() {
    const cardContainer = document.querySelector('.container');
    const allChildrenElements = cardContainer.querySelectorAll('article');
    allChildrenElements.forEach(element => {
      cardContainer.removeChild(element);
    });
  },

  createTripCard(trip) {
    const cardContainer = document.querySelector('.container');
    const cardTemplate = document.getElementById('card-template');
    const newTripCard = cardTemplate.content.cloneNode(true);
    const cardImage = newTripCard.querySelector('img.card--image');
  
    newTripCard.querySelector('article.trip-display--card').id = trip.id;
    newTripCard.querySelector('h4.card--title').innerText = trip.destination.destination;
    newTripCard.querySelector('h5.departure').innerText = trip.date;
    newTripCard.querySelector('h5.duration').innerText = `${trip.duration} days`;
    newTripCard.querySelector('h5.card--trip-status').innerText = trip.status.toUpperCase();
    cardImage.src = trip.destination.image;
    cardImage.alt = trip.destination.alt;
  
    cardContainer.appendChild(newTripCard);
  },

  displayLastYearsExpenses(cost) {
    const costDisplay = document.getElementById('cost-display');
    costDisplay.innerText = cost;
  },

  addDestinationOptions(destinationData) {
    const destinationList = destinationData.sort((a, b) => a.destination - b.destination);
  
    this.createNewOptions(destinationList);
  },

  createNewOptions(optionsList) {
    const dropdown = document.getElementById('destinations-dropdown');
  
    optionsList.forEach(option => {
      const newOptionElement = document.createElement("option");
      newOptionElement.value = option.destination;
      newOptionElement.innerText = option.destination;
      newOptionElement.id = option.id;
  
      dropdown.appendChild(newOptionElement);
    });
  },

  displayMessageInBookingArea(message) {
    const bookingArea = document.querySelector('.sidebar--booking');
    const messageDisplay = bookingArea.querySelectorAll('h6');
    messageDisplay.forEach(element => element.remove());
    
    if (message) {
      const newElement = document.createElement('h6');
      newElement.innerText = message;
      newElement.id = 'booking-message';
    
      bookingArea.appendChild(newElement);
    }
  },

  displayMessage(message) {
    const messageDisplay = document.getElementById('error-message');

    messageDisplay.innerText = message;
  },

  displayPostError(message) {
    const errorDisplay = document.getElementById('cost-display');

    errorDisplay.innerText = message;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);

/***/ }),

/***/ "./src/fetch.js":
/*!**********************!*\
  !*** ./src/fetch.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const fetchAPI = {
  getData(dataset) {
    return fetch(`http://localhost:3001/api/v1/${dataset}`)
      .then(response => response.json())
  },

  postData(body) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    };

    return fetch(`http://localhost:3001/api/v1/trips`, options)
      .then(response => response.json())
      .catch(error => console.log(error));
  }  
};

/* harmony default export */ __webpack_exports__["default"] = (fetchAPI);

/***/ }),

/***/ "./src/images/icons8-change-user-50.png":
/*!**********************************************!*\
  !*** ./src/images/icons8-change-user-50.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/icons8-change-user-50.png");

/***/ }),

/***/ "./src/images/icons8-paper-plane-64.png":
/*!**********************************************!*\
  !*** ./src/images/icons8-paper-plane-64.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/icons8-paper-plane-64.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.scss */ "./src/css/index.scss");
/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch.js */ "./src/fetch.js");
/* harmony import */ var _scripts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts.js */ "./src/scripts.js");
/* harmony import */ var _images_icons8_paper_plane_64_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/icons8-paper-plane-64.png */ "./src/images/icons8-paper-plane-64.png");
/* harmony import */ var _images_icons8_change_user_50_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/icons8-change-user-50.png */ "./src/images/icons8-change-user-50.png");

// import './User.js';
// import './Destination.js';
// import './Trip.js';












/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.scss */ "./src/css/index.scss");
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch */ "./src/fetch.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./src/User.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_User__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Trip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Trip */ "./src/Trip.js");
/* harmony import */ var _Trip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Trip__WEBPACK_IMPORTED_MODULE_4__);
// WEBPACK IMPORTS







// QUERY SELECTORS
const costButton = document.getElementById('cost-button');
const bookingButton = document.getElementById('booking-button');
const loginButton = document.getElementById('login-button');

// EVENT LISTENERS
loginButton.addEventListener('click', checkUserName);
bookingButton.addEventListener('click', bookTrip);

// GLOBAL VARIABLES
let currentUser;
let allTrips;
let allDestinations;
let tripToPost;
let todaysDate = new Date();

// FETCH DATA
// // GET
function getData(userID) {
  const fetchData = [
    _fetch__WEBPACK_IMPORTED_MODULE_2__["default"].getData(`travelers/${userID}`), 
    _fetch__WEBPACK_IMPORTED_MODULE_2__["default"].getData('trips'), 
    _fetch__WEBPACK_IMPORTED_MODULE_2__["default"].getData('destinations')
  ];

  Promise.all(fetchData)
    .then(value => { 
      if (value[0].id) {
        _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hideElement('overlay'); 
        _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].hideElement('login-window');
        generateUser(value[0]);
        const trips = generateTrips(value[1], value[2]);
        currentUser.getTripData(trips);
        _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].clearCards();
        _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].displayLastYearsExpenses(currentUser.getCostOfYearsTravel(todaysDate));
        _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].addDestinationOptions(value[2].destinations);
        currentUser.trips.forEach(trip => _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].createTripCard(trip));
      } else {
        _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].displayMessage('That username does not match');
      }
    })
    .then(costButton.addEventListener('click', getNewTripToPost));
}

// // POST
function bookTrip(event) {
  event.preventDefault();
  const estimatedCost = document.getElementById('booking-message');

  if (tripToPost && estimatedCost && estimatedCost.innerText.includes('$')) {
    _fetch__WEBPACK_IMPORTED_MODULE_2__["default"].postData(tripToPost)
      .then(getData(currentUser.id))
      .then(_domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].displayMessageInBookingArea('successfully requested new trip'));
  } else {
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].displayMessageInBookingArea('You need to fill out all forms or check the cost first');
  }
}

// EVENT HANDLERS AND HELPER FUNCTIONS
function checkUserName(event) {
  const password = document.getElementById('password-input').value;
  const usernameInput = document.getElementById('username-input').value;
  const word = usernameInput.slice(0, 8);
  const userID = parseInt(usernameInput.slice(8));

  if (word === 'traveler' && password === 'travel2020' && userID) {
    getData(userID, event);
  } else { 
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].displayMessage('PASSWORD OR USERNAME IS INCORRECT');
  }
}

function generateUser(userData) {
  currentUser = new _User__WEBPACK_IMPORTED_MODULE_3___default.a(userData);

  _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].displayCurrrentUser(currentUser);
}

function generateTrips(tripData, destinationData) {
  allTrips = tripData.trips;
  allDestinations = destinationData.destinations;
  const trips = allTrips.map(trip => new _Trip__WEBPACK_IMPORTED_MODULE_4___default.a(trip));
  trips.forEach(trip => trip.getDestination(allDestinations));

  return trips;
}

function getNewTripToPost(event) {
  const numberOfTravelers = document.getElementById('travelers-input').value;
  const durationInput = document.getElementById('duration-input').value;
  const selectedDate = document.getElementById('date-input').value;
  event.preventDefault();

  if (numberOfTravelers && durationInput && selectedDate) {
    const tripData =  {
      id: getTripId(), 
      userID: currentUser.id, 
      destinationID: getDestinationOptionID(), 
      travelers: numberOfTravelers, 
      date: formatDate(selectedDate),
      duration: durationInput, 
      status: 'pending', 
      suggestedActivities: []
    };

    tripToPost = new _Trip__WEBPACK_IMPORTED_MODULE_4___default.a(tripData);

    tripToPost.getDestination(allDestinations);
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].displayMessageInBookingArea(`$${tripToPost.getTravelCost()}`);
  } else {
    _domUpdates__WEBPACK_IMPORTED_MODULE_1__["default"].displayMessageInBookingArea('All forms must be filled out');
  }
}

function getTripId() {
  const sortedTrips = allTrips.sort((a, b) => b.id - a.id);
  const highestTripID = sortedTrips[0].id;

  return highestTripID + 1;
}

function getDestinationOptionID() {
  const destinationsDropdown = document.getElementById('destinations-dropdown');

  const selectedDestination = destinationsDropdown.value;
  const optionsList = Array.from(destinationsDropdown.options);
  const selection = optionsList.find(option => option.value === selectedDestination);

  return parseInt(selection.id);
}

function formatDate(date) {
  const dateInfo = date.split('-');

  return dateInfo.join('/');
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RyaXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5zY3NzPzdhYjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZldGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaWNvbnM4LWNoYW5nZS11c2VyLTUwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2ljb25zOC1wYXBlci1wbGFuZS02NC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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O0FBQ1AsUUFBUSxtREFBVTtBQUNsQjtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSw4Q0FBUTtBQUNaO0FBQ0EsWUFBWSxtREFBVTtBQUN0QixHQUFHO0FBQ0gsSUFBSSxtREFBVTtBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLE87QUFDSCxJQUFJLG1EQUFVO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiw0Q0FBSTs7QUFFeEIsRUFBRSxtREFBVTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyw0Q0FBSTtBQUM3Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsNENBQUk7O0FBRXpCO0FBQ0EsSUFBSSxtREFBVSxpQ0FBaUMsMkJBQTJCO0FBQzFFLEdBQUc7QUFDSCxJQUFJLG1EQUFVO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUEyRTs7QUFFM0U7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSxpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLDhCQUE4QixFQUFFLE1BQU07QUFDeEM7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLFNBQVM7QUFDWDs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtFQUNFLHVCQUF1QixFQUFFLE1BQU07RUFDL0IsU0FBUyxFQUFFLE1BQU07RUFDakIsaUJBQWlCLEVBQUUsTUFBTTtBQUMzQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsbUJBQW1CLEVBQUUsTUFBTTtFQUMzQiwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGlDQUFpQyxFQUFFLE1BQU07QUFDM0M7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRTs7QUFFRjs7O0VBR0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGOztFQUVFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjs7Ozs7RUFLRSxvQkFBb0IsRUFBRSxNQUFNO0VBQzVCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLGlCQUFpQixFQUFFLE1BQU07RUFDekIsU0FBUyxFQUFFLE1BQU07QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGO1FBQ1EsTUFBTTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0U7O0FBRUY7U0FDUyxNQUFNO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTs7Ozs7RUFLRTs7QUFFRjtFQUNFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsY0FBYyxFQUFFLE1BQU07RUFDdEIsY0FBYyxFQUFFLE1BQU07RUFDdEIsZUFBZSxFQUFFLE1BQU07RUFDdkIsVUFBVSxFQUFFLE1BQU07RUFDbEIsbUJBQW1CLEVBQUUsTUFBTTtBQUM3Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGOztFQUVFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsVUFBVSxFQUFFLE1BQU07QUFDcEI7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsWUFBWTtBQUNkOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLDZCQUE2QixFQUFFLE1BQU07RUFDckMsb0JBQW9CLEVBQUUsTUFBTTtBQUM5Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGFBQWEsRUFBRSxNQUFNO0FBQ3ZCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuaDEge1xcbiAgbWFyZ2luOiAxcmVtIDByZW0gMHJlbSAwcmVtO1xcbiAgY29sb3I6ICNGRkZGRkY7XFxuICBmb250LXNpemU6IDRyZW07IH1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDJyZW07IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbi5oZWFkaW5nIHtcXG4gIGJhY2tncm91bmQ6ICMwOTIzMjc7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtOyB9XFxuXFxuLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDsgfVxcbiAgLmxvZ28gLnBsYW5lLWljb24ge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICBjb2xvcjogYmxhY2s7IH1cXG5cXG4udXNlci1kaXNwbGF5IHtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC51c2VyLWRpc3BsYXkgLnVzZXJuYW1lIHtcXG4gICAgbWFyZ2luOiAwLjNyZW0gMHJlbSAwLjVyZW0gMHJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07IH1cXG5cXG4udHJpcC1kaXNwbGF5IHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkbGluZSBoZWFkbGluZSBoZWFkbGluZSBoZWFkbGluZSBoZWFkbGluZSBoZWFkbGluZVxcXCIgXFxcInNpZGViYXIgY2FyZC1ncmlkIGNhcmQtZ3JpZCBjYXJkLWdyaWQgY2FyZC1ncmlkIGNhcmQtZ3JpZFxcXCIgXFxcInNpZGViYXIgY2FyZC1ncmlkIGNhcmQtZ3JpZCBjYXJkLWdyaWQgY2FyZC1ncmlkIGNhcmQtZ3JpZFxcXCIgXFxcInNpZGViYXIgY2FyZC1ncmlkIGNhcmQtZ3JpZCBjYXJkLWdyaWQgY2FyZC1ncmlkIGNhcmQtZ3JpZFxcXCIgXFxcInNpZGViYXIgY2FyZC1ncmlkIGNhcmQtZ3JpZCBjYXJkLWdyaWQgY2FyZC1ncmlkIGNhcmQtZ3JpZFxcXCIgXFxcInNpZGViYXIgY2FyZC1ncmlkIGNhcmQtZ3JpZCBjYXJkLWdyaWQgY2FyZC1ncmlkIGNhcmQtZ3JpZFxcXCIgXFxcInNpZGViYXIgY2FyZC1ncmlkIGNhcmQtZ3JpZCBjYXJkLWdyaWQgY2FyZC1ncmlkIGNhcmQtZ3JpZFxcXCIgXFxcInNpZGViYXIgY2FyZC1ncmlkIGNhcmQtZ3JpZCBjYXJkLWdyaWQgY2FyZC1ncmlkIGNhcmQtZ3JpZFxcXCIgXFxcInNpZGViYXIgY2FyZC1ncmlkIGNhcmQtZ3JpZCBjYXJkLWdyaWQgY2FyZC1ncmlkIGNhcmQtZ3JpZFxcXCI7IH1cXG4gIC50cmlwLWRpc3BsYXktLXNpZGViYXIge1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIHBhZGRpbmc6IDByZW0gMXJlbSAwcmVtIDFyZW07IH1cXG4gIC50cmlwLWRpc3BsYXktLWhlYWRsaW5lIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkbGluZTtcXG4gICAgY29sb3I6ICMwOTIzMjc7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG4gIC50cmlwLWRpc3BsYXktLWNhcmQtZ3JpZCB7XFxuICAgIGdyaWQtYXJlYTogY2FyZC1ncmlkOyB9XFxuXFxuLnNpZGViYXItLWNvc3QtZGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjMDkyMzI3OyB9XFxuICAuc2lkZWJhci0tY29zdC1kaXNwbGF5IGgzIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgd2lkdGg6IDEwcmVtOyB9XFxuICAuc2lkZWJhci0tY29zdC1kaXNwbGF5IGg0IHtcXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTsgfVxcblxcbi5zaWRlYmFyLS1ib29raW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY29sb3I6ICMwOTIzMjc7IH1cXG4gIC5zaWRlYmFyLS1ib29raW5nIGxhYmVsIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTsgfVxcbiAgLnNpZGViYXItLWJvb2tpbmcgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDhyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07IH1cXG4gIC5zaWRlYmFyLS1ib29raW5nICNzaWRlYmFyLS1ib29raW5nLS1idXR0b24tLWxhYmVsLCAuc2lkZWJhci0tYm9va2luZyAjZHJvcGRvd24tbWVudS1sYWJsZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGNsaXA6IHJlY3QoMXB4IDFweCAxcHggMXB4KTtcXG4gICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xcbiAgICB3aWR0aDogMXB4O1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgY2xpcC1wYXRoOiBpbnNldCgxcHgpOyB9XFxuICAuc2lkZWJhci0tYm9va2luZyBoNiB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBjb2xvcjogIzA5MjMyNzsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAudHJpcC1kaXNwbGF5IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggNDAwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGxpbmUgaGVhZGxpbmUgaGVhZGxpbmVcXFwiIFxcXCJzaWRlYmFyIHNpZGViYXIgc2lkZWJhclxcXCIgXFxcImNhcmQtZ3JpZCBjYXJkLWdyaWQgY2FyZC1ncmlkXFxcIjsgfVxcbiAgICAudHJpcC1kaXNwbGF5LS1zaWRlYmFyIHtcXG4gICAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAwOyB9XFxuICAgIC50cmlwLWRpc3BsYXktLWhlYWRsaW5lIHtcXG4gICAgICBncmlkLWFyZWE6IGhlYWRsaW5lO1xcbiAgICAgIGNvbG9yOiAjMDkyMzI3O1xcbiAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcbiAgICAudHJpcC1kaXNwbGF5LS1jYXJkLWdyaWQge1xcbiAgICAgIGdyaWQtYXJlYTogY2FyZC1ncmlkOyB9XFxuICAudHJpcC1kaXNwbGF5LS1zaWRlYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC5zaWRlYmFyLS1jb3N0LWRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkOyB9XFxuICAgIC5zaWRlYmFyLS1jb3N0LWRpc3BsYXkgaDMge1xcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgICB3aWR0aDogMTAwcHg7IH1cXG4gICAgLnNpZGViYXItLWNvc3QtZGlzcGxheSBoNCB7XFxuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG4gIC5zaWRlYmFyLS1ib29raW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlOyB9XFxuICAgIC5zaWRlYmFyLS1ib29raW5nIC5pbnB1dCB7XFxuICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgIHdpZHRoOiAxNTBweDsgfVxcbiAgICAuc2lkZWJhci0tYm9va2luZyBzZWxlY3Qge1xcbiAgICAgIHdpZHRoOiAxMDBweDsgfVxcbiAgICAuc2lkZWJhci0tYm9va2luZyBoNiB7XFxuICAgICAgZm9udC1zaXplOiAxcmVtOyB9XFxuICAgIC5zaWRlYmFyLS1ib29raW5nIGJ1dHRvbiB7XFxuICAgICAgaGVpZ2h0OiAxNXB4O1xcbiAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgICAgcGFkZGluZzogMDsgfSB9XFxuXFxuLnRyaXAtZGlzcGxheS0tY2FyZC1ncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDsgfVxcblxcbi50cmlwLWRpc3BsYXktLWNhcmQge1xcbiAgY29sb3I6ICMwOTIzMjc7XFxuICBiYWNrZ3JvdW5kOiAjQjRCM0IyO1xcbiAgaGVpZ2h0OiAyM3JlbTtcXG4gIHdpZHRoOiAxOHJlbTtcXG4gIG1hcmdpbjogMHJlbSAxcmVtIDFyZW0gMHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IC4zcmVtO1xcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDUwcHggI0QyRDFEMSBpbnNldDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMXJlbTsgfVxcbiAgLnRyaXAtZGlzcGxheS0tY2FyZCBpbWcge1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjNyZW07IH1cXG4gIC50cmlwLWRpc3BsYXktLWNhcmQgLmNhcmQtLXRpbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4udHJpcC1kaXNwbGF5LS1zdGF0dXMge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgI0VGQzAyNztcXG4gIG1hcmdpbjogMHB4OyB9XFxuICAudHJpcC1kaXNwbGF5LS1zdGF0dXMgLmNhcmQtLXRyaXAtc3RhdHVzIHtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBtYXJnaW46IDA7IH1cXG5cXG4ub3ZlcmxheSB7XFxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NTApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAxMDA7IH1cXG5cXG4ubG9naW4tLXdpbmRvdyB7XFxuICB6LWluZGV4OiAxMDE7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMzAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBhZGRpbmc6IDFyZW07IH1cXG4gIC5sb2dpbi0td2luZG93IC5sb2dpbi1idXR0b24ge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiA1MHB4OyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9fYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fY2FyZHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fbG9naW4td2luZG93LnNjc3NcIl0sXCJuYW1lc1wiOltd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QkhYaUI7RUdZakIsYUFBYTtFQUNiLFlBQVk7RUFDWiwyQkFBMkI7RUhUM0Isb0JBQW9CO0VHV3BCLHdDQUE0QztFQUM1QyxjQUFjO0VBQ2QsYUFBYSxFQUFBO0VBVGY7SUFZSSxhQUFhO0lBQ2IsV0FBVztJSGpCYixvQkFBb0IsRUFBQTtFR0l0QjtJQWtCSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQixFQUFBOztBQUl2QjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUJIdENjO0VHdUNkLFdBQVcsRUFBQTtFQVBiO0lBVUksa0JBQWtCO0lBQ2xCLFNBQVMsRUFBQTs7QUNoRGI7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixPQUFPO0VBQ1AsWUFBWTtFQUNaLGVBQWU7RUFDZixNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsYUFBYSxFQUFBO0VBZmY7SUFrQkksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgxIHtcXG4gIG1hcmdpbjogMXJlbSAwcmVtIDByZW0gMHJlbTtcXG4gIGNvbG9yOiAkd2hpdGU7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcblwiLFwiLy8gQ09MT1JTXFxuJGdyZWVuOiAjMDkyMzI3O1xcbiRsaWdodC1ncmF5OiAjRDJEMUQxO1xcbiR3aGl0ZTogI0ZGRkZGRjtcXG4kZGFyay1ncmF5OiAjQjRCM0IyO1xcbiR5ZWxsb3c6ICNFRkMwMjc7XFxuXFxuLy8gTUlYSU5TXFxuIEBtaXhpbiByb3VuZGVkLWNvcm5lcnMoJHJhZGl1cykge1xcbiAgYm9yZGVyLXJhZGl1czogLjNyZW07XFxuIH1cIixcIi5oZWFkaW5nIHtcXG4gIGJhY2tncm91bmQ6ICRncmVlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcblxcbi5sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBcXG4gIC5wbGFuZS1pY29uIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgfVxcbn1cXG5cXG4udXNlci1kaXNwbGF5IHtcXG4gIGNvbG9yOiAkd2hpdGU7XFxuICBtYXJnaW4tcmlnaHQ6IDRyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIC51c2VybmFtZSB7XFxuICAgIG1hcmdpbjogMC4zcmVtIDByZW0gMC41cmVtIDByZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbn1cXG5cXG5cIixcIi50cmlwLWRpc3BsYXkge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkOyBcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiaGVhZGxpbmUgaGVhZGxpbmUgaGVhZGxpbmUgaGVhZGxpbmUgaGVhZGxpbmUgaGVhZGxpbmVcXFwiXFxuICAgIFxcXCJzaWRlYmFyIGNhcmQtZ3JpZCBjYXJkLWdyaWQgY2FyZC1ncmlkIGNhcmQtZ3JpZCBjYXJkLWdyaWRcXFwiXFxuICAgIFxcXCJzaWRlYmFyIGNhcmQtZ3JpZCBjYXJkLWdyaWQgY2FyZC1ncmlkIGNhcmQtZ3JpZCBjYXJkLWdyaWRcXFwiXFxuICAgIFxcXCJzaWRlYmFyIGNhcmQtZ3JpZCBjYXJkLWdyaWQgY2FyZC1ncmlkIGNhcmQtZ3JpZCBjYXJkLWdyaWRcXFwiXFxuICAgIFxcXCJzaWRlYmFyIGNhcmQtZ3JpZCBjYXJkLWdyaWQgY2FyZC1ncmlkIGNhcmQtZ3JpZCBjYXJkLWdyaWRcXFwiXFxuICAgIFxcXCJzaWRlYmFyIGNhcmQtZ3JpZCBjYXJkLWdyaWQgY2FyZC1ncmlkIGNhcmQtZ3JpZCBjYXJkLWdyaWRcXFwiXFxuICAgIFxcXCJzaWRlYmFyIGNhcmQtZ3JpZCBjYXJkLWdyaWQgY2FyZC1ncmlkIGNhcmQtZ3JpZCBjYXJkLWdyaWRcXFwiXFxuICAgIFxcXCJzaWRlYmFyIGNhcmQtZ3JpZCBjYXJkLWdyaWQgY2FyZC1ncmlkIGNhcmQtZ3JpZCBjYXJkLWdyaWRcXFwiXFxuICAgIFxcXCJzaWRlYmFyIGNhcmQtZ3JpZCBjYXJkLWdyaWQgY2FyZC1ncmlkIGNhcmQtZ3JpZCBjYXJkLWdyaWRcXFwiXFxuICA7XFxuXFxuICAmLS1zaWRlYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICBwYWRkaW5nOiAwcmVtIDFyZW0gMHJlbSAxcmVtO1xcbiAgfVxcblxcbiAgJi0taGVhZGxpbmUge1xcbiAgICBncmlkLWFyZWE6IGhlYWRsaW5lO1xcbiAgICBjb2xvcjogJGdyZWVuO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgfVxcblxcbiAgJi0tY2FyZC1ncmlkIHtcXG4gICAgZ3JpZC1hcmVhOiBjYXJkLWdyaWQ7XFxuICB9XFxufVxcblxcbi5zaWRlYmFyLS1jb3N0LWRpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogJGdyZWVuO1xcblxcbiAgaDMge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB3aWR0aDogMTByZW07XFxuICB9XFxuXFxuICBoNCB7XFxuICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XFxuICB9XFxufVxcblxcbi5zaWRlYmFyLS1ib29raW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY29sb3I6ICRncmVlbjtcXG4gIFxcbiAgbGFiZWwge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgfVxcblxcbiAgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDhyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICB9XFxuXFxuICAjc2lkZWJhci0tYm9va2luZy0tYnV0dG9uLS1sYWJlbCwgI2Ryb3Bkb3duLW1lbnUtbGFibGUgIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgY2xpcDogcmVjdCgxcHggMXB4IDFweCAxcHgpO1xcbiAgICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XFxuICAgIHdpZHRoOiAxcHg7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBjbGlwLXBhdGg6IGluc2V0KDFweCk7XFxuICB9XFxuXFxuICBoNiB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBjb2xvcjogJGdyZWVuO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLnRyaXAtZGlzcGxheSB7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDsgXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCA0MDBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgIFxcXCJoZWFkbGluZSBoZWFkbGluZSBoZWFkbGluZVxcXCJcXG4gICAgICBcXFwic2lkZWJhciBzaWRlYmFyIHNpZGViYXJcXFwiXFxuICAgICAgXFxcImNhcmQtZ3JpZCBjYXJkLWdyaWQgY2FyZC1ncmlkXFxcIlxcbiAgICA7XFxuICBcXG4gICAgJi0tc2lkZWJhciB7XFxuICAgICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgfVxcbiAgXFxuICAgICYtLWhlYWRsaW5lIHtcXG4gICAgICBncmlkLWFyZWE6IGhlYWRsaW5lO1xcbiAgICAgIGNvbG9yOiAkZ3JlZW47XFxuICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB9XFxuICBcXG4gICAgJi0tY2FyZC1ncmlkIHtcXG4gICAgICBncmlkLWFyZWE6IGNhcmQtZ3JpZDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLnRyaXAtZGlzcGxheS0tc2lkZWJhciB7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuc2lkZWJhci0tY29zdC1kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG5cXG4gICAgaDMge1xcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTsgIFxcbiAgICAgIHdpZHRoOiAxMDBweDsgICAgXFxuICAgIH1cXG5cXG4gICAgaDQge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB9XFxuICB9XFxuXFxuICAuc2lkZWJhci0tYm9va2luZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgLmlucHV0IHtcXG4gICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICB9XFxuXFxuICAgIHNlbGVjdCB7XFxuICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICB9XFxuXFxuICAgIGg2IHtcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICBoZWlnaHQ6IDE1cHg7XFxuICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuICB9XFxuXFxuXFxufVwiLFwiLnRyaXAtZGlzcGxheS0tY2FyZC1ncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4udHJpcC1kaXNwbGF5LS1jYXJkIHtcXG4gIGNvbG9yOiAkZ3JlZW47XFxuICBiYWNrZ3JvdW5kOiAkZGFyay1ncmF5O1xcbiAgaGVpZ2h0OiAyM3JlbTtcXG4gIHdpZHRoOiAxOHJlbTtcXG4gIG1hcmdpbjogMHJlbSAxcmVtIDFyZW0gMHJlbTtcXG4gIEBpbmNsdWRlIHJvdW5kZWQtY29ybmVycygwLjNyZW0pO1xcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDUwcHggJGxpZ2h0LWdyYXkgaW5zZXQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDFyZW07XFxuXFxuICBpbWcge1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgQGluY2x1ZGUgcm91bmRlZC1jb3JuZXJzKDAuM3JlbSlcXG4gIH1cXG5cXG4gIC5jYXJkLS10aW1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4udHJpcC1kaXNwbGF5LS1zdGF0dXMge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgJHllbGxvdztcXG4gIG1hcmdpbjogMHB4O1xcblxcbiAgLmNhcmQtLXRyaXAtc3RhdHVzIHtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxufVwiLFwiLm92ZXJsYXkge1xcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTUwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4ubG9naW4tLXdpbmRvdyB7XFxuICB6LWluZGV4OiAxMDE7IFxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgbWFyZ2luOjAgYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMzAlOyBcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgLmxvZ2luLWJ1dHRvbiB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJjbGFzcyBUcmlwIHtcbiAgY29uc3RydWN0b3IodHJpcERhdGEpIHtcbiAgICB0aGlzLmlkID0gdHJpcERhdGEuaWQ7XG4gICAgdGhpcy51c2VySUQgPSB0cmlwRGF0YS51c2VySUQ7XG4gICAgdGhpcy5kZXN0aW5hdGlvbklEID0gdHJpcERhdGEuZGVzdGluYXRpb25JRDtcbiAgICB0aGlzLnRyYXZlbGVycyA9IHRyaXBEYXRhLnRyYXZlbGVycztcbiAgICB0aGlzLmRhdGUgPSB0cmlwRGF0YS5kYXRlO1xuICAgIHRoaXMuZHVyYXRpb24gPSB0cmlwRGF0YS5kdXJhdGlvbjtcbiAgICB0aGlzLnN0YXR1cyA9IHRyaXBEYXRhLnN0YXR1cztcbiAgICB0aGlzLnN1Z2dlc3RlZEFjdGl2aXRpZXMgPSB0cmlwRGF0YS5zdWdnZXN0ZWRBY3Rpdml0aWVzO1xuICB9XG5cbiAgZ2V0RGVzdGluYXRpb24oZGVzdGluYXRpb25EYXRhKSB7XG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uRGF0YS5maW5kKGRlc3RpbmF0aW9uID0+IGRlc3RpbmF0aW9uLmlkID09PSB0aGlzLmRlc3RpbmF0aW9uSUQpO1xuICB9XG5cbiAgZ2V0VHJhdmVsQ29zdCgpIHtcbiAgICBjb25zdCBsb2RnaW5nID0gdGhpcy5kZXN0aW5hdGlvbi5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheSAqIHRoaXMuZHVyYXRpb247XG4gICAgY29uc3QgZmxpZ2h0cyA9IHRoaXMuZGVzdGluYXRpb24uZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbiAqIHRoaXMudHJhdmVsZXJzO1xuICAgIGNvbnN0IGFnZW50c0ZlZSA9IDEuMTtcblxuICAgIHJldHVybiBwYXJzZUludCgoYWdlbnRzRmVlICogKGxvZGdpbmcgKyBmbGlnaHRzKSkudG9GaXhlZCgyKSk7XG4gIH1cblxuICBnZXRVbml4RGVwYXJ0dXJlRGF0ZSgpIHtcbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy5kYXRlKS5nZXRUaW1lKCk7XG4gIH1cblxuICBnZXRVbml4UmV0dXJuRGF0ZSgpIHtcbiAgICBjb25zdCBkdXJhdGlvblRpbWUgPSB0aGlzLmR1cmF0aW9uICogODY0MDAwMDA7XG4gICAgY29uc3QgZGVwYXJ0dXJlRGF0ZSA9IHRoaXMuZ2V0VW5peERlcGFydHVyZURhdGUoKTtcbiAgICBjb25zdCByZXR1cm5EYXRlID0gbmV3IERhdGUoZGVwYXJ0dXJlRGF0ZSArIGR1cmF0aW9uVGltZSkuZ2V0VGltZSgpO1xuICAgIFxuICAgIHJldHVybiByZXR1cm5EYXRlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJpcDsiLCJjbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IodXNlckRhdGEpIHtcbiAgICB0aGlzLmlkID0gdXNlckRhdGEuaWQ7XG4gICAgdGhpcy5uYW1lID0gdXNlckRhdGEubmFtZTtcbiAgICB0aGlzLnRyYXZlbGVyVHlwZSA9IHVzZXJEYXRhLnRyYXZlbGVyVHlwZTtcbiAgfVxuXG4gIGdldFRyaXBEYXRhKHRyaXBEYXRhKSB7XG4gICAgY29uc3QgdXNlcnNUcmlwcyA9IHRyaXBEYXRhLmZpbHRlcih0cmlwID0+IHRyaXAudXNlcklEID09PSB0aGlzLmlkKTtcbiAgICB0aGlzLnRyaXBzID0gdXNlcnNUcmlwcy5zb3J0KChhLCBiKSA9PiBhLmdldFVuaXhEZXBhcnR1cmVEYXRlKCkgLSBiLmdldFVuaXhEZXBhcnR1cmVEYXRlKCkpO1xuICB9XG5cbiAgZ2V0Q29zdE9mWWVhcnNUcmF2ZWwoY3VycmVudERhdGUpIHtcbiAgICBjb25zdCBwYXN0WWVhcnNUcmlwcyA9IHRoaXMuZ2V0VHJpcHNGcm9tUGFzdFllYXIoY3VycmVudERhdGUpO1xuICAgIGNvbnN0IGNvc3QgPSBwYXN0WWVhcnNUcmlwcy5yZWR1Y2UoKGFjYywgdHJpcCkgPT4ge1xuICAgICAgYWNjICs9IHRyaXAuZ2V0VHJhdmVsQ29zdCgpO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKTtcblxuICAgIHJldHVybiBgJCR7Y29zdH1gO1xuICB9XG5cbiAgZ2V0VHJpcHNGcm9tUGFzdFllYXIoY3VycmVudERhdGUpIHtcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgcGFzdFllYXJzVHJpcHMgPSB0aGlzLnRyaXBzLnJlZHVjZSgoYWNjLCB0cmlwKSA9PiB7XG4gICAgICBjb25zdCB0cmlwWWVhciA9IG5ldyBEYXRlKHRyaXAuZGF0ZSkuZ2V0RnVsbFllYXIoKTtcblxuICAgICAgaWYgKHRyaXBZZWFyID09PSBjdXJyZW50WWVhciAtIDEpIHtcbiAgICAgICAgYWNjLnB1c2godHJpcCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gcGFzdFllYXJzVHJpcHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVc2VyOyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJjb25zdCBkb21VcGRhdGVzID0ge1xuICBoaWRlRWxlbWVudChlbGVtZW50KSB7XG4gICAgY29uc3QgZWxlbWVudFRvSGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpO1xuXG4gICAgaWYgKCFlbGVtZW50VG9IaWRlLmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygnaGlkZGVuJykpIHtcbiAgICAgIGVsZW1lbnRUb0hpZGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuICB9LFxuXG4gIHJldmVhbEVsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IGVsZW1lbnRUb0hpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50KTtcbiAgXG4gICAgZWxlbWVudFRvSGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfSxcblxuICBkaXNwbGF5Q3VycnJlbnRVc2VyKHVzZXIpIHtcbiAgICBjb25zdCB1c2VybmFtZURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlcm5hbWUnKTtcbiAgICB1c2VybmFtZURpc3BsYXkuaW5uZXJUZXh0ID0gdXNlci5uYW1lLnNwbGl0KCcgJylbMF07XG4gICAgdXNlcm5hbWVEaXNwbGF5LmlkID0gdXNlci5pZDtcbiAgfSxcblxuICBjbGVhckNhcmRzKCkge1xuICAgIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgY29uc3QgYWxsQ2hpbGRyZW5FbGVtZW50cyA9IGNhcmRDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYXJ0aWNsZScpO1xuICAgIGFsbENoaWxkcmVuRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGNhcmRDb250YWluZXIucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgY3JlYXRlVHJpcENhcmQodHJpcCkge1xuICAgIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgY29uc3QgY2FyZFRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQtdGVtcGxhdGUnKTtcbiAgICBjb25zdCBuZXdUcmlwQ2FyZCA9IGNhcmRUZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICBjb25zdCBjYXJkSW1hZ2UgPSBuZXdUcmlwQ2FyZC5xdWVyeVNlbGVjdG9yKCdpbWcuY2FyZC0taW1hZ2UnKTtcbiAgXG4gICAgbmV3VHJpcENhcmQucXVlcnlTZWxlY3RvcignYXJ0aWNsZS50cmlwLWRpc3BsYXktLWNhcmQnKS5pZCA9IHRyaXAuaWQ7XG4gICAgbmV3VHJpcENhcmQucXVlcnlTZWxlY3RvcignaDQuY2FyZC0tdGl0bGUnKS5pbm5lclRleHQgPSB0cmlwLmRlc3RpbmF0aW9uLmRlc3RpbmF0aW9uO1xuICAgIG5ld1RyaXBDYXJkLnF1ZXJ5U2VsZWN0b3IoJ2g1LmRlcGFydHVyZScpLmlubmVyVGV4dCA9IHRyaXAuZGF0ZTtcbiAgICBuZXdUcmlwQ2FyZC5xdWVyeVNlbGVjdG9yKCdoNS5kdXJhdGlvbicpLmlubmVyVGV4dCA9IGAke3RyaXAuZHVyYXRpb259IGRheXNgO1xuICAgIG5ld1RyaXBDYXJkLnF1ZXJ5U2VsZWN0b3IoJ2g1LmNhcmQtLXRyaXAtc3RhdHVzJykuaW5uZXJUZXh0ID0gdHJpcC5zdGF0dXMudG9VcHBlckNhc2UoKTtcbiAgICBjYXJkSW1hZ2Uuc3JjID0gdHJpcC5kZXN0aW5hdGlvbi5pbWFnZTtcbiAgICBjYXJkSW1hZ2UuYWx0ID0gdHJpcC5kZXN0aW5hdGlvbi5hbHQ7XG4gIFxuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VHJpcENhcmQpO1xuICB9LFxuXG4gIGRpc3BsYXlMYXN0WWVhcnNFeHBlbnNlcyhjb3N0KSB7XG4gICAgY29uc3QgY29zdERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29zdC1kaXNwbGF5Jyk7XG4gICAgY29zdERpc3BsYXkuaW5uZXJUZXh0ID0gY29zdDtcbiAgfSxcblxuICBhZGREZXN0aW5hdGlvbk9wdGlvbnMoZGVzdGluYXRpb25EYXRhKSB7XG4gICAgY29uc3QgZGVzdGluYXRpb25MaXN0ID0gZGVzdGluYXRpb25EYXRhLnNvcnQoKGEsIGIpID0+IGEuZGVzdGluYXRpb24gLSBiLmRlc3RpbmF0aW9uKTtcbiAgXG4gICAgdGhpcy5jcmVhdGVOZXdPcHRpb25zKGRlc3RpbmF0aW9uTGlzdCk7XG4gIH0sXG5cbiAgY3JlYXRlTmV3T3B0aW9ucyhvcHRpb25zTGlzdCkge1xuICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc3RpbmF0aW9ucy1kcm9wZG93bicpO1xuICBcbiAgICBvcHRpb25zTGlzdC5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICBjb25zdCBuZXdPcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIG5ld09wdGlvbkVsZW1lbnQudmFsdWUgPSBvcHRpb24uZGVzdGluYXRpb247XG4gICAgICBuZXdPcHRpb25FbGVtZW50LmlubmVyVGV4dCA9IG9wdGlvbi5kZXN0aW5hdGlvbjtcbiAgICAgIG5ld09wdGlvbkVsZW1lbnQuaWQgPSBvcHRpb24uaWQ7XG4gIFxuICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQobmV3T3B0aW9uRWxlbWVudCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgZGlzcGxheU1lc3NhZ2VJbkJvb2tpbmdBcmVhKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBib29raW5nQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLS1ib29raW5nJyk7XG4gICAgY29uc3QgbWVzc2FnZURpc3BsYXkgPSBib29raW5nQXJlYS5xdWVyeVNlbGVjdG9yQWxsKCdoNicpO1xuICAgIG1lc3NhZ2VEaXNwbGF5LmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LnJlbW92ZSgpKTtcbiAgICBcbiAgICBpZiAobWVzc2FnZSkge1xuICAgICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2Jyk7XG4gICAgICBuZXdFbGVtZW50LmlubmVyVGV4dCA9IG1lc3NhZ2U7XG4gICAgICBuZXdFbGVtZW50LmlkID0gJ2Jvb2tpbmctbWVzc2FnZSc7XG4gICAgXG4gICAgICBib29raW5nQXJlYS5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcbiAgICB9XG4gIH0sXG5cbiAgZGlzcGxheU1lc3NhZ2UobWVzc2FnZSkge1xuICAgIGNvbnN0IG1lc3NhZ2VEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yLW1lc3NhZ2UnKTtcblxuICAgIG1lc3NhZ2VEaXNwbGF5LmlubmVyVGV4dCA9IG1lc3NhZ2U7XG4gIH0sXG5cbiAgZGlzcGxheVBvc3RFcnJvcihtZXNzYWdlKSB7XG4gICAgY29uc3QgZXJyb3JEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvc3QtZGlzcGxheScpO1xuXG4gICAgZXJyb3JEaXNwbGF5LmlubmVyVGV4dCA9IG1lc3NhZ2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9tVXBkYXRlczsiLCJjb25zdCBmZXRjaEFQSSA9IHtcbiAgZ2V0RGF0YShkYXRhc2V0KSB7XG4gICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxLyR7ZGF0YXNldH1gKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICB9LFxuXG4gIHBvc3REYXRhKGJvZHkpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyaXBzYCwgb3B0aW9ucylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICB9ICBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoQVBJOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2ljb25zOC1jaGFuZ2UtdXNlci01MC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9pY29uczgtcGFwZXItcGxhbmUtNjQucG5nXCI7IiwiaW1wb3J0ICcuL2Nzcy9pbmRleC5zY3NzJztcbi8vIGltcG9ydCAnLi9Vc2VyLmpzJztcbi8vIGltcG9ydCAnLi9EZXN0aW5hdGlvbi5qcyc7XG4vLyBpbXBvcnQgJy4vVHJpcC5qcyc7XG5pbXBvcnQgJy4vZmV0Y2guanMnO1xuaW1wb3J0ICcuL3NjcmlwdHMuanMnO1xuXG5pbXBvcnQgJy4vaW1hZ2VzL2ljb25zOC1wYXBlci1wbGFuZS02NC5wbmcnO1xuaW1wb3J0ICcuL2ltYWdlcy9pY29uczgtY2hhbmdlLXVzZXItNTAucG5nJztcblxuXG5cblxuXG4iLCIvLyBXRUJQQUNLIElNUE9SVFNcbmltcG9ydCAnLi9jc3MvaW5kZXguc2Nzcyc7XG5pbXBvcnQgZG9tVXBkYXRlcyBmcm9tICcuL2RvbVVwZGF0ZXMnO1xuaW1wb3J0IGZldGNoQVBJIGZyb20gJy4vZmV0Y2gnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcbmltcG9ydCBUcmlwIGZyb20gJy4vVHJpcCc7XG5cblxuLy8gUVVFUlkgU0VMRUNUT1JTXG5jb25zdCBjb3N0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvc3QtYnV0dG9uJyk7XG5jb25zdCBib29raW5nQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tpbmctYnV0dG9uJyk7XG5jb25zdCBsb2dpbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1idXR0b24nKTtcblxuLy8gRVZFTlQgTElTVEVORVJTXG5sb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrVXNlck5hbWUpO1xuYm9va2luZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJvb2tUcmlwKTtcblxuLy8gR0xPQkFMIFZBUklBQkxFU1xubGV0IGN1cnJlbnRVc2VyO1xubGV0IGFsbFRyaXBzO1xubGV0IGFsbERlc3RpbmF0aW9ucztcbmxldCB0cmlwVG9Qb3N0O1xubGV0IHRvZGF5c0RhdGUgPSBuZXcgRGF0ZSgpO1xuXG4vLyBGRVRDSCBEQVRBXG4vLyAvLyBHRVRcbmZ1bmN0aW9uIGdldERhdGEodXNlcklEKSB7XG4gIGNvbnN0IGZldGNoRGF0YSA9IFtcbiAgICBmZXRjaEFQSS5nZXREYXRhKGB0cmF2ZWxlcnMvJHt1c2VySUR9YCksIFxuICAgIGZldGNoQVBJLmdldERhdGEoJ3RyaXBzJyksIFxuICAgIGZldGNoQVBJLmdldERhdGEoJ2Rlc3RpbmF0aW9ucycpXG4gIF07XG5cbiAgUHJvbWlzZS5hbGwoZmV0Y2hEYXRhKVxuICAgIC50aGVuKHZhbHVlID0+IHsgXG4gICAgICBpZiAodmFsdWVbMF0uaWQpIHtcbiAgICAgICAgZG9tVXBkYXRlcy5oaWRlRWxlbWVudCgnb3ZlcmxheScpOyBcbiAgICAgICAgZG9tVXBkYXRlcy5oaWRlRWxlbWVudCgnbG9naW4td2luZG93Jyk7XG4gICAgICAgIGdlbmVyYXRlVXNlcih2YWx1ZVswXSk7XG4gICAgICAgIGNvbnN0IHRyaXBzID0gZ2VuZXJhdGVUcmlwcyh2YWx1ZVsxXSwgdmFsdWVbMl0pO1xuICAgICAgICBjdXJyZW50VXNlci5nZXRUcmlwRGF0YSh0cmlwcyk7XG4gICAgICAgIGRvbVVwZGF0ZXMuY2xlYXJDYXJkcygpO1xuICAgICAgICBkb21VcGRhdGVzLmRpc3BsYXlMYXN0WWVhcnNFeHBlbnNlcyhjdXJyZW50VXNlci5nZXRDb3N0T2ZZZWFyc1RyYXZlbCh0b2RheXNEYXRlKSk7XG4gICAgICAgIGRvbVVwZGF0ZXMuYWRkRGVzdGluYXRpb25PcHRpb25zKHZhbHVlWzJdLmRlc3RpbmF0aW9ucyk7XG4gICAgICAgIGN1cnJlbnRVc2VyLnRyaXBzLmZvckVhY2godHJpcCA9PiBkb21VcGRhdGVzLmNyZWF0ZVRyaXBDYXJkKHRyaXApKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbVVwZGF0ZXMuZGlzcGxheU1lc3NhZ2UoJ1RoYXQgdXNlcm5hbWUgZG9lcyBub3QgbWF0Y2gnKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKGNvc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZXROZXdUcmlwVG9Qb3N0KSk7XG59XG5cbi8vIC8vIFBPU1RcbmZ1bmN0aW9uIGJvb2tUcmlwKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGVzdGltYXRlZENvc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9va2luZy1tZXNzYWdlJyk7XG5cbiAgaWYgKHRyaXBUb1Bvc3QgJiYgZXN0aW1hdGVkQ29zdCAmJiBlc3RpbWF0ZWRDb3N0LmlubmVyVGV4dC5pbmNsdWRlcygnJCcpKSB7XG4gICAgZmV0Y2hBUEkucG9zdERhdGEodHJpcFRvUG9zdClcbiAgICAgIC50aGVuKGdldERhdGEoY3VycmVudFVzZXIuaWQpKVxuICAgICAgLnRoZW4oZG9tVXBkYXRlcy5kaXNwbGF5TWVzc2FnZUluQm9va2luZ0FyZWEoJ3N1Y2Nlc3NmdWxseSByZXF1ZXN0ZWQgbmV3IHRyaXAnKSk7XG4gIH0gZWxzZSB7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5TWVzc2FnZUluQm9va2luZ0FyZWEoJ1lvdSBuZWVkIHRvIGZpbGwgb3V0IGFsbCBmb3JtcyBvciBjaGVjayB0aGUgY29zdCBmaXJzdCcpO1xuICB9XG59XG5cbi8vIEVWRU5UIEhBTkRMRVJTIEFORCBIRUxQRVIgRlVOQ1RJT05TXG5mdW5jdGlvbiBjaGVja1VzZXJOYW1lKGV2ZW50KSB7XG4gIGNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkLWlucHV0JykudmFsdWU7XG4gIGNvbnN0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcm5hbWUtaW5wdXQnKS52YWx1ZTtcbiAgY29uc3Qgd29yZCA9IHVzZXJuYW1lSW5wdXQuc2xpY2UoMCwgOCk7XG4gIGNvbnN0IHVzZXJJRCA9IHBhcnNlSW50KHVzZXJuYW1lSW5wdXQuc2xpY2UoOCkpO1xuXG4gIGlmICh3b3JkID09PSAndHJhdmVsZXInICYmIHBhc3N3b3JkID09PSAndHJhdmVsMjAyMCcgJiYgdXNlcklEKSB7XG4gICAgZ2V0RGF0YSh1c2VySUQsIGV2ZW50KTtcbiAgfSBlbHNlIHsgXG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5TWVzc2FnZSgnUEFTU1dPUkQgT1IgVVNFUk5BTUUgSVMgSU5DT1JSRUNUJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVVc2VyKHVzZXJEYXRhKSB7XG4gIGN1cnJlbnRVc2VyID0gbmV3IFVzZXIodXNlckRhdGEpO1xuXG4gIGRvbVVwZGF0ZXMuZGlzcGxheUN1cnJyZW50VXNlcihjdXJyZW50VXNlcik7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVHJpcHModHJpcERhdGEsIGRlc3RpbmF0aW9uRGF0YSkge1xuICBhbGxUcmlwcyA9IHRyaXBEYXRhLnRyaXBzO1xuICBhbGxEZXN0aW5hdGlvbnMgPSBkZXN0aW5hdGlvbkRhdGEuZGVzdGluYXRpb25zO1xuICBjb25zdCB0cmlwcyA9IGFsbFRyaXBzLm1hcCh0cmlwID0+IG5ldyBUcmlwKHRyaXApKTtcbiAgdHJpcHMuZm9yRWFjaCh0cmlwID0+IHRyaXAuZ2V0RGVzdGluYXRpb24oYWxsRGVzdGluYXRpb25zKSk7XG5cbiAgcmV0dXJuIHRyaXBzO1xufVxuXG5mdW5jdGlvbiBnZXROZXdUcmlwVG9Qb3N0KGV2ZW50KSB7XG4gIGNvbnN0IG51bWJlck9mVHJhdmVsZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYXZlbGVycy1pbnB1dCcpLnZhbHVlO1xuICBjb25zdCBkdXJhdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1cmF0aW9uLWlucHV0JykudmFsdWU7XG4gIGNvbnN0IHNlbGVjdGVkRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLWlucHV0JykudmFsdWU7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgaWYgKG51bWJlck9mVHJhdmVsZXJzICYmIGR1cmF0aW9uSW5wdXQgJiYgc2VsZWN0ZWREYXRlKSB7XG4gICAgY29uc3QgdHJpcERhdGEgPSAge1xuICAgICAgaWQ6IGdldFRyaXBJZCgpLCBcbiAgICAgIHVzZXJJRDogY3VycmVudFVzZXIuaWQsIFxuICAgICAgZGVzdGluYXRpb25JRDogZ2V0RGVzdGluYXRpb25PcHRpb25JRCgpLCBcbiAgICAgIHRyYXZlbGVyczogbnVtYmVyT2ZUcmF2ZWxlcnMsIFxuICAgICAgZGF0ZTogZm9ybWF0RGF0ZShzZWxlY3RlZERhdGUpLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uSW5wdXQsIFxuICAgICAgc3RhdHVzOiAncGVuZGluZycsIFxuICAgICAgc3VnZ2VzdGVkQWN0aXZpdGllczogW11cbiAgICB9O1xuXG4gICAgdHJpcFRvUG9zdCA9IG5ldyBUcmlwKHRyaXBEYXRhKTtcblxuICAgIHRyaXBUb1Bvc3QuZ2V0RGVzdGluYXRpb24oYWxsRGVzdGluYXRpb25zKTtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlNZXNzYWdlSW5Cb29raW5nQXJlYShgJCR7dHJpcFRvUG9zdC5nZXRUcmF2ZWxDb3N0KCl9YCk7XG4gIH0gZWxzZSB7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5TWVzc2FnZUluQm9va2luZ0FyZWEoJ0FsbCBmb3JtcyBtdXN0IGJlIGZpbGxlZCBvdXQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUcmlwSWQoKSB7XG4gIGNvbnN0IHNvcnRlZFRyaXBzID0gYWxsVHJpcHMuc29ydCgoYSwgYikgPT4gYi5pZCAtIGEuaWQpO1xuICBjb25zdCBoaWdoZXN0VHJpcElEID0gc29ydGVkVHJpcHNbMF0uaWQ7XG5cbiAgcmV0dXJuIGhpZ2hlc3RUcmlwSUQgKyAxO1xufVxuXG5mdW5jdGlvbiBnZXREZXN0aW5hdGlvbk9wdGlvbklEKCkge1xuICBjb25zdCBkZXN0aW5hdGlvbnNEcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXN0aW5hdGlvbnMtZHJvcGRvd24nKTtcblxuICBjb25zdCBzZWxlY3RlZERlc3RpbmF0aW9uID0gZGVzdGluYXRpb25zRHJvcGRvd24udmFsdWU7XG4gIGNvbnN0IG9wdGlvbnNMaXN0ID0gQXJyYXkuZnJvbShkZXN0aW5hdGlvbnNEcm9wZG93bi5vcHRpb25zKTtcbiAgY29uc3Qgc2VsZWN0aW9uID0gb3B0aW9uc0xpc3QuZmluZChvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSBzZWxlY3RlZERlc3RpbmF0aW9uKTtcblxuICByZXR1cm4gcGFyc2VJbnQoc2VsZWN0aW9uLmlkKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gIGNvbnN0IGRhdGVJbmZvID0gZGF0ZS5zcGxpdCgnLScpO1xuXG4gIHJldHVybiBkYXRlSW5mby5qb2luKCcvJyk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/attributes */ \"./src/attributes.js\");\n/* harmony import */ var _src_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/options */ \"./src/options.js\");\n/* harmony import */ var _src_disallowed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/disallowed */ \"./src/disallowed.js\");\n/* harmony import */ var _src_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/controls */ \"./src/controls.js\");\n/* harmony import */ var _src_extraProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/extraProps */ \"./src/extraProps.js\");\n/* harmony import */ var _src_classes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/classes */ \"./src/classes.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack:///./node_modules/classnames/index.js?");

/***/ }),

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _disallowed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./disallowed */ \"./src/disallowed.js\");\n/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ \"./src/options.js\");\nvar addFilter = wp.hooks.addFilter;\n\n\n\nfunction animationAttributes(settings) {\n  if (typeof settings.attributes !== 'undefined' && !_disallowed__WEBPACK_IMPORTED_MODULE_0__[\"disallowed\"].includes(settings.name)) {\n    settings.attributes = Object.assign(settings.attributes, {\n      chiStyle: {\n        style: 'string',\n        \"default\": _options__WEBPACK_IMPORTED_MODULE_1__[\"options\"].styleControls[0].value\n      },\n      chiSpeed: {\n        style: 'string',\n        \"default\": _options__WEBPACK_IMPORTED_MODULE_1__[\"options\"].speedControls[0].value\n      },\n      chiDelay: {\n        style: 'string',\n        \"default\": _options__WEBPACK_IMPORTED_MODULE_1__[\"options\"].delayControls[0].value\n      }\n    });\n  }\n\n  return settings;\n}\n\naddFilter('blocks.registerBlockType', 'kungfu/custom-attributes', animationAttributes);\n\n//# sourceURL=webpack:///./src/attributes.js?");

/***/ }),

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\nvar __ = wp.i18n.__;\nvar addFilter = wp.hooks.addFilter;\nvar createHigherOrderComponent = wp.compose.createHigherOrderComponent;\nvar withClientIdClassName = createHigherOrderComponent(function (BlockListBlock) {\n  return function (props) {\n    var attributes = props.attributes;\n    var chiSpeed = attributes.chiSpeed,\n        chiDelay = attributes.chiDelay,\n        chiStyle = attributes.chiStyle;\n    var kungfuClasses;\n\n    if (typeof chiStyle !== 'undefined' && '' !== chiStyle) {\n      kungfuClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()(kungfuClasses, 'chi__animated chi__' + chiStyle);\n    }\n\n    if (typeof chiSpeed !== 'undefined' && '' !== chiSpeed) {\n      kungfuClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()(kungfuClasses, 'chi__' + chiSpeed);\n    }\n\n    if (typeof chiDelay !== 'undefined' && '' !== chiDelay) {\n      kungfuClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()(kungfuClasses, 'chi__' + chiDelay);\n    }\n\n    if ('' !== kungfuClasses) {\n      return wp.element.createElement(BlockListBlock, _extends({}, props, {\n        className: kungfuClasses\n      }));\n    } else {\n      return wp.element.createElement(BlockListBlock, props);\n    }\n  };\n}, 'withClientIdClassName');\naddFilter('editor.BlockListBlock', 'kungfu/with-client-id-class-name', withClientIdClassName);\n\n//# sourceURL=webpack:///./src/classes.js?");

/***/ }),

/***/ "./src/controls.js":
/*!*************************!*\
  !*** ./src/controls.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _disallowed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./disallowed */ \"./src/disallowed.js\");\n/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ \"./src/options.js\");\nvar __ = wp.i18n.__;\nvar addFilter = wp.hooks.addFilter;\nvar Fragment = wp.element.Fragment;\nvar InspectorControls = wp.editor.InspectorControls;\nvar createHigherOrderComponent = wp.compose.createHigherOrderComponent;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    SelectControl = _wp$components.SelectControl;\n\n\nvar withAdvancedControls = createHigherOrderComponent(function (BlockEdit) {\n  return function (props) {\n    var name = props.name,\n        attributes = props.attributes,\n        setAttributes = props.setAttributes,\n        isSelected = props.isSelected;\n    var chiSpeed = attributes.chiSpeed,\n        chiDelay = attributes.chiDelay,\n        chiStyle = attributes.chiStyle;\n    return wp.element.createElement(Fragment, null, wp.element.createElement(BlockEdit, props), isSelected && !_disallowed__WEBPACK_IMPORTED_MODULE_0__[\"disallowed\"].includes(name) && wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {\n      title: __('Animations'),\n      initialOpen: false\n    }, wp.element.createElement(SelectControl, {\n      label: __('Style'),\n      value: chiStyle,\n      options: _options__WEBPACK_IMPORTED_MODULE_1__[\"options\"].styleControls,\n      onChange: function onChange(selectedStyleOption) {\n        setAttributes({\n          chiStyle: selectedStyleOption\n        });\n      }\n    }), wp.element.createElement(SelectControl, {\n      label: __('Speed'),\n      value: chiSpeed,\n      options: _options__WEBPACK_IMPORTED_MODULE_1__[\"options\"].speedControls,\n      initialOpen: false,\n      onChange: function onChange(selectedSpeedOption) {\n        setAttributes({\n          chiSpeed: selectedSpeedOption\n        });\n      }\n    }), wp.element.createElement(SelectControl, {\n      label: __('Delay'),\n      value: chiDelay,\n      options: _options__WEBPACK_IMPORTED_MODULE_1__[\"options\"].delayControls,\n      initialOpen: false,\n      onChange: function onChange(selectedDelayOption) {\n        setAttributes({\n          chiDelay: selectedDelayOption\n        });\n      }\n    }))));\n  };\n}, 'withAdvancedControls');\naddFilter('editor.BlockEdit', 'kungfu/custom-advanced-control', withAdvancedControls);\n\n//# sourceURL=webpack:///./src/controls.js?");

/***/ }),

/***/ "./src/disallowed.js":
/*!***************************!*\
  !*** ./src/disallowed.js ***!
  \***************************/
/*! exports provided: disallowed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"disallowed\", function() { return disallowed; });\nvar disallowed = [\"core/group\", \"core/cover\"];\n\n//# sourceURL=webpack:///./src/disallowed.js?");

/***/ }),

/***/ "./src/extraProps.js":
/*!***************************!*\
  !*** ./src/extraProps.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\nvar addFilter = wp.hooks.addFilter;\n\n\nfunction applyExtraClass(extraProps, blockType, attributes) {\n  var chiSpeed = attributes.chiSpeed,\n      chiDelay = attributes.chiDelay,\n      chiStyle = attributes.chiStyle;\n\n  if (typeof chiStyle !== 'undefined' && '' !== chiStyle) {\n    extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_0___default()(extraProps.className, 'chi__animated chi__' + chiStyle);\n  }\n\n  if (typeof chiSpeed !== 'undefined' && '' !== chiSpeed) {\n    extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_0___default()(extraProps.className, 'chi__' + chiSpeed);\n  }\n\n  if (typeof chiDelay !== 'undefined' && '' !== chiDelay) {\n    extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_0___default()(extraProps.className, 'chi__' + chiDelay);\n  }\n\n  return extraProps;\n}\n\naddFilter('blocks.getSaveContent.extraProps', 'kungfu/applyExtraClass', applyExtraClass);\n\n//# sourceURL=webpack:///./src/extraProps.js?");

/***/ }),

/***/ "./src/options.js":
/*!************************!*\
  !*** ./src/options.js ***!
  \************************/
/*! exports provided: options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"options\", function() { return options; });\nvar __ = wp.i18n.__;\nvar options = {\n  speedControls: [{\n    label: __('Default', 'kungfu'),\n    value: ''\n  }, {\n    label: __('Slower', 'kungfu'),\n    value: 'slower'\n  }, {\n    label: __('Slow', 'kungfu'),\n    value: 'slow'\n  }, {\n    label: __('Fast', 'kungfu'),\n    value: 'fast'\n  }, {\n    label: __('Faster', 'kungfu'),\n    value: 'faster'\n  }],\n  delayControls: [{\n    label: __('Default', 'kungfu'),\n    value: ''\n  }, {\n    label: __('100 milliseconds', 'kungfu'),\n    value: 'delay-100ms'\n  }, {\n    label: __('200 milliseconds', 'kungfu'),\n    value: 'delay-200ms'\n  }, {\n    label: __('500 milliseconds', 'kungfu'),\n    value: 'delay-500ms'\n  }, {\n    label: __('One second', 'kungfu'),\n    value: 'delay-1s'\n  }, {\n    label: __('Two seconds', 'kungfu'),\n    value: 'delay-2s'\n  }, {\n    label: __('Three seconds', 'kungfu'),\n    value: 'delay-3s'\n  }, {\n    label: __('Four seconds', 'kungfu'),\n    value: 'delay-4s'\n  }, {\n    label: __('Five seconds', 'kungfu'),\n    value: 'delay-5s'\n  }],\n  styleControls: [{\n    label: __('Default', 'kungfu'),\n    value: ''\n  }, {\n    label: __('Attention Seekers', 'kungfu'),\n    value: null,\n    disabled: true\n  }, {\n    label: __('Bounce', 'kungfu'),\n    value: 'bounce'\n  }, {\n    label: __('Flash', 'kungfu'),\n    value: 'flash'\n  }, {\n    label: __('Pulse', 'kungfu'),\n    value: 'pulse'\n  }, {\n    label: __('Rubber Band', 'kungfu'),\n    value: 'rubberBand'\n  }, {\n    label: __('ShakeX', 'kungfu'),\n    value: 'shakeX'\n  }, {\n    label: __('ShakeY', 'kungfu'),\n    value: 'shakeY'\n  }, {\n    label: __('Head Shake', 'kungfu'),\n    value: 'headShake'\n  }, {\n    label: __('Swing', 'kungfu'),\n    value: 'swing'\n  }, {\n    label: __('TaDa', 'kungfu'),\n    value: 'tada'\n  }, {\n    label: __('Wobble', 'kungfu'),\n    value: 'wobble'\n  }, {\n    label: __('Jello', 'kungfu'),\n    value: 'jello'\n  }, {\n    label: __('Heart Beat', 'kungfu'),\n    value: 'heartBeat'\n  }, {\n    label: __('Back Entrances', 'kungfu'),\n    value: null,\n    disabled: true\n  }, {\n    label: __('Bounce In Down', 'kungfu'),\n    value: 'bounceInDown'\n  }, {\n    label: __('Bounce In Left', 'kungfu'),\n    value: 'bounceInLeft'\n  }, {\n    label: __('Bounce In Right', 'kungfu'),\n    value: 'bounceInRight'\n  }, {\n    label: __('Bounce In Up', 'kungfu'),\n    value: 'bounceInUp'\n  }, {\n    label: __('Back Exits', 'kungfu'),\n    value: null,\n    disabled: true\n  }, {\n    label: __('Bounce Out Down', 'kungfu'),\n    value: 'bounceOutDown'\n  }, {\n    label: __('Bounce Out Left', 'kungfu'),\n    value: 'bounceOutLeft'\n  }, {\n    label: __('Bounce Out Right', 'kungfu'),\n    value: 'bounceOutRight'\n  }, {\n    label: __('Bounce Out Up', 'kungfu'),\n    value: 'bounceOutUp'\n  }, {\n    label: __('Bouncing Entrances', 'kungfu'),\n    value: null,\n    disabled: true\n  }, {\n    label: __('Bounce In', 'kungfu'),\n    value: 'bounceIn'\n  }, {\n    label: __('Bounce In Down', 'kungfu'),\n    value: 'bounceInDown'\n  }, {\n    label: __('Bounce In Left', 'kungfu'),\n    value: 'bounceInLeft'\n  }, {\n    label: __('Bounce In Right', 'kungfu'),\n    value: 'bounceInRight'\n  }, {\n    label: __('Bounce In Up', 'kungfu'),\n    value: 'bounceInUp'\n  }, {\n    label: __('Bouncing Exits', 'kungfu'),\n    value: null,\n    disabled: true\n  }, {\n    label: __('Bounce Out', 'kungfu'),\n    value: 'bounceOut'\n  }, {\n    label: __('Bounce Out Down', 'kungfu'),\n    value: 'bounceOutDown'\n  }, {\n    label: __('Bounce Out Left', 'kungfu'),\n    value: 'bounceOutLeft'\n  }, {\n    label: __('Bounce Out Right', 'kungfu'),\n    value: 'bounceOutRight'\n  }, {\n    label: __('Bounce Out Up', 'kungfu'),\n    value: 'bounceOutUp'\n  }, {\n    label: __('Fading Entrances', 'kungfu'),\n    value: null,\n    disabled: true\n  }, {\n    label: __('Fade In', 'kungfu'),\n    value: 'fadeIn'\n  }, {\n    label: __('Fade In Down', 'kungfu'),\n    value: 'fadeInDown'\n  }, {\n    label: __('Fade In Left', 'kungfu'),\n    value: 'fadeInLeft'\n  }, {\n    label: __('Fade In Right', 'kungfu'),\n    value: 'fadeInRight'\n  }, {\n    label: __('Fade In Up', 'kungfu'),\n    value: 'fadeInUp'\n  }, {\n    label: __('Fade In Top Left', 'kungfu'),\n    value: 'fadeInTopLeft'\n  }, {\n    label: __('Fade In Top Right', 'kungfu'),\n    value: 'fadeInTopRight'\n  }, {\n    label: __('Fade In Bottom Left', 'kungfu'),\n    value: 'fadeInBottomLeft'\n  }, {\n    label: __('Fade In Bottom Right', 'kungfu'),\n    value: 'fadeInBottomRight'\n  }, {\n    label: __('Fading Exits', 'kungfu'),\n    value: null,\n    disabled: true\n  }, {\n    label: __('Fade Out', 'kungfu'),\n    value: 'fadeOut'\n  }, {\n    label: __('Fade Out Down', 'kungfu'),\n    value: 'fadeOutDown'\n  }, {\n    label: __('Fade Out Left', 'kungfu'),\n    value: 'fadeOutLeft'\n  }, {\n    label: __('Fade Out Right', 'kungfu'),\n    value: 'fadeOutRight'\n  }, {\n    label: __('Fade Out Up', 'kungfu'),\n    value: 'fadeOutUp'\n  }, {\n    label: __('Fade Out Top Left', 'kungfu'),\n    value: 'fadeOutTopLeft'\n  }, {\n    label: __('Fade Out Top Right', 'kungfu'),\n    value: 'fadeOutTopRight'\n  }, {\n    label: __('Fade Out Bottom Left', 'kungfu'),\n    value: 'fadeOutBottomLeft'\n  }, {\n    label: __('Fade Out Bottom Right', 'kungfu'),\n    value: 'fadeOutBottomRight'\n  }, {\n    label: __('Flippers', 'kungfu'),\n    value: null,\n    disabled: true\n  }, {\n    label: __('Flip', 'kungfu'),\n    value: 'flip'\n  }, {\n    label: __('Flip In X', 'kungfu'),\n    value: 'flipInX'\n  }, {\n    label: __('Flip In Y', 'kungfu'),\n    value: 'flipInY'\n  }, {\n    label: __('Flip Out X', 'kungfu'),\n    value: 'flipOutX'\n  }, {\n    label: __('Flip Out Y', 'kungfu'),\n    value: 'flipOutY'\n  }, {\n    label: __('Lightspeed', 'kungfu'),\n    value: null,\n    disabled: true\n  }, {\n    label: __('Light Speed In Left', 'kungfu'),\n    value: 'lightSpeedInLeft'\n  }, {\n    label: __('Light Speed In Right', 'kungfu'),\n    value: 'lightSpeedInRight'\n  }, {\n    label: __('Light Speed Out Left', 'kungfu'),\n    value: 'lightSpeedOutLeft'\n  }, {\n    label: __('Light Speed Out Right', 'kungfu'),\n    value: 'lightSpeedOutRight'\n  }, {\n    label: __('Rotating Entrances', 'kungfu'),\n    value: null,\n    disabled: true\n  }, {\n    label: __('Rotate In', 'kungfu'),\n    value: 'rotateIn'\n  }, {\n    label: __('Rotate In Down Left', 'kungfu'),\n    value: 'rotateInDownLeft'\n  }, {\n    label: __('Rotate In Down Right', 'kungfu'),\n    value: 'rotateInDownRight'\n  }, {\n    label: __('Rotate In Up Left', 'kungfu'),\n    value: 'rotateInUpLeft'\n  }, {\n    label: __('Rotate In Up Right', 'kungfu'),\n    value: 'rotateInUpRight'\n  }, {\n    label: __('Rotating Exits', 'kungfu'),\n    value: null,\n    disabled: true\n  }, {\n    label: __('Rotate Out', 'kungfu'),\n    value: 'rotateOut'\n  }, {\n    label: __('Rotate Out Down Left', 'kungfu'),\n    value: 'rotateOutDownLeft'\n  }, {\n    label: __('Rotate Out Down Right', 'kungfu'),\n    value: 'rotateOutDownRight'\n  }, {\n    label: __('Rotate Out Up Left', 'kungfu'),\n    value: 'rotateOutUpLeft'\n  }, {\n    label: __('Rotate Out Up Right', 'kungfu'),\n    value: 'rotateOutUpRight'\n  }, {\n    label: __('Specials', 'kungfu'),\n    value: null,\n    disabled: true\n  }, {\n    label: __('Hinge', 'kungfu'),\n    value: 'hinge'\n  }, {\n    label: __('Jack In The Box', 'kungfu'),\n    value: 'jackInTheBox'\n  }, {\n    label: __('Roll In', 'kungfu'),\n    value: 'rollIn'\n  }, {\n    label: __('Roll Out', 'kungfu'),\n    value: 'rollOut'\n  }, {\n    label: __('Zooming Entrances', 'kungfu'),\n    value: null,\n    disabled: true\n  }, {\n    label: __('Zoom In', 'kungfu'),\n    value: 'zoomIn'\n  }, {\n    label: __('Zoom In Down', 'kungfu'),\n    value: 'zoomInDown'\n  }, {\n    label: __('Zoom In Left', 'kungfu'),\n    value: 'zoomInLeft'\n  }, {\n    label: __('Zoom In Right', 'kungfu'),\n    value: 'zoomInRight'\n  }, {\n    label: __('Zoom In Up', 'kungfu'),\n    value: 'zoomInUp'\n  }, {\n    label: __('Zooming Exits', 'kungfu'),\n    value: null,\n    disabled: true\n  }, {\n    label: __('Zoom Out', 'kungfu'),\n    value: 'zoomOut'\n  }, {\n    label: __('Zoom Out Down', 'kungfu'),\n    value: 'zoomOutDown'\n  }, {\n    label: __('Zoom Out Left', 'kungfu'),\n    value: 'zoomOutLeft'\n  }, {\n    label: __('Zoom Out Right', 'kungfu'),\n    value: 'zoomOutRight'\n  }, {\n    label: __('Zoom Out Up', 'kungfu'),\n    value: 'zoomOutUp'\n  }, {\n    label: __('Sliding Entrances', 'kungfu'),\n    value: null,\n    disabled: true\n  }, {\n    label: __('Slide In Down', 'kungfu'),\n    value: 'slideInDown'\n  }, {\n    label: __('Slide In Left', 'kungfu'),\n    value: 'slideInLeft'\n  }, {\n    label: __('Slide In Right', 'kungfu'),\n    value: 'slideInRight'\n  }, {\n    label: __('Slide In Up', 'kungfu'),\n    value: 'slideInUp'\n  }, {\n    label: __('Sliding Exits', 'kungfu'),\n    value: null,\n    disabled: true\n  }, {\n    label: __('Slide Out Down', 'kungfu'),\n    value: 'slideOutDown'\n  }, {\n    label: __('Slide Out Left', 'kungfu'),\n    value: 'slideOutLeft'\n  }, {\n    label: __('Slide Out Right', 'kungfu'),\n    value: 'slideOutRight'\n  }, {\n    label: __('Slide Out Up', 'kungfu'),\n    value: 'slideOutUp'\n  }]\n};\n\n//# sourceURL=webpack:///./src/options.js?");

/***/ })

/******/ });
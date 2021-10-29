module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Box/Box.tsx":
/*!********************************!*\
  !*** ./components/Box/Box.tsx ***!
  \********************************/
/*! exports provided: Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Box\", function() { return Box; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ \"styled-system\");\n/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n    ${Object(styled_system__WEBPACK_IMPORTED_MODULE_1__[\"compose\"])(styled_system__WEBPACK_IMPORTED_MODULE_1__[\"space\"], styled_system__WEBPACK_IMPORTED_MODULE_1__[\"layout\"], styled_system__WEBPACK_IMPORTED_MODULE_1__[\"color\"], styled_system__WEBPACK_IMPORTED_MODULE_1__[\"flexbox\"], styled_system__WEBPACK_IMPORTED_MODULE_1__[\"background\"], styled_system__WEBPACK_IMPORTED_MODULE_1__[\"border\"], styled_system__WEBPACK_IMPORTED_MODULE_1__[\"position\"], styled_system__WEBPACK_IMPORTED_MODULE_1__[\"shadow\"], styled_system__WEBPACK_IMPORTED_MODULE_1__[\"grid\"], styled_system__WEBPACK_IMPORTED_MODULE_1__[\"typography\"])}\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0JveC9Cb3gudHN4P2FmNTkiXSwibmFtZXMiOlsiQm94Iiwic3R5bGVkIiwiZGl2IiwiY29tcG9zZSIsInNwYWNlIiwibGF5b3V0IiwiY29sb3IiLCJmbGV4Ym94IiwiYmFja2dyb3VuZCIsImJvcmRlciIsInBvc2l0aW9uIiwic2hhZG93IiwiZ3JpZCIsInR5cG9ncmFwaHkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFtQ08sTUFBTUEsR0FBRyxHQUFHQyx3REFBTSxDQUFDQyxHQUFjO0FBQ3hDLE1BQU1DLDZEQUFPLENBQ0xDLG1EQURLLEVBRUxDLG9EQUZLLEVBR0xDLG1EQUhLLEVBSUxDLHFEQUpLLEVBS0xDLHdEQUxLLEVBTUxDLG9EQU5LLEVBT0xDLHNEQVBLLEVBUUxDLG9EQVJLLEVBU0xDLGtEQVRLLEVBVUxDLHdEQVZLLENBV1A7QUFDTixDQWJPIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Cb3gvQm94LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtcbiAgICBjb21wb3NlLFxuICAgIHNwYWNlLFxuICAgIGxheW91dCxcbiAgICBjb2xvcixcbiAgICBmbGV4Ym94LFxuICAgIGJhY2tncm91bmQsXG4gICAgYm9yZGVyLFxuICAgIHBvc2l0aW9uLFxuICAgIHNoYWRvdyxcbiAgICBncmlkLFxuICAgIHR5cG9ncmFwaHksXG4gICAgU3BhY2VQcm9wcyxcbiAgICBMYXlvdXRQcm9wcyxcbiAgICBDb2xvclByb3BzLFxuICAgIEZsZXhib3hQcm9wcyxcbiAgICBCYWNrZ3JvdW5kUHJvcHMsXG4gICAgQm9yZGVyUHJvcHMsXG4gICAgUG9zaXRpb25Qcm9wcyxcbiAgICBTaGFkb3dQcm9wcyxcbiAgICBHcmlkUHJvcHMsXG4gICAgVHlwb2dyYXBoeVByb3BzLFxufSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxuZXhwb3J0IHR5cGUgQm94UHJvcHMgPSBTcGFjZVByb3BzICZcbiAgICBMYXlvdXRQcm9wcyAmXG4gICAgQ29sb3JQcm9wcyAmXG4gICAgRmxleGJveFByb3BzICZcbiAgICBCYWNrZ3JvdW5kUHJvcHMgJlxuICAgIEJvcmRlclByb3BzICZcbiAgICBQb3NpdGlvblByb3BzICZcbiAgICBTaGFkb3dQcm9wcyAmXG4gICAgR3JpZFByb3BzICZcbiAgICBUeXBvZ3JhcGh5UHJvcHM7XG5cbmV4cG9ydCBjb25zdCBCb3ggPSBzdHlsZWQuZGl2PEJveFByb3BzPmBcbiAgICAke2NvbXBvc2UoXG4gICAgICAgIHNwYWNlLFxuICAgICAgICBsYXlvdXQsXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBmbGV4Ym94LFxuICAgICAgICBiYWNrZ3JvdW5kLFxuICAgICAgICBib3JkZXIsXG4gICAgICAgIHBvc2l0aW9uLFxuICAgICAgICBzaGFkb3csXG4gICAgICAgIGdyaWQsXG4gICAgICAgIHR5cG9ncmFwaHlcbiAgICApfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Box/Box.tsx\n");

/***/ }),

/***/ "./components/Box/index.ts":
/*!*********************************!*\
  !*** ./components/Box/index.ts ***!
  \*********************************/
/*! exports provided: Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box */ \"./components/Box/Box.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Box\", function() { return _Box__WEBPACK_IMPORTED_MODULE_0__[\"Box\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0JveC9pbmRleC50cz80ODQ1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Cb3gvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL0JveCc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Box/index.ts\n");

/***/ }),

/***/ "./components/Button/Button.tsx":
/*!**************************************!*\
  !*** ./components/Button/Button.tsx ***!
  \**************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./components/Button/styles.ts\");\nvar _jsxFileName = \"/home/daianebarizon/Repositories/movies-bff-api/popcorn-time-site/components/Button/Button.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nconst Button = props => {\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"ButtonWrapper\"], _extends({}, props, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 12\n    }\n  }), props.children);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24udHN4P2YzZDEiXSwibmFtZXMiOlsiQnV0dG9uIiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFNTyxNQUFNQSxNQUFNLEdBQUlDLEtBQUQsSUFBOEI7QUFDaEQsU0FBTyxNQUFDLHFEQUFELGVBQW1CQSxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTJCQSxLQUFLLENBQUNDLFFBQWpDLENBQVA7QUFDSCxDQUZNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b25XcmFwcGVyIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSAocHJvcHM6IGFueSk6IFJlYWN0RWxlbWVudCA9PiB7XG4gICAgcmV0dXJuIDxCdXR0b25XcmFwcGVyIHsuLi5wcm9wc30+e3Byb3BzLmNoaWxkcmVufTwvQnV0dG9uV3JhcHBlcj47XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Button/Button.tsx\n");

/***/ }),

/***/ "./components/Button/index.ts":
/*!************************************!*\
  !*** ./components/Button/index.ts ***!
  \************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ \"./components/Button/Button.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__[\"Button\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbi9pbmRleC50cz84MTMxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9CdXR0b24vaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbic7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Button/index.ts\n");

/***/ }),

/***/ "./components/Button/styles.ts":
/*!*************************************!*\
  !*** ./components/Button/styles.ts ***!
  \*************************************/
/*! exports provided: ButtonWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonWrapper\", function() { return ButtonWrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Box */ \"./components/Box/index.ts\");\n\n\nconst ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Box__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]).attrs(props => ({\n  as: 'button',\n  backgroundColor: props.backgroundColor || 'primary',\n  borderRadius: 'big',\n  border: 'none',\n  px: '6',\n  py: '3'\n}))``;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbi9zdHlsZXMudHM/MDkwZSJdLCJuYW1lcyI6WyJCdXR0b25XcmFwcGVyIiwic3R5bGVkIiwiQm94IiwiYXR0cnMiLCJwcm9wcyIsImFzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwicHgiLCJweSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxNQUFNQSxhQUFhLEdBQUdDLHdEQUFNLENBQUNDLHdDQUFELENBQU4sQ0FBWUMsS0FBWixDQUFtQkMsS0FBRCxLQUFpQjtBQUM1REMsSUFBRSxFQUFFLFFBRHdEO0FBRTVEQyxpQkFBZSxFQUFFRixLQUFLLENBQUNFLGVBQU4sSUFBeUIsU0FGa0I7QUFHNURDLGNBQVksRUFBRSxLQUg4QztBQUk1REMsUUFBTSxFQUFFLE1BSm9EO0FBSzVEQyxJQUFFLEVBQUUsR0FMd0Q7QUFNNURDLElBQUUsRUFBRTtBQU53RCxDQUFqQixDQUFsQixDQU96QixFQVBHIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9CdXR0b24vc3R5bGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi9Cb3gnO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZChCb3gpLmF0dHJzKChwcm9wczogYW55KSA9PiAoe1xuICAgIGFzOiAnYnV0dG9uJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLmJhY2tncm91bmRDb2xvciB8fCAncHJpbWFyeScsXG4gICAgYm9yZGVyUmFkaXVzOiAnYmlnJyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBweDogJzYnLFxuICAgIHB5OiAnMycsXG59KSlgYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Button/styles.ts\n");

/***/ }),

/***/ "./components/Template/Header/Header.tsx":
/*!***********************************************!*\
  !*** ./components/Template/Header/Header.tsx ***!
  \***********************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Text */ \"./components/Text/index.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./components/Template/Header/styles.ts\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Button */ \"./components/Button/index.ts\");\n/* harmony import */ var popcorntime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! popcorntime */ \"popcorntime\");\n/* harmony import */ var popcorntime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(popcorntime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/home/daianebarizon/Repositories/movies-bff-api/popcorn-time-site/components/Template/Header/Header.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst Header = props => {\n  const options = {\n    page: 1,\n    sortby: 'seeds',\n    genre: 'all',\n    q: '' // It is useful to do a search or you can leave it empty\n\n  };\n  const data = Object(popcorntime__WEBPACK_IMPORTED_MODULE_4__[\"movies\"])(options);\n  console.log('data', data);\n  Object(popcorntime__WEBPACK_IMPORTED_MODULE_4__[\"movies\"])(options).then(data => console.log('api', data));\n  /* const apiImdb = imdb.get({name: 'The Toxic Avenger'}, {apiKey: 'foo', timeout: 30000}).then((data) => console.log('aqui', data)).catch((erro) => console.log('error', erro));\r\n     console.log('apiImdb', apiImdb) */\n\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"HeaderWrapper\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(_Text__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    as: \"h1\",\n    fontWeight: \"light\",\n    fontSize: \"45px\",\n    m: \"0\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, \"Watch Movies and TV Shows Instantly\"), __jsx(_Text__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    as: \"h2\",\n    fontWeight: \"light\",\n    fontSize: \"30px\",\n    color: \"green\",\n    m: \"0\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, \"Currently in Beta, but go ahead and try it!\"), __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    mt: \"20px\",\n    onClick: () => alert('clique'),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, __jsx(_Text__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    color: \"white\",\n    fontSize: \"25px\",\n    fontWeight: \"medium\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 17\n    }\n  }, \"Download Popcorn Time 4.4\")), __jsx(_Text__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    as: \"small\",\n    fontWeight: \"light\",\n    fontSize: \"13px\",\n    color: \"red\",\n    mt: \"13px\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, \"For Windows 7 and above Other operating systems and platforms\"));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RlbXBsYXRlL0hlYWRlci9IZWFkZXIudHN4PzMzN2YiXSwibmFtZXMiOlsiSGVhZGVyIiwicHJvcHMiLCJvcHRpb25zIiwicGFnZSIsInNvcnRieSIsImdlbnJlIiwicSIsImRhdGEiLCJtb3ZpZXMiLCJjb25zb2xlIiwibG9nIiwidGhlbiIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLTyxNQUFNQSxNQUFNLEdBQUtDLEtBQUQsSUFBa0I7QUFDckMsUUFBTUMsT0FBTyxHQUFHO0FBQ1pDLFFBQUksRUFBRSxDQURNO0FBRVpDLFVBQU0sRUFBRSxPQUZJO0FBR1pDLFNBQUssRUFBRSxLQUhLO0FBSVpDLEtBQUMsRUFBRSxFQUpTLENBSU47O0FBSk0sR0FBaEI7QUFNQSxRQUFNQyxJQUFJLEdBQUlDLDBEQUFNLENBQUNOLE9BQUQsQ0FBcEI7QUFDQU8sU0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQkgsSUFBcEI7QUFFQUMsNERBQU0sQ0FBQ04sT0FBRCxDQUFOLENBQWdCUyxJQUFoQixDQUFzQkosSUFBRCxJQUFVRSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CSCxJQUFuQixDQUEvQjtBQUVBO0FBQ0o7O0FBR0ksU0FDSSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDBDQUFEO0FBQU0sTUFBRSxFQUFDLElBQVQ7QUFBYyxjQUFVLEVBQUMsT0FBekI7QUFBaUMsWUFBUSxFQUFDLE1BQTFDO0FBQWlELEtBQUMsRUFBQyxHQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJDQURKLEVBSUksTUFBQywwQ0FBRDtBQUNJLE1BQUUsRUFBQyxJQURQO0FBRUksY0FBVSxFQUFDLE9BRmY7QUFHSSxZQUFRLEVBQUMsTUFIYjtBQUlJLFNBQUssRUFBQyxPQUpWO0FBS0ksS0FBQyxFQUFDLEdBTE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtREFKSixFQWFJLE1BQUMsOENBQUQ7QUFBUSxNQUFFLEVBQUMsTUFBWDtBQUFrQixXQUFPLEVBQUUsTUFBTUssS0FBSyxDQUFDLFFBQUQsQ0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMENBQUQ7QUFBTSxTQUFLLEVBQUMsT0FBWjtBQUFvQixZQUFRLEVBQUMsTUFBN0I7QUFBb0MsY0FBVSxFQUFDLFFBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREosQ0FiSixFQWtCSSxNQUFDLDBDQUFEO0FBQ0ksTUFBRSxFQUFDLE9BRFA7QUFFSSxjQUFVLEVBQUMsT0FGZjtBQUdJLFlBQVEsRUFBQyxNQUhiO0FBSUksU0FBSyxFQUFDLEtBSlY7QUFLSSxNQUFFLEVBQUMsTUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFFQWxCSixDQURKO0FBOEJILENBOUNNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UZW1wbGF0ZS9IZWFkZXIvSGVhZGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi9UZXh0JztcclxuaW1wb3J0IHsgSGVhZGVyV3JhcHBlciB9IGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vQnV0dG9uJztcclxuaW1wb3J0IHsgbW92aWVzIH0gZnJvbSAncG9wY29ybnRpbWUnO1xyXG5pbXBvcnQgaW1kYiBmcm9tICdpbWRiLWFwaSdcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7fVxyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgc29ydGJ5OiAnc2VlZHMnLFxyXG4gICAgICAgIGdlbnJlOiAnYWxsJyxcclxuICAgICAgICBxOiAnJyAvLyBJdCBpcyB1c2VmdWwgdG8gZG8gYSBzZWFyY2ggb3IgeW91IGNhbiBsZWF2ZSBpdCBlbXB0eVxyXG4gICAgICB9O1xyXG4gICAgY29uc3QgZGF0YSA9ICBtb3ZpZXMob3B0aW9ucyk7XHJcbiAgICBjb25zb2xlLmxvZygnZGF0YScsIGRhdGEpXHJcblxyXG4gICAgbW92aWVzKG9wdGlvbnMpLnRoZW4oKGRhdGEpID0+IGNvbnNvbGUubG9nKCdhcGknLCBkYXRhKSk7XHJcblxyXG4gICAgLyogY29uc3QgYXBpSW1kYiA9IGltZGIuZ2V0KHtuYW1lOiAnVGhlIFRveGljIEF2ZW5nZXInfSwge2FwaUtleTogJ2ZvbycsIHRpbWVvdXQ6IDMwMDAwfSkudGhlbigoZGF0YSkgPT4gY29uc29sZS5sb2coJ2FxdWknLCBkYXRhKSkuY2F0Y2goKGVycm8pID0+IGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm8pKTtcclxuIFxyXG4gICAgY29uc29sZS5sb2coJ2FwaUltZGInLCBhcGlJbWRiKSAqL1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEhlYWRlcldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxUZXh0IGFzPSdoMScgZm9udFdlaWdodD0nbGlnaHQnIGZvbnRTaXplPSc0NXB4JyBtPScwJz5cclxuICAgICAgICAgICAgICAgIFdhdGNoIE1vdmllcyBhbmQgVFYgU2hvd3MgSW5zdGFudGx5XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgIGFzPSdoMidcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9J2xpZ2h0J1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU9JzMwcHgnXHJcbiAgICAgICAgICAgICAgICBjb2xvcj0nZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICBtPScwJ1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDdXJyZW50bHkgaW4gQmV0YSwgYnV0IGdvIGFoZWFkIGFuZCB0cnkgaXQhXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPEJ1dHRvbiBtdD0nMjBweCcgb25DbGljaz17KCkgPT4gYWxlcnQoJ2NsaXF1ZScpfT5cclxuICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPSd3aGl0ZScgZm9udFNpemU9JzI1cHgnIGZvbnRXZWlnaHQ9J21lZGl1bSc+XHJcbiAgICAgICAgICAgICAgICAgICAgRG93bmxvYWQgUG9wY29ybiBUaW1lIDQuNFxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgIGFzPSdzbWFsbCdcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9J2xpZ2h0J1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU9JzEzcHgnXHJcbiAgICAgICAgICAgICAgICBjb2xvcj0ncmVkJ1xyXG4gICAgICAgICAgICAgICAgbXQ9JzEzcHgnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEZvciBXaW5kb3dzIDcgYW5kIGFib3ZlIE90aGVyIG9wZXJhdGluZyBzeXN0ZW1zIGFuZCBwbGF0Zm9ybXNcclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvSGVhZGVyV3JhcHBlcj5cclxuICAgICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Template/Header/Header.tsx\n");

/***/ }),

/***/ "./components/Template/Header/index.ts":
/*!*********************************************!*\
  !*** ./components/Template/Header/index.ts ***!
  \*********************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./components/Template/Header/Header.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__[\"Header\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RlbXBsYXRlL0hlYWRlci9pbmRleC50cz85NDRkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UZW1wbGF0ZS9IZWFkZXIvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL0hlYWRlcic7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Template/Header/index.ts\n");

/***/ }),

/***/ "./components/Template/Header/styles.ts":
/*!**********************************************!*\
  !*** ./components/Template/Header/styles.ts ***!
  \**********************************************/
/*! exports provided: HeaderWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderWrapper\", function() { return HeaderWrapper; });\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Box */ \"./components/Box/index.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Box__WEBPACK_IMPORTED_MODULE_0__[\"Box\"])`\n    background: url('/images/circle.png') no-repeat -13vw -30vw / 45vw 45vw,\n        url('/images/circle.png') no-repeat 77vw 5vw / 45vw 45vw;\n    background-color: #000;\n    min-height: 90vh;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RlbXBsYXRlL0hlYWRlci9zdHlsZXMudHM/MjY2YiJdLCJuYW1lcyI6WyJIZWFkZXJXcmFwcGVyIiwic3R5bGVkIiwiQm94Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU1BLGFBQWEsR0FBR0Msd0RBQU0sQ0FBQ0Msd0NBQUQsQ0FBTTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVZPIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UZW1wbGF0ZS9IZWFkZXIvc3R5bGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vQm94JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyV3JhcHBlciA9IHN0eWxlZChCb3gpYFxyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvaW1hZ2VzL2NpcmNsZS5wbmcnKSBuby1yZXBlYXQgLTEzdncgLTMwdncgLyA0NXZ3IDQ1dncsXHJcbiAgICAgICAgdXJsKCcvaW1hZ2VzL2NpcmNsZS5wbmcnKSBuby1yZXBlYXQgNzd2dyA1dncgLyA0NXZ3IDQ1dnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgbWluLWhlaWdodDogOTB2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Template/Header/styles.ts\n");

/***/ }),

/***/ "./components/Template/Menu/Menu.tsx":
/*!*******************************************!*\
  !*** ./components/Template/Menu/Menu.tsx ***!
  \*******************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Menu\", function() { return Menu; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Box */ \"./components/Box/index.ts\");\nvar _jsxFileName = \"/home/daianebarizon/Repositories/movies-bff-api/popcorn-time-site/components/Template/Menu/Menu.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Menu = props => {\n  return __jsx(_Box__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    p: \"10px\",\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"space-between\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, __jsx(_Box__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    as: \"img\",\n    src: \"/images/popcorn-time.png\",\n    alt: \"Popcorn time logo\",\n    maxWidth: \"200px\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }), __jsx(_Box__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }, \"a\"));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RlbXBsYXRlL01lbnUvTWVudS50c3g/ZjQ1NiJdLCJuYW1lcyI6WyJNZW51IiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBSU8sTUFBTUEsSUFBSSxHQUFJQyxLQUFELElBQWtCO0FBQ2xDLFNBQ0ksTUFBQyx3Q0FBRDtBQUNJLEtBQUMsRUFBQyxNQUROO0FBRUksV0FBTyxFQUFDLE1BRlo7QUFHSSxjQUFVLEVBQUMsUUFIZjtBQUlJLGtCQUFjLEVBQUMsZUFKbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1JLE1BQUMsd0NBQUQ7QUFDSSxNQUFFLEVBQUMsS0FEUDtBQUVJLE9BQUcsRUFBQywwQkFGUjtBQUdJLE9BQUcsRUFBQyxtQkFIUjtBQUlJLFlBQVEsRUFBQyxPQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixFQVlJLE1BQUMsd0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVpKLENBREo7QUFnQkgsQ0FqQk0iLCJmaWxlIjoiLi9jb21wb25lbnRzL1RlbXBsYXRlL01lbnUvTWVudS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi8uLi9Cb3gnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHt9XHJcblxyXG5leHBvcnQgY29uc3QgTWVudSA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBwPScxMHB4J1xyXG4gICAgICAgICAgICBkaXNwbGF5PSdmbGV4J1xyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPSdjZW50ZXInXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PSdzcGFjZS1iZXR3ZWVuJ1xyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgYXM9J2ltZydcclxuICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9wb3Bjb3JuLXRpbWUucG5nJ1xyXG4gICAgICAgICAgICAgICAgYWx0PSdQb3Bjb3JuIHRpbWUgbG9nbydcclxuICAgICAgICAgICAgICAgIG1heFdpZHRoPScyMDBweCdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJveD5hPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Template/Menu/Menu.tsx\n");

/***/ }),

/***/ "./components/Template/Menu/index.ts":
/*!*******************************************!*\
  !*** ./components/Template/Menu/index.ts ***!
  \*******************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ \"./components/Template/Menu/Menu.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Menu\", function() { return _Menu__WEBPACK_IMPORTED_MODULE_0__[\"Menu\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RlbXBsYXRlL01lbnUvaW5kZXgudHM/MWRhNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGVtcGxhdGUvTWVudS9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IE1lbnUgfSBmcm9tICcuL01lbnUnO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Template/Menu/index.ts\n");

/***/ }),

/***/ "./components/Text/Text.tsx":
/*!**********************************!*\
  !*** ./components/Text/Text.tsx ***!
  \**********************************/
/*! exports provided: TextStyled, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextStyled\", function() { return TextStyled; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-tools */ \"styled-tools\");\n/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_tools__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ \"styled-system\");\n/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_truncate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-truncate */ \"react-truncate\");\n/* harmony import */ var react_truncate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_truncate__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Box */ \"./components/Box/index.ts\");\nvar _jsxFileName = \"/home/daianebarizon/Repositories/movies-bff-api/popcorn-time-site/components/Text/Text.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\n\nconst TextStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Box__WEBPACK_IMPORTED_MODULE_5__[\"Box\"]).attrs(props => ({\n  color: props.color || 'white'\n}))`\n    ${styled_system__WEBPACK_IMPORTED_MODULE_3__[\"typography\"]} ::selection {\n        background-color: ${Object(styled_tools__WEBPACK_IMPORTED_MODULE_2__[\"theme\"])('primary')};\n    }\n`;\nconst Text = _ref => {\n  let {\n    children,\n    truncate\n  } = _ref,\n      props = _objectWithoutProperties(_ref, [\"children\", \"truncate\"]);\n\n  const content = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => {\n    if (!!truncate) {\n      return __jsx(react_truncate__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({}, truncate, {\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 20\n        }\n      }), children);\n    }\n\n    return children;\n  }, [truncate]);\n  return __jsx(TextStyled, _extends({}, props, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 12\n    }\n  }), content);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RleHQvVGV4dC50c3g/YzE3ZSJdLCJuYW1lcyI6WyJUZXh0U3R5bGVkIiwic3R5bGVkIiwiQm94IiwiYXR0cnMiLCJwcm9wcyIsImNvbG9yIiwidHlwb2dyYXBoeSIsInRoZW1lIiwiVGV4dCIsImNoaWxkcmVuIiwidHJ1bmNhdGUiLCJjb250ZW50IiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVTyxNQUFNQSxVQUFVLEdBQUdDLHdEQUFNLENBQUNDLHdDQUFELENBQU4sQ0FBWUMsS0FBWixDQUFtQkMsS0FBRCxLQUFZO0FBQ3BEQyxPQUFLLEVBQUVELEtBQUssQ0FBQ0MsS0FBTixJQUFlO0FBRDhCLENBQVosQ0FBbEIsQ0FFWDtBQUNmLE1BQU1DLHdEQUFXO0FBQ2pCLDRCQUE0QkMsMERBQUssQ0FBQyxTQUFELENBQVk7QUFDN0M7QUFDQSxDQU5PO0FBUUEsTUFBTUMsSUFBeUIsR0FBRyxRQUFzQztBQUFBLE1BQXJDO0FBQUVDLFlBQUY7QUFBWUM7QUFBWixHQUFxQztBQUFBLE1BQVpOLEtBQVk7O0FBQzNFLFFBQU1PLE9BQU8sR0FBR0MscURBQU8sQ0FBQyxNQUFNO0FBQzFCLFFBQUksQ0FBQyxDQUFDRixRQUFOLEVBQWdCO0FBQ1osYUFBTyxNQUFDLHFEQUFELGVBQWNBLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUF5QkQsUUFBekIsQ0FBUDtBQUNIOztBQUNELFdBQU9BLFFBQVA7QUFDSCxHQUxzQixFQUtwQixDQUFDQyxRQUFELENBTG9CLENBQXZCO0FBT0EsU0FBTyxNQUFDLFVBQUQsZUFBZ0JOLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBd0JPLE9BQXhCLENBQVA7QUFDSCxDQVRNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UZXh0L1RleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ3N0eWxlZC10b29scyc7XHJcbmltcG9ydCB7IHR5cG9ncmFwaHksIFR5cG9ncmFwaHlQcm9wcyB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xyXG5pbXBvcnQgVHJ1bmNhdGUsIHsgVHJ1bmNhdGVQcm9wcyB9IGZyb20gJ3JlYWN0LXRydW5jYXRlJztcclxuaW1wb3J0IHsgQm94LCBCb3hQcm9wcyB9IGZyb20gJy4uL0JveCc7XHJcblxyXG5leHBvcnQgdHlwZSBUZXh0UHJvcHNTdHlsZWQgPSBCb3hQcm9wcyAmIFR5cG9ncmFwaHlQcm9wcztcclxuXHJcbmV4cG9ydCB0eXBlIFRleHRQcm9wcyA9IFRleHRQcm9wc1N0eWxlZCAmIHtcclxuICAgIHRydW5jYXRlPzogVHJ1bmNhdGVQcm9wcztcclxuICAgIGFzPzogYW55O1xyXG4gICAgaHRtbEZvcj86IHN0cmluZztcclxufSAmIFJlYWN0LkFuY2hvckhUTUxBdHRyaWJ1dGVzPEhUTUxBbmNob3JFbGVtZW50PjtcclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0U3R5bGVkID0gc3R5bGVkKEJveCkuYXR0cnMoKHByb3BzKSA9PiAoe1xyXG4gICAgY29sb3I6IHByb3BzLmNvbG9yIHx8ICd3aGl0ZScsXHJcbn0pKTxUZXh0UHJvcHM+YFxyXG4gICAgJHt0eXBvZ3JhcGh5fSA6OnNlbGVjdGlvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZSgncHJpbWFyeScpfTtcclxuICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0OiBSZWFjdC5GQzxUZXh0UHJvcHM+ID0gKHsgY2hpbGRyZW4sIHRydW5jYXRlLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgaWYgKCEhdHJ1bmNhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxUcnVuY2F0ZSB7Li4udHJ1bmNhdGV9PntjaGlsZHJlbn08L1RydW5jYXRlPjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xyXG4gICAgfSwgW3RydW5jYXRlXSk7XHJcblxyXG4gICAgcmV0dXJuIDxUZXh0U3R5bGVkIHsuLi5wcm9wc30+e2NvbnRlbnR9PC9UZXh0U3R5bGVkPjtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Text/Text.tsx\n");

/***/ }),

/***/ "./components/Text/index.ts":
/*!**********************************!*\
  !*** ./components/Text/index.ts ***!
  \**********************************/
/*! exports provided: Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text */ \"./components/Text/Text.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return _Text__WEBPACK_IMPORTED_MODULE_0__[\"Text\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RleHQvaW5kZXgudHM/Y2UzYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGV4dC9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHRQcm9wcyBhcyBUZXh0UHJvcHNBbGlhcyB9IGZyb20gJy4vVGV4dCc7XG5cbmV4cG9ydCB7IFRleHQgfSBmcm9tICcuL1RleHQnO1xuXG5leHBvcnQgdHlwZSBUZXh0UHJvcHMgPSBUZXh0UHJvcHNBbGlhcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Text/index.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Box */ \"./components/Box/index.ts\");\n/* harmony import */ var _components_Template_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Template/Menu */ \"./components/Template/Menu/index.ts\");\n/* harmony import */ var _components_Template_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Template/Header */ \"./components/Template/Header/index.ts\");\nvar _jsxFileName = \"/home/daianebarizon/Repositories/movies-bff-api/popcorn-time-site/pages/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Home() {\n  return __jsx(_components_Box__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 17\n    }\n  }, \"PopCorn Time - Assista filmes e series\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 17\n    }\n  })), __jsx(_components_Box__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, __jsx(_components_Template_Menu__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }\n  }), __jsx(_components_Template_Header__WEBPACK_IMPORTED_MODULE_4__[\"Header\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDM0IsU0FDSSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhDQURKLEVBRUk7QUFBTSxPQUFHLEVBQUMsTUFBVjtBQUFpQixRQUFJLEVBQUMsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosRUFLSSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBTEosQ0FESjtBQVlIIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Cb3gnO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi4vY29tcG9uZW50cy9UZW1wbGF0ZS9NZW51JztcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9UZW1wbGF0ZS9IZWFkZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+UG9wQ29ybiBUaW1lIC0gQXNzaXN0YSBmaWxtZXMgZSBzZXJpZXM8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvZmF2aWNvbi5pY28nIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "popcorntime":
/*!******************************!*\
  !*** external "popcorntime" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"popcorntime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwb3Bjb3JudGltZVwiPzcxY2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicG9wY29ybnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwb3Bjb3JudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///popcorntime\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-truncate":
/*!*********************************!*\
  !*** external "react-truncate" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-truncate\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10cnVuY2F0ZVwiP2NiNDAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtdHJ1bmNhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10cnVuY2F0ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-truncate\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-system\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtc3lzdGVtXCI/YjRiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtc3lzdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLXN5c3RlbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-system\n");

/***/ }),

/***/ "styled-tools":
/*!*******************************!*\
  !*** external "styled-tools" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-tools\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtdG9vbHNcIj8yZmM3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN0eWxlZC10b29scy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC10b29sc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-tools\n");

/***/ })

/******/ });
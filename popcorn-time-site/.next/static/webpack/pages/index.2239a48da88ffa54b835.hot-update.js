webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Template/Header/Header.tsx":
/*!***********************************************!*\
  !*** ./components/Template/Header/Header.tsx ***!
  \***********************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Text */ \"./components/Text/index.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./components/Template/Header/styles.ts\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Button */ \"./components/Button/index.ts\");\n/* harmony import */ var popcorntime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! popcorntime */ \"./node_modules/popcorntime/src/index.js\");\n/* harmony import */ var popcorntime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(popcorntime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var imdb_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! imdb-api */ \"./node_modules/imdb-api/lib/imdb.js\");\n/* harmony import */ var imdb_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(imdb_api__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined,\n    _jsxFileName = \"/home/daianebarizon/Repositories/popcorn2/popcorn-time-site/components/Template/Header/Header.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Header = function Header(props) {\n  var options = {\n    page: 1,\n    sortby: 'seeds',\n    genre: 'all',\n    q: '' // It is useful to do a search or you can leave it empty\n\n  };\n  var data = Object(popcorntime__WEBPACK_IMPORTED_MODULE_4__[\"movies\"])(options);\n  console.log('data', data);\n  Object(popcorntime__WEBPACK_IMPORTED_MODULE_4__[\"movies\"])(options).then(function (data) {\n    return console.log('api', data);\n  });\n  var apiImdb = imdb_api__WEBPACK_IMPORTED_MODULE_5___default.a.get({\n    name: 'The Toxic Avenger'\n  }, {\n    apiKey: 'foo',\n    timeout: 30000\n  }).then(console.log('aqui'))[\"catch\"](console.log);\n  console.log('apiImdb', apiImdb);\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"HeaderWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(_Text__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    as: \"h1\",\n    fontWeight: \"light\",\n    fontSize: \"45px\",\n    m: \"0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, \"Watch Movies and TV Shows Instantly\"), __jsx(_Text__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    as: \"h2\",\n    fontWeight: \"light\",\n    fontSize: \"30px\",\n    color: \"green\",\n    m: \"0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, \"Currently in Beta, but go ahead and try it!\"), __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    mt: \"20px\",\n    onClick: function onClick() {\n      return alert('clique');\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, __jsx(_Text__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    color: \"white\",\n    fontSize: \"25px\",\n    fontWeight: \"medium\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 17\n    }\n  }, \"Download Popcorn Time 4.4\")), __jsx(_Text__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    as: \"small\",\n    fontWeight: \"light\",\n    fontSize: \"13px\",\n    color: \"red\",\n    mt: \"13px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, \"For Windows 7 and above Other operating systems and platforms\"));\n};\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZW1wbGF0ZS9IZWFkZXIvSGVhZGVyLnRzeD8zMzdmIl0sIm5hbWVzIjpbIkhlYWRlciIsInByb3BzIiwib3B0aW9ucyIsInBhZ2UiLCJzb3J0YnkiLCJnZW5yZSIsInEiLCJkYXRhIiwibW92aWVzIiwiY29uc29sZSIsImxvZyIsInRoZW4iLCJhcGlJbWRiIiwiaW1kYiIsImdldCIsIm5hbWUiLCJhcGlLZXkiLCJ0aW1lb3V0IiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlPLElBQU1BLE1BQU0sR0FBSSxTQUFWQSxNQUFVLENBQUNDLEtBQUQsRUFBa0I7QUFDckMsTUFBTUMsT0FBTyxHQUFHO0FBQ1pDLFFBQUksRUFBRSxDQURNO0FBRVpDLFVBQU0sRUFBRSxPQUZJO0FBR1pDLFNBQUssRUFBRSxLQUhLO0FBSVpDLEtBQUMsRUFBRSxFQUpTLENBSU47O0FBSk0sR0FBaEI7QUFNQSxNQUFNQyxJQUFJLEdBQUlDLDBEQUFNLENBQUNOLE9BQUQsQ0FBcEI7QUFDQU8sU0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQkgsSUFBcEI7QUFFQUMsNERBQU0sQ0FBQ04sT0FBRCxDQUFOLENBQWdCUyxJQUFoQixDQUFxQixVQUFDSixJQUFEO0FBQUEsV0FBVUUsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWixFQUFtQkgsSUFBbkIsQ0FBVjtBQUFBLEdBQXJCO0FBRUEsTUFBTUssT0FBTyxHQUFHQywrQ0FBSSxDQUFDQyxHQUFMLENBQVM7QUFBQ0MsUUFBSSxFQUFFO0FBQVAsR0FBVCxFQUFzQztBQUFDQyxVQUFNLEVBQUUsS0FBVDtBQUFnQkMsV0FBTyxFQUFFO0FBQXpCLEdBQXRDLEVBQXVFTixJQUF2RSxDQUE0RUYsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixDQUE1RSxXQUF1R0QsT0FBTyxDQUFDQyxHQUEvRyxDQUFoQjtBQUVBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCRSxPQUF2QjtBQUVBLFNBQ0ksTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywwQ0FBRDtBQUFNLE1BQUUsRUFBQyxJQUFUO0FBQWMsY0FBVSxFQUFDLE9BQXpCO0FBQWlDLFlBQVEsRUFBQyxNQUExQztBQUFpRCxLQUFDLEVBQUMsR0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQ0FESixFQUlJLE1BQUMsMENBQUQ7QUFDSSxNQUFFLEVBQUMsSUFEUDtBQUVJLGNBQVUsRUFBQyxPQUZmO0FBR0ksWUFBUSxFQUFDLE1BSGI7QUFJSSxTQUFLLEVBQUMsT0FKVjtBQUtJLEtBQUMsRUFBQyxHQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbURBSkosRUFhSSxNQUFDLDhDQUFEO0FBQVEsTUFBRSxFQUFDLE1BQVg7QUFBa0IsV0FBTyxFQUFFO0FBQUEsYUFBTU0sS0FBSyxDQUFDLFFBQUQsQ0FBWDtBQUFBLEtBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDBDQUFEO0FBQU0sU0FBSyxFQUFDLE9BQVo7QUFBb0IsWUFBUSxFQUFDLE1BQTdCO0FBQW9DLGNBQVUsRUFBQyxRQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURKLENBYkosRUFrQkksTUFBQywwQ0FBRDtBQUNJLE1BQUUsRUFBQyxPQURQO0FBRUksY0FBVSxFQUFDLE9BRmY7QUFHSSxZQUFRLEVBQUMsTUFIYjtBQUlJLFNBQUssRUFBQyxLQUpWO0FBS0ksTUFBRSxFQUFDLE1BTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxRUFsQkosQ0FESjtBQThCSCxDQTlDTTtLQUFNbEIsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGVtcGxhdGUvSGVhZGVyL0hlYWRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vVGV4dCc7XHJcbmltcG9ydCB7IEhlYWRlcldyYXBwZXIgfSBmcm9tICcuL3N0eWxlcyc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL0J1dHRvbic7XHJcbmltcG9ydCB7IG1vdmllcyB9IGZyb20gJ3BvcGNvcm50aW1lJztcclxuaW1wb3J0IGltZGIgZnJvbSAnaW1kYi1hcGknXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge31cclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAgKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgIHNvcnRieTogJ3NlZWRzJyxcclxuICAgICAgICBnZW5yZTogJ2FsbCcsXHJcbiAgICAgICAgcTogJycgLy8gSXQgaXMgdXNlZnVsIHRvIGRvIGEgc2VhcmNoIG9yIHlvdSBjYW4gbGVhdmUgaXQgZW1wdHlcclxuICAgICAgfTtcclxuICAgIGNvbnN0IGRhdGEgPSAgbW92aWVzKG9wdGlvbnMpO1xyXG4gICAgY29uc29sZS5sb2coJ2RhdGEnLCBkYXRhKVxyXG5cclxuICAgIG1vdmllcyhvcHRpb25zKS50aGVuKChkYXRhKSA9PiBjb25zb2xlLmxvZygnYXBpJywgZGF0YSkpO1xyXG5cclxuICAgIGNvbnN0IGFwaUltZGIgPSBpbWRiLmdldCh7bmFtZTogJ1RoZSBUb3hpYyBBdmVuZ2VyJ30sIHthcGlLZXk6ICdmb28nLCB0aW1lb3V0OiAzMDAwMH0pLnRoZW4oY29uc29sZS5sb2coJ2FxdWknKSkuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gXHJcbiAgICBjb25zb2xlLmxvZygnYXBpSW1kYicsIGFwaUltZGIpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SGVhZGVyV3JhcHBlcj5cclxuICAgICAgICAgICAgPFRleHQgYXM9J2gxJyBmb250V2VpZ2h0PSdsaWdodCcgZm9udFNpemU9JzQ1cHgnIG09JzAnPlxyXG4gICAgICAgICAgICAgICAgV2F0Y2ggTW92aWVzIGFuZCBUViBTaG93cyBJbnN0YW50bHlcclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgYXM9J2gyJ1xyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodD0nbGlnaHQnXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT0nMzBweCdcclxuICAgICAgICAgICAgICAgIGNvbG9yPSdncmVlbidcclxuICAgICAgICAgICAgICAgIG09JzAnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEN1cnJlbnRseSBpbiBCZXRhLCBidXQgZ28gYWhlYWQgYW5kIHRyeSBpdCFcclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8QnV0dG9uIG10PScyMHB4JyBvbkNsaWNrPXsoKSA9PiBhbGVydCgnY2xpcXVlJyl9PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgY29sb3I9J3doaXRlJyBmb250U2l6ZT0nMjVweCcgZm9udFdlaWdodD0nbWVkaXVtJz5cclxuICAgICAgICAgICAgICAgICAgICBEb3dubG9hZCBQb3Bjb3JuIFRpbWUgNC40XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgYXM9J3NtYWxsJ1xyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodD0nbGlnaHQnXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT0nMTNweCdcclxuICAgICAgICAgICAgICAgIGNvbG9yPSdyZWQnXHJcbiAgICAgICAgICAgICAgICBtdD0nMTNweCdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRm9yIFdpbmRvd3MgNyBhbmQgYWJvdmUgT3RoZXIgb3BlcmF0aW5nIHN5c3RlbXMgYW5kIHBsYXRmb3Jtc1xyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPC9IZWFkZXJXcmFwcGVyPlxyXG4gICAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Template/Header/Header.tsx\n");

/***/ })

})
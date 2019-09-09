webpackHotUpdate("static/development/pages/383707716.js",{

/***/ "./lib/with-md.js":
/*!************************!*\
  !*** ./lib/with-md.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WithPost; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "/Users/shanshihao/Project/next-blog/lib/with-md.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Highlight = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-highlight */ "./node_modules/react-highlight/index.js", 7));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-highlight */ "./node_modules/react-highlight/index.js")];
    },
    modules: ['react-highlight']
  }
});
marked__WEBPACK_IMPORTED_MODULE_1___default.a.setOptions({
  gfm: true,
  tables: true,
  breaks: true
});
function WithPost(options) {
  var rawHtml = options.html,
      title = options.title;
  var html = decodeURIComponent(rawHtml);
  return function () {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, title), __jsx(Highlight, {
      innerHTML: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, html));
  };
}

/***/ })

})
//# sourceMappingURL=383707716.js.ee3d4368dc3b7a7448b8.hot-update.js.map
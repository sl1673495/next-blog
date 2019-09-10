webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Main.jsx":
/*!*****************************!*\
  !*** ./components/Main.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/shanshihao/Project/next-blog/components/Main.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var blogs = _ref.blogs;
  console.log('blogs: ', blogs);
  var user = blogs[0].user;
  var html_url = user.html_url,
      avatar_url = user.avatar_url,
      login = user.login;

  var renderIntroduce = function renderIntroduce() {
    return __jsx("div", {
      className: "jsx-4146411567" + " " + "introduce",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("img", {
      src: avatar_url,
      alt: "\u5934\u50CF",
      className: "jsx-4146411567" + " " + "avatar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-4146411567" + " " + "desc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "Personal blog by ", __jsx("a", {
      rel: "noopener noreferrer",
      target: "_blank",
      href: html_url,
      className: "jsx-4146411567",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, login), ". I explain with words and code."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4146411567",
      __self: this
    }, ".introduce.jsx-4146411567{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:300px;margin-bottom:56px;}.avatar.jsx-4146411567{width:56px;height:56px;border-radius:50%;margin-right:14px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}.desc.jsx-4146411567{margin:0;}.desc.jsx-4146411567 a.jsx-4146411567{color:var(--textLink);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFuc2hpaGFvL1Byb2plY3QvbmV4dC1ibG9nL2NvbXBvbmVudHMvTWFpbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWtCLEFBRzBCLEFBTUYsQUFRRixBQUlhLFNBSHhCLEVBUmMsV0FZZCxDQVhvQixrQkFDQSxrQkFDSixlQVRFLGdCQUNHLG1CQUNyQixNQVFBIiwiZmlsZSI6Ii9Vc2Vycy9zaGFuc2hpaGFvL1Byb2plY3QvbmV4dC1ibG9nL2NvbXBvbmVudHMvTWFpbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGJsb2dzIH0pID0+IHtcbiAgY29uc29sZS5sb2coJ2Jsb2dzOiAnLCBibG9ncyk7XG4gIGNvbnN0IHsgdXNlciB9ID0gYmxvZ3NbMF1cbiAgY29uc3QgeyBodG1sX3VybCwgYXZhdGFyX3VybCwgbG9naW4gfSA9IHVzZXJcbiAgY29uc3QgcmVuZGVySW50cm9kdWNlID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm9kdWNlXCI+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cImF2YXRhclwiIHNyYz17YXZhdGFyX3VybH0gYWx0PVwi5aS05YOPXCIgLz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NcIj5cbiAgICAgICAgIFBlcnNvbmFsIGJsb2cgYnkgPGEgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2h0bWxfdXJsfT57bG9naW59PC9hPi4gSSBleHBsYWluIHdpdGggd29yZHMgYW5kIGNvZGUuXG4gICAgICA8L3A+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmludHJvZHVjZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDU2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICB3aWR0aDogNTZweDtcbiAgICAgICAgICAgIGhlaWdodDogNTZweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTRweDtcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kZXNjIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGVzYyBhIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0TGluayk7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxuXG4gIGNvbnN0IHJlbmRlckJsb2dzID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7YmxvZ3MubWFwKChibG9nKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBpZCwgdGl0bGUgfSA9IGJsb2dcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGgzIGtleT17aWR9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7aWR9YH0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGl0bGUtbGlua1wiPnt0aXRsZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnRpdGxlLWxpbmsge1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dExpbmspO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJibG9nc1wiPlxuICAgICAge3JlbmRlckludHJvZHVjZSgpfVxuICAgICAge3JlbmRlckJsb2dzKCl9XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/shanshihao/Project/next-blog/components/Main.jsx */"));
  };

  var renderBlogs = function renderBlogs() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, blogs.map(function (blog) {
      var id = blog.id,
          title = blog.title;
      return __jsx("h3", {
        key: id,
        className: "jsx-3922345696",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/".concat(id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3922345696" + " " + "title-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, title)));
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3922345696",
      __self: this
    }, ".title-link.jsx-3922345696{color:var(--textLink);-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFuc2hpaGFvL1Byb2plY3QvbmV4dC1ibG9nL2NvbXBvbmVudHMvTWFpbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RvQixBQUdxQyxzQkFDRCxrREFDdkIiLCJmaWxlIjoiL1VzZXJzL3NoYW5zaGloYW8vUHJvamVjdC9uZXh0LWJsb2cvY29tcG9uZW50cy9NYWluLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgKHsgYmxvZ3MgfSkgPT4ge1xuICBjb25zb2xlLmxvZygnYmxvZ3M6ICcsIGJsb2dzKTtcbiAgY29uc3QgeyB1c2VyIH0gPSBibG9nc1swXVxuICBjb25zdCB7IGh0bWxfdXJsLCBhdmF0YXJfdXJsLCBsb2dpbiB9ID0gdXNlclxuICBjb25zdCByZW5kZXJJbnRyb2R1Y2UgPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyb2R1Y2VcIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXZhdGFyXCIgc3JjPXthdmF0YXJfdXJsfSBhbHQ9XCLlpLTlg49cIiAvPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY1wiPlxuICAgICAgICAgUGVyc29uYWwgYmxvZyBieSA8YSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17aHRtbF91cmx9Pntsb2dpbn08L2E+LiBJIGV4cGxhaW4gd2l0aCB3b3JkcyBhbmQgY29kZS5cbiAgICAgIDwvcD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaW50cm9kdWNlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTZweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYXZhdGFyIHtcbiAgICAgICAgICAgIHdpZHRoOiA1NnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmRlc2Mge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kZXNjIGEge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHRMaW5rKTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG5cbiAgY29uc3QgcmVuZGVyQmxvZ3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtibG9ncy5tYXAoKGJsb2cpID0+IHtcbiAgICAgICAgICBjb25zdCB7IGlkLCB0aXRsZSB9ID0gYmxvZ1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aDMga2V5PXtpZH0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtpZH1gfT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0aXRsZS1saW5rXCI+e3RpdGxlfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAudGl0bGUtbGluayB7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0TGluayk7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC8+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dzXCI+XG4gICAgICB7cmVuZGVySW50cm9kdWNlKCl9XG4gICAgICB7cmVuZGVyQmxvZ3MoKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/shanshihao/Project/next-blog/components/Main.jsx */"));
  };

  return __jsx("div", {
    className: "blogs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, renderIntroduce(), renderBlogs());
});

/***/ })

})
//# sourceMappingURL=index.js.446950085576acfe890d.hot-update.js.map
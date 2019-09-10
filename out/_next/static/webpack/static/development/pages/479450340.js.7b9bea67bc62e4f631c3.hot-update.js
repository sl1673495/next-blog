webpackHotUpdate("static/development/pages/479450340.js",{

/***/ "./lib/with-md.jsx":
/*!*************************!*\
  !*** ./lib/with-md.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WithPost; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Markdown */ "./components/Markdown.jsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
var _jsxFileName = "/Users/shanshihao/Project/next-blog/lib/with-md.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function WithPost(options) {
  var html = options.html,
      blog = options.blog,
      comments = options.comments;
  var title = blog.title;
  console.log('blog: ', blog);
  return function () {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-918773756" + " " + "markdown-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-918773756" + " " + "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, title), __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
      html: html,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-918773756" + " " + "comments",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, comments.map(function (comment) {
      var user = comment.user;
      return __jsx("div", {
        className: "jsx-918773756" + " " + "comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-918773756" + " " + "user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("img", {
        src: user.avatar_url,
        className: "jsx-918773756" + " " + "avatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), __jsx("span", {
        className: "jsx-918773756" + " " + "login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, user.login)), __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
        html: comment.html,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }));
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2472489444",
      __self: this
    }, "body{--textTitle:rgb(255,167,196);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFuc2hpaGFvL1Byb2plY3QvbmV4dC1ibG9nL2xpYi93aXRoLW1kLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQnlCLEFBRzBDLDZCQUNqQyIsImZpbGUiOiIvVXNlcnMvc2hhbnNoaWhhby9Qcm9qZWN0L25leHQtYmxvZy9saWIvd2l0aC1tZC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAnLi4vY29tcG9uZW50cy9NYXJrZG93bidcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpdGhQb3N0KG9wdGlvbnMpIHtcbiAgY29uc3QgeyBodG1sLCBibG9nLCBjb21tZW50cyB9ID0gb3B0aW9uc1xuICBjb25zdCB7IHRpdGxlIH0gPSBibG9nXG4gIGNvbnNvbGUubG9nKCdibG9nOiAnLCBibG9nKTtcbiAgcmV0dXJuICgpID0+IChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZG93bi1ib2R5XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPE1hcmtkb3duIGh0bWw9e2h0bWx9IC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50c1wiPlxuICAgICAgICAgIHtjb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlciB9ID0gY29tbWVudFxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF2YXRhclwiIHNyYz17dXNlci5hdmF0YXJfdXJsfSAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW5cIj57dXNlci5sb2dpbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPE1hcmtkb3duIGh0bWw9e2NvbW1lbnQuaHRtbH0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICAtLXRleHRUaXRsZTogcmdiKDI1NSwgMTY3LCAxOTYpO1xuICAgICAgICB9ICBcbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHROb3JtYWwpO1xuICAgICAgICB9XG4gICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29tbWVudCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC51c2VyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/shanshihao/Project/next-blog/lib/with-md.jsx */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4143055121",
      __self: this
    }, ".title.jsx-918773756{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:var(--textNormal);}.avatar.jsx-918773756{width:50px;height:50px;border-radius:50%;}.comment.jsx-918773756{margin-bottom:32px;}.user.jsx-918773756{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFuc2hpaGFvL1Byb2plY3QvbmV4dC1ibG9nL2xpYi93aXRoLW1kLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ2tCLEFBR3dCLEFBSUYsQUFNUSxBQUlOLFdBVEQsUUFNZCxJQUxvQixrQkFDcEIsaUNBTjBCLEFBY0wsd0JBYnJCLHFFQWNBIiwiZmlsZSI6Ii9Vc2Vycy9zaGFuc2hpaGFvL1Byb2plY3QvbmV4dC1ibG9nL2xpYi93aXRoLW1kLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBNYXJrZG93biBmcm9tICcuLi9jb21wb25lbnRzL01hcmtkb3duJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2l0aFBvc3Qob3B0aW9ucykge1xuICBjb25zdCB7IGh0bWwsIGJsb2csIGNvbW1lbnRzIH0gPSBvcHRpb25zXG4gIGNvbnN0IHsgdGl0bGUgfSA9IGJsb2dcbiAgY29uc29sZS5sb2coJ2Jsb2c6ICcsIGJsb2cpO1xuICByZXR1cm4gKCkgPT4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmtkb3duLWJvZHlcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2gxPlxuICAgICAgICA8TWFya2Rvd24gaHRtbD17aHRtbH0gLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzXCI+XG4gICAgICAgICAge2NvbW1lbnRzLm1hcCgoY29tbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyB1c2VyIH0gPSBjb21tZW50XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXZhdGFyXCIgc3JjPXt1c2VyLmF2YXRhcl91cmx9IC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dpblwiPnt1c2VyLmxvZ2lufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8TWFya2Rvd24gaHRtbD17Y29tbWVudC5odG1sfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIC0tdGV4dFRpdGxlOiByZ2IoMjU1LCAxNjcsIDE5Nik7XG4gICAgICAgIH0gIFxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dE5vcm1hbCk7XG4gICAgICAgIH1cbiAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21tZW50IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/shanshihao/Project/next-blog/lib/with-md.jsx */"));
  };
}

/***/ })

})
//# sourceMappingURL=479450340.js.7b9bea67bc62e4f631c3.hot-update.js.map
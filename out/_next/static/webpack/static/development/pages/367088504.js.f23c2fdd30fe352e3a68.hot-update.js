webpackHotUpdate("static/development/pages/367088504.js",{

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
  return function () {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1776941920" + " " + "markdown-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-1776941920" + " " + "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, title), __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
      html: html,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1776941920" + " " + "comments",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, comments.map(function (comment) {
      var user = comment.user;
      return __jsx("div", {
        className: "jsx-1776941920" + " " + "comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1776941920" + " " + "user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx("img", {
        src: user.avatar_url,
        className: "jsx-1776941920" + " " + "avatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), __jsx("a", {
        href: user.html_url,
        className: "jsx-1776941920" + " " + "login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, user.login)), __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
        html: comment.html,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }));
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2472489444",
      __self: this
    }, "body{--textTitle:rgb(255,167,196);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFuc2hpaGFvL1Byb2plY3QvbmV4dC1ibG9nL2xpYi93aXRoLW1kLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QnlCLEFBRzBDLDZCQUNqQyIsImZpbGUiOiIvVXNlcnMvc2hhbnNoaWhhby9Qcm9qZWN0L25leHQtYmxvZy9saWIvd2l0aC1tZC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAnLi4vY29tcG9uZW50cy9NYXJrZG93bidcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpdGhQb3N0KG9wdGlvbnMpIHtcbiAgY29uc3QgeyBodG1sLCBibG9nLCBjb21tZW50cyB9ID0gb3B0aW9uc1xuICBjb25zdCB7IHRpdGxlIH0gPSBibG9nXG4gIHJldHVybiAoKSA9PiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFya2Rvd24tYm9keVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxNYXJrZG93biBodG1sPXtodG1sfSAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHNcIj5cbiAgICAgICAgICB7Y29tbWVudHMubWFwKChjb21tZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHVzZXIgfSA9IGNvbW1lbnRcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdmF0YXJcIiBzcmM9e3VzZXIuYXZhdGFyX3VybH0gLz5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3VzZXIuaHRtbF91cmx9IGNsYXNzTmFtZT1cImxvZ2luXCI+e3VzZXIubG9naW59PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxNYXJrZG93biBodG1sPXtjb21tZW50Lmh0bWx9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgLS10ZXh0VGl0bGU6IHJnYigyNTUsIDE2NywgMTk2KTtcbiAgICAgICAgfSAgXG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0Tm9ybWFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29tbWVudCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC51c2VyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAubG9naW4ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0TGluayk7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/shanshihao/Project/next-blog/lib/with-md.jsx */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4063293197",
      __self: this
    }, ".title.jsx-1776941920{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:var(--textNormal);}.avatar.jsx-1776941920{width:50px;height:50px;border-radius:50%;}.comment.jsx-1776941920{margin-bottom:32px;border-bottom:1px solid #eee;}.user.jsx-1776941920{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.login.jsx-1776941920{color:var(--textLink);-webkit-text-decoration:none;text-decoration:none;}.avatar.jsx-1776941920{width:32px;height:32px;border-radius:50%;margin-right:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFuc2hpaGFvL1Byb2plY3QvbmV4dC1ibG9nL2xpYi93aXRoLW1kLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ2tCLEFBR3dCLEFBS0YsQUFNUSxBQUtOLEFBS1MsQUFLWCxXQXBCQyxBQXFCQSxRQWZpQixHQVVSLENBZkgsQUFxQkEsa0JBcEJwQixBQXFCbUIsT0FoQm5CLFVBaUJBLGNBUEEsRUF0QjBCLEFBZ0JMLHdCQWZyQixxRUFnQkEiLCJmaWxlIjoiL1VzZXJzL3NoYW5zaGloYW8vUHJvamVjdC9uZXh0LWJsb2cvbGliL3dpdGgtbWQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJy4uL2NvbXBvbmVudHMvTWFya2Rvd24nXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaXRoUG9zdChvcHRpb25zKSB7XG4gIGNvbnN0IHsgaHRtbCwgYmxvZywgY29tbWVudHMgfSA9IG9wdGlvbnNcbiAgY29uc3QgeyB0aXRsZSB9ID0gYmxvZ1xuICByZXR1cm4gKCkgPT4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmtkb3duLWJvZHlcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2gxPlxuICAgICAgICA8TWFya2Rvd24gaHRtbD17aHRtbH0gLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzXCI+XG4gICAgICAgICAge2NvbW1lbnRzLm1hcCgoY29tbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyB1c2VyIH0gPSBjb21tZW50XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXZhdGFyXCIgc3JjPXt1c2VyLmF2YXRhcl91cmx9IC8+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXt1c2VyLmh0bWxfdXJsfSBjbGFzc05hbWU9XCJsb2dpblwiPnt1c2VyLmxvZ2lufTwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8TWFya2Rvd24gaHRtbD17Y29tbWVudC5odG1sfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIC0tdGV4dFRpdGxlOiByZ2IoMjU1LCAxNjcsIDE5Nik7XG4gICAgICAgIH0gIFxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dE5vcm1hbCk7XG4gICAgICAgIH1cblxuICAgICAgICAuYXZhdGFyIHtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbW1lbnQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgIH1cblxuICAgICAgICAudXNlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ2luIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dExpbmspO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/shanshihao/Project/next-blog/lib/with-md.jsx */"));
  };
}

/***/ })

})
//# sourceMappingURL=367088504.js.f23c2fdd30fe352e3a68.hot-update.js.map
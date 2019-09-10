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
      className: "jsx-3769347107" + " " + "markdown-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-3769347107" + " " + "title",
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
      className: "jsx-3769347107" + " " + "comments",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, comments.map(function (comment) {
      console.log('comment: ', comment);
      return __jsx("div", {
        className: "jsx-3769347107" + " " + "comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3769347107" + " " + "user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("img", {
        src: user.avatar_url,
        className: "jsx-3769347107" + " " + "avatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })), __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
    }, "body{--textTitle:rgb(255,167,196);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFuc2hpaGFvL1Byb2plY3QvbmV4dC1ibG9nL2xpYi93aXRoLW1kLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QnlCLEFBRzBDLDZCQUNqQyIsImZpbGUiOiIvVXNlcnMvc2hhbnNoaWhhby9Qcm9qZWN0L25leHQtYmxvZy9saWIvd2l0aC1tZC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAnLi4vY29tcG9uZW50cy9NYXJrZG93bidcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpdGhQb3N0KG9wdGlvbnMpIHtcbiAgY29uc3QgeyBodG1sLCBibG9nLCBjb21tZW50cyB9ID0gb3B0aW9uc1xuICBjb25zdCB7IHRpdGxlIH0gPSBibG9nXG4gIGNvbnNvbGUubG9nKCdibG9nOiAnLCBibG9nKTtcbiAgcmV0dXJuICgpID0+IChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZG93bi1ib2R5XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPE1hcmtkb3duIGh0bWw9e2h0bWx9IC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50c1wiPlxuICAgICAgICAgIHtjb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50OiAnLCBjb21tZW50KTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdmF0YXJcIiBzcmM9e3VzZXIuYXZhdGFyX3VybH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8TWFya2Rvd24gaHRtbD17Y29tbWVudC5odG1sfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIC0tdGV4dFRpdGxlOiByZ2IoMjU1LCAxNjcsIDE5Nik7XG4gICAgICAgIH0gIFxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dE5vcm1hbCk7XG4gICAgICAgIH1cbiAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21tZW50IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/shanshihao/Project/next-blog/lib/with-md.jsx */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2730666094",
      __self: this
    }, ".title.jsx-3769347107{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:var(--textNormal);}.avatar.jsx-3769347107{width:50px;height:50px;border-radius:50%;}.comment.jsx-3769347107{margin-bottom:32px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFuc2hpaGFvL1Byb2plY3QvbmV4dC1ibG9nL2xpYi93aXRoLW1kLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ2tCLEFBR3dCLEFBSUYsQUFNUSxXQUxQLFFBTWQsSUFMb0Isa0JBQ3BCLGlDQU4wQix3QkFDMUIiLCJmaWxlIjoiL1VzZXJzL3NoYW5zaGloYW8vUHJvamVjdC9uZXh0LWJsb2cvbGliL3dpdGgtbWQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJy4uL2NvbXBvbmVudHMvTWFya2Rvd24nXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaXRoUG9zdChvcHRpb25zKSB7XG4gIGNvbnN0IHsgaHRtbCwgYmxvZywgY29tbWVudHMgfSA9IG9wdGlvbnNcbiAgY29uc3QgeyB0aXRsZSB9ID0gYmxvZ1xuICBjb25zb2xlLmxvZygnYmxvZzogJywgYmxvZyk7XG4gIHJldHVybiAoKSA9PiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFya2Rvd24tYm9keVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxNYXJrZG93biBodG1sPXtodG1sfSAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHNcIj5cbiAgICAgICAgICB7Y29tbWVudHMubWFwKChjb21tZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY29tbWVudDogJywgY29tbWVudCk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXZhdGFyXCIgc3JjPXt1c2VyLmF2YXRhcl91cmx9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPE1hcmtkb3duIGh0bWw9e2NvbW1lbnQuaHRtbH0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICAtLXRleHRUaXRsZTogcmdiKDI1NSwgMTY3LCAxOTYpO1xuICAgICAgICB9ICBcbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHROb3JtYWwpO1xuICAgICAgICB9XG4gICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29tbWVudCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/shanshihao/Project/next-blog/lib/with-md.jsx */"));
  };
}

/***/ })

})
//# sourceMappingURL=479450340.js.33326a4a3935aa967f1a.hot-update.js.map
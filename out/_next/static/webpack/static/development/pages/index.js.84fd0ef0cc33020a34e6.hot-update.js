webpackHotUpdate("static/development/pages/index.js",{

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");

var mdDir = path.resolve(__dirname, './md');
var pageDir = path.join(__dirname, './pages');
module.exports = {
  mdDir: mdDir,
  pageDir: pageDir,
  // 用于展示用户
  user: {
    name: 'ssh'
  },
  // 用于同步github的博客
  repo: {
    owner: 'sl1673495',
    name: 'blogs'
  },
  // 可选 如果申请了github Oauth app的话 可以填写用于取消github请求限制
  client_id: '',
  client_secret: ''
};
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ })

})
//# sourceMappingURL=index.js.84fd0ef0cc33020a34e6.hot-update.js.map
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
  // 用于更改标题上的用户信息
  user: {
    name: 'ssh'
  },
  // 用于同步github的博客
  repo: {
    owner: 'lazyken',
    name: 'blog'
  },
  // 可选 如果申请了github Oauth app的话
  // 可以填写用于取消github请求限制
  client_id: '6a1ff2700790b55ade14',
  client_secret: 'bddc92e3fc965fc285dd8b4e98bdd58640791b2c'
};
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ })

})
//# sourceMappingURL=index.js.b43b42688310f850e28c.hot-update.js.map
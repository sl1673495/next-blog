webpackHotUpdate("static/development/pages/365015690.js",{

/***/ "./pages/365015690/index.jsx":
/*!***********************************!*\
  !*** ./pages/365015690/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_with_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/with-md */ "./lib/with-md.jsx");

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_with_md__WEBPACK_IMPORTED_MODULE_0__["default"])({
  blog: {
    "url": "https://api.github.com/repos/sl1673495/blogs/issues/1",
    "repository_url": "https://api.github.com/repos/sl1673495/blogs",
    "labels_url": "https://api.github.com/repos/sl1673495/blogs/issues/1/labels{/name}",
    "comments_url": "https://api.github.com/repos/sl1673495/blogs/issues/1/comments",
    "events_url": "https://api.github.com/repos/sl1673495/blogs/issues/1/events",
    "html_url": "https://github.com/sl1673495/blogs/issues/1",
    "id": 365015690,
    "node_id": "MDU6SXNzdWUzNjUwMTU2OTA=",
    "number": 1,
    "title": "generator函数的本质。",
    "user": {
      "login": "sl1673495",
      "id": 23615778,
      "node_id": "MDQ6VXNlcjIzNjE1Nzc4",
      "avatar_url": "https://avatars1.githubusercontent.com/u/23615778?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/sl1673495",
      "html_url": "https://github.com/sl1673495",
      "followers_url": "https://api.github.com/users/sl1673495/followers",
      "following_url": "https://api.github.com/users/sl1673495/following{/other_user}",
      "gists_url": "https://api.github.com/users/sl1673495/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/sl1673495/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/sl1673495/subscriptions",
      "organizations_url": "https://api.github.com/users/sl1673495/orgs",
      "repos_url": "https://api.github.com/users/sl1673495/repos",
      "events_url": "https://api.github.com/users/sl1673495/events{/privacy}",
      "received_events_url": "https://api.github.com/users/sl1673495/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [{
      "id": 1525737631,
      "node_id": "MDU6TGFiZWwxNTI1NzM3NjMx",
      "url": "https://api.github.com/repos/sl1673495/blogs/labels/JavaScript",
      "name": "JavaScript",
      "color": "ed36a7",
      "default": false
    }],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [],
    "milestone": null,
    "comments": 0,
    "created_at": "2018-09-28T19:39:09Z",
    "updated_at": "2019-09-10T06:32:07Z",
    "closed_at": null,
    "author_association": "OWNER"
  },
  comments: [],
  html: "%3Cp%3E%E5%BC%82%E6%AD%A5%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6%E5%99%A8%E3%80%82%3C%2Fp%3E%0A%3Col%3E%0A%3Cli%3E%3Cp%3E%3Ca%20href%3D%22http%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2015%2F04%2Fgenerator.html%22%3E%20generator%E5%87%BD%E6%95%B0%E4%BB%8B%E7%BB%8D%3C%2Fa%3E%3C%2Fp%3E%0A%3C%2Fli%3E%0A%3Cli%3E%3Cp%3E%3Ca%20href%3D%22http%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2015%2F05%2Fthunk.html%22%3EThunk%20%E5%87%BD%E6%95%B0%E7%9A%84%E5%90%AB%E4%B9%89%E5%92%8C%E7%94%A8%E6%B3%95%3C%2Fa%3E%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%E6%AD%A3%E5%B8%B8%E7%89%88%E6%9C%AC%E7%9A%84readFile%EF%BC%88%E5%A4%9A%E5%8F%82%E6%95%B0%E7%89%88%E6%9C%AC%EF%BC%89%0Afs.readFile(fileName%2C%20callback)%3B%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3C%2Fli%3E%0A%3C%2Fol%3E%0A%3Cp%3EThunk%E7%89%88%E6%9C%AC%E7%9A%84readFile%EF%BC%88%E5%8D%95%E5%8F%82%E6%95%B0%E7%89%88%E6%9C%AC%EF%BC%89%3Cbr%3Evar%20readFileThunk%20%3D%20Thunk(fileName)%3B%3Cbr%3EreadFileThunk(callback)%3B%3C%2Fp%3E%0A%3Cp%3Evar%20Thunk%20%3D%20function%20(fileName)%7B%3Cbr%3E%20%20return%20function%20(callback)%7B%3Cbr%3E%20%20%20%20return%20fs.readFile(fileName%2C%20callback)%3B%3Cbr%3E%20%20%7D%3B%3Cbr%3E%7D%3B%3C%2Fp%3E%0A%3Cp%3E%60%60%60%3C%2Fp%3E%0A%3Cp%3EThunkify%20%E5%90%8E%E7%9A%84%E5%87%BD%E6%95%B0%E5%8F%AA%E6%8E%A5%E5%8F%97callback%E4%BD%9C%E4%B8%BA%E5%8D%95%E5%8F%82%E6%95%B0%EF%BC%8C%E4%B8%BA%E8%87%AA%E5%8A%A8%E6%89%A7%E8%A1%8C%E8%A7%84%E8%8C%83%E5%8C%96%E4%BA%86%E5%8F%82%E6%95%B0%EF%BC%8C%E5%81%9A%E4%BA%86%E9%93%BA%E5%9E%AB%E3%80%82%3C%2Fp%3E%0A%3Col%20start%3D%223%22%3E%0A%3Cli%3E%3Cp%3E%3Ca%20href%3D%22http%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2015%2F05%2Fco.html%22%3Eco%20%E5%87%BD%E6%95%B0%E5%BA%93%E7%9A%84%E5%90%AB%E4%B9%89%E5%92%8C%E7%94%A8%E6%B3%95%3C%2Fa%3E%3C%2Fp%3E%0A%3C%2Fli%3E%0A%3Cli%3E%3Cp%3E%3Ca%20href%3D%22http%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2015%2F05%2Fasync.html%22%3Easync%20%E5%87%BD%E6%95%B0%E7%9A%84%E5%90%AB%E4%B9%89%E5%92%8C%E7%94%A8%E6%B3%95%3C%2Fa%3E%3C%2Fp%3E%0A%3C%2Fli%3E%0A%3C%2Fol%3E%0A"
}));

/***/ })

})
//# sourceMappingURL=365015690.js.251d176135475dc1d30d.hot-update.js.map
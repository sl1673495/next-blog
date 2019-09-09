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




var HighLight = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
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

/***/ }),

/***/ "./node_modules/highlight.js/lib/highlight.js":
false,

/***/ "./node_modules/highlight.js/lib/index.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/1c.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/abnf.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/accesslog.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/actionscript.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/ada.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/angelscript.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/apache.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/applescript.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/arcade.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/arduino.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/armasm.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/asciidoc.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/aspectj.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/autohotkey.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/autoit.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/avrasm.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/awk.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/axapta.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/bash.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/basic.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/bnf.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/brainfuck.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/cal.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/capnproto.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/ceylon.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/clean.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/clojure-repl.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/clojure.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/cmake.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/coffeescript.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/coq.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/cos.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/cpp.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/crmsh.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/crystal.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/cs.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/csp.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/css.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/d.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/dart.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/delphi.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/diff.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/django.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/dns.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/dockerfile.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/dos.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/dsconfig.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/dts.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/dust.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/ebnf.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/elixir.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/elm.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/erb.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/erlang-repl.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/erlang.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/excel.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/fix.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/flix.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/fortran.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/fsharp.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/gams.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/gauss.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/gcode.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/gherkin.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/glsl.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/gml.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/go.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/golo.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/gradle.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/groovy.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/haml.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/handlebars.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/haskell.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/haxe.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/hsp.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/htmlbars.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/http.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/hy.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/inform7.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/ini.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/irpf90.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/isbl.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/java.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/javascript.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/jboss-cli.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/json.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/julia-repl.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/julia.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/kotlin.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/lasso.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/ldif.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/leaf.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/less.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/lisp.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/livecodeserver.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/livescript.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/llvm.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/lsl.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/lua.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/makefile.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/markdown.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/mathematica.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/matlab.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/maxima.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/mel.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/mercury.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/mipsasm.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/mizar.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/mojolicious.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/monkey.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/moonscript.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/n1ql.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/nginx.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/nimrod.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/nix.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/nsis.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/objectivec.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/ocaml.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/openscad.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/oxygene.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/parser3.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/perl.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/pf.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/pgsql.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/php.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/plaintext.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/pony.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/powershell.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/processing.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/profile.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/prolog.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/properties.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/protobuf.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/puppet.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/purebasic.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/python.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/q.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/qml.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/r.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/reasonml.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/rib.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/roboconf.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/routeros.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/rsl.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/ruby.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/ruleslanguage.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/rust.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/sas.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/scala.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/scheme.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/scilab.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/scss.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/shell.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/smali.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/smalltalk.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/sml.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/sqf.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/sql.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/stan.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/stata.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/step21.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/stylus.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/subunit.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/swift.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/taggerscript.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/tap.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/tcl.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/tex.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/thrift.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/tp.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/twig.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/typescript.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/vala.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/vbnet.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/vbscript-html.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/vbscript.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/verilog.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/vhdl.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/vim.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/x86asm.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/xl.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/xml.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/xquery.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/yaml.js":
false,

/***/ "./node_modules/highlight.js/lib/languages/zephir.js":
false,

/***/ "./node_modules/next-server/dist/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next-server/dist/lib/dynamic.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var loadable_1 = __importDefault(__webpack_require__(/*! ./loadable */ "./node_modules/next-server/dist/lib/loadable.js"));

var isServerSide = false;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is neccesary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  var Loading = loadableOptions.loading; // This will only be rendered on the server side

  return function () {
    return react_1["default"].createElement(Loading, {
      error: null,
      isLoading: true,
      pastDelay: false,
      timedOut: false
    });
  };
}

exports.noSSR = noSSR; // function dynamic<P = {}, O extends DynamicOptions>(options: O):

function dynamic(dynamicOptions, options) {
  var loadableFn = loadable_1["default"];
  var loadableOptions = {
    // A loading component is not required, so we default it
    loading: function loading(_ref) {
      var error = _ref.error,
          isLoading = _ref.isLoading,
          pastDelay = _ref.pastDelay;
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return react_1["default"].createElement("p", null, error.message, react_1["default"].createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof _Promise) {
    loadableOptions.loader = function () {
      return dynamicOptions;
    }; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _Object$assign({}, loadableOptions, dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _Object$assign({}, loadableOptions, options);

  if (typeof dynamicOptions === 'object' && !(dynamicOptions instanceof _Promise)) {
    // show deprecation warning for `modules` key in development
    if (true) {
      if (dynamicOptions.modules) {
        console.warn('The modules option for next/dynamic has been deprecated. See here for more info https://err.sh/zeit/next.js/next-dynamic-modules');
      }
    } // Support for `render` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


    if (dynamicOptions.render) {
      loadableOptions.render = function (loaded, props) {
        return dynamicOptions.render(props, loaded);
      };
    } // Support for `modules` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


    if (dynamicOptions.modules) {
      loadableFn = loadable_1["default"].Map;
      var loadModules = {};
      var modules = dynamicOptions.modules();

      _Object$keys(modules).forEach(function (key) {
        var value = modules[key];

        if (typeof value.then === 'function') {
          loadModules[key] = function () {
            return value.then(function (mod) {
              return mod["default"] || mod;
            });
          };

          return;
        }

        loadModules[key] = value;
      });

      loadableOptions.loader = loadModules;
    }
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _Object$assign({}, loadableOptions, loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

exports["default"] = dynamic;

/***/ }),

/***/ "./node_modules/next-server/dist/lib/loadable-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next-server/dist/lib/loadable-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js")); // @ts-ignore for some reason the React types don't like this, but it's correct.


exports.LoadableContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next-server/dist/lib/loadable.js":
/*!*******************************************************!*\
  !*** ./node_modules/next-server/dist/lib/loadable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/
// https://github.com/jamiebuilds/react-loadable/blob/v5.5.0/src/index.js
// Modified to be compatible with webpack 4 / Next.js

var _Array$isArray = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");

var _getIterator = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var loadable_context_1 = __webpack_require__(/*! ./loadable-context */ "./node_modules/next-server/dist/lib/loadable-context.js");

var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];
var initialized = false;

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  })["catch"](function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };
  var promises = [];

  try {
    _Object$keys(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);
      result.promise.then(function (res) {
        state.loaded[key] = res;
      })["catch"](function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = _Promise.all(promises).then(function (res) {
    state.loading = false;
    return res;
  })["catch"](function (err) {
    state.loading = false;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj["default"] : obj;
}

function render(loaded, props) {
  return react_1["default"].createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var _a;

  var opts = _Object$assign({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);

  var res = null;

  function init() {
    if (!res) {
      res = loadFn(opts.loader);
    }

    return res.promise;
  } // Server only


  if (false) {} // Client only


  if (!initialized && true && typeof opts.webpack === 'function') {
    var moduleIds = opts.webpack();
    READY_INITIALIZERS.push(function (ids) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _getIterator(moduleIds), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var moduleId = _step.value;

          if (ids.indexOf(moduleId) !== -1) {
            return init();
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });
  }

  return _a =
  /*#__PURE__*/
  function (_react_1$default$Comp) {
    _inherits(LoadableComponent, _react_1$default$Comp);

    function LoadableComponent(props) {
      var _this;

      _classCallCheck(this, LoadableComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(LoadableComponent).call(this, props));

      _this.retry = function () {
        _this.setState({
          error: null,
          loading: true,
          timedOut: false
        });

        res = loadFn(opts.loader);

        _this._loadModule();
      };

      init();
      _this.state = {
        error: res.error,
        pastDelay: false,
        timedOut: false,
        loading: res.loading,
        loaded: res.loaded
      };
      return _this;
    }

    _createClass(LoadableComponent, [{
      key: "UNSAFE_componentWillMount",
      // TODO: change it before next major React release
      // eslint-disable-next-line
      value: function UNSAFE_componentWillMount() {
        this._mounted = true;

        this._loadModule();
      }
    }, {
      key: "_loadModule",
      value: function _loadModule() {
        var _this2 = this;

        if (this.context && _Array$isArray(opts.modules)) {
          opts.modules.forEach(function (moduleName) {
            _this2.context(moduleName);
          });
        }

        if (!res.loading) {
          return;
        }

        if (typeof opts.delay === 'number') {
          if (opts.delay === 0) {
            this.setState({
              pastDelay: true
            });
          } else {
            this._delay = setTimeout(function () {
              _this2.setState({
                pastDelay: true
              });
            }, opts.delay);
          }
        }

        if (typeof opts.timeout === 'number') {
          this._timeout = setTimeout(function () {
            _this2.setState({
              timedOut: true
            });
          }, opts.timeout);
        }

        var update = function update() {
          if (!_this2._mounted) {
            return;
          }

          _this2.setState({
            error: res.error,
            loaded: res.loaded,
            loading: res.loading
          });

          _this2._clearTimeouts();
        };

        res.promise.then(function () {
          update();
        }) // eslint-disable-next-line handle-callback-err
        ["catch"](function (err) {
          update();
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this._mounted = false;

        this._clearTimeouts();
      }
    }, {
      key: "_clearTimeouts",
      value: function _clearTimeouts() {
        clearTimeout(this._delay);
        clearTimeout(this._timeout);
      }
    }, {
      key: "render",
      value: function render() {
        if (this.state.loading || this.state.error) {
          return react_1["default"].createElement(opts.loading, {
            isLoading: this.state.loading,
            pastDelay: this.state.pastDelay,
            timedOut: this.state.timedOut,
            error: this.state.error,
            retry: this.retry
          });
        } else if (this.state.loaded) {
          return opts.render(this.state.loaded, this.props);
        } else {
          return null;
        }
      }
    }], [{
      key: "preload",
      value: function preload() {
        return init();
      }
    }]);

    return LoadableComponent;
  }(react_1["default"].Component), _a.contextType = loadable_context_1.LoadableContext, _a;
}

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

function LoadableMap(opts) {
  if (typeof opts.render !== 'function') {
    throw new Error('LoadableMap requires a `render(loaded, props)` function');
  }

  return createLoadableComponent(loadMap, opts);
}

Loadable.Map = LoadableMap;

function flushInitializers(initializers, ids) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init(ids));
  }

  return _Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers, ids);
    }
  });
}

Loadable.preloadAll = function () {
  return new _Promise(function (resolve, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolve, reject);
  });
};

Loadable.preloadReady = function () {
  var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new _Promise(function (resolve) {
    var res = function res() {
      initialized = true;
      return resolve();
    }; // We always will resolve, errors should be handled within loading UIs.


    flushInitializers(READY_INITIALIZERS, ids).then(res, res);
  });
};

if (true) {
  window.__NEXT_PRELOADREADY = Loadable.preloadReady;
}

exports["default"] = Loadable;

/***/ }),

/***/ "./node_modules/react-highlight/index.js":
false,

/***/ "./node_modules/react-highlight/lib/index.js":
false

})
//# sourceMappingURL=383707716.js.9d5698b2c92b1fb549bb.hot-update.js.map
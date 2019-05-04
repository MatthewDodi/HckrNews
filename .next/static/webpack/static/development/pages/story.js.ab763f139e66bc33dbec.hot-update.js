webpackHotUpdate("static/development/pages/story.js",{

/***/ "./components/Comment.js":
/*!*******************************!*\
  !*** ./components/Comment.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CommentList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommentList */ "./components/CommentList.js");
var _jsxFileName = "/Users/matthew/Documents/All-Projects/HckrNews/components/Comment.js";



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var comment = _ref.comment;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2543101769",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2543101769" + " " + "date-author",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2543101769" + " " + "author link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, comment.user), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2543101769" + " " + "date link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, comment.time_ago)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: comment.content
    },
    className: "jsx-2543101769" + " " + "comment-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), comment.comments.length > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CommentList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    comments: comment.comments,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2543101769",
    __self: this
  }, ".date-author.jsx-2543101769{color:#828282;font-size:0.8em;font-weight:700;}.link.jsx-2543101769:hover{-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3L0RvY3VtZW50cy9BbGwtUHJvamVjdHMvSGNrck5ld3MvY29tcG9uZW50cy9Db21tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFnQixBQUd1QixBQU1ZLGNBTFYsZ0JBQ0EsZ0JBQ2xCLGNBSWlCLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9tYXR0aGV3L0RvY3VtZW50cy9BbGwtUHJvamVjdHMvSGNrck5ld3MvY29tcG9uZW50cy9Db21tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbW1lbnRMaXN0IGZyb20gJy4vQ29tbWVudExpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjb21tZW50IH0pID0+IChcbiAgPGxpPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1hdXRob3JcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvciBsaW5rXCI+e2NvbW1lbnQudXNlcn08L3NwYW4+eycgJ31cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRhdGUgbGlua1wiPntjb21tZW50LnRpbWVfYWdvfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJjb21tZW50LWNvbnRlbnRcIlxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjb21tZW50LmNvbnRlbnQgfX1cbiAgICAvPlxuICAgIHtjb21tZW50LmNvbW1lbnRzLmxlbmd0aCA+IDAgJiYgPENvbW1lbnRMaXN0IGNvbW1lbnRzPXtjb21tZW50LmNvbW1lbnRzfSAvPn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuZGF0ZS1hdXRob3Ige1xuICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIH1cblxuICAgICAgLmxpbms6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9saT5cbik7XG4iXX0= */\n/*@ sourceURL=/Users/matthew/Documents/All-Projects/HckrNews/components/Comment.js */"));
});

/***/ })

})
//# sourceMappingURL=story.js.ab763f139e66bc33dbec.hot-update.js.map
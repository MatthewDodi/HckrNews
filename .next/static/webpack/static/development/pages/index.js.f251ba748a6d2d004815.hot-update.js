webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/StoryList.js":
/*!*********************************!*\
  !*** ./components/StoryList.js ***!
  \*********************************/
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
var _jsxFileName = "/Users/matthew/Documents/All-Projects/HckrNews/components/StoryList.js";




var StoryList = function StoryList(_ref) {
  var stories = _ref.stories;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3248028268" + " " + "story-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, stories.map(function (story) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: story.id,
      className: "jsx-3248028268" + " " + "story",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-3248028268" + " " + "story-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: story.url,
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, story.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3248028268" + " " + "story-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, story.points || 0, " points"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3248028268" + " " + "comment-icon-count",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
      version: "1.1",
      id: "Capa_1",
      x: "0px",
      y: "0px",
      viewBox: "0 0 60 60",
      className: "jsx-3248028268" + " " + "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
      d: "M30,1.5c-16.542,0-30,12.112-30,27c0,5.204,1.646,10.245,4.768,14.604c-0.591,6.537-2.175,11.39-4.475,13.689 c-0.304,0.304-0.38,0.769-0.188,1.153C0.275,58.289,0.625,58.5,1,58.5c0.046,0,0.092-0.003,0.139-0.01 c0.405-0.057,9.813-1.411,16.618-5.339C21.621,54.71,25.737,55.5,30,55.5c16.542,0,30-12.112,30-27S46.542,1.5,30,1.5z M16,32.5 c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S18.206,32.5,16,32.5z M30,32.5c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4 S32.206,32.5,30,32.5z M44,32.5c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S46.206,32.5,44,32.5z",
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/story?id=".concat(story.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, story.comments_count || 0, " comments")))));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3248028268",
    __self: this
  }, ".story-list.jsx-3248028268{padding:0.2rem 0;background:#f70;}.story.jsx-3248028268{padding:1.8rem 3rem;-webkit-transition:all 0.3s;transition:all 0.3s;background:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.story.jsx-3248028268:hover{background:#ffefe6;}.story-title.jsx-3248028268{font-size:1rem;font-weight:400;margin:0;margin-bottom:0.5em;}.story-title.jsx-3248028268 a.jsx-3248028268{color:#444;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-3248028268 a.jsx-3248028268:hover,.story-details.jsx-3248028268 a.jsx-3248028268:hover{color:#111;}.story-details.jsx-3248028268{font-size:0.8rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.story-details.jsx-3248028268 span.jsx-3248028268{color:#f70;margin-bottom:0.5rem;}.story-details.jsx-3248028268 a.jsx-3248028268{font-weight:lighter;color:#7b8794;-webkit-text-decoration:none;text-decoration:none;font-size:0.8rem;}.icon.jsx-3248028268{height:12px;fill:#f70;margin-right:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3L0RvY3VtZW50cy9BbGwtUHJvamVjdHMvSGNrck5ld3MvY29tcG9uZW50cy9TdG9yeUxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RPLEFBRzRCLEFBS0csQUFTRCxBQUlKLEFBT0osQUFNQSxBQUlNLEFBTU4sQUFLUyxBQU9SLFdBM0JTLEFBTXZCLEFBVXVCLENBWVgsR0FuQ00sRUFsQkEsQUFtQ0gsRUFyQmYsQ0FUc0IsQUF5Q04sRUFRRyxTQW5DUixDQXVCWCxDQXpDQSxDQThDdUIsS0FRdkIsQ0FuQ3NCLG9CQUN0QixDQUtBLE9BcEJtQixnQkEwQ0EsQ0F6Q0osTUE2QlMsVUFheEIsMERBekNnQyxVQTZCaEMseUdBNUJxQiw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL21hdHRoZXcvRG9jdW1lbnRzL0FsbC1Qcm9qZWN0cy9IY2tyTmV3cy9jb21wb25lbnRzL1N0b3J5TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IFN0b3J5TGlzdCA9ICh7IHN0b3JpZXMgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5LWxpc3RcIj5cbiAgICB7c3Rvcmllcy5tYXAoc3RvcnkgPT4gKFxuICAgICAgPGRpdiBrZXk9e3N0b3J5LmlkfSBjbGFzc05hbWU9XCJzdG9yeVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3RvcnktdGl0bGVcIj5cbiAgICAgICAgICA8YSBocmVmPXtzdG9yeS51cmx9PntzdG9yeS50aXRsZX08L2E+XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnktZGV0YWlsc1wiPlxuICAgICAgICAgIDxzcGFuPntzdG9yeS5wb2ludHMgfHwgMH0gcG9pbnRzPC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudC1pY29uLWNvdW50XCI+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25cIlxuICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICAgICAgaWQ9XCJDYXBhXzFcIlxuICAgICAgICAgICAgICB4PVwiMHB4XCJcbiAgICAgICAgICAgICAgeT1cIjBweFwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjAgNjBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMzAsMS41Yy0xNi41NDIsMC0zMCwxMi4xMTItMzAsMjdjMCw1LjIwNCwxLjY0NiwxMC4yNDUsNC43NjgsMTQuNjA0Yy0wLjU5MSw2LjUzNy0yLjE3NSwxMS4zOS00LjQ3NSwxMy42ODlcblx0Yy0wLjMwNCwwLjMwNC0wLjM4LDAuNzY5LTAuMTg4LDEuMTUzQzAuMjc1LDU4LjI4OSwwLjYyNSw1OC41LDEsNTguNWMwLjA0NiwwLDAuMDkyLTAuMDAzLDAuMTM5LTAuMDFcblx0YzAuNDA1LTAuMDU3LDkuODEzLTEuNDExLDE2LjYxOC01LjMzOUMyMS42MjEsNTQuNzEsMjUuNzM3LDU1LjUsMzAsNTUuNWMxNi41NDIsMCwzMC0xMi4xMTIsMzAtMjdTNDYuNTQyLDEuNSwzMCwxLjV6IE0xNiwzMi41XG5cdGMtMi4yMDYsMC00LTEuNzk0LTQtNHMxLjc5NC00LDQtNHM0LDEuNzk0LDQsNFMxOC4yMDYsMzIuNSwxNiwzMi41eiBNMzAsMzIuNWMtMi4yMDYsMC00LTEuNzk0LTQtNHMxLjc5NC00LDQtNHM0LDEuNzk0LDQsNFxuXHRTMzIuMjA2LDMyLjUsMzAsMzIuNXogTTQ0LDMyLjVjLTIuMjA2LDAtNC0xLjc5NC00LTRzMS43OTQtNCw0LTRzNCwxLjc5NCw0LDRTNDYuMjA2LDMyLjUsNDQsMzIuNXpcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgPC9zdmc+XG5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc3Rvcnk/aWQ9JHtzdG9yeS5pZH1gfT5cbiAgICAgICAgICAgICAgPGE+e3N0b3J5LmNvbW1lbnRzX2NvdW50IHx8IDB9IGNvbW1lbnRzPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICkpfVxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAuc3RvcnktbGlzdCB7XG4gICAgICAgICAgcGFkZGluZzogMC4ycmVtIDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y3MDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeSB7XG4gICAgICAgICAgcGFkZGluZzogMS44cmVtIDNyZW07XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZWZlNjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeS10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0b3J5LXRpdGxlIGEge1xuICAgICAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeS10aXRsZSBhOmhvdmVyLFxuICAgICAgICAuc3RvcnktZGV0YWlscyBhOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogIzExMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeS1kZXRhaWxzIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICAuc3RvcnktZGV0YWlscyBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogI2Y3MDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc3RvcnktZGV0YWlscyBhIHtcbiAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAgICAgICBjb2xvcjogIzdiODc5NDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgIGZpbGw6ICNmNzA7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yeUxpc3Q7XG4iXX0= */\n/*@ sourceURL=/Users/matthew/Documents/All-Projects/HckrNews/components/StoryList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryList);

/***/ })

})
//# sourceMappingURL=index.js.f251ba748a6d2d004815.hot-update.js.map
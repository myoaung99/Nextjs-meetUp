"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[meetupId]",{

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\nvar _this = undefined;\n\n\n\n\nvar MeetUpDetail = function(props) {\n    var meetup = props.meetup;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: meetup.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\myomy\\\\Documents\\\\react\\\\nextjs-meetUp\\\\pages\\\\[meetupId]\\\\index.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: meetup.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\myomy\\\\Documents\\\\react\\\\nextjs-meetUp\\\\pages\\\\[meetupId]\\\\index.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\myomy\\\\Documents\\\\react\\\\nextjs-meetUp\\\\pages\\\\[meetupId]\\\\index.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                image: meetup.image,\n                title: meetup.title,\n                address: meetup.address,\n                description: meetup.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\myomy\\\\Documents\\\\react\\\\nextjs-meetUp\\\\pages\\\\[meetupId]\\\\index.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = MeetUpDetail;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetUpDetail);\nvar _c;\n$RefreshReg$(_c, \"MeetUpDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ0c7QUFDb0M7QUFPakUsSUFBTUcsWUFBWSxHQUFHLFNBQUNDLEtBQUssRUFBSztJQUM5QixJQUFNLE1BQVEsR0FBS0EsS0FBSyxDQUFoQkMsTUFBTTtJQUNkLHFCQUNFOzswQkFDRSw4REFBQ0osa0RBQUk7O2tDQUNILDhEQUFDSyxPQUFLO2tDQUFFRCxNQUFNLENBQUNDLEtBQUs7Ozs7OzZCQUFTO2tDQUM3Qiw4REFBQ0MsTUFBSTt3QkFBQ0MsSUFBSSxFQUFDLGFBQWE7d0JBQUNDLE9BQU8sRUFBRUosTUFBTSxDQUFDSyxXQUFXOzs7Ozs2QkFBSTs7Ozs7O3FCQUNuRDswQkFFUCw4REFBQ1Isd0VBQVk7Z0JBQ1hTLEtBQUssRUFBRU4sTUFBTSxDQUFDTSxLQUFLO2dCQUNuQkwsS0FBSyxFQUFFRCxNQUFNLENBQUNDLEtBQUs7Z0JBQ25CTSxPQUFPLEVBQUVQLE1BQU0sQ0FBQ08sT0FBTztnQkFDdkJGLFdBQVcsRUFBRUwsTUFBTSxDQUFDSyxXQUFXOzs7OztxQkFDL0I7O29CQUNELENBQ0g7Q0FDSDtBQWpCS1AsS0FBQUEsWUFBWTs7QUFxRGxCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcz84ZmYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTWVldHVwRGV0YWlsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0QWxsRG9jdW1lbnQsXHJcbiAgZ2V0U2VsZWN0ZWRNZWV0VXAsXHJcbiAgY29ubmVjdERhdGFCYXNlLFxyXG59IGZyb20gXCIuLi8uLi9oZWxwZXIvYXBpLXV0aWxcIjtcclxuXHJcbmNvbnN0IE1lZXRVcERldGFpbCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbWVldHVwIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnttZWV0dXAudGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXttZWV0dXAuZGVzY3JpcHRpb259IC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxNZWV0dXBEZXRhaWxcclxuICAgICAgICBpbWFnZT17bWVldHVwLmltYWdlfVxyXG4gICAgICAgIHRpdGxlPXttZWV0dXAudGl0bGV9XHJcbiAgICAgICAgYWRkcmVzcz17bWVldHVwLmFkZHJlc3N9XHJcbiAgICAgICAgZGVzY3JpcHRpb249e21lZXR1cC5kZXNjcmlwdGlvbn1cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdERhdGFCYXNlKCk7XHJcbiAgY29uc3QgYWxsTWVldFVwcyA9IGF3YWl0IGdldEFsbERvY3VtZW50KGNsaWVudCk7XHJcblxyXG4gIGNvbnN0IHBhdGhzID0gYWxsTWVldFVwcy5tYXAoKG1lZXR1cCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgbWVldHVwSWQ6IG1lZXR1cC5pZCxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIGNsaWVudC5jbG9zZSgpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgcGF0aHMsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBtZWV0dXBJZCB9ID0gY29udGV4dC5wYXJhbXM7XHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdERhdGFCYXNlKCk7XHJcbiAgY29uc3QgbWVldHVwID0gYXdhaXQgZ2V0U2VsZWN0ZWRNZWV0VXAoY2xpZW50LCBtZWV0dXBJZCk7XHJcblxyXG4gIGNsaWVudC5jbG9zZSgpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldFVwRGV0YWlsO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiTWVldHVwRGV0YWlsIiwiTWVldFVwRGV0YWlsIiwicHJvcHMiLCJtZWV0dXAiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJhZGRyZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar DUMMY_MEETUP = [\n    {\n        id: \"m1\",\n        title: \"First meet up\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg/1920px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg\",\n        address: \"Some street 33, xxx City\",\n        description: \"This is first meet up\"\n    },\n    {\n        id: \"m2\",\n        title: \"Second meet up\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg/1920px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg\",\n        address: \"Some street 13, xxx City\",\n        description: \"This is second meet up\"\n    }, \n];\nvar HomePage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), loadedMeetup = ref[0], setLoadedMeetup = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // fetch data from sever\n        setLoadedMeetup(DUMMY_MEETUP);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            meetups: loadedMeetup\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\myomy\\\\Documents\\\\react\\\\nextjs-meetUp\\\\pages\\\\index.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(HomePage, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBMEI7QUFDa0I7QUFDYzs7QUFFMUQsSUFBTUksWUFBWSxHQUFHO0lBQ25CO1FBQ0VDLEVBQUUsRUFBRSxJQUFJO1FBQ1JDLEtBQUssRUFBRSxlQUFlO1FBQ3RCQyxLQUFLLEVBQ0gsa09BQWtPO1FBQ3BPQyxPQUFPLEVBQUUsMEJBQTBCO1FBQ25DQyxXQUFXLEVBQUUsdUJBQXVCO0tBQ3JDO0lBQ0Q7UUFDRUosRUFBRSxFQUFFLElBQUk7UUFDUkMsS0FBSyxFQUFFLGdCQUFnQjtRQUN2QkMsS0FBSyxFQUNILGtPQUFrTztRQUNwT0MsT0FBTyxFQUFFLDBCQUEwQjtRQUNuQ0MsV0FBVyxFQUFFLHdCQUF3QjtLQUN0QztDQUNGO0FBRUQsSUFBTUMsUUFBUSxHQUFHLFdBQU07O0lBQ3JCLElBQXdDUixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBeEJ0RCxZQXdCcUIsR0FBcUJBLEdBQVksR0FBakMsRUF4QnJCLGVBd0JzQyxHQUFJQSxHQUFZLEdBQWhCO0lBRXBDRCxnREFBUyxDQUFDLFdBQU07UUFDZCx3QkFBd0I7UUFDeEJXLGVBQWUsQ0FBQ1IsWUFBWSxDQUFDLENBQUM7S0FDL0IsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNQLHFCQUNFO2tCQUNFLDRFQUFDRCxzRUFBVTtZQUFDVSxPQUFPLEVBQUVGLFlBQVk7Ozs7O2lCQUFJO3FCQUNwQyxDQUNIO0NBQ0g7R0FaS0QsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBY2QsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3RcIjtcclxuXHJcbmNvbnN0IERVTU1ZX01FRVRVUCA9IFtcclxuICB7XHJcbiAgICBpZDogXCJtMVwiLFxyXG4gICAgdGl0bGU6IFwiRmlyc3QgbWVldCB1cFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9lL2U0L1BhbGFjZV9vZl9XZXN0bWluc3Rlcl9mcm9tX3RoZV9kb21lX29uX01ldGhvZGlzdF9DZW50cmFsX0hhbGxfJTI4Y3JvcHBlZCUyOS5qcGcvMTkyMHB4LVBhbGFjZV9vZl9XZXN0bWluc3Rlcl9mcm9tX3RoZV9kb21lX29uX01ldGhvZGlzdF9DZW50cmFsX0hhbGxfJTI4Y3JvcHBlZCUyOS5qcGdcIixcclxuICAgIGFkZHJlc3M6IFwiU29tZSBzdHJlZXQgMzMsIHh4eCBDaXR5XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGZpcnN0IG1lZXQgdXBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIm0yXCIsXHJcbiAgICB0aXRsZTogXCJTZWNvbmQgbWVldCB1cFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9lL2U0L1BhbGFjZV9vZl9XZXN0bWluc3Rlcl9mcm9tX3RoZV9kb21lX29uX01ldGhvZGlzdF9DZW50cmFsX0hhbGxfJTI4Y3JvcHBlZCUyOS5qcGcvMTkyMHB4LVBhbGFjZV9vZl9XZXN0bWluc3Rlcl9mcm9tX3RoZV9kb21lX29uX01ldGhvZGlzdF9DZW50cmFsX0hhbGxfJTI4Y3JvcHBlZCUyOS5qcGdcIixcclxuICAgIGFkZHJlc3M6IFwiU29tZSBzdHJlZXQgMTMsIHh4eCBDaXR5XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIHNlY29uZCBtZWV0IHVwXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtsb2FkZWRNZWV0dXAsIHNldExvYWRlZE1lZXR1cF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBmZXRjaCBkYXRhIGZyb20gc2V2ZXJcclxuICAgIHNldExvYWRlZE1lZXR1cChEVU1NWV9NRUVUVVApO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17bG9hZGVkTWVldHVwfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1lZXR1cExpc3QiLCJEVU1NWV9NRUVUVVAiLCJpZCIsInRpdGxlIiwiaW1hZ2UiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJIb21lUGFnZSIsImxvYWRlZE1lZXR1cCIsInNldExvYWRlZE1lZXR1cCIsIm1lZXR1cHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});
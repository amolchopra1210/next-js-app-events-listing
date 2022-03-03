webpackHotUpdate_N_E("pages/events/[...slug]",{

/***/ "./pages/events/[...slug].js":
/*!***********************************!*\
  !*** ./pages/events/[...slug].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FilteredEventsPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dummy-data */ \"./dummy-data.js\");\n\n\nvar _jsxFileName = \"/Users/amolchopra/Desktop/Projects/next-app/nextjs-course-code-01-getting-started/pages/events/[...slug].js\",\n    _s = $RefreshSig$();\n\n\n\nfunction FilteredEventsPage() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var filterData = router.query.slug;\n\n  if (!filterData) {\n    /*#__PURE__*/\n    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"center\",\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }, this);\n  }\n\n  var filteredYear = filterData[0];\n  var filteredMonth = filterData[1];\n  var numYear = +filteredYear;\n  var numMonth = +filteredMonth;\n\n  if (isNaN(numMonth) || isNaN(numYear) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"center\",\n      children: \"Invalid filter. Please try again\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 12\n    }, this);\n  }\n\n  var filteredEvents = Object(_dummy_data__WEBPACK_IMPORTED_MODULE_2__[\"getFilteredEvents\"])({\n    year: numYear,\n    month: numMonth\n  });\n  if (!filteredEvents || fi) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: filteredEvents\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 10\n  }, this);\n}\n\n_s(FilteredEventsPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = FilteredEventsPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"FilteredEventsPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qcz85ZGRmIl0sIm5hbWVzIjpbIkZpbHRlcmVkRXZlbnRzUGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsImZpbHRlckRhdGEiLCJxdWVyeSIsInNsdWciLCJmaWx0ZXJlZFllYXIiLCJmaWx0ZXJlZE1vbnRoIiwibnVtWWVhciIsIm51bU1vbnRoIiwiaXNOYU4iLCJmaWx0ZXJlZEV2ZW50cyIsImdldEZpbHRlcmVkRXZlbnRzIiwieWVhciIsIm1vbnRoIiwiZmkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxrQkFBVCxHQUE4QjtBQUFBOztBQUMzQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHRixNQUFNLENBQUNHLEtBQVAsQ0FBYUMsSUFBaEM7O0FBQ0EsTUFBSSxDQUFDRixVQUFMLEVBQWlCO0FBQ2Y7QUFBQTtBQUFHLGVBQVMsRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0Q7O0FBQ0QsTUFBTUcsWUFBWSxHQUFHSCxVQUFVLENBQUMsQ0FBRCxDQUEvQjtBQUNBLE1BQU1JLGFBQWEsR0FBR0osVUFBVSxDQUFDLENBQUQsQ0FBaEM7QUFDQSxNQUFNSyxPQUFPLEdBQUcsQ0FBQ0YsWUFBakI7QUFDQSxNQUFNRyxRQUFRLEdBQUcsQ0FBQ0YsYUFBbEI7O0FBQ0EsTUFDRUcsS0FBSyxDQUFDRCxRQUFELENBQUwsSUFDQUMsS0FBSyxDQUFDRixPQUFELENBREwsSUFFQUEsT0FBTyxHQUFHLElBRlYsSUFHQUEsT0FBTyxHQUFHLElBSFYsSUFJQUMsUUFBUSxHQUFHLENBSlgsSUFLQUEsUUFBUSxHQUFHLEVBTmIsRUFPRTtBQUNBLHdCQUFPO0FBQUcsZUFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUNELE1BQU1FLGNBQWMsR0FBR0MscUVBQWlCLENBQUM7QUFDdkNDLFFBQUksRUFBRUwsT0FEaUM7QUFFdkNNLFNBQUssRUFBRUw7QUFGZ0MsR0FBRCxDQUF4QztBQUlBLE1BQUcsQ0FBQ0UsY0FBRCxJQUFtQkksRUFBdEIsRUFDQSxvQkFBTztBQUFBLGNBQU1KO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0dBMUJ1Qlgsa0I7VUFDUEUscUQ7OztLQURPRixrQiIsImZpbGUiOiIuL3BhZ2VzL2V2ZW50cy9bLi4uc2x1Z10uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGdldEZpbHRlcmVkRXZlbnRzIH0gZnJvbSBcIi4uLy4uL2R1bW15LWRhdGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlsdGVyZWRFdmVudHNQYWdlKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgZmlsdGVyRGF0YSA9IHJvdXRlci5xdWVyeS5zbHVnO1xuICBpZiAoIWZpbHRlckRhdGEpIHtcbiAgICA8cCBjbGFzc05hbWU9XCJjZW50ZXJcIj5Mb2FkaW5nLi4uPC9wPjtcbiAgfVxuICBjb25zdCBmaWx0ZXJlZFllYXIgPSBmaWx0ZXJEYXRhWzBdO1xuICBjb25zdCBmaWx0ZXJlZE1vbnRoID0gZmlsdGVyRGF0YVsxXTtcbiAgY29uc3QgbnVtWWVhciA9ICtmaWx0ZXJlZFllYXI7XG4gIGNvbnN0IG51bU1vbnRoID0gK2ZpbHRlcmVkTW9udGg7XG4gIGlmIChcbiAgICBpc05hTihudW1Nb250aCkgfHxcbiAgICBpc05hTihudW1ZZWFyKSB8fFxuICAgIG51bVllYXIgPiAyMDMwIHx8XG4gICAgbnVtWWVhciA8IDIwMjEgfHxcbiAgICBudW1Nb250aCA8IDEgfHxcbiAgICBudW1Nb250aCA+IDEyXG4gICkge1xuICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJjZW50ZXJcIj5JbnZhbGlkIGZpbHRlci4gUGxlYXNlIHRyeSBhZ2FpbjwvcD47XG4gIH1cbiAgY29uc3QgZmlsdGVyZWRFdmVudHMgPSBnZXRGaWx0ZXJlZEV2ZW50cyh7XG4gICAgeWVhcjogbnVtWWVhcixcbiAgICBtb250aDogbnVtTW9udGgsXG4gIH0pO1xuICBpZighZmlsdGVyZWRFdmVudHMgfHwgZmkpXG4gIHJldHVybiA8ZGl2PntmaWx0ZXJlZEV2ZW50c308L2Rpdj47XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/events/[...slug].js\n");

/***/ })

})
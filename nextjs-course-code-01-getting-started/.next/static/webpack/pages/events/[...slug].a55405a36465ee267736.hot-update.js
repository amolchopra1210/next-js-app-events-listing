webpackHotUpdate_N_E("pages/events/[...slug]",{

/***/ "./pages/events/[...slug].js":
/*!***********************************!*\
  !*** ./pages/events/[...slug].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FilteredEventsPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_amolchopra_Desktop_Projects_next_app_nextjs_course_code_01_getting_started_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/events/event-list */ \"./components/events/event-list.js\");\n/* harmony import */ var _helpers_api_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/api-utils */ \"./helpers/api-utils.js\");\n\n\n\nvar _jsxFileName = \"/Users/amolchopra/Desktop/Projects/next-app/nextjs-course-code-01-getting-started/pages/events/[...slug].js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_amolchopra_Desktop_Projects_next_app_nextjs_course_code_01_getting_started_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction FilteredEventsPage(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      loadedEvents = _useState[0],\n      setLoadedEvents = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var filterData = router.query.slug;\n  var result = fetch(\"https://nextjs-event-app-dda49-default-rtdb.firebaseio.com/events.json\");\n  var data = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    console.log(data);\n\n    if (data) {\n      var events = [];\n\n      for (var key in data) {\n        events.push(_objectSpread({\n          id: key\n        }, data[key]));\n      }\n\n      setLoadedEvents(events);\n    }\n  }, [data]);\n\n  if (!loadedEvents) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"center\",\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 12\n    }, this);\n  }\n\n  if (isNaN(numMonth) || isNaN(numYear) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12 || error) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"center\",\n      children: \"Invalid filter. Please try again\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 12\n    }, this);\n  }\n\n  var filteredYear = filterData[0];\n  var filteredMonth = filterData[1];\n  var numYear = +filteredYear;\n  var numMonth = +filteredMonth;\n  var filteredEvents = loadedEvents.filter(function (event) {\n    var eventDate = new Date(event.date);\n    return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;\n  }); // const filteredEvents = props.events;\n\n  if (!filteredEvents || filteredEvents.length === 0) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"center\",\n      children: \"No events found for this filter\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 12\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_events_event_list__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      items: filteredEvents\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 61,\n    columnNumber: 5\n  }, this);\n} // export async function getServerSideProps(context) {\n//   const { params } = context;\n//   const filterData = params.slug;\n//   const filteredYear = filterData[0];\n//   const filteredMonth = filterData[1];\n//   const numYear = +filteredYear;\n//   const numMonth = +filteredMonth;\n//   if (\n//     isNaN(numMonth) ||\n//     isNaN(numYear) ||\n//     numYear > 2030 ||\n//     numYear < 2021 ||\n//     numMonth < 1 ||\n//     numMonth > 12\n//   ) {\n//     return {\n//       props: {\n//         hasError: true,\n//       },\n//       //notFound: true,\n//       //redirect: {\n//       // destination: '/error'\n//     };\n//   }\n//   const filteredEvents = await getFilteredEvents({\n//     year: numYear,\n//     month: numMonth,\n//   });\n//   return {\n//     props: {\n//       events: filteredEvents,\n//       date: {\n//         year: numYear,\n//         month: numMonth,\n//       },\n//     },\n//   };\n// }\n\n_s(FilteredEventsPage, \"tFrIq6PROT1SQOf1Tv/j/jQt4EQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = FilteredEventsPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"FilteredEventsPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qcz85ZGRmIl0sIm5hbWVzIjpbIkZpbHRlcmVkRXZlbnRzUGFnZSIsInByb3BzIiwidXNlU3RhdGUiLCJsb2FkZWRFdmVudHMiLCJzZXRMb2FkZWRFdmVudHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJmaWx0ZXJEYXRhIiwicXVlcnkiLCJzbHVnIiwicmVzdWx0IiwiZmV0Y2giLCJkYXRhIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImV2ZW50cyIsImtleSIsInB1c2giLCJpZCIsImlzTmFOIiwibnVtTW9udGgiLCJudW1ZZWFyIiwiZXJyb3IiLCJmaWx0ZXJlZFllYXIiLCJmaWx0ZXJlZE1vbnRoIiwiZmlsdGVyZWRFdmVudHMiLCJmaWx0ZXIiLCJldmVudCIsImV2ZW50RGF0ZSIsIkRhdGUiLCJkYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUM7QUFBQTs7QUFBQSxrQkFDUkMsc0RBQVEsRUFEQTtBQUFBLE1BQ3pDQyxZQUR5QztBQUFBLE1BQzNCQyxlQUQyQjs7QUFFaEQsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFVBQVUsR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFDLElBQWhDO0FBQ0EsTUFBTUMsTUFBTSxHQUFJQyxLQUFLLENBQUMsd0VBQUQsQ0FBckI7QUFDQSxNQUFNQyxJQUFJLEdBQ1ZDLHVEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWjs7QUFDQSxRQUFJQSxJQUFKLEVBQVU7QUFDUixVQUFNSSxNQUFNLEdBQUcsRUFBZjs7QUFDQSxXQUFLLElBQU1DLEdBQVgsSUFBa0JMLElBQWxCLEVBQXdCO0FBQ3RCSSxjQUFNLENBQUNFLElBQVA7QUFDRUMsWUFBRSxFQUFFRjtBQUROLFdBRUtMLElBQUksQ0FBQ0ssR0FBRCxDQUZUO0FBSUQ7O0FBQ0RiLHFCQUFlLENBQUNZLE1BQUQsQ0FBZjtBQUNEO0FBQ0YsR0FaUSxFQVlOLENBQUNKLElBQUQsQ0FaTSxDQURUOztBQWNBLE1BQUksQ0FBQ1QsWUFBTCxFQUFtQjtBQUNqQix3QkFBTztBQUFHLGVBQVMsRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFFRCxNQUNFaUIsS0FBSyxDQUFDQyxRQUFELENBQUwsSUFDQUQsS0FBSyxDQUFDRSxPQUFELENBREwsSUFFQUEsT0FBTyxHQUFHLElBRlYsSUFHQUEsT0FBTyxHQUFHLElBSFYsSUFJQUQsUUFBUSxHQUFHLENBSlgsSUFLQUEsUUFBUSxHQUFHLEVBTFgsSUFNQUUsS0FQRixFQVFFO0FBQ0Esd0JBQU87QUFBRyxlQUFTLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBRUQsTUFBTUMsWUFBWSxHQUFHakIsVUFBVSxDQUFDLENBQUQsQ0FBL0I7QUFDQSxNQUFNa0IsYUFBYSxHQUFHbEIsVUFBVSxDQUFDLENBQUQsQ0FBaEM7QUFDQSxNQUFNZSxPQUFPLEdBQUcsQ0FBQ0UsWUFBakI7QUFDQSxNQUFNSCxRQUFRLEdBQUcsQ0FBQ0ksYUFBbEI7QUFFQSxNQUFNQyxjQUFjLEdBQUd2QixZQUFZLENBQUN3QixNQUFiLENBQW9CLFVBQUNDLEtBQUQsRUFBVztBQUNwRCxRQUFNQyxTQUFTLEdBQUcsSUFBSUMsSUFBSixDQUFTRixLQUFLLENBQUNHLElBQWYsQ0FBbEI7QUFDQSxXQUNFRixTQUFTLENBQUNHLFdBQVYsT0FBNEJWLE9BQTVCLElBQ0FPLFNBQVMsQ0FBQ0ksUUFBVixPQUF5QlosUUFBUSxHQUFHLENBRnRDO0FBSUQsR0FOc0IsQ0FBdkIsQ0F4Q2dELENBZ0RoRDs7QUFFQSxNQUFJLENBQUNLLGNBQUQsSUFBbUJBLGNBQWMsQ0FBQ1EsTUFBZixLQUEwQixDQUFqRCxFQUFvRDtBQUNsRCx3QkFBTztBQUFHLGVBQVMsRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFDRCxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLHFFQUFEO0FBQVcsV0FBSyxFQUFFUjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBakd3QjFCLGtCO1VBRVBNLHFEOzs7S0FGT04sa0IiLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvWy4uLnNsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCBFdmVudExpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50LWxpc3RcIjtcbmltcG9ydCB7IGdldEZpbHRlcmVkRXZlbnRzIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvYXBpLXV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbHRlcmVkRXZlbnRzUGFnZShwcm9wcykge1xuICBjb25zdCBbbG9hZGVkRXZlbnRzLCBzZXRMb2FkZWRFdmVudHNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGZpbHRlckRhdGEgPSByb3V0ZXIucXVlcnkuc2x1ZztcbiAgY29uc3QgcmVzdWx0ID0gIGZldGNoKFwiaHR0cHM6Ly9uZXh0anMtZXZlbnQtYXBwLWRkYTQ5LWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9ldmVudHMuanNvblwiKTtcbiAgY29uc3QgZGF0YSA9IFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBjb25zdCBldmVudHMgPSBbXTtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgICAgZXZlbnRzLnB1c2goe1xuICAgICAgICAgIGlkOiBrZXksXG4gICAgICAgICAgLi4uZGF0YVtrZXldLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHNldExvYWRlZEV2ZW50cyhldmVudHMpO1xuICAgIH1cbiAgfSwgW2RhdGFdKTtcbiAgaWYgKCFsb2FkZWRFdmVudHMpIHtcbiAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwiY2VudGVyXCI+TG9hZGluZy4uLjwvcD47XG4gIH1cblxuICBpZiAoXG4gICAgaXNOYU4obnVtTW9udGgpIHx8XG4gICAgaXNOYU4obnVtWWVhcikgfHxcbiAgICBudW1ZZWFyID4gMjAzMCB8fFxuICAgIG51bVllYXIgPCAyMDIxIHx8XG4gICAgbnVtTW9udGggPCAxIHx8XG4gICAgbnVtTW9udGggPiAxMiB8fFxuICAgIGVycm9yXG4gICkge1xuICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJjZW50ZXJcIj5JbnZhbGlkIGZpbHRlci4gUGxlYXNlIHRyeSBhZ2FpbjwvcD47XG4gIH1cblxuICBjb25zdCBmaWx0ZXJlZFllYXIgPSBmaWx0ZXJEYXRhWzBdO1xuICBjb25zdCBmaWx0ZXJlZE1vbnRoID0gZmlsdGVyRGF0YVsxXTtcbiAgY29uc3QgbnVtWWVhciA9ICtmaWx0ZXJlZFllYXI7XG4gIGNvbnN0IG51bU1vbnRoID0gK2ZpbHRlcmVkTW9udGg7XG5cbiAgY29uc3QgZmlsdGVyZWRFdmVudHMgPSBsb2FkZWRFdmVudHMuZmlsdGVyKChldmVudCkgPT4ge1xuICAgIGNvbnN0IGV2ZW50RGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmRhdGUpO1xuICAgIHJldHVybiAoXG4gICAgICBldmVudERhdGUuZ2V0RnVsbFllYXIoKSA9PT0gbnVtWWVhciAmJlxuICAgICAgZXZlbnREYXRlLmdldE1vbnRoKCkgPT09IG51bU1vbnRoIC0gMVxuICAgICk7XG4gIH0pO1xuXG4gIC8vIGNvbnN0IGZpbHRlcmVkRXZlbnRzID0gcHJvcHMuZXZlbnRzO1xuXG4gIGlmICghZmlsdGVyZWRFdmVudHMgfHwgZmlsdGVyZWRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cImNlbnRlclwiPk5vIGV2ZW50cyBmb3VuZCBmb3IgdGhpcyBmaWx0ZXI8L3A+O1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxFdmVudExpc3QgaXRlbXM9e2ZpbHRlcmVkRXZlbnRzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbi8vICAgY29uc3QgeyBwYXJhbXMgfSA9IGNvbnRleHQ7XG4vLyAgIGNvbnN0IGZpbHRlckRhdGEgPSBwYXJhbXMuc2x1Zztcbi8vICAgY29uc3QgZmlsdGVyZWRZZWFyID0gZmlsdGVyRGF0YVswXTtcbi8vICAgY29uc3QgZmlsdGVyZWRNb250aCA9IGZpbHRlckRhdGFbMV07XG4vLyAgIGNvbnN0IG51bVllYXIgPSArZmlsdGVyZWRZZWFyO1xuLy8gICBjb25zdCBudW1Nb250aCA9ICtmaWx0ZXJlZE1vbnRoO1xuLy8gICBpZiAoXG4vLyAgICAgaXNOYU4obnVtTW9udGgpIHx8XG4vLyAgICAgaXNOYU4obnVtWWVhcikgfHxcbi8vICAgICBudW1ZZWFyID4gMjAzMCB8fFxuLy8gICAgIG51bVllYXIgPCAyMDIxIHx8XG4vLyAgICAgbnVtTW9udGggPCAxIHx8XG4vLyAgICAgbnVtTW9udGggPiAxMlxuLy8gICApIHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgcHJvcHM6IHtcbi8vICAgICAgICAgaGFzRXJyb3I6IHRydWUsXG4vLyAgICAgICB9LFxuLy8gICAgICAgLy9ub3RGb3VuZDogdHJ1ZSxcbi8vICAgICAgIC8vcmVkaXJlY3Q6IHtcbi8vICAgICAgIC8vIGRlc3RpbmF0aW9uOiAnL2Vycm9yJ1xuLy8gICAgIH07XG4vLyAgIH1cbi8vICAgY29uc3QgZmlsdGVyZWRFdmVudHMgPSBhd2FpdCBnZXRGaWx0ZXJlZEV2ZW50cyh7XG4vLyAgICAgeWVhcjogbnVtWWVhcixcbi8vICAgICBtb250aDogbnVtTW9udGgsXG4vLyAgIH0pO1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBldmVudHM6IGZpbHRlcmVkRXZlbnRzLFxuLy8gICAgICAgZGF0ZToge1xuLy8gICAgICAgICB5ZWFyOiBudW1ZZWFyLFxuLy8gICAgICAgICBtb250aDogbnVtTW9udGgsXG4vLyAgICAgICB9LFxuLy8gICAgIH0sXG4vLyAgIH07XG4vLyB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/events/[...slug].js\n");

/***/ })

})
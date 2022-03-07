webpackHotUpdate_N_E("pages/events/[eventId]",{

/***/ "./components/event-detail/event-logistics.js":
/*!****************************************************!*\
  !*** ./components/event-detail/event-logistics.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _icons_address_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/address-icon */ \"./components/icons/address-icon.js\");\n/* harmony import */ var _icons_date_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/date-icon */ \"./components/icons/date-icon.js\");\n/* harmony import */ var _logistics_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logistics-item */ \"./components/event-detail/logistics-item.js\");\n/* harmony import */ var _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-logistics.module.css */ \"./components/event-detail/event-logistics.module.css\");\n/* harmony import */ var _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/amolchopra/Desktop/Projects/next-app/nextjs-course-code-01-getting-started/components/event-detail/event-logistics.js\";\n\n\n\n\n\n\nfunction EventLogistics(props) {\n  var date = props.date,\n      address = props.address,\n      image = props.image,\n      imageAlt = props.imageAlt;\n  var humanReadableDate = new Date(date).toLocaleDateString(\"en-US\", {\n    day: \"numeric\",\n    month: \"long\",\n    year: \"numeric\"\n  });\n  var addressText = address.replace(\", \", \"\\n\");\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.logistics,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.image,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        width: 350,\n        height: 350,\n        src: \"/\".concat(image),\n        alt: imageAlt\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      className: _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.list,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_logistics_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        icon: _icons_date_icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"time\", {\n          children: humanReadableDate\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_logistics_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        icon: _icons_address_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n          children: addressText\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n}\n\n_c = EventLogistics;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventLogistics);\n\nvar _c;\n\n$RefreshReg$(_c, \"EventLogistics\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudC1kZXRhaWwvZXZlbnQtbG9naXN0aWNzLmpzPzQ3NzUiXSwibmFtZXMiOlsiRXZlbnRMb2dpc3RpY3MiLCJwcm9wcyIsImRhdGUiLCJhZGRyZXNzIiwiaW1hZ2UiLCJpbWFnZUFsdCIsImh1bWFuUmVhZGFibGVEYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsImFkZHJlc3NUZXh0IiwicmVwbGFjZSIsImNsYXNzZXMiLCJsb2dpc3RpY3MiLCJsaXN0IiwiRGF0ZUljb24iLCJBZGRyZXNzSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUFBLE1BQ3JCQyxJQURxQixHQUNjRCxLQURkLENBQ3JCQyxJQURxQjtBQUFBLE1BQ2ZDLE9BRGUsR0FDY0YsS0FEZCxDQUNmRSxPQURlO0FBQUEsTUFDTkMsS0FETSxHQUNjSCxLQURkLENBQ05HLEtBRE07QUFBQSxNQUNDQyxRQURELEdBQ2NKLEtBRGQsQ0FDQ0ksUUFERDtBQUc3QixNQUFNQyxpQkFBaUIsR0FBRyxJQUFJQyxJQUFKLENBQVNMLElBQVQsRUFBZU0sa0JBQWYsQ0FBa0MsT0FBbEMsRUFBMkM7QUFDbkVDLE9BQUcsRUFBRSxTQUQ4RDtBQUVuRUMsU0FBSyxFQUFFLE1BRjREO0FBR25FQyxRQUFJLEVBQUU7QUFINkQsR0FBM0MsQ0FBMUI7QUFLQSxNQUFNQyxXQUFXLEdBQUdULE9BQU8sQ0FBQ1UsT0FBUixDQUFnQixJQUFoQixFQUFzQixJQUF0QixDQUFwQjtBQUVBLHNCQUNFO0FBQVMsYUFBUyxFQUFFQyxrRUFBTyxDQUFDQyxTQUE1QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFRCxrRUFBTyxDQUFDVixLQUF4QjtBQUFBLDZCQUNFLHFFQUFDLGlEQUFEO0FBQU8sYUFBSyxFQUFFLEdBQWQ7QUFBbUIsY0FBTSxFQUFFLEdBQTNCO0FBQWdDLFdBQUcsYUFBTUEsS0FBTixDQUFuQztBQUFrRCxXQUFHLEVBQUVDO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFJLGVBQVMsRUFBRVMsa0VBQU8sQ0FBQ0UsSUFBdkI7QUFBQSw4QkFDRSxxRUFBQyx1REFBRDtBQUFlLFlBQUksRUFBRUMsd0RBQXJCO0FBQUEsK0JBQ0U7QUFBQSxvQkFBT1g7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUUscUVBQUMsdURBQUQ7QUFBZSxZQUFJLEVBQUVZLDJEQUFyQjtBQUFBLCtCQUNFO0FBQUEsb0JBQVVOO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEOztLQXpCUVosYztBQTJCTUEsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1sb2dpc3RpY3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRkcmVzc0ljb24gZnJvbSBcIi4uL2ljb25zL2FkZHJlc3MtaWNvblwiO1xuaW1wb3J0IERhdGVJY29uIGZyb20gXCIuLi9pY29ucy9kYXRlLWljb25cIjtcbmltcG9ydCBMb2dpc3RpY3NJdGVtIGZyb20gXCIuL2xvZ2lzdGljcy1pdGVtXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9ldmVudC1sb2dpc3RpY3MubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5mdW5jdGlvbiBFdmVudExvZ2lzdGljcyhwcm9wcykge1xuICBjb25zdCB7IGRhdGUsIGFkZHJlc3MsIGltYWdlLCBpbWFnZUFsdCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaHVtYW5SZWFkYWJsZURhdGUgPSBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICBtb250aDogXCJsb25nXCIsXG4gICAgeWVhcjogXCJudW1lcmljXCIsXG4gIH0pO1xuICBjb25zdCBhZGRyZXNzVGV4dCA9IGFkZHJlc3MucmVwbGFjZShcIiwgXCIsIFwiXFxuXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ2lzdGljc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XG4gICAgICAgIDxJbWFnZSB3aWR0aD17MzUwfSBoZWlnaHQ9ezM1MH0gc3JjPXtgLyR7aW1hZ2V9YH0gYWx0PXtpbWFnZUFsdH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cbiAgICAgICAgPExvZ2lzdGljc0l0ZW0gaWNvbj17RGF0ZUljb259PlxuICAgICAgICAgIDx0aW1lPntodW1hblJlYWRhYmxlRGF0ZX08L3RpbWU+XG4gICAgICAgIDwvTG9naXN0aWNzSXRlbT5cbiAgICAgICAgPExvZ2lzdGljc0l0ZW0gaWNvbj17QWRkcmVzc0ljb259PlxuICAgICAgICAgIDxhZGRyZXNzPnthZGRyZXNzVGV4dH08L2FkZHJlc3M+XG4gICAgICAgIDwvTG9naXN0aWNzSXRlbT5cbiAgICAgIDwvdWw+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudExvZ2lzdGljcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/event-detail/event-logistics.js\n");

/***/ })

})
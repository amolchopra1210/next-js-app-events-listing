webpackHotUpdate_N_E("pages/index",{

/***/ "./components/events/event-item.js":
/*!*****************************************!*\
  !*** ./components/events/event-item.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EventItem; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _event_item_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-item.module.css */ \"./components/events/event-item.module.css\");\n/* harmony import */ var _event_item_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_event_item_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/button */ \"./components/ui/button.js\");\n/* harmony import */ var _icons_date_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/date-icon */ \"./components/icons/date-icon.js\");\n/* harmony import */ var _icons_address_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/address-icon */ \"./components/icons/address-icon.js\");\n/* harmony import */ var _icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/arrow-right-icon */ \"./components/icons/arrow-right-icon.js\");\n\nvar _jsxFileName = \"/Users/amolchopra/Desktop/Projects/next-app/nextjs-course-code-01-getting-started/components/events/event-item.js\";\n\n\n\n\n\n\nfunction EventItem(props) {\n  var title = props.title,\n      image = props.image,\n      date = props.date,\n      location = props.location,\n      id = props.id;\n  var humanReadableDate = new Date(date).toLocaleDateString(\"en-US\", {\n    day: \"numeric\",\n    month: \"long\",\n    year: \"numeric\"\n  });\n  var formattedAddress = location.replace(\", \", \"\\n\");\n  var linkToRedirect = \"/events/\".concat(id);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n    className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.item,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Image, {\n      src: \"/\" + image,\n      alt: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.summary,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.date,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_icons_date_icon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"time\", {\n            children: humanReadableDate\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.address,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_icons_address_icon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n            children: formattedAddress\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ui_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          link: linkToRedirect,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            children: \"Explore Event\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}\n_c = EventItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"EventItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtaXRlbS5qcz85YzZmIl0sIm5hbWVzIjpbIkV2ZW50SXRlbSIsInByb3BzIiwidGl0bGUiLCJpbWFnZSIsImRhdGUiLCJsb2NhdGlvbiIsImlkIiwiaHVtYW5SZWFkYWJsZURhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiZm9ybWF0dGVkQWRkcmVzcyIsInJlcGxhY2UiLCJsaW5rVG9SZWRpcmVjdCIsImNsYXNzZXMiLCJpdGVtIiwiY29udGVudCIsInN1bW1hcnkiLCJhZGRyZXNzIiwiYWN0aW9ucyIsImljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQSxNQUMvQkMsS0FEK0IsR0FDTUQsS0FETixDQUMvQkMsS0FEK0I7QUFBQSxNQUN4QkMsS0FEd0IsR0FDTUYsS0FETixDQUN4QkUsS0FEd0I7QUFBQSxNQUNqQkMsSUFEaUIsR0FDTUgsS0FETixDQUNqQkcsSUFEaUI7QUFBQSxNQUNYQyxRQURXLEdBQ01KLEtBRE4sQ0FDWEksUUFEVztBQUFBLE1BQ0RDLEVBREMsR0FDTUwsS0FETixDQUNESyxFQURDO0FBR3ZDLE1BQU1DLGlCQUFpQixHQUFHLElBQUlDLElBQUosQ0FBU0osSUFBVCxFQUFlSyxrQkFBZixDQUFrQyxPQUFsQyxFQUEyQztBQUNuRUMsT0FBRyxFQUFFLFNBRDhEO0FBRW5FQyxTQUFLLEVBQUUsTUFGNEQ7QUFHbkVDLFFBQUksRUFBRTtBQUg2RCxHQUEzQyxDQUExQjtBQU1BLE1BQU1DLGdCQUFnQixHQUFHUixRQUFRLENBQUNTLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUIsSUFBdkIsQ0FBekI7QUFDQSxNQUFNQyxjQUFjLHFCQUFjVCxFQUFkLENBQXBCO0FBQ0Esc0JBQ0U7QUFBSSxhQUFTLEVBQUVVLDZEQUFPLENBQUNDLElBQXZCO0FBQUEsNEJBQ0UscUVBQUMsS0FBRDtBQUFPLFNBQUcsRUFBRSxNQUFNZCxLQUFsQjtBQUF5QixTQUFHLEVBQUVEO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUssZUFBUyxFQUFFYyw2REFBTyxDQUFDRSxPQUF4QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUYsNkRBQU8sQ0FBQ0csT0FBeEI7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLakI7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFFYyw2REFBTyxDQUFDWixJQUF4QjtBQUFBLGtDQUNFLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFBLHNCQUFPRztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBTUU7QUFBSyxtQkFBUyxFQUFFUyw2REFBTyxDQUFDSSxPQUF4QjtBQUFBLGtDQUNFLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFBLHNCQUFVUDtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBWUU7QUFBSyxpQkFBUyxFQUFFRyw2REFBTyxDQUFDSyxPQUF4QjtBQUFBLCtCQUNFLHFFQUFDLGtEQUFEO0FBQVEsY0FBSSxFQUFFTixjQUFkO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFNLHFCQUFTLEVBQUVDLDZEQUFPLENBQUNNLElBQXpCO0FBQUEsbUNBQ0UscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMEJEO0tBckN1QnRCLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1pdGVtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vZXZlbnQtaXRlbS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi91aS9idXR0b25cIjtcbmltcG9ydCBEYXRlSWNvbiBmcm9tIFwiLi4vaWNvbnMvZGF0ZS1pY29uXCI7XG5pbXBvcnQgQWRkcmVzc0ljb24gZnJvbSBcIi4uL2ljb25zL2FkZHJlc3MtaWNvblwiO1xuaW1wb3J0IEFycm93UmlnaHRJY29uIGZyb20gXCIuLi9pY29ucy9hcnJvdy1yaWdodC1pY29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV2ZW50SXRlbShwcm9wcykge1xuICBjb25zdCB7IHRpdGxlLCBpbWFnZSwgZGF0ZSwgbG9jYXRpb24sIGlkIH0gPSBwcm9wcztcblxuICBjb25zdCBodW1hblJlYWRhYmxlRGF0ZSA9IG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgfSk7XG5cbiAgY29uc3QgZm9ybWF0dGVkQWRkcmVzcyA9IGxvY2F0aW9uLnJlcGxhY2UoXCIsIFwiLCBcIlxcblwiKTtcbiAgY29uc3QgbGlua1RvUmVkaXJlY3QgPSBgL2V2ZW50cy8ke2lkfWA7XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cbiAgICAgIDxJbWFnZSBzcmM9e1wiL1wiICsgaW1hZ2V9IGFsdD17dGl0bGV9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3VtbWFyeX0+XG4gICAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRhdGV9PlxuICAgICAgICAgICAgPERhdGVJY29uIC8+XG4gICAgICAgICAgICA8dGltZT57aHVtYW5SZWFkYWJsZURhdGV9PC90aW1lPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFkZHJlc3N9PlxuICAgICAgICAgICAgPEFkZHJlc3NJY29uIC8+XG4gICAgICAgICAgICA8YWRkcmVzcz57Zm9ybWF0dGVkQWRkcmVzc308L2FkZHJlc3M+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICA8QnV0dG9uIGxpbms9e2xpbmtUb1JlZGlyZWN0fT5cbiAgICAgICAgICAgIDxzcGFuPkV4cGxvcmUgRXZlbnQ8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0+XG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGk+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/events/event-item.js\n");

/***/ })

})
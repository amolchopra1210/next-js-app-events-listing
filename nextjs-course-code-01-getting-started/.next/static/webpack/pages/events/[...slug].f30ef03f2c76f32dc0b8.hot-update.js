webpackHotUpdate_N_E("pages/events/[...slug]",{

/***/ "./components/events/event-item.js":
/*!*****************************************!*\
  !*** ./components/events/event-item.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EventItem; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _event_item_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-item.module.css */ \"./components/events/event-item.module.css\");\n/* harmony import */ var _event_item_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_event_item_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/button */ \"./components/ui/button.js\");\n/* harmony import */ var _icons_date_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/date-icon */ \"./components/icons/date-icon.js\");\n/* harmony import */ var _icons_address_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/address-icon */ \"./components/icons/address-icon.js\");\n/* harmony import */ var _icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/arrow-right-icon */ \"./components/icons/arrow-right-icon.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _jsxFileName = \"/Users/amolchopra/Desktop/Projects/next-app/nextjs-course-code-01-getting-started/components/events/event-item.js\";\n\n\n\n\n\n\n\nfunction EventItem(props) {\n  var title = props.title,\n      image = props.image,\n      date = props.date,\n      location = props.location,\n      id = props.id;\n  var humanReadableDate = new Date(date).toLocaleDateString(\"en-US\", {\n    day: \"numeric\",\n    month: \"long\",\n    year: \"numeric\"\n  });\n  var formattedAddress = location.replace(\", \", \"\\n\");\n  var linkToRedirect = \"/events/\".concat(id);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n    className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.item,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      src: \"/\" + image,\n      alt: title,\n      width: 250,\n      height: 250\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.summary,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.date,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_icons_date_icon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"time\", {\n            children: humanReadableDate\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.address,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_icons_address_icon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n            children: formattedAddress\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ui_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          link: linkToRedirect,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            children: \"Explore Event\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, this);\n}\n_c = EventItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"EventItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtaXRlbS5qcz85YzZmIl0sIm5hbWVzIjpbIkV2ZW50SXRlbSIsInByb3BzIiwidGl0bGUiLCJpbWFnZSIsImRhdGUiLCJsb2NhdGlvbiIsImlkIiwiaHVtYW5SZWFkYWJsZURhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiZm9ybWF0dGVkQWRkcmVzcyIsInJlcGxhY2UiLCJsaW5rVG9SZWRpcmVjdCIsImNsYXNzZXMiLCJpdGVtIiwiY29udGVudCIsInN1bW1hcnkiLCJhZGRyZXNzIiwiYWN0aW9ucyIsImljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQUEsTUFDL0JDLEtBRCtCLEdBQ01ELEtBRE4sQ0FDL0JDLEtBRCtCO0FBQUEsTUFDeEJDLEtBRHdCLEdBQ01GLEtBRE4sQ0FDeEJFLEtBRHdCO0FBQUEsTUFDakJDLElBRGlCLEdBQ01ILEtBRE4sQ0FDakJHLElBRGlCO0FBQUEsTUFDWEMsUUFEVyxHQUNNSixLQUROLENBQ1hJLFFBRFc7QUFBQSxNQUNEQyxFQURDLEdBQ01MLEtBRE4sQ0FDREssRUFEQztBQUd2QyxNQUFNQyxpQkFBaUIsR0FBRyxJQUFJQyxJQUFKLENBQVNKLElBQVQsRUFBZUssa0JBQWYsQ0FBa0MsT0FBbEMsRUFBMkM7QUFDbkVDLE9BQUcsRUFBRSxTQUQ4RDtBQUVuRUMsU0FBSyxFQUFFLE1BRjREO0FBR25FQyxRQUFJLEVBQUU7QUFINkQsR0FBM0MsQ0FBMUI7QUFNQSxNQUFNQyxnQkFBZ0IsR0FBR1IsUUFBUSxDQUFDUyxPQUFULENBQWlCLElBQWpCLEVBQXVCLElBQXZCLENBQXpCO0FBQ0EsTUFBTUMsY0FBYyxxQkFBY1QsRUFBZCxDQUFwQjtBQUNBLHNCQUNFO0FBQUksYUFBUyxFQUFFVSw2REFBTyxDQUFDQyxJQUF2QjtBQUFBLDRCQUNFLHFFQUFDLGlEQUFEO0FBQU8sU0FBRyxFQUFFLE1BQU1kLEtBQWxCO0FBQXlCLFNBQUcsRUFBRUQsS0FBOUI7QUFBcUMsV0FBSyxFQUFJLEdBQTlDO0FBQW1ELFlBQU0sRUFBSTtBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLGVBQVMsRUFBRWMsNkRBQU8sQ0FBQ0UsT0FBeEI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVGLDZEQUFPLENBQUNHLE9BQXhCO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBS2pCO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUssbUJBQVMsRUFBRWMsNkRBQU8sQ0FBQ1osSUFBeEI7QUFBQSxrQ0FDRSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQSxzQkFBT0c7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQU1FO0FBQUssbUJBQVMsRUFBRVMsNkRBQU8sQ0FBQ0ksT0FBeEI7QUFBQSxrQ0FDRSxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQSxzQkFBVVA7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVlFO0FBQUssaUJBQVMsRUFBRUcsNkRBQU8sQ0FBQ0ssT0FBeEI7QUFBQSwrQkFDRSxxRUFBQyxrREFBRDtBQUFRLGNBQUksRUFBRU4sY0FBZDtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBTSxxQkFBUyxFQUFFQyw2REFBTyxDQUFDTSxJQUF6QjtBQUFBLG1DQUNFLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBCRDtLQXJDdUJ0QixTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtaXRlbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2V2ZW50LWl0ZW0ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vdWkvYnV0dG9uXCI7XG5pbXBvcnQgRGF0ZUljb24gZnJvbSBcIi4uL2ljb25zL2RhdGUtaWNvblwiO1xuaW1wb3J0IEFkZHJlc3NJY29uIGZyb20gXCIuLi9pY29ucy9hZGRyZXNzLWljb25cIjtcbmltcG9ydCBBcnJvd1JpZ2h0SWNvbiBmcm9tIFwiLi4vaWNvbnMvYXJyb3ctcmlnaHQtaWNvblwiO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdmVudEl0ZW0ocHJvcHMpIHtcbiAgY29uc3QgeyB0aXRsZSwgaW1hZ2UsIGRhdGUsIGxvY2F0aW9uLCBpZCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaHVtYW5SZWFkYWJsZURhdGUgPSBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICBtb250aDogXCJsb25nXCIsXG4gICAgeWVhcjogXCJudW1lcmljXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGZvcm1hdHRlZEFkZHJlc3MgPSBsb2NhdGlvbi5yZXBsYWNlKFwiLCBcIiwgXCJcXG5cIik7XG4gIGNvbnN0IGxpbmtUb1JlZGlyZWN0ID0gYC9ldmVudHMvJHtpZH1gO1xuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XG4gICAgICA8SW1hZ2Ugc3JjPXtcIi9cIiArIGltYWdlfSBhbHQ9e3RpdGxlfSB3aWR0aCA9IHsyNTB9IGhlaWdodCA9IHsyNTB9Lz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdW1tYXJ5fT5cbiAgICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGF0ZX0+XG4gICAgICAgICAgICA8RGF0ZUljb24gLz5cbiAgICAgICAgICAgIDx0aW1lPntodW1hblJlYWRhYmxlRGF0ZX08L3RpbWU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWRkcmVzc30+XG4gICAgICAgICAgICA8QWRkcmVzc0ljb24gLz5cbiAgICAgICAgICAgIDxhZGRyZXNzPntmb3JtYXR0ZWRBZGRyZXNzfTwvYWRkcmVzcz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuICAgICAgICAgIDxCdXR0b24gbGluaz17bGlua1RvUmVkaXJlY3R9PlxuICAgICAgICAgICAgPHNwYW4+RXhwbG9yZSBFdmVudDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufT5cbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9saT5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/events/event-item.js\n");

/***/ })

})
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

/***/ "./components/Users.jsx":
/*!******************************!*\
  !*** ./components/Users.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _this = undefined;\nvar Users = function(props) {\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n        className: \"list-group\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Anderson\\\\Desktop\\\\Next\\\\components\\\\Users.jsx\",\n            lineNumber: 3,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: props.DataUsers.map(function(user) {\n            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                className: \"list-group-item list-group-item-action\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Anderson\\\\Desktop\\\\Next\\\\components\\\\Users.jsx\",\n                    lineNumber: 5,\n                    columnNumber: 9\n                },\n                __self: _this1,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Anderson\\\\Desktop\\\\Next\\\\components\\\\Users.jsx\",\n                        lineNumber: 6,\n                        columnNumber: 11\n                    },\n                    __self: _this1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h5\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Anderson\\\\Desktop\\\\Next\\\\components\\\\Users.jsx\",\n                                lineNumber: 7,\n                                columnNumber: 11\n                            },\n                            __self: _this1,\n                            children: [\n                                user.first_name,\n                                \" \",\n                                user.last_name\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Anderson\\\\Desktop\\\\Next\\\\components\\\\Users.jsx\",\n                                lineNumber: 8,\n                                columnNumber: 11\n                            },\n                            __self: _this1,\n                            children: [\n                                \"Email:\",\n                                user.email\n                            ]\n                        })\n                    ]\n                })\n            }, user.id);\n        })\n    }));\n};\n_c = Users;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxHQUFLLENBQUNBLEtBQUssR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDOztJQUN4QixNQUFNLHNFQUNIQyxDQUFFO1FBQUNDLFNBQVMsRUFBQyxDQUFZOzs7Ozs7O2tCQUN2QkYsS0FBSyxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUk7MEJBQ3hCLE1BQU0sd0RBQUxDLENBQUU7Z0JBQWVKLFNBQVMsRUFBQyxDQUF3Qzs7Ozs7OztnR0FDakVLLENBQUc7Ozs7Ozs7OzhGQUNIQyxDQUFFOzs7Ozs7OztnQ0FBRUgsSUFBSSxDQUFDSSxVQUFVO2dDQUFDLENBQUM7Z0NBQUNKLElBQUksQ0FBQ0ssU0FBUzs7OzhGQUNwQ0MsQ0FBQzs7Ozs7Ozs7Z0NBQUMsQ0FBTTtnQ0FBQ04sSUFBSSxDQUFDTyxLQUFLOzs7OztlQUhiUCxJQUFJLENBQUNRLEVBQUU7OztBQVN4QixDQUFDO0tBYktkLEtBQUs7QUFlWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXNlcnMuanN4PzM2NDUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVXNlcnMgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAge3Byb3BzLkRhdGFVc2Vycy5tYXAoKHVzZXIpID0+IChcclxuICAgICAgICA8bGkga2V5PXt1c2VyLmlkfSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoNT57dXNlci5maXJzdF9uYW1lfSB7dXNlci5sYXN0X25hbWV9PC9oNT5cclxuICAgICAgICAgIDxwPkVtYWlsOnt1c2VyLmVtYWlsfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICkpfVxyXG4gICAgPC91bD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7XHJcbiJdLCJuYW1lcyI6WyJVc2VycyIsInByb3BzIiwidWwiLCJjbGFzc05hbWUiLCJEYXRhVXNlcnMiLCJtYXAiLCJ1c2VyIiwibGkiLCJkaXYiLCJoNSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJwIiwiZW1haWwiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Users.jsx\n");

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users/[id]",{

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Container */ \"./components/Container.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar userProfile = function(props) {\n    _s();\n    var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var id = router.query.id;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Anderson\\\\Desktop\\\\Next\\\\pages\\\\users\\\\[id].js\",\n            lineNumber: 9,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            className: \"row\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\Anderson\\\\Desktop\\\\Next\\\\pages\\\\users\\\\[id].js\",\n                lineNumber: 10,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                className: \"col-md-6 offset-md-3\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Anderson\\\\Desktop\\\\Next\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 11,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                    className: \"card\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Anderson\\\\Desktop\\\\Next\\\\pages\\\\users\\\\[id].js\",\n                        lineNumber: 12,\n                        columnNumber: 21\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                            className: \"card-header text-center\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Anderson\\\\Desktop\\\\Next\\\\pages\\\\users\\\\[id].js\",\n                                lineNumber: 13,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"img\", {\n                                src: props.user.avatar,\n                                alt: props.user.last_name,\n                                style: {\n                                    borderRadius: '50%'\n                                },\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Anderson\\\\Desktop\\\\Next\\\\pages\\\\users\\\\[id].js\",\n                                    lineNumber: 14,\n                                    columnNumber: 29\n                                },\n                                __self: _this\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                            className: \"card-body\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Anderson\\\\Desktop\\\\Next\\\\pages\\\\users\\\\[id].js\",\n                                lineNumber: 16,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h3\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Anderson\\\\Desktop\\\\Next\\\\pages\\\\users\\\\[id].js\",\n                                    lineNumber: 17,\n                                    columnNumber: 29\n                                },\n                                __self: _this\n                            })\n                        })\n                    ]\n                })\n            })\n        })\n    }));\n};\n_s(userProfile, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\nuserProfile.getInitialProps = _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {\n    var res, resJSON;\n    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()(\"https://reqres.in/api/users/\".concat(ctx.query.id));\n            case 2:\n                res = _ctx.sent;\n                _ctx.next = 5;\n                return res.json();\n            case 5:\n                resJSON = _ctx.sent;\n                return _ctx.abrupt(\"return\", {\n                    user: resJSON.data\n                });\n            case 7:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (userProfile);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUNjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNsRCxHQUFLLENBQUNHLFdBQVcsR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDOztJQUM1QixHQUFLLENBQUNDLE1BQU0sR0FBR0wsa0VBQVM7SUFDeEIsR0FBSyxDQUFFTSxFQUFFLEdBQUlELE1BQU0sQ0FBQ0UsS0FBSyxDQUFsQkQsRUFBRTtJQUVULE1BQU0sc0VBQ0RFLENBQUc7Ozs7Ozs7dUZBQ0NOLDZEQUFTO1lBQUNPLFNBQVMsRUFBQyxDQUFLOzs7Ozs7OzJGQUNyQkQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQXNCOzs7Ozs7O2dHQUNoQ0QsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQU07Ozs7Ozs7OzZGQUNoQkQsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFDLENBQXlCOzs7Ozs7OzJHQUNuQ0MsQ0FBRztnQ0FBQ0MsR0FBRyxFQUFFUCxLQUFLLENBQUNRLElBQUksQ0FBQ0MsTUFBTTtnQ0FBRUMsR0FBRyxFQUFFVixLQUFLLENBQUNRLElBQUksQ0FBQ0csU0FBUztnQ0FBRUMsS0FBSyxFQUFFLENBQUNDO29DQUFBQSxZQUFZLEVBQUMsQ0FBSztnQ0FBQSxDQUFDOzs7Ozs7Ozs7NkZBRXRGVCxDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBVzs7Ozs7OzsyR0FDckJTLENBQUU7Ozs7Ozs7Ozs7Ozs7O0FBUy9CLENBQUM7R0F0QktmLFdBQVc7O1FBQ0VILDhEQUFTOzs7QUF1QjVCRyxXQUFXLENBQUNnQixlQUFlLHFGQUFHLFFBQVEsU0FBRkMsR0FBRyxFQUFHLENBQUM7UUFDakNDLEdBQUcsRUFDSEMsT0FBTzs7Ozs7dUJBREtyQix1REFBSyxDQUFFLENBQTRCLDhCQUFlLE9BQWJtQixHQUFHLENBQUNiLEtBQUssQ0FBQ0QsRUFBRTs7Z0JBQTdEZSxHQUFHOzt1QkFDYUEsR0FBRyxDQUFDRSxJQUFJOztnQkFBeEJELE9BQU87NkNBQ04sQ0FBQ1Y7b0JBQUFBLElBQUksRUFBRVUsT0FBTyxDQUFDRSxJQUFJO2dCQUFBLENBQUM7Ozs7OztBQUMvQixDQUFDO0FBRUQsK0RBQWVyQixXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXJzL1tpZF0uanM/MTc4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIlxyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db250YWluZXJcIjtcclxuY29uc3QgdXNlclByb2ZpbGUgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9mZnNldC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgdGV4dC1jZW50ZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMudXNlci5hdmF0YXJ9IGFsdD17cHJvcHMudXNlci5sYXN0X25hbWV9IHN0eWxlPXt7Ym9yZGVyUmFkaXVzOic1MCUnfX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxudXNlclByb2ZpbGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMoY3R4KT0+e1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcmVxcmVzLmluL2FwaS91c2Vycy8ke2N0eC5xdWVyeS5pZH1gKVxyXG4gICAgY29uc3QgcmVzSlNPTiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4ge3VzZXI6IHJlc0pTT04uZGF0YX1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlclByb2ZpbGVcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsImZldGNoIiwiQ29udGFpbmVyIiwidXNlclByb2ZpbGUiLCJwcm9wcyIsInJvdXRlciIsImlkIiwicXVlcnkiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJ1c2VyIiwiYXZhdGFyIiwiYWx0IiwibGFzdF9uYW1lIiwic3R5bGUiLCJib3JkZXJSYWRpdXMiLCJoMyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcyIsInJlc0pTT04iLCJqc29uIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ })

});
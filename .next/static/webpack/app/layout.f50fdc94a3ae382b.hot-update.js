"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"76a33eb1fb1d\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2xvYmFscy5jc3M/MmQyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjc2YTMzZWIxZmIxZFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/data */ \"(app-client)/./lib/data.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ \"(app-client)/./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _context_active_section_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/active-section-context */ \"(app-client)/./context/active-section-context.tsx\");\n/* harmony import */ var _hooks_checkMobileScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/checkMobileScreen */ \"(app-client)/./hooks/checkMobileScreen.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Header() {\n    _s();\n    const { activeSection, setActiveSection, setTimeOfLastClick } = (0,_context_active_section_context__WEBPACK_IMPORTED_MODULE_5__.useActiveSectionContext)();\n    const isMobile = (0,_hooks_checkMobileScreen__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleMobileMenu = ()=>{\n        setIsMobileMenuOpen(!isMobileMenuOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"z-[999] relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                className: \"fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[46rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75\",\n                initial: {\n                    y: -100,\n                    x: \"-50%\",\n                    opacity: 0\n                },\n                animate: {\n                    y: 0,\n                    x: \"-50%\",\n                    opacity: 1\n                }\n            }, void 0, false, {\n                fileName: \"/home/dhruv/Desktop/dhruv/profile/portfolio-website/components/header.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-6 right-6 z-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: toggleMobileMenu,\n                    className: \"block text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 focus:outline-none\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: \"h-6 w-6 fill-current\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        viewBox: \"0 0 24 24\",\n                        children: isMobileMenuOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            fillRule: \"evenodd\",\n                            clipRule: \"evenodd\",\n                            d: \"M19 7H5v2h14V7zM5 11h14v2H5v-2zm14 4H5v2h14v-2z\"\n                        }, void 0, false, {\n                            fileName: \"/home/dhruv/Desktop/dhruv/profile/portfolio-website/components/header.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 17\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            fillRule: \"evenodd\",\n                            clipRule: \"evenodd\",\n                            d: \"M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z\"\n                        }, void 0, false, {\n                            fileName: \"/home/dhruv/Desktop/dhruv/profile/portfolio-website/components/header.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/dhruv/Desktop/dhruv/profile/portfolio-website/components/header.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/dhruv/Desktop/dhruv/profile/portfolio-website/components/header.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/dhruv/Desktop/dhruv/profile/portfolio-website/components/header.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex w-full bg-white fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0\",\n                children: [\n                    \"flex bg-white fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0\",\n                    isMobileMenuOpen && isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.ul, {\n                        className: \"absolute top-20 left-0 w-full bg-white shadow-lg rounded-lg dark:bg-gray-950 dark:shadow-lg sm:hidden\",\n                        children: _lib_data__WEBPACK_IMPORTED_MODULE_2__.links.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.li, {\n                                className: \"h-3/4 flex items-center justify-center relative\",\n                                initial: {\n                                    y: -100,\n                                    opacity: 0\n                                },\n                                animate: {\n                                    y: 0,\n                                    opacity: 1\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300\", \"bg-gray-100 dark:bg-gray-800\", {\n                                        \"text-gray-950 dark:text-gray-200\": activeSection === link.name\n                                    }),\n                                    href: link.hash,\n                                    onClick: ()=>{\n                                        setActiveSection(link.name);\n                                        setTimeOfLastClick(Date.now());\n                                    },\n                                    children: [\n                                        link.name,\n                                        link.name === activeSection && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.span, {\n                                            className: \"bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800\",\n                                            layoutId: \"activeSection\",\n                                            transition: {\n                                                type: \"spring\",\n                                                stiffness: 380,\n                                                damping: 30\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/home/dhruv/Desktop/dhruv/profile/portfolio-website/components/header.tsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/dhruv/Desktop/dhruv/profile/portfolio-website/components/header.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 17\n                                }, this)\n                            }, link.hash, false, {\n                                fileName: \"/home/dhruv/Desktop/dhruv/profile/portfolio-website/components/header.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/dhruv/Desktop/dhruv/profile/portfolio-website/components/header.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this),\n                    !isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5\",\n                        children: _lib_data__WEBPACK_IMPORTED_MODULE_2__.links.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.li, {\n                                className: \"h-3/4 flex items-center justify-center relative\",\n                                initial: {\n                                    y: -100,\n                                    opacity: 0\n                                },\n                                animate: {\n                                    y: 0,\n                                    opacity: 1\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300\", {\n                                        \"text-gray-950 dark:text-gray-200\": activeSection === link.name\n                                    }),\n                                    href: link.hash,\n                                    onClick: ()=>{\n                                        setActiveSection(link.name);\n                                        setTimeOfLastClick(Date.now());\n                                    },\n                                    children: [\n                                        link.name,\n                                        link.name === activeSection && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.span, {\n                                            className: \"bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800\",\n                                            layoutId: \"activeSection\",\n                                            transition: {\n                                                type: \"spring\",\n                                                stiffness: 380,\n                                                damping: 30\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/home/dhruv/Desktop/dhruv/profile/portfolio-website/components/header.tsx\",\n                                            lineNumber: 129,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/dhruv/Desktop/dhruv/profile/portfolio-website/components/header.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 17\n                                }, this)\n                            }, link.hash, false, {\n                                fileName: \"/home/dhruv/Desktop/dhruv/profile/portfolio-website/components/header.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/dhruv/Desktop/dhruv/profile/portfolio-website/components/header.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dhruv/Desktop/dhruv/profile/portfolio-website/components/header.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dhruv/Desktop/dhruv/profile/portfolio-website/components/header.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"VUcxg8tXtLpVZmLg4Gf8JSKuCaQ=\", false, function() {\n    return [\n        _context_active_section_context__WEBPACK_IMPORTED_MODULE_5__.useActiveSectionContext,\n        _hooks_checkMobileScreen__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUk7d0NBQzFCM0IsbUJBQW1COEIsS0FBS0MsR0FBRztvQ0FDN0I7O3dDQUVDTixLQUFLRSxJQUFJO3dDQUVURixLQUFLRSxJQUFJLEtBQUs3QiwrQkFDYiw4REFBQ1AsaURBQU1BLENBQUN5QyxJQUFJOzRDQUNWMUIsV0FBVTs0Q0FDVjJCLFVBQVM7NENBQ1RDLFlBQVk7Z0RBQ1ZDLE1BQU07Z0RBQ05DLFdBQVc7Z0RBQ1hDLFNBQVM7NENBQ1g7Ozs7Ozs7Ozs7OzsrQkE1QkRaLEtBQUtJLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QzlCO0dBekl3QmhDOztRQUVwQkYsb0ZBQXVCQTtRQUNSQyxnRUFBb0JBOzs7S0FIZkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIudHN4Pzg3MGMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBsaW5rcyB9IGZyb20gXCJAL2xpYi9kYXRhXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IHsgdXNlQWN0aXZlU2VjdGlvbkNvbnRleHQgfSBmcm9tIFwiQC9jb250ZXh0L2FjdGl2ZS1zZWN0aW9uLWNvbnRleHRcIjtcbmltcG9ydCB1c2VDaGVja01vYmlsZVNjcmVlbiBmcm9tIFwiQC9ob29rcy9jaGVja01vYmlsZVNjcmVlblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IHsgYWN0aXZlU2VjdGlvbiwgc2V0QWN0aXZlU2VjdGlvbiwgc2V0VGltZU9mTGFzdENsaWNrIH0gPVxuICAgIHVzZUFjdGl2ZVNlY3Rpb25Db250ZXh0KCk7XG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlQ2hlY2tNb2JpbGVTY3JlZW4oKTtcbiAgY29uc3QgW2lzTW9iaWxlTWVudU9wZW4sIHNldElzTW9iaWxlTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRvZ2dsZU1vYmlsZU1lbnUgPSAoKSA9PiB7XG4gICAgc2V0SXNNb2JpbGVNZW51T3BlbighaXNNb2JpbGVNZW51T3Blbik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInotWzk5OV0gcmVsYXRpdmVcIj5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMS8yIGgtWzQuNXJlbV0gdy1mdWxsIHJvdW5kZWQtbm9uZSBib3JkZXIgYm9yZGVyLXdoaXRlIGJvcmRlci1vcGFjaXR5LTQwIGJnLXdoaXRlIGJnLW9wYWNpdHktODAgc2hhZG93LWxnIHNoYWRvdy1ibGFjay9bMC4wM10gYmFja2Ryb3AtYmx1ci1bMC41cmVtXSBzbTp0b3AtNiBzbTpoLVszLjI1cmVtXSBzbTp3LVs0NnJlbV0gc206cm91bmRlZC1mdWxsIGRhcms6YmctZ3JheS05NTAgZGFyazpib3JkZXItYmxhY2svNDAgZGFyazpiZy1vcGFjaXR5LTc1XCJcbiAgICAgICAgaW5pdGlhbD17eyB5OiAtMTAwLCB4OiBcIi01MCVcIiwgb3BhY2l0eTogMCB9fVxuICAgICAgICBhbmltYXRlPXt7IHk6IDAsIHg6IFwiLTUwJVwiLCBvcGFjaXR5OiAxIH19XG4gICAgICA+PC9tb3Rpb24uZGl2PlxuXG4gICAgICB7LyogTW9iaWxlIE1lbnUgKi99XG4gICAgICB7aXNNb2JpbGUgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC02IHJpZ2h0LTYgei01MFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1vYmlsZU1lbnV9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTIwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIGRhcms6aG92ZXI6dGV4dC1ncmF5LTMwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNiBmaWxsLWN1cnJlbnRcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtpc01vYmlsZU1lbnVPcGVuID8gKFxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMTkgN0g1djJoMTRWN3pNNSAxMWgxNHYySDV2LTJ6bTE0IDRINXYyaDE0di0yelwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICBkPVwiTTQgNmgxNnYySDRWNnptMCA1aDE2djJINHYtMnptMCA1aDE2djJINHYtMnpcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGJnLXdoaXRlIGZpeGVkIHRvcC1bMC4xNXJlbV0gbGVmdC0xLzIgaC0xMiAtdHJhbnNsYXRlLXgtMS8yIHB5LTIgc206dG9wLVsxLjdyZW1dIHNtOmgtW2luaXRpYWxdIHNtOnB5LTBcIj5cbiAgICAgICAgZmxleCBiZy13aGl0ZSBmaXhlZCB0b3AtWzAuMTVyZW1dIGxlZnQtMS8yIGgtMTIgLXRyYW5zbGF0ZS14LTEvMiBweS0yXG4gICAgICAgIHNtOnRvcC1bMS43cmVtXSBzbTpoLVtpbml0aWFsXSBzbTpweS0wXG4gICAgICAgIHtpc01vYmlsZU1lbnVPcGVuICYmIGlzTW9iaWxlICYmIChcbiAgICAgICAgICA8bW90aW9uLnVsIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yMCBsZWZ0LTAgdy1mdWxsIGJnLXdoaXRlIHNoYWRvdy1sZyByb3VuZGVkLWxnIGRhcms6YmctZ3JheS05NTAgZGFyazpzaGFkb3ctbGcgc206aGlkZGVuXCI+XG4gICAgICAgICAgICB7bGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgICAgICAgICAgIDxtb3Rpb24ubGlcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTMvNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByZWxhdGl2ZVwiXG4gICAgICAgICAgICAgICAga2V5PXtsaW5rLmhhc2h9XG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyB5OiAtMTAwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAgICAgICBcImZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC0zIHB5LTMgaG92ZXI6dGV4dC1ncmF5LTk1MCB0cmFuc2l0aW9uIGRhcms6dGV4dC1ncmF5LTUwMCBkYXJrOmhvdmVyOnRleHQtZ3JheS0zMDBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJiZy1ncmF5LTEwMCBkYXJrOmJnLWdyYXktODAwXCIsIC8vIEFkZGVkIGJhY2tncm91bmQgY29sb3JzIGhlcmVcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1ncmF5LTk1MCBkYXJrOnRleHQtZ3JheS0yMDBcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNlY3Rpb24gPT09IGxpbmsubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsuaGFzaH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlU2VjdGlvbihsaW5rLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lT2ZMYXN0Q2xpY2soRGF0ZS5ub3coKSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtsaW5rLm5hbWV9XG5cbiAgICAgICAgICAgICAgICAgIHtsaW5rLm5hbWUgPT09IGFjdGl2ZVNlY3Rpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLnNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCByb3VuZGVkLWZ1bGwgYWJzb2x1dGUgaW5zZXQtMCAtei0xMCBkYXJrOmJnLWdyYXktODAwXCJcbiAgICAgICAgICAgICAgICAgICAgICBsYXlvdXRJZD1cImFjdGl2ZVNlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGlmZm5lc3M6IDM4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhbXBpbmc6IDMwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID48L21vdGlvbi5zcGFuPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmxpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9tb3Rpb24udWw+XG4gICAgICAgICl9XG4gICAgICAgIHshaXNNb2JpbGUgJiYgKFxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IHctWzIycmVtXSBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC15LTEgdGV4dC1bMC45cmVtXSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHNtOnctW2luaXRpYWxdIHNtOmZsZXgtbm93cmFwIHNtOmdhcC01XCI+XG4gICAgICAgICAgICB7bGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgICAgICAgICAgIDxtb3Rpb24ubGlcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTMvNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByZWxhdGl2ZVwiXG4gICAgICAgICAgICAgICAga2V5PXtsaW5rLmhhc2h9XG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyB5OiAtMTAwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAgICAgICBcImZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC0zIHB5LTMgaG92ZXI6dGV4dC1ncmF5LTk1MCB0cmFuc2l0aW9uIGRhcms6dGV4dC1ncmF5LTUwMCBkYXJrOmhvdmVyOnRleHQtZ3JheS0zMDBcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1ncmF5LTk1MCBkYXJrOnRleHQtZ3JheS0yMDBcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNlY3Rpb24gPT09IGxpbmsubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsuaGFzaH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlU2VjdGlvbihsaW5rLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lT2ZMYXN0Q2xpY2soRGF0ZS5ub3coKSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtsaW5rLm5hbWV9XG5cbiAgICAgICAgICAgICAgICAgIHtsaW5rLm5hbWUgPT09IGFjdGl2ZVNlY3Rpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLnNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCByb3VuZGVkLWZ1bGwgYWJzb2x1dGUgaW5zZXQtMCAtei0xMCBkYXJrOmJnLWdyYXktODAwXCJcbiAgICAgICAgICAgICAgICAgICAgICBsYXlvdXRJZD1cImFjdGl2ZVNlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGlmZm5lc3M6IDM4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhbXBpbmc6IDMwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID48L21vdGlvbi5zcGFuPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmxpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgKX1cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJsaW5rcyIsIkxpbmsiLCJjbHN4IiwidXNlQWN0aXZlU2VjdGlvbkNvbnRleHQiLCJ1c2VDaGVja01vYmlsZVNjcmVlbiIsIkhlYWRlciIsImFjdGl2ZVNlY3Rpb24iLCJzZXRBY3RpdmVTZWN0aW9uIiwic2V0VGltZU9mTGFzdENsaWNrIiwiaXNNb2JpbGUiLCJpc01vYmlsZU1lbnVPcGVuIiwic2V0SXNNb2JpbGVNZW51T3BlbiIsInRvZ2dsZU1vYmlsZU1lbnUiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJpbml0aWFsIiwieSIsIngiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdmciLCJ4bWxucyIsInZpZXdCb3giLCJwYXRoIiwiZmlsbFJ1bGUiLCJjbGlwUnVsZSIsImQiLCJuYXYiLCJ1bCIsIm1hcCIsImxpbmsiLCJsaSIsIm5hbWUiLCJocmVmIiwiaGFzaCIsIkRhdGUiLCJub3ciLCJzcGFuIiwibGF5b3V0SWQiLCJ0cmFuc2l0aW9uIiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/header.tsx\n"));

/***/ })

});
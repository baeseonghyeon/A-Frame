/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/404";
exports.ids = ["pages/404"];
exports.modules = {

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ \"classnames/bind\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var _404_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./404.module.scss */ \"./pages/404.module.scss\");\n/* harmony import */ var _404_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_404_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/seonghyeon/Desktop/Work/Old-Rookie/Study/AFrame/first-aframe/pages/404.js\";\n\n\n\n\n\n\nconst cn = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default().bind((_404_module_scss__WEBPACK_IMPORTED_MODULE_6___default()));\n\nconst NotFound = () => {\n  const {\n    0: counter,\n    1: setCounter\n  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(5);\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {\n    const countdown = setInterval(() => {\n      if (counter > 0) {\n        setCounter(counter - 1);\n      }\n\n      if (counter === 0) {\n        clearInterval(countdown);\n      }\n    }, 1000);\n    return () => clearInterval(countdown);\n  }, [counter]);\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {\n    const timeout = setTimeout(() => {\n      next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/');\n    }, 5000);\n    return () => clearTimeout(timeout);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__.default, {\n    title: \"Oops!\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: cn('container'),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: cn('num__label'),\n        children: \"404\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        className: cn('label'),\n        children: \"\\uD398\\uC774\\uC9C0\\uB97C \\uCC3E\\uC744 \\uC218 \\uC5C6\\uC2B5\\uB2C8\\uB2E4.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [counter, \"\\uCD08 \\uD6C4\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n          href: \"/\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"/\",\n            className: cn('link__label'),\n            children: \"\\uBA54\\uC778\\uD398\\uC774\\uC9C0\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, undefined), \"\\uB85C \\uC774\\uB3D9\\uD569\\uB2C8\\uB2E4.\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFound);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJzdC1hZnJhbWUvLi9wYWdlcy80MDQuanM/YjhkYyJdLCJuYW1lcyI6WyJjbiIsImNiIiwic3R5bGVzIiwiTm90Rm91bmQiLCJjb3VudGVyIiwic2V0Q291bnRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY291bnRkb3duIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwidGltZW91dCIsInNldFRpbWVvdXQiLCJSb3V0ZXIiLCJjbGVhclRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxFQUFFLEdBQUdDLDJEQUFBLENBQVFDLHlEQUFSLENBQVg7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLE1BQU07QUFDckIsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQywrQ0FBUSxDQUFDLENBQUQsQ0FBdEM7QUFFQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsU0FBUyxHQUFHQyxXQUFXLENBQUMsTUFBTTtBQUNsQyxVQUFJTCxPQUFPLEdBQUcsQ0FBZCxFQUFpQjtBQUNmQyxrQkFBVSxDQUFDRCxPQUFPLEdBQUcsQ0FBWCxDQUFWO0FBQ0Q7O0FBQ0QsVUFBSUEsT0FBTyxLQUFLLENBQWhCLEVBQW1CO0FBQ2pCTSxxQkFBYSxDQUFDRixTQUFELENBQWI7QUFDRDtBQUNGLEtBUDRCLEVBTzFCLElBUDBCLENBQTdCO0FBUUEsV0FBTyxNQUFNRSxhQUFhLENBQUNGLFNBQUQsQ0FBMUI7QUFDRCxHQVZRLEVBVU4sQ0FBQ0osT0FBRCxDQVZNLENBQVQ7QUFZQUcsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUksT0FBTyxHQUFHQyxVQUFVLENBQUMsTUFBTTtBQUMvQkMsNkRBQUEsQ0FBWSxHQUFaO0FBQ0QsS0FGeUIsRUFFdkIsSUFGdUIsQ0FBMUI7QUFHQSxXQUFPLE1BQU1DLFlBQVksQ0FBQ0gsT0FBRCxDQUF6QjtBQUNELEdBTFEsRUFLTixFQUxNLENBQVQ7QUFPQSxzQkFDRSw4REFBQyx1REFBRDtBQUFRLFNBQUssRUFBQyxPQUFkO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVYLEVBQUUsQ0FBQyxXQUFELENBQWxCO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFFQSxFQUFFLENBQUMsWUFBRCxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUksaUJBQVMsRUFBRUEsRUFBRSxDQUFDLE9BQUQsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFBLG1CQUNHSSxPQURILGdDQUVFLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQSxpQ0FDRTtBQUFHLGdCQUFJLEVBQUMsR0FBUjtBQUFZLHFCQUFTLEVBQUVKLEVBQUUsQ0FBQyxhQUFELENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBaUJELENBdkNEOztBQXlDQSwrREFBZUcsUUFBZiIsImZpbGUiOiIuL3BhZ2VzLzQwNC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjYiBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLzQwNC5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IGNuID0gY2IuYmluZChzdHlsZXMpO1xuXG5jb25zdCBOb3RGb3VuZCA9ICgpID0+IHtcbiAgY29uc3QgW2NvdW50ZXIsIHNldENvdW50ZXJdID0gdXNlU3RhdGUoNSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjb3VudGRvd24gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoY291bnRlciA+IDApIHtcbiAgICAgICAgc2V0Q291bnRlcihjb3VudGVyIC0gMSk7XG4gICAgICB9XG4gICAgICBpZiAoY291bnRlciA9PT0gMCkge1xuICAgICAgICBjbGVhckludGVydmFsKGNvdW50ZG93bik7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoY291bnRkb3duKTtcbiAgfSwgW2NvdW50ZXJdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIFJvdXRlci5wdXNoKCcvJyk7XG4gICAgfSwgNTAwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT1cIk9vcHMhXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oJ2NvbnRhaW5lcicpfT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17Y24oJ251bV9fbGFiZWwnKX0+NDA0PC9oMj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT17Y24oJ2xhYmVsJyl9Pu2OmOydtOyngOulvCDssL7snYQg7IiYIOyXhuyKteuLiOuLpC48L2gzPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7Y291bnRlcn3stIgg7ZuEXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtjbignbGlua19fbGFiZWwnKX0+XG4gICAgICAgICAgICAgIOuplOyduO2OmOydtOyngFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICDroZwg7J2064+Z7ZWp64uI64ukLlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/404.js\n");

/***/ }),

/***/ "./pages/404.module.scss":
/*!*******************************!*\
  !*** ./pages/404.module.scss ***!
  \*******************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"__404_container__2NHzD\",\n\t\"num__label\": \"__404_num__label__2SdXT\",\n\t\"label\": \"__404_label__tqsrS\",\n\t\"link__label\": \"__404_link__label__aog2m\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJzdC1hZnJhbWUvLi9wYWdlcy80MDQubW9kdWxlLnNjc3M/ZmRkYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3BhZ2VzLzQwNC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIl9fNDA0X2NvbnRhaW5lcl9fMk5IekRcIixcblx0XCJudW1fX2xhYmVsXCI6IFwiX180MDRfbnVtX19sYWJlbF9fMlNkWFRcIixcblx0XCJsYWJlbFwiOiBcIl9fNDA0X2xhYmVsX190cXNyU1wiLFxuXHRcImxpbmtfX2xhYmVsXCI6IFwiX180MDRfbGlua19fbGFiZWxfX2FvZzJtXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/404.module.scss\n");

/***/ }),

/***/ "classnames/bind":
/*!**********************************!*\
  !*** external "classnames/bind" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("classnames/bind");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_Layout_index_js"], function() { return __webpack_exec__("./pages/404.js"); });
module.exports = __webpack_exports__;

})();
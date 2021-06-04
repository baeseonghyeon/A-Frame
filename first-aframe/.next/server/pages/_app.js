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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./api/games.js":
/*!**********************!*\
  !*** ./api/games.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getGames\": function() { return /* binding */ getGames; },\n/* harmony export */   \"getGameDetail\": function() { return /* binding */ getGameDetail; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getGames = async () => {\n  try {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get('http://localhost:9000/games');\n    return response.data;\n  } catch (e) {\n    return e;\n  }\n};\nconst getGameDetail = async id => {\n  try {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`http://localhost:9000/games/${id}`);\n    return response.data;\n  } catch (e) {\n    return e;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJzdC1hZnJhbWUvLi9hcGkvZ2FtZXMuanM/Y2I2MiJdLCJuYW1lcyI6WyJnZXRHYW1lcyIsInJlc3BvbnNlIiwiYXhpb3MiLCJkYXRhIiwiZSIsImdldEdhbWVEZXRhaWwiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRU8sTUFBTUEsUUFBUSxHQUFHLFlBQVk7QUFDbEMsTUFBSTtBQUNGLFVBQU1DLFFBQVEsR0FBRyxNQUFNQyxnREFBQSxDQUFVLDZCQUFWLENBQXZCO0FBQ0EsV0FBT0QsUUFBUSxDQUFDRSxJQUFoQjtBQUNELEdBSEQsQ0FHRSxPQUFPQyxDQUFQLEVBQVU7QUFDVixXQUFPQSxDQUFQO0FBQ0Q7QUFDRixDQVBNO0FBU0EsTUFBTUMsYUFBYSxHQUFHLE1BQU9DLEVBQVAsSUFBYztBQUN6QyxNQUFJO0FBQ0YsVUFBTUwsUUFBUSxHQUFHLE1BQU1DLGdEQUFBLENBQVcsK0JBQThCSSxFQUFHLEVBQTVDLENBQXZCO0FBQ0EsV0FBT0wsUUFBUSxDQUFDRSxJQUFoQjtBQUNELEdBSEQsQ0FHRSxPQUFPQyxDQUFQLEVBQVU7QUFDVixXQUFPQSxDQUFQO0FBQ0Q7QUFDRixDQVBNIiwiZmlsZSI6Ii4vYXBpL2dhbWVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IGdldEdhbWVzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjkwMDAvZ2FtZXMnKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0R2FtZURldGFpbCA9IGFzeW5jIChpZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjkwMDAvZ2FtZXMvJHtpZH1gKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/games.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api_games__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/games */ \"./api/games.js\");\n\n\nvar _jsxFileName = \"/Users/seonghyeon/Desktop/Work/Old-Rookie/Study/AFrame/first-aframe/pages/_app.js\";\n\n // import 'bootstrap/dist/css/bootstrap.css';\n\n\n\n\nconst app = props => {\n  const {\n    Component\n  } = props;\n  const {\n    0: games,\n    1: setGames\n  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {\n    (0,_api_games__WEBPACK_IMPORTED_MODULE_4__.getGames)().then(response => {\n      if (typeof response.message === 'string') {\n        alert(response.message);\n      } else {\n        setGames(response);\n      }\n    });\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {\n    document.addEventListener('deviceready', function () {\n      // After the 'deviceready' event, Cordova is ready for you to render your A-Frame scene.\n      document.getElementById('scene-root').innerHTML = document.getElementById('my-scene').innerHTML;\n    });\n  });\n  const title = 'A-Frame Tutorial';\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        href: \"//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css\",\n        rel: \"stylesheet\",\n        type: \"text/css\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"stylesheet\",\n        href: \"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css\",\n        integrity: \"sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l\",\n        crossOrigin: \"anonymous\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n        src: \"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js\",\n        integrity: \"sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW\",\n        crossOrigin: \"anonymous\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        // httpEquiv=\"Content-Security-Policy\"\n        content: \" default-src  'self'  data:  gap:  https://ssl.gstatic.com  'unsafe-eval'  https://cdn.aframe.io         <-- required https://dpdb.webvr.rocks      <-- required https://fonts.googleapis.com  <-- required ;  style-src  'self'  'unsafe-inline' ;  media-src *;  img-src  'self'  data:                         <-- required content:                      <-- required blob:                         <-- required ; \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n        src: \"https://aframe.io/releases/1.2.0/aframe.min.js\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n        src: \"https://unpkg.com/aframe-environment-component/dist/aframe-environment-component.min.js\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n        src: \"https://unpkg.com/aframe-physics-system@1.4.0/dist/aframe-physics-system.min.js\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n        src: \"https://cdn.jsdelivr.net/gh/n5ro/aframe-physics-system@v$npm_package_version/dist/aframe-physics-system.min.js\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      id: \"scene-root\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        data: games,\n        headerTitle: title,\n        id: \"scene-root\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJzdC1hZnJhbWUvLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiYXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJnYW1lcyIsInNldEdhbWVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRHYW1lcyIsInRoZW4iLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJhbGVydCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsR0FBRyxHQUFJQyxLQUFELElBQVc7QUFDckIsUUFBTTtBQUFFQztBQUFGLE1BQWdCRCxLQUF0QjtBQUVBLFFBQU07QUFBQSxPQUFDRSxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsK0NBQVEsQ0FBQyxJQUFELENBQWxDO0FBRUFDLGtEQUFTLENBQUMsTUFBTTtBQUNkQyx3REFBUSxHQUFHQyxJQUFYLENBQWlCQyxRQUFELElBQWM7QUFDNUIsVUFBSSxPQUFPQSxRQUFRLENBQUNDLE9BQWhCLEtBQTRCLFFBQWhDLEVBQTBDO0FBQ3hDQyxhQUFLLENBQUNGLFFBQVEsQ0FBQ0MsT0FBVixDQUFMO0FBQ0QsT0FGRCxNQUVPO0FBQ0xOLGdCQUFRLENBQUNLLFFBQUQsQ0FBUjtBQUNEO0FBQ0YsS0FORDtBQU9ELEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQUgsa0RBQVMsQ0FBQyxNQUFNO0FBQ2RNLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsYUFBMUIsRUFBeUMsWUFBWTtBQUNuRDtBQUNBRCxjQUFRLENBQUNFLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NDLFNBQXRDLEdBQ0VILFFBQVEsQ0FBQ0UsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsU0FEdEM7QUFFRCxLQUpEO0FBS0QsR0FOUSxDQUFUO0FBUUEsUUFBTUMsS0FBSyxHQUFHLGtCQUFkO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUEsa0JBQVFBO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQ0UsWUFBSSxFQUFDLDBEQURQO0FBRUUsV0FBRyxFQUFDLFlBRk47QUFHRSxZQUFJLEVBQUM7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBUUU7QUFDRSxXQUFHLEVBQUMsWUFETjtBQUVFLFlBQUksRUFBQyx5RUFGUDtBQUdFLGlCQUFTLEVBQUMseUVBSFo7QUFJRSxtQkFBVyxFQUFDO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRixlQWVFO0FBQ0UsV0FBRyxFQUFDLG9GQUROO0FBRUUsaUJBQVMsRUFBQyx5RUFGWjtBQUdFLG1CQUFXLEVBQUM7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWZGLGVBc0JFO0FBQ0U7QUFDQSxlQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXRCRixlQWlERTtBQUFRLFdBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakRGLGVBa0RFO0FBQVEsV0FBRyxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFsREYsZUFtREU7QUFBUSxXQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW5ERixlQW9ERTtBQUFRLFdBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQXVERTtBQUFLLFFBQUUsRUFBQyxZQUFSO0FBQUEsNkJBQ0UsOERBQUMsU0FBRDtBQUFXLFlBQUksRUFBRWIsS0FBakI7QUFBd0IsbUJBQVcsRUFBRWEsS0FBckM7QUFBNEMsVUFBRSxFQUFDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZERjtBQUFBLGtCQURGO0FBNkRELENBdEZEOztBQXdGQSwrREFBZWhCLEdBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuc2Nzcyc7XG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRHYW1lcyB9IGZyb20gJy4uL2FwaS9nYW1lcyc7XG5cbmNvbnN0IGFwcCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IENvbXBvbmVudCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW2dhbWVzLCBzZXRHYW1lc10gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEdhbWVzKCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgcmVzcG9uc2UubWVzc2FnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgYWxlcnQocmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRHYW1lcyhyZXNwb25zZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZXJlYWR5JywgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQWZ0ZXIgdGhlICdkZXZpY2VyZWFkeScgZXZlbnQsIENvcmRvdmEgaXMgcmVhZHkgZm9yIHlvdSB0byByZW5kZXIgeW91ciBBLUZyYW1lIHNjZW5lLlxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjZW5lLXJvb3QnKS5pbm5lckhUTUwgPVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktc2NlbmUnKS5pbm5lckhUTUw7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHRpdGxlID0gJ0EtRnJhbWUgVHV0b3JpYWwnO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cIi8vc3BvcWEuZ2l0aHViLmlvL3Nwb3FhLWhhbi1zYW5zL2Nzcy9TcG9xYUhhblNhbnNOZW8uY3NzXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDQuNi4wL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtQjB2UDV4bUFUdzErSzlLUlFqUUVSSnZUdW1RVzBuUEV6dkY2TC9aNm5yb25KM29VT0ZVRnBDakVVUW91cTIrbFwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMC1iZXRhMS9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQteWdiVjlraXFVYzZvYTRtc1huOTg2OHBUdFdNZ2lRYWVZSDcvdDdMRUNMYnlQQTJ4NjVLZ2Y4ME9KRmRyb2FmV1wiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuXG4gICAgICAgIHsvKiBBLUZyYW1lICovfVxuICAgICAgICA8bWV0YVxuICAgICAgICAgIC8vIGh0dHBFcXVpdj1cIkNvbnRlbnQtU2VjdXJpdHktUG9saWN5XCJcbiAgICAgICAgICBjb250ZW50PVwiXG4gICAgICAgICAgZGVmYXVsdC1zcmMgXG4gICAgICAgICAgICAnc2VsZicgXG4gICAgICAgICAgICBkYXRhOiBcbiAgICAgICAgICAgIGdhcDogXG4gICAgICAgICAgICBodHRwczovL3NzbC5nc3RhdGljLmNvbSBcbiAgICAgICAgICAgICd1bnNhZmUtZXZhbCcgXG4gICAgICAgICAgICBodHRwczovL2Nkbi5hZnJhbWUuaW8gICAgICAgICA8LS0gcmVxdWlyZWRcbiAgICAgICAgICAgIGh0dHBzOi8vZHBkYi53ZWJ2ci5yb2NrcyAgICAgIDwtLSByZXF1aXJlZFxuICAgICAgICAgICAgaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbSAgPC0tIHJlcXVpcmVkXG4gICAgICAgICAgICA7IFxuICAgICAgICAgIHN0eWxlLXNyYyBcbiAgICAgICAgICAgICdzZWxmJyBcbiAgICAgICAgICAgICd1bnNhZmUtaW5saW5lJ1xuICAgICAgICAgICAgOyBcbiAgICAgICAgICBtZWRpYS1zcmMgKjsgXG4gICAgICAgICAgaW1nLXNyYyBcbiAgICAgICAgICAgICdzZWxmJyBcbiAgICAgICAgICAgIGRhdGE6ICAgICAgICAgICAgICAgICAgICAgICAgIDwtLSByZXF1aXJlZFxuICAgICAgICAgICAgY29udGVudDogICAgICAgICAgICAgICAgICAgICAgPC0tIHJlcXVpcmVkXG4gICAgICAgICAgICBibG9iOiAgICAgICAgICAgICAgICAgICAgICAgICA8LS0gcmVxdWlyZWRcbiAgICAgICAgICAgIDtcbiAgICAgICAgXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vYWZyYW1lLmlvL3JlbGVhc2VzLzEuMi4wL2FmcmFtZS5taW4uanNcIiAvPlxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL2FmcmFtZS1lbnZpcm9ubWVudC1jb21wb25lbnQvZGlzdC9hZnJhbWUtZW52aXJvbm1lbnQtY29tcG9uZW50Lm1pbi5qc1wiIC8+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vYWZyYW1lLXBoeXNpY3Mtc3lzdGVtQDEuNC4wL2Rpc3QvYWZyYW1lLXBoeXNpY3Mtc3lzdGVtLm1pbi5qc1wiIC8+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL241cm8vYWZyYW1lLXBoeXNpY3Mtc3lzdGVtQHYkbnBtX3BhY2thZ2VfdmVyc2lvbi9kaXN0L2FmcmFtZS1waHlzaWNzLXN5c3RlbS5taW4uanNcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBpZD1cInNjZW5lLXJvb3RcIj5cbiAgICAgICAgPENvbXBvbmVudCBkYXRhPXtnYW1lc30gaGVhZGVyVGl0bGU9e3RpdGxlfSBpZD1cInNjZW5lLXJvb3RcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (function() {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
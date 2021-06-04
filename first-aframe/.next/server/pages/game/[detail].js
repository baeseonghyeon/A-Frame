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
exports.id = "pages/game/[detail]";
exports.ids = ["pages/game/[detail]"];
exports.modules = {

/***/ "./api/games.js":
/*!**********************!*\
  !*** ./api/games.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getGames\": function() { return /* binding */ getGames; },\n/* harmony export */   \"getGameDetail\": function() { return /* binding */ getGameDetail; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getGames = async () => {\n  try {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get('http://localhost:9000/games');\n    return response.data;\n  } catch (e) {\n    return e;\n  }\n};\nconst getGameDetail = async id => {\n  try {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`http://localhost:9000/games/${id}`);\n    return response.data;\n  } catch (e) {\n    return e;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJzdC1hZnJhbWUvLi9hcGkvZ2FtZXMuanM/Y2I2MiJdLCJuYW1lcyI6WyJnZXRHYW1lcyIsInJlc3BvbnNlIiwiYXhpb3MiLCJkYXRhIiwiZSIsImdldEdhbWVEZXRhaWwiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRU8sTUFBTUEsUUFBUSxHQUFHLFlBQVk7QUFDbEMsTUFBSTtBQUNGLFVBQU1DLFFBQVEsR0FBRyxNQUFNQyxnREFBQSxDQUFVLDZCQUFWLENBQXZCO0FBQ0EsV0FBT0QsUUFBUSxDQUFDRSxJQUFoQjtBQUNELEdBSEQsQ0FHRSxPQUFPQyxDQUFQLEVBQVU7QUFDVixXQUFPQSxDQUFQO0FBQ0Q7QUFDRixDQVBNO0FBU0EsTUFBTUMsYUFBYSxHQUFHLE1BQU9DLEVBQVAsSUFBYztBQUN6QyxNQUFJO0FBQ0YsVUFBTUwsUUFBUSxHQUFHLE1BQU1DLGdEQUFBLENBQVcsK0JBQThCSSxFQUFHLEVBQTVDLENBQXZCO0FBQ0EsV0FBT0wsUUFBUSxDQUFDRSxJQUFoQjtBQUNELEdBSEQsQ0FHRSxPQUFPQyxDQUFQLEVBQVU7QUFDVixXQUFPQSxDQUFQO0FBQ0Q7QUFDRixDQVBNIiwiZmlsZSI6Ii4vYXBpL2dhbWVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IGdldEdhbWVzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjkwMDAvZ2FtZXMnKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0R2FtZURldGFpbCA9IGFzeW5jIChpZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjkwMDAvZ2FtZXMvJHtpZH1gKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/games.js\n");

/***/ }),

/***/ "./pages/game/[detail].js":
/*!********************************!*\
  !*** ./pages/game/[detail].js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_games__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/games */ \"./api/games.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout/index.js\");\n\nvar _jsxFileName = \"/Users/seonghyeon/Desktop/Work/Old-Rookie/Study/AFrame/first-aframe/pages/game/[detail].js\";\n// import Link from 'next/link';\n\n\n\n // import styles from './About.module.scss';\n\nconst Detail = () => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const {\n    0: data,\n    1: setData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    if (router) {\n      (0,_api_games__WEBPACK_IMPORTED_MODULE_3__.getGameDetail)(router.query.detail).then(response => {\n        if (typeof response.message === 'string') {\n          console.log(response.message);\n        } else {\n          setData(response);\n        }\n      });\n    }\n  }, [router]);\n\n  if (data) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {\n      title: data.title,\n      children: data && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a-scene\", {\n          physics: \"debug: true\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a-assets\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              style: {\n                display: 'none'\n              },\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                id: \"groundTexture\",\n                src: \"https://cdn.aframe.io/a-painter/images/floor.jpg\",\n                alt: \"groundTexture\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 33,\n                columnNumber: 19\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 17\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a-entity\", {\n            camera: true,\n            \"look-controls\": true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a-plane\", {\n            \"static-body\": true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a-box\", {\n            \"static-body\": true,\n            position: \"0 0.5 -5\",\n            width: \"3\",\n            height: \"1\",\n            depth: \"1\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a-box\", {\n            \"dynamic-body\": true,\n            position: \"5 0.5 0\",\n            width: \"1\",\n            height: \"1\",\n            depth: \"1\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a-box\", {\n            \"dynamic-body\": true,\n            position: \"5 5 0\",\n            width: \"20\",\n            height: \"10\",\n            depth: \"20\",\n            color: \"gray\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a-plane\", {\n            rotation: \"-90 0 0\",\n            width: \"30\",\n            height: \"30\",\n            color: \"black\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 15\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 13\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, undefined);\n  }\n\n  return false;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJzdC1hZnJhbWUvLi9wYWdlcy9nYW1lL1tkZXRhaWxdLmpzPzYzOGEiXSwibmFtZXMiOlsiRGV0YWlsIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGF0YSIsInNldERhdGEiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldEdhbWVEZXRhaWwiLCJxdWVyeSIsImRldGFpbCIsInRoZW4iLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDbkIsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQyxJQUFELENBQWhDO0FBRUFDLGtEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUlMLE1BQUosRUFBWTtBQUNWTSwrREFBYSxDQUFDTixNQUFNLENBQUNPLEtBQVAsQ0FBYUMsTUFBZCxDQUFiLENBQW1DQyxJQUFuQyxDQUF5Q0MsUUFBRCxJQUFjO0FBQ3BELFlBQUksT0FBT0EsUUFBUSxDQUFDQyxPQUFoQixLQUE0QixRQUFoQyxFQUEwQztBQUN4Q0MsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZSCxRQUFRLENBQUNDLE9BQXJCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xSLGlCQUFPLENBQUNPLFFBQUQsQ0FBUDtBQUNEO0FBQ0YsT0FORDtBQU9EO0FBQ0YsR0FWUSxFQVVOLENBQUNWLE1BQUQsQ0FWTSxDQUFUOztBQVlBLE1BQUlFLElBQUosRUFBVTtBQUNSLHdCQUNFLDhEQUFDLHVEQUFEO0FBQVEsV0FBSyxFQUFFQSxJQUFJLENBQUNZLEtBQXBCO0FBQUEsZ0JBQ0daLElBQUksaUJBQ0g7QUFBQSwrQkFDRTtBQUFTLGlCQUFPLEVBQUMsYUFBakI7QUFBQSxrQ0FDRTtBQUFBLG1DQUNFO0FBQU0sbUJBQUssRUFBRTtBQUFFYSx1QkFBTyxFQUFFO0FBQVgsZUFBYjtBQUFBLHFDQUNFO0FBQ0Usa0JBQUUsRUFBQyxlQURMO0FBRUUsbUJBQUcsRUFBQyxrREFGTjtBQUdFLG1CQUFHLEVBQUM7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFXRTtBQUFVLGtCQUFNLE1BQWhCO0FBQWlCO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWEYsZUFhRTtBQUFTO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFiRixlQWVFO0FBQ0UsK0JBREY7QUFFRSxvQkFBUSxFQUFDLFVBRlg7QUFHRSxpQkFBSyxFQUFDLEdBSFI7QUFJRSxrQkFBTSxFQUFDLEdBSlQ7QUFLRSxpQkFBSyxFQUFDO0FBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFmRixlQXVCRTtBQUNFLGdDQURGO0FBRUUsb0JBQVEsRUFBQyxTQUZYO0FBR0UsaUJBQUssRUFBQyxHQUhSO0FBSUUsa0JBQU0sRUFBQyxHQUpUO0FBS0UsaUJBQUssRUFBQztBQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBdkJGLGVBK0JFO0FBQ0UsZ0NBREY7QUFFRSxvQkFBUSxFQUFDLE9BRlg7QUFHRSxpQkFBSyxFQUFDLElBSFI7QUFJRSxrQkFBTSxFQUFDLElBSlQ7QUFLRSxpQkFBSyxFQUFDLElBTFI7QUFNRSxpQkFBSyxFQUFDO0FBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkEvQkYsZUF3Q0U7QUFDRSxvQkFBUSxFQUFDLFNBRFg7QUFFRSxpQkFBSyxFQUFDLElBRlI7QUFHRSxrQkFBTSxFQUFDLElBSFQ7QUFJRSxpQkFBSyxFQUFDO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkF4Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUF1REQ7O0FBQ0QsU0FBTyxLQUFQO0FBQ0QsQ0EzRUQ7O0FBNkVBLCtEQUFlaEIsTUFBZiIsImZpbGUiOiIuL3BhZ2VzL2dhbWUvW2RldGFpbF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldEdhbWVEZXRhaWwgfSBmcm9tICcuLi8uLi9hcGkvZ2FtZXMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gJy4vQWJvdXQubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBEZXRhaWwgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJvdXRlcikge1xuICAgICAgZ2V0R2FtZURldGFpbChyb3V0ZXIucXVlcnkuZGV0YWlsKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHJlc3BvbnNlLm1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0RGF0YShyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3JvdXRlcl0pO1xuXG4gIGlmIChkYXRhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgdGl0bGU9e2RhdGEudGl0bGV9PlxuICAgICAgICB7ZGF0YSAmJiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhLXNjZW5lIHBoeXNpY3M9XCJkZWJ1ZzogdHJ1ZVwiPlxuICAgICAgICAgICAgICA8YS1hc3NldHM+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBpZD1cImdyb3VuZFRleHR1cmVcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5hZnJhbWUuaW8vYS1wYWludGVyL2ltYWdlcy9mbG9vci5qcGdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJncm91bmRUZXh0dXJlXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2EtYXNzZXRzPlxuXG4gICAgICAgICAgICAgIDxhLWVudGl0eSBjYW1lcmEgbG9vay1jb250cm9scyAvPlxuXG4gICAgICAgICAgICAgIDxhLXBsYW5lIHN0YXRpYy1ib2R5IC8+XG5cbiAgICAgICAgICAgICAgPGEtYm94XG4gICAgICAgICAgICAgICAgc3RhdGljLWJvZHlcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj1cIjAgMC41IC01XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjNcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjFcIlxuICAgICAgICAgICAgICAgIGRlcHRoPVwiMVwiXG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPGEtYm94XG4gICAgICAgICAgICAgICAgZHluYW1pYy1ib2R5XG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCI1IDAuNSAwXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjFcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjFcIlxuICAgICAgICAgICAgICAgIGRlcHRoPVwiMVwiXG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPGEtYm94XG4gICAgICAgICAgICAgICAgZHluYW1pYy1ib2R5XG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCI1IDUgMFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTBcIlxuICAgICAgICAgICAgICAgIGRlcHRoPVwiMjBcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JheVwiXG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPGEtcGxhbmVcbiAgICAgICAgICAgICAgICByb3RhdGlvbj1cIi05MCAwIDBcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzBcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYS1zY2VuZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/game/[detail].js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_Layout_index_js"], function() { return __webpack_exec__("./pages/game/[detail].js"); });
module.exports = __webpack_exports__;

})();
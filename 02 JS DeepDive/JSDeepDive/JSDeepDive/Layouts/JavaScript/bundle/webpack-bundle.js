/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _login = __webpack_require__(1);\n\nvar _utils = __webpack_require__(2);\n\ndebugger;\n(0, _login.login)('admin', 'pwd');\n\nvar u = new _utils.Utils();\nu.log(\"all loaded and executed!\");\n\nconsole.log(u.getUsers());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanM/ZDhlZSJdLCJuYW1lcyI6WyJ1IiwibG9nIiwiY29uc29sZSIsImdldFVzZXJzIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUdBO0FBQ0Esa0JBQU0sT0FBTixFQUFlLEtBQWY7O0FBRUEsSUFBSUEsSUFBSSxrQkFBUjtBQUNBQSxFQUFFQyxHQUFGLENBQU0sMEJBQU47O0FBRUFDLFFBQVFELEdBQVIsQ0FBWUQsRUFBRUcsUUFBRixFQUFaIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2xvZ2lufSBmcm9tIFwiLi9sb2dpblwiXHJcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuL3V0aWxzXCJcclxuXHJcblxyXG5kZWJ1Z2dlcjtcclxubG9naW4oJ2FkbWluJywgJ3B3ZCcpO1xyXG5cclxubGV0IHUgPSBuZXcgVXRpbHMoKTtcclxudS5sb2coXCJhbGwgbG9hZGVkIGFuZCBleGVjdXRlZCFcIik7XHJcblxyXG5jb25zb2xlLmxvZyh1LmdldFVzZXJzKCkpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar login = function login(usrname, password) {\n    if (usrname !== 'admin' || password !== 'pwd') {\n        console.log('incorrect login');\n    } else {\n        console.log('logged in using ' + usrname + ' and ' + password);\n    }\n};\n\nexports.login = login;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sb2dpbi5qcz8xZGY5Il0sIm5hbWVzIjpbImxvZ2luIiwidXNybmFtZSIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsSUFBSUEsUUFBUSxTQUFTQSxLQUFULENBQWVDLE9BQWYsRUFBd0JDLFFBQXhCLEVBQWtDO0FBQzFDLFFBQUlELFlBQVksT0FBWixJQUF1QkMsYUFBYSxLQUF4QyxFQUErQztBQUMzQ0MsZ0JBQVFDLEdBQVIsQ0FBWSxpQkFBWjtBQUNILEtBRkQsTUFFTztBQUNIRCxnQkFBUUMsR0FBUixzQkFBK0JILE9BQS9CLGFBQThDQyxRQUE5QztBQUNIO0FBQ0osQ0FORDs7UUFRUUYsSyxHQUFBQSxLIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubGV0IGxvZ2luID0gZnVuY3Rpb24gbG9naW4odXNybmFtZSwgcGFzc3dvcmQpIHtcclxuICAgIGlmICh1c3JuYW1lICE9PSAnYWRtaW4nIHx8IHBhc3N3b3JkICE9PSAncHdkJykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbmNvcnJlY3QgbG9naW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGxvZ2dlZCBpbiB1c2luZyAke3Vzcm5hbWV9IGFuZCAke3Bhc3N3b3JkfWApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHtsb2dpbn07IFxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9sb2dpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Utils = exports.Utils = function () {\n    function Utils() {\n        _classCallCheck(this, Utils);\n    }\n\n    _createClass(Utils, [{\n        key: \"log\",\n        value: function log(msg) {\n            console.log(msg);\n        }\n    }, {\n        key: \"writeDate\",\n        value: function writeDate() {\n            //return moment(new Date()).format(\"LTS\");\n        }\n    }, {\n        key: \"getUsers\",\n        value: function getUsers() {\n            var url = \"http://sp2016/_api/Web/lists/getbytitle('User Information List')/items\";\n            $.ajax({\n                type: \"GET\",\n                url: url,\n                contentType: \"application/json; charset=utf-8\",\n                dataType: \"json\",\n                success: function success(data) {\n                    console.log(\"Users in the Root Web: \", data.value);\n                },\n                error: function error(msg) {\n                    console.log(\"GetVouchers query error\", msg);\n                }\n            });\n        }\n    }]);\n\n    return Utils;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy5qcz9lOGZiIl0sIm5hbWVzIjpbIlV0aWxzIiwibXNnIiwiY29uc29sZSIsImxvZyIsInVybCIsIiQiLCJhamF4IiwidHlwZSIsImNvbnRlbnRUeXBlIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwiZGF0YSIsInZhbHVlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFDYUEsSyxXQUFBQSxLOzs7Ozs7OzRCQUVMQyxHLEVBQUs7QUFDTEMsb0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNIOzs7b0NBRVc7QUFDUjtBQUNIOzs7bUNBRVU7QUFDUCxnQkFBSUcsTUFBTSx3RUFBVjtBQUNBQyxjQUFFQyxJQUFGLENBQU87QUFDSEMsc0JBQU0sS0FESDtBQUVISCxxQkFBS0EsR0FGRjtBQUdISSw2QkFBYSxpQ0FIVjtBQUlIQywwQkFBVSxNQUpQO0FBS0hDLHlCQUFTLGlCQUFTQyxJQUFULEVBQWU7QUFDcEJULDRCQUFRQyxHQUFSLENBQVkseUJBQVosRUFBdUNRLEtBQUtDLEtBQTVDO0FBQ0gsaUJBUEU7QUFRSEMsdUJBQU8sZUFBU1osR0FBVCxFQUFjO0FBQ2pCQyw0QkFBUUMsR0FBUixDQUFZLHlCQUFaLEVBQXVDRixHQUF2QztBQUNIO0FBVkUsYUFBUDtBQVlIIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGNsYXNzIFV0aWxzIHtcclxuXHJcbiAgICBsb2cobXNnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgIH1cclxuXHJcbiAgICB3cml0ZURhdGUoKSB7XHJcbiAgICAgICAgLy9yZXR1cm4gbW9tZW50KG5ldyBEYXRlKCkpLmZvcm1hdChcIkxUU1wiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0VXNlcnMoKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IFwiaHR0cDovL3NwMjAxNi9fYXBpL1dlYi9saXN0cy9nZXRieXRpdGxlKCdVc2VyIEluZm9ybWF0aW9uIExpc3QnKS9pdGVtc1wiO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2VycyBpbiB0aGUgUm9vdCBXZWI6IFwiLCBkYXRhLnZhbHVlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKG1zZykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHZXRWb3VjaGVycyBxdWVyeSBlcnJvclwiLCBtc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);
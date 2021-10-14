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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "assets/scripts/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/SharePlace.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/SharePlace.js":
/*!***************************!*\
  !*** ./src/SharePlace.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ui_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ui/modal */ \"./src/Ui/modal.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar PlaceFinder = /*#__PURE__*/function () {\n  function PlaceFinder() {\n    _classCallCheck(this, PlaceFinder);\n\n    var addressForm = document.querySelector('form');\n    var locateUserBtn = document.getElementById('locate-btn');\n    locateUserBtn.addEventListener('click', this.locateUserHandler);\n    addressForm.addEventListener('submit', this.findAddressHandler);\n  }\n\n  _createClass(PlaceFinder, [{\n    key: \"locateUserHandler\",\n    value: function locateUserHandler() {\n      if (!navigator.geolocation) {\n        alert('location feature not available on your browser!!');\n        return;\n      } else {\n        var modal = new _Ui_modal__WEBPACK_IMPORTED_MODULE_0__[\"Modal\"]('loading-modal-content', 'Loading location please wait');\n        modal.show();\n        navigator.geolocation.getCurrentPosition(function (success) {\n          modal.hide();\n          var coordinates = {\n            lat: success.coords.latitude,\n            lng: success.coords.longitude\n          };\n          console.log(coordinates);\n        }, function (error) {\n          alert('could not locate you , please enter a address manually ');\n        });\n      }\n    }\n  }, {\n    key: \"findAddressHandler\",\n    value: function findAddressHandler() {}\n  }]);\n\n  return PlaceFinder;\n}();\n\nnew PlaceFinder();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2hhcmVQbGFjZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9TaGFyZVBsYWNlLmpzP2Q1YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuL1VpL21vZGFsJztcblxuY2xhc3MgUGxhY2VGaW5kZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBhZGRyZXNzRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICBjb25zdCBsb2NhdGVVc2VyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0ZS1idG4nKTtcblxuICAgIGxvY2F0ZVVzZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmxvY2F0ZVVzZXJIYW5kbGVyKTtcbiAgICBhZGRyZXNzRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmZpbmRBZGRyZXNzSGFuZGxlcik7XG4gIH1cblxuICBsb2NhdGVVc2VySGFuZGxlcigpIHtcbiAgICBpZiAoIW5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgYWxlcnQoJ2xvY2F0aW9uIGZlYXR1cmUgbm90IGF2YWlsYWJsZSBvbiB5b3VyIGJyb3dzZXIhIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbChcbiAgICAgICAgJ2xvYWRpbmctbW9kYWwtY29udGVudCcsXG4gICAgICAgICdMb2FkaW5nIGxvY2F0aW9uIHBsZWFzZSB3YWl0J1xuICAgICAgKTtcblxuICAgICAgbW9kYWwuc2hvdygpO1xuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihcbiAgICAgICAgKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgICBtb2RhbC5oaWRlKCk7XG4gICAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSB7XG4gICAgICAgICAgICBsYXQ6IHN1Y2Nlc3MuY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG5nOiBzdWNjZXNzLmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlcyk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIGFsZXJ0KCdjb3VsZCBub3QgbG9jYXRlIHlvdSAsIHBsZWFzZSBlbnRlciBhIGFkZHJlc3MgbWFudWFsbHkgJyk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGZpbmRBZGRyZXNzSGFuZGxlcigpIHt9XG59XG5cbm5ldyBQbGFjZUZpbmRlcigpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7OztBQUNBOzs7Ozs7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/SharePlace.js\n");

/***/ }),

/***/ "./src/Ui/modal.js":
/*!*************************!*\
  !*** ./src/Ui/modal.js ***!
  \*************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Modal\", function() { return Modal; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal(contentId) {\n    _classCallCheck(this, Modal);\n\n    this.fallbackText = fallbackText;\n    this.contentTemplateElement = document.getElementById(contentId);\n    this.modalTemplateEl = document.getElementById('modal-template');\n  }\n\n  _createClass(Modal, [{\n    key: \"show\",\n    value: function show() {\n      if ('content' in document.createElement('template')) {\n        var modalContent = document.importNode(this.modalTemplateEl.content, true);\n        var modalElement = modalContent.querySelector('.modal');\n        var backdropElement = modalContent.querySelector('.backdrop');\n        var contentElement = document.importNode(this.contentTemplateElement.content, true);\n        modalElement.appendChild(contentElement);\n        document.body.insertAdjacentElement('afterbegin', modalElement);\n        document.body.insertAdjacentElement('afterbegin', backdropElement);\n      } else {\n        alert(this.fallbackText);\n      }\n    }\n  }, {\n    key: \"hide\",\n    value: function hide() {}\n  }]);\n\n  return Modal;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVWkvbW9kYWwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvVWkvbW9kYWwuanM/OGZlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTW9kYWwge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50SWQpIHtcbiAgICB0aGlzLmZhbGxiYWNrVGV4dCA9IGZhbGxiYWNrVGV4dDtcbiAgICB0aGlzLmNvbnRlbnRUZW1wbGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250ZW50SWQpO1xuICAgIHRoaXMubW9kYWxUZW1wbGF0ZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLXRlbXBsYXRlJyk7XG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICgnY29udGVudCcgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKSkge1xuICAgICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShcbiAgICAgICAgdGhpcy5tb2RhbFRlbXBsYXRlRWwuY29udGVudCxcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcblxuICAgICAgY29uc3QgbW9kYWxFbGVtZW50ID0gbW9kYWxDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgICAgY29uc3QgYmFja2Ryb3BFbGVtZW50ID0gbW9kYWxDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZHJvcCcpO1xuXG4gICAgICBjb25zdCBjb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUoXG4gICAgICAgIHRoaXMuY29udGVudFRlbXBsYXRlRWxlbWVudC5jb250ZW50LFxuICAgICAgICB0cnVlXG4gICAgICApO1xuXG4gICAgICBtb2RhbEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudEVsZW1lbnQpO1xuXG4gICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIG1vZGFsRWxlbWVudCk7XG4gICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIGJhY2tkcm9wRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KHRoaXMuZmFsbGJhY2tUZXh0KTtcbiAgICB9XG4gIH1cbiAgaGlkZSgpIHt9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0JBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Ui/modal.js\n");

/***/ })

/******/ });
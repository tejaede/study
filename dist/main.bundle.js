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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./spec/structure/min-stack.js */ \"./spec/structure/min-stack.js\");\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./spec/structure/min-stack.js":
/*!*************************************!*\
  !*** ./spec/structure/min-stack.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var MinStack = __webpack_require__(/*! ./../../structure/min-stack */ \"./structure/min-stack.js\").MinStack;\n\n\ndescribe(\"MinStack\", function () {\n\n    var stack;\n    beforeEach(function () {\n        stack = new MinStack();\n    });\n\n    it(\"can be created empty\", function () {\n        expect(stack).toBeDefined();\n        expect(stack.min).toBe(Infinity);\n        expect(stack.pop()).toBe(null);\n    });\n\n    it(\"can push\", function () {\n        stack.push(2);\n        stack.push(2);\n        expect(stack.min).toBe(2);\n        stack.push(1);\n        expect(stack.min).toBe(1);\n        stack.push(3);\n        expect(stack.min).toBe(1);\n    });\n\n    it(\"can pop\", function () {\n        stack.push(4);\n        stack.push(5);\n        stack.push(3);\n        stack.push(6);\n        expect(stack.min).toBe(3);\n\n        expect(stack.pop()).toBe(6);\n        expect(stack.min).toBe(3);\n\n\n        expect(stack.pop()).toBe(3);\n        expect(stack.min).toBe(4);\n\n        expect(stack.pop()).toBe(5);\n        expect(stack.min).toBe(4);\n\n        expect(stack.pop()).toBe(4);\n        expect(stack.min).toBe(Infinity);\n    });\n\n});\n\n//# sourceURL=webpack:///./spec/structure/min-stack.js?");

/***/ }),

/***/ "./structure/min-stack.js":
/*!********************************!*\
  !*** ./structure/min-stack.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MinStack() {};\n\nfunction Node() {}\nObject.defineProperties(Node.prototype, {\n    min: {\n        value: Infinity,\n        writable: true\n    },\n    value: {\n        value: undefined,\n        writable: true\n    }\n});\nObject.defineProperties(Node, {\n    withValueAndMin: {\n        value: function (value, min) {\n            var node = new Node();\n            node.value = value;\n            node.min = min;\n            return node;\n        }\n    }\n});\n\nObject.defineProperties(MinStack.prototype, {\n    _array: {\n        get: function () {\n            if (!this.__array) {\n                this.__array = [];\n            }\n            return this.__array;\n        }\n    },\n    min: {\n        get: function () {\n            var len = this._array.length;\n            if (!len) {\n                return Infinity;\n            }\n            return this._array[len - 1].min;\n        }\n    },\n    pop: {\n        value: function () {\n            if (!this._array.length) {\n                return null;\n            }\n            return this._array.pop().value;\n        }\n    },\n    push: {\n        value: function (value) {\n            var min = this.min;\n            min = min !== null ? min : Infinity;\n            min = Math.min(value, min);\n            node = Node.withValueAndMin(value, min);\n            this._array.push(node);\n        }\n    }\n});\n\nmodule.exports.MinStack = MinStack;\n\n//# sourceURL=webpack:///./structure/min-stack.js?");

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map
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

eval("/************************************************\n * Data Structures\n */\n__webpack_require__(/*! ./spec/structure/min-stack.js */ \"./spec/structure/min-stack.js\");\n__webpack_require__(/*! ./spec/structure/queue-with-stacks.js */ \"./spec/structure/queue-with-stacks.js\");\n__webpack_require__(/*! ./spec/structure/tree-node.js */ \"./spec/structure/tree-node.js\");\n\n\n/************************************************\n * Sort\n */\n__webpack_require__(/*! ./spec/sort/merge-sort.js */ \"./spec/sort/merge-sort.js\");\n\n\n/************************************************\n * Trees\n */\n__webpack_require__(/*! ./spec/tree/is-balanced.js */ \"./spec/tree/is-balanced.js\");\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./sort/merge-sort.js":
/*!****************************!*\
  !*** ./sort/merge-sort.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/************************************************\n * Standard\n */\nfunction mergeSort(array) {\n    var length = array && array.length,\n        midpoint;\n\n    if (!length) {\n        return [];\n    } else if (length === 1) {\n        return array;\n    } else {\n        midpoint = Math.floor(length / 2);\n        return merge(mergeSort(array.slice(0, midpoint)), mergeSort(array.slice(midpoint)));\n    }\n}\n\nfunction merge(arrayA, arrayB) {\n    var aLength = arrayA.length,\n        bLength = arrayB.length,\n        result = [],\n        i = 0, j = 0, \n        aValue, bValue;\n\n    while (result.length < (aLength + bLength)) {\n        aValue = arrayA[i];\n        aValue = aValue === undefined ? Infinity : aValue;\n        bValue = arrayB[j];\n        bValue = bValue === undefined ? Infinity : bValue;\n\n        if (aValue < bValue) {\n            result.push(aValue);\n            i++;\n        } else {\n            result.push(bValue);\n            j++;\n        }\n    }\n    return result;\n}\n\n/************************************************\n * In Place\n */\nfunction mergeSortInPlace (array) {\n    var length = array && array.length;\n    if (!length || length === 1) {\n        return array;\n    }\n    return _mergeSortInPlace(array, 0, length - 1);\n}\n\nfunction _mergeSortInPlace(array, start, end) {\n    var length = count(start, end),\n        delta = Math.floor(length / 2),\n        mp = start + delta, initial = array.slice(start, end + 1);\n\n    \n    if (length === 2) {\n        mergeInPlace(array, start, mp, end, end);\n    } else if (length > 2) {\n        _mergeSortInPlace(array, start, mp);\n        _mergeSortInPlace(array, mp + 1, end);\n        mergeInPlace(array, start, mp, mp + 1, end);\n    }\n    return array;\n}\n\nfunction count(startIndex, endIndex) {\n    var delta = endIndex - startIndex;\n    return delta < 0 ? 0 : delta + 1;\n}\n\nfunction mergeInPlace(array, startA, endA, startB, endB) {\n    var a = startA, \n        b = startB,\n        index = startA,\n        aValue, bValue;\n\n    \n\n    while (index < endB) {\n        aValue = a > endA ? Infinity : array[a];  //Can't place any more A items        \n        bValue = b > endB ? Infinity : array[b];  //Can't place any more B items\n\n        if (a > endA) {\n            //All a's are placed, we should continue with all items from B...\n        } else if (aValue < bValue) {\n            //aValue is in correct place, increment 'a' pointer\n            a++;\n        } else if (b <= endB) {\n            //move bValue to position of index, shift all remaining items right\n            moveLeft(array, b, index);\n            a++;\n            b++;\n        }\n        index++;\n    }\n    return array;\n}\n\nfunction moveLeft(array, start, destination) {\n    var i = start, \n        value = array[start];\n\n    while (i > destination) {\n        array[i] = array[i - 1];\n        i--;\n    }\n    array[destination] = value;\n}\n\nmodule.exports = {\n    sort: mergeSort,\n    sortInPlace: mergeSortInPlace\n};\n\n//# sourceURL=webpack:///./sort/merge-sort.js?");

/***/ }),

/***/ "./spec/sort/merge-sort.js":
/*!*********************************!*\
  !*** ./spec/sort/merge-sort.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var MergeSort = __webpack_require__(/*! ./../../sort/merge-sort */ \"./sort/merge-sort.js\");\n\n\ndescribe(\"MergeSort\", function () {\n\n    var unsorted, sorted;\n\n    it(\"can sort empty array\", function () {\n        unsorted = [];\n        sorted = MergeSort.sort(unsorted);\n        expect(sorted.length).toBe(0);\n    });\n\n    it(\"can sort single element array\", function () {\n        unsorted = [5];\n        sorted = MergeSort.sort(unsorted);\n        expect(sorted.length).toBe(1);\n        expect(sorted[0]).toBe(5);\n    });\n\n    it(\"can sort two element array\", function () {\n        unsorted = [2, 1];\n        sorted = MergeSort.sort(unsorted);\n        expect(sorted.length).toBe(2);\n        expect(sorted[0]).toBe(1);\n        expect(sorted[1]).toBe(2);\n    });\n\n    it(\"can sort three element array\", function () {\n        unsorted = [2, 1, 4];\n        sorted = MergeSort.sort(unsorted);\n        expect(sorted.length).toBe(3);\n        expect(sorted[0]).toBe(1);\n        expect(sorted[1]).toBe(2);\n        expect(sorted[2]).toBe(4);\n    });\n\n    it(\"can sort n array\", function () {\n        unsorted = [3, 13, 8, 2, 1, 4, 6, 50];\n        sorted = MergeSort.sort(unsorted);\n        expect(sorted.length).toBe(8);\n        expect(sorted[0]).toBe(1);\n        expect(sorted[1]).toBe(2);\n        expect(sorted[2]).toBe(3);\n        expect(sorted[3]).toBe(4);\n        expect(sorted[4]).toBe(6);\n        expect(sorted[5]).toBe(8);\n        expect(sorted[6]).toBe(13);\n        expect(sorted[7]).toBe(50);\n    });\n\n\n    describe(\"in place\", function () {\n        it(\"can sort empty array\", function () {\n            unsorted = [];\n            sorted = MergeSort.sortInPlace(unsorted);\n            expect(sorted.length).toBe(0);\n        });\n    \n        it(\"can sort single element array\", function () {\n            unsorted = [5];\n            sorted = MergeSort.sortInPlace(unsorted);\n            expect(sorted.length).toBe(1);\n            expect(sorted[0]).toBe(5);\n        });\n    \n        it(\"can sort two element array\", function () {\n            unsorted = [2, 1];\n            sorted = MergeSort.sortInPlace(unsorted);\n            expect(sorted.length).toBe(2);\n            expect(sorted[0]).toBe(1);\n            expect(sorted[1]).toBe(2);\n        });\n    \n        it(\"can sort three element array\", function () {\n            unsorted = [2, 1, 4];\n            sorted = MergeSort.sortInPlace(unsorted);\n            expect(sorted.length).toBe(3);\n            expect(sorted[0]).toBe(1);\n            expect(sorted[1]).toBe(2);\n            expect(sorted[2]).toBe(4);\n        });\n\n        it(\"can sort n array\", function () {\n            unsorted = [3, 13, 8, 2, 1, 4, 6, 50];\n            sorted = unsorted;\n            MergeSort.sortInPlace(unsorted);\n            expect(sorted.length).toBe(8);\n            expect(sorted[0]).toBe(1);\n            expect(sorted[1]).toBe(2);\n            expect(sorted[2]).toBe(3);\n            expect(sorted[3]).toBe(4);\n            expect(sorted[4]).toBe(6);\n            expect(sorted[5]).toBe(8);\n            expect(sorted[6]).toBe(13);\n            expect(sorted[7]).toBe(50);\n        });\n    });\n    \n\n});\n\n//# sourceURL=webpack:///./spec/sort/merge-sort.js?");

/***/ }),

/***/ "./spec/structure/min-stack.js":
/*!*************************************!*\
  !*** ./spec/structure/min-stack.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var MinStack = __webpack_require__(/*! ./../../structure/min-stack */ \"./structure/min-stack.js\").MinStack;\n\n\ndescribe(\"MinStack\", function () {\n\n    var stack;\n    beforeEach(function () {\n        stack = new MinStack();\n    });\n\n    it(\"can be created empty\", function () {\n        expect(stack).toBeDefined();\n        expect(stack.min).toBe(Infinity);\n        expect(stack.pop()).toBe(null);\n    });\n\n    it(\"can push\", function () {\n        stack.push(2);\n        stack.push(2);\n        expect(stack.min).toBe(2);\n        stack.push(1);\n        expect(stack.min).toBe(1);\n        stack.push(3);\n        expect(stack.min).toBe(1);\n    });\n\n    it(\"can pop\", function () {\n        stack.push(4);\n        stack.push(5);\n        stack.push(3);\n        stack.push(6);\n        expect(stack.min).toBe(3);\n\n        expect(stack.pop()).toBe(6);\n        expect(stack.min).toBe(3);\n\n\n        expect(stack.pop()).toBe(3);\n        expect(stack.min).toBe(4);\n\n        expect(stack.pop()).toBe(5);\n        expect(stack.min).toBe(4);\n\n        expect(stack.pop()).toBe(4);\n        expect(stack.min).toBe(Infinity);\n    });\n\n});\n\n//# sourceURL=webpack:///./spec/structure/min-stack.js?");

/***/ }),

/***/ "./spec/structure/queue-with-stacks.js":
/*!*********************************************!*\
  !*** ./spec/structure/queue-with-stacks.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var QueueWithStacks = __webpack_require__(/*! ./../../structure/queue-with-stacks */ \"./structure/queue-with-stacks.js\").QueueWithStacks;\n\n\ndescribe(\"QueueWithStacks\", function () {\n\n    var queue;\n    beforeEach(function () {\n        queue = new QueueWithStacks();\n    });\n\n    it(\"can push\", function () {\n        queue.push(2);\n        queue.push(5);\n        expect(queue.size).toBe(2);\n        queue.push(7);\n        queue.push(3);\n        expect(queue.size).toBe(4);\n    });\n\n    it(\"can pop\", function () {\n        queue.push(2);\n        queue.push(5);\n        expect(queue.size).toBe(2);\n        queue.push(7);\n        expect(queue.pop()).toBe(2);\n        queue.push(3);\n        expect(queue.pop()).toBe(5);\n        expect(queue.pop()).toBe(7);\n        expect(queue.pop()).toBe(3);\n    });\n});\n\n//# sourceURL=webpack:///./spec/structure/queue-with-stacks.js?");

/***/ }),

/***/ "./spec/structure/tree-node.js":
/*!*************************************!*\
  !*** ./spec/structure/tree-node.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var TreeNode = __webpack_require__(/*! ./../../structure/tree-node */ \"./structure/tree-node.js\").TreeNode;\n\n\ndescribe(\"TreeNode\", function () {\n\n    var node;\n\n    it(\"can create\", function () {\n        node = new TreeNode();\n        expect(node).toBeTruthy();\n        node = TreeNode.withValue(7);\n        expect(node.value).toBe(7);\n    });\n\n    it(\"can create with array\", function () {\n        var array = [1,2,3,4,5,6],\n            left, right;\n        node = TreeNode.withArray(array);\n        expect(node.value).toBe(1);\n        left = node.left;\n        expect(left.value).toBe(2);\n        right = node.right;\n        expect(right.value).toBe(3);\n        \n        node = left;\n        left = node.left;\n        expect(left.value).toBe(4);\n        right = node.right;\n        expect(right.value).toBe(5);\n    });\n});\n\n//# sourceURL=webpack:///./spec/structure/tree-node.js?");

/***/ }),

/***/ "./spec/tree/is-balanced.js":
/*!**********************************!*\
  !*** ./spec/tree/is-balanced.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var IsBalanced = __webpack_require__(/*! ./../../tree/is-balanced */ \"./tree/is-balanced.js\"),\n    TreeNode = __webpack_require__(/*! ./../../structure/tree-node */ \"./structure/tree-node.js\").TreeNode;\n\n\n/******************************\n * Specs to check IsBalanced is correct by following definition of 'balanced': \n *    The heights of the subtrees of any node never differ by more than 1\n */\n\ndescribe(\"IsBalanced\", function () {\n\n    var tree;\n\n    function addToLeft(tree, toAdd) {\n        var node = tree;\n        while (node && node.left) {\n            node = node.left;\n        }\n        if (node) {\n            node.left = toAdd;\n        }\n    }\n\n    function addToRight(tree, toAdd) {\n        var node = tree;\n        while (node && node.right) {\n            node = node.right;\n        }\n        if (node) {\n            node.right = toAdd;\n        }\n    }\n\n    describe(\"naive\", function () {\n\n        it(\"can handle tree height <= 1\", function () {\n            tree = new TreeNode();\n            expect(IsBalanced.naive(tree)).toBeTruthy();\n            tree.left = new TreeNode();\n            expect(IsBalanced.naive(tree)).toBeTruthy();\n            tree.right = new TreeNode();\n            expect(IsBalanced.naive(tree)).toBeTruthy();\n        });\n    \n        it(\"can handle tree with left > right\", function () {\n            /*\n               Constructor below creates following tree:\n                         1\n                        / \\ \n                       2   3\n                      / \\\n                     4   5\n    \n            */\n            tree = TreeNode.withArray([1, 2, 3, 4, 5]); \n            expect(IsBalanced.naive(tree)).toBeTruthy();\n            addToLeft(tree, new TreeNode());\n            expect(IsBalanced.naive(tree)).toBeFalsy();\n        });\n    \n    \n        it(\"can handle tree with right > left\", function () {\n            /*\n               Constructor below creates following tree:\n                          1\n                        /   \\ \n                       2     3\n                     /  \\   / \\\n                    4    5 6   7\n    \n            */\n            tree = TreeNode.withArray([1, 2, 3, 4, 5, 6, 7]); \n            expect(IsBalanced.naive(tree)).toBeTruthy();\n            addToRight(tree, new TreeNode());\n            expect(IsBalanced.naive(tree)).toBeTruthy();\n            addToRight(tree, new TreeNode());\n            expect(IsBalanced.naive(tree)).toBeFalsy();\n        });\n\n\n        it(\"can handle large tree\", function () {\n            var height = 10;\n            tree = TreeNode.withArray(new Array(Math.pow(2, height + 1) - 1));\n            expect(IsBalanced.naive(tree)).toBeTruthy();\n            addToRight(tree, new TreeNode());\n            expect(IsBalanced.naive(tree)).toBeTruthy();\n            addToRight(tree, new TreeNode());\n            expect(IsBalanced.naive(tree)).toBeFalsy();\n        });\n    });\n    \n\n        it(\"can handle tree height <= 1\", function () {\n            tree = new TreeNode();\n            expect(IsBalanced.checkTree(tree)).toBeTruthy();\n            tree.left = new TreeNode();\n            expect(IsBalanced.checkTree(tree)).toBeTruthy();\n            tree.right = new TreeNode();\n            expect(IsBalanced.checkTree(tree)).toBeTruthy();\n        });\n    \n        it(\"can handle tree with left > right\", function () {\n            /*\n               Constructor below creates following tree:\n                         1\n                        / \\ \n                       2   3\n                      / \\\n                     4   5\n    \n            */\n            tree = TreeNode.withArray([1, 2, 3, 4, 5]); \n            expect(IsBalanced.checkTree(tree)).toBeTruthy();\n            addToLeft(tree, new TreeNode());\n            expect(IsBalanced.checkTree(tree)).toBeFalsy();\n        });\n    \n    \n        it(\"can handle tree with right > left\", function () {\n            /*\n               Constructor below creates following tree:\n                          1\n                        /   \\ \n                       2     3\n                     /  \\   / \\\n                    4    5 6   7\n    \n            */\n            tree = TreeNode.withArray([1, 2, 3, 4, 5, 6, 7]); \n            expect(IsBalanced.checkTree(tree)).toBeTruthy();\n            addToRight(tree, new TreeNode());\n            expect(IsBalanced.checkTree(tree)).toBeTruthy();\n            addToRight(tree, new TreeNode());\n            expect(IsBalanced.checkTree(tree)).toBeFalsy();\n        });\n\n        it(\"can handle large tree\", function () {\n            var height = 10;\n            tree = TreeNode.withArray(new Array(Math.pow(2, height + 1) - 1));\n            expect(IsBalanced.checkTree(tree)).toBeTruthy();\n            addToRight(tree, new TreeNode());\n            expect(IsBalanced.checkTree(tree)).toBeTruthy();\n            addToRight(tree, new TreeNode());\n            expect(IsBalanced.checkTree(tree)).toBeFalsy();\n        });\n\n\n});\n\n//# sourceURL=webpack:///./spec/tree/is-balanced.js?");

/***/ }),

/***/ "./structure/min-stack.js":
/*!********************************!*\
  !*** ./structure/min-stack.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/****************************** \n * Implement a stack that can do push(), pop() and min() in O(1) time\n * \n * Cracking the Coding Interview pg. 98 #3.2\n */\n\nfunction MinStack() {};\n\nfunction Node() {}\nObject.defineProperties(Node.prototype, {\n    min: {\n        value: Infinity,\n        writable: true\n    },\n    value: {\n        value: undefined,\n        writable: true\n    }\n});\nObject.defineProperties(Node, {\n    withValueAndMin: {\n        value: function (value, min) {\n            var node = new Node();\n            node.value = value;\n            node.min = min;\n            return node;\n        }\n    }\n});\n\nObject.defineProperties(MinStack.prototype, {\n    _array: {\n        get: function () {\n            if (!this.__array) {\n                this.__array = [];\n            }\n            return this.__array;\n        }\n    },\n    min: {\n        get: function () {\n            var len = this._array.length;\n            if (!len) {\n                return Infinity;\n            }\n            return this._array[len - 1].min;\n        }\n    },\n    pop: {\n        value: function () {\n            if (!this._array.length) {\n                return null;\n            }\n            return this._array.pop().value;\n        }\n    },\n    push: {\n        value: function (value) {\n            var min = this.min;\n            min = min !== null ? min : Infinity;\n            min = Math.min(value, min);\n            node = Node.withValueAndMin(value, min);\n            this._array.push(node);\n        }\n    }\n});\n\nmodule.exports.MinStack = MinStack;\n\n//# sourceURL=webpack:///./structure/min-stack.js?");

/***/ }),

/***/ "./structure/queue-with-stacks.js":
/*!****************************************!*\
  !*** ./structure/queue-with-stacks.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/****************************** \n * Queue comprised of two stacks\n * \n * Cracking the Coding Interview pg. 99 #3.4\n */\nfunction QueueWithStacks() {};\n\nObject.defineProperties(QueueWithStacks.prototype, {\n\n    _newest: {\n        get: function () {\n            if (!this.__newest) {\n                this.__newest = [];\n            }\n            return this.__newest;\n        }\n    },\n\n    _oldest: {\n        get: function () {\n            if (!this.__oldest) {\n                this.__oldest = [];\n            }\n            return this.__oldest;\n        }\n    },\n\n    _shiftContent: {\n        value: function () {\n            while (this._newest.length) {\n                this._oldest.push(this._newest.pop());\n            }\n        }\n    },\n\n    size: {\n        get: function () {\n            return this._newest.length + this._oldest.length;\n        }\n    },\n\n    pop: {\n        value: function () {\n            var result = null;\n\n            if (!this._oldest.length && this._newest.length) {\n                this._shiftContent();\n            } \n\n            if (this._oldest.length) {\n                result = this._oldest.pop();\n            }\n\n            return result;\n        }\n    },\n\n    push: {\n        value: function (item) {\n            this._newest.push(item);\n        }\n    }\n});\n\nmodule.exports.QueueWithStacks = QueueWithStacks;\n\n//# sourceURL=webpack:///./structure/queue-with-stacks.js?");

/***/ }),

/***/ "./structure/tree-node.js":
/*!********************************!*\
  !*** ./structure/tree-node.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/******************************\n * Boilerplate tree node to be used for tree algorithms\n */\nfunction TreeNode() {};\n\n\nObject.defineProperties(TreeNode, {\n\n    _withArray: {\n        value: function (array, index) {\n            var length = array.length,\n                leftIndex = index * 2 + 1,\n                rightIndex = leftIndex + 1,\n                node = TreeNode.withValue(array[index]);\n            \n            if (rightIndex < length) {\n                node.right = TreeNode._withArray(array, rightIndex);\n            }\n            if (leftIndex < length) {\n                node.left = TreeNode._withArray(array, leftIndex);\n            }\n            return node;\n        }\n    },\n    \n    //Returns balanced tree from array\n    withArray: {\n        value: function (array) {\n            // [1, 2, 3, 4, 5, 6, 7, 8];\n            return TreeNode._withArray(array, 0);\n        }\n    },\n\n    withValue: {\n        value: function (value) {\n            var node = new TreeNode();\n            node.value = value;\n            return node;\n        }\n    }\n\n\n});\n\nObject.defineProperties(TreeNode.prototype, {\n\n    left: {\n        value: undefined,\n        writable: true\n    },\n\n    right: {\n        value: undefined,\n        writable: true\n    },\n\n    value: {\n        value: undefined,\n        writable: true\n    }\n});\n\nmodule.exports.TreeNode = TreeNode;\n\n//# sourceURL=webpack:///./structure/tree-node.js?");

/***/ }),

/***/ "./tree/is-balanced.js":
/*!*****************************!*\
  !*** ./tree/is-balanced.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/******************************\n * Functions to determine if tree is balanced where 'balanced' is defined as: \n *    The heights of the subtrees of any node never differ by more than 1\n * \n * \n * \n * Cracking the Coding Interview pg. 110 #4.4\n */\n\nvar ticks;\n//Calculate height of entire subtree for each node\nfunction isBalancedNaive(node) {\n    var balanced;\n    ticks = 0;\n    balanced = _isBalancedNaive(node);\n    console.log(\"Naive\", ticks, balanced);\n    return balanced;\n}\n\nfunction _isBalancedNaive(node) {\n    var leftHeight,\n        rightHeight, \n        balanced;\n        \n    if (!node) {\n        return true;\n    }\n    \n    //Check if this node is balanced\n    leftHeight = treeHeight(node.left);\n    rightHeight = treeHeight(node.right);\n    balanced = Math.abs(leftHeight - rightHeight) <= 1;\n    \n    //Check if children are balanced\n    return balanced && _isBalancedNaive(node.left) && _isBalancedNaive(node.right);\n}\n\nfunction treeHeight(node) {\n    var height = -1;\n    ticks++;\n    if (node) {\n        height = Math.max(treeHeight(node.left), treeHeight(node.right)) + 1;\n    }\n    return height;\n}\n\n\n//Check heights and balance at the same time\nfunction isBalanced(node) {\n    var balanced;\n    ticks = 0;\n    balanced = balancedTreeHeight(node) !== null;\n    console.log(\"Optimized\", ticks, balanced);\n    return balanced;\n}\n\nfunction balancedTreeHeight(node) {\n    var leftHeight, rightHeight,\n        balanced;\n    ticks++;\n\n    if (!node) {\n        return -1;\n    }\n\n    leftHeight = balancedTreeHeight(node.left);\n    rightHeight = balancedTreeHeight(node.right);\n    if (leftHeight === null || rightHeight === null) {\n        return null;\n    }\n    balanced = Math.abs(leftHeight - rightHeight) <= 1;\n    \n    return balanced ? Math.max(leftHeight, rightHeight) + 1 : null;\n}\n\nmodule.exports = {\n    naive: isBalancedNaive,\n    checkTree: isBalanced\n};\n\n//# sourceURL=webpack:///./tree/is-balanced.js?");

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map
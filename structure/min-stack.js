/****************************** 
 * Implement a stack that can do push(), pop() and min() in O(1) time
 * 
 * Cracking the Coding Interview pg. 98 #3.2
 */

function MinStack() {};

function Node() {}
Object.defineProperties(Node.prototype, {
    min: {
        value: Infinity,
        writable: true
    },
    value: {
        value: undefined,
        writable: true
    }
});
Object.defineProperties(Node, {
    withValueAndMin: {
        value: function (value, min) {
            var node = new Node();
            node.value = value;
            node.min = min;
            return node;
        }
    }
});

Object.defineProperties(MinStack.prototype, {
    _array: {
        get: function () {
            if (!this.__array) {
                this.__array = [];
            }
            return this.__array;
        }
    },
    min: {
        get: function () {
            var len = this._array.length;
            if (!len) {
                return Infinity;
            }
            return this._array[len - 1].min;
        }
    },
    pop: {
        value: function () {
            if (!this._array.length) {
                return null;
            }
            return this._array.pop().value;
        }
    },
    push: {
        value: function (value) {
            var min = this.min;
            min = min !== null ? min : Infinity;
            min = Math.min(value, min);
            node = Node.withValueAndMin(value, min);
            this._array.push(node);
        }
    }
});

module.exports.MinStack = MinStack;
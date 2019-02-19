
/****************************** 
 * Queue comprised of two stacks
 * 
 * Cracking the Coding Interview pg. 99 #3.4
 */
function QueueWithStacks() {};

Object.defineProperties(QueueWithStacks.prototype, {

    _newest: {
        get: function () {
            if (!this.__newest) {
                this.__newest = [];
            }
            return this.__newest;
        }
    },

    _oldest: {
        get: function () {
            if (!this.__oldest) {
                this.__oldest = [];
            }
            return this.__oldest;
        }
    },

    _shiftContent: {
        value: function () {
            while (this._newest.length) {
                this._oldest.push(this._newest.pop());
            }
        }
    },

    size: {
        get: function () {
            return this._newest.length + this._oldest.length;
        }
    },

    pop: {
        value: function () {
            var result = null;

            if (!this._oldest.length && this._newest.length) {
                this._shiftContent();
            } 

            if (this._oldest.length) {
                result = this._oldest.pop();
            }

            return result;
        }
    },

    push: {
        value: function (item) {
            this._newest.push(item);
        }
    }
});

module.exports.QueueWithStacks = QueueWithStacks;

/******************************
 * Boilerplate tree node to be used for tree algorithms
 */
function TreeNode() {};


Object.defineProperties(TreeNode, {

    _withArray: {
        value: function (array, index) {
            var length = array.length,
                leftIndex = index * 2 + 1,
                rightIndex = leftIndex + 1,
                node = TreeNode.withValue(array[index]);
            
            if (rightIndex < length) {
                node.right = TreeNode._withArray(array, rightIndex);
            }
            if (leftIndex < length) {
                node.left = TreeNode._withArray(array, leftIndex);
            }
            return node;
        }
    },
    
    //Returns balanced tree from array
    withArray: {
        value: function (array) {
            // [1, 2, 3, 4, 5, 6, 7, 8];
            return TreeNode._withArray(array, 0);
        }
    },

    withValue: {
        value: function (value) {
            var node = new TreeNode();
            node.value = value;
            return node;
        }
    }


});

Object.defineProperties(TreeNode.prototype, {

    left: {
        value: undefined,
        writable: true
    },

    right: {
        value: undefined,
        writable: true
    },

    value: {
        value: undefined,
        writable: true
    }
});

module.exports.TreeNode = TreeNode;
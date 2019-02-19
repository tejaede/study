
/******************************
 * Functions to determine if tree is balanced where 'balanced' is defined as: 
 *    The heights of the subtrees of any node never differ by more than 1
 * 
 * 
 * 
 * Cracking the Coding Interview pg. 110 #4.4
 */

var ticks;
//Calculate height of entire subtree for each node
function isBalancedNaive(node) {
    var balanced;
    ticks = 0;
    balanced = _isBalancedNaive(node);
    console.log("Naive", ticks, balanced);
    return balanced;
}

function _isBalancedNaive(node) {
    var leftHeight,
        rightHeight, 
        balanced;
        
    if (!node) {
        return true;
    }
    
    //Check if this node is balanced
    leftHeight = treeHeight(node.left);
    rightHeight = treeHeight(node.right);
    balanced = Math.abs(leftHeight - rightHeight) <= 1;
    
    //Check if children are balanced
    return balanced && _isBalancedNaive(node.left) && _isBalancedNaive(node.right);
}

function treeHeight(node) {
    var height = -1;
    ticks++;
    if (node) {
        height = Math.max(treeHeight(node.left), treeHeight(node.right)) + 1;
    }
    return height;
}


//Check heights and balance at the same time
function isBalanced(node) {
    var balanced;
    ticks = 0;
    balanced = balancedTreeHeight(node) !== null;
    console.log("Optimized", ticks, balanced);
    return balanced;
}

function balancedTreeHeight(node) {
    var leftHeight, rightHeight,
        balanced;
    ticks++;

    if (!node) {
        return -1;
    }

    leftHeight = balancedTreeHeight(node.left);
    rightHeight = balancedTreeHeight(node.right);
    if (leftHeight === null || rightHeight === null) {
        return null;
    }
    balanced = Math.abs(leftHeight - rightHeight) <= 1;
    
    return balanced ? Math.max(leftHeight, rightHeight) + 1 : null;
}

module.exports = {
    naive: isBalancedNaive,
    checkTree: isBalanced
};
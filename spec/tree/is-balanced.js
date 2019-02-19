var IsBalanced = require("./../../tree/is-balanced"),
    TreeNode = require("./../../structure/tree-node").TreeNode;


/******************************
 * Specs to check IsBalanced is correct by following definition of 'balanced': 
 *    The heights of the subtrees of any node never differ by more than 1
 */

describe("IsBalanced", function () {

    var tree;

    function addToLeft(tree, toAdd) {
        var node = tree;
        while (node && node.left) {
            node = node.left;
        }
        if (node) {
            node.left = toAdd;
        }
    }

    function addToRight(tree, toAdd) {
        var node = tree;
        while (node && node.right) {
            node = node.right;
        }
        if (node) {
            node.right = toAdd;
        }
    }

    describe("naive", function () {

        it("can handle tree height <= 1", function () {
            tree = new TreeNode();
            expect(IsBalanced.naive(tree)).toBeTruthy();
            tree.left = new TreeNode();
            expect(IsBalanced.naive(tree)).toBeTruthy();
            tree.right = new TreeNode();
            expect(IsBalanced.naive(tree)).toBeTruthy();
        });
    
        it("can handle tree with left > right", function () {
            /*
               Constructor below creates following tree:
                         1
                        / \ 
                       2   3
                      / \
                     4   5
    
            */
            tree = TreeNode.withArray([1, 2, 3, 4, 5]); 
            expect(IsBalanced.naive(tree)).toBeTruthy();
            addToLeft(tree, new TreeNode());
            expect(IsBalanced.naive(tree)).toBeFalsy();
        });
    
    
        it("can handle tree with right > left", function () {
            /*
               Constructor below creates following tree:
                          1
                        /   \ 
                       2     3
                     /  \   / \
                    4    5 6   7
    
            */
            tree = TreeNode.withArray([1, 2, 3, 4, 5, 6, 7]); 
            expect(IsBalanced.naive(tree)).toBeTruthy();
            addToRight(tree, new TreeNode());
            expect(IsBalanced.naive(tree)).toBeTruthy();
            addToRight(tree, new TreeNode());
            expect(IsBalanced.naive(tree)).toBeFalsy();
        });


        it("can handle large tree", function () {
            var height = 10;
            tree = TreeNode.withArray(new Array(Math.pow(2, height + 1) - 1));
            expect(IsBalanced.naive(tree)).toBeTruthy();
            addToRight(tree, new TreeNode());
            expect(IsBalanced.naive(tree)).toBeTruthy();
            addToRight(tree, new TreeNode());
            expect(IsBalanced.naive(tree)).toBeFalsy();
        });
    });
    

        it("can handle tree height <= 1", function () {
            tree = new TreeNode();
            expect(IsBalanced.checkTree(tree)).toBeTruthy();
            tree.left = new TreeNode();
            expect(IsBalanced.checkTree(tree)).toBeTruthy();
            tree.right = new TreeNode();
            expect(IsBalanced.checkTree(tree)).toBeTruthy();
        });
    
        it("can handle tree with left > right", function () {
            /*
               Constructor below creates following tree:
                         1
                        / \ 
                       2   3
                      / \
                     4   5
    
            */
            tree = TreeNode.withArray([1, 2, 3, 4, 5]); 
            expect(IsBalanced.checkTree(tree)).toBeTruthy();
            addToLeft(tree, new TreeNode());
            expect(IsBalanced.checkTree(tree)).toBeFalsy();
        });
    
    
        it("can handle tree with right > left", function () {
            /*
               Constructor below creates following tree:
                          1
                        /   \ 
                       2     3
                     /  \   / \
                    4    5 6   7
    
            */
            tree = TreeNode.withArray([1, 2, 3, 4, 5, 6, 7]); 
            expect(IsBalanced.checkTree(tree)).toBeTruthy();
            addToRight(tree, new TreeNode());
            expect(IsBalanced.checkTree(tree)).toBeTruthy();
            addToRight(tree, new TreeNode());
            expect(IsBalanced.checkTree(tree)).toBeFalsy();
        });

        it("can handle large tree", function () {
            var height = 10;
            tree = TreeNode.withArray(new Array(Math.pow(2, height + 1) - 1));
            expect(IsBalanced.checkTree(tree)).toBeTruthy();
            addToRight(tree, new TreeNode());
            expect(IsBalanced.checkTree(tree)).toBeTruthy();
            addToRight(tree, new TreeNode());
            expect(IsBalanced.checkTree(tree)).toBeFalsy();
        });


});
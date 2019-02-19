var TreeNode = require("./../../structure/tree-node").TreeNode;


describe("TreeNode", function () {

    var node;

    it("can create", function () {
        node = new TreeNode();
        expect(node).toBeTruthy();
        node = TreeNode.withValue(7);
        expect(node.value).toBe(7);
    });

    it("can create with array", function () {
        var array = [1,2,3,4,5,6],
            left, right;
        node = TreeNode.withArray(array);
        expect(node.value).toBe(1);
        left = node.left;
        expect(left.value).toBe(2);
        right = node.right;
        expect(right.value).toBe(3);
        
        node = left;
        left = node.left;
        expect(left.value).toBe(4);
        right = node.right;
        expect(right.value).toBe(5);
    });
});
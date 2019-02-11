var MinStack = require("./../../structure/min-stack").MinStack;


describe("MinStack", function () {

    var stack;
    beforeEach(function () {
        stack = new MinStack();
    });

    it("can be created empty", function () {
        expect(stack).toBeDefined();
        expect(stack.min).toBe(Infinity);
        expect(stack.pop()).toBe(null);
    });

    it("can push", function () {
        stack.push(2);
        stack.push(2);
        expect(stack.min).toBe(2);
        stack.push(1);
        expect(stack.min).toBe(1);
        stack.push(3);
        expect(stack.min).toBe(1);
    });

    it("can pop", function () {
        stack.push(4);
        stack.push(5);
        stack.push(3);
        stack.push(6);
        expect(stack.min).toBe(3);

        expect(stack.pop()).toBe(6);
        expect(stack.min).toBe(3);


        expect(stack.pop()).toBe(3);
        expect(stack.min).toBe(4);

        expect(stack.pop()).toBe(5);
        expect(stack.min).toBe(4);

        expect(stack.pop()).toBe(4);
        expect(stack.min).toBe(Infinity);
    });

});
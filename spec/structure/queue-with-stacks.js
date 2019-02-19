var QueueWithStacks = require("./../../structure/queue-with-stacks").QueueWithStacks;


describe("QueueWithStacks", function () {

    var queue;
    beforeEach(function () {
        queue = new QueueWithStacks();
    });

    it("can push", function () {
        queue.push(2);
        queue.push(5);
        expect(queue.size).toBe(2);
        queue.push(7);
        queue.push(3);
        expect(queue.size).toBe(4);
    });

    it("can pop", function () {
        queue.push(2);
        queue.push(5);
        expect(queue.size).toBe(2);
        queue.push(7);
        expect(queue.pop()).toBe(2);
        queue.push(3);
        expect(queue.pop()).toBe(5);
        expect(queue.pop()).toBe(7);
        expect(queue.pop()).toBe(3);
    });
});
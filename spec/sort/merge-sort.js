var MergeSort = require("./../../sort/merge-sort");


describe("MergeSort", function () {

    var unsorted, sorted;

    it("can sort empty array", function () {
        unsorted = [];
        sorted = MergeSort.sort(unsorted);
        expect(sorted.length).toBe(0);
    });

    it("can sort single element array", function () {
        unsorted = [5];
        sorted = MergeSort.sort(unsorted);
        expect(sorted.length).toBe(1);
        expect(sorted[0]).toBe(5);
    });

    it("can sort two element array", function () {
        unsorted = [2, 1];
        sorted = MergeSort.sort(unsorted);
        expect(sorted.length).toBe(2);
        expect(sorted[0]).toBe(1);
        expect(sorted[1]).toBe(2);
    });

    it("can sort three element array", function () {
        unsorted = [2, 1, 4];
        sorted = MergeSort.sort(unsorted);
        expect(sorted.length).toBe(3);
        expect(sorted[0]).toBe(1);
        expect(sorted[1]).toBe(2);
        expect(sorted[2]).toBe(4);
    });

    it("can sort n array", function () {
        unsorted = [3, 13, 8, 2, 1, 4, 6, 50];
        sorted = MergeSort.sort(unsorted);
        expect(sorted.length).toBe(8);
        expect(sorted[0]).toBe(1);
        expect(sorted[1]).toBe(2);
        expect(sorted[2]).toBe(3);
        expect(sorted[3]).toBe(4);
        expect(sorted[4]).toBe(6);
        expect(sorted[5]).toBe(8);
        expect(sorted[6]).toBe(13);
        expect(sorted[7]).toBe(50);
    });


    describe("in place", function () {
        it("can sort empty array", function () {
            unsorted = [];
            sorted = MergeSort.sortInPlace(unsorted);
            expect(sorted.length).toBe(0);
        });
    
        it("can sort single element array", function () {
            unsorted = [5];
            sorted = MergeSort.sortInPlace(unsorted);
            expect(sorted.length).toBe(1);
            expect(sorted[0]).toBe(5);
        });
    
        it("can sort two element array", function () {
            unsorted = [2, 1];
            sorted = MergeSort.sortInPlace(unsorted);
            expect(sorted.length).toBe(2);
            expect(sorted[0]).toBe(1);
            expect(sorted[1]).toBe(2);
        });
    
        it("can sort three element array", function () {
            unsorted = [2, 1, 4];
            sorted = MergeSort.sortInPlace(unsorted);
            expect(sorted.length).toBe(3);
            expect(sorted[0]).toBe(1);
            expect(sorted[1]).toBe(2);
            expect(sorted[2]).toBe(4);
        });

        it("can sort n array", function () {
            unsorted = [3, 13, 8, 2, 1, 4, 6, 50];
            sorted = unsorted;
            MergeSort.sortInPlace(unsorted);
            expect(sorted.length).toBe(8);
            expect(sorted[0]).toBe(1);
            expect(sorted[1]).toBe(2);
            expect(sorted[2]).toBe(3);
            expect(sorted[3]).toBe(4);
            expect(sorted[4]).toBe(6);
            expect(sorted[5]).toBe(8);
            expect(sorted[6]).toBe(13);
            expect(sorted[7]).toBe(50);
        });
    });
    

});
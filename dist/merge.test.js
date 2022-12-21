"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const program_1 = require("./program");
describe("Result have to be a merged array in ascending order", () => {
    test("Merge two arrays that both are not empty", () => {
        expect((0, program_1.merge)([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });
    test("Merge two arrays that both are not empty (2)", () => {
        expect((0, program_1.merge)([1, 3, 5, 6, 8, 9], [1, 2, 4, 5, 6, 7, 8, 12])).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 8, 9, 12]);
    });
    test("Merge two arrays that collection_1 is empty", () => {
        expect((0, program_1.merge)([], [2, 4, 6])).toEqual([2, 4, 6]);
    });
    test("Merge two arrays that collection_2 is empty", () => {
        expect((0, program_1.merge)([1, 3, 5], [])).toEqual([1, 3, 5]);
    });
    test("Merge two arrays that both are empty", () => {
        expect((0, program_1.merge)([], [])).toEqual([]);
    });
});

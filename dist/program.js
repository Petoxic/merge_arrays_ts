"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(collection_1, collection_2) {
    const len_1 = collection_1.length;
    const len_2 = collection_2.length;
    let answer = [];
    let index_1 = 0;
    let index_2 = 0;
    while (index_1 < len_1 || index_2 < len_2) {
        if (index_1 >= len_1) {
            answer.push(collection_2[index_2++]);
        }
        else if (index_2 >= len_2) {
            answer.push(collection_1[index_1++]);
        }
        else {
            collection_1[index_1] < collection_2[index_2]
                ? answer.push(collection_1[index_1++])
                : answer.push(collection_2[index_2++]);
        }
    }
    return answer;
}
exports.merge = merge;

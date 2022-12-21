export function merge(collection_1: number[], collection_2: number[]): number[] {
    // length of two arrays
    const len_1: number = collection_1.length;
    const len_2: number = collection_2.length;

    // return variable
    let answer: number[] = [];

    // index for each array for checking
    let index_1: number = 0;
    let index_2: number = 0;

    // loop until every number are in answer
    while (index_1 < len_1 || index_2 < len_2) {
        if (index_1 >= len_1) {
            //if all number in collection_1 are in answer
            answer.push(collection_2[index_2++]);
        } else if (index_2 >= len_2) {
            //if all number in collection_2 are in answer
            answer.push(collection_1[index_1++]);
        } else {
            // compare two numbers and insert the lesser one
            collection_1[index_1] < collection_2[index_2] 
            ? answer.push(collection_1[index_1++]) 
            : answer.push(collection_2[index_2++]);
        }
    }
    return answer;
}
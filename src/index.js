
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let finalArray = [];
    let midResult;
    if (matrix === undefined || matrix.length === 0) {
        return [];
    }
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            midResult = matrix[i];
            finalArray.push(...midResult);
        }
        if (i % 2 === 1) {
            midResult = matrix[i];
            midResult = midResult.reverse();
            finalArray.push(...midResult)
        }
    }
    return finalArray;
}


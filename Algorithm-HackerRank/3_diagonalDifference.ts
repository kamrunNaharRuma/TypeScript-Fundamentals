function diagonalDifference(arr: number[][]): number {
    let diagRtL: number=0;
    let diagLtR: number=0;
    let length: number = arr.length;
    arr.forEach((array,index) => {
        diagRtL += array[index];
        diagLtR += array[length-1-index];
    })
    return Math.abs(diagRtL-diagLtR);
    // Write your code here

}

//https://www.hackerrank.com/challenges/diagonal-difference/problem

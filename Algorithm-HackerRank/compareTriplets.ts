function compareTriplets(a: number[], b: number[]): number[] {
    // Write your code here
    let resultArr: number[] = [0,0];
    a.forEach((num, index)=>{
        num > b[index] ? resultArr[0] +=1
            : num < b[index] ? resultArr[1] +=1 : null
    })
    return resultArr;

}

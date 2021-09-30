function getTotalX(a: number[], b: number[]): number {
    // Write your code here
    let first : number[] = a;
    let second : number[]= b;
    let i :number = Math.min(...first);
    let low :number= Math.min(...second);
    let factorArr :number[]= [];
    while(i<=low){
        if (first.every( (num) => i % num === 0)){
            factorArr.push(i);
        }
        i++;
    }
    let resultArr :number[] = factorArr.filter((factor)=>{
        return second.every( (num) => num % factor === 0)
    })
    console.log(resultArr)
    return resultArr.length;
}
//https://www.hackerrank.com/challenges/between-two-sets/problem

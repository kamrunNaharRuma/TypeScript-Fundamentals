function breakingRecords(scores: number[]): number[] {
    let firstRecord = scores[0];
    let currentMax = firstRecord;
    let currentMin = firstRecord;

    let maxBreakerArr =  scores.filter(num =>{
        if(num>currentMax){
            currentMax = num;
            return true;
        }
    })

    let minBreakerArr =  scores.filter(num =>{
        if(num<currentMin){
            currentMin = num;
            return true;
        }
    })

    console.log(maxBreakerArr.length)
    console.log(minBreakerArr.length)
    return [maxBreakerArr.length,minBreakerArr.length ]

}
//https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

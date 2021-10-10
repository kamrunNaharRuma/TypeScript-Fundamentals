function hurdleRace(k: number, height: number[]): number {
    // Write your code here
    let max = Math.max(...height);
    if(max<= k){
        return 0
    }else{
        return max-k
    }


}
//https://www.hackerrank.com/challenges/the-hurdle-race/problem

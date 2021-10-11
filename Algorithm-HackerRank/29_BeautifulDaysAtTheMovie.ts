
function beautifulDays(i: number, j: number, k: number): number {
    // Write your code here
    let noOfBeautifulDays = 0;

    Array(Math.abs(i-j) + 1).fill(i).forEach((day : number,index:number)=>{
        let today = (day+ index);
        let reverseDay: number = parseInt(today.toString().split('').reverse().join(''));
        let goodDayChecker :number= (today - reverseDay)/k;

        Number.isInteger(goodDayChecker) ? noOfBeautifulDays += 1 : null

    })
    //https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
    return noOfBeautifulDays;
}

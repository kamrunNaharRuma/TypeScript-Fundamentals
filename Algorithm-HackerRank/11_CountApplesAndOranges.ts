function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
    // Write your code here
    let distanceFromAppleTree = apples.map((distance)=> distance + a);
    let distanceFromOrangeTree = oranges.map((distance)=> distance + b);

    let applesWithinRange = distanceFromAppleTree.filter((distance)=> distance >=s && distance<=t)
    let orangesWithinRange = distanceFromOrangeTree.filter((distance)=> distance >=s && distance<=t)

    console.log(applesWithinRange.length);
    console.log(orangesWithinRange.length);

}
//https://www.hackerrank.com/challenges/apple-and-orange/problem

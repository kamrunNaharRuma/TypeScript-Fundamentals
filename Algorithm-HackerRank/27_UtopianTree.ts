function utopianTree(n: number): number {
    // Write your code here
    let totalTree = 0;

    Array(n+1).fill(0).forEach((num, index)=>{
        if(index % 2 === 0){
            totalTree += 1;
        }else{
            totalTree *= 2;
        }
    })
    return totalTree;

}
//https://www.hackerrank.com/challenges/utopian-tree/problem

function plusMinus(arr: number[]): void {
    const length:number = arr.length;
    let occuranceOfPostiveNum : number = 0;
    let occuranceOfNegativeNum : number = 0;
    let occuranceOfzeros : number = 0;

    arr.forEach((num)=>{
        if(num>0){
            occuranceOfPostiveNum +=1;
        }
        else if(num<0){
            occuranceOfNegativeNum +=1;
        }
        else{
            occuranceOfzeros +=1
        }

    })
    console.log((occuranceOfPostiveNum/length).toFixed(6))
    console.log((occuranceOfNegativeNum/length).toFixed(6))
    console.log((occuranceOfzeros/length).toFixed(6))
    // Write your code here

}
//https://www.hackerrank.com/challenges/plus-minus/problem

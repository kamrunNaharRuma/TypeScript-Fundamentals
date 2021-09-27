function miniMaxSum(arr: number[]): void {
    // Write your code here
    let arrNew = arr.sort((first,second)=> first-second > 0 ? 1 : -1)
    let min:number=0;
    let max:number=0;
    arrNew.forEach((num,index)=>{
        if(index!==arr.length-1){
            min = min + num;
        }
        if(index!==0){
            max = max + num;
        }
    })
    console.log(min, max)

}

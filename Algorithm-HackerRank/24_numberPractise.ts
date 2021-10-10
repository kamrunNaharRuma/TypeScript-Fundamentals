function pickingNumbers(a: number[]): number {
    let maxArr: number[]=[];
    let max = 0;
    a.forEach((num,index)=>{
        a.forEach((number,ind)=>{
            if(index !== ind){
                if(Math.abs(num-number)<=1){
                    max +=1;
                }
            }

        })
        maxArr.push(max);
        max=0;
    })
    return Math.max(...maxArr)
}

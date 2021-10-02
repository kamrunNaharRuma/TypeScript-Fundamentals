function divisibleSumPairs(n: number, k: number, ar: number[]): number {
    let koyta:number = 0;
    ar.forEach((num, index)=>{
        if(index !== ar.length-1){
            ar.slice(index+1, ar.length).forEach((number, ind)=>{
                if((number+num)%k===0){
                    koyta +=1;
                }

            })
        }
    })
    return (koyta)
}

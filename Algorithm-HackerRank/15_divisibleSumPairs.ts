function divisibleSumPairs(n: number, k: number, ar: number[]): number {
    let koyta:number = 0;
    ar.forEach((num, index)=>{
        ar.forEach((number, ind)=>{
            if(number<num && (number+num)%k===0){
                koyta +=1;
            }

        })

    })

    console.log(koyta)
    return (koyta)

}
//https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

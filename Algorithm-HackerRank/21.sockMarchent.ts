function sockMerchant(n: number, ar: number[]): number {
    let alreadyOccured : any[] = []
    let pair = 0;
    ar.forEach((num,index)=>{
        if(!!alreadyOccured.find(number => number === num)){

        }else{
            let occurance = 0;
            alreadyOccured.push(num);
            ar.forEach((number)=>{number === num ? occurance += 1 : null})
            pair = pair + Math.floor(occurance / 2);
        }

    })

    console.log(pair)
    return pair;
}

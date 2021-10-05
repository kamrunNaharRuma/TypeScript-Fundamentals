function pageCount(n: number, p: number): number {
    // Write your code here
    let bookArray = Array(n+1).fill(0).map((num, index)=> index);
    let frontflip = 0;
    bookArray.forEach((pata, index)=>{
        if (index<=p && index!==0){
            index%2 === 0 ? frontflip += 1 : null
        }
    })

    let reverseBookArray = bookArray.reverse();
    let backFlip = 0;
    reverseBookArray.forEach((pata, index)=>{
        if (pata>=p && index!==0){
            pata%2 !== 0 ? backFlip += 1 : backFlip += 0
        }
    })

    //console.log(Math.min(frontflip,backFlip) )
    return Math.min(frontflip,backFlip)

}

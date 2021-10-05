function main() {
    // Enter your code here
    let budgetArr : number [] = (inputLines[0].split(" ").map((num)=>{
        return parseInt(num)
    }));

    let k : number [] = (inputLines[1].split(" ").map((num)=>{
        return parseInt(num)
    }));
    let m : number [] = (inputLines[2].split(" ").map((num)=>{
        return parseInt(num)
    }));

    let b : number= Math.max(...budgetArr);
    let combo : number []  = [];

    k.forEach(priceOfK=>{
        m.forEach(priceOfM=>{
            if((priceOfK+priceOfM)<= b){
                combo.push(priceOfK+priceOfM);
            }
        })
    })
    if(combo.length===0){
        console.log(-1)
    }else{
        console.log( Math.max(...combo))
    }

}

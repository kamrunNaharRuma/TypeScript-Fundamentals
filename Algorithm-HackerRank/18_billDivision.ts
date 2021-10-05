function bonAppetit(bill: number[], k: number, b: number): void {
    let billOfK  = (bill.filter((bill, index)=>{
        return index !== k
    }).reduce((acc,curr)=> acc+curr))/2;

    billOfK === b ? console.log('Bon Appetit') : console.log(b - billOfK)

}

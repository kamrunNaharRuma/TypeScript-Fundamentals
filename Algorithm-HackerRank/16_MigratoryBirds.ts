// function migratoryBirds(arr) {
//     let checkerObj ={};
//     arr.forEach((num)=>{
//         if(num in checkerObj) {
//             checkerObj[num] = checkerObj[num] + 1;
//         }
//         else{
//             checkerObj[num] =  1;
//         }
//     })
//
//     let repeated  = Math.max(...Object.keys(checkerObj).map(key => checkerObj[key]));
//     let finalAr =[];
//     for(let key in checkerObj){
//         if (checkerObj[key] === repeated){
//             finalAr.push(key)
//         }
//     }
//     return Math.min(...finalAr)
//
// }

function migratoryBirds(arr: number[]): number {
    interface CheckerObj {
        [key: number] : number
    };
    let checkerObj : CheckerObj={ };

    arr.forEach((num)=>{
        let k = num;
        if(num in checkerObj) {
            checkerObj[k] = checkerObj[num] + 1;
        }
        else{
            checkerObj[k] =  1;
        }
    })

    let repeated  = Math.max(...Object.keys(checkerObj).map(key => checkerObj[(parseInt(key))]));

    let finalAr =[];
    for(let key in checkerObj){
        if (checkerObj[parseInt(key)] === repeated){
            finalAr.push(parseInt(key))
        }
    }
    let result : number = Math.min(...finalAr);
    return result

}

const inputLines = [2, '2 3 4', '4 5 6']
function main() {

    let questions = inputLines.slice(1);

    questions.forEach((arr,index)=>{
        if(arr !== ""){
            let firstQuestion   = arr.split(" ");
            let catA = parseInt(firstQuestion[0]);
            let catB = parseInt(firstQuestion[1]);
            let mouceC = parseInt(firstQuestion[2]);

            if (Math.abs(mouceC-catA) === Math.abs(mouceC-catB)){
                console.log("Mouse C")
            }
            else if(Math.abs(mouceC-catA) < Math.abs(mouceC-catB)){
                console.log("Cat A")
            }
            else{
                console.log("Cat B")
            }
        }


    })

}

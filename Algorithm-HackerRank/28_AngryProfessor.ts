function angryProfessor(k: number, a: number[]): string {
    // Write your code here
    //[-3, -3, 0, 1, 2]
    let numberOfStudentsOnTime = 0;

    a.forEach((time)=>{
        if(time<=0){
            numberOfStudentsOnTime += 1;
        }
    })

    return numberOfStudentsOnTime>=k ? 'NO' : 'YES';
}
//https://www.hackerrank.com/challenges/angry-professor/problem

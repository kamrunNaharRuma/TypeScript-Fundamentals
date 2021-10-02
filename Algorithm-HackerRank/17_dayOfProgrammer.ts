function dayOfProgrammer(year) {
    // Write your code here
    let dayOfProgrammer= 256;

    let leapYear = false;
    if(year< 1917){
        leapYear = year % 4 === 0;
    }else{
        leapYear = ( year % 4 )=== 0 && (year % 100 )!== 0 ;
    }

    let monthCount = 1;
    let day;
    let month;
    while(monthCount <= 12){

        if(dayOfProgrammer>31){
            if(monthCount % 2 !== 0 || (monthCount % 2 === 0 && monthCount === 8)){
                dayOfProgrammer = dayOfProgrammer-31
            }else if (monthCount % 2 === 0 && monthCount === 2){
                leapYear ? dayOfProgrammer = dayOfProgrammer - 29 : dayOfProgrammer = dayOfProgrammer - 28
            }else{
                dayOfProgrammer = dayOfProgrammer-30
            }
        }
        else{
            day = dayOfProgrammer.toString()
            month = monthCount.toString()
            if(month.length === 1){
                month = "0".concat(month)
            }
            if(day.length === 1){
                day = "0".concat(day)
            }
            break;
        }
        monthCount++;
    }
    console.log(day+"."+month+"."+year)
    return day+"."+month+"."+year
}

dayOfProgrammer(1800)
//https://www.hackerrank.com/challenges/day-of-the-programmer/problem

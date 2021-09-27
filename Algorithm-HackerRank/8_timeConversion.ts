function timeConversion(s) {
    let amOrpm = s.substr(s.length-2);
    let resultStr;
    if(amOrpm === "AM"){
        return s.substr(0,2) === "12" ? "00".concat(s.substr(2,(s.length-4))) :  s.substr(0,(s.length-2));
    }
    if(amOrpm === "PM"){
        if(s.substr(0,2) === "12"){
            resultStr = s.substr(0,(s.length-2))
        }else{
            let hour  = s.substr(0,2);
            let hourToMilSystem =  (parseInt(hour)+12).toString();
            resultStr = hourToMilSystem.concat(s.substr(2,s.length-4));
        }
        return resultStr;
    }
}

console.log(timeConversion('12:05:45AM'))

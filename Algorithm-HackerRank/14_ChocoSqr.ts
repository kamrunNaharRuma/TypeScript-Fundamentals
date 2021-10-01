function birthday(s, d, m) {
    // Write your code here
    let kotoBhagKorbo = m;
    let bhagJogKorle = d;
    //[1,2,1,3,2]
    //birthday([4],4,1)
    let koyta =0;
    s.forEach((tukra,index) => {
        if(index+m <= s.length){
            let sum = 0;
            let count = 0;
            while(count<m){
                sum =  sum + s[index+count]
                count++;
            }
            // console.log(sum)
            if(sum === d){
                koyta +=1;
            }
        }
        return koyta;
    })
    console.log(koyta)
    return koyta;
}

birthday([4],4,1)
//https://www.hackerrank.com/challenges/the-birthday-bar/problem

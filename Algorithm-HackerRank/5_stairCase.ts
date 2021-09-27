function staircase(n: number): void {
    // Write your code here
    var stair:number = n+1;
    while(n>0){

        let str="";
        let spaceCount = n-1;
        let stairCount= Math.abs(n - stair);

        while(spaceCount>0){
            str += " ";
            spaceCount--;
        }
        while(stairCount>=1){
            str += "#";
            stairCount--;
        }
        n--;
        console.log(str);
    }

}

function birthdayCakeCandles(candles: number[]): number {
    let sortedArr : number[] = candles.sort(( a,b) => {
        return a > b ? -1 : 1;
    });
    return sortedArr.lastIndexOf(sortedArr[0]) + 1;
}

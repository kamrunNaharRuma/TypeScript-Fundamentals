
//const x = (x:number):(string|number) => (y: (number | string)) => typeof y === 'string' ? y.padEnd(String(x), '0') : y * (10 ** x);

//const x = x:number:T => <T>(y:T):T => typeof y === 'string' ? y.padEnd(x, '0') : y * (10 ** x);

// const x = (x) => (y) =>
//     typeof y === 'string' ? y.padEnd(x, '0') : y * 10 ** x;


const x:(number|string)= (x:number)=> <T>(y: T) :T=> typeof y === 'string' ? y.padEnd(x, '0') : y * (10 ** x);


// const x = (x) => y => typeof y === 'string' ? y.padEnd(x, '0') : y * (10 ** x);

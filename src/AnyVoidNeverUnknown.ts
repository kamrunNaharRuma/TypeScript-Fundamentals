const doSomething =():void =>{
    console.log("do something");
};

const doAnything =():any =>{
    console.log("do something");
};

const doNever =():never =>{
    throw "never";
    console.log("do something");
};

let vAny : any =10;
let vUnknown: unknown =10;

let s1: string = vAny as string;

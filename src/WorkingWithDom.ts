let page : any ="1";
let pageNum= page as string;

//not so correct fix

// const someElement = document.querySelector(".foo");
// console.log("someElement", (someElement as any).value);


//correct fix

// const someElement = document.querySelector(".foo") as HTMLInputElement;
// console.log("someElement", someElement.value);


const someElement = document.querySelector(".foo") ;
someElement.addEventListener('blur',(event)=>{
    const target = event.target as HTMLInputElement;
    console.log("event", target.value)
});

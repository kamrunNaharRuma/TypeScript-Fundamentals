var page = "1";
var pageNum = page;
//not so correct fix
// const someElement = document.querySelector(".foo");
// console.log("someElement", (someElement as any).value);
//correct fix
// const someElement = document.querySelector(".foo") as HTMLInputElement;
// console.log("someElement", someElement.value);
var someElement = document.querySelector(".foo");
someElement.addEventListener('blur', function (event) {
    var target = event.target;
    console.log("event", target.value);
});

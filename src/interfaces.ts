//Creating object

interface UserInterface{
    name: string,
    age?  : number,
    getMessage(): string
}
const user:UserInterface = {
    name: "monster",
    age: 30,
    getMessage() {
        return "help";
    }
}

const user2 :UserInterface= {
    name : "Kamrun Nahar Ruma" ,
    age: 22,
    getMessage() {
        return "hi";
    }
}

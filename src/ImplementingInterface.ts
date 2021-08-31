interface NEWUserInterface {
    getfullName():string;
}

class UserClassNew  implements NEWUserInterface{
    private firstName: String;
    protected  lastName: String;
    readonly unChangableNickName : string;

    constructor(firstName: string, lastName: string) {
        this.firstName =firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return "rumaaaa";
    }

    getfullName(): string {
        return "";
    }
}

const userCredsNew = new UserClassNew('Ruma', 'KN');

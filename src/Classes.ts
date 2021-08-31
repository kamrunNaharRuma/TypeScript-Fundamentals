class UserClass {
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
}

const userCreds = new UserClass('Ruma', 'KN');

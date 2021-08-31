var UserClass = /** @class */ (function () {
    function UserClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    UserClass.prototype.getFullName = function () {
        return "rumaaaa";
    };
    return UserClass;
}());
var userCreds = new UserClass('Ruma', 'KN');

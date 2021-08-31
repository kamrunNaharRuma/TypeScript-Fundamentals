var UserClassNew = /** @class */ (function () {
    function UserClassNew(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    UserClassNew.prototype.getFullName = function () {
        return "rumaaaa";
    };
    UserClassNew.prototype.getfullName = function () {
        return "";
    };
    return UserClassNew;
}());
var userCredsNew = new UserClassNew('Ruma', 'KN');

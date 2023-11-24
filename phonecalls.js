var UserCalls = /** @class */ (function () {
    function UserCalls(_credit, _phoneCalls) {
        this.credit = 0;
        this.phoneCalls = 0;
        this.credit = _credit;
        this.phoneCalls = _phoneCalls;
    }
    UserCalls.prototype.mobileTopup = function (topup) {
        return this.credit += topup;
    };
    UserCalls.prototype.call = function (callMinutes) {
        this.phoneCalls++;
        return this.credit = this.credit - (0.2 * callMinutes);
    };
    UserCalls.prototype.call404 = function () {
        return "Il credito residuo \u00E8: ".concat(this.credit, "\u20AC.");
    };
    UserCalls.prototype.getNumberCalls = function () {
        return "Lei ha effettuato ".concat(this.phoneCalls, " chiamate.");
    };
    UserCalls.prototype.resetCalls = function () {
        this.phoneCalls = 0;
        return this.phoneCalls;
    };
    return UserCalls;
}());
var Antonio = new UserCalls(0, 0);
console.log(Antonio.mobileTopup(20));
Antonio.call(5);
Antonio.call(5);
console.log(Antonio.call404(), Antonio.getNumberCalls());
console.log(Antonio.resetCalls());
var Cristina = new UserCalls(0, 0);
console.log(Cristina.mobileTopup(50));
Cristina.call(15);
Cristina.call(5);
Cristina.call(20);
console.log(Cristina.call404(), Cristina.getNumberCalls());
console.log(Cristina.resetCalls());
var Ginevra = new UserCalls(0, 0);
console.log(Ginevra.mobileTopup(20));
Ginevra.call(25);
Ginevra.call(10);
Ginevra.call(10);
Ginevra.call(15);
console.log(Ginevra.call404(), Ginevra.getNumberCalls());
console.log(Ginevra.resetCalls());

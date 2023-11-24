interface Smartphone {
    credit:number;
    phoneCalls:number;
}

class UserCalls implements Smartphone{
    credit: number = 0
    phoneCalls: number = 0
    constructor(_credit:number, _phoneCalls:number){
        this.credit = _credit
        this.phoneCalls = _phoneCalls
    }
    mobileTopup(topup:number):number {
        return this.credit += topup
    }
    call(callMinutes:number){
        this.phoneCalls++
        return this.credit =  this.credit - (0.2 * callMinutes)
    }
    call404(){
        return `Il credito residuo è: ${this.credit}€.`
    }
    getNumberCalls(){
        return `Lei ha effettuato ${this.phoneCalls} chiamate.`
    }
    resetCalls(){
        this.phoneCalls = 0
        return this.phoneCalls
    }
}

let Antonio = new UserCalls(0,0)
console.log(Antonio.mobileTopup(20));
Antonio.call(5)
Antonio.call(5)
console.log(Antonio.call404(), Antonio.getNumberCalls());
console.log(Antonio.resetCalls());

let Cristina = new UserCalls(0,0)
console.log(Cristina.mobileTopup(50));
Cristina.call(15)
Cristina.call(5)
Cristina.call(20)
console.log(Cristina.call404(), Cristina.getNumberCalls());
console.log(Cristina.resetCalls());

let Ginevra = new UserCalls(0,0)
console.log(Ginevra.mobileTopup(20));
Ginevra.call(25)
Ginevra.call(10)
Ginevra.call(10)
Ginevra.call(15)
console.log(Ginevra.call404(), Ginevra.getNumberCalls());
console.log(Ginevra.resetCalls());





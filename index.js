var OldCalc = /** @class */ (function () {
    function OldCalc() {
    }
    OldCalc.prototype.operations = function (n1, n2, operation) {
        if (n1 === void 0) { n1 = 0; }
        if (n2 === void 0) { n2 = 0; }
        if (operation === void 0) { operation = 'add'; }
        switch (operation) {
            case 'add': return n1 + n2;
            case 'sub': return n1 - n2;
            default: return NaN;
        }
    };
    return OldCalc;
}());
var NewCalc = /** @class */ (function () {
    function NewCalc() {
    }
    NewCalc.prototype.add = function (num1, num2) { return num1 + num2; };
    ;
    NewCalc.prototype.sub = function (num1, num2) { return num1 - num2; };
    ;
    return NewCalc;
}());
var Adapter = /** @class */ (function () {
    function Adapter() {
        this.calc = new NewCalc();
    }
    Adapter.prototype.operations = function (n1, n2, operation) {
        switch (operation) {
            case 'add': return this.calc.add(n1, n2);
            case 'sub': return this.calc.sub(n1, n2);
            default: return NaN;
        }
    };
    return Adapter;
}());
var oldCalc = new OldCalc();
console.log(oldCalc.operations(1, 2, 'add'));
var newCalc = new NewCalc();
console.log(newCalc.add(2, 3));
var adapter = new Adapter();
console.log(adapter.operations(4, 5, 'add')); //Інтерфейс старий, але користуємося новим функціоналом
//---------------------------------------------------------------
// TEST 1
var List = /** @class */ (function () {
    function List(instanceOfT) {
        this.a = [instanceOfT];
    }
    List.prototype.getT = function () {
        return this.a;
    };
    return List;
}());

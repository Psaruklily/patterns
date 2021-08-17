class OldCalc {
    operations(n1: number = 0, n2: number = 0, operation: string = 'add'): number {
        switch(operation) {
            case 'add': return n1 + n2;
            case 'sub': return n1 - n2;
            default: return NaN;
        }
    }
}

class NewCalc {
    add(num1: number, num2: number):number {return num1 + num2};
    sub(num1: number, num2: number):number {return num1 - num2};
}

class Adapter{
    calc: NewCalc;
    
    constructor() {
          this.calc = new NewCalc();
    }
  
    operations(n1: number, n2: number, operation: string): number {
        switch(operation) {
            case 'add': return this.calc.add(n1, n2);
            case 'sub': return this.calc.sub(n1, n2);
            default: return NaN;
        }
    }
}

const oldCalc = new OldCalc();
console.log(oldCalc.operations(1, 2, 'add'));

const newCalc = new NewCalc();
console.log(newCalc.add(2, 3));

const adapter = new Adapter();
console.log(adapter.operations(4, 5, 'add'));  //Інтерфейс старий, але користуємося новим функціоналом


//---------------------------------------------------------------
// TEST 1

class List <T>{
    private a: T[];

    constructor(instanceOfT: T) {
        this.a = [instanceOfT];
    }

    getT(): T[] {
        return this.a;
    }
}



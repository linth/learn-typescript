/**
 * Function Overloadings
 *  - learn how to establish between parameter types and results of a function via function overloadings.
 *  - TypeScript function overloadings allow you to describe the relationship between parameter types and results of a function.
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-function-overloadings/
 */

function addNumber(a: number, b: number): number {
    return a+b;
}

function addString(a: string, b: string): string {
    return a+b;
}

function genericAdd(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a+b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a+b;
    }
}

function genericAddByAny(a: any, b: any): any {
    return a+b;
}

console.log(genericAdd(1, 6)); // 7
console.log(genericAddByAny(20, 10)); // 30


// using class example.
class Counter {
    private current: number = 0;
    
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let value = [];

            for (let start = this.current; start <= target; start++) {
                value.push(start);
            }

            this.current = target;
            return value;
        }
        return ++this.current;
    }
}


let counter = new Counter();

console.log(counter.count()); // 1
console.log(counter.count(20)); // [1,  2,  3,  4,  5,  6,  7, 8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


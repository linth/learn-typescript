/**
 * function type:
 *  - guide you on how to use function types to define types for functions.
 * 
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-function-types/
 */


let sumTwoNumber = (x: number, y: number): number => {
    return x + y;
}

// combine two string.
let combineTwoStringGetLength = function(x: string, y: string) {
    return x.concat(y).length;
}

console.log(sumTwoNumber(2, 1)); // 3
console.log(combineTwoStringGetLength('Hello', 'world')); // 10




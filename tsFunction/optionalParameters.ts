/**
 * Optional Parameters
 *  - Use the `parameter?: type` syntax to make a parameter optional.
 * 
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-optional-parameters/
 */

function multiply(a: number, b: number, c?: number): number {

    if (typeof c === 'number') {
        return a*b*c;
    }
    return a*b;
}


console.log(multiply(1, 2, 3)); // 6
console.log(multiply(1, 2, 'hi')); // 2


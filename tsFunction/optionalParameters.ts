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

// after code refactory. (可直接給予預設值)
function multiply2(a: number, b: number, c: number = 2): number {
    return a * b * c;
}


// console.log(multiply(1, 2, 3)); // 6
// console.log(multiply(1, 2, 'hi')); // 2

console.log(multiply2(1, 2, 3)); // 6
console.log(multiply2(1, 2)); // 2
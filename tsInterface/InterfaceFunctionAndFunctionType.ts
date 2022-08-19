/**
 * interface function & function type
 * 
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-interface/
 */

// function type interface.
interface StringFormat {
    (str: string, isUpper: boolean): string
}


// change to upper case.
let format: StringFormat;
format = function(str: string, isUpper: boolean) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
}

console.log(format('hi', true)); // HI

// change to lower case.
let lowerCase: StringFormat;
lowerCase = function(str: string) {
    return str.toLowerCase();
}

console.log(lowerCase('Hi', false)); // hi



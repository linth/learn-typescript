/**
 * TypeScript modules
 *  - Since `ES6`, JavaScript started supporting modules as the native part of the language.
 *  - `export`
 *  - `as`: rename your modules
 *  - import type
 *  - Re-exports
 * 
 * 
 *  - TypeScript shares the same module concept with ES6 module. A module can contain both declarations and code.
 *  - In a module, variables, functions, classes, interfaces, etc., executes on its own scope, not the global scope.
 *  - Use `export` statement to export variables, functions, classes, interfaces, type, etc., from a module.
 *  - Use `import` statement to access exports from other modules.
 * 
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-modules/
 */


// Creating a new module
export interface Validator {
    isValid(s: string): boolean
}

// another way.
interface ValidatorAnother {
    isValid(s: string): boolean
}

export { ValidatorAnother };
export { ValidatorAnother as UserCustomDefined } // you can rename your modules.


// importing a new module.
import { firstModule } from './newModules';
let fm = new firstModule();
fm.firstFunction(); // this is first function.

import { SecondModule as s2 } from "./newModules";
let s = new s2();
s.secondFunction(); // this is second function.


// import types.
import { alphaNumeric } from "./newModules";

function isAlphType(a: alphaNumeric): boolean {
    console.log(a, typeof(a));    
    return false;
}

isAlphType('hello world'); // hello world string




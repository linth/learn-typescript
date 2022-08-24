/**
 * TypeScript modules
 *  - Since `ES6`, JavaScript started supporting modules as the native part of the language.
 *  - 
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



/**
 * Type Annotation
 *  - learn how to use type annotation to define the static type for variables, function parameters, and return values.
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-type-annotations/
 */

let counter: number;
counter = 1;
// counter = 'hello world.'; // complie error.

let firstName: string;
let age: number;
let active: boolean = true;

// array
let arrayName: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];

// objects
let person: {
    name: string;
    age: number;
};

person = {
    name: 'John',
    age: 25
};

// function arguments & return types
let greeting: (name: string) => string;

greeting = function(name: string) {
    return `Hi ${name}`;
};




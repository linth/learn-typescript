/**
 * type casting
 *  - Type casting allows you to convert a variable from one type to another.
 *  - Use the `as` keyword or `<>` operator for type castings.
 * 
 * 
 * Reference:
 *  - typescripttutorial.net/typescript-tutorial/type-casting/
 */


// let input = document.querySelector('input["type="text"]');
// console.log(input.value);

// let enteredText = (input as HTMLInputElement).value;
// let el: HTMLElement;
// el = new HTMLInputElement();

// let a: typeA;
// let b = a as typeB;

let a: typeA;
let b = <typeB>a;

console.log(typeof(a));
console.log(typeof(b));



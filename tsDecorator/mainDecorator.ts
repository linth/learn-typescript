import { isString } from "./isInt";


console.log('hello world.');

// console.log(isString('10')); // error ???


function add(a: number, b: number): a is number {
  if (typeof a === 'number' && typeof b === 'number') {
    return true;
  } else {
    return false;
  }
}

console.log(add(10, 2));
// console.log();


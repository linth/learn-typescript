/**
 * if-else
 *  - learn how to execute code based on a condition.
 *  - Ternary operator `?:` (三元運算子)
 * 
 * 
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-if-else/
 */

// basic if-else condition.
{
    const max = 100;
    let counterForIfElseEx = 100;

    if (counterForIfElseEx < 100) {
        counterForIfElseEx++;
    } else if (counterForIfElseEx === max) {
        counterForIfElseEx = 1;
    } else {
        counterForIfElseEx = 2;
    }

    console.log(counterForIfElseEx); // 1
}


// Ternary operator `?:`
const exFirst = 100;
const exSecond = 100;
let toCounter = 30;

// 100 < 100 => false.
exFirst < exSecond ? toCounter++ : toCounter = 1;
console.log(toCounter); // 1


// 100 = 100 => true. 
exFirst == exSecond ? toCounter = 0 : toCounter = 1;
console.log(toCounter); // 0




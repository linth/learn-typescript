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

    // 另一個範例: true 左邊 / false 右邊
    const num = 10;
    const result = num > 5 ? 'greate than 5' : 'less than or equal to 5';
    console.log(`the result = ${result}`); // the result = greate than 5
}


{
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
}




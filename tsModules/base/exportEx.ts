/**
 * export
 *  - 如果要匯出的變數或function等不只一個，可使用 export
 * 
 * Reference:
 *  - https://ithelp.ithome.com.tw/articles/10280543
 */

var PI = 3.14;
let squareTwo = 1.41;
const phi = 1.61;


class RandomNumberGenerator {

}

function absolute(num: number) {
    if (num < 0) return num * -1;
    return num;
}

const height = 180;

export {PI, squareTwo, phi, RandomNumberGenerator, absolute, height as h}
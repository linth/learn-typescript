/**
 * Type Assertions
 *  - Type assertions use the as keyword or an angle bracket <> syntax.
 * 
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/type-assertions/
 */

function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let netPrice = price * (1 - discount);
    return format ? `$ ${netPrice}` : netPrice;
}

let netPrice = getNetPrice(100, 0.05, true) as string;
console.log(netPrice, typeof(netPrice));

// using `as` 
let netPrice2 = getNetPrice(100, 0.05, false) as number;
console.log(netPrice2, typeof(netPrice2));

// using `<>`
let netPrice3 = <number>getNetPrice(100, 0.05, false);
console.log(netPrice3, typeof(netPrice3));



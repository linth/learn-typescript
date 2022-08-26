/**
 * Default Parameters
 *  - Use default parameter syntax parameter:=defaultValue if you want to set the default initialized value for the parameter.
 *  - Default parameters are optional.
 * 
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-default-parameters/
 */

function applyDiscount(price: number, discount = 0.05): number {
    return price * (1 - discount);
}

function getDay(year: number = new Date().getFullYear(), month: number): number {
    console.log(`year = ${year}, month = ${month}`);
    return year;
}

console.log(applyDiscount(100)); // 95

console.log(getDay(undefined, 12)); // year = 2022, month = 12, 2022



/**
 * Never type
 *  - never 可以想成是一個什麼都沒有的「空集合（empty set）」
 *  - never 也屬於 any
 * 
 * Reference:
 *  - https://juejin.cn/post/6844904037922373639
 */

// basic concept
// TODO: add more examples to explain the concept of 'never'.
{
    // never 就是一個空
    type A = 'string' | 'number' | never;  // type A = 'string' | 'number' 

    // never 也屬於 anynever 可以想成是一個什麼都沒有的「空集合（empty set）」
    type T = never extends any ? true : false;  // type T = true.
}



// 一般表示哪些使用者無法達到的類型
function neverReach(): never {
    throw new Error('an error message.');
}

const f = 2;

neverReach()

// f.toFixed(2); // x is unreachable.



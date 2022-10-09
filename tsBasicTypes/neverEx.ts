/**
 * Never type
 * 
 * Reference:
 *  - https://juejin.cn/post/6844904037922373639
 */

// 一般表示哪些使用者無法達到的類型
function neverReach(): never {
    throw new Error('an error message.');
}

const f = 2;

neverReach()

f.toFixed(2);

/**
 * * as name
 *  - take all into a single namespace
 *  - 匯入全部 * 並命名 `name` (name可自行定義)
 * 
 * Reference:
 *  - https://ithelp.ithome.com.tw/articles/10280543
 */

import * as e from './exportEx';

console.log(e.PI); // 3.14
console.log(e.h);   // 180
console.log(e.phi); // 1.61
console.log(e.squareTwo);   // 1.41





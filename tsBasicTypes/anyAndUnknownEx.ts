/**
 * 基礎類型 basic type.
 *  - boolean
 *  - number
 *  - stting
 *  - array
 *  - tuple
 *  - enum
 *  - void
 *  - null & undefined
 *  - any & unknow
 *  - never
 * 
 * 
 * Reference:
 *  - https://juejin.cn/post/6844904037922373639
 */


// any: 任一類型, unknown: 未知類型
// ! any 啥都可以分配和被分配； 任何類型都可以分配 unknown，但 unknown 不能分配給其他類型

let foo: unknown;

foo = true;
foo = 123;

// error example.
// foo.toFixed(2); // error.
// let foo1: string = foo; // error.


// ! 使用 any 則會喪失類型檢查，請審慎使用
let qoo: any;

qoo = true;
qoo = 123;

qoo.toFixed(2);
let qoo1: string = qoo;
/**
 * implement true/false based on type.
 * 
 * Reference:
 *  - https://juejin.cn/post/7061556434692997156
 *  - https://juejin.cn/post/7045536402112512007
 */


// type And<C1 extends boolean, C2 extends boolean> = 
//   C1 extends true ? C2 extends true ? true : false : false;

// type Example1 = { a: 1, b: 2 } extends { a: 1 } ? true : false;

{
    type A = 1;
    type B = 2;
    type Example = A extends B ? true : false; 
}



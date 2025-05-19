/**
 * array handling 
 *  - reduce(): 加總
 * 
 * Reference:
 *  - https://medium.com/%E4%B8%80%E5%80%8B%E5%B0%8F%E5%B0%8F%E5%B7%A5%E7%A8%8B%E5%B8%AB%E7%9A%84%E9%9A%A8%E6%89%8B%E7%AD%86%E8%A8%98/javascript-%E4%BD%BF%E7%94%A8-array-reduce-%E9%80%B2%E8%A1%8C-object-array-%E7%9A%84%E5%8A%A0%E7%B8%BD-ad17e32e3d50
 */

{
  // 加總一個array的全部數字
  const arr = [1, 2, 3, 4, 5, 6];
  let res = arr.reduce((a, b) => a+b);

  console.log(res);
  
  // 加總object
  let arr2 = [
    { a: 1, b: 1},
    { a: 12, b: 3},
    { a: 5, b: 90},
    { a: 37, b: 43},
    { a: 123, b: -1},
  ];

  arr2.reduce((total, currentObj) => {
    return {
      a: total.a + currentObj.a,
      b: total.b + currentObj.b,
    }
  }, {a: 0, b: 0});

  console.log('arr2', arr2);
}


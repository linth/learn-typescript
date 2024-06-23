/**
 * 使用單純js, ts來操作array
 *  - map
 *  - filter
 *  - reduce
 *  - find: 找到大於3的元素
 *  - some: 檢查是否有偶數
 *  - every: 檢查是否每個元素都是奇數
 *  - forEach: 列印每個元素
 *  - sort: 排序
 *  - concat: 合併
 *  - slice: 截取部分元素
 *  
 */

{
  /** map  */
  // js
  const a = [1, 2, 3, 4, 5];
  const doubled_a = a.map(n => n * 2);
  console.log('doubled_a', doubled_a); // doubled_a [ 2, 4, 6, 8, 10 ]
  
  // ts
  const a_ts: number[] = [1, 2, 3, 4, 5];
  const doubled_a_ts: number[] = a_ts.map(n => n * 2);
  console.log('doubled_a_ts', doubled_a_ts); // doubled_a_ts [2, 4, 6, 8, 10]


  /** filter  */
  // js
  const array = [1, 2, 3, 4, 5];
  const evenNumbers = array.filter(n => n % 2 === 0);
  console.log(evenNumbers); // [2, 4]

  // ts
  const array_ts: number[] = [1, 2, 3, 4, 5];
  const evenNumbers_ts: number[] = array_ts.filter(n => n % 2 === 0);
  console.log(evenNumbers_ts); // [2, 4]
}

{
  /** reduce */
  // js
  const array = [1, 2, 3, 4, 5];
  const sum = array.reduce((acc, n) => acc + n, 0);
  console.log(sum); // 15


  // ts
  const array_ts: number[] = [1, 2, 3, 4, 5];
  const sum_ts: number = array_ts.reduce((acc, n) => acc + n, 0);
  console.log(sum_ts); // 15
}

{
  /** find */
  // js
  const array = [1, 2, 3, 4, 5];
  const firstGreaterThanThree = array.find(n => n > 3);
  console.log(firstGreaterThanThree); // 4  

  // ts
  const array_ts: number[] = [1, 2, 3, 4, 5];
  const firstGreaterThanThree_ts: number | undefined = array_ts.find(n => n > 3);
  console.log(firstGreaterThanThree_ts); // 4
}

{
  /** some */
  // js
  const array = [1, 2, 3, 4, 5];
  const hasEven = array.some(n => n % 2 === 0);
  console.log(hasEven); // true

  // ts
  const array_ts: number[] = [1, 2, 3, 4, 5];
  const hasEven_ts: boolean = array_ts.some(n => n % 2 === 0);
  console.log(hasEven_ts); // true

}

{
  /** every */
  // js
  const array = [1, 3, 5, 7];
  const allOdd = array.every(n => n % 2 !== 0);
  console.log(allOdd); // true

  // ts
  const array_ts: number[] = [1, 3, 5, 7];
  const allOdd_ts: boolean = array_ts.every(n => n % 2 !== 0);
  console.log(allOdd_ts); // true

}

{
  /** forEach */
  // js
  const array = [1, 2, 3, 4, 5];
  array.forEach(n => console.log(n));

  // ts
  const array_ts: number[] = [1, 2, 3, 4, 5];
  array_ts.forEach(n => console.log(n));
}

{
  /** sort */
  // js
  const array = [3, 1, 4, 1, 5, 9];
  const sortedArray = array.sort((a, b) => a - b);
  console.log(sortedArray); // [1, 1, 3, 4, 5, 9]

  // ts
  const array_ts: number[] = [3, 1, 4, 1, 5, 9];
  const sortedArray_ts: number[] = array_ts.sort((a, b) => a - b);
  console.log(sortedArray_ts); // [1, 1, 3, 4, 5, 9]

}

{
  /** concat */
  // js
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const combinedArray = array1.concat(array2);
  console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

  // ts
  const array1_ts: number[] = [1, 2, 3];
  const array2_ts: number[] = [4, 5, 6];
  const combinedArray_ts: number[] = array1_ts.concat(array2_ts);
  console.log(combinedArray_ts); // [1, 2, 3, 4, 5, 6]

}

{
  /** slice */
  // js
  const array = [1, 2, 3, 4, 5];
  const slicedArray = array.slice(1, 4);
  console.log(slicedArray); // [2, 3, 4]

  // ts
  const array_ts: number[] = [1, 2, 3, 4, 5];
  const slicedArray_ts: number[] = array_ts.slice(1, 4);
  console.log(slicedArray_ts); // [2, 3, 4]

}
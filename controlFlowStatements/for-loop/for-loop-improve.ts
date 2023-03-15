/**
 * 如何從兩個array中找到相同的數字
 *  - 1. 一般解法 (時間複雜度 O(n^2) 很差!)
 *  - 2. 使用不同的資料結構 (set) 來解答 (時間複雜度 O(n))
 *  - 3. 使用不同的資料結構 (hash table) 來解答 (時間複雜度 O(n))
 *  - 4. 使用內建函數
 *  - 5. others ?
 */

{
  const arr1: number[] = [1, 2, 3, 4, 5];
  const arr2: number[] = [3, 4, 5, 6, 7];

  // 1. 一般解法 (時間複雜度 O(n^2) 很差!)
  let result: number[] = [];

  for (let i=0; i<arr1.length; i++) {
    for (let j=0; j<arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i])
      } 
    }
  }
  console.log(`the result = [${result}]`);

  // 2. 使用不同的資料結構 (set) 來解答 (時間複雜度 O(n))
  const set1 = new Set(arr1);
  const result2 = [];

  for (let i=0; i<arr2.length; i++) {
    if (set1.has(arr2[i])) {
      result2.push(arr2[i]);
    }
  }
  console.log(`the result2 = [${result2}]`);  

  // 3. 使用不同的資料結構 (hash table) 來解答 (時間複雜度 O(n))
  const map = new Map();
  const result3 = [];

  for (let i=0; i<arr1.length; i++) { // 將 arr1 中的元素加入hash table中
    map.set(arr1[i], true); 
  }

  for (let i=0; i<arr2.length; i++) {
    if (map.has(arr2[i])) {
      result3.push(arr2[i]);
    }
  }
  console.log(`the result3 = [${result3}]`);
  

  // 4. 使用內建函數
  const intersection = arr1.filter(num => arr2.includes(num));
  console.log(intersection); // [ 3, 4, 5 ]

  // TODO: other ways?
}
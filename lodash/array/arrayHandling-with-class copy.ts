import _ from 'lodash';

// 过滤出偶数
// const evenNumbers = _.filter(array, n => n % 2 === 0);
// console.log(evenNumbers); // 输出: [2, 4] 

{
  const array = [1, 2, 3, 4, 5];

  const doubleValue = _.map(array, n => n * 2);
  console.log('doubleValue', doubleValue);
  
  const evenNumber = _.filter(array, n => n % 2 === 0);
  console.log('evenNumber', evenNumber);
  
}

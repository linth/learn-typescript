/**
 * 定義一個通用的 object
 */

interface DynamicObject {
  [key: string]: any;
}

const obj: DynamicObject = {
  name: 'john',
  age: 22,
  isAdmin: true,
};

console.log(obj);
obj.country = 'USA';
console.log(obj);

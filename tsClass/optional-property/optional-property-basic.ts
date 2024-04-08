/**
 * Basic Optional Properties with interface and type.
 * 
 * 
 */

{
  // ? 代表 property 資料可有可無
  interface User {
    name: string;
    age?: number;
    occupation?: string;
  }

  type OptionalUser = Partial<User>


  let user: User = {
    name: 'John Doe'
  };

  let user2: User = {
    name: 'May Chen',
    age: 11,
  };

  console.log(`${user}`); // [object Object]
  console.log(`${user2}`); // [object Object]
  console.log(user); // { name: 'John Doe' }
  console.log(user2); // { name: 'May Chen', age: 11 }
}

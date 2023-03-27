/**
 * Functional programming.
 * 
 * User case: User with filter and map.
 * 
 * 
 * In this example, we have an array of User objects, 
 * and we want to filter the users who are 42 years old, 
 * map the remaining users to their names and emails, 
 * and calculate the average age of all users. 
 * We achieve this by defining three higher-order functions 
 * (filterByAge, mapToNameAndEmail, and reduceToAverageAge) 
 * that take a User object as input and return a boolean, 
 * an object, and a number, respectively. Then, 
 * we use the built-in filter, map, and reduce functions 
 * to apply these functions to each element of the users 
 * array and create a new array with the filtered and mapped values, 
 * and calculate the average age. 
 * The resulting filteredUsers array contains the one user who is 42 years old, 
 * the namesAndEmails array contains the name and email of that user, 
 * and the averageAge variable contains the average age of all users. 
 * This code demonstrates more advanced principles of functional programming, 
 * such as currying and partial application with the filterByAge function, 
 * object transformation with the mapToNameAndEmail function, 
 * and stateful reduction with the reduceToAverageAge function.
 */

{
  interface User {
    id: number;
    name: string;
    email: string;
    age: number;
  }
  
  const users: User[] = [
    { id: 1, name: "Alice", email: "alice@example.com", age: 32 },
    { id: 2, name: "Bob", email: "bob@example.com", age: 25 },
    { id: 3, name: "Charlie", email: "charlie@example.com", age: 42 },
    { id: 4, name: "David", email: "david@example.com", age: 18 },
    { id: 5, name: "Emily", email: "emily@example.com", age: 54 },
  ];

  const filterByAge = (age: number) => (users: User) => users.age === age;

  const mapToNameAndEmail = (user: User) => ({
    name: user.name,
    email: user.email,
  });

  const reduceToAverageAge = (
    total: number,
    user: User,
    index: number,
    array: User[]
  ) => {
    total += user.age;
    if (index === array.length - 1) {
      return total / array.length;
    } else {
      return total;
    }
  };
  
  const filteredUsers = users.filter(filterByAge(42));
  const namesAndEmails = filteredUsers.map(mapToNameAndEmail);
  const averageAge = users.reduce(reduceToAverageAge, 0);

  console.log(filteredUsers); // [{ id: 3, name: "Charlie", email: "charlie@example.com", age: 42 }]
  console.log(namesAndEmails); // [{ name: "Charlie", email: "charlie@example.com" }]
  console.log(averageAge); // 34.2
}
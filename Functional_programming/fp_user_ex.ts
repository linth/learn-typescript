/**
 * Functional programming.
 * 
 * User case: User with filter and map.
 * 
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
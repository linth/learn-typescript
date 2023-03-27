/**
 * Functional programming.
 * 
 * User case: Person with filter and map.
 * 
 */
{
  interface Person {
    name: string;
    age: number;
  }

  const people: Person[] = [
    { name: "Alice", age: 32 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 42 },
  ];

  // filter people who are older than 30
  const olderThan30 = (person: Person) => person.age > 30;
  const filteredPeople = people.filter(olderThan30);

  console.log(`find older than 30: ${filteredPeople}`); // find older than 30: [object Object],[object Object]
  console.log(filteredPeople); // [ { name: 'Alice', age: 32 }, { name: 'Charlie', age: 42 } ]


  // map filtered people to their names
  const getName = (person: Person) => person.name;
  const names = filteredPeople.map(getName)
  
  console.log(`get name: ${names}`); // get name: Alice,Charlie
  console.log(names); // [ 'Alice', 'Charlie' ]

  // console.log(typeof(`${names}`)); // string.
  // console.log(typeof(names)); // object.
}


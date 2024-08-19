/**
 * overall functional programming for typescript.
 * 
 */

{
  // 1. Pure Functions
  function add(a: number, b: number) {
    return a+b;
  }
  const sum = add(3, 5);
  console.log(sum); // 8
  
  // 2. Higher-Order Functions
  function mapArray<T, U>(arr: T[], fn: (item: T) => U): U[] {
    return arr.map(fn);
  }
  const numbers = [1, 2, 3];
  const doubled = mapArray(numbers, (x) => x * 2); 
  console.log(doubled); // [2, 4, 6]
}

{
  // 3. Function Composition
  const add = (x: number) => (y: number) => x + y;
  const multiply = (x: number) => (y: number) => x * y;
  const addAndMultiply = (x: number, y: number, z: number) => multiply(z)(add(x)(y));
  // Usage
  const result = addAndMultiply(1, 2, 3); // (1 + 2) * 3 = 9
}

{
  // 4. Currying
  function add(a: number): (b: number) => number {
    return (b: number) => a + b;
  }
  const addFive = add(5);
  const result = addFive(3); // 8
  
  // 5. Immutability
  const originalArray = [1, 2, 3];
  const newArray = [...originalArray, 4]; // [1, 2, 3, 4]
  console.log(originalArray); // [1, 2, 3]
}

{
  // 6. Recursion
  function factorial(n: number): number {
    return n === 0 ? 1 : n * factorial(n - 1);
  }
  const result = factorial(5); // 120  
}

{
  // 7. Monad (Optional Type)
  class Option<T> {
    constructor(private value: T | null) {}
  
    map<U>(fn: (value: T) => U): Option<U> {
      return this.value === null ? new Option<U>(null) : new Option<U>(fn(this.value));
    }
  
    getOrElse(defaultValue: T): T {
      return this.value === null ? defaultValue : this.value;
    }
  }
  
  const someValue = new Option(5);
  const result = someValue.map(x => x * 2).getOrElse(0); // 10
}

{
  // 8. Type Guards
  type Cat = { meow: () => void };
  type Dog = { bark: () => void };

  function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).meow !== undefined;
  }

  const pet: Cat | Dog = { meow: () => console.log('meow') };
  if (isCat(pet)) {
    pet.meow(); // TypeScript knows pet is a Cat here
  }
}
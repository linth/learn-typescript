/**
 * Generic Base
 *  - using `any`
 *  - using `<T>`
 *  - using `<U, T>`
 * 
 *  - Use TypeScript generics to develop reusable, generalized, and type-safe functions, interfaces, and classes.
 * 
 * 
 * 1. 傳統的方式來寫 (不使用 generic)
 * 2. 解法1: 使用 `any` function
 * 3. 解法2: 使用 `generic` 方法
 * 
 * 
 * 實際案例:
 * 1. generic class 多種類型: generic class with multiple types.
 * 2. generic 多種引數類型: generic functions with multiple types.
 * 3. Generic Class implements Generic Interface
 * 4. 使用 generic function 來處理多個 class的共用功能，如: print data.
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-generics/
 *  - https://www.tutorialsteacher.com/typescript/typescript-generic-class
 */


// 不使用 generic function, 使用傳統的方式來寫
{
    // the type of agrument is number.
    function getRandomNumberElement(items: number[]): number {
      let randomIndex = Math.floor(Math.random() * items.length);
      return items[randomIndex];
    }

    // the type of agrument is string.
    function getRandomStringElement(items: string[]): string {
      let randomIndex = Math.floor(Math.random() * items.length);
      return items[randomIndex];
    }

    // 如果使用 number, 則需使用 `getRandomNumberElement` function
    let numbers = [1, 5, 7, 4, 2, 9];
    console.log(getRandomNumberElement(numbers));

    // 如果使用 string, 則需使用 `getRandomStringElement` function
    let colors = ['red', 'green', 'blue'];
    console.log(getRandomStringElement(colors));

    /**
     * ! comments:
     * 1. 使用直覺
     * 2. 但會不同的type引數，大量相同邏輯的 function 一直重複撰寫
     */
}


// 解法1: 使用 `any` function
{
  function getRandomAnyElement(items: any[]): any {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }
  
  let numbers2 = [1, 5, 7, 4, 2, 9];
  let colors2 = ['red', 'green', 'blue'];
  
  console.log(getRandomAnyElement(numbers2));
  console.log(getRandomAnyElement(colors2));

  /**
   * ! comments:
   * 1. 解決了不同的引數下，需要呼叫不同的 function.
   * 2. 尚未解決因應不同的引數，會造成程式內邏輯的問題?
   * 3. 程式撰寫的接收端，會不知道 return 回來的 type 值是什麼? (定義不清楚)
   */
}


// 解法2: 使用 `generic` 方法
{
  function getRandomGenericElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }
  
  let colors2 = ['red', 'green', 'blue'];
  let numbers3 = [1, 5, 7, 4, 2, 9];
  let randomEle = getRandomGenericElement<number>(numbers3); 
  let randomEle2 = getRandomGenericElement<string>(colors2);
  
  console.log('get element from numbers3: ', randomEle);
  console.log('get element from color2: ', randomEle2);

  // let returnElem3: string;
  // returnElem3 = getRandomNumberElement(numbers);  // compiler error

  /**
   * ! comments:
   * 1. 統一 function，並大幅降低撰寫因引數tyep不同的程式碼。
   * 2. return 值也會讓接收端的開發者很清楚知道 type 是什麼，減少開發的 bug 產生。
   */
}


// generic class 多種類型: generic class with multiple types.
{
  class KeyValuePair<T, U> {
    private key: T | undefined;
    private val: U | undefined;

    setKeyValue(key: T, val: U): KeyValuePair<T, U> {
      this.key = key;
      this.val = val;
      return this;
    }

    display(): void {
      console.log(`Key = ${this.key}, val = ${this.val}`);            
    }
  }

  let k1 = new KeyValuePair<number, string>();
  k1.setKeyValue(1, 'George')
    .display(); // Key = 1, val = George
  
  let k2 = new KeyValuePair<string, string>();
  k2.setKeyValue('CEO', 'Bill')
    .display(); // Key = CEO, val = Bill
}


// generic 多種引數類型: generic functions with multiple types.
{
  function merge<U, V>(obj1: U, obj2: V) {
    return {
      ...obj1,
      ...obj2
    };
  }

  let result = merge(
    { name: 'John' },
    { jobTitle: 'Frontend Developer' }
  );
  
  console.log(`the type of result: ${typeof(result)}, the object of result: `, result);

  
  /**
   * ! comments:
   * 1. 定義多種引數的 generic function 寫法
   */
}


// Generic Class implements Generic Interface
{
  interface IKeyValueProcessor<T, U> {
    process(key: T, val: U): void;
  }

  class kvProcess<T, U> implements IKeyValueProcessor<T, U> {
    process(key: T, val: U): void {
      console.log(`Key = ${key}, val = ${val}`);
    }
  }

  let proc: IKeyValueProcessor<number, string> = new kvProcess();
  proc.process(1, 'GG man'); // Key = 1, val = GG man

  let proc2: IKeyValueProcessor<string, string> = new kvProcess();
  proc2.process('hi', 'hello world.'); // Key = hi, val = hello world.

  /** 
   * ! comments: 
   * 1. 使用 generic class 繼承 generic interface 方式，大幅度減少程式碼撰寫。
   * 2. 開發者很清楚知道 return type 類型。
   */
}


// 使用 generic function 來處理多個 class的共用功能，如: print data.
{
  interface Aminal {
    firstName: any;
    lastName: any;
  }

  class Person implements Aminal {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  class Bird {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  }

  // 兩個 classes: Person, Bird 都要共用相同的 generic function, 則可以使用 generic function.
  function display<T extends Aminal>(item: T): void {
    console.log(`first name: ${item.firstName}, last name: ${item.lastName}`);        
  }

  let p = new Person('HaHa', 'Huang');
  display<Person>(p); // first name: HaHa, last name: Huang
  
  // ! error, 因為 Bird class不是繼承 Aminal，但根據測試他只針對變數去確認，換句話說 bird 今天參數改成只有 firstName and lastName，則可以通過。
  // let b = new Bird('Yang', 'KK'); 
  // display<Bird>(b);

  /**
   * ! comments:
   * 1. 使用 generic function 可以將多個 class 相同的功能統一起來，利用泛型來進行撰寫。
   */
}

# Type & Interface 


## Type
`type` 主要用於為現有的類型創建一個新的名字，也就是所謂的類型別名 (type alias)。它可以指代原始類型、聯合類型、交叉類型、字面量類型，甚至是其他複雜的自定義類型。

```ts
// 原始類型別名
type Age = number;
let myAge: Age = 30;

// 聯合類型別名
type StringOrNumber = string | number;
let value: StringOrNumber = "hello";
value = 123;

// 交叉類型別名
interface Person {
  name: string;
}

interface Employee {
  employeeId: number;
}

type PersonEmployee = Person & Employee;
let worker: PersonEmployee = { name: "Alice", employeeId: 101 };

// 字面量類型別名
type Status = "success" | "error" | "pending";
let requestStatus: Status = "success";

// 元組類型別名
type Point = [number, number];
let coordinates: Point = [10, 20];

// 函數類型別名
type GreetingFunction = (name: string) => string;
const greet: GreetingFunction = (name) => `Hello, ${name}!`;
```

實際應用判斷：
當你需要為一個非物件類型（例如原始類型、聯合類型、交叉類型、字面量類型、元組、函數等）定義一個更具描述性的名稱時，type 是你的首選。它讓你能夠更清晰地表達數據的結構和可能的取值範圍。


## Interface
`interface` 主要用於描述物件的形狀 (shape)。它定義了一個物件應該擁有的屬性名稱和它們的類型。介面也可以被類別 (class) 實現 (implement)。

```ts
interface Animal {
  name: string;
  sound(): void;
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sound() {
    console.log("Woof!");
  }
}

let myDog: Animal = new Dog("Buddy");
myDog.sound();

interface Rectangle {
  width: number;
  height: number;
  calculateArea?(): number; // 可選屬性
}

let rect: Rectangle = { width: 10, height: 5 };

// 介面的擴展 (extends)
interface ColorfulRectangle extends Rectangle {
  color: string;
}

let colorfulRect: ColorfulRectangle = { width: 20, height: 10, color: "blue" };
```

實際應用判斷：
當你需要定義物件的結構，明確物件應該包含哪些屬性以及這些屬性的類型時，interface 是更自然且常用的選擇。此外，當你希望利用介面的擴展 (extends) 和被類別實現 (implements) 的特性時，interface 是不可或缺的。


## 簡單總結
- 使用 type 的情況：
	- 為原始類型、聯合類型、交叉類型等非物件類型創建別名。
	- 定義函數的類型。
	- 定義元組的結構。
	- 創建字面量類型。
- 使用 interface 的情況：
	- 定義物件的結構和屬性類型。
	- 需要使用 extends 擴展物件結構。
	- 希望類別能夠 implements 該結構。
	- 需要利用 TypeScript 的合併宣告特性。

在實際開發中，對於描述物件結構，interface 通常是更常見和推薦的做法，因為它更符合物件導向的思維，並且具有擴展和實現的特性。而 type 在處理非物件類型和創建更複雜的類型組合時非常有用。
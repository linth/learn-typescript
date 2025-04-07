/**
 * 物件型別 (object types)
 * 	- array
 * 	- tuple
 * 	- enum
 * 	- object
 * 	- interface
 * 	- class
 */

{
	// 陣列（Array）
	let numbers: number[] = [1, 2, 3];
	let strings: Array<string> = ["a", "b", "c"];  // 泛型語法

	// Tuple（元組）
	let user: [number, string] = [1, "Alice"];

	// Enum（列舉）
	enum Direction {
		Up = "UP",
		Down = "DOWN",
		Left = "LEFT",
		Right = "RIGHT"
	}
	
	let move: Direction = Direction.Up;

	// 物件（Object）
	interface User {
		id: number;
		name: string;
	}
	
	let newUser: User = { id: 1, name: "Alice" };
	
	// 介面（Interface）
	interface User {
		id: number;
		name: string;
	}
	
	let new1User: User = { id: 1, name: "Alice" };
	
	// 類別（Class）
	class Car {
		brand: string;
		
		constructor(brand: string) {
			this.brand = brand;
		}
	
		drive(): void {
			console.log(`${this.brand} is driving`);
		}
	}
	
	let myCar = new Car("Tesla");
	myCar.drive();
	
}
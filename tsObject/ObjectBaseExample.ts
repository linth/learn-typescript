/**
 * Object Base Example
 * 	- keys(obj): 返回一個由給定物件自身的可枚舉 **屬性名稱** 組成的陣列，陣列中屬性名稱的排列順序和使用 for...in 迴圈遍歷該物件時的順序一致。
 * 	- values(obj): 返回一個由給定物件自身的所有可枚舉屬性的 **值** 組成的陣列，陣列中值的排列順序和使用 Object.keys() 返回的鍵名陣列的順序一致。
 * 	- entries(obj): 返回一個由給定物件自身可枚舉屬性的 [key, value] 鍵值對組成的陣列。陣列中鍵值對的排列順序和使用 Object.keys() 返回的鍵名陣列的順序一致。
 * 
 * 	- assign(target, ...sources): 將一個或多個來源物件（sources）的所有可枚舉自有屬性的值複製到目標物件（target）。它將返回修改後的目標物件。
 * 	- create(proto, propertiesObject): 創建一個新物件，使用現有的物件來提供新創建的物件的 [[Prototype]]（原型）。可選地，還可以提供一個屬性描述符物件來定義新物件的屬性。
 * 	- defineProperty(obj, prop, descriptor): 直接在一個物件上定義一個新的屬性，或者修改一個物件上已有的屬性，並返回這個物件。這個方法允許你精確地控制屬性的特性（例如是否可寫、可枚舉、可配置等）。
 */

{
	const person = {
		name: 'george',
		age: 33, 
		city: 'New York',
	};


	// keys: 返回 object 的 key
	const keys = Object.keys(person);
	console.log(keys); // [ 'name', 'age', 'city' ]
	
	// values: 返回 object 的 value
	const values = Object.values(person);
	console.log(values); // [ 'george', 33, 'New York' ]
	
	// entries: 返回 object 可枚舉的屬性/值 [key, value]
	const entries = Object.entries(person);
	console.log(entries); // [ [ 'name', 'george' ], [ 'age', 33 ], [ 'city', 'New York' ] ]
}


{
	const target = { a: 1, b: 2 };
	const source1 = { b: 4, c: 5 };
	const source2 = { c: 6, d: 7 };


	// 將 object 分配並取代/修改值 後返回
	const returnedTarget = Object.assign(target, source1, source2);
	console.log(target); // { a: 1, b: 4, c: 6, d: 7 }
	console.log(returnedTarget === target); // true
}


{
	const animal = {
		speak: function() {
			console.log(`${this.name} makes a sound.`);
		}
	};

	const dog = Object.create(animal, {
		name: {
			value: 'Buddy',
			writable: true,
			enumerable: true,
			configurable: true
		},
		bark: {
			value: function() {
				console.log('Woof!');
			}
		}
	});

	dog.speak(); // Buddy makes a sound.
	dog.bark(); // Woof!

	console.log(Object.getPrototypeOf(dog) === animal); // true
}


{
	const person1 = {};

	Object.defineProperty(person1, 'name', {
		value: 'Bob',
		writable: false, // 不可寫
		enumerable: true, // 可枚舉
		configurable: false // 不可配置
	});

	console.log(person1); // Bob
	// person.name = 'Charlie'; // 嘗試修改，但在嚴格模式下會報錯，非嚴格模式下靜默失敗
	// console.log(person.name); // Bob (值沒有改變)

	// console.log(Object.keys(person)); // ["name"] (因為 enumerable: true)

	// 嘗試刪除會報錯 (因為 configurable: false)
	// delete person.name;
	// console.log(person.name);
}
/**
 * array + json builder. 
 * 	- 結合 builder design pattern
 * 	- 結合 factory pattern
 * 	- 使用 TypeScript 的 Utility Types 搭配 Decorator Pattern 
 */

{
	type DataEntry  = {
		[key: string]: any;
	};

	class ArrayJSONBuilder {
		private data: DataEntry = {};

		addField<K extends string, V>(key: K, value: V): this {
			this.data[key] = value;
			return this;
		}
	
		builder(): DataEntry {
			return this.data;
		}
	}

	const builder = new ArrayJSONBuilder();
	const item = builder.addField('id', '1')
		.addField("name", "George")
		.addField("age", 22)
		.builder();

	console.log("Generated Object:", item);	
}



{
	type ArrayJSON = { 
		[key: string]: any
	};

	class ArrayJSONFactory {
		static create(type: "person" | "product"): ArrayJSON {
			switch (type) {
				case "person":
					return { id: "", name: "", age: 0 };
				case "product":
					return { id: "", name: "", price: 0 };
				default:
					throw new Error("Unsupported type");
			}
		}
	}

	// 使用範例
	const person = ArrayJSONFactory.create("person");
	person.id = "1";
	person.name = "George";
	person.age = 22;

	const product = ArrayJSONFactory.create("product");
	product.id = "A100";
	product.name = "Laptop";
	product.price = 1200;

	console.log("Generated Person Object:", person);
	console.log("Generated Product Object:", product);

}


{
	// 使用 TypeScript 的 Utility Types 搭配 Decorator Pattern 
	/**
	 * 適用情境：如果需要更複雜的條件來設定屬性，並且希望為屬性添加一些自動化處理（例如數據驗證、日誌記錄等），
	 * Decorator Pattern 可以派上用場。Decorator 通常用於增強或修改屬性的行為，但這種模式較適合進階場景。
	 */
	function Required(target: any, propertyKey: string) {
		Object.defineProperty(target, propertyKey, {
			set(value: any) {
				if (value === undefined || value === null) {
					throw new Error(`${propertyKey} is required.`);
				}
				this['_' + propertyKey] = value;
			},
			get() {
				return this['_' + propertyKey];
			}
		});
	}

	class Person {
		@Required
		id!: string;

		@Required
		name!: string;

		age!: number;
	}

	const person = new Person();
	person.id = '1';
	person.name = 'george';
	person.age = 22;

	console.log("Validated Person Object:", person);	
}
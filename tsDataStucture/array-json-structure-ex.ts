/**
 * array + json
 */

{
	// 定義不同資料結構
	type DataEntry<K, V> = { key: K; value: V };

	// Array + JSON 結構
	class ListStructure<K, V> {
		private list: Array<DataEntry<K, V>>;

		constructor(data: [K, V][]) {
			this.list = data.map(([key, value]) => ({ key, value }));
		}

		getStructure() {
			return this.list;
		}
	}

	// 使用範例
	const data: [string, number][] = [
		['apple', 1],
		['banana', 2],
		['cherry', 3]
	];

	const listStructure = new ListStructure(data);
	console.log("List Structure:", listStructure.getStructure());

}

{

	// 定義任意資料結構的類別 (資料跟架構拆開)
	class AnyStructureListStructure<T> {
		private list: T[];
	
		constructor(data: T[]) {
			this.list = data;
		}
	
		getStructure() {
			return this.list;
		}
	}

	// 使用範例
	const data = [
		{ id: '1', name: 'george', age: 22 },
		{ id: '2', name: 'may', age: 23 },
		{ id: '3', name: 'haha', age: 2 }
	];

	const listStructure = new AnyStructureListStructure(data);
	console.log('Any structure list structure:', listStructure.getStructure());

}

{
	// 定義泛型的 ArrayJSON 結構，允許動態鍵值
	type ArrayJSON<
		K1 extends string, V1, 
		K2 extends string, V2, 
		K3 extends string, V3
	> = {
		[K in K1 | K2 | K3]: K extends K1 ? V1 : K extends K2 ? V2 : V3;
	};

	/**
	 * 泛型參數：
		K1, K2, K3: 每個都被限制為 string 類型，代表三個不同的鍵名。
		V1, V2, V3: 表示與各自鍵名對應的值的類型，允許值的類型動態變化。
		這些泛型參數允許用戶在使用 ArrayJSON 型別時，自定義三個鍵名與對應的值類型。

		映射型別：
		K in K1 | K2 | K3: 使用映射型別的語法，建立一個物件類型，並且其屬性名稱是 K1、K2 和 K3 的聯集，因此這些鍵名將自動變成物件的屬性名稱。
		
		條件型別：
		K extends K1 ? V1 : K extends K2 ? V2 : V3: 使用條件型別判斷每個屬性名稱 K，以決定屬性的值類型。
		如果 K 是 K1，則屬性類型為 V1。
		如果 K 是 K2，則屬性類型為 V2。
		如果 K 是 K3，則屬性類型為 V3。
	 */

	// EnhancedListStructure 類別
	class EnhancedListStructure<T> {
		private list: T[];

		constructor(data: T[]) {
			this.list = data;
		}

		// 用於取得資料結構的內容
		getStructure() {
			return this.list;
		}
	}

	// 使用範例
	const data: ArrayJSON<'id', string, 'name', string, 'age', number>[] = [
		{ id: '1', name: 'george', age: 22 },
		{ id: '2', name: 'may', age: 23 },
		{ id: '3', name: 'haha', age: 2 }
	];

	// 初始化 EnhancedListStructure
	const enhancedList = new EnhancedListStructure(data);

	// 取得並顯示資料結構內容
	console.log('List Structure:', enhancedList.getStructure());

}


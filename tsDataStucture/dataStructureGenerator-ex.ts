/**
 * 
 * 
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

	// Map + Object 結構
	class DictionaryStructure<K, V> {
		private dictionary: Map<K, V>;

		constructor(data: [K, V][]) {
			this.dictionary = new Map(data);
		}

		getStructure() {
			return this.dictionary;
		}
	}

	// Set + Object 結構
	class UniqueSetStructure<K, V> {
		private uniqueSet: Set<DataEntry<K, V>>;

		constructor(data: [K, V][]) {
			this.uniqueSet = new Set(data.map(([key, value]) => ({ key, value })));
		}

		getStructure() {
			return this.uniqueSet;
		}
	}

	// Tree + Object 結構
	class TreeNode<K, V> {
		key: K;
		value: V;
		children: TreeNode<K, V>[] = [];

		constructor(key: K, value: V) {
			this.key = key;
			this.value = value;
		}
	}

	class TreeStructure<K, V> {
		private root: TreeNode<K, V> | null = null;

		constructor(data: [K, V][]) {
			if (data.length > 0) {
				const [rootKey, rootValue] = data[0];
				this.root = new TreeNode(rootKey, rootValue);
				data.slice(1).forEach(([key, value]) => this.addNode(this.root!, key, value));
			}
		}

		private addNode(current: TreeNode<K, V>, key: K, value: V) {
			const newNode = new TreeNode(key, value);
			current.children.push(newNode);
		}

		getStructure() {
			return this.root;
		}
	}

	// 泛型資料結構產生器
	class DataStructureGenerator<K, V> {
		public generate(
			type: 'Array + JSON' | 'Map + Object' | 'Set + Object' | 'Tree + Object',
			data: [K, V][]
		) {
			switch (type) {
				case 'Array + JSON':
					return new ListStructure(data);
				case 'Map + Object':
					return new DictionaryStructure(data);
				case 'Set + Object':
					return new UniqueSetStructure(data);
				case 'Tree + Object':
					return new TreeStructure(data);
				default:
					throw new Error("Unsupported data structure type");
			}
		}
	}

	// 使用範例
	const data: [string, number][] = [
		['apple', 1],
		['banana', 2],
		['cherry', 3]
	];

	const generator = new DataStructureGenerator<string, number>();

	const listStructure = generator.generate('Array + JSON', data);
	console.log("List Structure:", listStructure.getStructure());

	const dictionaryStructure = generator.generate('Map + Object', data);
	console.log("Dictionary Structure:", dictionaryStructure.getStructure());

	const uniqueSetStructure = generator.generate('Set + Object', data);
	console.log("Unique Set Structure:", uniqueSetStructure.getStructure());

	const treeStructure = generator.generate('Tree + Object', data);
	console.log("Tree Structure Root:", treeStructure.getStructure());

}
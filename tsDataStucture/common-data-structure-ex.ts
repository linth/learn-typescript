/**
 * 常見的資料型態:
 * 	- 1. array + json: [{}, {}, {}, ...]
 * 	- 2. array + map: [new Map(), new Map(), new Map(), ...]
 * 	- 3. map + array: Map<K, V[]>
 * 	- 4. map + object: Map<K, {...}>
 * 	- 5. object + array: {key: [...]}
 * 	- 6. set + object: Set<{...}>
 * 	- 7. tree + object: {"key": value, key: [{key: []}, {key: []}, {key: []}]}
 * 	- 8. graph + object: 
 * 
 */

{
	// 1. array + json: [{}, {}, {}, ...]
	const array_json = [
		{"id": 1, "name": "Alice", "age": 25},
		{"id": 2, "name": "Bob", "age": 30}
	];
	console.log('array_json', array_json);	

	// 2. array + map: [new Map(), new Map(), new Map(), ...]
	const data: Map<string, number | string>[] = [
		new Map<string, number | string>([["id", 1], ["name", "Alice"], ["score", 95]]),
		new Map<string, number | string>([["id", 2], ["name", "Bob"], ["score", 88]])
	];
	console.log('data', data);

	// 3. map + array: Map<K, V[]>
	const scoresBySubject = new Map([
    ["Math", [85, 92, 76]],
    ["Science", [88, 94, 79]]
	]);
	console.log('scoresBySubject', scoresBySubject);

	// 4. map + object: Map<K, {...}>
	const employees = new Map([
    [1, { name: "Alice", role: "Engineer" }],
    [2, { name: "Bob", role: "Manager" }]
	]);
	console.log('employees', employees);

	// 5. object + array: {key: [...]}
	const categorizedData = {
    fruits: ["apple", "banana", "cherry"],
    vegetables: ["carrot", "lettuce", "spinach"]
	};
	console.log('categorizedData', categorizedData);

	// 6. set + object: Set<{...}>
	const users = new Set([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
	]);
	console.log('users', users);

	// 7. tree + object: {"key": value, key: [{key: []}, {key: []}, {key: []}]}
	const folderStructure = {
    name: "root",
    children: [
			{ name: "folder1", children: [{ name: "file1.txt" }] },
			{ name: "folder2", children: [] }
    ]
	};
	console.log('folderStructure', folderStructure);

	// 8. graph + object: 
	const graph = {
    nodes: [
			{ id: 1, name: "Alice" },
			{ id: 2, name: "Bob" }
    ],
    edges: [
			{ from: 1, to: 2, relation: "friend" }
    ]
	};
	console.log('graph', graph);
}
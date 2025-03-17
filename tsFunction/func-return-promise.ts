/**
 * Typescript return Promise
 * 
 */

import { data } from "cheerio/lib/api/attributes";
import { result } from "lodash";
import { resolve } from "path";
import { features, title } from "process";
import { number, string } from "typescript-lodash";

{
	/**
	 * Promise<{ id: number; name: string }> 定義了回傳的物件類型。
	 * resolve(...) 內部的物件必須符合指定的類型。
	 * 使用 .then() 來取得 Promise 解析後的值。
	 * 
	 */
	function getUser(): Promise<{ id: number; name: string}> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve({id: 1, name: 'alice'});
			}, 1000);
		})
	}

	getUser().then((user) => console.log(user));
}


{
	/**
	 * async/await
	 * 	- async 讓函式回傳 Promise，即使回傳的值不是 Promise，TypeScript 也會自動包裝成 Promise。
	 * 	- await 用於等待 Promise 解析，並獲取解析後的值
	 */
	interface user {
		id: number;
		name: string;
	}
	
	type studnet = {
		id: number;
		name: string;
	}

	async function fetchUser(): Promise<user | studnet> {
		return { id: 1, name: 'bob'};
	}

	async function main() {
		const u = await fetchUser();
		console.log(u);		
	}

	main();
}

{
	/**
	 * try/catch 可用於捕獲 await 內部的異常，確保異常處理不會影響後續邏輯。
	 * 也可以使用 .catch() 來捕獲錯誤。
	 */

	async function fetchData(): Promise<{data: string | null}> {
		try {
			const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
			const data = await response.json();
			return { data: JSON.stringify(data)};
		} catch (error) {
			console.error("Fetch error:", error);
			return null;
		}
	}

	fetchData()
		.then((result) => console.log(result));
}


{
	/**
	 * 泛型 Promise<T>
	 * 	- 泛型 <T> 使函式可適用於不同類型的 Promise 返回值，提高可重用性。
	 */
	async function fetchData<T>(url: string): Promise<T> {
		const response = await fetch(url);
		return response.json();
	}

	fetchData<{id: number; title: string}>("https://jsonplaceholder.typicode.com/todos/1")
		.then((data) => console.log(data));
}


{
	/**
	 * Promise.all 處理多個請求
	 * 	- Promise.all([...]) 可用於並行執行多個 Promise，並且所有 Promise 完成後才會返回結果。
	 */
	type users = {
		id: number;
		name: string;
	}

	async function getUsers(): Promise<users[]> {
		return Promise.all([
			Promise.resolve({id: 1, name: 'alice'}),
			Promise.resolve({id: 2, name: 'bob'}),
		]);
	}

	getUsers()
		.then((users) => console.log(users));
}

{
	/**
	 * Promise.race 等待最快的 Promise
	 * 	- Promise.race([...]) 只會返回最快完成的 Promise，適用於超時機制。
	 * 
	 */
	async function fastOrSlow(): Promise<string> {
		return Promise.race<string>([
			new Promise((resolve) => setTimeout(() => resolve("Fast"), 1000)),
			new Promise((resolve) => setTimeout(() => resolve("Slow"), 2000)),
		]);
	}

	// async function fastOrSlow2(): Promise<string> {
	// 	return Promise.race([
	// 		new Promise((resolve) => setTimeout(() => resolve("Fast"), 1000)),
	// 		new Promise((resolve) => setTimeout(() => resolve("Slow"), 2000)),
	// 	]) as Promise<string>;
	// }
	
	fastOrSlow().then((result) => console.log(result)); // "Fast"
	
}
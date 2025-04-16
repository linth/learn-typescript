/**
 * ! fromEvent example. (Need to learn)
 * 	- DOM觸發事件
 * 	- function被呼叫
 * 
 * 
 * 應用場景	適合用法
 * 	- DOM 事件（點擊、輸入）	fromEvent
 * 	- 任意函式呼叫	Subject
 * 	- 自定義事件系統	fromEventPattern
 * 	- 微服務 / Socket / Redis 訊息	Subject or from
 * 	- 表單變化、按鈕觸發	BehaviorSubject
 */

import { fromEvent, fromEventPattern, Subject } from "rxjs";


{
	/**
	 * message$ 中的 $ 並不是 語法必要 的一部分，但它是 社群約定俗成的命名規則，具有以下幾個好處與意義：
	 * 	- 可讀性高：看到 message$，你馬上知道這是一個 Observable（可訂閱的流），而不是單一變數、函式或 Promise。
	 * 	- 易於區分資料型別：有些變數是 string、有些是 Subject<string>，透過 $ 區分可以幫助你閱讀與除錯。
	 * 	- 一致性好維護：大型專案或多人協作時，用 $ 命名 Observable 是一種乾淨的風格。
	 */
	const event$ = new Subject<string>();

	event$.subscribe((data) => {
		console.log('Function triggered with:', data);	
	});

	function myFunction(data: string) {
		// 呼叫時觸發事件
		event$.next(data);
	}

	myFunction('Hello world!');
	myFunction('Another call!');
}


{
	/**
	 * 使用 fromEventPattern（模擬事件系統）
	 * 	- 如果你有一個「非 DOM 的事件系統」，例如 WebSocket 或 Node.js 的 EventEmitter，可以用 fromEventPattern 包裝
	 * 
	 */
	class MyCustomAPI {
		onEvent(handler: Function) {
			// ...
			console.log('MyCustomAPI onEvent called.');			
		}

		offEvent(handler: Function) {
			// ...
			console.log('MyCustomAPI offEvent called.');
		}
	}

	let myCustomAPI = new MyCustomAPI();

	function addHandler(handler: Function) {	
		myCustomAPI.onEvent(handler);
	}

	function removeHandler(handler: Function) {
		myCustomAPI.offEvent(handler);
	}

	const customEvent$ = fromEventPattern(
		addHandler,
		removeHandler,
	);

	customEvent$.subscribe(data => {
		console.log('Custom event triggered:', data);
	});
}

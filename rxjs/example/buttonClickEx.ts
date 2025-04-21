import { fromEvent, map } from "rxjs";
import { EventEmitter } from "stream";



// !非常簡單的範例
{

	// 定義一個事件
	const e = new EventEmitter();

	// 定義 observable 監聽 click 事件
	// 用 fromEvent() 把 EventEmitter 的事件包成 Observable。
	// .pipe(map()) 轉換資料。
	const click$ = fromEvent(e, 'click').pipe(
		map((event) => `event triggered: ${event}`)
	);

	click$.subscribe(console.log); // 用 .subscribe() 開始聆聽資料流。

	// 模擬click行為
	e.emit('click', 'Button A');
}
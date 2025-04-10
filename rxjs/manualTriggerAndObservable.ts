import { Observable, Subject } from "rxjs";


// 建立一個 Observable，但不立即啟動
const myObservable = new Observable<string>(subscriber => {
  console.log('[Observable] 啟動了');
  subscriber.next('資料 1');
  subscriber.next('資料 2');
  subscriber.complete();
});


const trigger$ = new Subject<void>();

trigger$.subscribe(() => {
	console.log(`[Trigger] received trigger command.`);
	myObservable.subscribe({
		next: value => console.log(`[Observer] receive: ${value}`),
		complete: () => console.log(`[Observable] successful`),				
	});
});

setTimeout(() => {
	console.log('🔔 手動觸發觀察');
  trigger$.next();  // 手動觸發
}, 3000);

/**
 * Result:
 * 
 * 🔔 手動觸發觀察
 * [Trigger] received trigger command.
 * [Observable] 啟動了
 * [Observer] receive: 資料 1
 * [Observer] receive: 資料 2
 * [Observable] successful
 */
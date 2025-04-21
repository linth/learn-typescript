import { fromEvent, Observable, Subject } from "rxjs";
import { EventEmitter } from "stream";

// Observable 是報紙社，你訂了才會收到報紙
const o = new Observable( (subscriber) => {
	subscriber.next('頭條新聞!')
});

o.subscribe((data) => console.log(data));



/**
 * Subject 是廣播電台，一個主播喊話，大家都會聽見
 * 一喊話，多人同時收到。Subject = 多人共享資料來源的發送器 + 接收器
 */
const s = new Subject();
s.subscribe(msg => console.log('A 收到:', msg));
s.subscribe(msg => console.log('B 收到:', msg));

s.next('緊急消息!!!');



/**
 * fromEvent 是幫你把「門鈴事件」包成資料流
 * 把「事件」變成「可觀察的資料流」。任何點擊都會通知你。
 */
const e = new EventEmitter();
const click$ = fromEvent(e, 'click');
click$.subscribe(() => console.log('有人按門鈴！'));
e.emit('click'); // 有人按門鈴！
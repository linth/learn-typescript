import { Subject } from "rxjs";



const s = new Subject<string>();

s.subscribe((msg) => console.log('訂閱者 1 收到:', msg));
s.subscribe((msg) => console.log('訂閱者 2 收到:', msg));

s.next('hello RxJS');
s.next('第二個事件');
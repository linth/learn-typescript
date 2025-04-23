/**
 * event-bus simple example.
 * 
 */
import { filter, map, Observable, Subject } from "rxjs";


// 1. 最基本的範例
class EventBusService {
	private subject = new Subject<string>();

	public emit(message: string): void {
		this.subject.next(message);
	}

	public on(): Observable<string> {
		return this.subject.asObservable();
	}
}


// 2. 進階補充改善 (增加 interface, 修改原本class)
interface EventPayload<T = any> {
	type: string;
	data: T;
}

class ExtendEventBusService {
	private readonly subject$ = new Subject<EventPayload>();

	/**
	 * emit an event with type and data.
	 */
	emit<T = any>(type: string, data: T): void {
		this.subject$.next({ type, data });
	}

	/**
	 * subscribe to a specific event type.
	 */
	on<T = any>(type: string): Observable<T> {
		return this.subject$.pipe(
			filter(event => event.type === type),
			map(event => event.data as T),
		)
	}
}

// 呼叫者 sender
class SenderService {
	constructor(private readonly eventBus: EventBusService) {}

	public sendSomething() {
		this.eventBus.emit('Hello from Sender.');
	}
}

// 接收者 receiver
class ReceiverService {
	constructor(private readonly eventBus: EventBusService) {}

	public listen() {
		this.eventBus.on().subscribe(msg => {
			console.log('Receiver got:', msg);
		});
	}
}

{
	// 範例1
	// 建立 EventBus 實體
	const eventBus = new EventBusService();

	// 建立 Sender & Receiver，並注入 eventBus
	const sender = new SenderService(eventBus);
	const receiver = new ReceiverService(eventBus);

	// 開始監聽
	receiver.listen();

	// 模擬發送訊息
	sender.sendSomething();
}


{
	// 範例2
	const eebs = new ExtendEventBusService();

	// 訂閱 (✅ 確認正確型別)
	eebs.on<string>('add_new_user').subscribe((users) => {
		console.log(users)
	});

	eebs.emit<{id: string, name: string}[]>(
		'add_new_user', 
		[
			{ id: '1', name: 'george' }, 
			{ id: '2', name: 'peter' }
		]
	);
}



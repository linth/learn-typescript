import { Observable } from 'rxjs';


const observable = new Observable(subscriber => {
	console.log(`call observable.`);
	
	subscriber.next('Hello');
	subscriber.next('World');
	subscriber.complete();
});


observable.subscribe({
	next(value) {
		console.log(`接收到: ${value}`);		
	},
	complete() {
		console.log(`完成!`);	
	}
});


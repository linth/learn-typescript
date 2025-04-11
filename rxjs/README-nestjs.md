# using RxJS in nestjs 

🧠 小提醒：Observable 是「冷的」
- 預設情況下，Observable 是「cold」的，也就是只有有人訂閱，它才會執行。
- 也就是說，如果你在 A 模組建立一個 Observable，但 B 模組沒有先 subscribe()，那什麼事都不會發生。


1️⃣ 用 Subject 或 BehaviorSubject 當成「可觀察的橋梁」
```
// shared.service.ts
import { Injectable } from '@nestjs/common';
import { Subject } from 'rxjs';

@Injectable()
export class SharedService {
  private mySubject = new Subject<string>();

  // 可提供外部寫入資料
  emitValue(value: string) {
    this.mySubject.next(value);
  }

  // 提供 observable 給別人訂閱
  getObservable() {
    return this.mySubject.asObservable();
  }
}
```


2️⃣ 在其他 module 中 subscribe
```
// other.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { SharedService } from './shared.service';

@Injectable()
export class OtherService implements OnModuleInit {
  constructor(private sharedService: SharedService) {}

  onModuleInit() {
    this.sharedService.getObservable().subscribe(value => {
      console.log('OtherService 收到：', value);
    });
  }
}
```


3️⃣ 在某處觸發事件（發送資料）
```
// somewhere.controller.ts
@Controller()
export class SomewhereController {
  constructor(private sharedService: SharedService) {}

  @Post('trigger')
  trigger() {
    this.sharedService.emitValue('這是來自 POST 請求的資料');
    return { status: 'sent' };
  }
}
```

✅ 結論：
你說的「在一個地方建立 Observable，其他地方訂閱」在 NestJS 裡是成立的，但必須透過一個「共享的服務」（像 SharedService）來傳遞 Observable，才不會因為作用域不同而失效。



如果你想做的是類似「事件總線」「模組間通訊」，也可以考慮：
- 用 RxJS Subject + DI（如上範例）
- 用 NestJS 內建 EventEmitter2
- 或是更大規模時用 NATS、Kafka 等 message broker
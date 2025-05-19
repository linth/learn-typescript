import EventEmitter, { on } from "events";
import { emit, eventNames, off } from "process";

{
  // 初步簡單設計流程
  const eventBroker = new EventEmitter();

  eventBroker.on('event-1', () => {
    console.log(`event-1 triggered.`);
  });

  eventBroker.on('event-2', (arg1: number, arg2: string) => {
    console.log(`event-2 triggered with arguments: ${arg1}, ${arg2}`);
  });

  eventBroker.emit('event-1');
  eventBroker.emit('event-2', 42, 'hello world.');
}

{
  /**
   * 根據上方優化流程, 初步可改善的方向
   *  - event可以用類型定義事件包裝
   *  - 創建一個class來包裝eventEmitter
   */
  type EventMap = {
    'login': [username: string, password: string];
    'logout': [username: string];
    'changePermission': [username: string, newPermission: string];
  };

  class TypedEventEmitter<T extends Record<string, any>> {
    private emitter = new EventEmitter();

    emit<K extends keyof T>(eventName: K, ...args: T[K]): void {
      this.emitter.emit(eventName as string, ...args);
    }

    on<K extends keyof T>(eventName: K, handler: (...args: T[K]) => void): void {
      this.emitter.on(eventName as string, handler);
    }

    off<K extends keyof T>(eventName: K, handler: (...args: T[K]) => void): void {
      this.emitter.off(eventName as string, handler);
    }
  }

  const authEventBroker = new TypedEventEmitter<EventMap>();

  // class TypedEventEmitter<T extends Record<string, any>> {
  //   private emitter = new EventEmitter();

  //   emit<K extends keyof T>(eventName: K, ...args: T[K]): void {
  //       this.emitter.emit(eventName as string, ...args); // error.
  //   }

  //   on<K extends keyof T>(eventName: K, handler: (...args: T[K]) => void): void {
  //       this.emitter.on(eventName as string, handler);
  //   }

  //   off<K extends keyof T>(eventName: K, handler: (...args: T[K]) => void): void {
  //       this.emitter.off(eventName as string, handler);
  //   }
  // }

  // const typedEventBroker = new TypedEventEmitter<EventMap>();

  // typedEventBroker.on('event-1', () => {
  //     console.log('Typed event-1 triggered');
  // });

  // typedEventBroker.on('event-2', (arg1, arg2) => {
  //     console.log('Typed event-2 triggered with arguments:', arg1, arg2);
  // });

  // // 發送事件
  // typedEventBroker.emit('event-1');
  // typedEventBroker.emit('event-2', 11, 'haha...');  

}




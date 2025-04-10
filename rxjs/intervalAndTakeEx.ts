/**
 * interval and take example.
 * 
 * 
 */

import { interval, take } from "rxjs";



interval(1000) // 每秒發出一個數字（從 0 開始）
	.pipe(take(5)) // 只取前 5 個值
	.subscribe(x => console.log(`計時器: ${x}`))

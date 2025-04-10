import { map, of } from "rxjs";



of(1, 2, 3)
	.pipe(
		map(x => x * 10)
	)
	.subscribe(value => console.log(`轉換後: ${value}`))
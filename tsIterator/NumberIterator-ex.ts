/**
 * iterator: 
 * 	- number
 * 	- object
 * 	- gnerator function
 * 
 */

{
	class NumberIterator implements Iterator<number> {
		private current = 0;
		private max: number;

		constructor(max: number) {
			this.max = max;
		}

		next(): IteratorResult<number> {
			if (this.current < this.max) {
				return {
					done: false,
					value: this.current++
				};
			} else {
				return {
					done: true,
					value: undefined,
				};
			}
		}
	}

	const iterator = new NumberIterator(5);

	console.log(iterator.next()); // { done: false, value: 0 }
	console.log(iterator.next()); // { done: false, value: 1 }
	console.log(iterator.next()); // { done: false, value: 2 }
	console.log(iterator.next()); // { done: false, value: 3 }
	console.log(iterator.next()); // { done: false, value: 4 }
	console.log(iterator.next()); // { done: true, value: undefined }
}


/**
 * 實現可迭代 object
 * 
 */

{
	class FibonacciSequence implements Iterable<number> {
		private max: number;

		constructor(max: number) {
			this.max = max;
		}

		*[Symbol.iterator](): Iterator<number> {
			let prev = 0, curr = 1;
			while (curr <= this.max) {
				yield curr;
				[prev, curr] = [curr, prev + curr];
			}
		}
	}

	const fib = new FibonacciSequence(100);
	for (const num of fib) {
		console.log(num);	// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
	}
}
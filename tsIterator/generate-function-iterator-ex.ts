/**
 * build an iterator by using generator function.
 * 
 */

{
	interface IteratorObject<T, TReturn = unknown, TNext = unknown> extends Iterator<T, TReturn, TNext> {
		[Symbol.iterator](): IteratorObject<T, TReturn, TNext>;
	}

	interface CustomGenerator<T = unknown, TReturn = any, TNext = any> extends IteratorObject<T, TReturn, TNext> {
		next(...[value]: [] | [TNext]): IteratorResult<T, TReturn>;
    return(value: TReturn): IteratorResult<T, TReturn>;
    throw(e: any): IteratorResult<T, TReturn>;
    [Symbol.iterator](): Generator<T, TReturn, TNext>;
	}

	function* numberGenerator(max: number): CustomGenerator<number> {
		for (let i=0; i<max; i++) {
			yield i;
		}
	}

	const gen = numberGenerator(3);
	console.log(gen.next()); // { value: 0, done: false }
	console.log(gen.next()); // { value: 1, done: false }
	console.log(gen.next()); // { value: 2, done: false }
	console.log(gen.next()); // { value: undefined, done: true }
}

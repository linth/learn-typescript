/**
 * 使用 Mixin 來取代多重繼承, 雖然typescript不直接支援, 但可使用 Mixin 達到
 * 
 * pros: 允許你將不同的功能模組化, 讓模組專注點單一, 後續可靈活組合
 * cons: 
 */

{
	type Constrcutor<T = {}> = new (...args: any[]) => T;

	function GreetableMixin<TBase extends Constrcutor>(Base: TBase) {
		return class extends Base {
			greet() {
				return 'Hello from Mixin';
			}
		};
	}

	class BaseController {}

	class MyController extends GreetableMixin(BaseController) {}

	const instance = new MyController();
	console.log(instance.greet());	// Hello from Mixin
}
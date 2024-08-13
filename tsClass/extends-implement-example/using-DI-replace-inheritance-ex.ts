/**
 * 使用 Dependency Injection (DI) 替代繼承
 * 
 * pros: 減少class之間的耦合, 靈活地使用邏輯, 讓單元測試更加容易
 * cons: 
 */

{
	class CommonService {
		greet(): string {
			return 'Hello from CommonService';
		}
	}

	class MyController {
		constructor(private readonly commonService: CommonService) {}
	
		greet(): string {
			return this.commonService.greet();
		}
	}

	const cs = new CommonService();
	const mc = new MyController(cs);
	console.log(mc.greet());
	
}
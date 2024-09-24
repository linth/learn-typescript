import { string } from "typescript-lodash";

{
	// 關係, 數量 (1:1, 1:n, n:n), 

	/**
	 * 顧客與訂單: 顧客需要有訂單才能進行購買, (1:n)
	 * 	- Customer 類別依賴於 Order 類別，因為顧客需要訂單來管理其購買。
	 * 
	 * Customer ---> Order
	 */

	class Order {
		orderId: number;

		constructor(orderId: number) {
			this.orderId = orderId;
		}
	}

	class Customer {
		orders: Order[] = [];

		add(o: Order): void {
			this.orders.push(o);
		}
	}

	const c = new Customer();
	const o1 = new Order(1);
	const o2 = new Order(2);	
	c.add(o1);
	c.add(o2);

	for (let i=0; i<c.orders.length; i++) {
		console.log(c.orders[i].orderId);
	}	
}

{
	/**
	 * 車輛與引擎
	 * 	- Vehicle 類別依賴於 Engine 類別，因為沒有引擎，車輛無法啟動
	 * 
	 * Vehicle ---> Engine (1:n)
	 */
	class Vehicle {
		constructor(private engine: Engine) {}

		start() {
			console.log('Vehicle started with engine horsepower:', this.engine.horsepower);
		}
	}

	class Engine {
		// [x: string]: any;
		horsepower: number;

		constructor(horsepower: number) {
			this.horsepower = horsepower;
		}
	}
}


{
	/**
	 * 使用者與認證服務
	 * 	- User 類別依賴於 AuthService 以進行身份驗證。
	 * 
	 * User ---> AuthService
	 */
	class User {
		constructor(private authService: AuthService) {}

		// 查找使用者帳密是否符合
		login(username: string, password: string) {
			if (this.authService.authenticate(username, password)) {
				console.log(`Login successful.`);				
			}
		}
	}

	// 
	class AuthService {
		authenticate(account: string, password: string): boolean {
			// logic for authentication.
			return true;
		}
	}
}


{
	/**
	 * 資料庫連接與查詢
	 * 	- Query 類別依賴於 DatabaseConnection，因為查詢必須在資料庫連接的上下文中執行。
	 */
	class DbConnection {
		connect() {
			console.log(`database connected.`);			
		}
	}

	class Query {
		constructor(private dbConnection: DbConnection) {}

		execute() {
			this.dbConnection.connect();
			console.log(`Executing query`);			
		}
	}
}


{
	/**
	 * 網頁與 API
	 * 	- WebPage 類別依賴於 ApiService 來獲取並顯示數據。
	 */
	class ApiService {
		fetchData() {
			return `Data from API.`;
		}
	}

	class WebPage {
		constructor(private apiService: ApiService) {}

		displayData() {
			const data = this.apiService.fetchData();
			console.log(`Displaying: ${data}`);			
		}
	}
}
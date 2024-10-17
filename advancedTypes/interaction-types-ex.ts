/**
 * interaction types (交互結合type)
 * 
 * 
 * Reference
 * 	- 
 */

{
	// 利用 interface class 來處理不同身分, 並利用 interaction type 結合宣告新的 type.

	// 商業夥伴
	interface BusinessPartner {
		name: string;
		credit: number;
	}

	// 身分
	interface Identity {
		id: string;
		name: string;
	}

	// 聯繫資訊
	interface Contact {
		email: string;
		phone: string;
	}


	/** 
	 * user case: 雇員、客戶, 利用上方 interface 進行 interaction types.
	 */
	type Employee = Identity & Contact;
	type Customer = BusinessPartner & Contact;


	// test user case.
	let e: Employee = {
		id: '1', 
		name: 'george',
		phone: '(xxx) xxx-xxxx',
		email: 'george@example.com',
	};

	let c: Customer = {
		name: 'ABC Inc.',
		credit: 11111111,
		email: 'sales@abcinc.com',
    phone: '(xxx)-xxx-573xxxx5',
	};
}


{
	// Type Order: 順序不會影響結果
	// When you intersect types, the order of the types doesn’t matter.
	// In this example, typeAB and typeBA have the same properties.
	interface typeA {}
	interface typeB {}

	type typeAB = typeA & typeB;
  type typeBA = typeB & typeA;
}
/**
 * Association (關聯)
 * 	- 可能是雙向的或單向的。
 * 	- 表示類之間的相互作用，但不一定意味著一個類依賴於另一個類的存在。
 * 
 * TODO: 思考 dependency & assoication 差別
 * 	- Association 是一種持久的關係，表示兩個類之間的靜態連接，可以在多個實例之間共享。
 * 	- Dependency 是一種短暫的關係，表示一個類對另一個類的使用或依賴，改變被依賴的類可能會影響到使用該類的其他類。
 * 
 */

{

	/**
	 * 學生與課程
	 * 	- Student 類別與 Course 類別之間存在一種雙向關係，表示學生可以選擇多門課程。
	 */
	class Course {
		constructor(public ccourseName: string) {}
	}

	class Student {
		private courses: Course[] = [];

		enroll(course: Course): void {
			this.courses.push(course);
		}
	}
}


{
	/**
	 * 醫生與病人
	 * 	- Doctor 類別與 Patient 類別之間的關係顯示出醫生與病人之間的互動。
	 */
	class Doctor {
		private patients: Patient[] = [];

		addPatient(p: Patient): void {
			this.patients.push(p);
		}
	}

	class Patient {
		constructor(name: string) {}
	}
}


{
	/**
	 * 圖書館與書籍
	 * 	- Library 類別和 Book 類別之間的關係表明圖書館管理著多本書籍。
	 */
	class Book {
		constructor(public title: string) {}
	}

	class Library {
		private book: Book[] = [];

		addBook(b: Book) {
			this.book.push(b);
		}
	}
}


{
	/**
	 * 公司與員工
	 * 	- Company 和 Employee 類別之間的關係顯示了公司對員工的管理。
	 */
	class Employee {
		constructor(name: string) {}
	}

	class Company {
		private employee: Employee[] = [];

		hire(e: Employee): void {
			this.employee.push(e);
		}
	}
}


{
	/**
	 * 車輛與駕駛者
	 * 	- Vehicle 和 Driver 類別之間的關係顯示了駕駛者和車輛之間的互動。
	 */
	class Driver {
		constructor(public name: string) {}
	}

	class Vehicle {
		private drivers: Driver[] = [];

		addDriver(driver: Driver): void {
			this.drivers.push(driver);
		}
	}
}


{
	/**
	 * dependency & assoication 差別
	 * 	- Association 是一種持久的關係，表示兩個類之間的靜態連接，可以在多個實例之間共享。
	 * 	- Dependency 是一種短暫的關係，表示一個類對另一個類的使用或依賴，改變被依賴的類可能會影響到使用該類的其他類。
	 */
	class Engine {
		start() {
			console.log(`Engine started.`);			
		}
	}

	class Vehicle {
		constructor(private engine: Engine) {}

		drive() {
			this.engine.start(); 
		}
	}

	const e = new Engine();
	const v = new Vehicle(e);
	v.drive();
}
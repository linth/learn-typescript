/**
 * abstract class
 *  - Abstract classes cannot be instantiated.
 *  - An Abstract class has at least one abstract method.
 * 
 * 可以定義 properties, abstract function, ..., etc.
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-abstract-classes/
 */

abstract class AbstractDevice {
    private _deviceName: string;
    private _deviceType: string;

    // origin abstract class.    
    constructor(private dn: string, private dt: string) {
        this._deviceName = dn;
        this._deviceType = dt;
    }

    public get deviceName(): string { return this._deviceName; }
    public get deviceType(): string { return this._deviceType; }
    abstract getAllInfo(): string
}

abstract class AbstractGateway extends AbstractDevice {

}

abstract class AbstractController extends AbstractDevice {

}

abstract class AbstractEndDevice extends AbstractDevice {

}


class Device extends AbstractDevice {
    private _salary: number;

    constructor(deviceName: string, deviceType: string) {
        super(deviceName, deviceType);
    }
    
    public get salary() : number { return this._salary; }
    public set salary(salary : number) { this._salary = salary; }

    public getAllInfo(): string {
        return `device name: ${this.deviceName}, device type: ${this.deviceType}, salary: ${this.salary}`;
    }
}

let d = new Device('TX001', 'general_device');
console.log(`device name: ${d.deviceName}, device type: ${d.deviceType}`); // device name: TX001, device type: general_device

d.salary = 10000;
console.log(`the cost of device: ${d.salary}`);
console.log(d.getAllInfo());



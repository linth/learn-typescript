/**
 * interface class example.
 * 
 * 
 * Reference:
 *  - https://medium.com/enjoy-life-enjoy-coding/typescript-%E5%BE%9E-ts-%E9%96%8B%E5%A7%8B%E5%AD%B8%E7%BF%92%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91-interface-%E7%94%A8%E6%B3%95-77fd0959769f
 */

interface ICar {
    name: string;
    move(): void;
}


class Controller {
    static accelerate(car: ISpeed) {
      car.addSpeed();
    }
  
    static turn(car: ITurn) {
      car.lightningTurn();
    }
}

// 加速型的介面
interface ISpeed {
    addSpeed(): void;
}
  
// 過彎型的介面
interface ITurn {
    lightningTurn(): void;
}

// 加速型
class SpeedCar implements ISpeed {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    addSpeed(): void {
      console.log(`${this.name}使用「加速」！`);
    }
}
  
// 過彎型
class TurnCar implements ITurn {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    lightningTurn(): void {
      console.log(`${this.name} 使用「閃電轉彎」！`);
    }
}

// 兩種功能: Almight Car
class AlmightCar implements ISpeed, ITurn {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    addSpeed(): void {
      console.log(`${this.name} 使用「加速」！`);
    }
  
    lightningTurn(): void {
      console.log(`${this.name} 使用「閃電轉彎」！`);
    }
}


// 萬能型
const almightCar = new AlmightCar('衝鋒眼鏡蛇');
Controller.accelerate(almightCar); // 用遙控器使傳入的車子加速
Controller.turn(almightCar); // 用遙控器使傳入的車子過彎

/**
 * nestjs crud design architecture.
 * 
 * Reference:
 *  - https://nestjs.com/
 *  - https://github.com/nestjsx/crud
 */

class Entity {
    name: string = 'george';
    age: number = 40;

    constructor(name: string, age: number) {
        this.name =  name;
        this.age = age;
    }

    get getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
}


export abstract class CrudService<T> {
    // TODO: implement it.
    // abstract getReq(obj: Object): T;
}

export class TypeOrmCrudService<T> extends CrudService<T> {
    // constructor() {
    // }

    // getReq(obj: Object): T {
    //     console.log('obj for TypeOrmCrudService:', obj);
    //     // throw new Error('error for TypeOrmCrudService.');
    //     // const e = new Entity(obj.getName(), obj.getAge());
    //     // return e;
    // } 
}

export class ConcreteCrudService extends TypeOrmCrudService<Entity> {
    
}


const main = () => {
    // const ccs = new ConcreteCrudService();
    // console.log(ccs.getReq('hello'));    
}

main();
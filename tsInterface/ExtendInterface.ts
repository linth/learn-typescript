/**
 * extend interfaces:
 *  - extend single interface.
 *  - extend multiple interfaces.
 * 
 * An interface can extend one or multiple existing interfaces.
 * An interface also can extend a class. If the class contains private or protected members, the interface can only be implemented by the class or subclasses of that class.
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-extend-interface/
 */

interface A {
    a(): void
}

// single interface
interface B extends A {
    b(): void
}

interface C {
    c(): void
}

// multiple interfaces
interface D extends B, C {
    d(): void
}


interface Mailable {
    send(email: string): boolean
    queue(email: string): boolean
}

interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean
}

class Mail implements FutureMailable {
    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }

    send(email: string): boolean {
        console.log(`Sent email to ${email} after ${after} ms. `);
        return true;
    }

    queue(email: string): boolean {
        console.log(`Queue an email to ${email}.`);
        return true;
    }
}

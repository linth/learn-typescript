

export interface IHandler {

}


export abstract class AbsHandler implements IHandler {
	
}


export class ConcreteHandler extends AbsHandler {

}


export class DataHander extends ConcreteHandler {
	// data header.
}


export class DataBody extends ConcreteHandler {
	// data body.
} 
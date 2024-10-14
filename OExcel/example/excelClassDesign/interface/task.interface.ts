

export interface ITask {
	excute(): void;
}


export abstract class AbsTask implements ITask {
	excute(): void {
		console.log(`abstract class: AbsTask`);		
	}
}


export class ConcreteTask extends AbsTask {

}

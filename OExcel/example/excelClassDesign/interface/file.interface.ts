

export interface IFile {
	
}


export abstract class AbsFile implements IFile {
	filePath: string;
	saveFilePath?: string;
	samePath?: boolean = true;

	constructor(fp: string, sfp?: string, sp?: boolean) {
		this.filePath = fp;
		this.saveFilePath = sfp;
		this.samePath = sp;
	}
}
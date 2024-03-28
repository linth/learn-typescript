import { ITask } from "./interface/ITask";
import { CSVParser, ExcelParser, JSONParser, TXTParser } from "./OParser";

/**
 * 
 */
export class ParserHandler implements ITask {

  constructor() {
    console.log('call ParserHandler().');    
  }

  exceute(): void {
    
  }
  // private parserMap: Map<string, OParser>; 

  // constructor() {
  //   this.parserMap = new Map<string, OParser>();
  //   this.initParsers();
  // }

  // private initParsers(): void {
  //   this.parserMap.set('json', new JSONParser());
  //   this.parserMap.set('csv', new CSVParser());
  //   this.parserMap.set('excel', new ExcelParser());
  //   this.parserMap.set('txt', new TXTParser());
  //   // TODO: 新增其他 parser...
  // }

  // parseFile(data: string, fileType: string): any[] {
  //   const parser = this.parserMap.get(fileType.toLowerCase());

  //   if (parser) {
  //     return parser.parse(data);
  //   } else {
  //     throw new Error(`Unsupported file type: ${fileType}`)
  //   }
  // }
}


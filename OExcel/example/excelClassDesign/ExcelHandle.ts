import { 
  Row, 
  Workbook, 
  Worksheet 
} from "exceljs";

export class ExcelHandler {
  /** deal with the data into excel. */

  private workbook: Workbook;
  private worksheet?: Worksheet;

  constructor() {
    this.workbook = new Workbook();
  }

  setWorkbook(workbook: Workbook): this {
    this.workbook = workbook;
    return this;
  }

  setWorksheet(sheetName: string): this {
    this.worksheet = this.workbook.addWorksheet(sheetName);
    return this;
  }

  async save(filePath: string): Promise<void> {
    if (!this.worksheet) {
      throw new Error('Worksheet is not set.');
    }

    try {
      await this.workbook.xlsx.writeFile(filePath);
      console.log('Workbook saved successfully!');
    } catch (error) {
      console.log('Error saving workbook', error);      
    }
  }

  addRows(rows: Row[]): this {
    if (!this.worksheet) {
      throw new Error('Worksheet is not set.');
    }
    this.worksheet.addRows(rows);
    return this;
  }
}
import { 
  Row, 
  Workbook, 
  Worksheet 
} from "exceljs";


class OExcel {
  private workbook: Workbook;
  private worksheet?: Worksheet;

  constructor() {
    this.workbook = new Workbook();
  }

  /**
   * 設定 workbook.
   * @param workbook 
   * @returns 
   */
  setWorkbook(workbook: Workbook): this {
    this.workbook = workbook;
    return this;
  }

  /**
   * 設定 worksheet.
   * @param sheetName 
   * @returns 
   */
  setWorksheet(sheetName: string): this {
    this.worksheet = this.workbook.addWorksheet(sheetName);
    return this;
  }

  /**
   * 存檔
   * TODO: 是否考慮建立新的 class? 或是針對不同檔案儲存進行繼承/實作?
   * @param filePath 
   */
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

  /**
   * 增加 row 資料
   * @param rows 
   * @returns 
   */
  addRows(rows: Row[]): this {
    if (!this.worksheet) {
      throw new Error('Worksheet is not set.');
    }
    this.worksheet.addRows(rows);
    return this;
  }
}


import { Workbook } from "exceljs";

// create a new workbook
const wb = new Workbook();

// add a new worksheet to the workbook
const ws = wb.addWorksheet('My Sheet')

// add data to the worksheet
ws.columns = [
  { header: 'Name', key: 'name', width: 20 },
  { header: 'Age', key: 'age', width: 10 },
  { header: 'Email', key: 'email', width: 30 }
];

ws.addRow({ name: 'John Doe', age: 30, email: 'john.doe@example.com' });
ws.addRow({ name: 'Jane Smith', age: 25, email: 'jane.smith@example.com' });

// save the workbook to a file
wb.xlsx.writeFile('OExcel/example/myWorkbook.xlsx')
  .then(() => {
    console.log('Workbook saved successfully!');    
  })
  .catch((error) => {
    console.log('Error saving workbook:', error);
  })

# 初步簡單設計


初步設計會採用幾個重點:
1. Excel handler
2. File handler
3. JSON parser
4. Validator
5. Service
6. 工廠模式、抽象工廠
7. MVC模式
8. 觀察者模式、策略模式、組合模式
9. SOLID



```
classDiagram
  direction LR
  Handler <|-- FileHandler
  Handler <|-- ExcelHandler
  Handler <|-- TaskHandler
  Handler <|-- ParserHandler
  FileHandler o-- OFile
  ExcelHandler o-- OExcel
  TaskHandler o-- OTask
  ParserHandler o-- OParser
  OParser <|-- JSONParser
  OExcel --|> OFile
  OTask --|> OFile
  OParser --|> OFile
```

--> 依賴關係
--|> 繼承關係
--o 組合關係
<|-- 實現關係


# 關係
1. 依賴關係 (Dependency)
用虛線箭頭表示,表示一個類別使用另一個類別,但沒有包含關係。箭頭指向被依賴的類別。
2. 關聯關係 (Association)
用實線表示,表示兩個類別之間有某種聯繫。單向關聯用箭頭表示,雙向關聯沒有箭頭。
3. 聚合關係 (Aggregation)
用空心菱形加實線表示,表示一種弱的"整體-部分"關係。整體與部分可以分開。
4. 組合關係 (Composition)
用實心菱形加實線表示,表示一種強的"整體-部分"關係。整體與部分不可分離。
5. 繼承關係 (Inheritance)
用空心三角形加實線表示,表示一種父子關係。子類繼承父類的屬性和方法。
6. 實現關係 (Realization)
用虛線空心三角形表示,表示類實現接口的關係。類實現了接口定義的所有方法。


# 主要元素
- Handler: 一種特殊的task, Handler 只有在收到 notify 指令的 Task 變更狀態後才會執行, 並且通常在所有 Task 完成後執行。Handler 只在其所依賴的 Task 產生變更時才會被觸發, 這樣可以避免不必要的操作。
- File (Excel, text, ..., etc.)
- Parser (Json, ..., etc.)
- Task: 執行模組的命令, 如: 重新開機, 配置文件, 啟動服務, 連線服務, ..., etc

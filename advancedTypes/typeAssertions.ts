/**
 * Type Assertions
 *  - Type assertions use the as keyword or an angle bracket <> syntax.
 * 
 * 作用:
 * 1. 指定變數的確切型別：當TypeScript無法正確推斷變數的型別時，開發人員可以使用型別斷言明確指定變數的型別。這可以確保代碼的正確性並提供編譯時的類型檢查。
 * 2. 處理不確定或多態型別：當變數的型別可以是多個可能的類型之一時，型別斷言可以將變數斷言為特定的類型，從而避免潛在的錯誤。這在處理具有多態行為的函數或函數庫時特別有用。
 * 3. 與第三方庫進行互操作：當與第三方JavaScript庫進行交互時，這些庫可能沒有提供完整的型別定義，或者型別定義可能不準確。在這種情況下，型別斷言可以用於明確地指定變數的型別，以便更好地集成第三方庫並避免型別錯誤。
 * 4. 處理遺留代碼：當在遺留代碼中進行重構或添加類型註釋時，型別斷言可以用於將部分代碼視為具有特定型別，從而實現漸進式的類型採用。這使得在不完全具有型別檢查的代碼庫或專案中引入TypeScript更加容易。
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/type-assertions/
 */

{
    // function 收集到數值並回傳 price 的 format.
    function getNetPrice(price: number, discount: number, format: boolean): number | string {
        let netPrice = price * (1 - discount);
        return format ? `$ ${netPrice}` : netPrice;
    }
    
    let netPrice = getNetPrice(100, 0.05, true) as string;
    console.log(netPrice, typeof(netPrice));
    
    // using `as` 
    let netPrice2 = getNetPrice(100, 0.05, false) as number;
    console.log(netPrice2, typeof(netPrice2));
    
    // using `<>`
    let netPrice3 = <number>getNetPrice(100, 0.05, false);
    console.log(netPrice3, typeof(netPrice3));
}


{
    // 斷言變數為特定型別： 在這個例子中，我們將myVariable斷言為字串型別，然後使用.length屬性獲取字串的長度。
    const myVariable: unknown = "Hello TypeScript!";
    const length: number = (myVariable as string).length;
    console.log(length, typeof(length)); // 輸出：17 number

    // 錯誤範例
    // const numberVariable: number = 11;
    // const length2: number = (numberVariable as string).length; // 錯誤
    // console.log(length2, typeof(length2)); // 輸出：17 number
}

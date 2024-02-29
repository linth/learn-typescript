/**
 * !! 重要 !!
 * Type: 可用來定義新的類型, 可以是原始類型 (number, string, ..., etc.)
 * 
 * 也可以定義聯合類型 (union)、交叉類型 (intersection)、tuple類型、范型類型 (generic)
 * 
 * 通常會跟 interface 比較
 *  - 用於 object 描述它的結構和行為
 *  - 可被實現 (implements)
 *  - 可被擴充 (extends)
 *  - 可多次聲明並會自動合併
 */


{
  // Union types
  type Status = 'success' | 'error' | 'pending';

  function getStatusMessage(status: Status): string {
    switch (status) {
      case 'success':
        return 'Operation successful';
      case 'error':
        return 'An error occurred';
      case 'pending':
        return 'Operation pending';
      default:
        throw new Error('Invalid status');
    }
  }

  console.log(getStatusMessage('success')); // Operation successful
}

{
  // intersectioin types.
  type Printable = { print: () => void } //! 新的寫法, 意思是定義一個名為Printable類型別名, 它具有一個 print的方法。
  type Loggable = { log: () => void }

  // 上方舊有寫法
  // interface Printable {
  //   print: () => void;
  // }

  function createLoggerAndPrinter(): Printable & Loggable {
    return {
      print() { 
        console.log('printing...');
      },
      log() {
        console.log('logging...');        
      },
    }
  }

  const loggerAndPrinter = createLoggerAndPrinter();
  loggerAndPrinter.print(); // printing...
  loggerAndPrinter.log(); // logging...
}

{
  // tuple type
  type Coordinate = [number, number];

  function distance(point1: Coordinate, point2: Coordinate): number {
    const dx = point2[0] - point1[0];
    const dy = point2[1] - point1[1];
    return Math.sqrt(dx * dx + dy * dy);
  }

  const point1: Coordinate = [0, 0];
  const point2: Coordinate = [3, 4];
  console.log(distance(point1, point2)); // 5
}


{
  // generic type.
  type Pair<T> = [T, T]; 

  function reversePair<T>(pair: Pair<T>): Pair<T> {
    return [pair[1], pair[0]];
  }

  const stringPair: Pair<string> = ['hello', 'world'];
  const reversedPair = reversePair(stringPair);
  console.log(reversedPair); // [ 'world', 'hello' ]  
}


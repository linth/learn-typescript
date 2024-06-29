import _ from 'lodash';



// 过滤出偶数
// const evenNumbers = _.filter(array, n => n % 2 === 0);
// console.log(evenNumbers); // 输出: [2, 4] 

class ArrayHandling {
  array: number[];

  constructor(a?: number[]) {
    if (a) {
      this.array = a;
    } else {
      this.array = [1, 2, 3, 4, 5];
    }
  }

  doubeArray() {
    this.array = _.map(this.array, n => n * 2);
    return this;
  }

  print() {
    console.log(this.array);
  }
}


const ah = new ArrayHandling();
ah.doubeArray().print();

const ah2 = new ArrayHandling([2, 4, 6]);
ah2.doubeArray().print();
let fibonacci: Array<number> = [1, 1, 2, 3, 5];

function sum() {
  let args: number[] = arguments;
}

// Type 'IArguments' is missing the following properties from type 'number[]': pop, push, concat, join, and 24 more.

function sum1() {
  let args: {
      [index: number]: number;
      length: number;
      callee: Function;
  } = arguments;
}

let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];

function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
      result[i] = value;
  }
  return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']
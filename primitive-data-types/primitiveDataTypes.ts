let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
// 其中 0b1010 和 0o744 是 ES6 中的二进制和八进制表示法，它们会被编译为十进制数字。

let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

function alertName(): void {
  alert('My name is Tom');
}

let unusable: void = undefined;

let u: undefined = undefined;
let n: null = null;

// 这样不会报错
let num: number = undefined;
// 这样也不会报错
let u1: undefined;
let num1: number = u1;
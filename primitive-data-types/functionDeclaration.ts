function sum(x: number, y: number): number {
  return x + y;
}

let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};

function buildName(firstName: string, lastName?: string) {
  if (lastName) {
      return firstName + ' ' + lastName;
  } else {
      return firstName;
  }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');

// TypeScript 会将添加了默认值的参数识别为可选参数
function buildName1(firstName: string = 'Tom', lastName: string) {
  return firstName + ' ' + lastName;
}
let tomcat1 = buildName1('Tom', 'Cat');
let cat1 = buildName1(undefined, 'Cat');


function push(array: any[], ...items: any[]) {
  items.forEach(function(item) {
      array.push(item);
  });
}

let a = [];
push(a, 1, 2, 3);


function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
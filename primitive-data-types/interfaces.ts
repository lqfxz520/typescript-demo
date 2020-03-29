interface Person {
  name: string;
  age: number;
}

let tom: Person = {
  name: 'Tom',
  // age: 25,
  gener: 1
};

// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
interface Person1 {
  name: string;
  age?: number;
  [propName: string]: string;
}

let tom1: Person1 = {
  name: 'Tom',
  age: 25,
  gender: 'male'
};

// index.ts(3,5): error TS2411: Property 'age' of type 'number' is not assignable to string index type 'string'.
// index.ts(7,5): error TS2322: Type '{ [x: string]: string | number; name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Index signatures are incompatible.
//     Type 'string | number' is not assignable to type 'string'.
//       Type 'number' is not assignable to type 'string'.


interface Person3 {
  name: string;
  age?: number;
  [propName: string]: string | number;
}

let tom3: Person3 = {
  name: 'Tom',
  age: 25,
  gender: 'male'
};


interface Person4 {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom4: Person4 = {
  id: 89757,
  name: 'Tom',
  gender: 'male'
};

tom4.id = 9527;

// index.ts(14,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.


// 只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
interface Person5 {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom5: Person5 = {
  name: 'Tom',
  gender: 'male'
};

tom5.id = 89757;

// index.ts(8,5): error TS2322: Type '{ name: string; gender: string; }' is not assignable to type 'Person'.
//   Property 'id' is missing in type '{ name: string; gender: string; }'.
// index.ts(13,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
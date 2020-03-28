var myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
var myFavoriteNumber1;
myFavoriteNumber1 = true;
// index.ts(2,1): error TS2322: Type 'boolean' is not assignable to type 'string | number'.
//   Type 'boolean' is not assignable to type 'number'.
function getLength(something) {
    return something.length;
}
// index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.
var myFavoriteNumber2;
myFavoriteNumber2 = 'seven';
console.log(myFavoriteNumber2.length); // 5
myFavoriteNumber2 = 7;
console.log(myFavoriteNumber2.length); // 编译时报错
// index.ts(5,30): error TS2339: Property 'length' does not exist on type 'number'.

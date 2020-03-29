var tom = {
    name: 'Tom',
    // age: 25,
    gener: 1
};
var tom1 = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
var tom3 = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
var tom4 = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};
tom4.id = 9527;
var tom5 = {
    name: 'Tom',
    gender: 'male'
};
tom5.id = 89757;
// index.ts(8,5): error TS2322: Type '{ name: string; gender: string; }' is not assignable to type 'Person'.
//   Property 'id' is missing in type '{ name: string; gender: string; }'.
// index.ts(13,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.

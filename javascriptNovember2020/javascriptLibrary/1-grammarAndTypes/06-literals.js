/*
LITERALS

1-grammarAndTypes
    06-literals.js
*/

let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']; //array
// 0, 1, 2, etc items
console.log(weekDays.toString()); //this is a method, turns whatever variables are to a string
console.log(weekDays[3]); //grabbing the 3rd from array (thursday)

let soup = { //object
    a: 'chicken noodle', 
    b: 'tomato',
    c: 'beef and barley',
}
console.log(soup.c);

//array and object literals can hold primitive and complex types (arrays, objects and functions)

let complexArrLiteral = [1, true, 'Academy', [1,2,3], {key: 'test'}, function(){return 'yes'}];
// 0- number, 1- boolean, 2- string, 3-array, 4-object, 5-function
console.log(complexArrLiteral[5]);
console.log(complexArrLiteral[3]);

let complexObjLiteral = { num: 1, boolean: true, string: 'Academy', arr: [1,2,3], obj: {key: 'test'}, func: function(){return 'yes'}};

console.log(complexObjLiteral.func);
console.log(complexObjLiteral.arr);
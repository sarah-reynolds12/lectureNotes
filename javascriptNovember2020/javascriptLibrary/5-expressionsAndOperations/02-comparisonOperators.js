/*
COMPARISON OPERATORS

5-expressionsAndOperators
    02-comparisonOperators.js
*/

//equality comparison operator
console.log('3'== 3); //left is a string, right is a number
console.log(4 == 4);
console.log(3 == '4'); //types and values are different

//strict equality comparison operator
console.log(3 === 3);
console.log('3' === 3); //triple cares about value and type

//not equal comparison operator
console.log('3' != 4); //does opposite of equality, whats to see difference
console.log('3' != 3); //BANG(!)=s doesn't care about the type, cares about the number

//strict not equality comparison operator
console.log('3' !== 3); //not same types but triple cares about the types
console.log(3 !== 3);

//greater than
console.log(3 > 2);
console.log( 2 > 3);

//less than 
console.log(2 < 3);
console.log(3 < 2);

//greater than or equal to
console.log(3 >= 2);
console.log(3 >= 3);

//less than or equal to
console.log(2 <= 3);
console.log(3 <= 2);

//And && (both expressions on either side of the operator must be true for 'And' to be true), nestest logic
console.log(1<2 && 3>0); //true on both sides
console.log(2<1 && 3>0); //one side is false 

//Or || (either expression on one side must be true for 'Or' to return true)
console.log(1<2 || 3<0); //one side is true which makes this true
console.log(2<1 || 3<0);

let obj = {key: 'test'};
console.log(obj == {key: 'test'}); //looks to match but complex types compare if they are the exact same thing, like twins not physically the same but they look the same, just duplicates

console.log(obj == obj); //content and exact same item

let arr = [1,2,3,4];

console.log(arr == [1,2,3,4]); //content of arr's are the same but they are not the same type
console.log(arr == arr);









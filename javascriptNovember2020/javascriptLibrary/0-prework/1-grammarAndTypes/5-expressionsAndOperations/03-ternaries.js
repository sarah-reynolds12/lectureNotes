/*
TERNARIES- sleek ways to do conditional logic, combines the else statements; conditional on the left then ? then right is the code to run

5-expressionsAndOperators
    03-ternaries.js
*/

let x = 6;

x > 0 ? console.log('x is positive') : console.log('x is negative'); // x > 0 is the conditional ? is the ternary, if its true the left will show and if its false the words on the right of the : will show

if (x > 0 ){
    console.log('x is positive');
} else {
    console.log('x is negative');
}

let greeting = 'salutations!';

if (greeting.length > 10) {
    console.log('that is a long greeting!');
} else if (greeting.length == 10) {
    console.log('your greeting is exactly 10 characters');
} else {
    console.log('what a normal greeting');
}

greeting.length > 10 ? console.log('That is a long greeting!') : 
greeting.length == 10 ? console.log('your greeting is exactly 10 characters') :
console.log('what a normal greeting');
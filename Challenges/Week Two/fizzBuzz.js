//ELSE/IF

var FB = 3;

if (FB % 3 == 0 && FB % 5 ==0){ //check this first because its the more strict
    console.log('Fizz Buzz');
} else if (FB % 3 == 0){
    console.log('Fizz'); 
} else if (FB % 5 == 0){
    console.log('Buzz');
} 

   
 
//SWITCH

let FB = 15

switch (FB % 5 == 0 && FB % 3 == 0){
    case true:
        console.log('Fizz Buzz');
}

//in class example

let FB = 15

let isDivisibleBy5and3 = FB % 5 == 0 && FB % 3 == 0;
let isDivisibleBy3 = FB % 3 == 0;
let isDivisibleBy5 = FB % 5 == 0;

console.log(isDivisibleBy3);

switch (true){
    case FB % 5 == 0 && FB % 3 == 0:
        console.log('Fizz Buzz');
        break;
        case FB % 3 == 0:
        console.log('Fizz');
        break;
        case FB % 5 == 0:
        console.log('Buzz');
        break;
    default: 
    console.log('nothing works');
}

//TERNARY

let FB = 15

FB % 3 == 0 ? console.log('Fizz') :
FB % 5 == 0 ? console.log('Buzz') : 



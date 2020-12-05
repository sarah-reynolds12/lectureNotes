/*
FUNCTIONS
*/

//General ideas: at their broadest level, functions do the following: 
//1. take some input which the function will handle or process
//2. process the input given to them
//3. usually but not always return some value
//4. can be invoked or used as many times as we want. cutting down on code repetition

//example 1:
function newFunc(num){//inside para is the input to the function, like microwave taking food and time and output is heated food, can take a lot of things as input
    return num + 1;//want this tool to give back to us this number plus 1
}
console.log(newFunc(7)); //input here which is like the food or time on the microwave, take the input or number then returns what we have as the function 
console.log(newFunc(10));
console.log(newFunc(11));
console.log(newFunc(-2));

//example 2:

function sentence(firstName, lastName){
return `My first name is ${firstName} and my last name is ${lastName}`; 
}

console.log(sentence('Jonathon', 'Huer'));
console.log(sentence('Sarah', 'Reynolds'));
let superImportantSentence = sentence('Nicky', 'Disborough');
console.log(superImportantSentence);

//lets build a function that takes a complex type-- an array in this case, and console.log each item in the input array

let arr = [1, true, {key: 'string'}, [0, false, null], 'heya!'];
let arr2 = [5,6,7,8,9,10];

//combining a function and loop
function iteratorFunc(inputArr){
    for (let element of inputArr){
        console.log(element);
    }
}

iteratorFunc(arr);
iteratorFunc(arr2); //side effect, didn't return something. take input array and logging everything in the array
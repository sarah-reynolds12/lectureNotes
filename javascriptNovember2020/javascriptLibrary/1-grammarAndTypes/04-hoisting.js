/* 
HOISTING- something that is unique to JS and need to be aware of

1-grammarAndTypes
    04-hoisting.js
 
*/

//example 1:
console.log(scissors); //haven't made a variable yet? runs undefined but its below the console. 
var scissors = 'blue';

/*
example 1 breakdown:
can define variables after you use them
scissors variable gets hoisted to the top then the console log gets read
var scissors;
console.log(scissors);
scissors = 'blue' this still runs undefined like above example, assignment happened later
*/

//example 2:

function hoistTest(){
    console.log(testVar);
    var testVar = 10;
    console.log(testVar);
}

hoistTest();

//exmample 2 breakdown:
function hoistTest(){
    var testVar;
    console.log(testVar);
    var testVar = 10;
    console.log(testVar);
}

hoistTest();
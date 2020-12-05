/*
ARROWS FUNCTIONS

*/

//normal function declaration 
function coffee(){ //takes no inputs because () are empty
    return 'coffee is good';
}

//normal function expression- unnamed function
let tea = function(){
    return 'tea is healthy';
}

console.log (coffee()); //anytime you invoke or call a function you need (), dont add anything into () because it doesnt have any input in the declaration/definition
console.log(tea()); //when called you dont see anything until you console log

//fat arrow or arrow functions are always anonymous (unnamed) equal to a variable that equals tea 
//arrow function expression
let hotChocolate = () => { //rather than function we use ()
    return 'hot chocolate is king';
}

console.log(hotChocolate());

//arrows are concise

let animals = (kittens, puppies) => {return `I have ${kittens} cats(s) and ${puppies} dogs`}

console.log(animals(3,2)); //i have 3 cats and 2 dogs

//concise vs block body
//concise body

let apples = x => `There are ${x} apples`; //when have single argument can exclude () and something quick to return can use same line of the arrow without curly braces
console.log(apples(10)); //there are 10 apples

//block body

let bananas = x => {
    return `there are ${x} bananas`;
}

console.log(bananas(5)); //there are 5 bananas

//return must be explicitly written in a block body arrow function, isn't needed for concise

let func = () => 'hi'; //arrow needs to follow directly after
console.log(func());







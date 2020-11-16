//Objects

/*
What is an object? 

An object is a container that stores property names and their values
(it can hold multiple data types)

Denoted by{}
Have keys and values--color (key): 'blue' (value) separared with a colon, each key-value pair is separated with a comma
*/

let hulk = {
    color: 'green', 
    age: 42, 
    isStrong: true
}

console.log(hulk);
console.log(hulk.age);
console.log(typeof hulk);

//Arrays

/*

Arrays store multiple values in an ordered way. Obejects stores many too, but in a numbered sequence. ex. steps to solve a math problem (array). They, too, hold multiple data types.

Denoted by []
has values of ('blue', 'green', 'yellow'), separated by commas
*/

var stepsToBrushTeeth = ['uncap toothpaste', 'squeeze toothpaste', 'rinse brush', 'brush', 'clean toothbrush'];
//console.log(stepsToBrushTeeth);
//array indexing starts with 0 (uncap toothpaste)
//numbering usually starts at 0 not 1 in coding

console.log(stepsToBrushTeeth [3]);
console.log(typeof stepsToBrushTeeth);

//object is a parent of an array. type of will always be object

/*
ARRAYS

What is an array?
- has [] brackets
- can hold multiple datatypes
- can list data types in an ordered, numbered way

*/

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];
                                                                //this is 6       
console.log(typeof students); //object; hidden keys to the array are 0-6. Arrays are built on the back of an object; typeof doesnt tell me my variable is an array
console.log(students instanceof Array); //true, this will tell me that its an array
console.log(students[2]);
console.log(students[1]);
console.log(students[6]);

//want to grab Iesha
let name = students[6][1];//6 grabs [Ryan, Iesha] 1 grabs Iesha
console.log(`Hello ${name}, you look nice today`);

//recall for-of loop

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

for(f of food){ //for of loop gives values
    console.log(f +` is amazing`); //f represents the actual values
}

//Array Methods 
// -modzilla documentaion network (MDN) is a good resource

food.push('Pizza'); //can use any .built-in functions for arrays PUSH will add to the end of the previous food array
console.log(food);
food.splice(1, 1, 'Bananas'); //adding into an array, where to insert; 1 will add right after Pecan Pie, take out Shrimp, and add Bananas
console.log(food);
food.splice(2, 0, 'Sweet Potato Pie'); //SPLICE will insert after Quesadilla, 0= dont remove anything, and add Sweet Potato after Bananas (its the new 2 or number we put at the beginning)// asks for insertion point, how many to remove, and then items to add
console.log(food);
food.pop();
console.log(food); //POP removes the last element of an array

food = food.slice(2,4); //SLICE first number is the first element to grab from the array and second number is the stop position (will not be included)
console.log(food); // Sweet Potato Pie, Quesadilla

//forEach allows us to iterate with loops specifically, and we can directly grab both the elements and their index numbers 
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
food.forEach((f) => console.log(f)); //callback function is a function that runs when some other code has already been processed, laid it out like for of loop without writing it all out.

food.forEach((food, index) => { //code to be repeated is now in the ()
    console.log(food);
    console.log(index);
})

food.forEach((food, index) => { //can grab arugments from functions and can combine in a meaningful way
    console.log(`The ${food} food in our array is at position ${index}`);
})

let movies = ['300', 'Snow White', 'The Phantom Menace', 'The Watchmen', 'The Sound of Music'];

movies.push('The Force Awakens');
console.log(movies);

movies.splice(3, 1, 'The League of Extrodinary Gentlemen');
console.log(movies);

movies.forEach(movie => console.log(movie));
console.log(movies.length); //how many items are in the array

/*let's do the following with an array: 
-we will check if we are working with an array
-flip the values within the array (what was in index 4 is now in 0, 3, to 1, etc.)
-using a method only, lets print the values of the arranges array
*/

let arr = new Array(1,2,3,4,5); //different way to write an array
console.log(arr);
if (arr instanceof Array){
    let revArr = arr.reverse();
    revArr.forEach(numbers => console.log(numbers))
}


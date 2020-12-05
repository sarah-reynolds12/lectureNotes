/*
Arrays 

    - are used to store multiple values in a single variable
        - there are array methods that allow us to traverse, as well as mutate, the data being held by an array
    - are 0 indexed, meaning the first item in the array will have an index of 0 and last item will have an index of the arrays length -1
*/

let arr  = ["This is the first element", "This is the second element", "This is the third element"];

console.log(arr[0]);


//this is the Array class constructor
let test = new Array ();
console.log(test);


//ForEach Method- executes the supplied function for each element in the array; can NOT return anything

let boardGames = ["Monopoly", "Clue", "Risk", "Candy Land", "Catan"];

for (let i = 0; i < boardGames.length; i++){
    console.log(boardGames[i]);
}

//Block Body
boardGames.forEach(game => {
    console.log(game)
});

//Concise Body
boardGames.forEach(game => console.log(game));

//Anonymous Function
boardGames.forEach(function (game){
    console.log(game);
})

let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];

/* ARRAY METHODS (functions that are within a class)

- to access a specific element in an array, use bracket notation along with its index value
    console.log(shoppingList[0]); gets first element in the array

- array.length: returns the number of elements in the array 
    console.log(shoppingList.length)- 5 elements

- array.push () (invoke): adds element to the end of the array
    shoppingList.push("salt") - now have 6 elements, salt is added to the end
    console.log(shoppingList)

- array.unshift(): adds a new element at the beginning of the array
    shoppingList.unshift("salt") - puts salt at the beginning of the array
    console.log(shoppingList)

- array.pop(): removes the last element in the array and returns that element
    shoppingList.pop(): dont need to invoke it with anything, will just remove the last one
    let removedElement = shoppingList.pop();
    console.log(shoppingList);
    console.log(removedElement)

- array.shift(): removes the first element in the array and returns that element
    shoppingList.shift(); will remove the first one and if add removedElement will show what was removed

- array.map(): transforms the elements in the original array by calling the given function onces for each element of the array (similar to forEach method but can't return anything from a forEach)
    console.log(shoppingList.map(item => item.toUpperCase())); uppercases all of the letters in the array
    let newShoppingList = shoppingList.map(item = item.toUpperCase());
    console.log(newShoppingList)

- array.filter(): creates a new array with only the elements that pass the test in a given function
    let newShoppingList = shoppingList.filter(item => item.startsWith("l"));
    console.log(newShoppingList); returns just limes and lemons

- array.find(): returns the first element in the array that passes a test give as a function
    let shoppingItem = shoppingList.find(item => item.startsWith("l"));
    console.log(shoppingItem); gives back limes,(first item in the array with an l)

- array.includes(): determines whether an array has a specific element (boolean- true or false)
    let isIncluded = shoppingList.includes("limes"); 
    console.log(isIncluded); true, watch the capitalization 

- array.indexOf(): search the array for a specific element and returns its first index
    returns -1 when element is not found
    console.log(shoppingList.indexOf("lemons")); will come back with where it is in the array/index (2)
    console.log(shoppingList.indexOf("salt")); -1 because its not in the list and item not found
    
- array.findIndex(): returns the index of the first element in the array that passes the test in a given function; returns -1 when the element is not found
    let foundIndex = shoppingList.findIndex(item => item.startsWith('g"));
    console.log(foundIndex);  3, will give the index value of where g is found

- array.every(): check if all elements in an array pass a test given as a function. If there is one element that returns a false value, the function returns false and does not check the rest of the elements (checking uniformity) if any fail this test, test fails
    console.log(shoppingList.every(item => item.length > 1)); true (all elements have greater than 1 length). 

- array.concat(): merge two or more arrays, and returns a new array
    let anotherShoppingList = ["salt", "mint leaves", "olives"];
    let combinedArrays = shoppingList.concat(anotherShoppingList);
    console.log(combinedArrays); will add first and second array together

- array.slice(): selects a part of the array and returns a new array. Selects the elements starting the provided start argument and ends at, but does not include the provided end argument
    let newArray = shoppingList.slice(); ex if put in 1, 3 it pulls limes and lemons. will pull 1-2 index but not 3
    console.log(newArray);

- array.splice(): add/removes elements in the array and returns the removed elements.
     First argument takes an integer that specifies at what index to add/remove elements.
     Second argument takes in the number of items to be removed. 
     Optional third element that takes in the new elements to be added to the array.
        shoppingList.splice(2, 1): start at 2 index and remove 1
        console.log(shoppingList), took out lemons
        shoppingList.splce(2, 1, "salt"); took out lemons and added salt, can add two items by adding , 

- array.sort(): sorts the items in an array. the sort order can either be alphabetic or numeric, and either ascending or descending. By default, sort() orders the values as strings in alphabetica or ascending order. Can take in a compare function which indicates if you want to sort by ascending or descending. 
    console.log(shoppingList.sort()); sorted in ABC order

    let costs = [3, 2, 13, 4];
    console.log(costs.sort(a, b) => b - a); take in a and b and then subtract b from a will be biggest to smallest (descending)
    console.log(costs.sort(a, b) => a - b); ascending order, smallest to biggest

- array.reverse(): reverses the order of the elements of the array
    console.log(shoppingList.reverse); runs it last element to first 

- array.toString(): converts the array into a string
    console.log(shoppingList.toString()); no brackets, just string

- array.join(): converts the elements in the array into a string. Can accept an optional parameter, "seperator", which indicates how the elements will be separated. Default seperator is a comma 
    console.log(shoppingList.join("! and ")); puts ! after each element, and a space as a string, no brackets

- an ES6 feature: spread operator (very powerful and useful tool). The spread operator, indicated by these 3 dots ... before an array, expands the contents of the array and takes it out of the array structure
    console.log(...shoppingList); comes back as each value, no commas, in a string by itself

    let numArray = [20, 40, 60];
    function sum(numOne, numTwo, numThree){
        return numOne + numeTwo + numThree;
    }
    console.log(sum(...numArray)); without the ... it read the array as numOne and everything else undefined ...took the numbers out of the brackets and spread them out and access them individually 
/*
FOR OF LOOPS
*/

//feels like a for in loop but has a different feature behind the scenes
//of requires that your 'thing' you're looping through be iterable- means it needs to be numbered
//keys are not numbered in any way
//[array is numbered in a way that works], like a recipe, numbered steps
//for of grabs the value of the thing, not the number of the key

let student = {name: 'Peter', isAwesome: true, degree: 'javascript', week: 1};

for (item of student){
    console.log(item); //wont run the code, worked for for in but not for of
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for(cat of catArray){ //cat is value not number of array this time
    console.log(cat, 'says meow');
}
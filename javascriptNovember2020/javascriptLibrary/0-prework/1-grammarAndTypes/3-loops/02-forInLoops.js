/*
FOR IN LOOPS- good for working through objects and arrays, they depend upon something being true
*/

let student = {name: 'Peter', awesome: true, degree: 'javascript', week: 1}; //key is on the left of the : and value is on the right

for(item in student){
    console.log(item);// item represents keys in the object
    console.log(student[item]); //will show the values
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat in catArray){
    console.log(cat); // cat represents the positions of the array
    console.log(catArray[cat]);
}

//let's write a for-in loop that capitalizes the first letter of a name
// in does not require that the 'thing' you loop through be numbered

let instructor = 'pAuL';
let capName; //starts as undefined and then you set it

for (n in instructor){
    if (n == 0){ //setting position of letters like array numbering
        capName = instructor[n].toUpperCase();
    } else {
        capName += instructor[n].toLowerCase();
    }
}

console.log(capName);
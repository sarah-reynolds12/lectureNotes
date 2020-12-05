/*
LOOPS

3-loops
    01-forLoops,js
*/

/*
Loops offer a quick and easy way to do something repeatedly

There are many kinds of loops but they all do roughly the same thing:
    For statement
    do while
    while
    labeled
    break
    continue
    for in
    for of
    .forEach
    .map
*/

//Loop structure: had three fundamental pieces 1. creating of an indexing variable 2. a run condition 3. change to the indexing variable 

//count to 10 from 0 and log the numbers:
for (let i = 0; i <= 10; i++){
    console.log(i);
}

//loops can run infintely
//for (let i = 0; i++){
//  console.log(i);
// } would break our code and have to leave the site and come back in

//loop that counts to -25 by -3, starting from 2, logs the numbers

for(let i = 2; i >=-25; i = i-3){
    console.log(i);
}

//display the letters in a name individually
let name = 'Kinkade';

for(let i = 0; i < name.length; i++){
    console.log(name[i]); //[is usually access to elements of an array but also the same for strings which is what the name is, can think of the name as an array, each letters is at a position (k- 0, i-1, etc)]
}

//for loops can use lots of variables:
let start = 2;
let stop = Math.floor(Math.random()*30);//math is built in java script, random is decimals from 0-1 and floor shaves off decimal
let increment = 3;

for(let i = start; i <= stop; i = i + increment){
    console.log(i);
}

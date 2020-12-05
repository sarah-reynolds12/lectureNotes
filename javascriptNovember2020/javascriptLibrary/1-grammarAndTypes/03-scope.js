/*
SCOPE
1- grammarAndTypes
    03-scope.js
*/

/*
what is scope?

JS has both LOCAL and GLOBAL scope; global scope is the left most indented part of the file, read at the start
*/

var x = 12; //global- access anywhere

function scope(){ //function has the job of running some bundle or block of code when we call the function. think of it as a tool we call on to use/ this is local scope because it is intentional, doesnt exist outside this function 
    var x = 33;
    console.log(x);
}

scope(); //call the tool, lods 33
console.log(x); //logs 12
//when call the tool, inside the funcion works and chooses whats inside of what we are calling. when inside a funcion has its own narrow view. any variables only exist inside that function

//example 2

var x = 12; 

function scope (){
    x = 33; 
    console.log(x);
}

scope (); //33 here 
console.log(x); //33 here

//example 3

var x = 1; 

function scope(){
    var x = 2; //inner scope
    function scopeInner(){
        var x = 3; //inner most scope
        console.log(x);
    }
    scopeInner();
    console.log(x);//2
}

scope();
console.log(x); //code reads top to bottom so 3, 2, 1, this is 1 since outside the inner scopes

//example 4 contrasts with 5g:

var x = 12;

function scope(){
   var x = 33; 
    if (true){
    let x = 45;
    console.log(x); //first consolelog= 45
    }
    console.log(x); //x output here is 33(middle scope) let obeys block scope
}

scope(); //only x to refer to here is the global x at the top
console.log(x); //12

//example 5 contrasts with 4

var x = 12;

function scope(){
    var x = 33;
    if (true){ //block scope
        var x = 45; //first console, 45
        console.log(x);
    }
    console.log(x); //second console, 45 because var doesnt obey block scope only function scope
}

scope();
console.log(x); //12 because its outside and global
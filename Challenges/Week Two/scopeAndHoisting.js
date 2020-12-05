/* 
Hoisting

- Hoisting was thought up as a general way of thinking about how our code is compiled and executed. 
    - There are two general phases that happen when we run our code:
        - Creation phase: any variable (var, let, const) and functions in our code are stored to memory.
        - Execution phase: values are assigned to the variables and functions that were stored to memory during the create phase

        (whats on the left side of the + is whats stored to memory during the creation phase) --> let hoisted = true <--- (the value, or the right side of the =, is what gets assigned during the execution phase- before finally then running our code.)
    
        - Conceptually, pretend that all variable and function declarations are physically moved to the top of your code, and stored away in memory

        - When our code is read, the file is read top to bottom, line by line, in sequential order
 */
goodBye ();
 var hello = "hello"; 
 console.log(hello); //if var came below this, it would run undefined, variables are hoisted with a var; values get assigned and execution happens on the second pass

 function goodBye(){
     console.log("goodbye"); //var and functions will get hoisted and can use later, doesnt get executed until it gets called
 }

 let name = "Sarah"; //let doesnt work the same as var and function, let has to come first before console, more updated than var. USE LET AND CONST more often
 console.log(name);

 //SCOPE- notes in SLACK if need them

var coffeeType = "dark roast";

function exampleFunction(){
    var coffeeType= "vanilla roast"
    console.log(coffeeType); //will recognize coffeetype first and check up the function and then finally find it in var (global scope- outside of the local (dark roast) or {})
}

exampleFunction(); //HAVE TO CALL IT THIS WAY, will call the local scope in the {}
console.log(coffeeType); //this will call the first one (global scope- dark roast)

var x = "Sarah"

function scope(){  //scope is looking for anything locally inside the {} first then the outside and then the outside 
    var x = "world";
    if (true == true){
        var x = "hello" //when this is changed to LET it will read back up to WORLD and thats the console, LET only scopes inside the block of codes, wont leak outside of blocks into global code
        console.log("From if statement", x); //hello
    }
    console.log("from function", x); //hello 
}
scope();

console.log("Outside the function", x); //sarah
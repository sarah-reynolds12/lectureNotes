/*
IF CONDITIONALS
*/

//building an agenda, many inputs, expects a true or a false

let isOn = true;

if (isOn == true){
    console.log('The light is on!');
}

if (isOn){
    console.log('The light is on, yay!');
}

let weather = 65; 

if (weather < 70) {
    console.log ('Wear a jacket');
}

let string = 'Tyler';

if (string === 'Tyler' || false){  //or cares about a single true on one side, and triple tyler has all the same
    console.log('if statements and conditions are powerful!');
}
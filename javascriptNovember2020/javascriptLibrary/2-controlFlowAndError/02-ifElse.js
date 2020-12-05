//IF ELSE

let weather = 75; 

if (weather < 70){
    console.log('Wear a jacket');
} else {
    console.log('No jacket needed');
}

//you can blend complex conditionals and if-else statements based upon your need:
if (weather > 70 && typeof weather === 'number'){
    console.log('This weather is amazing');
} else {
    console.log('Either the temp is cool, the variable is not a string or both');
}

//ELSE IF

//else if allowed us to become more complex 
//if -elseif statements can be chained

let age = 16;
if (age >= 25){
    console.log('yay! you can rent a car')
} else if (age >= 21) {
    console.log('yay! you can drink');
} else if (age >= 18){
    console.log('yay! you can vote');
} else {
    console.log('sorry you are too young to do anything fun');
}
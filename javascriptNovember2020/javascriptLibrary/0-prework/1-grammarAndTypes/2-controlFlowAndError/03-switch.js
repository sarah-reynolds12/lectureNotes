/*
SWITCH STATEMENTS
*/

let friend = 'Tom'; 

switch(friend){
    case 'Tom':
        console.log('Hey Tom, when will you bring sourdough bread for me?');
        break; //taking breaks out would run all of these in separate lines. breaks allow to set friend
        case 'Ken':
            console.log('Hey Ken, do you own a wolf in your backyard?');
            break;
            case 'Alex': 
            console.log('Hey Alex, how many magic cards do you have?');
            break;
            default:
                console.log(`I'm sorry, ${friend}, but do I know you`)
        
}

let yep = true;

switch(typeof yep == 'string' || typeof yep == 'boolean') { //|| or gives us true or false, if all is true the first happens, if false then second
    case true:
        console.log('yep is a string or a boolean');
        break;
    default:
        console.log('yep is not a string or a number');
}
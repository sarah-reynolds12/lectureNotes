//for (initialExpression; CSSConditionRule; increment){
//}

for (let i = 0; i < 10; i++) {
    console.log('hello', i);
}

//Bronze
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

for (letter of alphabet){ //for (let i=0; i < alphabet.length; i++)
    console.log(letter);        //console.log(alphabet[i],i);
}

//Silver
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// for (let i = 0; i <alphabet.length; i++) {
//     if ([i] % 2 == 0);
//     console.log(alphabet[i]);
// } else {
//     console.log('the index is an odd number');
// }

for(letter in alphabet) {
    if(letter % 2 == 0) {
        console.log(alphabet[letter]);
    } else {
        console.log('the index is an odd number');
    }
}

//Gold
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let arr = [];

for (let i = 0; i < alphabet.length; i++) {
    if (i % 2 == 0){
        arr.push(alphabet[i]);
    } else {
        console.log(`the index ${i} is an odd number`);
    }
}
console.log(arr);
let name = "Sarah";
let name2 = "Erin";

console.log(name.length);
console.log(name2.length);

if (name > name2){
    console.log("My name is longer than Erin's!");
} 

console.log(("My name is longer than Erin's by"), name.length - name2.length);

//SILVER
//let name = "Sarah";
//let name2 = "Erin";
//let sentence;

//if (name.length>name2.length) {
    //sentence = "my name is longer than" + name2;
    //console.log(sentence);
//} else {
    //sentence = '${name2}'s name is longer than ${name};
//} console.log(sentence);//

let name1 = "Sarah";
let name3 = "Erin";
let sentence;

if (name1.length>name3.length) {
    sentence = "my name is longer than " + name3;
    console.log(sentence);
} else {
    const differenceInLetters = name1.length - name3.length;

    sentence = `${name3}'s name is longer than ${name1} by ${differenceInLetters} letters`;
 console.log(sentence);
}
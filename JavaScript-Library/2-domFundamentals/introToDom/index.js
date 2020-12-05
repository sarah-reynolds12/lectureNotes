//getElementById
// const header = document.getElementById('header');
// console.log(header)

// header.style.color = "pink";
// header.innerText = "Hello World";

//getElementsByClassName
// const errorList = document.getElementsByClassName('error-list');
// console.log(errorList);

// errorList[1].innerText = "I changed error 2";

// //Example 1 Looping
// for (let i = 0; i < errorList.length; i++){
//     errorList[i].style.color="red"
// }

// //Exmaple 2 Looping
// for(error of errorList){
//     error.style.color = "green"
// }

//Example 3 Looping- forEach WILL NOT WORK
//errorList.forEach(error => error.style.color = "purple")

// //getElementsByTagName: tags are anything in <>
// const tags = document.getElementsByTagName('p');
// console.log(tags);

// tags[0].innerText = 'I changed the paragraph using getElementsByTagName!';

// const listItems = document.getElementsByTagName("li");
// console.log(listItems);

// //listItems[0].style.fontStyle = "italic";

// for(let i = 0; i < listItems.length; i++){
// //     listItems[i].style.fontStyle = "italic";
// }

//querySelector- scans the document and be done after the first block; CSS selectors

const header = document.querySelector("#header"); //or could use h1
console.log(header);

const errorList = document.querySelector(".error-list");
console.log(errorList); //gives first one and is done, only gives back bullet 1 from document

const errorList2 = document.querySelector("body > div > ul > li:nth-child(2)");
console.log(errorList2);


//querySelectorAll - can use forEach and for loops; same selectors as above

const headerTags = document.querySelectorAll("h1");
console.log(headerTags);

console.log(headerTags[1]);

headerTags.forEach(h => {
    h.style.color = "blue"
});

const listItems = document.querySelectorAll(".error-list");

listItems.forEach(li => {
    li.style.fontStyle = "italic";
});

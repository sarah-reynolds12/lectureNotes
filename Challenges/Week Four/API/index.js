console.log("hello");

const baseURL ="https://api.chucknorris.io/jokes/random"; //const is best, url never going to change

let jokeButton = document.getElementById('jokeButton'); //captured everything about that button, now time to add an event listener

jokeButton.addEventListener("click",fetchJokes)//what event are we going to be listening for and care about? looking for a click and now what do we want it to do? call a function- haven't named it yet but put what were going to call it. always needs two things

function fetchJokes() { //will be fecthing the new joke
//alert("it worked"); //can use this as practice to see if event listener worked
fetch(baseURL)
.then((res) => res.json())
.then(json => displayJoke(json.value)); //get joke during this time (json.value and needs to change to the next display function instead of console.log(displayJoke))
//fetch doesnt happen instantly, its a promise and can break it down with .then. when see fetch should always see .then and another .then (fullfilling promises) res is the response we get from server and break down the json data and make it into an object were used to seeing in the console of the inspect code (add.value(or other object you) to json to see what you want to see)- just displays in the console not on the webpage
}

//now want to display the joke to the webpage/screen
function displayJoke(joke){ //<p> tag JOKE from HTML placement- will put joke from console to here
let jokeText = document.getElementById("joke");
jokeText.innerText = joke;
}
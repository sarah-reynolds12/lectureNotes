const baseURL= "https://adventure-time-quote-api.glitch.me/api/random";

//added a div to the HTML code
const section = document.getElementById("quotes") //goes into HTML document and then finds the ID labeled quotes
//Example of how to write a fetch
// fetch(baseURL)
// .then(function(result){
//     return result.json()
// })
// .then(function(json){
//     console.log(json)
// })


fetch(baseURL)
.then(res => res.json())
.then(json => displayResults(json))

function displayResults(quote){ //displays quote in console log
    console.log(quote)
    //now to put the quote somewhere on the page
    let heading = document.createElement("h1"); //create in JS now needs to be put on the page
    let img =  document.createElement("img");
   
    section.appendChild(heading)
    section.appendChild(img)

    heading.textContent = quote.split(":") [1]; //splits the quote into character and quote and put them in an array
    let character = quote.split(":") [0];

    if (character === "Finn"){
        img.src = charPic.finn
    } else if(character === " ")

}

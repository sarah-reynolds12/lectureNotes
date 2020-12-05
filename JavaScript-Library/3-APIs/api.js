const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

searchForm.addEventListener('submit', fetchSpace);//event listener needs the html and the event we care about

function fetchSpace(e){
    e.preventDefault();
    
    fetch(baseURL) //fetch is a built in function in JS
        .then(result => result.json())
        .then(json => {
            console.log(json);
            displayRockets(json); //displayrocket gets called here
              })
              .catch(err => console.log(err);
            }

function displayRockets(rockets){ //displayrockets gets defined here
    rockets.forEach(r => { //foreach loops through each rocket, r is rocket label
        let rocket = document.createElement('li'); //new list item
        rocket.innerText = r.cost_per_launch;//can change this to pull anything from the rocket arrays/objects
        spaceShips.appendChild(rocket);
    })
}
/*
OBJECTS
*/

let netflix = {
    id: 9,
    name: 'Super Store',
    season1: {
        seasonInfo: {
            episodeInfo: [
                {episode: 1, episodeName: 'Pilot'},
                {episode: 2, episodeName: 'Magazine Profile'},
                {episode: 3, episodeName: 'Shots and Salsa'},
                {episode: 4, episodeName: 'Mannequin'},
                {episode: 5, episodeName: 'Shoplifter'},
                {episode: 6, episodeName: 'Secret Shopper'},
                {episode: 7, episodeName: 'Color Wars'},
                {episode: 8, episodeName: 'Wedding Day Sale'},
                {episode: 9, episodeName: 'All-Nighter'},
                {episode: 10, episodeName: 'Demotion'},
                {episode: 11, episodeName: 'Labor'}
            ]
        }
    },
    season2: {},
    season3: {}
}
console.log(netflix);
console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName);

//pick an episode to log in the terminal. using dot notation, walk through the netflix object and print off both the episode number and episode name

console.log(netflix.season1.seasonInfo.episodeInfo[10].episode, netflix.season1.seasonInfo.episodeInfo[10].episodeName);

/*JSON - JavaScript Object Notation; standard format for sending across the internet, take javascript object and convert to text, send and convert back to java
- all has "" around the text, can send in chunks, booleans and numbers won't have ""
*/

let spaceJam = { //one large object, keys inside this object are toonsquad, monstars, nbaPLayers
    toonSquad: { //key and values then in the individual objects
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

console.log(Object.keys(spaceJam)); //data comes back as an array Object.keys consisting of the keys in the object
console.log(Object.keys(spaceJam.toonSquad));
console.log(Object.keys(spaceJam.toonSquad).toString()); //formats the console in a string with ,'s
console.log(Object.values(spaceJam)); //comes back as an array with objects inside
console.log(Object.values(spaceJam.toonSquad)); //just values of the toonSquad key


let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true, 
    sun: true, 
    size: 10
}

console.log(garden.vegetable);

let inc = 'vegetable'

console.log(garden[inc]); //bracket notations

let baking = {};
baking['zucchini'] = 'better make some bread';
baking.bestKeyEver = 'zucchini'

console.log(baking.zucchini);
console.log(baking.bestKeyEver);
console.log(baking[baking.bestKeyEver]);

let g = 'water';

Object.keys(garden).forEach(key => {//convince that object.keys(garden) is an array
    if (key == g){
        console.log(garden[key])
    }
})


Function findPerimeter(length, width){
    let perimeter = 2(length + width)
 If perimeter > 20 {
 console.log(‘True: the perimeter is ${perimeter}}
 Else { if perimeter < 20 {console.log(‘False: the perimeter is ${perimeter)}}
 }
  console.log(findPerimeter(5, 7)
 
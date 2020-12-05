let webDevGroup = [{
    name: "dustie",
    age:39,
    graduated: 1999,
    pets: true,
    petNames: ["chuck", "the ladies"],
    mostRecentMovie: "The Gentlemen",
    carsOwned: [{ make: "GMC", model: "Acadia"},{make:"Honda", model: "Accord"}],
    favoritePotato: "all of the above"
},
{
    name: "Zach",
    age: 30,
    graduated: 2009,
    pets: true,
    petNames: ["Roscoe", "Kiki", "Pam"],
    mostRecentMovie: "The Grinch",
    carsOwned: [{make: "Volkswagen", model: "Rabbit"}, {make: "Volkswagen", model: "Jetta"}, {make: "Kia", model: "Soul"}, {make: "Chevrolet", model: "Suburban"}],
    favoritePotato: "waffleFry"
},
{
    name: "Susan",
    age: 59,
    graduated: 1979,
    pets: true,
    petNames: ["Holly", "Binx", "Mouse", "Luna", "Lyla", "Lawrence"],
    mostRecentMovie: "Mulan",
    carsOwned: [{make: "GMC", model: "Acadia"}, {make: "Buick", model: "LaCrosse"}],
    favoritePotato: "potatoes - yuck!"
},
{
    name: "Sarah",
    age: 35,
    graduated: 2003,
    pets: true,
    petNames: ["Girl Cat", "Boy Cat"],
    mostRecentMovie: "Mrs. Doubtfire",
    carsOwned: [{make: "Mazda", model: "3"}],
    favoritePotato: "ALL FORMS",
},
{
    name: 'Kquanisha',
    age: 33,
    graduated: 2006,
    pets: false,
    petNames: ["none"],
    mostRecentMovie: '35 and Ticking',
    carsOwned: [{Make:'Hyundai', Model:'Elantra'}],
    favoritePotato: 'Red potatoes'
    }];

    // let movieArr = [];

    // for (person of webDevGroup){
    //     movieArr.push(person.mostRecentMovie);
    //     }
    // console.log(movieArr);

    //OR

let mostRecentMovieWatched = [];

for (let i = 0; i < webDevGroup.length; i++){

    console.log(webDevGroup[i].mostRecentMovie);
    mostRecentMovieWatched.push(webDevGroup[i].mostRecentMovie);

}

console.log(mostRecentMovieWatched);

//OR

webDevGroup.forEach(student => {
    mostRecentMovieWatched.push(student.mostRecentMovie);

})

console.log(mostRecentMovieWatched);
let netflix = {
    id: 1,
    name: "The Office",
    season1: {
      seasonInfo: {
        episodeInfo: [
          {
            episode: 1,
            episodeName: "Pilot",
          },
          {
            episode: 2,
            episodeName: "Diversity Day",
          },
          {
            episode: 3,
            episodeName: "Health Care",
          },
          {
            episode: 4,
            episodeName: "The Alliance",
          },
          {
            episode: 5,
            episodeName: "Basketball",
          },
        ],
      },
    },
    season2: {},
    season3: {},
  };
  
  console.log(netflix.season1.seasonInfo.episodeInfo[1].episodeName);
  
  let contact = {};

  contact.name = "John";
  contact.phoneNumber = "3175555555";

  console.log(contact);

  contact["notes"] = "Best Friend";

  console.log(contact);

 let hasName = contact.hasOwnProperty("name"); 
 
 delete contact.notes; //will take out of the array

 console.log(contact);

 let newArray = Object.keys(contact);
     console.log(newArray); //pulls keys into an array

let favRestaurant = {
    restarauntName: "Livery",
    yearBuilt: 2017,
    seating: 15, 
    carryout: true, 
    drinks: ["Margarita", "Spicy Margarita", "Modelo", "Tequila Shot", "Water"],
};
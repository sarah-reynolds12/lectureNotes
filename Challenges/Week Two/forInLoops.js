/* For In Loops

*/

let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
}
//bronze
for (member in fellowshipOfTheRing.members){ //member is the placeholder for each iteration of the loop, then where you are getting the obj from (fellowship.member) .digs into it deeper into the key, not the values
    console.log(member);
}
let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
}

//silver- conditional, need if/else
for (member in fellowshipOfTheRing.members){
    if (member[0] !== "A" && member[0] !== "E" && member[0] !== "I" && member[0] !== "O" && member[0] !== "U") { 
        console.log(`${member}'s name does not begin with a vowel` )
    } else {
        console.log(`${member}'s name does begin with a vowel`)
    }
}

//and symbols will check and if they are all true separately || (pipes/OR) will check if first letter is a OR e then it would be consoled true, if one fails, they all fail. or checks for at least one, and checks for all

let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
}

let arr = [];

for (member in fellowshipOfTheRing.members){
    if (member[0] !== "A" && member[0] !== "E" && member[0] !== "I" && member[0] !== "O" && member[0] !== "U") { 
      arr.push(member);
    } 
}

console.log(arr);


// fetch('https://taco-randomizer.herokuapp.com/random/?full-taco=true')
//     .then(res => res.json())
//     .then(json => console.log(json))

// async function slowResult(){ //async can be pinned to a function, works with a promise; runs code linear 
//     await fetch('https://taco-randomizer.herokuapp.com/random/?full-taco=true') //await can be pinned to anything that returns a promise; used in conjunction with async
//     .then(res => res.json())
//     .then(json => console.log(json))

//     console.log('this is a message')
// }

// slowResult();

async function slowResult(){ 
    await fetch('https://taco-randomizer.herokuapp.com/random/?full-taco=true') //using fetch to talk to a server, res is bringing the results back and in a format a way we can play with
    .then(res => res.json())//json can be called anything
    .then(json => {json.lolProperty = 'this is random property!'; return json})
    .then(json => console.log(json))
    console.log('this is a message')
}

slowResult();

  
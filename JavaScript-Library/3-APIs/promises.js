//setTimeout(() => console.log("this is a test of timeouts!"), 1000); waits 1000 miliseconds then runs the code

//PROMISES- when we make an API call; reaching out to google maps and find restaurants- call to google to find something, process to take time outside of our code, is a promise

let promise = new Promise (function(resolve, reject){
    setTimeout(() =>{
        if (false) {
            resolve('success');
        } else {
            reject('failure');
        }
    }, 3000;
})

promise 
    .then(blah => console.log(blah)) //blah = "success"; .then shows resolve/success
    .catch(err => console.log(err)) //err = "failure"; changing first resolve to false will show this

console.log("this code is after our promise & .then chain!")//will fun asap then the promise will show 3 sec afterwards

function playFunc(){
    return 5;
}

console.log(playFunc());
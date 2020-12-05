/* For Of Loops

pasre through an interable list of numbers- so that makes them great for working with arrays
arrays contain what are known as iterable properties. each property - or value - in an array, each contains its own index)starting at 0
            
            values
let arr = ["chicken", "turkey", "duck"]
                0       1           2
                index #s

*/

//Bronze
let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shepherd']

for (let pie of pies){ 
    console.log(pie);//string interpolation- `${pie} pie`
}

//Silver
let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shepherd']

for (pie of pies) {
    if (pie.includes("apple") || pie.includes("blueberry") || pie.includes("peach") || pie.includes("cherry")) {
        console.log(`${pie} pie is a fruit pie`)
    } else {
            console.log(`${pie} pie is not a fruit pie`)
      }
} 
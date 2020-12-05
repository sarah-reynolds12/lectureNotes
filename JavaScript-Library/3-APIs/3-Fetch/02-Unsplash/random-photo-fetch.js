var randomImage = document.querySelector('random-image');
console.log("randomImage:", randomImage);

fetch('https://source.unsplash.com/random')
.then(function(response){
 if (!response.ok) {
     console.log(response);
     return new Error(response);
 }
 console.log("Reponse:", response);
 return response.blob();
})
.then(function(photoBlob){
console.log("my Blob", photoBlob);
var objectURL = URL.createObjectURL(photoBlob);
console.log("Object URL:", objectURL);
randomImage.src = objectURL;

console.log("randomImage.src:", randomImage);
})
.catch(function(err){
    console.log(err);
});
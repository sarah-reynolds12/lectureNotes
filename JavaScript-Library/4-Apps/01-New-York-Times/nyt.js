const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //APIT URL
const key = 'AVOIBp3ll3EAVI9X2GXuMKGJrlxAjeki'; //key to access it 
let url; // sets URL as a variable so we can reference it later 

//SEARCH FORM- 
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

//nav.style.display = "none"; //this turns both buttons off, commented out this because we don't need it
nextBtn.style.display = "none"; //turns buttons off or doesnt display them until we turn them on later
previousBtn.style.display = "none";//turns buttons off or doesnt display them until we turn them on later
let pageNumber = 0;
console.log('PageNumber:', pageNumber);
let displayNav = false;

//Event Listeners: event method that tells form or button to wait for an action/data, and gives the function to execute said action
searchForm.addEventListener('submit', fetchResults); //used when its in the form or have to input something
nextBtn.addEventListener('click', nextPage); //when have to use a mouse or click a button
previousBtn.addEventListener('click', previousPage);
        
function nextPage(){
            console.log("Next button clicked");
        }
        
function previousPage(){
            console.log("Next button clicked");
        }
        

function fetchResults(e){ //fetches data from the API that we have connected to
    e.preventDefault(); //casuses webpage from refreshing
     // //assemble the full url- https, API key, page number (always 0 we set as default), search term and value, attach info from form
     url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q' + searchTerm.value;
     console.log("URL:", url);
        if(startDate.value !== ''){ //values pulled from HTML and gives it functions and what range to look for
                        url += '&begin_date=' + startDate.value; //parameters for the search
        };                
    
        if(endDate.value !== ''){
            url += '&end_date=' + endDate.value;
        };    


    fetch(url).then(function(result){ //API request, use fetch to make the request
        return result.json(); //returns data in JSON format
    }) .then(function(json){
        displayResults(json); //displays the data 
    });    
}    

function displayResults(json) {  //function to grab JSON data and attaching/display data on webpage with HTML; identifiers, tell data where to be displayed
    while(section.firstChild){ // attached note to section part of HTML by removing primary child and replacing it, either previous results or blank space. While loop will clear out any articles before a new search result is added.
        section.removeChild(section.firstChild); //fished out section from HTML and gave it a query, cleans up the results
    }

 let articles = json.response.docs; //pulling articles from API, looking at articles variable, returning data in json method; if the articles are over 10 (displayed as block), if under 10 (displayed as none). This is the styling; variable article is set so we can get to those articles in the API document in a more simple way
 if (articles.length >= 10 && pageNumber == 0){ //says there are 10 articles and we are at page 0 and wants to display the next button but not the previous since there won't be previous articles
    nextBtn.style.display = "block"; 
    previousBtn.style.display = "none";
    } else if (articles.length >= 10) {
    nextBtn.style.display = 'block'; //shows the nav display if 10 items are in the array
        previousBtn.style.display = 'block'; 
    } else if (pageNumber > 0) {
        nextBtn.style.display = 'none';
        previousBtn.style.display ='block';
    } else {
        nextBtn.style.display = 'none'; //hides the nav display if less than 10 items are in the array
        previousBtn.style.display = 'none';
    };


 if(articles.length === 0) { //if articles length is 0, it will bring back no results
     console.log("No results");
 } else { //if article is 1+ then it will bring back an element in the HTML code; build the element as its found, display on website, puts it where it needs to go (css or html)
     for(let i = 0; i < articles.length; i++){
         let article = document.createElement('article');
         let heading = document.createElement('h2');
         let link = document.createElement('a');
         let para = document.createElement('p');
         let clearfix = document.createElement('div');
         let img = document.createElement('img');

         let current = articles[i];
            console.log("Current:", current);
        
            link.href = current.web_url; //turning the headling into a clickable link
            link.textContent = current.headline.main;
            
            para.textContent = 'Keywords: '; //Displays on the website

            for (let j = 0; j < current.keywords.length; j++) { //formats the keywords, keywords pulling from api and current articles
                let span = document.createElement('span');
                span.textContent += current.keywords[j].value + ' ';
                para.appendChild(span);
            }
          
            if (current.multimedia.length > 0) { //pulls the pictures/images from the API data to the website display, media file types are pulled(pulling url)
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
            }
                        
        clearfix.setAttribute('class', 'clearfix'); //?
        
        //now putting all of the items together, appending the items where to go
        /* <article>
            <h2>
                <a>Link</a>
                </h2>
                <img></img>
                <p>
                <div></div>
                </article>
                puts all of using the append below 
                */
         article.appendChild(heading);
         heading.appendChild(link);
         article.appendChild(para);
         article.appendChild(clearfix);
         article.appendChild(img);
         section.appendChild(article);
     }
 }
};

function nextPage(e){ //if they click on nextPage, increment the counter and go fetch the results for that page
    pageNumber++; //adds page number
    fetchResults(e); //grabbing new page numbers that is next for the URL
    console.log("Page number:", pageNumber);

};

function previousPage(e){
    if (pageNumber > 0){
        pageNumber--; //goes back in page numbers
    } else {
        return;
    }
    fetchResults(e); //grabbing new page numbers from the URL to fetch new results from previous page?
    console.log("Page Number:", pageNumber);
}


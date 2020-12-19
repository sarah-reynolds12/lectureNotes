const baseURL = "https://api.covid19api.com/summary";


//Search Form
const searchTerm = document.querySelector("#search");
const searchForm = document.querySelector("form");
const submitBtn = document.querySelector(".submit");
searchForm.addEventListener("submit", fetchResults);

/* const testBtn = document.querySelector("#testbutton");
testBtn.addEventListener("click", buttonTest);
function buttonTest() {
	//console.log(searchTerm);
	console.log(searchTerm.value);
	//console.log(searchTerm.target.value);
} */

//Results
const section = document.querySelector("section");

function fetchResults(e) {
	e.preventDefault();
	//console.log(e);
	//console.log(searchTerm.target.value);
	
	fetch(baseURL)
		.then(function (result) {
			return result.json();
		})
		.then(function (json) {
			displayResults(json);
		});
}

function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
      }
	let data= json.Countries; //[0].country will pull a country in the console log
	console.log(searchTerm.value);
	//console.log([180]);
console.log(data.length);
	for (let i = 0; i < json.Countries.length; i++) {
		//console.log(i);
		if (data[i].Country === searchTerm.value) {
            console.log(data[i].Country, searchTerm.value);

            
			let article = document.createElement("article");
            let heading = document.createElement("h2");
                        
            section.appendChild(article);
            article.appendChild(heading);
            
            heading.textContent = "Total Confirmed Cases:";
            
            let para = document.createElement("p");
            heading.appendChild(para);
            para.textContent += data[i].TotalConfirmed;
            
            
            
            // for (let j = 0; j < data[i].TotalConfirmed.length; j++) {
            //     let para = document.createElement("p");
            //     para.textContent += data[i].TotalConfirmed[j].value;
            //     heading.appendChild(para);
            // console.log(data[i].TotalConfirmed[j].value);
                

			}
		}
	}


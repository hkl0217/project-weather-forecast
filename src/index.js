function handleSearhSubmit(event){
    event.preventDefault();
    let cityInput = document.querySelector("#city-in-search");
    let headingSubject = document.querySelector("#heading");
    headingSubject.innerHTML = cityInput.value;
}

let searchFormCity = document.querySelector("#search-form");
searchFormCity.addEventListener("submit", handleSearhSubmit);
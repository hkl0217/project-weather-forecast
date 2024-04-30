function handleSearhSubmit(event){
    event.preventDefault();
    let cityInput = document.querySelector("#city-in-search");
    let heading = document.querySelector("#heading");
    heading.innerHTML = cityInput.value;
}

let searchFormCity = document.querySelector("#search-form");
searchFormCity.addEventListener("submit", handleSearhSubmit);
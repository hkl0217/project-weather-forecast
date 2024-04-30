function handleSearhSubmit(event){
    event.preventDefault();
    let cityInput = document.querySelector("#city-in-search");
    console.log(cityInput.value);
}

let searchFormCity = document.querySelector("#search-form");
searchFormCity.addEventListener("submit", handleSearhSubmit);
function handleSearhSubmit(event){
    event.preventDefault();
    let cityInput = document.querySelector("#city-in-search")
    console.log(searchInput.value);
}

let searchFormCity = document.querySelector("#search-form");
searchformCity.addEventListener("submit", handleSearhSubmit )
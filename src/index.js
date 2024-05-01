function searchCity (city) {
    let apiKey = "0741f8adfdcfba62f302f1e8627toa94";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
console.log(apiUrl);
}

function handleSearhSubmit(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#city-in-search");
    let headingElement = document.querySelector("#heading");
    headingElement.innerHTML = cityInput.value;
    searchCity(cityInput.value);
}

let searchFormCity = document.querySelector("#search-form");
searchFormCity.addEventListener("submit", handleSearhSubmit);
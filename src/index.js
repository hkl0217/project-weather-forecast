function updateWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;

    let forecastElement = document.querySelector("#forecast");
    let humidityElement = document.querySelector("#humidity");
    let speedElement = document.querySelector("#speed");

    forecastElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    speedElement.innerHTML = `${response.data.wind.speed}km/h`;
    temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
    let apiKey = "0741f8adfdcfba62f302f1e8627toa94";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateWeather);
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
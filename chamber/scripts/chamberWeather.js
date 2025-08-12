const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const forecast = document.querySelector("#forecast");
const captionDesc = document.querySelector("figcaption");

const apiKey = "2d66cef54ed30257bde6b3dc17d9640d";
const lat = -32.960;
const lon = -60.689;
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getCurrentWeather() {
    const response = await fetch(weatherUrl);
    const data = await response.json();
    displayCurrentWeather(data);
}

// Function to display the current weather in the HTML
// This function takes the data from the API and displays it in the HTML elements
function displayCurrentWeather(data) {
    const temp = data.main.temp.toFixed(1);
    const description = data.weather[0].description;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    currentTemp.innerHTML = `<strong>Rosario</strong>: ${temp}&deg;C`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', description);
    captionDesc.textContent = `${description}`;

    forecast.innerHTML = `${data.daily}`
}

async function getForecast() {
    const response = await fetch(forecastUrl);
    const data = await response.json();
    displayForecast(data);
}

// Function to display the forecast results in the HTML
// This function takes the data from the API and displays it in the HTML elements
function displayForecast(data) {
    const forecastList = data.list;
    const dailyForecast = forecastList.filter(entry => entry.dt_txt.includes("12:00:00"));

    let forecastHTML = `<h4>Forecast</h4>`;
    for (let i = 0; i < 3; i++) {
        const day = dailyForecast[i];
        const date = new Date(day.dt_txt);
        const temp = day.main.temp.toFixed(1);
        const desc = day.weather[0].description;
        forecastHTML += `<p>${date.toDateString()}: ${temp}&deg;C</p>`;
    }

    forecast.innerHTML = forecastHTML;
}

getCurrentWeather();

getForecast();
export function displayWeather(location, timezone, datetime, temperature, iconCode, conditions, feelslike, humidity, precipitation, windspeed) {
  const iconUrl = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${iconCode}.png`;

  const display = document.querySelector("#weather-info");
  display.innerHTML = `
    <p class="info">${location}</p>
    <p class="info">${timezone}</p> 
    <p class="info">${datetime}</p>
    <div id="temp-container">
    <img src="${iconUrl}" alt="${conditions}">
    <p class="info" id="temp">${temperature}&deg;<sup>C</sup></p></div>
    <p class="info">${conditions}</p>
    <p class="info">feels like: ${feelslike}&deg;<sup>C</sup></p></div>
    <p class="info">humidity: ${humidity}</p>
    <p class="info">precipitation: ${precipitation}</p>
    <p class="info">Wind: ${windspeed} km/h</p>
  `;
}
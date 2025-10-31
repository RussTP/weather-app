import { getWeather } from "./getWeather.js";
import { displayWeather } from "./display.js";


async function renderWeather(city) {
    try {
displayWeather("Loading...", "", "", "", "", "");
const renderData = await getWeather(city)
let {location, timezone, datetime, temperature, icon, conditions, feelslike, humidity, precipitation, windspeed} = renderData;
displayWeather(location, timezone, datetime, temperature, icon, conditions, feelslike, humidity, precipitation, windspeed);
    }
    catch (err) {
        console.error("Ooops:", err);
    }
}

async function controller() {
let defaultCity = "Hamilton";
await renderWeather(defaultCity);



function getLocation() {
const form = document.querySelector("form")
form.addEventListener("submit", async (e) => {
e.preventDefault();

const locationInput = document.querySelector("#location-input")
const cleaned = locationInput.value.trim();
const value = cleaned
.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
await renderWeather(value);
        });
    }
    getLocation();
}


export { controller }
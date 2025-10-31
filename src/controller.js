import { getWeather } from "./getWeather.js";
import { displayWeather } from "./display.js";


async function renderWeather(city) {
    const spinner = document.querySelector("#loading-spinner");
    try {
spinner.classList.remove("hidden");
displayWeather("Loading...", "", "", "", "", "");
await new Promise(resolve => setTimeout(resolve, 1000));
const renderData = await getWeather(city)
let {location, timezone, datetime, temperature, icon, conditions, feelslike, humidity, precipitation, windspeed} = renderData;
displayWeather(location, timezone, datetime, temperature, icon, conditions, feelslike, humidity, precipitation, windspeed);
    }
    catch (err) {
        console.error("Ooops:", err);
        displayWeather("Error Loading...", "", "", "", "", "");
    } finally {
        spinner.classList.add("hidden");
    }
}

async function controller() {
let defaultCity = "Burlington";
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
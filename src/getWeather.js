
import sampleData from "./sampleData.json";

 async function getWeather(value) {
    const apiKey = "SV9Y5EMY78565K7KCJ6V2S89H";
    try {
    const liveURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${value}?unitGroup=metric&include=current&iconSet=icons1&key=${apiKey}`;
    const USE_LOCAL = false;
    const data = USE_LOCAL
     ? sampleData
     : await (await fetch(liveURL)).json();
    console.log(` Using local: ${USE_LOCAL}`);
    if (!USE_LOCAL) {
    console.log(`Using API: ${liveURL}`)

        console.log("LIVE data:", data);

if (!data || (!data.currentConditions && !data.days)) {
  throw new Error("Unexpected API shape or request failed");
    }


}
   
    const weatherData = {
    location: data.address,
    timezone: data.timezone,
    datetime: data.currentConditions.datetime,
    temperature: data.currentConditions.temp,
    icon: data.currentConditions.icon,
    conditions: data.currentConditions.conditions,
    feelslike: data.currentConditions.feelslike,
    humidity: data.currentConditions.humidity,
    precipitation: data.currentConditions.precip,
    windspeed: data.currentConditions.windspeed
     };
     return weatherData;

}
    catch (err) {
        console.error("Error in getWeather:", err);
        throw err;
    }
    
};

export { getWeather }




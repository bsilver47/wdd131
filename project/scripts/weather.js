document.getElementById("current-year").innerHTML = new Date().getFullYear();

document.getElementById("last-updated").innerHTML = document.lastModified;

const hourlyAPIURL = "https://api.weather.gov/gridpoints/LOX/152,49/forecast/hourly";

fetch(hourlyAPIURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const hourlyForecast = data.properties.periods;
        const hourlyForecastList = document.getElementById("hourly-forecast");
        for (let i = 0; i < 15; i++) {
            const period = hourlyForecast[i];
            const listItem = document.createElement("li");
            const itemTime = new Date(period.startTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
            listItem.textContent = `${itemTime}: ${period.temperature}°${period.temperatureUnit} - ${period.shortForecast}`;
            hourlyForecastList.appendChild(listItem);
        }
    })
    .catch((error) => console.error("Error fetching weather data:", error));

const dailyAPIURL = "https://api.weather.gov/gridpoints/LOX/152,49/forecast/";

fetch(dailyAPIURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const dailyForecast = data.properties.periods;
        const dailyForecastList = document.getElementById("daily-forecast");
        for (let i = 0; i < 15; i++) {
            const period = dailyForecast[i];
            if (!period) continue; // Skip if period is undefined
            const listItem = document.createElement("li");
            const itemDate = new Date(period.startTime).toLocaleDateString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
            listItem.textContent = `${itemDate}: ${period.temperature}°${period.temperatureUnit} - ${period.shortForecast}`;
            dailyForecastList.appendChild(listItem);
        }
    })
    .catch((error) => console.error("Error fetching weather data:", error));


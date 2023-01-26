import {
  getCurrentWeather,
  getDailyWeather,
  getCityCoordinates,
} from "./weatherAPI.js";

export const displayDataOnPage = () => {
  document.querySelector("form").addEventListener("submit", async (e) => {
    const dataCoord = await getCityCoordinates(e);
    const weatherData = await getCurrentWeather(dataCoord);
    const dailyWeather = await getDailyWeather(dataCoord);
    console.log(dailyWeather);
    displayHourlyWeather(dailyWeather);

    displayCityNameAndCountry(weatherData);
    displayCurrentTemp(weatherData);
    displayWeatherDescription(weatherData);
  });
};

function displayCityNameAndCountry(weatherData) {
  const cityName = document.createElement("h1");
  const countryName = document.createElement("span");
  cityName.textContent = `${weatherData.cityName}, `;
  countryName.textContent = `${weatherData.country}`;

  const div = document.querySelector(".name-of-the-city");
  div.append(cityName, countryName);
}

function displayCurrentTemp(weatherData) {
  const p = document.createElement("p");
  p.textContent = weatherData.currentTemp;
  const div = document.querySelector(".current-temp");
  div.append(p);
}

function displayWeatherDescription(weatherData) {
  const p = document.createElement("p");
  p.textContent = weatherData.currentWeatherDescription;
  const div = document.querySelector(".description");
  div.append(p);
}

function displayHourlyWeather(dailyWeather) {
  //need current day
  const today = new Date();
  const day = today.getDate();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[today.getMonth()];
  const year = today.getFullYear();
  const dateForToday = `${day} ${month} ${year}`;

  //need day from the object
  dailyWeather.forEach(function (item) {
    const dateToConvert = item.dt;
    const newDate = new Date(dateToConvert * 1000);
    const year = newDate.getFullYear();
    const month = months[newDate.getMonth()];
    const date = newDate.getDate();
    const currentDate = `${date} ${month} ${year}`;

    if (dateForToday === currentDate) {
      const divHour = document.createElement("div");
      divHour.classList.add("div-hour");
      const temp = document.createElement("span");
      temp.textContent = item.main.temp;
      const description = document.createElement("div");
      description.textContent = item.weather[0].description;
      console.log(item);

      divHour.append(temp, description);
      const hourlyWeather = document.querySelector(".day-weather-byhours");
      hourlyWeather.append(divHour);
    }
  });
}

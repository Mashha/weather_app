import {
  getCurrentWeather,
  getHourlyWeather,
  getCityCoordinates,
} from "./weatherAPI.js";

export const displayDataOnPage = () => {
  document.querySelector("form").addEventListener("submit", async (e) => {
    const dataCoord = await getCityCoordinates(e);
    const weatherData = await getCurrentWeather(dataCoord);
    const hourlyWeather = await getHourlyWeather(dataCoord);

    displayHourlyWeather(hourlyWeather);
    displayDailyWeather(hourlyWeather);

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

function displayHourlyWeather(hourlyWeather) {
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
  hourlyWeather.forEach(function (item) {
    const dateToConvert = item.dt;
    const newDate = new Date(dateToConvert * 1000);

    const year = newDate.getFullYear();
    const month = months[newDate.getMonth()];
    const date = newDate.getDate();
    const currentDate = `${date} ${month} ${year}`;
    const hour = newDate.getHours();
    const min = newDate.getMinutes();
    const sec = newDate.getSeconds();

    if (dateForToday === currentDate) {
      const divHour = document.createElement("div");
      divHour.classList.add("div-hour");

      const temp = document.createElement("div");
      temp.textContent = item.main.temp;

      const description = document.createElement("div");
      description.textContent = item.weather[0].description;

      const timeOfTheDay = `${hour}${min}${sec}`;
      const time = document.createElement("div");
      time.textContent = timeOfTheDay;

      divHour.append(temp, time, description);
      const hourlyWeather = document.querySelector(".day-weather-byHours");
      hourlyWeather.append(divHour);
    }
  });
}

function displayDailyWeather(hourlyWeather) {
  const today = new Date().toJSON().split("T")[0];

  const daysByDate = {};
  hourlyWeather.forEach(function (item) {
    const date = item.dt_txt.split(" ")[0];

    if (date === today) {
      return;
    } else if (daysByDate[date]) {
      daysByDate[date].push(item);
    } else {
      daysByDate[date] = [item];
    }
  });

  const filtered = [];
  for (const key in daysByDate) {
    filtered.push(daysByDate[key][4]);
  }
  filtered.forEach(function (day) {
    
    const dayDate = day.dt;
    const eachDay = new Date(dayDate * 1000)
      .toLocaleString("en-US", { weekday: "long" })
      .split(",")[0];

    const displayTemp = document.createElement("div");
    displayTemp.textContent = day.main.temp;
    const displayDate = document.createElement("div");
    displayDate.textContent = eachDay;
    //icon
    const dailyWeather = document.querySelector(".weather-for-five-days");
    dailyWeather.append(displayDate, displayTemp);
  });
}

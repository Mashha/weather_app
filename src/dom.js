import { weatherIcons } from "./icons.js";
import {
  getCurrentWeather,
  getHourlyWeather,
  getCityCoordinates,
} from "./weatherAPI.js";
import sunriseImg from "./images/sunrise.png";
import sunsetImg from "./images/sunset.png";

export const displayDataOnPage = async (e, geoPosition) => {
  if (e.target?.[0]?.value === "") {
    return;
  } else if (geoPosition !== undefined) {
    const weatherData = await getCurrentWeather(geoPosition);
    const hourlyWeather = await getHourlyWeather(geoPosition);
    weatherDataDisplay(weatherData, hourlyWeather);
  } else {
    const dataCoord = await getCityCoordinates(e);
    if(dataCoord === "Invalid city name"){
      invalidCityName()
      clearInputField()
      return 
    }else {
    const weatherData = await getCurrentWeather(dataCoord);
    const hourlyWeather = await getHourlyWeather(dataCoord);
    weatherDataDisplay(weatherData, hourlyWeather);
  }}
};

function weatherDataDisplay(weatherData, hourlyWeather) {
  clearDataFromPage();
  displayCityNameAndCountry(weatherData);
  displayCurrentTemp(weatherData);
  displayWeatherDescription(weatherData);
  displayIcon(weatherData);

  weatherDetails(weatherData);
  sunriseAndSunset(weatherData);

  displayHourlyWeather(hourlyWeather);
  displayDailyWeather(hourlyWeather);
  clearInputField();
}

function displayCityNameAndCountry(weatherData) {
  const cityName = document.createElement("h1");
  const countryName = document.createElement("span");
  cityName.textContent = `${weatherData.cityName}, `;
  countryName.textContent = `${weatherData.country}`;
  const div = document.querySelector(".name-of-the-city");
  div.append(cityName, countryName);
}

function displayCurrentTemp(weatherData) {
  const temp = document.createElement("div");
  temp.textContent = `${Math.round(weatherData.currentTemp)} °C`;
  temp.classList.add("temp");
  const feel = document.createElement("div");
  feel.classList.add("feels-like");
  const feelTemp = document.createElement("span");
  feelTemp.textContent = `${Math.round(weatherData.feelsLike)} °C`;
  const text = document.createElement("p");
  text.textContent = "Feels like ";
  const div = document.querySelector(".current-temp");
  feel.append(text, feelTemp);
  div.append(temp, feel);
}

function displayWeatherDescription(weatherData) {
  const p = document.createElement("p");
  p.textContent = weatherData.currentWeatherDescription;
  const div = document.querySelector(".description");
  div.append(p);
}

function displayIcon(weatherData) {
  const iconImg = document.createElement("img");
  iconImg.classList.add("icon-img");
  iconImg.src = weatherIcons(weatherData.currentWeather.toLowerCase());
  const weatherIconDiv = document.querySelector(".weather-icon");
  weatherIconDiv.append(iconImg);
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
      temp.textContent = `${Math.round(item.main.temp)} °C`;

      const hourIcon = document.createElement("img");
      hourIcon.classList.add("hour-icon");
      hourIcon.src = weatherIcons(item.weather[0].main.toLowerCase());

      const timeOfTheDay = `${hour}:${min}${sec}`;
      const time = document.createElement("div");
      time.textContent = timeOfTheDay;

      divHour.append(temp, hourIcon, time);
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
    if (day === undefined) {
      return;
    } else {
      const dayDate = day.dt;
      const eachDay = new Date(dayDate * 1000)
        .toLocaleString("en-US", { weekday: "long" })
        .split(",")[0];

      const displayTemp = document.createElement("div");
      displayTemp.textContent = `${Math.round(day.main.temp)} °C`;
      const displayDate = document.createElement("div");
      displayDate.classList.add("day-name");
      displayDate.textContent = eachDay;
      const singleDayDesc = document.createElement("p");
      singleDayDesc.classList.add("single-day-description");
      singleDayDesc.textContent = day.weather[0].description;

      const dailyIcon = document.createElement("img");
      dailyIcon.classList.add("daily-icons");
      dailyIcon.src = weatherIcons(day.weather[0].main.toLowerCase());

      const dailyWeather = document.querySelector(".weather-for-five-days");
      const singleDayDiv = document.createElement("div");
      singleDayDiv.classList.add("single-day");

      const singleDayLeft = document.createElement("div");
      singleDayLeft.classList.add("single-day-left");
      singleDayLeft.append(displayDate, singleDayDesc);
      const singleDayRight = document.createElement("div");
      singleDayRight.classList.add("single-day-right");
      singleDayRight.append(dailyIcon, displayTemp);
      singleDayDiv.append(singleDayLeft, singleDayRight);
      dailyWeather.append(singleDayDiv);
    }
  });
}

function weatherDetails(weatherData) {
  const pressureName = document.querySelector(".pressure-name")
  pressureName.textContent = "Pressure"
  const pressure = document.querySelector(".pressure-data");
  pressure.textContent = `${weatherData.pressure} mBar`;

  const humidity = document.querySelector(".humidity-data");
  humidity.textContent = `${weatherData.humid} %`;
  const humidName = document.querySelector(".humid-name")
  humidName.textContent = "Humidity"

  const wind = document.querySelector(".wind-data");
  //m/s to km/h
  const windSpeedConvert = (weatherData.windSpeed * (60 * 60)) / 1000;
  wind.textContent = `${Math.round(windSpeedConvert)} km/h`;
  const windName = document.querySelector(".wind-name")
  windName.textContent = "Wind"

  const visibility = document.querySelector(".visibility-data");
  const convertToKm = weatherData.visibility / 1000;
  visibility.textContent = `${convertToKm} km`;
  const visibilityName = document.querySelector(".visibility-name")
  visibilityName.textContent = "Visibility"

  const maxTemp = document.querySelector(".max-temp-data");
  maxTemp.textContent = `${Math.round(weatherData.maxTemp)} °C`;
  const maxName = document.querySelector(".max-name")
  maxName.textContent = "Max temp"

  const minTemp = document.querySelector(".min-temp-data");
  minTemp.textContent = `${Math.round(weatherData.minTemp)} °C`;
  const minName = document.querySelector(".min-name")
  minName.textContent = "Min temp"
}

function sunriseAndSunset(weatherData) {
  const sunrise = document.querySelector(".sunrise");
  const spanSunrise = document.createElement("span");
  const unixSunrise = new Date(weatherData.sunrise * 1000)
    .toLocaleString()
    .split(",")[1];
  const sunriseIcon = document.createElement("img");
  sunriseIcon.classList.add("sunrise-icon");
  sunriseIcon.src = sunriseImg;
  spanSunrise.textContent = unixSunrise;
  const sunriseTitle = document.createElement("p");
  sunriseTitle.textContent = "Sunrise";
  sunrise.append(sunriseTitle, spanSunrise, sunriseIcon);

  const sunset = document.querySelector(".sunset");
  const spanSunset = document.createElement("span");
  const unixSunset = new Date(weatherData.sunset * 1000)
    .toLocaleString()
    .split(",")[1];
  spanSunset.textContent = unixSunset;
  const sunsetIcon = document.createElement("img");
  sunsetIcon.classList.add("sunset-icon");
  sunsetIcon.src = sunsetImg;
  const sunsetTitle = document.createElement("p");
  sunsetTitle.textContent = "Sunset";
  sunset.append(sunsetTitle, spanSunset, sunsetIcon);
}

export function currentDay() {
  const today = new Date();
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
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayWord = days[today.getDay()];
  const dayNum = today.getDate();
  const month = months[today.getMonth()];
  const currentDay = document.createElement("div");
  currentDay.textContent = `${dayWord}, ${dayNum} ${month}`;
  const divContainer = document.querySelector(".current-day");
  divContainer.append(currentDay);
}

function clearInputField() {
  const inputField = document.querySelector("#city-name");
  inputField.value = "";
}

function clearDataFromPage() {
  document.querySelector(".name-of-the-city").textContent = "";
  document.querySelector(".current-temp").textContent = "";
  document.querySelector(".weather-icon").textContent = "";
  document.querySelector(".description").textContent = "";
  document.querySelector(".pressure-data").textContent = "";
  document.querySelector(".wind-data").textContent = "";
  document.querySelector(".visibility-data").textContent = "";
  document.querySelector(".weather-hours").textContent = "";
  document.querySelector(".sunrise").textContent = "";
  document.querySelector(".sunset").textContent = "";
  document.querySelector(".weather-days").textContent = "";
}

function invalidCityName(){
  alert("Invalid city name")
}
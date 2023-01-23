import { getCurrentData } from "./weatherAPI.js";

export const displayDataOnPage = () => {
  document.querySelector("form").addEventListener("submit", async (e) => {
    let data = await getCurrentData(e);

    getCityNameAndCountry(data);
    getCurrentTemp(data);
    weatherDescription(data);
  });
};

function getCityNameAndCountry(data) {
  const cityName = document.createElement("h1");
  const countryName = document.createElement("span");
  cityName.textContent = `${data.cityName}, `;
  countryName.textContent = `${data.country}`;

  const div = document.querySelector(".name-of-the-city");
  div.append(cityName, countryName);
}

function getCurrentTemp(data) {
  const p = document.createElement("p");
  p.textContent = data.currentTemp;
  const div = document.querySelector(".current-temp");
  div.append(p);
}

function weatherDescription(data) {
  const p = document.createElement("p");
  p.textContent = data.currentWeatherDescription;
  const div = document.querySelector(".description");
  div.append(p);
}

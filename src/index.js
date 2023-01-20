import "./scss/style.scss";

async function getWeatherLocation() {
  try {
    const resource = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=london&appid=3ba98b4b745fa42c31dff2a783d52b5c&units=metric"
    );
    const data = await resource.json();

    const cityName = data.name;
    const country = data.sys.country;
    const currentTemp = data.main.temp;
    const feelsLike = data.main.feels_like;
    const humid = data.main.humidity;
    const pressure = data.main.pressure;
    const visibility = data.visibility; //meter
    const windSpeed = data.wind.speed; // m/s
    const currentWeather = data.weather[0].main;
    const currentWeatherDescription = data.weather[0].description;

    const weatherData = {
      cityName,
      country,
      currentTemp,
      feelsLike,
      humid,
      pressure,
      visibility,
      windSpeed,
      currentWeather,
      currentWeatherDescription,
    };

    return weatherData;
  } catch {
    (err) => console.log(err);
  }
}

async function getCurrentData() {
  const currentData = await getWeatherLocation();
  console.log(currentData.cityName);
}

getCurrentData();

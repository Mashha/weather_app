export async function getCityCoordinates(e) {
  e.preventDefault();
  const city_name = e.target[0].value;
  if (city_name === "") {
    return;
  } else {
    const API_key = "3ba98b4b745fa42c31dff2a783d52b5c";
    try {
      const resource = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${API_key}`
      );
      const data = await resource.json();
      const lat = data[0].lat;
      const lon = data[0].lon;

      const coordinates = {
        lat,
        lon,
      };
      console.log(data);

      return coordinates;
    } catch {
      (err) => console.log(err);
    }
  }
}

export async function getCurrentWeather(dataCoord) {
  let lat = dataCoord.lat;
  let lon = dataCoord.lon;
  const API_key = "3ba98b4b745fa42c31dff2a783d52b5c";
  try {
    const resource = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`
    );
    const data = await resource.json();
    console.log(data);
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
    const sunrise = data.sys.sunrise;
    const sunset = data.sys.sunset;
    const minTemp = data.main.temp_min;
    const maxTemp = data.main.temp_max;

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
      sunrise,
      sunset,
      minTemp,
      maxTemp,
    };

    return weatherData;
  } catch {
    (err) => console.log(err);
  }
}

export async function getHourlyWeather(dataCoord) {
  const lat = dataCoord.lat;
  const lon = dataCoord.lon;
  const API_key = "3ba98b4b745fa42c31dff2a783d52b5c";
  try {
    const resource = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`
    );
    const hourlyData = await resource.json();
    const list = hourlyData.list;
    return list;
  } catch {
    (err) => console.log(err);
  }
}

async function getWeatherLocation(e) {
  e.preventDefault();
  const API_key = "3ba98b4b745fa42c31dff2a783d52b5c"
  const inputValue = e.target[0].value;
  if (inputValue === "") {
    return;
  } else {
    try {
      const resource = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_key}&units=metric`
      );
      const data = await resource.json();
      console.log(data)
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
}

export async function getCurrentData(e) {
  const weatherData = await getWeatherLocation(e);
  console.log(weatherData)
  if (weatherData === undefined) {
    return;
  }
  return weatherData;
}
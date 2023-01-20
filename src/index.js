import "./scss/style.scss";

async function getWeatherLocation() {
  const resource = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=ljubljana&appid=3ba98b4b745fa42c31dff2a783d52b5c&units=metric"
  );
  const data = await resource.json();
  console.log(data);
}

getWeatherLocation();

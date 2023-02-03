import sun from "./images/sun.png";
import moon from "./images/starry-night.png";
import rain from "./images/rain.png";
import rainNight from "./images/rainy-night.png";
import clouds from "./images/overcast.png";
import cloudsNight from "./images/cloudy-night.png";
import snow from "./images/snowfall.png";
import snowNight from "./images/snowfall-night.png";
import storm from "./images/storm.png";
import stormNight from "./images/stormy-night.png";
import fog from "./images/fog.png";
import wind from "./images/wind.png";

export function weatherIcons(icon) {
  const currentHour = new Date().getHours();

  if (currentHour > 7 && currentHour < 20) {
    switch (icon) {
      case "clear":
        document.body.style.background =
          "linear-gradient(90deg, hsla(39, 100%, 71%, 1) 0%, hsla(216, 100%, 62%, 1) 100%)";
          document.body.style.color = "black"
        return sun;
      case "clouds":
        document.body.style.background =
          "linear-gradient(90deg, hsla(228, 17%, 53%, 1) 0%, hsla(229, 28%, 88%, 1) 100%)";
          document.body.style.color = "black"
        return clouds;
      case "rain":
        document.body.style.background =
          "linear-gradient(90deg, hsla(213, 77%, 14%, 1) 0%, hsla(202, 27%, 45%, 1) 100%)";
          document.body.style.color = "white"
        return rain;
      case "snow":
        document.body.style.background =
          "linear-gradient(90deg, hsla(233, 100%, 90%, 1) 0%, hsla(0, 0%, 89%, 1) 100%)";
          document.body.style.color = "black"
        return snow;
      case "storm":
        document.body.style.background =
          "linear-gradient(90deg, rgb(24, 35, 107) 0%, rgb(71, 17, 101) 100%)";
          document.body.style.color = "white"
        return storm;
      case "fog":
        document.body.style.background =
          "linear-gradient(90deg, hsla(228, 17%, 53%, 1) 0%, hsla(229, 28%, 88%, 1) 100%)";
          document.body.style.color = "black"
        return fog;
      case "wind":
        return wind;
      case "mist":
        document.body.style.background =
          "linear-gradient(90deg, hsla(228, 17%, 53%, 1) 0%, hsla(229, 28%, 88%, 1) 100%)";
          document.body.style.color = "black"
        return fog;
      case "drizzle":
        document.body.style.background =
          "linear-gradient(90deg, hsla(213, 77%, 14%, 1) 0%, hsla(202, 27%, 45%, 1) 100%)";
          document.body.style.color = "white"
        return rain;
    }
  } else
    switch (icon) {
      case "clear":
        nightBg();
        return moon;
      case "clouds":
        nightBg();
        return cloudsNight;
      case "rain":
        nightBg();
        return rainNight;
      case "snow":
        nightBg();
        return snowNight;
      case "storm":
        nightBg();
        return stormNight;
      case "fog":
        nightBg();
        return fog;
      case "wind":
        nightBg();
        return wind;
      case "mist":
        nightBg();
        return fog;
      case "drizzle":
        nightBg();
        return rain;
    }
}

function nightBg() {
  document.body.style.background =
    "linear-gradient(90deg, hsla(236, 100%, 8%, 1) 0%, hsla(211, 100%, 28%, 1) 100%)";
  document.body.style.color = "white";
}

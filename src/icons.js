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
        return sun;
      case "clouds":
        document.body.style.background =
          "linear-gradient(90deg, hsla(228, 17%, 53%, 1) 0%, hsla(229, 28%, 88%, 1) 100%)";
        return clouds;
      case "rain":
        document.body.style.background =
          "linear-gradient(90deg, hsla(213, 77%, 14%, 1) 0%, hsla(202, 27%, 45%, 1) 100%)";
        return rain;
      case "snow":
        document.body.style.background =
          "linear-gradient(90deg, hsla(233, 100%, 90%, 1) 0%, hsla(0, 0%, 89%, 1) 100%)";
        return snow;
      case "storm":
        document.body.style.background =
          "linear-gradient(90deg, rgb(24, 35, 107) 0%, rgb(71, 17, 101) 100%)";
        return storm;
      case "fog":
        document.body.style.background =
          "linear-gradient(90deg, hsla(228, 17%, 53%, 1) 0%, hsla(229, 28%, 88%, 1) 100%)";
        return fog;
      case "wind":
        return wind;
      case "mist":
        document.body.style.background =
          "linear-gradient(90deg, hsla(228, 17%, 53%, 1) 0%, hsla(229, 28%, 88%, 1) 100%)";
        return fog;
      case "drizzle":
        document.body.style.background =
          "linear-gradient(90deg, hsla(213, 77%, 14%, 1) 0%, hsla(202, 27%, 45%, 1) 100%)";
        return rain;
    }
  } else
    switch (icon) {
      case "clear":
        document.body.style.background =
          "linear-gradient(90deg, hsla(236, 100%, 8%, 1) 0%, hsla(211, 100%, 28%, 1) 100%)";
        return moon;
      case "clouds":
        document.body.style.background =
          "linear-gradient(90deg, hsla(236, 100%, 8%, 1) 0%, hsla(211, 100%, 28%, 1) 100%)";
        return cloudsNight;
      case "rain":
        document.body.style.background =
          "linear-gradient(90deg, hsla(236, 100%, 8%, 1) 0%, hsla(211, 100%, 28%, 1) 100%)";
        return rainNight;
      case "snow":
        document.body.style.background =
          "linear-gradient(90deg, hsla(236, 100%, 8%, 1) 0%, hsla(211, 100%, 28%, 1) 100%)";
        return snowNight;
      case "storm":
        document.body.style.background =
          "linear-gradient(90deg, hsla(236, 100%, 8%, 1) 0%, hsla(211, 100%, 28%, 1) 100%)";
        return stormNight;
      case "fog":
        document.body.style.background =
          "linear-gradient(90deg, hsla(236, 100%, 8%, 1) 0%, hsla(211, 100%, 28%, 1) 100%)";
        return fog;
      case "wind":
        document.body.style.background =
          "linear-gradient(90deg, hsla(236, 100%, 8%, 1) 0%, hsla(211, 100%, 28%, 1) 100%)";
        return wind;
      case "mist":
        document.body.style.background =
          "linear-gradient(90deg, hsla(236, 100%, 8%, 1) 0%, hsla(211, 100%, 28%, 1) 100%)";
        return fog;
      case "drizzle":
        document.body.style.background =
          "linear-gradient(90deg, hsla(236, 100%, 8%, 1) 0%, hsla(211, 100%, 28%, 1) 100%)";
        return rain;
    }
}

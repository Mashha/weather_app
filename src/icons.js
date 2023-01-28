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
        return sun;
      case "clouds":
        return clouds;
      case "rain":
        return rain;
      case "snow":
        return snow;
      case "storm":
        return storm;
      case "fog":
        return fog;
      case "wind":
        return wind;
    }
  } else
    switch (icon) {
      case "clear":
        return moon;
      case "clouds":
        return cloudsNight;
      case "rain":
        return rainNight;
      case "snow":
        return snowNight;
      case "storm":
        return stormNight;
      case "fog":
        return fog;
      case "wind":
        return wind;
    }
}

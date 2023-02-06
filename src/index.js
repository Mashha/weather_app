import "./scss/style.scss";
import { displayDataOnPage, currentDay } from "./dom";
currentDay();

window.addEventListener("load", function () {
  document.querySelector(".loading-container").style.display = "relative";
});

document
  .querySelector("form")
  .addEventListener("submit", (e) => displayDataOnPage(e));

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const location = { lat, lon };
    displayDataOnPage({}, location);
    document.querySelector(".loading-container").style.display = "none";
    return location
  }

  function error() {
    alert("Unable to retrieve your location, locating to Vienna");
    displayDataOnPage({
      target: [{ value: "Vienna" }],
      preventDefault: () => {},
    });
  }
}

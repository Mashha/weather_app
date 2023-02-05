import "./scss/style.scss";
import { displayDataOnPage, currentDay } from "./dom";
currentDay();

window.addEventListener("load", function () {
  document.querySelector(".loading-container").style.display = "none";
});

document
  .querySelector("form")
  .addEventListener("submit", (e) => displayDataOnPage(e));

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    let location = { lat, lon };
    displayDataOnPage({}, location);
  }

  function error() {
    alert("Unable to retrieve your location, locating to Vienna");
    displayDataOnPage({
      target: [{ value: "Vienna" }],
      preventDefault: () => {},
    });
  }
}

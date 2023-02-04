import "./scss/style.scss";
import { displayDataOnPage, currentDay } from "./dom";
currentDay();

document.querySelector("form").addEventListener("submit", displayDataOnPage);

window.addEventListener("load", function(){
  document.querySelector(".loading-container").style.display = "none"
})

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    console.log(lat, long)
  }

  function error(){
    alert('Unable to retrieve your location, locating to Vienna');
    displayDataOnPage({
      target: [{ value: "Vienna" }],
      preventDefault: () => {},
    });
  }
} 


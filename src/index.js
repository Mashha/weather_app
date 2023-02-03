import "./scss/style.scss";
import { displayDataOnPage, currentDay } from "./dom";
currentDay();

document.querySelector("form").addEventListener("submit", displayDataOnPage);

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(function (position) {
//     var lat = position.coords.latitude;
//     var long = position.coords.longitude;
//   });
// } else {
  displayDataOnPage({
    target: [{ value: "Vienna" }],
    preventDefault: () => {},
  });
//}

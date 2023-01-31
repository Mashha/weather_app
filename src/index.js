import "./scss/style.scss";
import { displayDataOnPage, currentDay } from "./dom";
currentDay()

document.querySelector("form").addEventListener("submit", displayDataOnPage)

displayDataOnPage({
    target: [{value: "Vienna"}],
    preventDefault: () => {}
  })
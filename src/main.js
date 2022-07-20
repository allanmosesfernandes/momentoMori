import * as CONSTANTS from "./constants";

/* Greeting */

let greeting = document.getElementById("greeting");
let moment = document.querySelector("#moment");
const hour = new Date().getHours();
const greetingTypes = ["morning", "afternoon", "evening"];

export const greet = () => {
  if (hour < 12) greeting.innerText = greetingTypes[0];
  else if (hour < 18) greeting.innerText = greetingTypes[1];
  else greeting.innerText = greetingTypes[2];
};

const day = new Date().getDay();
const month = new Date().getMonth();
const date = new Date().getDate();
const year = new Date().getFullYear();

moment.innerHTML = `${CONSTANTS.days[day]} ${date} ${CONSTANTS.months[month]} ${year}`;
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const timeString = new Date().toLocaleString().split(",")[1];
  timeDisplay.textContent = timeString;
  requestAnimationFrame(refreshTime);
}

refreshTime();
// setInterval(refreshTime, 1000);

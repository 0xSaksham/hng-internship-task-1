const dateEl = document.getElementById("date-el");
const timeEl = document.getElementById("time-el");

function getTimeAndDate() {
  let date = new Date();
  let myDay = date.getUTCDay();

  let weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hours = date.getUTCHours();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;

  hours = hours ? hours : 12;

  let minutes = date.getUTCMinutes();

  minutes = minutes < 10 ? "0" + minutes : minutes;

  let seconds = date.getUTCSeconds()

  let milliSeconds = date.getUTCMilliseconds();

  let time =  `${hours} : ${minutes} : ${seconds} : ${milliSeconds} ${ampm}`

  dateEl.innerHTML = `<h2>Today is  ${weekday[myDay]}</h2>`;
  timeEl.innerHTML = `<h2>Time: ${time}</h2>`;
}

setInterval("getTimeAndDate()", 1000);

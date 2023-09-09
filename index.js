const dateEl = document.getElementById("date-el")
const timeEl = document.getElementById("time-el")

function getTimeAndDate(){
    const date = new Date()
    const myDay = date.getUTCDay()

    const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    ]
    let hours = date.getUTCHours()
    const ampm = hours >= 12 ? "PM" : "AM"

    hours = hours % 12;

    hours = hours ? hours : 12;

    let minutes = date.getUTCMinutes();

    minutes = minutes < 10 ? "0" + minutes : minutes;

    let time = hours + " : " + minutes + " : " + date.getUTCMilliseconds() + " " + ampm;

    dateEl.innerHTML = `<h2>Today is  ${weekday[myDay]}</h2>`;
    timeEl.innerHTML = `<h2>Time: ${time}</h2>`;
}

setInterval("getTimeAndDate()", 1000);






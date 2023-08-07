//Date
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
let date = document.querySelector("#date");
date.innerHTML = `${day} ${hours}:${minutes}`;
//City and Temp
function displayTemp(response) {
  let tempElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city-text");
  let condition = document.querySelector("#condition");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let humidityNumber = response.data.temperature.humidity;
  let windNumber = Math.round(response.data.wind.speed);
  tempElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  condition.innerHTML = response.data.condition.description;
  humidity.innerHTML = `${humidityNumber}%`;
  wind.innerHTML = `${windNumber}km/h`;
}

let apiKey = "79a5e8b38cf0f847t9136fa452o839aa";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Miami&key=${apiKey}`;
axios.get(url).then(displayTemp);

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
function location(event) {
  event.preventDefault();
  let input = document.querySelector("#formGroupExampleInput").value;
  cityText.innerHTML = `${input.value}`;

  locationTemp(input);
}
let cityText = document.querySelector("#city-text");
let locationInput = document.querySelector("#location-input");
locationInput.addEventListener("submit", location);

function showTemp(response) {
  let temp = document.querySelector("#temperature");
  let temperature = Math.round(response.data.temperature.day);
  temp.innerHTML = `${temperature}`;
  cityText.innerHTML = response.data.city;
}
function locationTemp(input) {
  let apiKey = "79a5e8b38cf0f847t9136fa452o839aa";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${input.value}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemp);
}
navigator.geolocation.getCurrentPosition(locationTemp);

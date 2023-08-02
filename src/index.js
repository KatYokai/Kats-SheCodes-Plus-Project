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
  let temperature = Math.round(response.data.main.temp);
  temp.innerHTML = `${temperature}`;
  cityText.innerHTML = response.data.name;
}
function locationTemp(input) {
  let apiKey = "fda3688b1db05987dd5d07c237aecfba";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemp);
}
navigator.geolocation.getCurrentPosition(locationTemp);

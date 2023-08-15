navigator.geolocation.getCurrentPosition(currentlocationTemp);
//Date Today
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

//Date Rest of Week
let tomorrow = document.querySelector("#day1");
let day1 = days[now.getDay() + 1];
tomorrow.innerHTML = `${day1}`;

let dayAfter = document.querySelector("#day2");
let day2 = days[now.getDay() + 2];
dayAfter.innerHTML = `${day2}`;

let dayafterThat = document.querySelector("#day3");
let day3 = days[now.getDay() + 3];
dayafterThat.innerHTML = `${day3}`;

let dayafterThat1 = document.querySelector("#day4");
let day4 = days[now.getDay() + 4];
dayafterThat1.innerHTML = `${day4}`;

let dayafterThat2 = document.querySelector("#day5");
let day5 = days[now.getDay() + 5];
dayafterThat2.innerHTML = `${day5}`;

let dayafterThat3 = document.querySelector("#day6");
let day6 = days[now.getDay() + 6];
dayafterThat3.innerHTML = `${day6}`;

//City and Temp
function currentlocationTemp(position) {
  let currentapiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(currentapiUrl).then(showTemp);
}

function location(event) {
  event.preventDefault();
  let input = document.querySelector("#formGroupExampleInput").value;
  cityText.innerHTML = `${input.value}`;

  locationTemp(input);
}

function locationTemp(input) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

function showTemp(response) {
  let temp = document.querySelector("#temperature");
  let temperature = Math.round(response.data.main.temp);
  let condition = document.querySelector("#condition");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let humid = response.data.main.humidity;
  let windSpeed = response.data.wind.speed;
  let conDescript = response.data.weather[0].main;

  condition.innerHTML = `${conDescript}`;
  humidity.innerHTML = `Humidity:${humid}%`;
  wind.innerHTML = `Wind:${windSpeed}km/h`;
  temp.innerHTML = `${temperature}`;
  cityText.innerHTML = response.data.name;

  weatherIcon(response);
  getForecast(response.data.coord);
}

function weatherIcon(response) {
  let mainImg = document.querySelector("#mainImg");
  if (response.data.weather[0].main === "Clear") {
    mainImg.setAttribute(
      "src",
      `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/092/531/original/sun_icon.png?1691437170`
    );
  } else if (response.data.weather[0].main === "Clouds") {
    mainImg.setAttribute(
      "src",
      `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/092/620/original/cloud_icon_Small.png?1691525951`
    );
  } else if (response.data.weather[0].main === "Thunderstorm") {
    mainImg.setAttribute(
      "src",
      `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/092/624/original/rain_icon.png?1691526296`
    );
  } else if (response.data.weather[0].main === "Drizzle") {
    mainImg.setAttribute(
      "src",
      `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/092/629/original/drizzle_icon.png?1691526943`
    );
  } else if (response.data.weather[0].main === "Rain") {
    mainImg.setAttribute(
      "src",
      `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/092/630/original/rain_icon_Small.png?1691527033`
    );
  } else if (response.data.weather[0].main === "Snow") {
    mainImg.setAttribute(
      "src",
      `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/092/631/original/snow_icon.png?1691527300`
    );
  } else {
    mainImg.setAttribute(
      "src",
      `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/092/634/original/mist_icon_Small.png?1691527443`
    );
  }
}

navigator.geolocation.getCurrentPosition(locationTemp);

let cityText = document.querySelector("#city-text");
let locationInput = document.querySelector("#location-input");
locationInput.addEventListener("submit", location);
let apiKey = "fda3688b1db05987dd5d07c237aecfba";

//Temp for Other Days
function getForecast(coordinates) {
  let apiKey = "fda3688b1db05987dd5d07c237aecfba";
  let lat = coordinates.lat;
  let lon = coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  let day1high = document.querySelector("#day1high");
  let day1low = document.querySelector("#day1low");
  day1high.innerHTML = `${Math.round(response.data.daily[1].temp.max)}°`;
  day1low.innerHTML = `${Math.round(response.data.daily[1].temp.min)}°`;

  let day2high = document.querySelector("#day2high");
  let day2low = document.querySelector("#day2low");
  day2high.innerHTML = `${Math.round(response.data.daily[2].temp.max)}°`;
  day2low.innerHTML = `${Math.round(response.data.daily[2].temp.min)}°`;

  let day3high = document.querySelector("#day3high");
  let day3low = document.querySelector("#day3low");
  day3high.innerHTML = `${Math.round(response.data.daily[3].temp.max)}°`;
  day3low.innerHTML = `${Math.round(response.data.daily[3].temp.min)}°`;

  let day4high = document.querySelector("#day4high");
  let day4low = document.querySelector("#day4low");
  day4high.innerHTML = `${Math.round(response.data.daily[4].temp.max)}°`;
  day4low.innerHTML = `${Math.round(response.data.daily[4].temp.min)}°`;

  let day5high = document.querySelector("#day5high");
  let day5low = document.querySelector("#day5low");
  day5high.innerHTML = `${Math.round(response.data.daily[5].temp.max)}°`;
  day5low.innerHTML = `${Math.round(response.data.daily[5].temp.min)}°`;

  let day6high = document.querySelector("#day6high");
  let day6low = document.querySelector("#day6low");
  day6high.innerHTML = `${Math.round(response.data.daily[6].temp.max)}°`;
  day6low.innerHTML = `${Math.round(response.data.daily[6].temp.min)}°`;

  forcastIcon(response);
}

function forcastIcon(response) {}

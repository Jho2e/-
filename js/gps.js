const API = "458c38fe160add01a2ad90320aadacc5";
const gpsDataText = document.querySelector(".main-gps span:last-child");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&lang=ko&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      gpsDataText.innerText = `${data.name} / \n ${data.main.temp}°C , ${data.weather[0].main}`;
    });
}

function onGeoError() {
  alert('주소 "줘"');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

let weatherRequest = new XMLHttpRequest();
let apiURL = 'api.openweathermap.org/data/2.5/forecast?id=4156210&APPID=945afe25279f1d0a64a8191312aca58b'
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload =  function () {
  let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
}



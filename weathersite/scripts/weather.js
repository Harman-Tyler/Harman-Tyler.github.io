//connection to api
let weatherRequest = new XMLHttpRequest();
let apiURL = 'https://api.openweathermap.org/data/2.5/weather?&id=4156210&units=imperial&APPID=945afe25279f1d0a64a8191312aca58b';
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    //console.log(weatherData);

    document.getElementById('currentTemp').innerHTML = weatherData.main.temp;
    let imagesrc = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
    document.getElementById('weatherimage').src = imagesrc;
    document.getElementById('weatherDescription').innerHTML = weatherData.weather[0].description;
    document.getElementById('windSpeed').innerHTML = weatherData.wind.speed;
    document.getElementById('weatherIcon').innerHTML = weatherData.weather.icon;
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;

}







/*<div class="current">
                <p id="status">Sunny</p>
            </div>
            <div class="hi-low">
                <p class="temp">High: <span id="max-temp">89&deg;F</span></p>
                <p class="temp">Low: <span id="min-temp">65&deg;F</span></p>
            </div>
            <div class="conditions">
                <p class="condition">Precipitation: 0&percnt;</p>
                <p class="condition">Wind Speed: <span id="wind-speed">5mph NW</span></p>
                <p class="condition">Wind Chill: <span id="wind-chill"></span>&deg;</p>*/
           // </div>
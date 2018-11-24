console.log('app.js running');

import {documentElements} from './init';
import {Weather, updateWeather} from './weather-data.js';
import {apiKey} from './apiKey';

documentElements.searchButton.addEventListener('click', searchWeather);

function searchWeather () {
    documentElements.loadingText.style.display = 'block';
    documentElements.weatherBox.style.display = 'none';
    const cityName = documentElements.searchCity.value.trim().toLowerCase();    
    if (cityName.length == 0) {
        return alert('Please enter a City name');
    };
    
    
    const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const url = `${weatherUrl}?q=${cityName}&units=metric&APPID=${apiKey}`;
    const method = 'GET';
    
    const weatherRequest = new XMLHttpRequest();
    weatherRequest.open(method, url);    
    weatherRequest.send();
    
    weatherRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === XMLHttpRequest.DONE && e.target.status === 200) {            
            const data = JSON.parse(e.target.responseText);
            const weatherData = new Weather (cityName, data.weather[0].description.toUpperCase());
            weatherData.temperature = data.main.temp;
            updateWeather(weatherData);
        } else if (e.target.readyState === XMLHttpRequest.DONE) {
            console.log('ERROR: ' + e.target.status);
        };
    });   
};
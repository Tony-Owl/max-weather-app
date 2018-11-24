console.log('init.js running');

const searchButton = document.getElementById('weather-button');
const searchCity = document.getElementById('city');

const loadingText = document.getElementById('load');
const weatherBox = document.getElementById('weather');

const weatherCity = document.getElementById('weatherCity');
const weatherDescription = document.getElementById('weatherDescription');
const weatherTemperature = document.getElementById('weatherTemperature');

const documentElements = {
    searchButton,
    searchCity,
    loadingText,
    weatherBox,
    weatherCity,
    weatherDescription,
    weatherTemperature
}

export { 
    documentElements
}
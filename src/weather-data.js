console.log('weather-data.js running');

import { documentElements } from './init';

function Weather (cityName, description) {
    this.cityName = cityName;
    this.description = description;    
};

Object.defineProperty(Weather.prototype, 'temperature', {
    get: function () {
        return this._temperature;
    },
    set: function (value) {        
        this._temperature = (value * 1.8 + 32).toFixed(2) + ' F'
    }
});

function updateWeather (weatherData) {
    documentElements.weatherCity.textContent = weatherData.cityName;
    documentElements.weatherDescription.textContent = weatherData.description;
    documentElements.weatherTemperature.textContent = weatherData.temperature;
    documentElements.weatherBox.style.display = 'block';
    documentElements.loadingText.style.display = 'none';
};

export {
    Weather,
    updateWeather
};
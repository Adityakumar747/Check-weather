import React, { useEffect, useState } from 'react'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'

import'./Weather.css'

const Weather = () => {

  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('London');
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  const search = async (cityName) => {
    setLoading(true);
    setError('');
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData({
          humidity: data.main?.humidity,
          windSpeed: data.wind?.speed,
          temperature: data.main?.temp
        });
        setCity(data.name);
      } else {
        setWeatherData(null);
        setCity(cityName);
        setError(data.message || 'City not found');
      }
    } catch (error) {
      setWeatherData(null);
      setCity(cityName);
      setError('Failed to fetch weather data');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    search(city);
    
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    if (input.trim()) {
      search(input.trim());
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='Weather'>
      <div className='search-bar'>
        <input
          type="text"
          placeholder="Search city..."
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <img src={search_icon} alt="search" onClick={handleSearch} style={{cursor:'pointer'}} />
      </div>
      {loading && <p style={{color:'#fff',marginTop:10}}>Loading...</p>}
      {error && <p style={{color:'#ffb3b3',marginTop:10}}>{error}</p>}
      {/* Weather icon demonstration (all icons used) */}
      <div style={{ display: 'none' }}>
        <img src={cloud_icon} alt="cloud" />
        <img src={drizzle_icon} alt="drizzle" />
        <img src={rain_icon} alt="rain" />
        <img src={snow_icon} alt="snow" />
      </div>
      <img src={clear_icon} alt="weather icon" className='Weather-icon' />
      <p className='temperature'>{weatherData ? `${Math.round(weatherData.temperature - 273.15)}°C` : '--'}</p>
      <p className='location'>{city}</p>
      <div className="Weather-data">
        <div className="col">
          <img src={humidity_icon} alt="humidity" />
          <p>{weatherData ? `${weatherData.humidity}%` : '--'}</p>
          <span>Humidity</span>
        </div>
        <div className="col">
          <img src={wind_icon} alt="wind" />
          <p>{weatherData ? `${weatherData.windSpeed} km/h` : '--'}</p>
          <span>Wind speed</span>
        </div>
      </div>
    </div>
  );
}

export default Weather
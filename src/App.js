import React, { useState } from 'react';
import './App.css';

const api = {
  key: '2e455788b7fe48076c1405fd6507ff97',
  base: 'http://api.openweathermap.org/data/2.5/'
};

const dateBuilder = d => {
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = e => {
    if (e.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
        });
    }
  };
  return (
    <div className='App'>
      <main>
        <div className='search-box'>
          <input
            type='text'
            className='search-box'
            placeholder='Search...'
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        <div className='location-box'>
          {typeof weather.main != 'undefined' ? (
            <div>
              <div>
                <div className='location'>
                  {weather.name}, {weather.sys.country}
                </div>
                <div className='date'>{dateBuilder(new Date())}</div>
              </div>
              <div className='weather-box'>
                <div className='temp'>{Math.round(weather.main.temp)}c</div>
                <div className='weather'>{weather.weather[0].main}</div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

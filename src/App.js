import React from 'react';
import './App.css';
import Weather from './components/Weather';

const api = {
  key: ' 2e455788b7fe48076c1405fd6507ff97',
  base: 'https://api.openweathermap.org/data/2.5/'
};

function App() {
  return (
    <div className='App'>
      <main>
        <div className='search-box'>
          <input type='text' className='search-box' placeholder='Search...' />
        </div>
      </main>
    </div>
  );
}

export default App;

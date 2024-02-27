import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [selectedCountry, setSelectedCountry]=useState('');
  const [countryData, setCountryData]=useState('');
  const countries = ['India', 'United States', 'China', 'Indonesia', 'Pakistan', 'Brazil', 'Nigeria', 'Bangladesh', 'Russia', 'Mexico', 'Japan', 'Ethiopia', 'Philippines', 'Egypt', 'Vietnam', 'DR Congo', 'Turkey', 'Iran', 'Germany', 'Thailand', 'United Kingdom', 'France', 'Italy', 'South Africa', 'Tanzania', 'Myanmar', 'South Korea', 'Colombia', 'Kenya', 'Spain'];

  const handleSubmit=(e)=>{
    e.preventDefault();

    console.log("Clicked");

    if(selectedCountry==='') return;

    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${selectedCountry}&appid=bfea883cfd5bc567e458e499a1d4c4a2`

    axios.get(apiUrl).then((response)=>{
      console.log(response.data);
      console.log(response.data.weather[0].description);

      setCountryData(response.data.weather[0].description);
    })
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className='form-container'>
        <div className='dropdown'>
          <h2>Select a Country</h2>
          <select value={selectedCountry} onChange={(e)=>setSelectedCountry(e.target.value)}>
            <option value="">Country</option>
            {countries.map((country)=>{
              return <option key={country} value={country}>{country}</option>
            })}
          </select>
        </div>
        <button type='submit'>Get Details</button>
        {countryData!=='' && <h1>{countryData}</h1>}
      </form>
    </div>
  );
}

export default App;

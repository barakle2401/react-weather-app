import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SearchBar from './searchBar'
import AreaInfo from './areaInfo';
import Forecast from "./forecast";
import Error from "./Error"
import { keyframes } from 'styled-components';
const API_KEY = '98a8ab656c29c97a262396d29ba26950';

const Title = styled.h1`
    display: block;
    color:#ffff;
    font-size: 4em;
    text-align:center;
    letter-spacing: 2px;
    margin:auto;
`;

const Wrapper = styled.section`

  max-width: 1500px;
  margin: 0 auto;
  height: calc(100vh - 64px);
  width: 100%;
  position: relative;
  top:10rem;
  align-items:center;
  
`;
const typing = keyframes`

    from { width: 0  }
    to { width: 100%   }
    
`;
const CardsWrapper = styled.div`
    
    display: flex;
    overflow-x: auto;
    justify-content: space-between;
    padding: 40px;
    position: relative;
    animation: 
    ${typing} 2s steps(40, end);  

`;
const dailyForecast = {
    day: "Sunday",
    data: "25/05",
    time: "13:00",
    temperature: 20,
    icon: "Suns"

}


function App() {

    const [city, setCity] = useState('');
    const [weatherInfo, setWeatherInfo] = useState('');
    const [error, setError] = useState(false);

    const searchCity = e => {
        e.preventDefault();
        console.log(city);
        setError(false);
        const weather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`;
        const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}&units=metric`;

        const request1 = axios.get(weather);
        const request2 = axios.get(forecast);
        axios.all([request1, request2]).then(axios.spread((...response) => {

            const response1 = response[0].data, response2 = response[1].data;

            console.log(response1);
            console.log(response2);
            if (response1 && response2) {
                const weatherInfo = {
                    city: response1.name,
                    country: response1.sys.country,

                    description: response1.weather[0].description,
                    main: response1.weather[0].main,
                    temp: response1.main.temp,
                    highestTemp: response1.main.temp_max,
                    lowestTemp: response1.main.temp_min,

                    clouds: response1.clouds.all,
                    humidity: response1.main.humidity,
                    wind: response1.wind.speed,
                    forecast: response2.list,
                };
                setWeatherInfo(weatherInfo);
            }

        })).catch(error => {
            console.log(error);
            setError(true);

        })




    }
    const onChange = e => {

        setCity(e.target.value);

    }

    return (

        <div>

            <Wrapper>
                <Title>Weather App</Title>
                <SearchBar submit={searchCity} onChange={onChange} />
                {weatherInfo && !error ? (<AreaInfo country={weatherInfo.country} city={weatherInfo.city} />) : (<></>)}


                {weatherInfo && !error ? (< CardsWrapper >

                    <Forecast weather={weatherInfo} />
                </ CardsWrapper>) : (<></>)}
                {!error ? (<Error />) : (<></>)}
            </Wrapper>
        </div>
    );

}
export default App;

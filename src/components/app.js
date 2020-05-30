import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SearchBar from './searchBar'
import ForecastCard from './forecastCard';

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

const CardsWrapper = styled.div`
    
    display: flex;
    overflow-x: auto;
    justify-content: space-between;
    padding: 40px;
    position: relative;
    top: 10rem;
    

`;
const dailyForecast = {
    day: "Sunday",
    temperature: 20
}


function App() {
    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${"jerusalem"}&APPID=${API_KEY}&units=metric`;

    useEffect(() => {
        const result = axios({ method: 'get', url: weather })
            .then(response => {
                console.log(response.data.main.temp);
            });
    });
    // const weather = `https://api.openweathermap.org/data/2.5/weather?q=${"jerusalem"}&APPID=${API_KEY}&units=metric`;
    // const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&APPID=${API_KEY}&units=metric`;

    return (

        <div>
            <Wrapper>
                <Title>Weather App</Title>
                <SearchBar />

                < CardsWrapper >
                    <ForecastCard dailyForecast={dailyForecast} />
                    <ForecastCard />
                    <ForecastCard />
                    <ForecastCard />
                    <ForecastCard />
                    <ForecastCard />
                    <ForecastCard />
                    <ForecastCard />
                    <ForecastCard />
                    <ForecastCard />
                    <ForecastCard />
                    <ForecastCard />
                    <ForecastCard />
                    <ForecastCard />
                    <ForecastCard />
                    <ForecastCard />
                </ CardsWrapper>
            </Wrapper>
        </div>
    );

}
export default App;

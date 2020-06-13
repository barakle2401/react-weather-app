import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SearchBar from './searchBar'
import AreaInfo from './areaInfo';
import Forecast from "./forecast";
import Error from "./error";
import device from '../assets/responsive/devices';
import { keyframes } from 'styled-components';
import ClipLoader from "react-spinners/ClipLoader";


const API_KEY = '98a8ab656c29c97a262396d29ba26950';

const TitleWrapper = styled.div`

    display:flex;
    justify-content:center;
    padding:.5rem;
`;
const Title = styled.h1`
    display: block;
    background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px white;
    
    width:30rem;
    transition: 0.3s 1.4s;
    margin:0;
    @media ${device.mobileS} {
        font-size:3rem;

      }
      @media ${device.laptop} {
          font-size:4rem;
      }
   
    text-align:center;
    letter-spacing: 2px;
    margin:auto;
`;

const Wrapper = styled.section`



    height: calc(100vh - 64px);
    width: 100%;
    position: relative;
    padding-top:10rem;
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
    padding: 2.5rem;
    position: relative;
    animation: 
    ${typing} 2s steps(40, end);  

`;


const override = {
    display: "block",
    margin: "0 auto"


}


function App() {

    const [city, setCity] = useState('');
    const [weatherInfo, setWeatherInfo] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const prevSearchValue = useRef();

    const searchCity = e => {
        e.preventDefault();

        if (prevSearchValue.current === city) {
            console.log('Same input as before');
            return;
        }
        setWeatherInfo('')
        setLoading(true);
        setError(false);

        const weather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`;
        const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}&units=metric`;

        const request1 = axios.get(weather);
        const request2 = axios.get(forecast);
        axios.all([request1, request2]).then(axios.spread((...response) => {

            const response1 = response[0].data, response2 = response[1].data;

            // console.log(response1);
            // console.log(response2);

            if (response1 && response2) {
                const weatherInfo = {
                    city: response1.name,
                    country: response1.sys.country,

                    description: response1.weather[0].description,
                    main: response1.weather[0].main,
                    temp: response1.main.temp,
                    highestTemp: response1.main.temp_max,
                    lowestTemp: response1.main.temp_min,
                    feelsLike: response1.main.feels_like,
                    clouds: response1.clouds.all,
                    humidity: response1.main.humidity,
                    wind: response1.wind.speed,
                    forecast: response2.list,
                };
                setTimeout(() => {
                    setLoading(false);
                    setWeatherInfo(weatherInfo);
                    prevSearchValue.current = city;
                }, 500);

            }

        })).catch(error => {

            setTimeout(() => {
                setLoading(false);
                setError(true);

            }, 500);


        })




    }
    const onChange = e => {

        setCity(e.target.value);

    }

    return (

        <>

            <Wrapper>
                <TitleWrapper>
                    <Title>Weather App</Title>
                </TitleWrapper>
                <SearchBar submit={searchCity} onChange={onChange} />

                <ClipLoader

                    css={override}
                    size={100}
                    color={"#FE6B8B"}
                    loading={loading}
                />


                {weatherInfo && !error ? (<AreaInfo country={weatherInfo.country} city={weatherInfo.city} feelsLike={weatherInfo.feelsLike} temp={weatherInfo.temp} />) : (<></>)}


                {weatherInfo && !error ? (< CardsWrapper >

                    <Forecast weather={weatherInfo} />
                </ CardsWrapper>) : (<></>)}
                {error ? (<Error />) : (<></>)}
            </Wrapper>
        </>
    );

}
export default App;

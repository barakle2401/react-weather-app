import React from "react";
import styled from 'styled-components';
import ForecastCard from './forecastCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCloud,
    faBolt,
    faCloudRain,
    faCloudShowersHeavy,
    faSnowflake,
    faSun,
    faSmog,
} from '@fortawesome/free-solid-svg-icons';
const Forecast = ({ weather }) => {


    const {
        city,
        country,
        date,
        description,
        main,
        temp,
        sunset,
        sunrise,
        humidity,
        wind,
        highestTemp,
        lowestTemp,
        forecast,
    } = weather;
    console.log(main)
    const forecasts = forecast.map(item =>

        <ForecastCard
            key={item.dt}
            temp={Math.floor(item.main.temp * 1) / 1}
            icon={item.weather[0].icon}
            month={item.dt_txt.slice(5, 7)}
            day={item.dt_txt.slice(8, 10)}
            hour={item.dt_txt.slice(11, 13) * 1}

        />

    );


    return (
        <>
            {forecasts}

        </>

    )
};
export default Forecast;
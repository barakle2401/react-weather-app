import React from "react";
import styled from 'styled-components';
import { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
const Card = styled.div`
   width:140px;
   height:140px;
   
   flex: 0 0 auto;
   border:0.5px solid RGBA(0,101,80,0.71); 
 
   padding: 10px;
   margin: 0 5px;
   border-radius: 5px;
   background-color: RGBA(127,205,153,0.44);
   text-align:center;
   
   border-radius: 149px 153px 153px 153px;
   -webkit-border-radius: 149px 153px 153px 153px;
   -moz-border-radius: 149px 153px 153px 153px;
`;
const WeatherInfoLarge = styled.span`
    color: black;
    font-size: 1.2em;
    display:block;

`;
const WeatherInfoSmall = styled.span`
    color: RGBA(0,0,226,0.5);
    font-weight:500;
    font-size: 1em;

`;
const rotate = keyframes`

    from {
            -webkit-transform: rotate(0deg);
    }
    to {
            -webkit-transform: rotate(359deg);
    }
`;
const IconWrapper = styled.div`

        display: inline-block;
        animation: ${rotate} 2s linear infinite;
        padding: 2rem 1rem;
        font-size: 1.2rem;
        color:#ff4444;

`;




const ForecastCard = ({ dailyForecast }) => {

    // console.log(dailyForecast);

    return (
        <>
            <Card >
                <WeatherInfoLarge>Sunday  </WeatherInfoLarge>
                <WeatherInfoSmall>  25/05   </WeatherInfoSmall>
                <WeatherInfoSmall>15:00  </WeatherInfoSmall>
                <WeatherInfoSmall> 25&#176;  </WeatherInfoSmall>
                <IconWrapper>
                    <FontAwesomeIcon icon={faSun} />
                </IconWrapper>
            </Card>
        </>

    )
};
export default ForecastCard;
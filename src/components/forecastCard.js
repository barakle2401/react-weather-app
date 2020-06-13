import React from "react";
import styled from 'styled-components';
import { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faBolt, faCloud } from '@fortawesome/free-solid-svg-icons';
const Card = styled.div`
   width:160px;
   height:160px;
   
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
     //color: RGBA(0, 0, 226, 0.5);
font - weight: 500;
font - size: 1em;
`;

const WeatherInfoSmallBr = styled(WeatherInfoSmall)`
display: block;
`;


const WeatherIcon = styled.img`
  display: block;
  height: 50px;
  width: 50px;
  margin: 0 auto;
`;



const ForecastCard = (props) => {
    const days = ["Sunday", "Monday", "Saturday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const iconUrl = `https://openweathermap.org/img/w/${props.icon}.png`;
    //console.log(props.icon);
    const day = new Date(props.day + "/" + props.month + "/2020")



    return (
        <>
            <Card >
                <WeatherInfoLarge>  </WeatherInfoLarge>
                <WeatherInfoLarge>{props.day}/{props.month}     </WeatherInfoLarge>

                <WeatherInfoSmallBr>{props.hour + ":00"}  </WeatherInfoSmallBr>
                <WeatherInfoSmall> {props.temp} &#176;  </WeatherInfoSmall>

                <WeatherIcon src={iconUrl} />


            </Card>
        </>

    )
};
export default ForecastCard;
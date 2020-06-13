import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components'

import device from '../assets/responsive/devices';
import Clock from 'react-live-clock';
const CardWrapper = styled.div`
    display:flex;
    justify-content:center;

    
`;

const CardAreaInfo = styled.div`
    
    margin:auto;
    padding: 1.25rem;
    border-radius:20px;
    border: 0;
    background-color: #1c2331;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    

    
    height : 9.375rem;
    opacity: 0.78;
    color: white;
    font-weight: 400; 
    max-width : 24rem;
    @media ${device.laptop} {
        max-width :38rem;
    }
  
`;
const AreaCardBody = styled.div`
    flex: 1 1 auto;
    

`;
const typing = keyframes`

    from { width: 0  }
    to { width: 100%   }
    
`;
const CardTitle = styled.h1`

    font-size:1.5rem;
    @media ${device.laptop} {
        font-size:2.5rem;
        
    }
  
    overflow: hidden; /* Ensures the content is not revealed until the animation */
   
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
    animation: 
      ${typing} 3.5s steps(40, end);

`;
const CardSubTitle = styled(CardTitle)`

    font-size:0.8rem;
    @media ${device.laptop} {
        font-size:1.5rem;
    }
  
`;


const Pink = styled.span`
      color: #FE6B8B ;
`;
const Orange = styled.span`
      color: #FF8E53;
  
`;
const AreaInfo = (props) => {


    let date = new Date().toLocaleString().substring(0, 16);



    return (

        <CardWrapper>
            <CardAreaInfo>
                <AreaCardBody>

                    <CardTitle> {props.city}, {props.country}  {props.temp}&#176;  </CardTitle >
                    <CardSubTitle>{date}</CardSubTitle>
                    <CardSubTitle><Pink> Temp:</Pink> {props.temp}&#176;   <Orange>Feels Like:</Orange> {props.feelsLike}&#176; </CardSubTitle>


                </AreaCardBody>
            </CardAreaInfo>
        </CardWrapper>

    );
}
export default AreaInfo;
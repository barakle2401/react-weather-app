import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faBolt, faCloud } from '@fortawesome/free-solid-svg-icons';
import device from '../assets/responsive/devices';
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
    max-width : 20rem;
    @media ${device.laptop} {
        max-width :34rem;
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

const rotate = keyframes`

    from {
        -webkit-transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(359deg);
    }
`;
const IconWrapper = styled.div`

    display:inline-block;
    animation: ${rotate} 5s linear infinite;

    font-size: 1rem;
    color:#ff4444;

    @media ${device.laptop} {
        font-size:2rem;
      }
      @media ${device.desktop} {
    
        font-size:2.5rem;
      }
    
   

`;
const AreaInfo = (props) => {


    let dateAndTime = new Date().toLocaleString();



    return (

        <CardWrapper>
            <CardAreaInfo>
                <AreaCardBody>

                    <CardTitle> {props.city}, {props.country}  {props.temp}&#176;  <IconWrapper><FontAwesomeIcon icon={faSun} /> </IconWrapper > </CardTitle >
                    <CardSubTitle>{dateAndTime} Clear </CardSubTitle>
                </AreaCardBody>
            </CardAreaInfo>
        </CardWrapper>

    );
}
export default AreaInfo;
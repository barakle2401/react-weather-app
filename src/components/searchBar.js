import React from "react";
import styled from 'styled-components';
import device from '../assets/responsive/devices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const SearchWrapper = styled.div`     
     top:10%;
     width:700px;
     position: relative;
     margin: 0 auto;
     max-width: 500px;
     transition: 0.8s 0.5s;
     @media ${device.laptopL} {
       max-width: 600px;
     }
     @media ${device.desktop} {
       max-width: 700px;
     }
`;
const SearchInput = styled.input`
    width: 100%;
    border: none;
    background-color: #ffffff;
    font-size: 16px;
    padding: 10px 15px 10px 40px;
    height:3rem;
     width:100%;
     border-radius:20px;
     box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
     &:focus {
       color: #191919;
       box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
       outline: none;
     }
`;
const SearchIcon = styled.span`
  display: block;
  position: absolute;
  top: 50%;
  left: 22px;
  transform: translate(-50%, -50%);
  height: 14px;
  width: 14px;
  font-size: 14px;
  color: #c5c5c5;
  @media ${device.tablet} {
    height: 15px;
    width: 15px;
    font-size: 15px;
  }
  @media ${device.laptop} {
    height: 16px;
    width: 16px;
    font-size: 16px;
  }`
const SearchBar = () => {
    return <SearchWrapper>

        <SearchInput placeholder="Enter a city" />
        <SearchIcon>
            <FontAwesomeIcon icon={faSearch} />
        </SearchIcon>
    </SearchWrapper>



}
export default SearchBar;
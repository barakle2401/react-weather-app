import React from "react";
import styled from 'styled-components';
import device from '../assets/responsive/devices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const SearchWrapper = styled.div`     
     top:10%;
     
 
     position: relative;
     margin: auto;
     margin-bottom:7rem;
     max-width:30rem;
     transition: 0.8s 0.5s;
  
     padding:.5rem;
    
     @media ${device.tablet} {
       width: 35rem;
      
     }
     @media ${device.desktop} {
      width: 43rem;
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
  position: absolute;
  z-index: 2;
  display: block;
  width: 2.375rem;
  height: 2.375rem;
  line-height: 3rem;
  text-align: center;
  pointer-events: none;
  color: #aaa;

  @media ${device.tablet} {
 
  }
  @media ${device.laptop} {
 
  }`
const SearchBar = (props) => {
  return <SearchWrapper>
    <form onSubmit={props.submit}>
      <SearchIcon>
        <FontAwesomeIcon icon={faSearch} />
      </SearchIcon>
      <SearchInput placeholder="Enter a city" onChange={props.onChange} />

    </form>
  </SearchWrapper>



}
export default SearchBar;
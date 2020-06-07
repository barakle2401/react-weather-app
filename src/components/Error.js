import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';

const ErrorWrapper = styled.div`

    display:flex;
    justify-content:center;
    margin-top:7rem;
`;

const ErrorText = styled.h1`

    font-size:3rem;
`;



const Error = (props) => {



    return (
        <ErrorWrapper>
            <ErrorText>
                <FontAwesomeIcon icon={faSadTear}></FontAwesomeIcon>  404  Bad Request
            </ErrorText>
        </ErrorWrapper>
    );
}
export default Error;
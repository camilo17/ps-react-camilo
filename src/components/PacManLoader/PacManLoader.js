import React from 'react';
import styled, {keyframes} from 'styled-components';
import PropTypes from 'prop-types';


const matte = keyframes`
    0%, 49% {
    left: 0;
    right: auto;
    width: 0;
  } 
  49% { width: 100%; }
  
  50%, 100% {
    left: auto;
    right: 0;
    width: 0;
  }
  100% { width: 100%; }
}
`;


const mover = keyframes`
    0%, 100% {
    left: 0;
  } 50% {
    left: 100%;
  }
  2%  { transform: rotateY(0deg); }
  48% { transform: rotateY(0deg); }
  52% { transform: rotateY(180deg); }
  98% { transform: rotateY(180deg); }

`;



const topChomp = keyframes`
    0%, 100% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(46deg);
  }

`

const bottomChomp = keyframes`
  0%, 100% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(-46deg);
  }
`

const Track = styled.div`
    width: 300px;
    height: 0px;
    position: relative;

    border-top: 8px dotted #ddd;
    display: inline-block;

    &:after {
    content:"";
    display:block;
    position: absolute;
    z-index:0;

    width: 100%;
    height: 8px;
    top: -8px;

    background-color: #f3f6f9;
    transform-origin: right center;
    animation: ${matte} 5s linear infinite;

`;


const Kurt = styled.div`
    width: 0;
    height: 0;
    position: relative;
    z-index:1;
    animation: ${mover} 5s linear infinite;

    &:before, &:after {
    content: "";
    display: block;
    position: absolute;

    width: 0;
    height: 0;
    top: -34px;

    border: 30px solid #f06;
    border-radius: 50%;
    border-right-color: transparent;
    }

    &:before {
    animation: ${topChomp} 1s infinite;
    }
    &:after {
    animation: ${bottomChomp} 1s infinite;
    }
    
`










class PacManLoader extends React.Component {


    render() {
        return (
            <Track>
                <Kurt/>
            </Track>
        )
    }
}


export default PacManLoader;
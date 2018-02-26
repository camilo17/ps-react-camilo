import React from 'react';
import styled, {keyframes} from 'styled-components';
import PropTypes from 'prop-types';

const pulseAnimation = keyframes`
    0% {
    transform: scale(0);
    opacity: 1; }
        
    100% {
    transform: scale(1.3);
    opacity: 0;
    }
`;

let Pulse = styled.div`
    width: 100px;
    height: 100px;
    background: #eee;
    border-radius: 50%;
    position: relative;
    margin: 50px;
    display: inline-block;
    

    &:after {
    content: '';
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;

    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
    background-color: ${(props) => props.bgColor ? props.bgColor : 'purple'};
    animation: ${pulseAnimation} 2s linear 2.3s infinite;
    opacity: 0;

    }

    &:before {
    content: '';    
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;

    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
    background-color: ${(props) => props.bgColor ? props.bgColor : 'purple'};
    animation: ${pulseAnimation} 3s linear infinite;
    opacity: 0;
    }
`;



class PulseLoader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Pulse {...this.props}/>
        )
    }
}

PulseLoader.propTypes = {
    bgColor: PropTypes.string
}


export default PulseLoader;
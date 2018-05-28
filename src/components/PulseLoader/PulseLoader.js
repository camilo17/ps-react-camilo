import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

function centerPseudoElement(size) {
  var x = size.replace(/px/g, "");
  x = parseInt(x, 10) / 2;

  var center = `-${x}px`;

  return center;
}

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
  width: ${props => (props.size ? props.size : "100px")};
  height: ${props => (props.size ? props.size : "100px")};
  background: #eee;
  border-radius: 50%;
  position: relative;
  margin: 50px;
  display: inline-block;

  &:after {
    content: "";
    display: block;
    width: ${props => (props.size ? props.size : "100px")};
    height: ${props => (props.size ? props.size : "100px")};
    border-radius: 50%;

    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: ${props => centerPseudoElement(props.size)};
    margin-left: ${props => centerPseudoElement(props.size)};
    background-color: ${props => (props.bgColor ? props.bgColor : "purple")};
    animation: ${pulseAnimation} 2s linear 2.3s infinite;
    opacity: 0;
  }

  &:before {
    content: "";
    display: block;
    width: ${props => (props.size ? props.size : "100px")};
    height: ${props => (props.size ? props.size : "100px")};
    border-radius: 50%;
    position: absolute;

    top: 50%;
    left: 50%;
    margin-top: ${props => centerPseudoElement(props.size)};
    margin-left: ${props => centerPseudoElement(props.size)};
    background-color: ${props => (props.bgColor ? props.bgColor : "purple")};
    animation: ${pulseAnimation} 3s linear infinite;
    opacity: 0;
  }
`;

class PulseLoader extends React.Component {
  render() {
    return <Pulse {...this.props} />;
  }
}

PulseLoader.propTypes = {
  bgColor: PropTypes.string,
  size: PropTypes.string
};

PulseLoader.defaultProps = {
  bgColor: "purple",
  size: "100px"
};

export default PulseLoader;

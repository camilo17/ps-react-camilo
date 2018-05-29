import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { darken } from "polished";
import is from "styled-is";

const btnSizes = {
  sm: "100px",
  md: "120px",
  lg: "250px",
  xlg: "450px"
};

const Btn = styled.button`
  background: ${props => props.color};
  border-color: ${props => props.color};
 

  width: ${props => btnSizes[props.size]};
  height: auto; 
  border: none;
  border-radius: 2px;
  padding: 7px 7px;
  color: white;
  font-size: auto;
  letter-spacing: .5px;
  font-weight: normal;
  box-shadow: 5px 5px 7px #808080;  
  font-family: Helvetica, sans-serif

  
  
}

  &:hover {
    background: ${props => darken(0.07)(props.color)};
    border-color: ${props => darken(0.07)(props.color)};
    letter-spacing: .5px;
    cursor: pointer;
  }


  &:active {
    box-shadow: 3px 2px 8px #808080;  
    outline: none;
  }

  


  &:disabled {
    background: grey;
    box-shadow: none;
    letter-spacing: normal;
    cursor: default;
  }
`;
class Button extends React.Component {
  render() {
    const { children, ...otherProps } = this.props;
    return <Btn {...otherProps}>{children}</Btn>;
  }
}

Button.defaultProps = {
  color: "#8642f4",
  size: "md"
};

Button.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["submit, button"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xlg"]),
  name: PropTypes.string,
  accessibilityLabel: PropTypes.string
};

export default Button;

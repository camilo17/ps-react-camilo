import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { darken } from "polished";
import is from "styled-is";

const btnSizes = {
  sm: "100px",
  md: "120px",
  lg: "250px",
  xlarge: "325px"
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
  font-size: 17px;
  letter-spacing: .5px;
  font-weight: normal;
  box-shadow: 5px 5px 7px #808080;  
  font-family: Arial, Helvetica, sans-serif

  ${is("full")`
    width: 100%
    `}
  
}

  &:hover {
    background: ${props => darken(0.07)(props.color)};
    border-color: ${props => darken(0.07)(props.color)};
    letter-spacing: .5px;
    cursor: pointer;
  }


  &:active {
    box-shadow: 3px 2px 8px #808080;  
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
    const { color, disabled, onClick, full, size } = this.props;
    return (
      <Btn
        full={full}
        disabled={disabled}
        size={size}
        onClick={onClick}
        color={color}
      >
        {this.props.children}
      </Btn>
    );
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
  size: PropTypes.oneOf(["sm", "md", "lg", "xlg"])
};

export default Button;

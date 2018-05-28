import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { darken } from "polished";
const Btn = styled.button`
  background: ${props => props.color};
  border-color: ${props => props.color};

  width: 100px;
  height: auto;
  border: none;
  border-radius: 2px;
  padding: 7px 7px;
  color: white;
  font-size: auto;
  font-weight: 70px;

  &:hover {
    background: ${props => darken(0.07)(props.color)};
    border-color: ${props => darken(0.07)(props.color)};
    letter-spacing: 1px;
    cursor: pointer;
  }
`;
class Button extends React.Component {
  render() {
    const { color, disabled, onClick } = this.props;
    return (
      <Btn disabled={disabled} onClick={onClick} color={color}>
        {this.props.children}
      </Btn>
    );
  }
}

Button.defaultProps = {
  color: "orangered"
};

Button.propTypes = {
  /** Blue | Red | Purple */
  color: PropTypes.string,
  display: PropTypes.bool
};

export default Button;

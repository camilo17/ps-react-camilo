import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { darken } from "polished";
const Btn = styled.button`
  background: ${props => props.color};

  width: 100px;
  height: auto;
  border: none;
  border-radius: 2px;
  padding: 6px 6px;
  color: white;

  &:hover {
    background: ${props => darken(0.07)(props.color)};
  }
`;
class Button extends React.Component {
  render() {
    const { color } = this.props;
    return <Btn color={color}>{this.props.children}</Btn>;
  }
}

Button.defaultProps = {
  color: "purple"
};

Button.propTypes = {
  /** Blue | Red | Purple */
  color: PropTypes.oneOf(["blue", "red", "purple"])
};

export default Button;

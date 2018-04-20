import React from "react";
import PropTypes from "prop-types";
import { darken, lighten } from "polished";
import BaseBtn from "./../../internalComponents/BtnBase";
import is from "styled-is";

const Btn1 = BaseBtn.extend`
  color: white;
  background: ${props => (props.disabled ? "grey" : props.color)};
  font-weight: 100;

  svg {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  rect {
    fill: none;
    stroke: ${props => (props.disabled ? "transparent" : props.strokeColor)};
    stroke-width: 5;
    stroke-dasharray: 422, 0;
  }

  &:hover {
    background: ${props =>
      props.disabled ? "grey" : darken(0.1, props.color)};
    font-weight: 500;

    & svg rect {
      stroke-width: 7;
      stroke-dasharray: 15, 310;
      stroke-dashoffset: 56;
      transition: all 2.35s cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  ${is("disabled")`
    cursor: auto;
    opacity: .5;
    
  `};
`;

class Button extends React.Component {
  handleHref = () => {};
  render() {
    const { children, ...other } = this.props;
    return (
      <Btn1 {...other}>
        <svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%" />
        </svg>
        {children}
      </Btn1>
    );
  }
}

Button.defaultProps = {
  color: "purple",
  strokeColor: "pink",
  disabled: false
};

Button.propTypes = {
  /** Blue | Red | Purple */
  color: PropTypes.oneOf(["blue", "red", "purple"]),

  /** Color of the stroke dash */
  strokeColor: PropTypes.string,

  /** Make button disabled */
  disabled: PropTypes.bool
};

export default Button;

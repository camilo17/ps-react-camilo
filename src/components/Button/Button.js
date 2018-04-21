import React from "react";
import PropTypes from "prop-types";

import Btn1 from "../../internalComponents/Buttons/Btn1";
import Btn2 from "../../internalComponents/Buttons/Btn2";

class Button extends React.Component {
  handleButton = () => {
    const { children, btn1, btn2, ...other } = this.props;
    if (btn1) {
      return (
        <Btn1 {...other}>
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%" />
          </svg>
          {children}
        </Btn1>
      );
    }

    if (btn2) {
      return (
        <Btn2 {...other}>
          <span>{children}</span>
        </Btn2>
      );
    }
  };
  render() {
    return this.handleButton();
  }
}

Button.defaultProps = {
  color: "blue",
  strokeColor: "pink",
  disabled: false,
  btn1: false,
  btn2: true
};

Button.propTypes = {
  /** Blue | Red | Purple */
  color: PropTypes.oneOf(["blue", "red", "purple"]),

  /** Color of the stroke dash */
  strokeColor: PropTypes.string,

  /** Make button disabled */
  disabled: PropTypes.bool,
  /** To pick btn1 */
  btn1: PropTypes.bool,
  btn2: PropTypes.bool
};

export default Button;

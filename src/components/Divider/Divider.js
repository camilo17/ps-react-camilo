import React, { Component } from "react";
import styled, { css } from "styled-components";
import is from "styled-is";
import PropTypes from "prop-types";

const Divi = styled.hr`
  width: ${props => props.size};

  ${is("vertical")`
    
        transform: rotate(90deg);
        
    `};

  ${({ color }) =>
    color &&
    css`
      background: color;
    `};
`;

class Divider extends Component {
  render() {
    return <Divi {...this.props} />;
  }
}

Divider.defaultProps = {
  vertical: false,
  size: "auto",
  color: "#C0C0C0"
};

Divider.propTypes = {
  /** Make Divider vertical instead of horizontal */
  vertical: PropTypes.bool,

  /** Width Divider */
  size: PropTypes.string,
  /** Color of the Divider*/
  color: PropTypes.string
};

export default Divider;

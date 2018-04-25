import React, { Component } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Check = styled.input.attrs({
  type: "checkbox"
})`
  ${props =>
    props.hide &&
    css`
      opacity: 0;
    `};
`;
class CheckBox extends Component {
  render() {
    return <Check />;
  }
}

CheckBox.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  checked: PropTypes.bool,
  id: PropTypes.bool,
  name: PropTypes.string
};

CheckBox.defaultProps = {};

export default CheckBox;

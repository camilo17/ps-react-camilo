import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Check = styled.input.attrs({
  type: "checkbox"
})``;
class CheckBox extends Component {
  render() {
    return <Check />;
  }
}

CheckBox.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  checked: PropTypes.bool.isRequired,
  id: PropTypes.bool.isRequired,
  name: PropTypes.string
};

CheckBox.defaultProps = {
  size: "medium"
};

export default CheckBox;

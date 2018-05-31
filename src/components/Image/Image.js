import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Img = styled.figure`
  background-position: ${props => props.backgroundPosition};
  background-size: ${props => props.backgroundSize};

  width: ${props => props.width};
  height: ${props => props.height};

  background-image: ${props => `url(${props.src})`};
`;

export default class Image extends Component {
  render() {
    return <Img {...this.props} />;
  }
}

Image.defaultProps = {
  height: "250px",
  width: "70%",
  backgroundPosition: "center",
  backgroundSize: "cover"
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  backgroundPosition: PropTypes.string,
  backgroundSize: PropTypes.string
};

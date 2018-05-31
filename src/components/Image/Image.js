import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Img = styled.figure`
  margin: 0;
  background-position: center;
  background-size: cover;

  width: ${props => props.width};
  height: ${props => props.height};

  background-image: ${props => `url(${props.src})`};
`;

export default class Image extends Component {
  render() {
    return (
      <Img
        src={this.props.src}
        alt={this.props.alt}
        height={this.props.height}
        width={this.props.width}
      />
    );
  }
}

Image.defaultProps = {
  height: "250px",
  width: "70%"
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};

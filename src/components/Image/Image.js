import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Img = styled.figure`
  position: relative;
  background-position: ${props => props.backgroundPosition};
  background-size: ${props => props.backgroundSize};

  width: ${props => props.width};
  height: ${props => props.height};

  background-image: ${props => `url(${props.src})`};
`;

const ImgCaption = styled.figcaption`
  position: absolute;
  bottom: 0;
  transform: translateY(20px);
`;

export default class Image extends Component {
  render() {
    const { caption, ...otherProps } = this.props;
    return (
      <Img {...otherProps}>{caption && <ImgCaption>{caption}</ImgCaption>}</Img>
    );
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
  backgroundSize: PropTypes.string,
  caption: PropTypes.string
};

import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ImgCaption = styled.figcaption`
  width: 100%;

  text-align: center;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${props => props.objectFit};
  display: block;
  overflow: hidden;
`;

export default class Image extends Component {
  render() {
    const { caption, ...otherProps } = this.props;
    return (
      <figure>
        <Img {...otherProps} />
      </figure>
    );
  }
}

Image.defaultProps = {
  objectFit: "contain"
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,

  objectFit: PropTypes.oneOf(["fill", "contain", "cover", "none", "scale-down"])
};

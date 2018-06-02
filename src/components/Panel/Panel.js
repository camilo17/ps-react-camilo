import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import is from "styled-is";

const SlideContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${props => props.slideColor};
  padding: 20px;
  color: white;
  box-sizing: border-box;
  transition: transform 0.3s ease;

  ${is("right")`
    transform: translate(100%, 0);
  `};

  ${is("bottom")`
    transform: translate(0, 100%);
  `};

  ${is("top")`
    transform: translate(0, -100%);
  `};

  ${is("left")`
  transform: translate(-100%, 0);
  `};
`;

const SlideImage = styled.img`
    vertical-align: middle;
}
`;

const Slide = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;

  &:hover ${SlideContent} {
    transform: translate(0, 0);
  }
`;
export default class Panel extends Component {
  render() {
    const {
      src,
      height,
      width,
      right,
      left,
      top,
      bottom,
      content,
      imageClass,
      slideColor
    } = this.props;

    return (
      <Slide>
        <SlideContent
          slideColor={slideColor}
          right={right}
          left={left}
          top={top}
          bottom={bottom}
        >
          {content}
        </SlideContent>
        <SlideImage
          src={src}
          height={height}
          width={width}
          className={imageClass}
        />
      </Slide>
    );
  }
}

Panel.defaultProps = {
  slideColor: "rgba(142, 233, 232, 0.9)"
};

Panel.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  direction: PropTypes.oneOf(["right, left, top, bottom"]),
  imageClass: PropTypes.string,
  slideColor: PropTypes.string
};

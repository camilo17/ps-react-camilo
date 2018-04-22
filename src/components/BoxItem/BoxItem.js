import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const FlexItem = styled.div`
  order: ${props => props.order};
  flex-grow: ${props => props.flexGrow};
  flex-shrink: ${props => props.flexShrink};
  flex-basis: ${props => props.flexBasis};
  flex: ${props => props.flex};
  align-self: ${props => props.alignSelf};
`;

class BoxItem extends React.Component {
  render() {
    const { children, ...other } = this.props;
    return <FlexItem {...other}>{children}</FlexItem>;
  }
}

BoxItem.defaultProps = {
  order: 0,
  flexGrow: 0,
  flexShrink: 1,
  flexBasis: "auto",
  flex: "0 1 auto",
  alignSelf: "auto"
};

BoxItem.propTypes = {
  order: PropTypes.number,
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
  flexBasis: PropTypes.string,
  flex: PropTypes.string,
  alignSelf: PropTypes.oneOf([
    "auto",
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "stretch"
  ])
};

export default BoxItem;

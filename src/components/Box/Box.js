import React from "react";
import styled from "styled-components";

import PropTypes from "prop-types";

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
  justify-content: ${props => props.justifyContent};
  align-content: ${props => props.alignContent};
`;

class Box extends React.Component {
  render() {
    return <Flex {...this.props}>{this.props.children}</Flex>;
  }
}

Box.defaultProps = {
  direction: "row",
  wrap: "nowrap",
  justifyContent: "flex-start",
  alignItems: "stretch",
  alignContent: "stretch"
};

Box.propTypes = {
  direction: PropTypes.oneOf([
    "row",
    "row-reversed",
    "column",
    "column-reverse"
  ]),
  wrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
  justifyContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly"
  ]),
  alignItems: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "stretch",
    "baseline"
  ]),
  alignContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "stretch"
  ])
};

export default Box;

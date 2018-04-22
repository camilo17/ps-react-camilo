import React, { Component } from "react";
import styled from "styled-components";
import is from "styled-is";

const Divi = styled.hr`
  ${is("vertical")`
    
        transform: rotate(90deg);
        width: 80px;
    `};
`;

class Divider extends Component {
  render() {
    return <Divi vertical />;
  }
}

export default Divider;

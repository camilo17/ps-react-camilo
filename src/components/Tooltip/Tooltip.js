import React from "react";
import styled from "styled-components";

const Tool = styled.div``;

function Tooltip({ show, anchor, text, children }) {
  console.log(anchor);
  return <Tool>{children}</Tool>;
}

export default Tooltip;

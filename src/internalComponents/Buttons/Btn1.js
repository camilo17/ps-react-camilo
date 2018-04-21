import BaseBtn from "./BaseBtn";
import { darken } from "polished";
import is from "styled-is";

const Btn1 = BaseBtn.extend`
  color: white;
  background: ${props => (props.disabled ? "grey" : props.color)};
  font-weight: 100;
  box-shadow: inset 0 1px 0 0 #72b9eb, 0 1px 2px 0 #b3b3b3;

  svg {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  rect {
    fill: none;
    stroke: ${props => (props.disabled ? "transparent" : props.strokeColor)};
    stroke-width: 5;
    stroke-dasharray: 422, 0;
  }

  &:active {
  }

  &:hover {
    background: ${props =>
      props.disabled ? "grey" : darken(0.1, props.color)};
    font-weight: 500;

    rect {
      stroke-width: 7;
      stroke-dasharray: 15, 310;
      stroke-dashoffset: 56;
      transition: all 2.35s cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  ${is("disabled")`
    cursor: auto;
    opacity: .5;
    
  `};
`;

export default Btn1;

import BaseBtn from "./BaseBtn";

const Btn2 = BaseBtn.extend`
  background: red;
  border: 1px solid;
  overflow: hidden;
  position: relative;

  span {
    z-index: 20;
  }

  &:after {
    background: blue;
    content: "";
    height: 100%;
    left: -75px;
    opacity: 0.2;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: -10;
  }

  &:hover:after {
    left: 120%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }
`;

export default Btn2;

import styled from "styled-components";

const BaseBtn = styled.button`
  box-sizing: border-box;
  transition-property: all;
  transition-duration: 0.6s;
  transition-timing-function: ease;
  cursor: pointer;

  font-size: 16px;
  font-weight: 400;
  line-height: 40px;
  max-width: 160px;
  position: relative;
  text-align: center;
  text-decoration: none;
  border: none;
  vertical-align: middle;

  width: 100%;
`;

export default BaseBtn;

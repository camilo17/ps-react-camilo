import styled from "styled-components";

const BaseBtn = styled.a`
  cursor: pointer;
  display: block;
  font-size: 16px;
  font-weight: 400;
  line-height: 45px;
  margin: 0 auto 2em;
  max-width: 160px;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  width: 100%;
  &:hover {
    text-decoration: none;
  }
`;

export default BaseBtn;

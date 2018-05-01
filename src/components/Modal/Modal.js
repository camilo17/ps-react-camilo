import React from "react";
import styled, { css } from "styled-components";
import is from "styled-is";

// TODO ADD TRIGGER PROP TO RENDER
const ModalExample = styled.div`
  display: none; /* Hidden by default */
  justify-content: center;
  align-items: center;
  position: fixed; /* Stay in place */
  z-index: 25; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

  ${is("open")`display: flex`};
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  position: absolute;
`;

class Modal extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: !this.state.open });
    console.log(this.state.open);
  };

  componentDidMount() {
    // window.addEventListener("click", e => {
    //   console.log(e.target);
    // });
  }
  render() {
    return (
      <div>
        <ModalExample open={this.state.open}>
          <ModalContent>Hello There</ModalContent>
        </ModalExample>

        <button onClick={this.handleOpen}>Show Modal!</button>
      </div>
    );
  }
}

export default Modal;

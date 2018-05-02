import React from "react";
import styled from "styled-components";
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

class ModalContainer extends React.Component {
  handleCloseClick = e => {
    e.preventDefault();
    if (e.target.id !== "content") {
      this.props.handleClose();
    }
  };

  componentDidMount() {
    document.addEventListener("click", this.handleCloseClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleCloseClick);
  }
  render() {
    return (
      <ModalExample open={this.props.open}>{this.props.children}</ModalExample>
    );
  }
}

class Modal extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const triggerChild = React.Children.map(this.props.trigger, child => {
      return React.cloneElement(child, {
        onClick: this.handleOpen
      });
    });
    return (
      <div>
        {this.state.open && (
          <ModalContainer open={this.state.open} handleClose={this.handleClose}>
            <ModalContent id="content">Hello There</ModalContent>
          </ModalContainer>
        )}

        {triggerChild}
      </div>
    );
  }
}

export default Modal;

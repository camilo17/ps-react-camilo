import React from "react";
import Modal from "react-ultra-instinct/Modal";
import Divider from "react-ultra-instinct/Divider";

export default class ModalExample extends React.Component {
  state = {
    modalOpen: false
  };

  handleOpenModal = () => {
    this.setState(() => ({
      modalOpen: true
    }));
  };

  handleCloseModal = () => {
    this.setState(() => ({
      modalOpen: false
    }));
  };
  render() {
    return (
      <Modal
        open={this.state.modalOpen}
        handleOpenModal={this.handleOpenModal}
        trigger={<button>Show Modal</button>}
        handleCloseModal={this.handleCloseModal}
      >
        <h1>Hello</h1>
        <Divider />
        <h2>Hey yall</h2>
      </Modal>
    );
  }
}

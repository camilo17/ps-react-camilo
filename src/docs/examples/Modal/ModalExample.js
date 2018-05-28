import React from "react";
import Modal from "react-ultra-instinct/Modal";

export default () => {
  return (
    <Modal trigger={<button>Show Modal</button>}>
      <Modal.Header>Title</Modal.Header>
    </Modal>
  );
};

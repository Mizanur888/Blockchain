import React, { Component } from "react";

import { Modal } from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

class Debtor extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  // checkforItem = item => {
  //   return {
  //     backgroundColor: item.state === "pending" ? "#ccc" : "#00ff00"
  //   };
  // };

  render() {
    return (
      <div>
        <h1> Iam devtor</h1>
      </div>
    );
  }
}

export default Debtor;

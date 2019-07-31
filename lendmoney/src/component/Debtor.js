import React, { Component } from "react";
class Debtor extends Component {
  checkforItem = item => {
    return {
      backgroundColor: item.state === "pending" ? "#ccc" : "#00ff00"
    };
  };

  render() {
    return <h1> Debtor</h1>;
  }
}

export default Debtor;

import React, { Component } from "react";
class Loaner extends Component {
  checkforItem = item => {
    return {
      backgroundColor: item.state === "pending" ? "#ccc" : "#00ff00"
    };
    // if (item.state == "pending") {
    //   return {
    //     backgroundColor: "#ccc"
    //   };
    // } else {
    //   return {
    //     backgroundColor: "#00ff00"
    //   };
    // }
  };

  render() {
    let loanMoney = this.props.loaner.map(loan => (
      <tr style={this.checkforItem(loan)}>
        <th scope="row">{loan.requestID}</th>
        <td>{loan.senderAddress}</td>
        <td>{loan.amount}</td>
        <td>{loan.interestRate}</td>
        <td>{loan.state}</td>
        <td style={{ display: "white-space: nowrap", margin: "10px" }}>
          <button
            onClick={this.props.getApproved.bind(this, loan.requestID)}
            className="btn btn-success btn-xs"
          >
            Appprove
          </button>
          <button
            onClick={this.props.getRegect.bind(this, loan.requestID)}
            className="btn btn-warning btn-xs"
          >
            Regect
          </button>
        </td>
      </tr>
    ));
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Request ID</th>
            <th scope="col">Sender Address</th>
            <th scope="col">Amount</th>
            <th scope="col">Interest Rate</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{loanMoney}</tbody>
      </table>
    );
  }
}

export default Loaner;

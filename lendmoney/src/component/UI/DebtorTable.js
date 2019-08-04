import React, { Component } from "react";

export class DebtorTable extends Component {
  constructor(props) {
    super(props);
    this.state = { isEmptyState: true, isEmptyState2: true };
  }
  checkforItem = item => {
    return {
      backgroundColor: item.state === "pending" ? "#ccc" : "#00ff00"
    };
  };
  render() {
    let loanMoney = this.props.loaner.map(loan => (
      <tr style={this.checkforItem(loan)}>
        <th scope="row">{loan.LoanerAddress}</th>
        <td>{loan.DebtorAddress}</td>
        <td>{loan.Amount}</td>
        <td>{loan.InterestRate}</td>
        <td>{loan.Condition}</td>
        <td>{loan.Index}</td>
        <td style={{ display: "white-space: nowrap", margin: "10px" }}>
          {this.state.isEmptyState && (
            <button
              onClick={this.props.PayLoan.bind(
                this,
                loan.requestID,
                this.state.isEmptyState
              )}
              className="btn btn-success btn-xs"
            >
              Pay Loan
            </button>
          )}
        </td>
        <td style={{ display: "white-space: nowrap", margin: "10px" }}>
          {this.state.isEmptyState && (
            <button
              onClick={this.props.PayLoan.bind(
                this,
                loan.requestID,
                this.state.isEmptyState
              )}
              className="btn btn-success btn-xs"
            >
              Update Info
            </button>
          )}
        </td>
        <td style={{ display: "white-space: nowrap", margin: "10px" }}>
          {this.state.isEmptyState && (
            <button
              onClick={this.props.PayLoan.bind(
                this,
                loan.requestID,
                this.state.isEmptyState
              )}
              className="btn btn-success btn-xs"
            >
              Request End 
            </button>
          )}
        </td>
      </tr>
    ));
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Request ID</th>
              <th scope="col">Sender Address</th>
              <th scope="col">Amount</th>
              <th scope="col">Interest Rate</th>
              <th scope="col">Status</th>
              <th scope="col">Index</th>
              <th scope="col">Action</th>              
            </tr>
          </thead>
          <tbody>{loanMoney}</tbody>
        </table>
      </div>
    );
  }
}

export default DebtorTable;

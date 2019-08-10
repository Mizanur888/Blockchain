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
    let loanMoney = this.props.tableContents.map(loan => (
      <tr style={this.checkforItem(loan)}>
        <th scope="row">{loan.loaner}</th>
        <td>{loan.debtor}</td>
        <td>{loan.amount}</td>
        <td>{loan.interest}</td>
        <td>{loan.condition}</td>
        <td>{loan.dueDate}</td>
        <td>{loan.index}</td>
        <td style={{ display: "white-space: nowrap", margin: "10px" }}>
          <button
            onClick={this.props.payLoan.bind(this, loan.index)}
            className="btn btn-success btn-xs"
          >
            Pay Loan
          </button>
        </td>
        <td style={{ display: "white-space: nowrap", margin: "10px" }}>
          {this.state.isEmptyState && (
            <button
              /////this function isn't working, i think the function is written properly
              /// but this ui element will not call it
              onClick={this.props.getAllLoans.bind(this, loan.index)}
              className="btn btn-success btn-xs"
            >
              Update Info
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
              <th scope="col">Loaner Address</th>
              <th scope="col">Debtor Address</th>
              <th scope="col">Amount</th>
              <th scope="col">Interest Rate</th>
              <th scope="col">Status</th>
              <th scope="col">Due Date</th>
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

import React, { Component } from "react";
import { button } from "./Button/button";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
class Loaner extends Component {
  constructor(props) {
    super(props);

    this.state = { isEmptyState: true, isEmptyState2: true };
    this.privateKey = this.props.history.location.state.privateKey;
    console.log("Private Key: " + this.privateKey);
  }
  componentDidMount() {
    console.log(this.props.history.location.state.privateKey);
  }

  checkforItem = item => {
    return {
      backgroundColor: item.state === "pending" ? "#ccc" : "#00ff00"
    };
  };

  signout = e => {
    this.props.history.push({
      pathname: "/"
    });
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
          {this.state.isEmptyState && (
            <button
              onClick={this.props.getApproved.bind(
                this,
                loan.requestID,
                this.state.isEmptyState
              )}
              className="btn btn-success btn-xs"
            >
              Appprove
            </button>
          )}
          {this.state.isEmptyState2 && (
            <button
              onClick={this.props.getRegect.bind(
                this,
                loan.requestID,
                this.state.isEmptyState2
              )}
              className="btn btn-warning btn-xs"
            >
              Regect
            </button>
          )}
        </td>
      </tr>
    ));
    return (
      <div className="container">
        <div
          style={{
            color: "black",
            float: "right",
            width: "100px",
            margin: "10px"
          }}
        >
          <button
            onClick={this.signout}
            type="button"
            className="btn btn-primary mb-2"
          >
            Signout
          </button>
        </div>
        <hr />
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
      </div>
    );
  }
}

export default withRouter(Loaner);

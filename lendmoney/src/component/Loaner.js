import React, { Component } from "react";
import DebtorTable from "./UI/LoanerTable";

import LandMoney from "../Model/LandMoney";
import { lendContract, account0 } from "../config";
import Web3 from "web3";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";

class Loaner extends Component {
  constructor(props) {
    super(props);

    this.privateKey = this.props.history.location.state.privateKey;
    console.log("Private Key: " + this.privateKey);
    console.log("Condiation: " + this.props.history.location.Condition);

    this.state = {
      Index: -1,
      tableContents: [
        {
          amount: "1",
          loaner: "Number",
          debtor: "sds",
          index: "0",
          interest: "5",
          dueDate: "1",
          condition: "pending",
          showApprove: true,
          showRegect: true
        },
        {
          amount: "1",
          loaner: "eijdie",
          debtor: "sds",
          index: "1",
          interest: "5",
          dueDate: "1",
          condition: "pending",
          showApprove: true,
          showRegect: true
        }
      ]
    };
    // this.testLoan = this.testLoan(this);
  }

  componentDidMount() {
    console.log(this.props.history.location.state.privateKey);
    console.log(this.props.history.location.Condition);
  }

  signout = e => {
    this.props.history.push({
      pathname: "/"
    });
  };

  checkforItem = item => {
    return {
      backgroundColor: item.state === "pending" ? "#ccc" : "#00ff00"
    };
  };
  payLoan = id => {
    loaner: this.state.tableContents.map(loan => {
      if (loan.requestID === id) {
        loan.condition = "Approved";
      }
      return loan;
    });
  };
  getRegect = id => {
    alert("hello");
    this.setState({
      tableContents: this.state.tableContents.map(loan => {
        if (loan.loaner === id) {
          loan.condition = "pending";
          loan.showApprove = false;

          this.forceUpdate();
        }
        return loan;
      })
    });
  };

  getApproved = id => {
    alert("hello");
    this.setState({
      tableContents: this.state.tableContents.map(loan => {
        if (loan.loaner === id) {
          loan.condition = "Approved";
          loan.showRegect = false;
          this.forceUpdate();
        }
        return loan;
      })
    });
  };
  endLoan() {
    let app = this;

    lendContract.methods
      .endLoan(0)
      .send()
      .then(leand => {
        app.setState({ tableContents: [...this.state.tableContents.pop] });
      });
  }

  pushAddmoneyToContract = contract => {};
  testLoan = () => {
    alert("testLoan called");
    lendContract.methods
      .getAllLoans()
      .call({ from: account0, gas: 3000000 })
      .then(loan => {
        for (var i = 0; i < 10; i++) {
          //if length is greater than tot contracts do not add
          //if(loan.length !> )
          if (loan[i] != null) {
            var e = this.state.tableContents.concat([
              {
                loaner: loan[i].loaner,
                debtor: loan[i].debtor,
                amount: parseInt(loan[i].amount, 16),
                interest: parseInt(loan[i].interest, 16),
                dueDate: parseInt(loan[i].dueDate, 16),
                index: parseInt(loan[i].index),
                condition: parseInt(loan[i].condition, 16)
              }
            ]);

            this.setState({ tableContents: e });
          }
        }
        this.forceUpdate();

        // this.setState({ Index: parseInt(test.interest, 16) });
      });
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    let loanMoney = this.state.tableContents.map(loan => (
      <tr style={this.checkforItem(loan)}>
        <th scope="row">{loan.loaner}</th>
        <td>{loan.debtor}</td>
        <td>{loan.amount}</td>
        <td>{loan.interest}</td>
        <td>{loan.condition}</td>
        <td>{loan.index}</td>
        <td style={{ display: "white-space: nowrap", margin: "10px" }}>
          {loan.showApprove && (
            <button
              onClick={this.getApproved.bind(
                this,
                loan.loaner,
                this.state.isEmptyState
              )}
              className="btn btn-success btn-xs"
            >
              Appprove
            </button>
          )}
          {loan.showRegect && (
            <button
              onClick={this.getRegect.bind(
                this,
                loan.loaner,
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
        <button
          style={{ textAlign: "center", width: "300px", margin: "10px" }}
          onClick={this.testLoan}
          type="button"
          className="btn btn-info mb-2"
        >
          Update Table
        </button>

        <div
          style={{
            color: "black",
            float: "right",
            width: "0px",
            margin: "10px"
          }}
        >
          <button
            onClick={this.signout}
            type="button"
            className="btn btn-warning mb-2"
          >
            Signout
          </button>
        </div>

        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Loaner Address</th>
                <th scope="col">Debtor Address</th>
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
      </div>
    );
  }
}
export default Loaner;

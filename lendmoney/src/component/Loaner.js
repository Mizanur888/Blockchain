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
      ShowTable: true,
      ShowAddLand: false,
      Index: -1,
      loaner: [
        {
          LoanerAddress: "a309cf",
          DebtorAddress: "ar29292#4112erc",
          Amount: "5ETH",
          InterestRate: "5%",
          DueDate: "23-2-19",
          Condition: "pending",
          showRegect: true,
          showApprove: true,
          index: -1
        },
        {
          LoanerAddress: "a309cfe",
          DebtorAddress: "ar29292#4112erc",
          Amount: "5ETH",
          InterestRate: "5%",
          DueDate: "23-2-19",
          Condition: "pending",
          showRegect: true,
          showApprove: true,
          index: -1
        }
      ]
    };
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
    loaner: this.state.loaner.map(loan => {
      if (loan.requestID === id) {
        loan.Condition = "Approved";
      }
      return loan;
    });
  };
  getRegect = id => {
    alert("hello");
    this.setState({
      loaner: this.state.loaner.map(loan => {
        if (loan.LoanerAddress === id) {
          loan.Condition = "pending";
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
      loaner: this.state.loaner.map(loan => {
        if (loan.LoanerAddress === id) {
          loan.Condition = "Approved";
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
        app.setState({ loaner: [...this.state.loaner.pop] });
      });
  }

  pushAddmoneyToContract = contract => {};

  addLandMoney = () => {
    alert("hello world" + this.state.Index);
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    let loanMoney = this.state.loaner.map(loan => (
      <tr style={this.checkforItem(loan)}>
        <th scope="row">{loan.LoanerAddress}</th>
        <td>{loan.DebtorAddress}</td>
        <td>{loan.Amount}</td>
        <td>{loan.InterestRate}</td>
        <td>{loan.Condition}</td>
        <td>{loan.index}</td>
        <td style={{ display: "white-space: nowrap", margin: "10px" }}>
          {loan.showApprove && (
            <button
              onClick={this.getApproved.bind(
                this,
                loan.LoanerAddress,
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
                loan.LoanerAddress,
                this.state.isEmptyState2
              )}
              className="btn btn-warning btn-xs"
            >
              Regect
            </button>
          )}
        </td>
        <td style={{ display: "white-space: nowrap", margin: "10px" }}>
          {this.state.isEmptyState && (
            <button
              /////this function isn't working, i think the function is written properly
              /// but this ui element will not call it
              onClick={this.checkLoan}
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
        <button
          style={{ textAlign: "center", width: "300px", margin: "10px" }}
          onClick={this.addLandMoney}
          type="button"
          className="btn btn-info mb-2"
        >
          Update Table
        </button>
        <div>
          <input
            type="Index"
            name="Index"
            id="Index"
            placeholder="Index"
            value={this.state.Index}
            onChange={this.onChange}
          />
        </div>
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

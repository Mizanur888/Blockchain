import React, { Component } from "react";
import LandMoney from "../../Model/LandMoney";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
export class AddLandMoney extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoanerAddress: "",
      DebtorAddress: "",
      Amount: "",
      InterestRate: "",
      DueDate: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();

    if (
      this.state.LoanerAddress !== "" &&
      this.state.DebtorAddress !== "" &&
      this.state.Amount !== ""
    ) {
      this.props.addLandMoney(
        this.state.LoanerAddress,
        this.state.DebtorAddress,
        this.state.Amount,
        this.state.InterestRate,
        this.state.DueDate
      );
    }
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div className="container">
        <form
          onSubmit={this.onSubmit}
          style={{ margin: "10px", padding: "10px" }}
        >
          <div className="form-group">
            <label htmlFor="LoanerAddress">LoanerAddress</label>
            <input
              type="LoanerAddress"
              name="LoanerAddress"
              className="form-control"
              id="LoanerAddress"
              placeholder="LoanerAddress"
              value={this.state.LoanerAddress}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="privateKey">DebtorAddress</label>
            <input
              type="DebtorAddress"
              name="DebtorAddress"
              className="form-control"
              id="DebtorAddress"
              placeholder="DebtorAddress"
              value={this.state.DebtorAddress}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="privateKey">Amount</label>
            <input
              type="Amount"
              name="Amount"
              className="form-control"
              id="Amount"
              placeholder="Amount"
              value={this.state.Amount}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="privateKey">InterestRate</label>
            <input
              type="InterestRate"
              name="InterestRate"
              className="form-control"
              id="InterestRate"
              placeholder="InterestRate"
              value={this.state.InterestRate}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="privateKey">DueDate</label>
            <input
              type="DueDate"
              name="DueDate"
              className="form-control"
              id="DueDate"
              placeholder="DueDate"
              value={this.state.DueDate}
              onChange={this.onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(AddLandMoney);

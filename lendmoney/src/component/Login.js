import React, { Component } from "react";
import Loaner from "./Loaner";
import App from "../App";
import Debtor from "./Debtor";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";

class Login extends Component {
  state = {
    isLoginSuccess: false,
    address: "",
    privateKey: "",
    page: ""
  };

  onSubmit = e => {
    e.preventDefault();

    if (
      this.state.address !== "" &&
      this.state.privateKey !== "" &&
      this.state.page !== ""
    ) {
      this.setState({ isLoginSuccess: true });
      alert(this.state.page);
    }

    //this.setState({ isLoginSuccess: false, address: "", privateKey: "" });
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    if (this.state.isLoginSuccess) {
      if (this.state.page === "Loaner") {
        this.props.history.push({
          pathname: "/Loaner",
          state: {
            privateKey: this.state.privateKey
          }
        });
      } else {
        this.props.history.push({
          pathname: "/Debtor",
          state: {
            privateKey: this.state.privateKey
          }
        });
      }
    }
    return (
      <div className="container">
        <form
          onSubmit={this.onSubmit}
          style={{ margin: "10px", padding: "10px" }}
        >
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="address"
              name="address"
              className="form-control"
              id="address"
              placeholder="address"
              value={this.state.address}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="privateKey">privateKey</label>
            <input
              type="privateKey"
              name="privateKey"
              className="form-control"
              id="privateKey"
              placeholder="privateKey"
              value={this.state.privateKey}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="page">state</label>
            <select
              className="form-control"
              id="page"
              name="page"
              value={this.state.page}
              onChange={this.onChange}
            >
              <option />
              <option>Debtor</option>
              <option>Loaner</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);

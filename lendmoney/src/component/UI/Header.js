import React, { Component } from "react";
import Loaner from "../Login";
import { BrowserRouter, Route, Link } from "react-router-dom";
const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "25px"
};
const LinkStyle = {
  color: "#fff",
  textDecoration: "none"
};
export default class Header extends Component {
  state = {
    isLoginSuccess: false
  };
  singnout = e => {
    e.preventDefault();
    this.props.history.push({
      pathname: "/",
      state: {
        privateKey: this.state.privateKey
      }
    });
  };
  render() {
    return (
      <header style={headerStyle}>
        <h1> Land Money App</h1>
        <Link style={LinkStyle} to="/About">
          About
        </Link>
      </header>
    );
  }
}

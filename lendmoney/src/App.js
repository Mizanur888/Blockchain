import React, { Component } from "react";
import "./App.css";
import Login from "./component/Login";
import Loaner from "./component/Loaner";
import Header from "./component/UI/Header";
import Debtor from "./component/Debtor";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    loaner: [
      {
        requestID: "a309cf",
        senderAddress: "ar29292#4112erc",
        amount: "5BTC",
        interestRate: "5%",
        state: "pending"
      },
      {
        requestID: "b309cf",
        senderAddress: "br29292#4112erc",
        amount: "5BTC",
        interestRate: "5%",
        state: "pending"
      },
      {
        requestID: "ce309cf",
        senderAddress: "er29292#4112erc",
        amount: "5BTC",
        interestRate: "5%",
        state: "Approved"
      },
      {
        requestID: "de309cf",
        senderAddress: "er29292#4112erc",
        amount: "5BTC",
        interestRate: "5%",
        state: "pending"
      }
    ]
  };

  getRegect = id => {
    this.setState({
      loaner: this.state.loaner.map(loan => {
        if (loan.requestID === id) {
          loan.state = "pending";
        }
        return loan;
      })
    });
  };
  getApproved = id => {
    this.setState({
      loaner: this.state.loaner.map(loan => {
        if (loan.requestID === id) {
          loan.state = "Approved";
        }
        return loan;
      })
    });
  };
  render() {
    console.log(this.state.loaner);

    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/App"
            render={props => (
              <React.Fragment>
                <Loaner
                  loaner={this.state.loaner}
                  getApproved={this.getApproved}
                  getRegect={this.getRegect}
                />
              </React.Fragment>
            )}
          />

          <Route exact path="/" component={Login} />
          <Route exact path="/Debtor" component={Debtor} />
        </div>
      </Router>
    );
  }
}

export default App;

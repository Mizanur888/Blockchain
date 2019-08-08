import React, { Component } from "react";
import "./App.css";
import Login from "./component/Login";
import Loaner from "./component/Loaner";
import Header from "./component/UI/Header";
import Debtor from "./component/Debtor";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { lendContract, account0 } from "./config";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaner: [
        {
          requestID: "b309cf",
          senderAddress: "br29292#4112erc",
          amount: "5BTC",
          interestRate: "5%",
          state: "pending"
        },
        {
          requestID: "ce309cf",
          senderAddress: "",
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
    }; //state
  } //constructor

  startLoan(loaner, debtor, amount, interest, dueDate, condition) {
    let app = this;
  }

  render() {
    try {
      console.log(this.state.loaner);
    } catch (error) {
      return (
        <Router>
          <div className="App">
            <Header />
            <h1>No loans found</h1>
            <Route exact path="/" component={Login} />
            <Route exact path="/Debtor" component={Debtor} />
          </div>
        </Router>
      );
    }

    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/App" render={props => <React.Fragment />} />

          <Route exact path="/" component={Login} />
          <Route exact path="/Debtor" component={Debtor} />
          <Route exact path="/Loaner" component={Loaner} />
        </div>
      </Router>
    );
  }
}

export default App;

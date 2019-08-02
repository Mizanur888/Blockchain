import React, { Component } from "react";
import DebtorTable from "./UI/DebtorTable";
import AddLandMoney from "./UI/AddLandMoney";
import LandMoney from "../Model/LandMoney";
import { lendContract, account0 } from "./config";
class Debtor extends Component {
  constructor(props) {
    super(props);

    this.privateKey = this.props.history.location.state.privateKey;
    console.log("Private Key: " + this.privateKey);
    console.log("Condiation: " + this.props.history.location.Condition);
    this.state = {
      ShowTable: true,
      ShowAddLand: false,
      loaner: [
        {
          LoanerAddress: "a309cf",
          DebtorAddress: "ar29292#4112erc",
          Amount: "5BTC",
          InterestRate: "5%",
          DueDate: "23-2-19",
          Condition: "pending"
        },
        {
          LoanerAddress: "a309cf",
          DebtorAddress: "ar29292#4112erc",
          Amount: "5BTC",
          InterestRate: "5%",
          DueDate: "23-2-19",
          Condition: "pending"
        }
      ]
    };
    this.AddLandMoney = this.AddLandMoney.bind(this);
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
  AddLandMoney = e => {
    this.setState(oldState => ({
      ShowAddLand: !oldState.ShowAddLand,
      ShowTable: !oldState.ShowTable
    }));
    console.log("ShowTable" + this.state.ShowTable + this.state.ShowAddLand);
  };

  PayLoan = id => {
    this.setState({
      loaner: this.state.loaner.map(loan => {
        if (loan.requestID === id) {
          loan.state = "Approved";
        }
        return loan;
      })
    });
  };

  pushAddmoneyToContract=(contract)=>{
    let app = this;
    const condition ='not yest setup';
    const loanerprivkey = '';
    const debtorprivkey = 'static keys';
    lendContract.methods.startLoan(contract.LoanerAddress, contract.DebtorAddress, contract.Amount, contract.InterestRate, 
      contract.DueDate,condition,loanerprivkey,debtorprivkey)
      .call()
      .then((leand)=>{
        app.setState({loaner:[...this.state.loaner,contract]})
      });
  }
  addLandMoney = (
    LoanerAddress,
    DebtorAddress,
    Amount,
    InterestRate,
    DueDate
  ) => {
    const landMoney = {
      LoanerAddress,
      DebtorAddress,
      Amount,
      InterestRate,
      DueDate,
      Condition:'Pending'
    };
    this.pushAddmoneyToContract(landMoney);
    this.setState({ loaner: [...this.state.loaner, landMoney] });
    this.setState(oldState => ({
      ShowAddLand: !oldState.ShowAddLand,
      ShowTable: !oldState.ShowTable
    }));
  };
  render() {
    return (
      <div className="container">
        <button
          style={{ textAlign: "center", width: "300px", margin: "10px" }}
          onClick={this.AddLandMoney}
          type="button"
          className="btn btn-info mb-1"
        >
          AddLend
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
          {this.state.ShowTable && (
            <DebtorTable loaner={this.state.loaner} PayLoan={this.PayLoan} />
          )}
        </div>
        <div>
          {this.state.ShowAddLand && (
            <AddLandMoney addLandMoney={this.addLandMoney} />
          )}
        </div>
      </div>
    );
  }
}

export default Debtor;

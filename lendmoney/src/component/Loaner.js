import React, { Component } from "react";
import DebtorTable from "./UI/DebtorTable";
import AddLandMoney from "./UI/AddLandMoney";
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
        loaner: [
          {
            LoanerAddress: "a309cf",
            DebtorAddress: "ar29292#4112erc",
            Amount: "5ETH",
            InterestRate: "5%",
            DueDate: "23-2-19",
            Condition: "pending"
          },
          {
            LoanerAddress: "a309cf",
            DebtorAddress: "ar29292#4112erc",
            Amount: "5ETH",
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
      const condition =1;
      const loanerprivkey = '0xcc1647f982d0ca3d687ebeac4ffd6df2b8f42091c331acef8e7dd3784db61995';
      const debtorprivkey = '0xf07406a6a565d7f6df9a0df7121b0e1b26138e03fe30364dc59d6cdcd527e5fb';
      var loaner = "0x26c74ded3a717bf2a549de43213db180b7a57af0";
      var debtor = "0xa734d865d79871bec95acf86471b87921be81d66";
  
      // lendContract.methods.startLoan(contract.LoanerAddress,
      //    contract.DebtorAddress, contract.Amount, contract.InterestRate, 
      //   contract.DueDate,condition,loanerprivkey,debtorprivkey)
      //   .call()
      //   .then((leand)=>{
      //     app.setState({loaner:[...this.state.loaner,contract]})
      //   });
      
      var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
      let account1 = '0x74267bc109b6938192b2dcdd2ad69b23a8f1e7f3'
          
      lendContract.methods.startLoan(this.state.LoanerAddress,
        this.state.DebtorAddress, 12, 5, 1, condition,loanerprivkey,debtorprivkey)
       .send()
       .then((leand)=>{
         app.setState({loaner:[...this.state.loaner,contract]})       
       });
  
       lendContract.methods.pleaseWork().call().then((leand)=>{
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
    }
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
export default withRouter(Loaner);

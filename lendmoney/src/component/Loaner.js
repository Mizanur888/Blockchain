import React, { Component } from "react";
import DebtorTable from "./UI/LoanerTable";
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

    endLoan(){
      let app = this

      lendContract.methods.endLoan(0)
       .send()
       .then((leand)=>{
         app.setState({loaner:[...this.state.loaner.pop]})       
       });
    }
  
    pushAddmoneyToContract=(contract)=>{
      
    //   let app = this;
    //   const condition =1;
    //   ///how to get values from the form???
    //   const loanerprivkey =  "0x26c74ded3a717bf2a549de43213db180b7a57af0";
    //   const debtorprivkey =  "0x26c74ded3a717bf2a549de43213db180b7a57af0";
  
    //   var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    //   let account1 = "0x74267bc109b6938192b2dcdd2ad69b23a8f1e7f3"
    //   web3.eth.defaultAccount = web3.eth.accounts[0];
    //   let s = String.toString(0)
    //   //this method works and has error checking but react doesn't like how im adding objects to the state
    //   var loan = lendContract.methods.checkLoan(s).send({from: account0, gas:3000000});
    //  var res = lendContract.methods.startLoan(contract.LoanerAddress,
    //   contract.DebtorAddress, contract.Amount, contract.InterestRate, contract.DueDate, condition,loanerprivkey,debtorprivkey)
    //    .send({from: contract.LoanerAddress, gas:3000000, value: web3.utils.toWei(contract.Amount)}, (error, transactionHash) => {
    //       if(!error){        
    //         contract.Condition = "Processed"
  
    //           // lendContract.methods.getNumLoans().call({from: contract.LoanerAddress, gas:3000000}, (error, hash)=>{
    //           //   if(!error){
  
                  
    //               this.setState({ loaner: [...this.state.loaner, contract] });
  
    //               this.setState(oldState => ({
    //                 ShowAddLand: !oldState.ShowAddLand,
    //                 ShowTable: !oldState.ShowTable
    //                 }));
    //             // }
    //         // });
    //    }
    //   });
  
  
       
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

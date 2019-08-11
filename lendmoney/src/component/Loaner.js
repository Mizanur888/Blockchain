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
      tableContents: [
       
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
    tableContents: this.state.tableContents.map(loan => {
      if (loan.requestID === id) {
        loan.Condition = "Approved";
      }
      return loan;
    });
  };
  getRegect = id => {
    alert("hello");
    this.setState({
      tableContents: this.state.tableContents.map(loan => {
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
    var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

    for(var i = 0;i<this.state.tableContents.length;i++){
      var index = this.state.tableContents[id].index;
      if(i === index){        
        var res = lendContract.methods.acceptLoan(index).send({from:this.state.tableContents[id].loaner, value:  web3.utils.toWei(this.state.tableContents[id].amount.toString(), (error, hash) => {
          if(!error){
            this.state.tableContents[id].condition = "ACCEPTED";
            this.forceUpdate();  
          }
        })
      })

    }
  }
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
    this.forceUpdate();
    
    lendContract.methods
      .getAllLoans()
      .call({ from: account0, gas: 3000000 })
      .then(loan => {
        
        lendContract.methods.getNumLoans().call({from:account0, gas:3000000}).then(nums=>{
        if(this.state.tableContents.length < nums){
        for(var i =0; i < nums; i++){
          
          if(loan[i]!=null){
          if(loan[i].condition == "1"){
            loan[i].condition = "Pending"
          }
          if(loan[i].condition == "2"){
              loan[i].condition = "Accepted"
          }
          if(loan[i].condition == "3"){
            loan[i].condition = "Paid"
          }
            var e = this.state.tableContents.concat([
              {
                loaner: loan[i].loaner,
                debtor: loan[i].debtor,
                amount: parseInt(loan[i].amount, 16),
                interest: parseInt(loan[i].interest, 16),
                dueDate: parseInt(loan[i].dueDate, 16),
                condition: loan[i].condition.toString(),
                index: parseInt(loan[i].index)                
              }
            ])

            this.setState({tableContents: e})
          }    
      
      }
    }
    });

      this.forceUpdate();
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
        <td>{loan.dueDate}</td>
        <td>{loan.index}</td>
        <td style={{ display: "white-space: nowrap", margin: "10px" }}>
          {(
            <button
              onClick={this.getApproved.bind(
                this,
                loan.index,
                this.state.isEmptyState
              )}
              className="btn btn-success btn-xs"
            >
              Appprove
            </button>
          )}
          {(
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
              onClick={this.testLoan.bind(this)}
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
          onClick={this.testLoan}
          type="button"
          className="btn btn-info mb-2"
        >
          Update Info
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
              <tr>
              <th scope="col">Loaner Address</th>
              <th scope="col">Debtor Address</th>
              <th scope="col">Amount</th>
              <th scope="col">Interest Rate</th>
              <th scope="col">Status</th>
              <th scope="col">Due Date</th>
              <th scope="col">Index</th>
              <th scope="col">Action</th>
  
            </tr>
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

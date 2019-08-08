import React, { Component } from "react";
import DebtorTable from "./UI/DebtorTable";
import AddLandMoney from "./UI/AddLandMoney";
import LandMoney from "../Model/LandMoney";
import { lendContract, account0 } from "../config";
import Web3 from "web3";
import Login from "./Login";

class Debtor extends Component {
  constructor(props) {
    super(props);
    this.count = 1;
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
          Condition: "pending",
          Index:-1
        },
        {
          LoanerAddress: "a309cf",
          DebtorAddress: "ar29292#4112erc",
          Amount: "5ETH",
          InterestRate: "5%",
          DueDate: "23-2-19",
          Condition: "pending",
          Index:-1
        }
      ],
      Index:0,
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

  EndLoan = id => { 
    //i'm pretty sure this works but i don't know how to get the input from the table 
    var s = String.toString(id)
    var loan = lendContract.methods.checkLoan(s).send({from: account0, gas:3000000});
    var res = lendContract.methods.EndLoan(id)
         .send({from: loan.LoanerAddress, gas:3000000, value: Web3.utils.toWei(loan.Amount)}, (error, transactionHash) => {
            if(!error){        
              loan.Condition = "Finished"
              loan.Index = 3
              this.setState({ loaner: [...this.state.loaner, loan] });
              this.setState(oldState => ({
                ShowAddLand: !oldState.ShowAddLand,
                ShowTable: !oldState.ShowTable
              }));
              
           
         }});
    
    if(res.message.contains("sender doesn't have enough funds to send tx.")){    
      return 0    
    }else{
      return res
    }
  }


  PayLoan = (id) => {
    let app = this;

    //we need to change the "from:" parameter  to the address in the table row , as well as the value 
    let s = String.toString(0)
    //var loan = lendContract.methods.checkLoan(s).send({from: account0, gas:3000000});

      var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
      for(var i = 0;i<this.state.loaner.length;i++){        
        var index = this.state.loaner[id].Index;
        if(i === index){
<<<<<<< HEAD
          alert(this.state.loaner[id].Index)
          var res = lendContract.methods.payLoan(this.state.loaner[id].Index, this.state.loaner[id].LoanerAddress)
          .send({from: this.state.loaner[id].DebtorAddress, gas:3000000, value: web3.utils.toWei(this.state.loaner[id].Amount)}, (error, transactionHash) => {            
            if(!error){                 
              this.state.loaner[id].Condition = "DONE";
=======
          
          var e = this.state.loaner[id].InterestRate + parseInt(this.state.loaner[id].Amount);
          
          var res = lendContract.methods.payLoan(this.state.loaner[id].Index)
          .send({from: this.state.loaner[id].DebtorAddress, gas:3000000, value: web3.utils.toWei(e)}, (error, transactionHash) => {            
            if(!error){
              if(parseInt(this.state.loaner[id].InterestRate) > 0){                 
              this.state.loaner[id].Condition = "PAID WITH INTEREST";
              this.forceUpdate();  
              }else{
              this.state.loaner[id].Condition = "PAID";
              this.forceUpdate();  
              }
             }else{
              this.state.loaner[id].Condition = "ERR";
>>>>>>> master
              this.forceUpdate();  
             }             
        });
        }
      }
      
}

  pushAddmoneyToContract=(contract)=>{
    let app = this;
    const condition =1;
    ///how to get values from the form???
    const loanerprivkey =  "0x26c74ded3a717bf2a549de43213db180b7a57af0";
    const debtorprivkey =  "0x26c74ded3a717bf2a549de43213db180b7a57af0";

    var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    let account1 = "0x74267bc109b6938192b2dcdd2ad69b23a8f1e7f3"
    web3.eth.defaultAccount = web3.eth.accounts[0];
    let s = String.toString(0)
    var success = 0;
    
    var loan = lendContract.methods.checkLoan(0).send({from: account0, gas:3000000});
   var res = lendContract.methods.startLoan(contract.LoanerAddress,
    contract.DebtorAddress, contract.Amount, contract.InterestRate, contract.DueDate, condition,loanerprivkey,debtorprivkey)
     .send({from: contract.LoanerAddress, gas:3000000, value: web3.utils.toWei(contract.Amount)}, (error, transactionHash) => {
        if(!error){   
          this.state.count++;
          
     }
    });


      contract.Condition = "Processed"
      contract.Index = this.state.count;
              

      this.count+=1;
      contract.Index = this.count;

      this.setState({ loaner: [...this.state.loaner, contract] });

      this.setState(oldState => ({
      ShowAddLand: !oldState.ShowAddLand,
      ShowTable: !oldState.ShowTable
      }));

      this.setState({Index:res});
      alert(this.state.Index);
      //this.state.loaner.index
  
      }

    checkLoan = (id) => {
 

      var s = String.toString(id)
      var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        for(var i = 0;i<this.state.loaner.length;i++){        
          var index = this.state.loaner[i].Index;
          if(i === index){
            alert(lendContract.methods.checkLoan(0).send({from: account0, gas:3000000}));
           return lendContract.methods.checkLoan(0).send({from: account0, gas:3000000});
          }
    }
  }

  getNumLoans(){
    return lendContract.methods.getNumLoans().call({from: account0, gas:3000000});
  }
  

  addLandMoney = (
    LoanerAddress,
    DebtorAddress,
    Amount,
    InterestRate,
    DueDate,
    Index,
    Condition
  ) => {
    const landMoney = {
      LoanerAddress,
      DebtorAddress,
      Amount,
      InterestRate,
      DueDate,
      Index,
      Condition
    };
    
    this.pushAddmoneyToContract(landMoney);
    
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
          AddLoan
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
            <DebtorTable loaner={this.state.loaner} payLoan={this.PayLoan} />
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

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
    console.log("Condiation: " + this.props.history.location.condition);
    this.testLoan();
    this.state = {
      ShowTable: true,
      ShowAddLand: false,
      tableContents: [
        // {
        //   amount: "1",
        //   loaner: "Number",
        //   debtor: "sds",
        //   index: "-1",
        //   interest: "5",
        //   dueDate: "1",
        //   condition: "1"
        // },
        // {
        //   amount: "1",
        //   loaner: "eijdie",
        //   debtor: "sds",
        //   index: "-1",
        //   interest: "5",
        //   dueDate: "1",
        //   condition: "1"
        // }
      ],
      Index: 0
    };

    this.AddLandMoney = this.AddLandMoney.bind(this);
    this.testLoan = this.testLoan.bind(this);
  }

  componentDidMount() {
    console.log(this.props.history.location.state.privateKey);
    console.log(this.props.history.location.condition);
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

    var s = String.toString(id);
    var loan = lendContract.methods
      .checkLoan(s)
      .send({ from: account0, gas: 3000000 });
    var res = lendContract.methods.EndLoan(id).send(
      {
        from: loan.loaner,
        gas: 3000000,
        value: Web3.utils.toWei(loan.Amount)
      },
      (error, transactionHash) => {
        if (!error) {
          loan.condition = "Finished";
          loan.index = 3;
          this.setState({ tableContents: [...this.state.tableContents, loan] });
          this.setState(oldState => ({
            ShowAddLand: !oldState.ShowAddLand,
            ShowTable: !oldState.ShowTable
          }));
        }
      }
    );

    if (res.message.contains("sender doesn't have enough funds to send tx.")) {
      return 0;
    } else {
      return res;
    }
  };

  PayLoan = id => {
    let app = this;

    //we need to change the "from:" parameter  to the address in the table row , as well as the value
    let s = String.toString(0);
    //var loan = lendContract.methods.checkLoan(s).send({from: account0, gas:3000000});

    var web3 = new Web3(
      new Web3.providers.HttpProvider("http://localhost:8545")
    );
    for (var i = 0; i < this.state.tableContents.length; i++) {
      var index = this.state.tableContents[id].index;
      if (i === index) {
        alert(this.state.tableContents[id].index);
        var res = lendContract.methods
          .payLoan(
            this.state.tableContents[id].index,
            this.state.tableContents[id].loaner
          )
          .send(
            {
              from: this.state.tableContents[id].debtor,
              gas: 3000000,
              value: web3.utils.toWei(
                this.state.tableContents[id].amount.toString()
              )
            },
            (error, transactionHash) => {
              if (!error) {
                this.state.tableContents[id].condition = "DONE";
                this.forceUpdate();
              }
            }
          );
      }
    }
  };

  pushAddmoneyToContract = contract => {
    // amount: "1",
    // loaner: "Number",
    // debtor: "sds",
    // index: "0",
    // interest: "5",
    // dueDate: "1",
    // condition: "1"
    let app = this;
    const condition = 1;
    ///how to get values from the form???
    const loanerprivkey = "0x26c74ded3a717bf2a549de43213db180b7a57af0";
    const debtorprivkey = "0x26c74ded3a717bf2a549de43213db180b7a57af0";

    var web3 = new Web3(
      new Web3.providers.HttpProvider("http://localhost:8545")
    );
    let account1 = "0x74267bc109b6938192b2dcdd2ad69b23a8f1e7f3";
    web3.eth.defaultAccount = web3.eth.accounts[0];
    let s = String.toString(0);
    var success = 0;

    // var loan = lendContract.methods.checkLoan(0).send({from: account0, gas:3000000});
    var res = lendContract.methods

      .startLoan(
        contract.loaner,
        contract.debtor,
        contract.amount,
        contract.interest,
        contract.dueDate,
        condition,
        loanerprivkey,
        debtorprivkey
      )
      .send(
        {
          from: contract.loaner,
          gas: 3000000,
          value: web3.utils.toWei(contract.amount)
        },
        (error, transactionHash) => {
          if (!error) {
            this.count++;
          }
        }
      );

    //contract.Index = this.count;
    contract.condition = "Processed";
    this.setState({ tableContents: [...this.state.tableContents, contract] });

    this.setState(oldState => ({
      ShowAddLand: !oldState.ShowAddLand,
      ShowTable: !oldState.ShowTable
    }));

    // this.setState({ Index: res });
    alert(this.state.Index);
    //this.state.loaner.index
  };

  getAllLoans = () => {
    alert("calling get All loans");
    lendContract.methods
      .getAllLoans()
      .call({ from: account0, gas: 3000000 })
      .then(loan => {
        this.setState({ loaner: [...this.state.tableContents, loan] });
        this.state.loaner.push(loan);
        this.forceUpdate();
      });
  };

  checkLoan = id => {
    var tmp;

    alert(
      lendContract.methods.getNumLoans.call({ from: account0, gas: 3000000 })
    );

    // var tmp = function async(){ var out = await lendContract.methods.getNumLoans.call({from: account0, gas:3000000});}

    return lendContract.methods
      .checkLoan(0)
      .send({ from: account0, gas: 3000000 });
  };

  getNumLoans() {
    var e = lendContract.methods
      .getNumLoans()
      .call({ from: account0, gas: 3000000 }, (error, res) => {
        alert(JSON.parse(e));
      });
    alert(e);
    return lendContract.methods
      .getNumLoans()
      .call({ from: account0, gas: 3000000 });
  }

  testLoan = () => {
    this.forceUpdate();

    lendContract.methods
      .getAllLoans()
      .call({ from: account0, gas: 3000000 })
      .then(loan => {
        lendContract.methods
          .getNumLoans()
          .call({ from: account0, gas: 3000000 })
          .then(nums => {
            if (this.state.tableContents.length < nums) {
              for (var i = 0; i < nums; i++) {
                if (loan[i] != null) {
                  if (loan[i].condition == "1") {
                    loan[i].condition = "Pending";
                    this.forceUpdate();
                  }
                  if (loan[i].condition == "2") {
                    loan[i].condition = "Accepted";
                    this.forceUpdate();
                  }
                  if (loan[i].condition == "3") {
                    loan[i].condition = "Paid";
                    this.forceUpdate();
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
                  ]);

                  this.setState({ tableContents: e });
                }
              }
            }
          });

        this.forceUpdate();
      });
  };

  addLandMoney = (loaner, debtor, amount, interest, dueDate) => {
    const landMoney = {
      loaner,
      debtor,
      amount,
      interest,
      dueDate
    };

    alert(loaner + debtor + amount + interest + dueDate);
    this.pushAddmoneyToContract(landMoney);
    this.testLoan();
    this.forceUpdate();
  };

  render() {
    return (
      <div style={{ width: "100%" }}>
        <div className="container">
          <button
            style={{ textAlign: "center", width: "300px", margin: "10px" }}
            onClick={this.AddLandMoney}
            type="button"
            className="btn btn-info mb-1"
          >
            AddLoan
          </button>
          <button
            style={{ textAlign: "center", width: "300px", margin: "10px" }}
            onClick={this.testLoan}
            type="button"
            className="btn btn-info mb-1"
          >
            Update Page
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
        </div>
        <div style={{ margin: "10px", width: "100%" }}>
          {this.state.ShowTable && (
            <DebtorTable
              tableContents={this.state.tableContents}
              payLoan={this.PayLoan}
              checkLoan={this.checkLoan}
              getNumLoans={this.getNumLoans}
              getAllLoans={this.getAllLoans}
            />
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

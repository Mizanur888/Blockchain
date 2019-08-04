import Web3 from 'web3';
const web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

// Replace '' with a real account from ganache
let account0 = '0x26c74ded3a717bf2a549de43213db180b7a57af0'

// Replace [] with rating ABI obtained by truffle console. Only the part between [] (inclusive)
let ratingABI = [{"constant":true,"inputs":[],"name":"getLoanCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_loaner","type":"address"},{"name":"_debtor","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_interest","type":"uint256"},{"name":"_duedate","type":"uint256"},{"name":"_condition","type":"uint256"},{"name":"loanerprivkey","type":"address"},{"name":"debtorprivkey","type":"address"}],"name":"startLoan","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"endLoan","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"requestEnd","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"},{"name":"option","type":"bool"}],"name":"confirmEnd","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"payLoan","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"debtorID","type":"uint256"}],"name":"getDebtor","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"loanerID","type":"uint256"}],"name":"getLoaner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getAllLoaners","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAllDebtors","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"checkLoan","outputs":[{"name":"amount","type":"uint256"},{"name":"loaner","type":"address"},{"name":"debtor","type":"address"},{"name":"_index","type":"uint256"},{"name":"interest","type":"uint256"},{"name":"dueDate","type":"uint256"},{"name":"condition","type":"uint256"},{"name":"loanFinished","type":"bool"},{"name":"requestEnd","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]
// Replace ''  with rating address obtained by truffle console
let ratingAddress='0x5623567D4C5DF60911a5BDC5A76209F272d93c90';
// Initialize the rating contract with web3 

// Reference: https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html
const lendContract=new web3.eth.Contract(ratingABI, ratingAddress)
export {lendContract, account0};

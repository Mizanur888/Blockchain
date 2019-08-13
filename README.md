# LendMoney

## An ethereum-based money lending platform that makes getting the funding you need easier and more personal.

#### What?
LendMoney Financing is a crowdfunding platform based on the ethereum blockchain. It allows people to lend funds for an idea, charity, or start-up business. It is fully decentralized, secure, and can be used in a trustless fashion. This platform is unique as it does not rely on banks to lend funds, but insteads facilitates easy and secure lending between users in a peer-to-peer fashion. If users do not repay the funds to the lender, the amount plus an additional percentage will be deducted from the debted user. This percentage can change according to how much the lender trusts the debtor. Alternatively, the lender can forgo direct withdrawal from the debtor and instead place a recurring interest fee each month. If this fee raises above the total debtors balance, the full wallet balance will be paid to the lender. 

#### Why?
Often times working with a bank on getting a loan can be a long and tedious process, halting the production of new inventions or companies. The process involves a large amount of legal and financial paperwork that is prone to human error and is not completely transparent. LendMoney aims to solve this issue by facilitating a sure-fire way for individuals to confidently loan money to others, negating the need for a traditional bank. 


#### How?
LendMoney Financing is built on top of the Ethereum platform. Instances of the LendMoney smart contract will be deployed on Remix / Locally if possible. A web app will be built for the user to interact with the LendMoney smart contract. This will be using the web3.js interface along with either React or Angular. Users will be able to login with Google login, email, or a username and password set. This is possible through the use of aws Firebase NoSQL database. In detail, the frameworks and tools we expect to use are:


### Deliverables

1.      Web app
Login With Valid credentials
Give wallet information to LendMoney for sending and receiving money
After a successful loan, deposit the money into the debtors account 
Smart contact that will hold the contract conditions, between the Lender and Receiver

2.      Backend (Firebase)
       Set of APIs to interact with LendMoney smart contract
Sign Up user Api
Login Api to check for valid user 
Create account api ( where it will get necessary wallet info from user )
Crete transaction api ( to track the sending and receiving of money )
Finalize transaction api ( After checking pre-validation it will finalize transaction on the Blockchain)
Notify Api ( will notify user With the Smart contact Expiration Date )

3.      Unit testing Jasmine, Karma for Angular or Jest for react
4.      Documentation and testing
5.      Proposal
6.      Design
7.      Presentation
8.      Final report (Poster, white paper, …)

### Getting Started

#### Prerequisites to work with solidity
Ensure that the following is already installed and working on your machine:
* [npm](https://docs.npmjs.com/cli/install)
* [truffle](https://github.com/trufflesuite/truffle)
* [ganache](https://github.com/trufflesuite/ganache-cli)
* [node](https://nodejs.org/en/)
* [ng](https://cli.angular.io/)
* [solidity (solc)](https://solidity.readthedocs.io/en/v0.4.21/installing-solidity.html)
* [Web3.js](https://medium.com/coinmonks/build-a-dapp-using-ethereum-and-angular-6-a404fbf3c08d)
       * $ npm install web3@0.20.5

#### Install
Download or fork the project from github. As long as you've got everything running above, you should be good to go!

#### Run
1. Start Ganache, keeping the same accounts by running **./startserver** in a terminal, or **ganache-cli** to generate ten random ethereum accounts.
2. In another terminal, navigate to the folder containing **truffle-config.js**, and run **npm start** to run the UI.
3. Log in with an address and private key, and select the state (either Loaner or Debtor).
4. Start lending money!

### Features
+ As a debtor, you can create a new loan request.
+ Debtors can also view current and pending loans, and pay approved loans.
+ As a loaner, you can view pending and approved loans.
+ Loaners can also approve or reject pending loans.

### [Demo Video](https://www.youtube.com/watch?v=iQ-zI31H0LA)

### Team members:
+ Malnati Josh, Front end
* Affel Harrison, Solidity 
- Mizanur Raman, Backend 

# Reading About Smart Contacts
 how smart contact work
https://blockgeeks.com/guides/smart-contracts/


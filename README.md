# LendMoney

###### An ethereum-based lending platform that makes getting the funding you need faster and less complicated.

#### What?
LendMoney Financing is a decentralized lending platform based on the ethereum blockchain. It allows people to lend funds for an idea, charity, or start-up business. It is fully decentralized, secure, and can be used in a trustless fashion. This platform is unique as it does not rely on banks to lend funds, but instead facilitates easy and secure lending between users in a peer-to-peer fashion. We aim to make this program as secure as possible while aiming to still be as easy to use as possible.

#### Why?
Often times working with a bank on getting a loan can be a long and tedious process, halting the production of new inventions or companies. The process involves a large amount of legal and financial paperwork that is prone to human error and is not completely transparent. LendMoney aims to solve this issue by facilitating a sure-fire way for individuals to confidently loan money to others, negating the need for a traditional bank. This platform can also be used for less serious loans, such as loans between friends. Along with making a loan easier to obtain, this platform removes some of the complexity required to move money within the ethereum block chain. 


#### How?
LendMoney Financing is built on top of the Ethereum platform. A web app will be built for the user to interact with the LendMoney smart contract. This will be using the web3.js interface along with React. We interact with our contract through the Web3.js interface. This interface allows us to easily execute our contract functions and populate the front end with our return values. For our ethereum server we will use Ganache and Truffle for starting the ethereum chain and deploying the contract respectfully. NPM is used to moderate these packages, as well as to launch our web app. 

### Deliverables

1.      Web app
Login With wallet credentials
After a successful loan, deposit the money into the debtors account 
Smart contact that will hold the contract conditions, between the Lender and Receiver
After paying off a loan, the money will move back to the lender 

2.      Backend 
       Set of APIs to interact with LendMoney smart contract

Transaction API ( Ability to create loans, pay loans, and populate the front end) 

1.      Documentation 
2.      Proposal
3.      Design
4.      Presentation
5.      Final report (This Repository) 


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
Download or fork the project from github. As long as you've installed everything listed above, you should be good to go!

#### Run
1. Start Ganache, keeping the same accounts by running '**./startserver**' in a terminal. If bash scripts do not execute on your system you can manually execute the command from within the file. 
2. In another terminal, navigate to the folder containing '**truffle-config.js**', and run '**truffle migrate**' to compile and deploy the contract.
3. Navigate back to the working directory (/Blockchain/lendMoney) and execute '**npm start**'. The web page should automatically open. 
3. Log in with an address and private key, and select the state (either Loaner or Debtor).
4. Start lending money!

### Features
+ As a debtor, you can create a new loan request.
+ Debtors can also view current and pending loans, and pay approved loans.
+ As a loaner, you can view pending and approved loans.
+ Loaners can also approve or reject pending loans.
+ Debtors can pay off loans 

### [Demo Video](https://www.youtube.com/watch?v=iQ-zI31H0LA)

### Team members:
+ Malnati Josh, Front end, Design, presentation 
* Affel Harrison, Front end, Solidity 
- Mizanur Raman, Front end, Backend 


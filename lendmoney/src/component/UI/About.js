import React from "react";
import { Contract } from "web3-eth-contract";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter,
  Link
} from "react-router-dom";
export default function About() {
  return (
    <container>
      <div>
        <button className="btn btn-lg-info">
          <Link to="/">Login</Link>
        </button>
      </div>
      <a href = "https://www.youtube.com/watch?v=iQ-zI31H0LA">
         <h1 style={{textAlign:"center"}}>Video Demo Link </h1>
      </a>
      <a href = "https://github.com/Mizanur888/Blockchain/tree/master">
      <h1 style={{textAlign:"center"}}>Git Repo </h1>
   </a>
      <h1 style={{ textAlign: "center" }}>Project Description</h1>
      <div style={{ margin: "50px" }}>
        <h3>What?</h3>
        LendMoney Financing is a crowdfunding platform based on the ethereum
        blockchain. It allows people to lend funds for an idea, charity, or
        start-up business. It is fully decentralized, secure, and can be used in
        a trustless fashion. This platform is unique as it does not rely on
        banks to lend funds, but insteads facilitates easy and secure lending
        between users in a peer-to-peer fashion. If users do not repay the funds
        to the lender, the amount plus an additional percentage will be deducted
        from the debted user. This percentage can change according to how much
        the lender trusts the debtor. Alternatively, the lender can forgo direct
        withdrawal from the debtor and instead place a recurring interest fee
        each month. If this fee raises above the total debtors balance, the full
        wallet balance will be paid to the lender.
      </div>
      <div style={{ margin: "50px" }}>
        <h3>Why?</h3>
        Often times working with a bank on getting a loan can be a long and
        tedious process, halting the production of new inventions or companies.
        The process involves a large amount of legal and financial paperwork
        that is prone to human error and is not completely transparent.
        LendMoney aims to solve this issue by facilitating a sure-fire way for
        individuals to confidently loan money to others, negating the need for a
        traditional bank.
      </div>
      <div style={{ margin: "50px" }}>
        <h3>How?</h3> LendMoney Financing is built on top of the Ethereum
        platform. Instances of the LendMoney smart contract will be deployed on
        Remix / Locally if possible. A web app will be built for the user to
        interact with the LendMoney smart contract. This will be using the
        web3.js interface along with either React or Angular. Users will be able
        to login with Google login, email, or a username and password set. This
        is possible through the use of aws Firebase NoSQL database. In detail,
        the frameworks and tools we expect to use are
      </div>
      <div style={{ margin: "50px" }}>
        <h3>Deliverables</h3>
        <nav>
          <ol>
            <li style={{ backgroundColor: "#ccc" }}>Web app</li>

            <p>
              Login With wallet credentials After a successful loan, deposit the
              money into the debtors account Smart contact that will hold the
              contract conditions, between the Lender and Receiver After paying
              off a loan, the money will move back to the lender
            </p>

            <li style={{ backgroundColor: "#ccc" }}>
              Backend Set of APIs to interact with LendMoney smart contract
            </li>
            <p>
              Transaction API ( Ability to create loans, pay loans, and populate
              the front end)
            </p>
          </ol>
          <ul style={{ backgroundColor: "#ccc" }}>
            <li>Documentation </li>
            <li>Proposal</li>
            <li>Design</li>
            <li>Presentation</li>
            <li> Final report (This Repository) </li>
          </ul>
        </nav>
      </div>
      <div style={{ margin: "50px" }}>
        <h2>Getting Started</h2>
        <h5>Prerequisites to work with solidity</h5>
        <p>
          Ensure that the following is already installed and working on your
          machine:
        </p>
        <ul style={{backgroundColor:"#ccc"}}>
          <li>npm</li>
          <li>truffle</li>
          <li>ganache</li>
          <li>node</li>
          <li>ng</li>
          <li>solidity (solc)</li>
          <li>Web3.js * $ npm install web3@0.20.5</li>
        </ul>
        <h3>Install</h3>
       <p> Download or fork the project from github. As long as you've installed everything listed above, you should be good to go!</p>
      </div>
      <div style={{ margin: "50px" }}>
              <h3>Run</h3>
              <ol style={{backgroundColor:"#ccc"}}>
              <li>Start Ganache, keeping the same accounts by running './startserver' in a terminal. If bash scripts do not execute on your system you can manually execute the command from within the file.</li>
             <li> In another terminal, navigate to the folder containing 'truffle-config.js', and run 'truffle migrate' to compile and deploy the contract.</li>
             <li>Navigate back to the working directory (/Blockchain/lendMoney) and execute 'npm start'. The web page should automatically open.</li>
             <li> Log in with an address and private key, and select the state (either Loaner or Debtor).</li>
             <li>Start lending money!</li>
              </ol>
      </div>
      <div style={{ margin: "50px" }}>
      <h3>Features</h3>
      <ul style={{backgroundColor:"#ccc"}}>
      <li>As a debtor, you can create a new loan request.</li>
      <li>Debtors can also view current and pending loans, and pay approved loans.</li>
      <li>As a loaner, you can view pending and approved loans.</li>
      <li>Loaners can also approve or reject pending loans.</li>
      <li>Debtors can pay off loans</li>
      </ul>
      </div>
      <div style={{ margin: "50px" }}>
      <h2>Team members:</h2>
       <ul style={{backgroundColor:"#ccc"}}> 
       <li>Malnati Josh, Front end, Design, presentation</li>
       <li> Affel Harrison, Front end, Solidity</li>
       <li>Mizanur Raman, Front end, Backend</li>
      </ul>
      </div>
    </container>
  );
}

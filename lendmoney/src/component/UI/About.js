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
    </container>
  );
}

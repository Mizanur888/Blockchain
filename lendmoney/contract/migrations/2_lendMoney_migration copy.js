const Migrations = artifacts.require("./lendMoney.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(Migrations);
};

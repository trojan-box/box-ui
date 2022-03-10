//const Ares = artifacts.require("Ares");
const AresPoolReward = artifacts.require("AresPoolReward");

module.exports = function(deployer) {
//  deployer.deploy(Ares);
  deployer.deploy(AresPoolReward, 1618242575);
};

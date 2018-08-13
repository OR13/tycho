const ZooKeeper = artifacts.require('./ZooKeeper.sol');

module.exports = deployer => {
  deployer.deploy(ZooKeeper);
};
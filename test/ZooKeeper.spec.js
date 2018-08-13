const ZooKeeper = artifacts.require('./ZooKeeper.sol');

contract('ZooKeeper', accounts => {
  it('constructor works', async () => {
    const zk = await ZooKeeper.deployed();
    assert(accounts[0] === (await zk.owner()));
  });
});

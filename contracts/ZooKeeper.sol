pragma solidity ^0.4.19;

contract ZooKeeper {
    address public owner;

    function () public payable { 
        revert("ZooKeeper does not accept ETH"); 
    }

    constructor() public {
        owner = msg.sender;
    }

    function publish(string topic) public pure returns (string) {
        return topic;
    }
}
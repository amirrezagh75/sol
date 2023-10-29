// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract Mycontract {
    address public userAddress;

    function setUserAddress() public{
        userAddress = msg.sender;
    }
    
}
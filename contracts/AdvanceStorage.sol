// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AdvanceStorage {
  uint256[] public ids;

  function addNumber(uint256 _id) external {
    ids.push(_id);
  }

  function getAtIndex(uint256 _index) external view returns(uint256) {
    return ids[_index];
  }

  function getAll() external view returns(uint256[] memory){
    return ids;
  }

  function getLength() external view returns(uint256) {
    return ids.length;
  }
  
}

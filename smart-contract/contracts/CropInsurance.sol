// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract CropInsurance is Ownable {
    uint public nextPolicyId;
    
    struct Policy {
        address farmerAddress;
        string farmerName;
        uint landSize;
        string cropType;
        uint premiumAmount;
        uint payoutAmount;
        string insuranceType;
        string location;
        bool isAccepted;
        bool isPaid;
    }

    mapping(uint => Policy) public policies;
    
    
    event PolicyRegistered(uint indexed policyId, address indexed farmer);
    event PolicyAccepted(uint indexed policyId, address indexed farmer);
    event PayoutTriggered(uint indexed policyId, address indexed farmer, uint amount);

    constructor() Ownable(msg.sender) {
        nextPolicyId = 1;
    }

    modifier onlyValidPolicy(uint _policyId) {
        require(_policyId > 0 && _policyId < nextPolicyId, "Invalid policy ID");
        _;
    }

    function registerPolicy(
        address _farmerAddress, 
        string calldata _farmerName, 
        uint _landSize, 
        string calldata _cropType, 
        uint _premiumAmount, 
        uint _payoutAmount, 
        string calldata _insuranceType, 
        string calldata _location
    ) external onlyOwner returns (uint) {
        require(_payoutAmount > _premiumAmount, "Payout must exceed premium");
        require(_farmerAddress != address(0), "Invalid farmer address");
        require(bytes(_farmerName).length > 0, "Farmer name cannot be empty");
        require(bytes(_cropType).length > 0, "Crop type cannot be empty");
        
        uint currentPolicyId = nextPolicyId;
        policies[currentPolicyId] = Policy({
            farmerAddress: _farmerAddress,
            farmerName: _farmerName,
            landSize: _landSize,
            cropType: _cropType,
            premiumAmount: _premiumAmount,
            payoutAmount: _payoutAmount,
            insuranceType: _insuranceType,
            location: _location,
            isAccepted: false,
            isPaid: false
        });
        nextPolicyId++;
        
       
        emit PolicyRegistered(currentPolicyId, _farmerAddress);
        
        return currentPolicyId;
    }

    function acceptInsurance(uint _policyId) 
        external 
        onlyOwner 
        onlyValidPolicy(_policyId)
    {
        Policy storage policy = policies[_policyId];
        require(!policy.isAccepted, "Policy already accepted");
        policy.isAccepted = true;
        
        emit PolicyAccepted(_policyId, policy.farmerAddress);
    }

    function triggerPayout(uint _policyId) external onlyOwner onlyValidPolicy(_policyId) {
        Policy storage policy = policies[_policyId];
        require(policy.isAccepted, "Policy not accepted");
        require(!policy.isPaid, "Payout already processed");
        require(address(this).balance >= policy.payoutAmount, "Insufficient contract balance");

        policy.isPaid = true;
        
        emit PayoutTriggered(_policyId, policy.farmerAddress, policy.payoutAmount);
        
        (bool success, ) = payable(policy.farmerAddress).call{value: policy.payoutAmount}("");
        require(success, "Payout transfer failed");
    }
    
    
    function getContractBalance() external view returns (uint) {
        return address(this).balance;
    }
    
    receive() external payable {}
}

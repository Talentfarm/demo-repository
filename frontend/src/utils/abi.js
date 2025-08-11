export const cropInsuranceContractAbi = [
  {
  "contractName": "CropInsurance",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "EnforcedPause",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ExpectedPause",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ReentrancyGuardReentrantCall",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "policyId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "farmerAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "premiumPaid",
          "type": "uint256"
        }
      ],
      "name": "InsuranceAccepted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "policyId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "farmerAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "payoutAmount",
          "type": "uint256"
        }
      ],
      "name": "PayoutTriggered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "policyId",
          "type": "uint256"
        }
      ],
      "name": "PolicyExpired",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "policyId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "farmerAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "farmerName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "cropType",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "premiumAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "expiryDate",
          "type": "uint256"
        }
      ],
      "name": "PolicyRegistered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "CLAIM_PERIOD",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "POLICY_DURATION",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "adminWithdrawableAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "farmerPolicies",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "nextPolicyId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "policies",
      "outputs": [
        {
          "internalType": "address",
          "name": "farmerAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "farmerName",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "landSize",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "cropType",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "issueDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "expiryDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "premiumAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "payoutAmount",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "insuranceType",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "location",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "isAccepted",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "isPaid",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "isExpired",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalPayoutsProcessed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "totalPremiumsCollected",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_farmerAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_farmerName",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_landSize",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_cropType",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_premiumAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_payoutAmount",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_insuranceType",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_location",
          "type": "string"
        }
      ],
      "name": "registerPolicy",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_policyId",
          "type": "uint256"
        }
      ],
      "name": "acceptInsurance",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_policyId",
          "type": "uint256"
        }
      ],
      "name": "triggerPayout",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_policyId",
          "type": "uint256"
        }
      ],
      "name": "expirePolicy",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdrawAdminFunds",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_farmer",
          "type": "address"
        }
      ],
      "name": "getFarmerPolicies",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getContractStats",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "totalPolicies",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalPremiums",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalPayouts",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "contractBalance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "adminFunds",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_policyId",
          "type": "uint256"
        }
      ],
      "name": "isPolicyActive",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "emergencyWithdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"EnforcedPause\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpectedPause\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"policyId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"farmerAddress\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"premiumPaid\",\"type\":\"uint256\"}],\"name\":\"InsuranceAccepted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Paused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"policyId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"farmerAddress\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"payoutAmount\",\"type\":\"uint256\"}],\"name\":\"PayoutTriggered\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"policyId\",\"type\":\"uint256\"}],\"name\":\"PolicyExpired\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"policyId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"farmerAddress\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"farmerName\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"cropType\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"premiumAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"expiryDate\",\"type\":\"uint256\"}],\"name\":\"PolicyRegistered\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Unpaused\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"CLAIM_PERIOD\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"POLICY_DURATION\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_policyId\",\"type\":\"uint256\"}],\"name\":\"acceptInsurance\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"adminWithdrawableAmount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"emergencyWithdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_policyId\",\"type\":\"uint256\"}],\"name\":\"expirePolicy\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"farmerPolicies\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getContractStats\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"totalPolicies\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalPremiums\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalPayouts\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"contractBalance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"adminFunds\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_farmer\",\"type\":\"address\"}],\"name\":\"getFarmerPolicies\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_policyId\",\"type\":\"uint256\"}],\"name\":\"isPolicyActive\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"nextPolicyId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"policies\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"farmerAddress\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"farmerName\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"landSize\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"cropType\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"issueDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"expiryDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"premiumAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"payoutAmount\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"insuranceType\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"location\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"isAccepted\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaid\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isExpired\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_farmerAddress\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"_farmerName\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_landSize\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_cropType\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_premiumAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_payoutAmount\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_insuranceType\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_location\",\"type\":\"string\"}],\"name\":\"registerPolicy\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalPayoutsProcessed\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalPremiumsCollected\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_policyId\",\"type\":\"uint256\"}],\"name\":\"triggerPayout\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"unpause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdrawAdminFunds\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}],\"devdoc\":{\"errors\":{\"EnforcedPause()\":[{\"details\":\"The operation failed because the contract is paused.\"}],\"ExpectedPause()\":[{\"details\":\"The operation failed because the contract is not paused.\"}],\"OwnableInvalidOwner(address)\":[{\"details\":\"The owner is not a valid owner account. (eg. `address(0)`)\"}],\"OwnableUnauthorizedAccount(address)\":[{\"details\":\"The caller account is not authorized to perform an operation.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"events\":{\"Paused(address)\":{\"details\":\"Emitted when the pause is triggered by `account`.\"},\"Unpaused(address)\":{\"details\":\"Emitted when the pause is lifted by `account`.\"}},\"kind\":\"dev\",\"methods\":{\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"paused()\":{\"details\":\"Returns true if the contract is paused, and false otherwise.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/CropInsurance.sol\":\"CropInsurance\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[],\"viaIR\":true},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6\",\"dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"@openzeppelin/contracts/utils/Pausable.sol\":{\"keccak256\":\"0xdb484371dfbb848cb6f5d70464e9ac9b2900e4164ead76bbce4fef0b44bcc68f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f9d6f6f6600a2bec622f699081b58350873b5e63ce05464d17d674a290bb8a7c\",\"dweb:/ipfs/QmQKVzSQY1PM3Bid4QhgVVZyx6B4Jx7XgaQzLKHj38vJz8\"]},\"@openzeppelin/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0x11a5a79827df29e915a12740caf62fe21ebe27c08c9ae3e09abe9ee3ba3866d3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3cf0c69ab827e3251db9ee6a50647d62c90ba580a4d7bbff21f2bea39e7b2f4a\",\"dweb:/ipfs/QmZiKwtKU1SBX4RGfQtY7PZfiapbbu6SZ9vizGQD9UHjRA\"]},\"project:/contracts/CropInsurance.sol\":{\"keccak256\":\"0xa810ec59739c2f76d878fd3134f8d3586438e9304167591ee85c5057d445d4ee\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1a3306799bc7bae605f9b887b4f56345272f4483bf15a4a7809354c5f7ff6a3b\",\"dweb:/ipfs/QmZhpUFLh9WvSDvYdiAxqi1M3kyoxMaG4EUgGwBJX8XVw7\"]}},\"version\":1}",
  "bytecode": "0x6080806040523461009d576001600055331561006e576001805433600160a060020a0319821681179092556040519190600160a060020a03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a36001600255611da790816100a38239f35b807f1e4fbdf7000000000000000000000000000000000000000000000000000000006024925260006004820152fd5b600080fdfe608080604052600436101561001d575b50361561001b57600080fd5b005b7c01000000000000000000000000000000000000000000000000000000006000350490816321241dfe146118a0575080633037e4cd1461177b5780633dadde201461175d5780633f4ba83a146116c1578063496dee76146116a35780635c975abb1461167a5780636461380714611595578063715018a61461154157806375f89051146114e757806376653b3a146112605780638456cb59146111ef5780638da5cb5b146111c85780639339dd5d146111145780639b70e2fb146110f5578063b1b358d414610e7f578063bd8afa4614610e57578063c5b2910d14610485578063cad0b8db14610467578063d3e8948314610347578063db2e21bc1461026a578063dfe6b5d614610205578063f2fde38b146101665763fa88ed9d14610143573861000f565b34610161576000366003190112610161576020600754604051908152f35b600080fd5b346101615760203660031901126101615761017f6118bc565b610187611a93565b600160a060020a038091169081156101d45760015482600160a060020a0319821617600155167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a3005b60246040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260006004820152fd5b346101615760003660031901126101615760025460001981019081116102515760a090600554600654303190600754926040519485526020850152604084015260608301526080820152f35b60e060020a634e487b7102600052601160045260246000fd5b3461016157600036600319011261016157610283611a93565b60015460ff60a060020a8204161561030057600080808093600160a060020a03303191165af16102b1611c1d565b50156102b957005b606460405160e560020a62461bcd02815260206004820152601b60248201527f456d657267656e6379207769746864726177616c206661696c656400000000006044820152fd5b606460405160e560020a62461bcd02815260206004820152601760248201527f436f6e7472616374206d757374206265207061757365640000000000000000006044820152fd5b3461016157602036600319011261016157600435600052600360205260406000208054600160a060020a031660018201610380906119ae565b91600281015460038201610393906119ae565b9160048101549260058201546006830154600784015491600885016103b7906119ae565b936103c4600987016119ae565b95600a0154966040519a8b9a8b526101a08060208d01528b016103e691611a53565b9060408b015289810360608b01526103fd91611a53565b96608089015260a088015260c087015260e0860152610100938581038587015261042691611a53565b84810361012086015261043891611a53565b9160ff82161515610140850152810460ff16151561016084015262010000900460ff1615156101808301520390f35b34610161576000366003190112610161576020600254604051908152f35b34610161576101003660031901126101615761049f6118bc565b60243567ffffffffffffffff8111610161576104bf903690600401611903565b9091606491823567ffffffffffffffff8111610161576104e3903690600401611903565b9460c43567ffffffffffffffff811161016157610504903690600401611903565b9060e43567ffffffffffffffff811161016157610525903690600401611903565b9761052e611a93565b610536611b58565b600160a060020a03881615610e125760443515610dcd5760843515610d885760843560a4351115610d43578615610cfe578915610cb9578815610c745750600254976301e1338042014211610251576105f661060393604051956105998761196f565b600160a060020a038b1687526105b0368b8a611b00565b602088015260443560408801526105c8368e8b611b00565b60608801524260808801526301e13380420160a088015260843560c088015260a43560e08801523691611b00565b6101008501523691611b00565b6101208201526000610140820152600061016082015260006101808201528560005260036020526040600020600160a060020a03825116600160a060020a0319825416178155602082015180519067ffffffffffffffff821161091d57819061066f6001850154611931565b601f8111610c21575b50602090601f8311600114610bad57600092610ba2575b5050816002029160080260020a6000190419161760018201555b60408201516002820155606082015180519067ffffffffffffffff821161091d5781906106d96003850154611931565b601f8111610b4f575b50602090601f8311600114610adb57600092610ad0575b5050816002029160080260020a6000190419161760038201555b6080820151600482015560a0820151600582015560c0820151600682015560e0820151600782015561010082015180519067ffffffffffffffff821161091d5781906107626008850154611931565b601f8111610a7d575b50602090601f8311600114610a09576000926109fe575b5050816002029160080260020a6000190419161760088201555b61012082015180519067ffffffffffffffff821161091d576107c16009840154611931565b601f81116109b7575b50602090601f831160011461094157600a93929160009183610936575b5050816002029160080260020a6000190419161760098201555b0190610140810151151590825460ff62ff00006201000061018061ff00610100610160880151151502169501511515021693169062ffffff19161717179055600160a060020a0384166000526004602052604060002080546801000000000000000081101561091d57610879916001820181556118d2565b60088254910260020a9081600003809289021691191617905560025492600019841461025157600160a060020a036108fb7f8387951bdfe67d74dcb3a426eb171d96410dd6e5e615c498f1a61e3d2cdc6a719460209960018a98016002556108ee604051968796608088526080880191611b37565b918583038c870152611b37565b9560843560408401526301e133804201606084015216940390a3604051908152f35b60e060020a634e487b7102600052604160045260246000fd5b015190508b806107e7565b906009840160005260206000209160005b601f198516811061099f575092600192600292600a969583601f19811610610984575b50505002016009820155610801565b01516008601f841602840a60001904191690558c8080610975565b91926020600181928685015181550194019201610952565b6009840160005260206000206020601f8501048101602085106109f7575b6020601f840104820181106109eb5750506107ca565b600081556001016109d5565b50806109d5565b015190508a80610782565b91506008840160005260206000209160005b601f1985168110610a655750918391600293600195601f19811610610a4a575b5050500201600882015561079c565b01516008601f841602840a60001904191690558b8080610a3b565b91926020600181928685015181550194019201610a1b565b9091506008840160005260206000206020601f850104810160208510610ac9575b90849392915b6020601f84010482018110610aba57505061076b565b60008155859450600101610aa4565b5080610a9e565b015190508a806106f9565b91506003840160005260206000209160005b601f1985168110610b375750918391600293600195601f19811610610b1c575b50505002016003820155610713565b01516008601f841602840a60001904191690558b8080610b0d565b91926020600181928685015181550194019201610aed565b9091506003840160005260206000206020601f850104810160208510610b9b575b90849392915b6020601f84010482018110610b8c5750506106e2565b60008155859450600101610b76565b5080610b70565b015190508a8061068f565b91506001840160005260206000209160005b601f1985168110610c095750918391600293600195601f19811610610bee575b505050020160018201556106a9565b01516008601f841602840a60001904191690558b8080610bdf565b91926020600181928685015181550194019201610bbf565b9091506001840160005260206000206020601f850104810160208510610c6d575b90849392915b6020601f84010482018110610c5e575050610678565b60008155859450600101610c48565b5080610c42565b60405160e560020a62461bcd02815260206004820152601160248201527f4c6f636174696f6e2072657175697265640000000000000000000000000000006044820152fd5b60405160e560020a62461bcd02815260206004820152601260248201527f43726f70207479706520726571756972656400000000000000000000000000006044820152fd5b60405160e560020a62461bcd02815260206004820152601460248201527f4661726d6572206e616d652072657175697265640000000000000000000000006044820152fd5b60405160e560020a62461bcd02815260206004820152601a60248201527f5061796f7574206d75737420657863656564207072656d69756d0000000000006044820152fd5b60405160e560020a62461bcd02815260206004820152601860248201527f5072656d69756d206d75737420626520706f73697469766500000000000000006044820152fd5b60405160e560020a62461bcd02815260206004820152601a60248201527f4c616e642073697a65206d75737420626520706f7369746976650000000000006044820152fd5b60405160e560020a62461bcd02815260206004820152601660248201527f496e76616c6964206661726d65722061646472657373000000000000000000006044820152fd5b34610161576020366003190112610161576020610e75600435611c4d565b6040519015158152f35b346101615760208060031936011261016157600435610e9c611a93565b801515806110ea575b610eae90611b94565b610eb6611be2565b610ebe611b58565b8060005260038252604060002091600a83019283549360ff8516156110a3576101009060ff8287041661105c57600583015462278d0081018091116102515742116110155730319160078401968754809410610fce5761ff001916179055600654610f299190611ad7565b600655600160a060020a03906000808080858554168954905af1610f4b611c1d565b5015610f8757907f7884580f743f908c98258afac53f9e0929cd6787b3488df80e096df15409ef8f929154169354604051908152a36001600055005b6064836040519060e560020a62461bcd0282526004820152601660248201527f5061796f7574207472616e73666572206661696c6564000000000000000000006044820152fd5b6064866040519060e560020a62461bcd0282526004820152601d60248201527f496e73756666696369656e7420636f6e74726163742062616c616e63650000006044820152fd5b6064846040519060e560020a62461bcd0282526004820152601460248201527f436c61696d20706572696f6420657870697265640000000000000000000000006044820152fd5b6064846040519060e560020a62461bcd0282526004820152601860248201527f5061796f757420616c72656164792070726f63657373656400000000000000006044820152fd5b6064836040519060e560020a62461bcd0282526004820152601360248201527f506f6c696379206e6f74206163636570746564000000000000000000000000006044820152fd5b506002548110610ea5565b346101615760003660031901126101615760206040516301e133808152f35b346101615760208060031936011261016157600160a060020a036111366118bc565b1660005260048152604060002060405190818382549182815201908192600052846000209060005b868282106111b45786866111748288038361198c565b604051928392818401908285525180915260408401929160005b82811061119d57505050500390f35b83518552869550938101939281019260010161118e565b83548552909301926001928301920161115e565b34610161576000366003190112610161576020600160a060020a0360015416604051908152f35b3461016157600036600319011261016157611208611a93565b611210611b58565b60a060020a74ff00000000000000000000000000000000000000001960015416176001557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a1005b60208060031936011261016157600435611278611be2565b801515806114dc575b61128a90611b94565b8060005260038252600160a060020a03604060002054163303611495578060005260038252600560406000200154421161144e57806000526003825260ff62010000600a604060002001540416611407576112e3611b58565b80600052600382526040600020600a81019081549060ff82166113c0576006015434036113795760019060ff191617905561132034600554611ad7565b600555600a3402348104600a14341517156102515760646113449104600754611ad7565b6007557f6be34a1120241c5f6625e795abf306aa8714d41f93573373e1011f1568122c14604051923484523393a36001600055005b6064846040519060e560020a62461bcd0282526004820152601d60248201527f4578616374207072656d69756d20616d6f756e742072657175697265640000006044820152fd5b6064856040519060e560020a62461bcd0282526004820152601760248201527f506f6c69637920616c72656164792061636365707465640000000000000000006044820152fd5b6064826040519060e560020a62461bcd0282526004820152601860248201527f506f6c696379206d61726b6564206173206578706972656400000000000000006044820152fd5b6064826040519060e560020a62461bcd0282526004820152600e60248201527f506f6c69637920657870697265640000000000000000000000000000000000006044820152fd5b6064826040519060e560020a62461bcd0282526004820152601060248201527f4e6f7420706f6c696379206f776e6572000000000000000000000000000000006044820152fd5b506002548110611281565b34610161576040366003190112610161576115006118bc565b600160a060020a0360243591166000526004602052604060002080548210156101615760209161152f916118d2565b90546008604051920260020a90048152f35b346101615760003660031901126101615761155a611a93565b6000600160a060020a0360015481198116600155167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b34610161576000366003190112610161576115ae611a93565b6115b6611be2565b60075480156116335760008080809381600755600160a060020a03600154165af16115df611c1d565b50156115ec576001600055005b606460405160e560020a62461bcd02815260206004820152601160248201527f5769746864726177616c206661696c65640000000000000000000000000000006044820152fd5b606460405160e560020a62461bcd02815260206004820152601460248201527f4e6f2066756e647320746f2077697468647261770000000000000000000000006044820152fd5b3461016157600036600319011261016157602060ff60a060020a60015404166040519015158152f35b34610161576000366003190112610161576020600654604051908152f35b34610161576000366003190112610161576116da611a93565b60015460ff60a060020a820416156117335774ff000000000000000000000000000000000000000019166001557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a1005b60046040517f8dfc202b000000000000000000000000000000000000000000000000000000008152fd5b34610161576000366003190112610161576020600554604051908152f35b3461016157602036600319011261016157600435611797611a93565b80151580611895575b6117a990611b94565b8060005260036020526040600020600581015442111561184e57600a018054620100009060ff828204166118075762ff000019161790557fb22aa541487fc93d989bb5b17d1e3a967f649c4979cfd658c0849e070ae0dca0600080a2005b606460405160e560020a62461bcd02815260206004820152601660248201527f506f6c69637920616c72656164792065787069726564000000000000000000006044820152fd5b606460405160e560020a62461bcd02815260206004820152601660248201527f506f6c696379206e6f74207965742065787069726564000000000000000000006044820152fd5b5060025481106117a0565b34610161576000366003190112610161578062278d0060209252f35b60043590600160a060020a038216820361016157565b80548210156118ea5760005260206000200190600090565b60e060020a634e487b7102600052603260045260246000fd5b9181601f840112156101615782359167ffffffffffffffff8311610161576020838186019501011161016157565b9060016002830492168015611965575b602083101461194c57565b60e060020a634e487b7102600052602260045260246000fd5b91607f1691611941565b6101a0810190811067ffffffffffffffff82111761091d57604052565b90601f8019910116810190811067ffffffffffffffff82111761091d57604052565b90604051918260008254926119c284611931565b908184526001948581169081600014611a3157506001146119ee575b50506119ec9250038361198c565b565b9093915060005260209081600020936000915b818310611a195750506119ec935082010138806119de565b85548884018501529485019487945091830191611a01565b9150506119ec94506020925060ff1916828401521515810282010138806119de565b919082519283825260005b848110611a7f575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201611a5e565b600160a060020a03600154163303611aa757565b60246040517f118cdaa7000000000000000000000000000000000000000000000000000000008152336004820152fd5b9190820180921161025157565b67ffffffffffffffff811161091d57601f01601f191660200190565b929192611b0c82611ae4565b91611b1a604051938461198c565b829481845281830111610161578281602093846000960137010152565b908060209392818452848401376000828201840152601f01601f1916010190565b60ff60a060020a6001540416611b6a57565b60046040517fd93c0665000000000000000000000000000000000000000000000000000000008152fd5b15611b9b57565b606460405160e560020a62461bcd02815260206004820152601160248201527f496e76616c696420706f6c6963792049440000000000000000000000000000006044820152fd5b600260005414611bf3576002600055565b60046040517f3ee5aeb5000000000000000000000000000000000000000000000000000000008152fd5b3d15611c48573d90611c2e82611ae4565b91611c3c604051938461198c565b82523d6000602084013e565b606090565b80158015611d65575b611d5f5760005260036020526040600020604051611c738161196f565b600160a060020a038254168152611c8c600183016119ae565b602082015260028201546040820152611ca7600383016119ae565b60608201526004820154608082015260058201549060a08101918252600683015460c0820152600783015460e0820152600a611ce5600885016119ae565b936101009485840152611cfa600982016119ae565b610120840152015460ff6201000081808416151596876101408701528404161592831561016086015204161591610180831591015283611d57575b5082611d4f575b5081611d46575090565b90505142111590565b915038611d3c565b925038611d35565b50600090565b50600254811015611c5656fea2646970667358221220ca28e8724f15ed617665aca0c6259985834c403197ea9f27481b38ad258c9bb164736f6c63430008140033",
  "deployedBytecode": "0x608080604052600436101561001d575b50361561001b57600080fd5b005b7c01000000000000000000000000000000000000000000000000000000006000350490816321241dfe146118a0575080633037e4cd1461177b5780633dadde201461175d5780633f4ba83a146116c1578063496dee76146116a35780635c975abb1461167a5780636461380714611595578063715018a61461154157806375f89051146114e757806376653b3a146112605780638456cb59146111ef5780638da5cb5b146111c85780639339dd5d146111145780639b70e2fb146110f5578063b1b358d414610e7f578063bd8afa4614610e57578063c5b2910d14610485578063cad0b8db14610467578063d3e8948314610347578063db2e21bc1461026a578063dfe6b5d614610205578063f2fde38b146101665763fa88ed9d14610143573861000f565b34610161576000366003190112610161576020600754604051908152f35b600080fd5b346101615760203660031901126101615761017f6118bc565b610187611a93565b600160a060020a038091169081156101d45760015482600160a060020a0319821617600155167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a3005b60246040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260006004820152fd5b346101615760003660031901126101615760025460001981019081116102515760a090600554600654303190600754926040519485526020850152604084015260608301526080820152f35b60e060020a634e487b7102600052601160045260246000fd5b3461016157600036600319011261016157610283611a93565b60015460ff60a060020a8204161561030057600080808093600160a060020a03303191165af16102b1611c1d565b50156102b957005b606460405160e560020a62461bcd02815260206004820152601b60248201527f456d657267656e6379207769746864726177616c206661696c656400000000006044820152fd5b606460405160e560020a62461bcd02815260206004820152601760248201527f436f6e7472616374206d757374206265207061757365640000000000000000006044820152fd5b3461016157602036600319011261016157600435600052600360205260406000208054600160a060020a031660018201610380906119ae565b91600281015460038201610393906119ae565b9160048101549260058201546006830154600784015491600885016103b7906119ae565b936103c4600987016119ae565b95600a0154966040519a8b9a8b526101a08060208d01528b016103e691611a53565b9060408b015289810360608b01526103fd91611a53565b96608089015260a088015260c087015260e0860152610100938581038587015261042691611a53565b84810361012086015261043891611a53565b9160ff82161515610140850152810460ff16151561016084015262010000900460ff1615156101808301520390f35b34610161576000366003190112610161576020600254604051908152f35b34610161576101003660031901126101615761049f6118bc565b60243567ffffffffffffffff8111610161576104bf903690600401611903565b9091606491823567ffffffffffffffff8111610161576104e3903690600401611903565b9460c43567ffffffffffffffff811161016157610504903690600401611903565b9060e43567ffffffffffffffff811161016157610525903690600401611903565b9761052e611a93565b610536611b58565b600160a060020a03881615610e125760443515610dcd5760843515610d885760843560a4351115610d43578615610cfe578915610cb9578815610c745750600254976301e1338042014211610251576105f661060393604051956105998761196f565b600160a060020a038b1687526105b0368b8a611b00565b602088015260443560408801526105c8368e8b611b00565b60608801524260808801526301e13380420160a088015260843560c088015260a43560e08801523691611b00565b6101008501523691611b00565b6101208201526000610140820152600061016082015260006101808201528560005260036020526040600020600160a060020a03825116600160a060020a0319825416178155602082015180519067ffffffffffffffff821161091d57819061066f6001850154611931565b601f8111610c21575b50602090601f8311600114610bad57600092610ba2575b5050816002029160080260020a6000190419161760018201555b60408201516002820155606082015180519067ffffffffffffffff821161091d5781906106d96003850154611931565b601f8111610b4f575b50602090601f8311600114610adb57600092610ad0575b5050816002029160080260020a6000190419161760038201555b6080820151600482015560a0820151600582015560c0820151600682015560e0820151600782015561010082015180519067ffffffffffffffff821161091d5781906107626008850154611931565b601f8111610a7d575b50602090601f8311600114610a09576000926109fe575b5050816002029160080260020a6000190419161760088201555b61012082015180519067ffffffffffffffff821161091d576107c16009840154611931565b601f81116109b7575b50602090601f831160011461094157600a93929160009183610936575b5050816002029160080260020a6000190419161760098201555b0190610140810151151590825460ff62ff00006201000061018061ff00610100610160880151151502169501511515021693169062ffffff19161717179055600160a060020a0384166000526004602052604060002080546801000000000000000081101561091d57610879916001820181556118d2565b60088254910260020a9081600003809289021691191617905560025492600019841461025157600160a060020a036108fb7f8387951bdfe67d74dcb3a426eb171d96410dd6e5e615c498f1a61e3d2cdc6a719460209960018a98016002556108ee604051968796608088526080880191611b37565b918583038c870152611b37565b9560843560408401526301e133804201606084015216940390a3604051908152f35b60e060020a634e487b7102600052604160045260246000fd5b015190508b806107e7565b906009840160005260206000209160005b601f198516811061099f575092600192600292600a969583601f19811610610984575b50505002016009820155610801565b01516008601f841602840a60001904191690558c8080610975565b91926020600181928685015181550194019201610952565b6009840160005260206000206020601f8501048101602085106109f7575b6020601f840104820181106109eb5750506107ca565b600081556001016109d5565b50806109d5565b015190508a80610782565b91506008840160005260206000209160005b601f1985168110610a655750918391600293600195601f19811610610a4a575b5050500201600882015561079c565b01516008601f841602840a60001904191690558b8080610a3b565b91926020600181928685015181550194019201610a1b565b9091506008840160005260206000206020601f850104810160208510610ac9575b90849392915b6020601f84010482018110610aba57505061076b565b60008155859450600101610aa4565b5080610a9e565b015190508a806106f9565b91506003840160005260206000209160005b601f1985168110610b375750918391600293600195601f19811610610b1c575b50505002016003820155610713565b01516008601f841602840a60001904191690558b8080610b0d565b91926020600181928685015181550194019201610aed565b9091506003840160005260206000206020601f850104810160208510610b9b575b90849392915b6020601f84010482018110610b8c5750506106e2565b60008155859450600101610b76565b5080610b70565b015190508a8061068f565b91506001840160005260206000209160005b601f1985168110610c095750918391600293600195601f19811610610bee575b505050020160018201556106a9565b01516008601f841602840a60001904191690558b8080610bdf565b91926020600181928685015181550194019201610bbf565b9091506001840160005260206000206020601f850104810160208510610c6d575b90849392915b6020601f84010482018110610c5e575050610678565b60008155859450600101610c48565b5080610c42565b60405160e560020a62461bcd02815260206004820152601160248201527f4c6f636174696f6e2072657175697265640000000000000000000000000000006044820152fd5b60405160e560020a62461bcd02815260206004820152601260248201527f43726f70207479706520726571756972656400000000000000000000000000006044820152fd5b60405160e560020a62461bcd02815260206004820152601460248201527f4661726d6572206e616d652072657175697265640000000000000000000000006044820152fd5b60405160e560020a62461bcd02815260206004820152601a60248201527f5061796f7574206d75737420657863656564207072656d69756d0000000000006044820152fd5b60405160e560020a62461bcd02815260206004820152601860248201527f5072656d69756d206d75737420626520706f73697469766500000000000000006044820152fd5b60405160e560020a62461bcd02815260206004820152601a60248201527f4c616e642073697a65206d75737420626520706f7369746976650000000000006044820152fd5b60405160e560020a62461bcd02815260206004820152601660248201527f496e76616c6964206661726d65722061646472657373000000000000000000006044820152fd5b34610161576020366003190112610161576020610e75600435611c4d565b6040519015158152f35b346101615760208060031936011261016157600435610e9c611a93565b801515806110ea575b610eae90611b94565b610eb6611be2565b610ebe611b58565b8060005260038252604060002091600a83019283549360ff8516156110a3576101009060ff8287041661105c57600583015462278d0081018091116102515742116110155730319160078401968754809410610fce5761ff001916179055600654610f299190611ad7565b600655600160a060020a03906000808080858554168954905af1610f4b611c1d565b5015610f8757907f7884580f743f908c98258afac53f9e0929cd6787b3488df80e096df15409ef8f929154169354604051908152a36001600055005b6064836040519060e560020a62461bcd0282526004820152601660248201527f5061796f7574207472616e73666572206661696c6564000000000000000000006044820152fd5b6064866040519060e560020a62461bcd0282526004820152601d60248201527f496e73756666696369656e7420636f6e74726163742062616c616e63650000006044820152fd5b6064846040519060e560020a62461bcd0282526004820152601460248201527f436c61696d20706572696f6420657870697265640000000000000000000000006044820152fd5b6064846040519060e560020a62461bcd0282526004820152601860248201527f5061796f757420616c72656164792070726f63657373656400000000000000006044820152fd5b6064836040519060e560020a62461bcd0282526004820152601360248201527f506f6c696379206e6f74206163636570746564000000000000000000000000006044820152fd5b506002548110610ea5565b346101615760003660031901126101615760206040516301e133808152f35b346101615760208060031936011261016157600160a060020a036111366118bc565b1660005260048152604060002060405190818382549182815201908192600052846000209060005b868282106111b45786866111748288038361198c565b604051928392818401908285525180915260408401929160005b82811061119d57505050500390f35b83518552869550938101939281019260010161118e565b83548552909301926001928301920161115e565b34610161576000366003190112610161576020600160a060020a0360015416604051908152f35b3461016157600036600319011261016157611208611a93565b611210611b58565b60a060020a74ff00000000000000000000000000000000000000001960015416176001557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a1005b60208060031936011261016157600435611278611be2565b801515806114dc575b61128a90611b94565b8060005260038252600160a060020a03604060002054163303611495578060005260038252600560406000200154421161144e57806000526003825260ff62010000600a604060002001540416611407576112e3611b58565b80600052600382526040600020600a81019081549060ff82166113c0576006015434036113795760019060ff191617905561132034600554611ad7565b600555600a3402348104600a14341517156102515760646113449104600754611ad7565b6007557f6be34a1120241c5f6625e795abf306aa8714d41f93573373e1011f1568122c14604051923484523393a36001600055005b6064846040519060e560020a62461bcd0282526004820152601d60248201527f4578616374207072656d69756d20616d6f756e742072657175697265640000006044820152fd5b6064856040519060e560020a62461bcd0282526004820152601760248201527f506f6c69637920616c72656164792061636365707465640000000000000000006044820152fd5b6064826040519060e560020a62461bcd0282526004820152601860248201527f506f6c696379206d61726b6564206173206578706972656400000000000000006044820152fd5b6064826040519060e560020a62461bcd0282526004820152600e60248201527f506f6c69637920657870697265640000000000000000000000000000000000006044820152fd5b6064826040519060e560020a62461bcd0282526004820152601060248201527f4e6f7420706f6c696379206f776e6572000000000000000000000000000000006044820152fd5b506002548110611281565b34610161576040366003190112610161576115006118bc565b600160a060020a0360243591166000526004602052604060002080548210156101615760209161152f916118d2565b90546008604051920260020a90048152f35b346101615760003660031901126101615761155a611a93565b6000600160a060020a0360015481198116600155167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b34610161576000366003190112610161576115ae611a93565b6115b6611be2565b60075480156116335760008080809381600755600160a060020a03600154165af16115df611c1d565b50156115ec576001600055005b606460405160e560020a62461bcd02815260206004820152601160248201527f5769746864726177616c206661696c65640000000000000000000000000000006044820152fd5b606460405160e560020a62461bcd02815260206004820152601460248201527f4e6f2066756e647320746f2077697468647261770000000000000000000000006044820152fd5b3461016157600036600319011261016157602060ff60a060020a60015404166040519015158152f35b34610161576000366003190112610161576020600654604051908152f35b34610161576000366003190112610161576116da611a93565b60015460ff60a060020a820416156117335774ff000000000000000000000000000000000000000019166001557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a1005b60046040517f8dfc202b000000000000000000000000000000000000000000000000000000008152fd5b34610161576000366003190112610161576020600554604051908152f35b3461016157602036600319011261016157600435611797611a93565b80151580611895575b6117a990611b94565b8060005260036020526040600020600581015442111561184e57600a018054620100009060ff828204166118075762ff000019161790557fb22aa541487fc93d989bb5b17d1e3a967f649c4979cfd658c0849e070ae0dca0600080a2005b606460405160e560020a62461bcd02815260206004820152601660248201527f506f6c69637920616c72656164792065787069726564000000000000000000006044820152fd5b606460405160e560020a62461bcd02815260206004820152601660248201527f506f6c696379206e6f74207965742065787069726564000000000000000000006044820152fd5b5060025481106117a0565b34610161576000366003190112610161578062278d0060209252f35b60043590600160a060020a038216820361016157565b80548210156118ea5760005260206000200190600090565b60e060020a634e487b7102600052603260045260246000fd5b9181601f840112156101615782359167ffffffffffffffff8311610161576020838186019501011161016157565b9060016002830492168015611965575b602083101461194c57565b60e060020a634e487b7102600052602260045260246000fd5b91607f1691611941565b6101a0810190811067ffffffffffffffff82111761091d57604052565b90601f8019910116810190811067ffffffffffffffff82111761091d57604052565b90604051918260008254926119c284611931565b908184526001948581169081600014611a3157506001146119ee575b50506119ec9250038361198c565b565b9093915060005260209081600020936000915b818310611a195750506119ec935082010138806119de565b85548884018501529485019487945091830191611a01565b9150506119ec94506020925060ff1916828401521515810282010138806119de565b919082519283825260005b848110611a7f575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201611a5e565b600160a060020a03600154163303611aa757565b60246040517f118cdaa7000000000000000000000000000000000000000000000000000000008152336004820152fd5b9190820180921161025157565b67ffffffffffffffff811161091d57601f01601f191660200190565b929192611b0c82611ae4565b91611b1a604051938461198c565b829481845281830111610161578281602093846000960137010152565b908060209392818452848401376000828201840152601f01601f1916010190565b60ff60a060020a6001540416611b6a57565b60046040517fd93c0665000000000000000000000000000000000000000000000000000000008152fd5b15611b9b57565b606460405160e560020a62461bcd02815260206004820152601160248201527f496e76616c696420706f6c6963792049440000000000000000000000000000006044820152fd5b600260005414611bf3576002600055565b60046040517f3ee5aeb5000000000000000000000000000000000000000000000000000000008152fd5b3d15611c48573d90611c2e82611ae4565b91611c3c604051938461198c565b82523d6000602084013e565b606090565b80158015611d65575b611d5f5760005260036020526040600020604051611c738161196f565b600160a060020a038254168152611c8c600183016119ae565b602082015260028201546040820152611ca7600383016119ae565b60608201526004820154608082015260058201549060a08101918252600683015460c0820152600783015460e0820152600a611ce5600885016119ae565b936101009485840152611cfa600982016119ae565b610120840152015460ff6201000081808416151596876101408701528404161592831561016086015204161591610180831591015283611d57575b5082611d4f575b5081611d46575090565b90505142111590565b915038611d3c565b925038611d35565b50600090565b50600254811015611c5656fea2646970667358221220ca28e8724f15ed617665aca0c6259985834c403197ea9f27481b38ad258c9bb164736f6c63430008140033",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [],
  "sourceMap": "476:8133:4:-:0;;;;;;;1857:1:3;2061:21;476:8133:4;2031:10;1273:26:0;1269:95;;1857:1:3;476:8133:4;;2031:10;-1:-1:-1;;;;;;476:8133:4;;;;;;;;;;2031:10;-1:-1:-1;;;;;476:8133:4;3052:40:0;-1:-1:-1;;3052:40:0;1857:1:3;476:8133:4;;;;;;;;;1269:95:0;1322:31;;476:8133:4;1322:31:0;;2061:21:3;1322:31:0;;;476:8133:4;1322:31:0;476:8133:4;;;",
  "deployedSourceMap": "476:8133:4:-:0;;;;;;;;;;-1:-1:-1;476:8133:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;476:8133:4;;;;;1404:35;476:8133;;;;;;;;;;;;;;;;;-1:-1:-1;;476:8133:4;;;;;;:::i;:::-;1500:62:0;;:::i;:::-;-1:-1:-1;;;;;476:8133:4;;;2627:22:0;;;2623:91;;3004:6;476:8133:4;;-1:-1:-1;;;;;476:8133:4;;;;3004:6:0;476:8133:4;;3052:40:0;476:8133:4;3052:40:0;;476:8133:4;2623:91:0;476:8133:4;;;2672:31:0;;;476:8133:4;;2672:31:0;;476:8133:4;2672:31:0;476:8133:4;;;;;;-1:-1:-1;;476:8133:4;;;;7464:12;476:8133;-1:-1:-1;;476:8133:4;;;;;;;;;7495:22;476:8133;7532:21;476:8133;7576:4;7568:21;476:8133;7604:23;476:8133;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;-1:-1:-1;;476:8133:4;;;;1500:62:0;;:::i;:::-;1796:7:2;476:8133:4;;-1:-1:-1;;;476:8133:4;;;;;;;8431:4;;;;-1:-1:-1;;;;;8431:4:4;8423:21;476:8133;;8394:55;;;;:::i;:::-;;476:8133;;;;;;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;476:8133:4;;;;;;;;;;;;;;;;-1:-1:-1;;;;;476:8133:4;;1162:39;;;;;:::i;:::-;;;;;476:8133;;1162:39;;;;;:::i;:::-;;476:8133;1162:39;;476:8133;1162:39;;;;476:8133;1162:39;;;476:8133;1162:39;;;476:8133;1162:39;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;476:8133;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;476:8133:4;;;;;544:24;476:8133;;;;;;;;;;;;;-1:-1:-1;;476:8133:4;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;:::i;:::-;1500:62:0;;;:::i;:::-;1315:72:2;;:::i;:::-;-1:-1:-1;;;;;476:8133:4;;2994:28;476:8133;;;;3068:13;476:8133;;;;3131:18;476:8133;;;;;;3197:30;476:8133;;;3277:29;;476:8133;;3350:27;;476:8133;;3419:27;;476:8133;;;3504:12;476:8133;3545:15;614:8;3545:15;476:8133;3545:15;476:8133;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;476:8133:4;;;;;;;;;:::i;:::-;;3627:502;;476:8133;;;;3627:502;;476:8133;;;;;;:::i;:::-;;3627:502;;476:8133;3545:15;476:8133;3627:502;;476:8133;614:8;3545:15;476:8133;;3627:502;;476:8133;;;;3627:502;;476:8133;;;;3627:502;;476:8133;;;;:::i;:::-;;3627:502;;476:8133;;;;:::i;:::-;3627:502;;;476:8133;;3627:502;;;476:8133;;3627:502;;;476:8133;;3627:502;;;476:8133;;;;;;;;;;-1:-1:-1;;;;;476:8133:4;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;3627:502;;476:8133;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;3504:12;476:8133;;;;3504:12;476:8133;;;;;;;;;;;;;3627:502;;476:8133;3504:12;476:8133;;;;3627:502;;476:8133;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;3504:12;476:8133;;;;3504:12;476:8133;;;;;;;;;;;;;3627:502;;476:8133;;;;;;3627:502;;476:8133;;;;;;3627:502;;476:8133;;;;;;3627:502;;476:8133;;;;;;3627:502;;476:8133;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;3504:12;476:8133;;;;3504:12;476:8133;;;;;;;;;;;;3627:502;;;476:8133;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3504:12;476:8133;;;;3504:12;476:8133;;;;;;;;;;;;;3627:502;;;;476:8133;;;;;;;;;3627:502;476:8133;;3627:502;;;476:8133;;;;;3627:502;;476:8133;;;;;;;;;;;;;;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;3504:12;476:8133;;;;;;;;;;;;;;;;3504:12;476:8133;;;;;;;;-1:-1:-1;;;;;476:8133:4;4253:194;476:8133;;;;;;;3504:12;476:8133;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;:::i;:::-;;;;;;;;614:8;3545:15;476:8133;;;;;;4253:194;;;;476:8133;;;;;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;-1:-1:-1;476:8133:4;;;;;;;;;;;;;;;;;-1:-1:-1;;476:8133:4;;;;;;;;;;3504:12;476:8133;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;476:8133:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;476:8133:4;;;;;;;-1:-1:-1;476:8133:4;;;;;;;;;;;;;;;;;;-1:-1:-1;;476:8133:4;;;;;;;;;;3504:12;476:8133;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;476:8133:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;476:8133:4;;;;;-1:-1:-1;476:8133:4;;;;;;;-1:-1:-1;476:8133:4;;;;;;;;;;;;;;;;;;-1:-1:-1;;476:8133:4;;;;;;;;;;3504:12;476:8133;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;476:8133:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;476:8133:4;;;;;-1:-1:-1;476:8133:4;;;;;;;-1:-1:-1;476:8133:4;;;;;;;;;;;;;;;;;;-1:-1:-1;;476:8133:4;;;;;;;;;;3504:12;476:8133;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;476:8133:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;476:8133:4;;;;;-1:-1:-1;476:8133:4;;;;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;476:8133:4;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;1500:62:0;;:::i;:::-;2145:13:4;;;:41;;;476:8133;2137:71;;;:::i;:::-;2466:103:3;;:::i;:::-;1315:72:2;;:::i;:::-;476:8133:4;;;;;;;;;5533:17;;;;476:8133;;;;;;;;;;;;;;;;;;;5688:17;;;476:8133;691:7;476:8133;;;;;;;5669:15;:51;476:8133;;5810:4;5802:21;5827:19;;;;476:8133;;;5802:44;;;476:8133;;-1:-1:-1;;476:8133:4;;;;5948:44;476:8133;5948:44;;476:8133;5948:44;:::i;:::-;;476:8133;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;6032:90;;;;;:::i;:::-;;476:8133;;;;6193:69;476:8133;;;;;;;;;;;6193:69;476:8133;;;;;;;;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;;;;2145:41;-1:-1:-1;2174:12:4;476:8133;2162:24;;2145:41;;476:8133;;;;;;-1:-1:-1;;476:8133:4;;;;;;;614:8;476:8133;;;;;;;;;;;;;;;;-1:-1:-1;;;;;476:8133:4;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;476:8133:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;476:8133:4;;;;;-1:-1:-1;;;;;1710:6:0;476:8133:4;;;;;;;;;;;;;;-1:-1:-1;;476:8133:4;;;;1500:62:0;;:::i;:::-;1315:72:2;;:::i;:::-;-1:-1:-1;;;476:8133:4;;2408:4:2;476:8133:4;;;2408:4:2;476:8133:4;2427:20:2;476:8133:4;;;735:10:1;476:8133:4;;2427:20:2;476:8133:4;;;;;;;;;;;;;2466:103:3;;:::i;:::-;2145:13:4;;;:41;;;476:8133;2137:71;;;:::i;:::-;476:8133;;;;;;-1:-1:-1;;;;;476:8133:4;;;;;2334:10;2297:47;476:8133;;;;;;;;2473:30;476:8133;;;2473:30;476:8133;2454:15;:49;476:8133;;;;;;;;;;2542:29;476:8133;;;2542:29;476:8133;;;;;1315:72:2;;:::i;:::-;476:8133:4;;;;;;;;;2542:29;4820:17;;476:8133;;;;;;;;;4897:20;;476:8133;4884:9;:33;476:8133;;;;;;;;;;4999:35;4884:9;2473:30;476:8133;4999:35;:::i;:::-;2473:30;476:8133;2542:29;4884:9;476:8133;4884:9;476:8133;;2542:29;476:8133;4884:9;476:8133;;;;;5161:3;5175:35;476:8133;;5175:35;476:8133;5175:35;:::i;:::-;;476:8133;5228:51;476:8133;;4884:9;;476:8133;;2334:10;5228:51;;476:8133;;;;;;;;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;;;;2145:41;-1:-1:-1;2174:12:4;476:8133;2162:24;;2145:41;;476:8133;;;;;;-1:-1:-1;;476:8133:4;;;;;;:::i;:::-;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;1208:48;;;;;476:8133;1208:48;;;;:::i;:::-;476:8133;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;476:8133:4;;;;1500:62:0;;:::i;:::-;476:8133:4;-1:-1:-1;;;;;3004:6:0;476:8133:4;;;;;3004:6:0;476:8133:4;;3052:40:0;;;;476:8133:4;;;;;;;-1:-1:-1;;476:8133:4;;;;1500:62:0;;:::i;:::-;2466:103:3;;:::i;:::-;6776:23:4;476:8133;6776:27;;476:8133;;;;;;;;6776:23;476:8133;-1:-1:-1;;;;;1710:6:0;476:8133:4;;6964:40;;;;:::i;:::-;;476:8133;;;1710:6:0;476:8133:4;;;;;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;476:8133:4;;;;;;-1:-1:-1;;;1796:7:2;476:8133:4;;;;;;;;;;;;;;;;;-1:-1:-1;;476:8133:4;;;;;1364:33;476:8133;;;;;;;;;;;;;-1:-1:-1;;476:8133:4;;;;1500:62:0;;:::i;:::-;1796:7:2;476:8133:4;;-1:-1:-1;;;476:8133:4;;;2140:9:2;2136:62;;476:8133:4;;;1796:7:2;476:8133:4;2674:22:2;476:8133:4;;;735:10:1;476:8133:4;;2674:22:2;476:8133:4;2136:62:2;476:8133:4;;;2172:15:2;;;;476:8133:4;;;;;;-1:-1:-1;;476:8133:4;;;;;1323:34;476:8133;;;;;;;;;;;;;-1:-1:-1;;476:8133:4;;;;;;1500:62:0;;:::i;:::-;2145:13:4;;;:41;;;476:8133;2137:71;;;:::i;:::-;476:8133;;;;;;;;;6488:17;;;476:8133;6470:15;:35;476:8133;;;6552:16;;476:8133;;;;;;;;;;;-1:-1:-1;;476:8133:4;;;;6655:24;476:8133;;6655:24;476:8133;;;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;;;;;2145:41;-1:-1:-1;2174:12:4;476:8133;2162:24;;2145:41;;476:8133;;;;;;-1:-1:-1;;476:8133:4;;;;;691:7;476:8133;;;;;;;;-1:-1:-1;;;;;476:8133:4;;;;;;:::o;:::-;;;;;;;;-1:-1:-1;476:8133:4;;-1:-1:-1;476:8133:4;;;-1:-1:-1;476:8133:4;:::o;:::-;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;:::o;:::-;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;-1:-1:-1;476:8133:4;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:::o;:::-;;;;;-1:-1:-1;476:8133:4;;;;-1:-1:-1;476:8133:4;;-1:-1:-1;476:8133:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;476:8133:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;476:8133:4;;;;;;;;;-1:-1:-1;476:8133:4;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;1796:162:0;-1:-1:-1;;;;;1710:6:0;476:8133:4;;735:10:1;1855:23:0;1851:101;;1796:162::o;1851:101::-;476:8133:4;;;1901:40:0;;;735:10:1;1901:40:0;;;476:8133:4;1901:40:0;476:8133:4;;;;;;;;;;:::o;:::-;;;;;;;;-1:-1:-1;;476:8133:4;;;;:::o;:::-;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;-1:-1:-1;476:8133:4;;;;;;:::o;:::-;;;;;;;;;;;;;-1:-1:-1;476:8133:4;;;;;;;;-1:-1:-1;;476:8133:4;;;;:::o;1878:128:2:-;476:8133:4;-1:-1:-1;;;1796:7:2;476:8133:4;;;1939:61:2;;1878:128::o;1939:61::-;1974:15;476:8133:4;;1974:15:2;;;;476:8133:4;;;;:::o;:::-;;;;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;;;;;;;;;2575:307:3;1899:1;2702:7;476:8133:4;2702:18:3;2698:86;;1899:1;2702:7;476:8133:4;2575:307:3:o;2698:86::-;2743:30;476:8133:4;;2743:30:3;;;;476:8133:4;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;-1:-1:-1;476:8133:4;;;;:::o;:::-;;;:::o;7654:367::-;7738:14;;:43;;;;7654:367;7734:61;;7751:1;476:8133;7829:8;476:8133;;;7751:1;476:8133;;;;;;:::i;:::-;-1:-1:-1;;;;;476:8133:4;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;7829:8;476:8133;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7866:52;;;7654:367;7866:90;;;;7654:367;7866:147;;;;7859:154;7654:367;:::o;7866:147::-;476:8133;;;7977:15;:36;;7654:367;:::o;7866:90::-;;-1:-1:-1;7866:90:4;;;:52;;-1:-1:-1;7866:52:4;;;7734:61;7783:12;7751:1;7783:12;:::o;7738:43::-;476:8133;7769:12;476:8133;7756:25;;;7738:43;",
  "source": "\r\n// SPDX-License-Identifier: MIT\r\npragma solidity ^0.8.20;\r\n\r\n// Try these alternative imports if the security folder doesn't exist\r\nimport \"@openzeppelin/contracts/utils/ReentrancyGuard.sol\";\r\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\r\nimport \"@openzeppelin/contracts/utils/Pausable.sol\";\r\n\r\n// OR if that doesn't work, try without the security folder:\r\n// import \"@openzeppelin/contracts/ReentrancyGuard.sol\";\r\n// import \"@openzeppelin/contracts/Pausable.sol\";\r\ncontract CropInsurance is ReentrancyGuard, Ownable, Pausable {\r\n    uint public nextPolicyId;\r\n    uint public constant POLICY_DURATION = 365 days; // 1 year policy duration\r\n    uint public constant CLAIM_PERIOD = 30 days; // Claim period after policy expires\r\n    \r\n    struct Policy {\r\n        address farmerAddress;\r\n        string farmerName;\r\n        uint landSize;\r\n        string cropType;\r\n        uint issueDate;\r\n        uint expiryDate;\r\n        uint premiumAmount;\r\n        uint payoutAmount;\r\n        string insuranceType;\r\n        string location; // Add location for better tracking\r\n        bool isAccepted;\r\n        bool isPaid;\r\n        bool isExpired;\r\n    }\r\n\r\n    mapping(uint => Policy) public policies;\r\n    mapping(address => uint[]) public farmerPolicies; // Track farmer's policies\r\n    \r\n    // Financial tracking\r\n    uint public totalPremiumsCollected;\r\n    uint public totalPayoutsProcessed;\r\n    uint public adminWithdrawableAmount;\r\n\r\n    event PolicyRegistered(\r\n        uint indexed policyId,\r\n        address indexed farmerAddress,\r\n        string farmerName,\r\n        string cropType,\r\n        uint premiumAmount,\r\n        uint expiryDate\r\n    );\r\n    \r\n    event InsuranceAccepted(\r\n        uint indexed policyId, \r\n        address indexed farmerAddress, \r\n        uint premiumPaid\r\n    );\r\n    \r\n    event PayoutTriggered(\r\n        uint indexed policyId, \r\n        address indexed farmerAddress, \r\n        uint payoutAmount\r\n    );\r\n    \r\n    event PolicyExpired(uint indexed policyId);\r\n\r\n    constructor() Ownable(msg.sender){\r\n        nextPolicyId = 1;\r\n    }\r\n\r\n    modifier onlyValidPolicy(uint _policyId) {\r\n        require(_policyId > 0 && _policyId < nextPolicyId, \"Invalid policy ID\");\r\n        _;\r\n    }\r\n\r\n    modifier onlyPolicyFarmer(uint _policyId) {\r\n        require(policies[_policyId].farmerAddress == msg.sender, \"Not policy owner\");\r\n        _;\r\n    }\r\n\r\n    modifier policyNotExpired(uint _policyId) {\r\n        require(block.timestamp <= policies[_policyId].expiryDate, \"Policy expired\");\r\n        require(!policies[_policyId].isExpired, \"Policy marked as expired\");\r\n        _;\r\n    }\r\n\r\n    function registerPolicy(\r\n        address _farmerAddress,\r\n        string calldata _farmerName,\r\n        uint _landSize,\r\n        string calldata _cropType,\r\n        uint _premiumAmount,\r\n        uint _payoutAmount,\r\n        string calldata _insuranceType,\r\n        string calldata _location\r\n    ) external onlyOwner whenNotPaused returns (uint) {\r\n        require(_farmerAddress != address(0), \"Invalid farmer address\");\r\n        require(_landSize > 0, \"Land size must be positive\");\r\n        require(_premiumAmount > 0, \"Premium must be positive\");\r\n        require(_payoutAmount > _premiumAmount, \"Payout must exceed premium\");\r\n        require(bytes(_farmerName).length > 0, \"Farmer name required\");\r\n        require(bytes(_cropType).length > 0, \"Crop type required\");\r\n        require(bytes(_location).length > 0, \"Location required\");\r\n\r\n        uint currentPolicyId = nextPolicyId;\r\n        uint expiryDate = block.timestamp + POLICY_DURATION;\r\n        \r\n        policies[currentPolicyId] = Policy({\r\n            farmerAddress: _farmerAddress,\r\n            farmerName: _farmerName,\r\n            landSize: _landSize,\r\n            cropType: _cropType,\r\n            issueDate: block.timestamp,\r\n            expiryDate: expiryDate,\r\n            premiumAmount: _premiumAmount,\r\n            payoutAmount: _payoutAmount,\r\n            insuranceType: _insuranceType,\r\n            location: _location,\r\n            isAccepted: false,\r\n            isPaid: false,\r\n            isExpired: false\r\n        });\r\n        \r\n        farmerPolicies[_farmerAddress].push(currentPolicyId);\r\n        nextPolicyId++;\r\n        \r\n        emit PolicyRegistered(\r\n            currentPolicyId, \r\n            _farmerAddress, \r\n            _farmerName, \r\n            _cropType, \r\n            _premiumAmount,\r\n            expiryDate\r\n        );\r\n        \r\n        return currentPolicyId;\r\n    }\r\n\r\n    function acceptInsurance(uint _policyId) \r\n        external \r\n        payable \r\n        nonReentrant \r\n        onlyValidPolicy(_policyId)\r\n        onlyPolicyFarmer(_policyId)\r\n        policyNotExpired(_policyId)\r\n        whenNotPaused\r\n    {\r\n        Policy storage policy = policies[_policyId];\r\n        require(!policy.isAccepted, \"Policy already accepted\");\r\n        require(msg.value == policy.premiumAmount, \"Exact premium amount required\");\r\n\r\n        policy.isAccepted = true;\r\n        totalPremiumsCollected += msg.value;\r\n        \r\n        // Admin gets 10% as service fee, rest goes to insurance pool\r\n        uint adminFee = (msg.value * 10) / 100;\r\n        adminWithdrawableAmount += adminFee;\r\n\r\n        emit InsuranceAccepted(_policyId, msg.sender, msg.value);\r\n    }\r\n\r\n    function triggerPayout(uint _policyId) \r\n        external \r\n        onlyOwner \r\n        onlyValidPolicy(_policyId)\r\n        nonReentrant\r\n        whenNotPaused\r\n    {\r\n        Policy storage policy = policies[_policyId];\r\n        require(policy.isAccepted, \"Policy not accepted\");\r\n        require(!policy.isPaid, \"Payout already processed\");\r\n        require(\r\n            block.timestamp <= policy.expiryDate + CLAIM_PERIOD, \r\n            \"Claim period expired\"\r\n        );\r\n        require(\r\n            address(this).balance >= policy.payoutAmount, \r\n            \"Insufficient contract balance\"\r\n        );\r\n\r\n        policy.isPaid = true;\r\n        totalPayoutsProcessed += policy.payoutAmount;\r\n        \r\n        (bool success, ) = payable(policy.farmerAddress).call{\r\n            value: policy.payoutAmount\r\n        }(\"\");\r\n        require(success, \"Payout transfer failed\");\r\n\r\n        emit PayoutTriggered(_policyId, policy.farmerAddress, policy.payoutAmount);\r\n    }\r\n\r\n    function expirePolicy(uint _policyId) \r\n        external \r\n        onlyOwner \r\n        onlyValidPolicy(_policyId)\r\n    {\r\n        Policy storage policy = policies[_policyId];\r\n        require(block.timestamp > policy.expiryDate, \"Policy not yet expired\");\r\n        require(!policy.isExpired, \"Policy already expired\");\r\n        \r\n        policy.isExpired = true;\r\n        emit PolicyExpired(_policyId);\r\n    }\r\n\r\n    function withdrawAdminFunds() external onlyOwner nonReentrant {\r\n        require(adminWithdrawableAmount > 0, \"No funds to withdraw\");\r\n        \r\n        uint amount = adminWithdrawableAmount;\r\n        adminWithdrawableAmount = 0;\r\n        \r\n        (bool success, ) = payable(owner()).call{value: amount}(\"\");\r\n        require(success, \"Withdrawal failed\");\r\n    }\r\n\r\n    // View functions\r\n    function getFarmerPolicies(address _farmer) external view returns (uint[] memory) {\r\n        return farmerPolicies[_farmer];\r\n    }\r\n\r\n    function getContractStats() external view returns (\r\n        uint totalPolicies,\r\n        uint totalPremiums,\r\n        uint totalPayouts,\r\n        uint contractBalance,\r\n        uint adminFunds\r\n    ) {\r\n        return (\r\n            nextPolicyId - 1,\r\n            totalPremiumsCollected,\r\n            totalPayoutsProcessed,\r\n            address(this).balance,\r\n            adminWithdrawableAmount\r\n        );\r\n    }\r\n\r\n    function isPolicyActive(uint _policyId) external view returns (bool) {\r\n        if (_policyId == 0 || _policyId >= nextPolicyId) return false;\r\n        Policy memory policy = policies[_policyId];\r\n        return policy.isAccepted && \r\n               !policy.isPaid && \r\n               !policy.isExpired && \r\n               block.timestamp <= policy.expiryDate;\r\n    }\r\n\r\n    // Emergency functions\r\n    function pause() external onlyOwner {\r\n        _pause();\r\n    }\r\n\r\n    function unpause() external onlyOwner {\r\n        _unpause();\r\n    }\r\n\r\n    // Emergency withdrawal (only if contract is paused)\r\n    function emergencyWithdraw() external onlyOwner {\r\n        require(paused(), \"Contract must be paused\");\r\n        (bool success, ) = payable(owner()).call{value: address(this).balance}(\"\");\r\n        require(success, \"Emergency withdrawal failed\");\r\n    }\r\n\r\n    receive() external payable {\r\n        // Accept ETH deposits to fund payouts\r\n    }\r\n}",
  "sourcePath": "C:\\Users\\dwara\\crop-insurance-app\\smart-contract\\contracts\\CropInsurance.sol",
  "ast": {
    "absolutePath": "project:/contracts/CropInsurance.sol",
    "exportedSymbols": {
      "Context": [
        177
      ],
      "CropInsurance": [
        1060
      ],
      "Ownable": [
        147
      ],
      "Pausable": [
        285
      ],
      "ReentrancyGuard": [
        354
      ]
    },
    "id": 1061,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 356,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ],
        "nodeType": "PragmaDirective",
        "src": "35:24:4"
      },
      {
        "absolutePath": "@openzeppelin/contracts/utils/ReentrancyGuard.sol",
        "file": "@openzeppelin/contracts/utils/ReentrancyGuard.sol",
        "id": 357,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 1061,
        "sourceUnit": 355,
        "src": "134:59:4",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
        "file": "@openzeppelin/contracts/access/Ownable.sol",
        "id": 358,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 1061,
        "sourceUnit": 148,
        "src": "195:52:4",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/utils/Pausable.sol",
        "file": "@openzeppelin/contracts/utils/Pausable.sol",
        "id": 359,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 1061,
        "sourceUnit": 286,
        "src": "249:52:4",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 360,
              "name": "ReentrancyGuard",
              "nameLocations": [
                "502:15:4"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 354,
              "src": "502:15:4"
            },
            "id": 361,
            "nodeType": "InheritanceSpecifier",
            "src": "502:15:4"
          },
          {
            "baseName": {
              "id": 362,
              "name": "Ownable",
              "nameLocations": [
                "519:7:4"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 147,
              "src": "519:7:4"
            },
            "id": 363,
            "nodeType": "InheritanceSpecifier",
            "src": "519:7:4"
          },
          {
            "baseName": {
              "id": 364,
              "name": "Pausable",
              "nameLocations": [
                "528:8:4"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 285,
              "src": "528:8:4"
            },
            "id": 365,
            "nodeType": "InheritanceSpecifier",
            "src": "528:8:4"
          }
        ],
        "canonicalName": "CropInsurance",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 1060,
        "linearizedBaseContracts": [
          1060,
          285,
          147,
          177,
          354
        ],
        "name": "CropInsurance",
        "nameLocation": "485:13:4",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "functionSelector": "cad0b8db",
            "id": 367,
            "mutability": "mutable",
            "name": "nextPolicyId",
            "nameLocation": "556:12:4",
            "nodeType": "VariableDeclaration",
            "scope": 1060,
            "src": "544:24:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 366,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "544:4:4",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "functionSelector": "9b70e2fb",
            "id": 370,
            "mutability": "constant",
            "name": "POLICY_DURATION",
            "nameLocation": "596:15:4",
            "nodeType": "VariableDeclaration",
            "scope": 1060,
            "src": "575:47:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 368,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "575:4:4",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333635",
              "id": 369,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "614:8:4",
              "subdenomination": "days",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_31536000_by_1",
                "typeString": "int_const 31536000"
              },
              "value": "365"
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "functionSelector": "21241dfe",
            "id": 373,
            "mutability": "constant",
            "name": "CLAIM_PERIOD",
            "nameLocation": "676:12:4",
            "nodeType": "VariableDeclaration",
            "scope": 1060,
            "src": "655:43:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 371,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "655:4:4",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "3330",
              "id": 372,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "691:7:4",
              "subdenomination": "days",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2592000_by_1",
                "typeString": "int_const 2592000"
              },
              "value": "30"
            },
            "visibility": "public"
          },
          {
            "canonicalName": "CropInsurance.Policy",
            "id": 400,
            "members": [
              {
                "constant": false,
                "id": 375,
                "mutability": "mutable",
                "name": "farmerAddress",
                "nameLocation": "781:13:4",
                "nodeType": "VariableDeclaration",
                "scope": 400,
                "src": "773:21:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 374,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "773:7:4",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 377,
                "mutability": "mutable",
                "name": "farmerName",
                "nameLocation": "812:10:4",
                "nodeType": "VariableDeclaration",
                "scope": 400,
                "src": "805:17:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 376,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "805:6:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 379,
                "mutability": "mutable",
                "name": "landSize",
                "nameLocation": "838:8:4",
                "nodeType": "VariableDeclaration",
                "scope": 400,
                "src": "833:13:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 378,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "833:4:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 381,
                "mutability": "mutable",
                "name": "cropType",
                "nameLocation": "864:8:4",
                "nodeType": "VariableDeclaration",
                "scope": 400,
                "src": "857:15:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 380,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "857:6:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 383,
                "mutability": "mutable",
                "name": "issueDate",
                "nameLocation": "888:9:4",
                "nodeType": "VariableDeclaration",
                "scope": 400,
                "src": "883:14:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 382,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "883:4:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 385,
                "mutability": "mutable",
                "name": "expiryDate",
                "nameLocation": "913:10:4",
                "nodeType": "VariableDeclaration",
                "scope": 400,
                "src": "908:15:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 384,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "908:4:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 387,
                "mutability": "mutable",
                "name": "premiumAmount",
                "nameLocation": "939:13:4",
                "nodeType": "VariableDeclaration",
                "scope": 400,
                "src": "934:18:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 386,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "934:4:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 389,
                "mutability": "mutable",
                "name": "payoutAmount",
                "nameLocation": "968:12:4",
                "nodeType": "VariableDeclaration",
                "scope": 400,
                "src": "963:17:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 388,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "963:4:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 391,
                "mutability": "mutable",
                "name": "insuranceType",
                "nameLocation": "998:13:4",
                "nodeType": "VariableDeclaration",
                "scope": 400,
                "src": "991:20:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 390,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "991:6:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 393,
                "mutability": "mutable",
                "name": "location",
                "nameLocation": "1029:8:4",
                "nodeType": "VariableDeclaration",
                "scope": 400,
                "src": "1022:15:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 392,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "1022:6:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 395,
                "mutability": "mutable",
                "name": "isAccepted",
                "nameLocation": "1089:10:4",
                "nodeType": "VariableDeclaration",
                "scope": 400,
                "src": "1084:15:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 394,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1084:4:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 397,
                "mutability": "mutable",
                "name": "isPaid",
                "nameLocation": "1115:6:4",
                "nodeType": "VariableDeclaration",
                "scope": 400,
                "src": "1110:11:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 396,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1110:4:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 399,
                "mutability": "mutable",
                "name": "isExpired",
                "nameLocation": "1137:9:4",
                "nodeType": "VariableDeclaration",
                "scope": 400,
                "src": "1132:14:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 398,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1132:4:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Policy",
            "nameLocation": "755:6:4",
            "nodeType": "StructDefinition",
            "scope": 1060,
            "src": "748:406:4",
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "d3e89483",
            "id": 405,
            "mutability": "mutable",
            "name": "policies",
            "nameLocation": "1193:8:4",
            "nodeType": "VariableDeclaration",
            "scope": 1060,
            "src": "1162:39:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Policy_$400_storage_$",
              "typeString": "mapping(uint256 => struct CropInsurance.Policy)"
            },
            "typeName": {
              "id": 404,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 401,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "1170:4:4",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "1162:23:4",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Policy_$400_storage_$",
                "typeString": "mapping(uint256 => struct CropInsurance.Policy)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 403,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 402,
                  "name": "Policy",
                  "nameLocations": [
                    "1178:6:4"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 400,
                  "src": "1178:6:4"
                },
                "referencedDeclaration": 400,
                "src": "1178:6:4",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Policy_$400_storage_ptr",
                  "typeString": "struct CropInsurance.Policy"
                }
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "75f89051",
            "id": 410,
            "mutability": "mutable",
            "name": "farmerPolicies",
            "nameLocation": "1242:14:4",
            "nodeType": "VariableDeclaration",
            "scope": 1060,
            "src": "1208:48:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
              "typeString": "mapping(address => uint256[])"
            },
            "typeName": {
              "id": 409,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 406,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1216:7:4",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1208:26:4",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                "typeString": "mapping(address => uint256[])"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "baseType": {
                  "id": 407,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "1227:4:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "id": 408,
                "nodeType": "ArrayTypeName",
                "src": "1227:6:4",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                  "typeString": "uint256[]"
                }
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "3dadde20",
            "id": 412,
            "mutability": "mutable",
            "name": "totalPremiumsCollected",
            "nameLocation": "1335:22:4",
            "nodeType": "VariableDeclaration",
            "scope": 1060,
            "src": "1323:34:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 411,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "1323:4:4",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "496dee76",
            "id": 414,
            "mutability": "mutable",
            "name": "totalPayoutsProcessed",
            "nameLocation": "1376:21:4",
            "nodeType": "VariableDeclaration",
            "scope": 1060,
            "src": "1364:33:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 413,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "1364:4:4",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "fa88ed9d",
            "id": 416,
            "mutability": "mutable",
            "name": "adminWithdrawableAmount",
            "nameLocation": "1416:23:4",
            "nodeType": "VariableDeclaration",
            "scope": 1060,
            "src": "1404:35:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 415,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "1404:4:4",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "anonymous": false,
            "eventSelector": "8387951bdfe67d74dcb3a426eb171d96410dd6e5e615c498f1a61e3d2cdc6a71",
            "id": 430,
            "name": "PolicyRegistered",
            "nameLocation": "1454:16:4",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 429,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 418,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "policyId",
                  "nameLocation": "1494:8:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 430,
                  "src": "1481:21:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 417,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1481:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 420,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "farmerAddress",
                  "nameLocation": "1529:13:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 430,
                  "src": "1513:29:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 419,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1513:7:4",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 422,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "farmerName",
                  "nameLocation": "1560:10:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 430,
                  "src": "1553:17:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 421,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1553:6:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 424,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "cropType",
                  "nameLocation": "1588:8:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 430,
                  "src": "1581:15:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 423,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1581:6:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 426,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "premiumAmount",
                  "nameLocation": "1612:13:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 430,
                  "src": "1607:18:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 425,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1607:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 428,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "expiryDate",
                  "nameLocation": "1641:10:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 430,
                  "src": "1636:15:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 427,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1636:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1470:188:4"
            },
            "src": "1448:211:4"
          },
          {
            "anonymous": false,
            "eventSelector": "6be34a1120241c5f6625e795abf306aa8714d41f93573373e1011f1568122c14",
            "id": 438,
            "name": "InsuranceAccepted",
            "nameLocation": "1677:17:4",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 437,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 432,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "policyId",
                  "nameLocation": "1718:8:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 438,
                  "src": "1705:21:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 431,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1705:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 434,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "farmerAddress",
                  "nameLocation": "1754:13:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 438,
                  "src": "1738:29:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 433,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1738:7:4",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 436,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "premiumPaid",
                  "nameLocation": "1784:11:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 438,
                  "src": "1779:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 435,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1779:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1694:108:4"
            },
            "src": "1671:132:4"
          },
          {
            "anonymous": false,
            "eventSelector": "7884580f743f908c98258afac53f9e0929cd6787b3488df80e096df15409ef8f",
            "id": 446,
            "name": "PayoutTriggered",
            "nameLocation": "1821:15:4",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 445,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 440,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "policyId",
                  "nameLocation": "1860:8:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 446,
                  "src": "1847:21:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 439,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1847:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 442,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "farmerAddress",
                  "nameLocation": "1896:13:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 446,
                  "src": "1880:29:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 441,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1880:7:4",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 444,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "payoutAmount",
                  "nameLocation": "1926:12:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 446,
                  "src": "1921:17:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 443,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1921:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1836:109:4"
            },
            "src": "1815:131:4"
          },
          {
            "anonymous": false,
            "eventSelector": "b22aa541487fc93d989bb5b17d1e3a967f649c4979cfd658c0849e070ae0dca0",
            "id": 450,
            "name": "PolicyExpired",
            "nameLocation": "1964:13:4",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 449,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 448,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "policyId",
                  "nameLocation": "1991:8:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 450,
                  "src": "1978:21:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 447,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1978:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1977:23:4"
            },
            "src": "1958:43:4"
          },
          {
            "body": {
              "id": 461,
              "nodeType": "Block",
              "src": "2042:35:4",
              "statements": [
                {
                  "expression": {
                    "id": 459,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 457,
                      "name": "nextPolicyId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 367,
                      "src": "2053:12:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "31",
                      "id": 458,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2068:1:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "2053:16:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 460,
                  "nodeType": "ExpressionStatement",
                  "src": "2053:16:4"
                }
              ]
            },
            "id": 462,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "expression": {
                      "id": 453,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4294967281,
                      "src": "2031:3:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 454,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "2035:6:4",
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "src": "2031:10:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 455,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 452,
                  "name": "Ownable",
                  "nameLocations": [
                    "2023:7:4"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 147,
                  "src": "2023:7:4"
                },
                "nodeType": "ModifierInvocation",
                "src": "2023:19:4"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 451,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2020:2:4"
            },
            "returnParameters": {
              "id": 456,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2042:0:4"
            },
            "scope": 1060,
            "src": "2009:68:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 478,
              "nodeType": "Block",
              "src": "2126:102:4",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 473,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 469,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 467,
                            "name": "_policyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 464,
                            "src": "2145:9:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 468,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2157:1:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "2145:13:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 472,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 470,
                            "name": "_policyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 464,
                            "src": "2162:9:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "id": 471,
                            "name": "nextPolicyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 367,
                            "src": "2174:12:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2162:24:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "2145:41:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "496e76616c696420706f6c696379204944",
                        "id": 474,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2188:19:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5a518a71c67ad9aa45f0b2ec9d3bd0cea3da308c65915b240c42263822ab5c2",
                          "typeString": "literal_string \"Invalid policy ID\""
                        },
                        "value": "Invalid policy ID"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5a518a71c67ad9aa45f0b2ec9d3bd0cea3da308c65915b240c42263822ab5c2",
                          "typeString": "literal_string \"Invalid policy ID\""
                        }
                      ],
                      "id": 466,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2137:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 475,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2137:71:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 476,
                  "nodeType": "ExpressionStatement",
                  "src": "2137:71:4"
                },
                {
                  "id": 477,
                  "nodeType": "PlaceholderStatement",
                  "src": "2219:1:4"
                }
              ]
            },
            "id": 479,
            "name": "onlyValidPolicy",
            "nameLocation": "2094:15:4",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 465,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 464,
                  "mutability": "mutable",
                  "name": "_policyId",
                  "nameLocation": "2115:9:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 479,
                  "src": "2110:14:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 463,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2110:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2109:16:4"
            },
            "src": "2085:143:4",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 495,
              "nodeType": "Block",
              "src": "2278:107:4",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 490,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "baseExpression": {
                              "id": 484,
                              "name": "policies",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 405,
                              "src": "2297:8:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Policy_$400_storage_$",
                                "typeString": "mapping(uint256 => struct CropInsurance.Policy storage ref)"
                              }
                            },
                            "id": 486,
                            "indexExpression": {
                              "id": 485,
                              "name": "_policyId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 481,
                              "src": "2306:9:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2297:19:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Policy_$400_storage",
                              "typeString": "struct CropInsurance.Policy storage ref"
                            }
                          },
                          "id": 487,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2317:13:4",
                          "memberName": "farmerAddress",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 375,
                          "src": "2297:33:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "expression": {
                            "id": 488,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "2334:3:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 489,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2338:6:4",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "2334:10:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2297:47:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4e6f7420706f6c696379206f776e6572",
                        "id": 491,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2346:18:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_aeef98c871014711956d29bf45ac3fa97a84e928c584213afc461aa2c4a788c5",
                          "typeString": "literal_string \"Not policy owner\""
                        },
                        "value": "Not policy owner"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_aeef98c871014711956d29bf45ac3fa97a84e928c584213afc461aa2c4a788c5",
                          "typeString": "literal_string \"Not policy owner\""
                        }
                      ],
                      "id": 483,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2289:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 492,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2289:76:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 493,
                  "nodeType": "ExpressionStatement",
                  "src": "2289:76:4"
                },
                {
                  "id": 494,
                  "nodeType": "PlaceholderStatement",
                  "src": "2376:1:4"
                }
              ]
            },
            "id": 496,
            "name": "onlyPolicyFarmer",
            "nameLocation": "2245:16:4",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 482,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 481,
                  "mutability": "mutable",
                  "name": "_policyId",
                  "nameLocation": "2267:9:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 496,
                  "src": "2262:14:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 480,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2262:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2261:16:4"
            },
            "src": "2236:149:4",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 521,
              "nodeType": "Block",
              "src": "2435:185:4",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 507,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 501,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967292,
                            "src": "2454:5:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 502,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2460:9:4",
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "src": "2454:15:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "expression": {
                            "baseExpression": {
                              "id": 503,
                              "name": "policies",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 405,
                              "src": "2473:8:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Policy_$400_storage_$",
                                "typeString": "mapping(uint256 => struct CropInsurance.Policy storage ref)"
                              }
                            },
                            "id": 505,
                            "indexExpression": {
                              "id": 504,
                              "name": "_policyId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 498,
                              "src": "2482:9:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2473:19:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Policy_$400_storage",
                              "typeString": "struct CropInsurance.Policy storage ref"
                            }
                          },
                          "id": 506,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2493:10:4",
                          "memberName": "expiryDate",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 385,
                          "src": "2473:30:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2454:49:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "506f6c6963792065787069726564",
                        "id": 508,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2505:16:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_bbad214ed6bf41820a0e702e9e0047c532914978e9be30f76dfaa6ed49d81700",
                          "typeString": "literal_string \"Policy expired\""
                        },
                        "value": "Policy expired"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_bbad214ed6bf41820a0e702e9e0047c532914978e9be30f76dfaa6ed49d81700",
                          "typeString": "literal_string \"Policy expired\""
                        }
                      ],
                      "id": 500,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2446:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 509,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2446:76:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 510,
                  "nodeType": "ExpressionStatement",
                  "src": "2446:76:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 516,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "2541:30:4",
                        "subExpression": {
                          "expression": {
                            "baseExpression": {
                              "id": 512,
                              "name": "policies",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 405,
                              "src": "2542:8:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Policy_$400_storage_$",
                                "typeString": "mapping(uint256 => struct CropInsurance.Policy storage ref)"
                              }
                            },
                            "id": 514,
                            "indexExpression": {
                              "id": 513,
                              "name": "_policyId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 498,
                              "src": "2551:9:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2542:19:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Policy_$400_storage",
                              "typeString": "struct CropInsurance.Policy storage ref"
                            }
                          },
                          "id": 515,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2562:9:4",
                          "memberName": "isExpired",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 399,
                          "src": "2542:29:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "506f6c696379206d61726b65642061732065787069726564",
                        "id": 517,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2573:26:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_45781b31f762b0c5a4d5ab3441cbed749b924f311055d325ca083b28d7e3a59f",
                          "typeString": "literal_string \"Policy marked as expired\""
                        },
                        "value": "Policy marked as expired"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_45781b31f762b0c5a4d5ab3441cbed749b924f311055d325ca083b28d7e3a59f",
                          "typeString": "literal_string \"Policy marked as expired\""
                        }
                      ],
                      "id": 511,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2533:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 518,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2533:67:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 519,
                  "nodeType": "ExpressionStatement",
                  "src": "2533:67:4"
                },
                {
                  "id": 520,
                  "nodeType": "PlaceholderStatement",
                  "src": "2611:1:4"
                }
              ]
            },
            "id": 522,
            "name": "policyNotExpired",
            "nameLocation": "2402:16:4",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 499,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 498,
                  "mutability": "mutable",
                  "name": "_policyId",
                  "nameLocation": "2424:9:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 522,
                  "src": "2419:14:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 497,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2419:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2418:16:4"
            },
            "src": "2393:227:4",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 664,
              "nodeType": "Block",
              "src": "2975:1523:4",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 553,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 548,
                          "name": "_farmerAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 524,
                          "src": "2994:14:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 551,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3020:1:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 550,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3012:7:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 549,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "3012:7:4",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 552,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3012:10:4",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2994:28:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "496e76616c6964206661726d65722061646472657373",
                        "id": 554,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3024:24:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_1fd6eabb0e9133bedb9e89b6e5a0addd58186b59f9d3b1620af501f8684830eb",
                          "typeString": "literal_string \"Invalid farmer address\""
                        },
                        "value": "Invalid farmer address"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_1fd6eabb0e9133bedb9e89b6e5a0addd58186b59f9d3b1620af501f8684830eb",
                          "typeString": "literal_string \"Invalid farmer address\""
                        }
                      ],
                      "id": 547,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2986:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 555,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2986:63:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 556,
                  "nodeType": "ExpressionStatement",
                  "src": "2986:63:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 560,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 558,
                          "name": "_landSize",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 528,
                          "src": "3068:9:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 559,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3080:1:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3068:13:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4c616e642073697a65206d75737420626520706f736974697665",
                        "id": 561,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3083:28:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_d39fb41fe53f266ace2c253b8f18e18e882f189595e70d56473fcba6bbfec7d9",
                          "typeString": "literal_string \"Land size must be positive\""
                        },
                        "value": "Land size must be positive"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_d39fb41fe53f266ace2c253b8f18e18e882f189595e70d56473fcba6bbfec7d9",
                          "typeString": "literal_string \"Land size must be positive\""
                        }
                      ],
                      "id": 557,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "3060:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 562,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3060:52:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 563,
                  "nodeType": "ExpressionStatement",
                  "src": "3060:52:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 567,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 565,
                          "name": "_premiumAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 532,
                          "src": "3131:14:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 566,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3148:1:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3131:18:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5072656d69756d206d75737420626520706f736974697665",
                        "id": 568,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3151:26:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_1b2573bc7700962c6d4dc36d806bd74461bb44a2fa896a094329f3be7c5fb8d8",
                          "typeString": "literal_string \"Premium must be positive\""
                        },
                        "value": "Premium must be positive"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_1b2573bc7700962c6d4dc36d806bd74461bb44a2fa896a094329f3be7c5fb8d8",
                          "typeString": "literal_string \"Premium must be positive\""
                        }
                      ],
                      "id": 564,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "3123:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 569,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3123:55:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 570,
                  "nodeType": "ExpressionStatement",
                  "src": "3123:55:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 574,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 572,
                          "name": "_payoutAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 534,
                          "src": "3197:13:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "id": 573,
                          "name": "_premiumAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 532,
                          "src": "3213:14:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3197:30:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5061796f7574206d75737420657863656564207072656d69756d",
                        "id": 575,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3229:28:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_e836157f24cf7b9201c1be0e700984efa4ab07045e1c72828d92402e82656d92",
                          "typeString": "literal_string \"Payout must exceed premium\""
                        },
                        "value": "Payout must exceed premium"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_e836157f24cf7b9201c1be0e700984efa4ab07045e1c72828d92402e82656d92",
                          "typeString": "literal_string \"Payout must exceed premium\""
                        }
                      ],
                      "id": 571,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "3189:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 576,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3189:69:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 577,
                  "nodeType": "ExpressionStatement",
                  "src": "3189:69:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 585,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 581,
                                "name": "_farmerName",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 526,
                                "src": "3283:11:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_calldata_ptr",
                                  "typeString": "string calldata"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_calldata_ptr",
                                  "typeString": "string calldata"
                                }
                              ],
                              "id": 580,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3277:5:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                "typeString": "type(bytes storage pointer)"
                              },
                              "typeName": {
                                "id": 579,
                                "name": "bytes",
                                "nodeType": "ElementaryTypeName",
                                "src": "3277:5:4",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 582,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3277:18:4",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_calldata_ptr",
                              "typeString": "bytes calldata"
                            }
                          },
                          "id": 583,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3296:6:4",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "3277:25:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 584,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3305:1:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3277:29:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4661726d6572206e616d65207265717569726564",
                        "id": 586,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3308:22:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_28ff58839ae00a31d0b6af58714f6a4df94f3d4417dbed7efd41228d5aa773f3",
                          "typeString": "literal_string \"Farmer name required\""
                        },
                        "value": "Farmer name required"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_28ff58839ae00a31d0b6af58714f6a4df94f3d4417dbed7efd41228d5aa773f3",
                          "typeString": "literal_string \"Farmer name required\""
                        }
                      ],
                      "id": 578,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "3269:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 587,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3269:62:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 588,
                  "nodeType": "ExpressionStatement",
                  "src": "3269:62:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 596,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 592,
                                "name": "_cropType",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 530,
                                "src": "3356:9:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_calldata_ptr",
                                  "typeString": "string calldata"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_calldata_ptr",
                                  "typeString": "string calldata"
                                }
                              ],
                              "id": 591,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3350:5:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                "typeString": "type(bytes storage pointer)"
                              },
                              "typeName": {
                                "id": 590,
                                "name": "bytes",
                                "nodeType": "ElementaryTypeName",
                                "src": "3350:5:4",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 593,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3350:16:4",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_calldata_ptr",
                              "typeString": "bytes calldata"
                            }
                          },
                          "id": 594,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3367:6:4",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "3350:23:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 595,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3376:1:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3350:27:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "43726f702074797065207265717569726564",
                        "id": 597,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3379:20:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_260949873c489d3ee40baae52485e54132c27ce38d722f22ca1fb983b02eebf2",
                          "typeString": "literal_string \"Crop type required\""
                        },
                        "value": "Crop type required"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_260949873c489d3ee40baae52485e54132c27ce38d722f22ca1fb983b02eebf2",
                          "typeString": "literal_string \"Crop type required\""
                        }
                      ],
                      "id": 589,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "3342:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 598,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3342:58:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 599,
                  "nodeType": "ExpressionStatement",
                  "src": "3342:58:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 607,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 603,
                                "name": "_location",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 538,
                                "src": "3425:9:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_calldata_ptr",
                                  "typeString": "string calldata"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_calldata_ptr",
                                  "typeString": "string calldata"
                                }
                              ],
                              "id": 602,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3419:5:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                "typeString": "type(bytes storage pointer)"
                              },
                              "typeName": {
                                "id": 601,
                                "name": "bytes",
                                "nodeType": "ElementaryTypeName",
                                "src": "3419:5:4",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 604,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3419:16:4",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_calldata_ptr",
                              "typeString": "bytes calldata"
                            }
                          },
                          "id": 605,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3436:6:4",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "3419:23:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 606,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3445:1:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3419:27:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4c6f636174696f6e207265717569726564",
                        "id": 608,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3448:19:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_db2cf26a9525d69796a3507fa6cc1db7205da893c1b1abd326a05acff1ebb25c",
                          "typeString": "literal_string \"Location required\""
                        },
                        "value": "Location required"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_db2cf26a9525d69796a3507fa6cc1db7205da893c1b1abd326a05acff1ebb25c",
                          "typeString": "literal_string \"Location required\""
                        }
                      ],
                      "id": 600,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "3411:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 609,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3411:57:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 610,
                  "nodeType": "ExpressionStatement",
                  "src": "3411:57:4"
                },
                {
                  "assignments": [
                    612
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 612,
                      "mutability": "mutable",
                      "name": "currentPolicyId",
                      "nameLocation": "3486:15:4",
                      "nodeType": "VariableDeclaration",
                      "scope": 664,
                      "src": "3481:20:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 611,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3481:4:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 614,
                  "initialValue": {
                    "id": 613,
                    "name": "nextPolicyId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 367,
                    "src": "3504:12:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3481:35:4"
                },
                {
                  "assignments": [
                    616
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 616,
                      "mutability": "mutable",
                      "name": "expiryDate",
                      "nameLocation": "3532:10:4",
                      "nodeType": "VariableDeclaration",
                      "scope": 664,
                      "src": "3527:15:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 615,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3527:4:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 621,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 620,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 617,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967292,
                        "src": "3545:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 618,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3551:9:4",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "3545:15:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "id": 619,
                      "name": "POLICY_DURATION",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 370,
                      "src": "3563:15:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3545:33:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3527:51:4"
                },
                {
                  "expression": {
                    "id": 641,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 622,
                        "name": "policies",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 405,
                        "src": "3599:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Policy_$400_storage_$",
                          "typeString": "mapping(uint256 => struct CropInsurance.Policy storage ref)"
                        }
                      },
                      "id": 624,
                      "indexExpression": {
                        "id": 623,
                        "name": "currentPolicyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 612,
                        "src": "3608:15:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3599:25:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Policy_$400_storage",
                        "typeString": "struct CropInsurance.Policy storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 626,
                          "name": "_farmerAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 524,
                          "src": "3664:14:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 627,
                          "name": "_farmerName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 526,
                          "src": "3705:11:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_calldata_ptr",
                            "typeString": "string calldata"
                          }
                        },
                        {
                          "id": 628,
                          "name": "_landSize",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 528,
                          "src": "3741:9:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 629,
                          "name": "_cropType",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 530,
                          "src": "3775:9:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_calldata_ptr",
                            "typeString": "string calldata"
                          }
                        },
                        {
                          "expression": {
                            "id": 630,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967292,
                            "src": "3810:5:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 631,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3816:9:4",
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "src": "3810:15:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 632,
                          "name": "expiryDate",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 616,
                          "src": "3852:10:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 633,
                          "name": "_premiumAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 532,
                          "src": "3892:14:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 634,
                          "name": "_payoutAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 534,
                          "src": "3935:13:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 635,
                          "name": "_insuranceType",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 536,
                          "src": "3978:14:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_calldata_ptr",
                            "typeString": "string calldata"
                          }
                        },
                        {
                          "id": 636,
                          "name": "_location",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 538,
                          "src": "4017:9:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_calldata_ptr",
                            "typeString": "string calldata"
                          }
                        },
                        {
                          "hexValue": "66616c7365",
                          "id": 637,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4053:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        {
                          "hexValue": "66616c7365",
                          "id": 638,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4081:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        {
                          "hexValue": "66616c7365",
                          "id": 639,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4112:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_string_calldata_ptr",
                            "typeString": "string calldata"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_string_calldata_ptr",
                            "typeString": "string calldata"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_string_calldata_ptr",
                            "typeString": "string calldata"
                          },
                          {
                            "typeIdentifier": "t_string_calldata_ptr",
                            "typeString": "string calldata"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 625,
                        "name": "Policy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 400,
                        "src": "3627:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Policy_$400_storage_ptr_$",
                          "typeString": "type(struct CropInsurance.Policy storage pointer)"
                        }
                      },
                      "id": 640,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "nameLocations": [
                        "3649:13:4",
                        "3693:10:4",
                        "3731:8:4",
                        "3765:8:4",
                        "3799:9:4",
                        "3840:10:4",
                        "3877:13:4",
                        "3921:12:4",
                        "3963:13:4",
                        "4007:8:4",
                        "4041:10:4",
                        "4073:6:4",
                        "4101:9:4"
                      ],
                      "names": [
                        "farmerAddress",
                        "farmerName",
                        "landSize",
                        "cropType",
                        "issueDate",
                        "expiryDate",
                        "premiumAmount",
                        "payoutAmount",
                        "insuranceType",
                        "location",
                        "isAccepted",
                        "isPaid",
                        "isExpired"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "3627:502:4",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Policy_$400_memory_ptr",
                        "typeString": "struct CropInsurance.Policy memory"
                      }
                    },
                    "src": "3599:530:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Policy_$400_storage",
                      "typeString": "struct CropInsurance.Policy storage ref"
                    }
                  },
                  "id": 642,
                  "nodeType": "ExpressionStatement",
                  "src": "3599:530:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 647,
                        "name": "currentPolicyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 612,
                        "src": "4186:15:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "baseExpression": {
                          "id": 643,
                          "name": "farmerPolicies",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 410,
                          "src": "4150:14:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                            "typeString": "mapping(address => uint256[] storage ref)"
                          }
                        },
                        "id": 645,
                        "indexExpression": {
                          "id": 644,
                          "name": "_farmerAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 524,
                          "src": "4165:14:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4150:30:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 646,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4181:4:4",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "4150:35:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_uint256_$dyn_storage_ptr_$_t_uint256_$returns$__$attached_to$_t_array$_t_uint256_$dyn_storage_ptr_$",
                        "typeString": "function (uint256[] storage pointer,uint256)"
                      }
                    },
                    "id": 648,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4150:52:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 649,
                  "nodeType": "ExpressionStatement",
                  "src": "4150:52:4"
                },
                {
                  "expression": {
                    "id": 651,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "4213:14:4",
                    "subExpression": {
                      "id": 650,
                      "name": "nextPolicyId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 367,
                      "src": "4213:12:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 652,
                  "nodeType": "ExpressionStatement",
                  "src": "4213:14:4"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 654,
                        "name": "currentPolicyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 612,
                        "src": "4284:15:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 655,
                        "name": "_farmerAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 524,
                        "src": "4315:14:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 656,
                        "name": "_farmerName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 526,
                        "src": "4345:11:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_calldata_ptr",
                          "typeString": "string calldata"
                        }
                      },
                      {
                        "id": 657,
                        "name": "_cropType",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 530,
                        "src": "4372:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_calldata_ptr",
                          "typeString": "string calldata"
                        }
                      },
                      {
                        "id": 658,
                        "name": "_premiumAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 532,
                        "src": "4397:14:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 659,
                        "name": "expiryDate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 616,
                        "src": "4426:10:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_calldata_ptr",
                          "typeString": "string calldata"
                        },
                        {
                          "typeIdentifier": "t_string_calldata_ptr",
                          "typeString": "string calldata"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 653,
                      "name": "PolicyRegistered",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 430,
                      "src": "4253:16:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,address,string memory,string memory,uint256,uint256)"
                      }
                    },
                    "id": 660,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4253:194:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 661,
                  "nodeType": "EmitStatement",
                  "src": "4248:199:4"
                },
                {
                  "expression": {
                    "id": 662,
                    "name": "currentPolicyId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 612,
                    "src": "4475:15:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 546,
                  "id": 663,
                  "nodeType": "Return",
                  "src": "4468:22:4"
                }
              ]
            },
            "functionSelector": "c5b2910d",
            "id": 665,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 541,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 540,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "2936:9:4"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58,
                  "src": "2936:9:4"
                },
                "nodeType": "ModifierInvocation",
                "src": "2936:9:4"
              },
              {
                "id": 543,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 542,
                  "name": "whenNotPaused",
                  "nameLocations": [
                    "2946:13:4"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 210,
                  "src": "2946:13:4"
                },
                "nodeType": "ModifierInvocation",
                "src": "2946:13:4"
              }
            ],
            "name": "registerPolicy",
            "nameLocation": "2637:14:4",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 539,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 524,
                  "mutability": "mutable",
                  "name": "_farmerAddress",
                  "nameLocation": "2670:14:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 665,
                  "src": "2662:22:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 523,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2662:7:4",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 526,
                  "mutability": "mutable",
                  "name": "_farmerName",
                  "nameLocation": "2711:11:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 665,
                  "src": "2695:27:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 525,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2695:6:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 528,
                  "mutability": "mutable",
                  "name": "_landSize",
                  "nameLocation": "2738:9:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 665,
                  "src": "2733:14:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 527,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2733:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 530,
                  "mutability": "mutable",
                  "name": "_cropType",
                  "nameLocation": "2774:9:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 665,
                  "src": "2758:25:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 529,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2758:6:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 532,
                  "mutability": "mutable",
                  "name": "_premiumAmount",
                  "nameLocation": "2799:14:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 665,
                  "src": "2794:19:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 531,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2794:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 534,
                  "mutability": "mutable",
                  "name": "_payoutAmount",
                  "nameLocation": "2829:13:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 665,
                  "src": "2824:18:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 533,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2824:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 536,
                  "mutability": "mutable",
                  "name": "_insuranceType",
                  "nameLocation": "2869:14:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 665,
                  "src": "2853:30:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 535,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2853:6:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 538,
                  "mutability": "mutable",
                  "name": "_location",
                  "nameLocation": "2910:9:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 665,
                  "src": "2894:25:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 537,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2894:6:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2651:275:4"
            },
            "returnParameters": {
              "id": 546,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 545,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 665,
                  "src": "2969:4:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 544,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2969:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2968:6:4"
            },
            "scope": 1060,
            "src": "2628:1870:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 739,
              "nodeType": "Block",
              "src": "4746:541:4",
              "statements": [
                {
                  "assignments": [
                    685
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 685,
                      "mutability": "mutable",
                      "name": "policy",
                      "nameLocation": "4772:6:4",
                      "nodeType": "VariableDeclaration",
                      "scope": 739,
                      "src": "4757:21:4",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Policy_$400_storage_ptr",
                        "typeString": "struct CropInsurance.Policy"
                      },
                      "typeName": {
                        "id": 684,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 683,
                          "name": "Policy",
                          "nameLocations": [
                            "4757:6:4"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 400,
                          "src": "4757:6:4"
                        },
                        "referencedDeclaration": 400,
                        "src": "4757:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Policy_$400_storage_ptr",
                          "typeString": "struct CropInsurance.Policy"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 689,
                  "initialValue": {
                    "baseExpression": {
                      "id": 686,
                      "name": "policies",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 405,
                      "src": "4781:8:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Policy_$400_storage_$",
                        "typeString": "mapping(uint256 => struct CropInsurance.Policy storage ref)"
                      }
                    },
                    "id": 688,
                    "indexExpression": {
                      "id": 687,
                      "name": "_policyId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 667,
                      "src": "4790:9:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "4781:19:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Policy_$400_storage",
                      "typeString": "struct CropInsurance.Policy storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4757:43:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 693,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "4819:18:4",
                        "subExpression": {
                          "expression": {
                            "id": 691,
                            "name": "policy",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 685,
                            "src": "4820:6:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Policy_$400_storage_ptr",
                              "typeString": "struct CropInsurance.Policy storage pointer"
                            }
                          },
                          "id": 692,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4827:10:4",
                          "memberName": "isAccepted",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 395,
                          "src": "4820:17:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "506f6c69637920616c7265616479206163636570746564",
                        "id": 694,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4839:25:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_532042e99375d5d292358ec345a011a96dd999b7ee2b97fa8ec993bc01f90257",
                          "typeString": "literal_string \"Policy already accepted\""
                        },
                        "value": "Policy already accepted"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_532042e99375d5d292358ec345a011a96dd999b7ee2b97fa8ec993bc01f90257",
                          "typeString": "literal_string \"Policy already accepted\""
                        }
                      ],
                      "id": 690,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "4811:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 695,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4811:54:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 696,
                  "nodeType": "ExpressionStatement",
                  "src": "4811:54:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 702,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 698,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "4884:3:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 699,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4888:5:4",
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "src": "4884:9:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "expression": {
                            "id": 700,
                            "name": "policy",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 685,
                            "src": "4897:6:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Policy_$400_storage_ptr",
                              "typeString": "struct CropInsurance.Policy storage pointer"
                            }
                          },
                          "id": 701,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4904:13:4",
                          "memberName": "premiumAmount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 387,
                          "src": "4897:20:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4884:33:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4578616374207072656d69756d20616d6f756e74207265717569726564",
                        "id": 703,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4919:31:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_27713c0323cdeda1add4b5c984d58ac876c529ceaaadc3f753ca8a21283de1b7",
                          "typeString": "literal_string \"Exact premium amount required\""
                        },
                        "value": "Exact premium amount required"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_27713c0323cdeda1add4b5c984d58ac876c529ceaaadc3f753ca8a21283de1b7",
                          "typeString": "literal_string \"Exact premium amount required\""
                        }
                      ],
                      "id": 697,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "4876:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 704,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4876:75:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 705,
                  "nodeType": "ExpressionStatement",
                  "src": "4876:75:4"
                },
                {
                  "expression": {
                    "id": 710,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 706,
                        "name": "policy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 685,
                        "src": "4964:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Policy_$400_storage_ptr",
                          "typeString": "struct CropInsurance.Policy storage pointer"
                        }
                      },
                      "id": 708,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4971:10:4",
                      "memberName": "isAccepted",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 395,
                      "src": "4964:17:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 709,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4984:4:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "4964:24:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 711,
                  "nodeType": "ExpressionStatement",
                  "src": "4964:24:4"
                },
                {
                  "expression": {
                    "id": 715,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 712,
                      "name": "totalPremiumsCollected",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 412,
                      "src": "4999:22:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "expression": {
                        "id": 713,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967281,
                        "src": "5025:3:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 714,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5029:5:4",
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "src": "5025:9:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4999:35:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 716,
                  "nodeType": "ExpressionStatement",
                  "src": "4999:35:4"
                },
                {
                  "assignments": [
                    718
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 718,
                      "mutability": "mutable",
                      "name": "adminFee",
                      "nameLocation": "5131:8:4",
                      "nodeType": "VariableDeclaration",
                      "scope": 739,
                      "src": "5126:13:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 717,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "5126:4:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 726,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 725,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 722,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 719,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "5143:3:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 720,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5147:5:4",
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "src": "5143:9:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "hexValue": "3130",
                            "id": 721,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5155:2:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "src": "5143:14:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 723,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "5142:16:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "hexValue": "313030",
                      "id": 724,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5161:3:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_100_by_1",
                        "typeString": "int_const 100"
                      },
                      "value": "100"
                    },
                    "src": "5142:22:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5126:38:4"
                },
                {
                  "expression": {
                    "id": 729,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 727,
                      "name": "adminWithdrawableAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 416,
                      "src": "5175:23:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 728,
                      "name": "adminFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 718,
                      "src": "5202:8:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5175:35:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 730,
                  "nodeType": "ExpressionStatement",
                  "src": "5175:35:4"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 732,
                        "name": "_policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 667,
                        "src": "5246:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 733,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "5257:3:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 734,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5261:6:4",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "5257:10:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 735,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "5269:3:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 736,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5273:5:4",
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "src": "5269:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 731,
                      "name": "InsuranceAccepted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 438,
                      "src": "5228:17:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,address,uint256)"
                      }
                    },
                    "id": 737,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5228:51:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 738,
                  "nodeType": "EmitStatement",
                  "src": "5223:56:4"
                }
              ]
            },
            "functionSelector": "76653b3a",
            "id": 740,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 670,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 669,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "4594:12:4"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 318,
                  "src": "4594:12:4"
                },
                "nodeType": "ModifierInvocation",
                "src": "4594:12:4"
              },
              {
                "arguments": [
                  {
                    "id": 672,
                    "name": "_policyId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 667,
                    "src": "4633:9:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 673,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 671,
                  "name": "onlyValidPolicy",
                  "nameLocations": [
                    "4617:15:4"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 479,
                  "src": "4617:15:4"
                },
                "nodeType": "ModifierInvocation",
                "src": "4617:26:4"
              },
              {
                "arguments": [
                  {
                    "id": 675,
                    "name": "_policyId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 667,
                    "src": "4670:9:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 676,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 674,
                  "name": "onlyPolicyFarmer",
                  "nameLocations": [
                    "4653:16:4"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 496,
                  "src": "4653:16:4"
                },
                "nodeType": "ModifierInvocation",
                "src": "4653:27:4"
              },
              {
                "arguments": [
                  {
                    "id": 678,
                    "name": "_policyId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 667,
                    "src": "4707:9:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 679,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 677,
                  "name": "policyNotExpired",
                  "nameLocations": [
                    "4690:16:4"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 522,
                  "src": "4690:16:4"
                },
                "nodeType": "ModifierInvocation",
                "src": "4690:27:4"
              },
              {
                "id": 681,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 680,
                  "name": "whenNotPaused",
                  "nameLocations": [
                    "4727:13:4"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 210,
                  "src": "4727:13:4"
                },
                "nodeType": "ModifierInvocation",
                "src": "4727:13:4"
              }
            ],
            "name": "acceptInsurance",
            "nameLocation": "4515:15:4",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 668,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 667,
                  "mutability": "mutable",
                  "name": "_policyId",
                  "nameLocation": "4536:9:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 740,
                  "src": "4531:14:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 666,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4531:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4530:16:4"
            },
            "returnParameters": {
              "id": 682,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4746:0:4"
            },
            "scope": 1060,
            "src": "4506:781:4",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 835,
              "nodeType": "Block",
              "src": "5460:810:4",
              "statements": [
                {
                  "assignments": [
                    756
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 756,
                      "mutability": "mutable",
                      "name": "policy",
                      "nameLocation": "5486:6:4",
                      "nodeType": "VariableDeclaration",
                      "scope": 835,
                      "src": "5471:21:4",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Policy_$400_storage_ptr",
                        "typeString": "struct CropInsurance.Policy"
                      },
                      "typeName": {
                        "id": 755,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 754,
                          "name": "Policy",
                          "nameLocations": [
                            "5471:6:4"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 400,
                          "src": "5471:6:4"
                        },
                        "referencedDeclaration": 400,
                        "src": "5471:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Policy_$400_storage_ptr",
                          "typeString": "struct CropInsurance.Policy"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 760,
                  "initialValue": {
                    "baseExpression": {
                      "id": 757,
                      "name": "policies",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 405,
                      "src": "5495:8:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Policy_$400_storage_$",
                        "typeString": "mapping(uint256 => struct CropInsurance.Policy storage ref)"
                      }
                    },
                    "id": 759,
                    "indexExpression": {
                      "id": 758,
                      "name": "_policyId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 742,
                      "src": "5504:9:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "5495:19:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Policy_$400_storage",
                      "typeString": "struct CropInsurance.Policy storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5471:43:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 762,
                          "name": "policy",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 756,
                          "src": "5533:6:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Policy_$400_storage_ptr",
                            "typeString": "struct CropInsurance.Policy storage pointer"
                          }
                        },
                        "id": 763,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5540:10:4",
                        "memberName": "isAccepted",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 395,
                        "src": "5533:17:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "506f6c696379206e6f74206163636570746564",
                        "id": 764,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5552:21:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_6d2fa9243ff2b16b0457491f729546a13457da5443b4050e843dd0226645b757",
                          "typeString": "literal_string \"Policy not accepted\""
                        },
                        "value": "Policy not accepted"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_6d2fa9243ff2b16b0457491f729546a13457da5443b4050e843dd0226645b757",
                          "typeString": "literal_string \"Policy not accepted\""
                        }
                      ],
                      "id": 761,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "5525:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 765,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5525:49:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 766,
                  "nodeType": "ExpressionStatement",
                  "src": "5525:49:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 770,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "5593:14:4",
                        "subExpression": {
                          "expression": {
                            "id": 768,
                            "name": "policy",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 756,
                            "src": "5594:6:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Policy_$400_storage_ptr",
                              "typeString": "struct CropInsurance.Policy storage pointer"
                            }
                          },
                          "id": 769,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5601:6:4",
                          "memberName": "isPaid",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 397,
                          "src": "5594:13:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5061796f757420616c72656164792070726f636573736564",
                        "id": 771,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5609:26:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f54947460f3c5ed63ec51da5aba0bfb5aafbc85ac94a1eb44438c9cc9bb52adf",
                          "typeString": "literal_string \"Payout already processed\""
                        },
                        "value": "Payout already processed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_f54947460f3c5ed63ec51da5aba0bfb5aafbc85ac94a1eb44438c9cc9bb52adf",
                          "typeString": "literal_string \"Payout already processed\""
                        }
                      ],
                      "id": 767,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "5585:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 772,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5585:51:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 773,
                  "nodeType": "ExpressionStatement",
                  "src": "5585:51:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 781,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 775,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967292,
                            "src": "5669:5:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 776,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5675:9:4",
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "src": "5669:15:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 780,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 777,
                              "name": "policy",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 756,
                              "src": "5688:6:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Policy_$400_storage_ptr",
                                "typeString": "struct CropInsurance.Policy storage pointer"
                              }
                            },
                            "id": 778,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5695:10:4",
                            "memberName": "expiryDate",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 385,
                            "src": "5688:17:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "id": 779,
                            "name": "CLAIM_PERIOD",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 373,
                            "src": "5708:12:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5688:32:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5669:51:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "436c61696d20706572696f642065787069726564",
                        "id": 782,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5736:22:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a21ad5bf28bd9ae5960f1817082a65703f8b88715f801f4edfe94f24b23ee712",
                          "typeString": "literal_string \"Claim period expired\""
                        },
                        "value": "Claim period expired"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a21ad5bf28bd9ae5960f1817082a65703f8b88715f801f4edfe94f24b23ee712",
                          "typeString": "literal_string \"Claim period expired\""
                        }
                      ],
                      "id": 774,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "5647:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 783,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5647:122:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 784,
                  "nodeType": "ExpressionStatement",
                  "src": "5647:122:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 793,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 788,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967268,
                                "src": "5810:4:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_CropInsurance_$1060",
                                  "typeString": "contract CropInsurance"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_CropInsurance_$1060",
                                  "typeString": "contract CropInsurance"
                                }
                              ],
                              "id": 787,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "5802:7:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 786,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "5802:7:4",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 789,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5802:13:4",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 790,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5816:7:4",
                          "memberName": "balance",
                          "nodeType": "MemberAccess",
                          "src": "5802:21:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "expression": {
                            "id": 791,
                            "name": "policy",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 756,
                            "src": "5827:6:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Policy_$400_storage_ptr",
                              "typeString": "struct CropInsurance.Policy storage pointer"
                            }
                          },
                          "id": 792,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5834:12:4",
                          "memberName": "payoutAmount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 389,
                          "src": "5827:19:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5802:44:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "496e73756666696369656e7420636f6e74726163742062616c616e6365",
                        "id": 794,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5862:31:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_ec83fd00432662dbf5dd2aac1f81c346fbe87acecf7cd3f016ab25f549f71749",
                          "typeString": "literal_string \"Insufficient contract balance\""
                        },
                        "value": "Insufficient contract balance"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_ec83fd00432662dbf5dd2aac1f81c346fbe87acecf7cd3f016ab25f549f71749",
                          "typeString": "literal_string \"Insufficient contract balance\""
                        }
                      ],
                      "id": 785,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "5780:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 795,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5780:124:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 796,
                  "nodeType": "ExpressionStatement",
                  "src": "5780:124:4"
                },
                {
                  "expression": {
                    "id": 801,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 797,
                        "name": "policy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 756,
                        "src": "5917:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Policy_$400_storage_ptr",
                          "typeString": "struct CropInsurance.Policy storage pointer"
                        }
                      },
                      "id": 799,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "5924:6:4",
                      "memberName": "isPaid",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 397,
                      "src": "5917:13:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 800,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5933:4:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "5917:20:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 802,
                  "nodeType": "ExpressionStatement",
                  "src": "5917:20:4"
                },
                {
                  "expression": {
                    "id": 806,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 803,
                      "name": "totalPayoutsProcessed",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 414,
                      "src": "5948:21:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "expression": {
                        "id": 804,
                        "name": "policy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 756,
                        "src": "5973:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Policy_$400_storage_ptr",
                          "typeString": "struct CropInsurance.Policy storage pointer"
                        }
                      },
                      "id": 805,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5980:12:4",
                      "memberName": "payoutAmount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 389,
                      "src": "5973:19:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5948:44:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 807,
                  "nodeType": "ExpressionStatement",
                  "src": "5948:44:4"
                },
                {
                  "assignments": [
                    809,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 809,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "6019:7:4",
                      "nodeType": "VariableDeclaration",
                      "scope": 835,
                      "src": "6014:12:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 808,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "6014:4:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 821,
                  "initialValue": {
                    "arguments": [
                      {
                        "hexValue": "",
                        "id": 819,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6119:2:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          }
                        ],
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 812,
                                "name": "policy",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 756,
                                "src": "6040:6:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Policy_$400_storage_ptr",
                                  "typeString": "struct CropInsurance.Policy storage pointer"
                                }
                              },
                              "id": 813,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "6047:13:4",
                              "memberName": "farmerAddress",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 375,
                              "src": "6040:20:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 811,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6032:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_payable_$",
                              "typeString": "type(address payable)"
                            },
                            "typeName": {
                              "id": 810,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "6032:8:4",
                              "stateMutability": "payable",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 814,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6032:29:4",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "id": 815,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6062:4:4",
                        "memberName": "call",
                        "nodeType": "MemberAccess",
                        "src": "6032:34:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                          "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                        }
                      },
                      "id": 818,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "names": [
                        "value"
                      ],
                      "nodeType": "FunctionCallOptions",
                      "options": [
                        {
                          "expression": {
                            "id": 816,
                            "name": "policy",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 756,
                            "src": "6088:6:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Policy_$400_storage_ptr",
                              "typeString": "struct CropInsurance.Policy storage pointer"
                            }
                          },
                          "id": 817,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6095:12:4",
                          "memberName": "payoutAmount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 389,
                          "src": "6088:19:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "src": "6032:86:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 820,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6032:90:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6013:109:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 823,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 809,
                        "src": "6141:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5061796f7574207472616e73666572206661696c6564",
                        "id": 824,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6150:24:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_df47d9a2b93002a4b526fa8046117549d9ba4340c3ddd5b0b8f0128771bf7cf7",
                          "typeString": "literal_string \"Payout transfer failed\""
                        },
                        "value": "Payout transfer failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_df47d9a2b93002a4b526fa8046117549d9ba4340c3ddd5b0b8f0128771bf7cf7",
                          "typeString": "literal_string \"Payout transfer failed\""
                        }
                      ],
                      "id": 822,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "6133:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 825,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6133:42:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 826,
                  "nodeType": "ExpressionStatement",
                  "src": "6133:42:4"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 828,
                        "name": "_policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 742,
                        "src": "6209:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 829,
                          "name": "policy",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 756,
                          "src": "6220:6:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Policy_$400_storage_ptr",
                            "typeString": "struct CropInsurance.Policy storage pointer"
                          }
                        },
                        "id": 830,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6227:13:4",
                        "memberName": "farmerAddress",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 375,
                        "src": "6220:20:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 831,
                          "name": "policy",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 756,
                          "src": "6242:6:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Policy_$400_storage_ptr",
                            "typeString": "struct CropInsurance.Policy storage pointer"
                          }
                        },
                        "id": 832,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6249:12:4",
                        "memberName": "payoutAmount",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 389,
                        "src": "6242:19:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 827,
                      "name": "PayoutTriggered",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 446,
                      "src": "6193:15:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,address,uint256)"
                      }
                    },
                    "id": 833,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6193:69:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 834,
                  "nodeType": "EmitStatement",
                  "src": "6188:74:4"
                }
              ]
            },
            "functionSelector": "b1b358d4",
            "id": 836,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 745,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 744,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "5363:9:4"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58,
                  "src": "5363:9:4"
                },
                "nodeType": "ModifierInvocation",
                "src": "5363:9:4"
              },
              {
                "arguments": [
                  {
                    "id": 747,
                    "name": "_policyId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 742,
                    "src": "5399:9:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 748,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 746,
                  "name": "onlyValidPolicy",
                  "nameLocations": [
                    "5383:15:4"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 479,
                  "src": "5383:15:4"
                },
                "nodeType": "ModifierInvocation",
                "src": "5383:26:4"
              },
              {
                "id": 750,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 749,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "5419:12:4"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 318,
                  "src": "5419:12:4"
                },
                "nodeType": "ModifierInvocation",
                "src": "5419:12:4"
              },
              {
                "id": 752,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 751,
                  "name": "whenNotPaused",
                  "nameLocations": [
                    "5441:13:4"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 210,
                  "src": "5441:13:4"
                },
                "nodeType": "ModifierInvocation",
                "src": "5441:13:4"
              }
            ],
            "name": "triggerPayout",
            "nameLocation": "5304:13:4",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 743,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 742,
                  "mutability": "mutable",
                  "name": "_policyId",
                  "nameLocation": "5323:9:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 836,
                  "src": "5318:14:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 741,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "5318:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5317:16:4"
            },
            "returnParameters": {
              "id": 753,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5460:0:4"
            },
            "scope": 1060,
            "src": "5295:975:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 879,
              "nodeType": "Block",
              "src": "6397:290:4",
              "statements": [
                {
                  "assignments": [
                    848
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 848,
                      "mutability": "mutable",
                      "name": "policy",
                      "nameLocation": "6423:6:4",
                      "nodeType": "VariableDeclaration",
                      "scope": 879,
                      "src": "6408:21:4",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Policy_$400_storage_ptr",
                        "typeString": "struct CropInsurance.Policy"
                      },
                      "typeName": {
                        "id": 847,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 846,
                          "name": "Policy",
                          "nameLocations": [
                            "6408:6:4"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 400,
                          "src": "6408:6:4"
                        },
                        "referencedDeclaration": 400,
                        "src": "6408:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Policy_$400_storage_ptr",
                          "typeString": "struct CropInsurance.Policy"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 852,
                  "initialValue": {
                    "baseExpression": {
                      "id": 849,
                      "name": "policies",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 405,
                      "src": "6432:8:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Policy_$400_storage_$",
                        "typeString": "mapping(uint256 => struct CropInsurance.Policy storage ref)"
                      }
                    },
                    "id": 851,
                    "indexExpression": {
                      "id": 850,
                      "name": "_policyId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 838,
                      "src": "6441:9:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "6432:19:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Policy_$400_storage",
                      "typeString": "struct CropInsurance.Policy storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6408:43:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 858,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 854,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967292,
                            "src": "6470:5:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 855,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6476:9:4",
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "src": "6470:15:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "expression": {
                            "id": 856,
                            "name": "policy",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 848,
                            "src": "6488:6:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Policy_$400_storage_ptr",
                              "typeString": "struct CropInsurance.Policy storage pointer"
                            }
                          },
                          "id": 857,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6495:10:4",
                          "memberName": "expiryDate",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 385,
                          "src": "6488:17:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6470:35:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "506f6c696379206e6f74207965742065787069726564",
                        "id": 859,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6507:24:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_59ba7ad24a2e4d3b02d602c2853e2948a8aa77adaea2d45d2920960e1c5e5d9b",
                          "typeString": "literal_string \"Policy not yet expired\""
                        },
                        "value": "Policy not yet expired"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_59ba7ad24a2e4d3b02d602c2853e2948a8aa77adaea2d45d2920960e1c5e5d9b",
                          "typeString": "literal_string \"Policy not yet expired\""
                        }
                      ],
                      "id": 853,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "6462:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 860,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6462:70:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 861,
                  "nodeType": "ExpressionStatement",
                  "src": "6462:70:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 865,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "6551:17:4",
                        "subExpression": {
                          "expression": {
                            "id": 863,
                            "name": "policy",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 848,
                            "src": "6552:6:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Policy_$400_storage_ptr",
                              "typeString": "struct CropInsurance.Policy storage pointer"
                            }
                          },
                          "id": 864,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6559:9:4",
                          "memberName": "isExpired",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 399,
                          "src": "6552:16:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "506f6c69637920616c72656164792065787069726564",
                        "id": 866,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6570:24:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_11de806b5d1d99d2e8a2baa899b5bab4354d881ca8d4e69710bc1fa7d6e9ef95",
                          "typeString": "literal_string \"Policy already expired\""
                        },
                        "value": "Policy already expired"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_11de806b5d1d99d2e8a2baa899b5bab4354d881ca8d4e69710bc1fa7d6e9ef95",
                          "typeString": "literal_string \"Policy already expired\""
                        }
                      ],
                      "id": 862,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "6543:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 867,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6543:52:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 868,
                  "nodeType": "ExpressionStatement",
                  "src": "6543:52:4"
                },
                {
                  "expression": {
                    "id": 873,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 869,
                        "name": "policy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 848,
                        "src": "6616:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Policy_$400_storage_ptr",
                          "typeString": "struct CropInsurance.Policy storage pointer"
                        }
                      },
                      "id": 871,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "6623:9:4",
                      "memberName": "isExpired",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 399,
                      "src": "6616:16:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 872,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6635:4:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "6616:23:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 874,
                  "nodeType": "ExpressionStatement",
                  "src": "6616:23:4"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 876,
                        "name": "_policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 838,
                        "src": "6669:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 875,
                      "name": "PolicyExpired",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 450,
                      "src": "6655:13:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 877,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6655:24:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 878,
                  "nodeType": "EmitStatement",
                  "src": "6650:29:4"
                }
              ]
            },
            "functionSelector": "3037e4cd",
            "id": 880,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 841,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 840,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "6345:9:4"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58,
                  "src": "6345:9:4"
                },
                "nodeType": "ModifierInvocation",
                "src": "6345:9:4"
              },
              {
                "arguments": [
                  {
                    "id": 843,
                    "name": "_policyId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 838,
                    "src": "6381:9:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 844,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 842,
                  "name": "onlyValidPolicy",
                  "nameLocations": [
                    "6365:15:4"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 479,
                  "src": "6365:15:4"
                },
                "nodeType": "ModifierInvocation",
                "src": "6365:26:4"
              }
            ],
            "name": "expirePolicy",
            "nameLocation": "6287:12:4",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 839,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 838,
                  "mutability": "mutable",
                  "name": "_policyId",
                  "nameLocation": "6305:9:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 880,
                  "src": "6300:14:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 837,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "6300:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6299:16:4"
            },
            "returnParameters": {
              "id": 845,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6397:0:4"
            },
            "scope": 1060,
            "src": "6278:409:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 920,
              "nodeType": "Block",
              "src": "6757:303:4",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 890,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 888,
                          "name": "adminWithdrawableAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 416,
                          "src": "6776:23:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 889,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6802:1:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "6776:27:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4e6f2066756e647320746f207769746864726177",
                        "id": 891,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6805:22:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_4b4cc99522fdcee4d97d6d2d3cbabeb353d40433850bd46ba29c08dbfba843f9",
                          "typeString": "literal_string \"No funds to withdraw\""
                        },
                        "value": "No funds to withdraw"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_4b4cc99522fdcee4d97d6d2d3cbabeb353d40433850bd46ba29c08dbfba843f9",
                          "typeString": "literal_string \"No funds to withdraw\""
                        }
                      ],
                      "id": 887,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "6768:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 892,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6768:60:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 893,
                  "nodeType": "ExpressionStatement",
                  "src": "6768:60:4"
                },
                {
                  "assignments": [
                    895
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 895,
                      "mutability": "mutable",
                      "name": "amount",
                      "nameLocation": "6854:6:4",
                      "nodeType": "VariableDeclaration",
                      "scope": 920,
                      "src": "6849:11:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 894,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "6849:4:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 897,
                  "initialValue": {
                    "id": 896,
                    "name": "adminWithdrawableAmount",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 416,
                    "src": "6863:23:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6849:37:4"
                },
                {
                  "expression": {
                    "id": 900,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 898,
                      "name": "adminWithdrawableAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 416,
                      "src": "6897:23:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "30",
                      "id": 899,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6923:1:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "6897:27:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 901,
                  "nodeType": "ExpressionStatement",
                  "src": "6897:27:4"
                },
                {
                  "assignments": [
                    903,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 903,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "6951:7:4",
                      "nodeType": "VariableDeclaration",
                      "scope": 920,
                      "src": "6946:12:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 902,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "6946:4:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 914,
                  "initialValue": {
                    "arguments": [
                      {
                        "hexValue": "",
                        "id": 912,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7001:2:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          }
                        ],
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 906,
                                "name": "owner",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 67,
                                "src": "6972:5:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                  "typeString": "function () view returns (address)"
                                }
                              },
                              "id": 907,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6972:7:4",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 905,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6964:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_payable_$",
                              "typeString": "type(address payable)"
                            },
                            "typeName": {
                              "id": 904,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "6964:8:4",
                              "stateMutability": "payable",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 908,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6964:16:4",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "id": 909,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6981:4:4",
                        "memberName": "call",
                        "nodeType": "MemberAccess",
                        "src": "6964:21:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                          "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                        }
                      },
                      "id": 911,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "names": [
                        "value"
                      ],
                      "nodeType": "FunctionCallOptions",
                      "options": [
                        {
                          "id": 910,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 895,
                          "src": "6993:6:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "src": "6964:36:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 913,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6964:40:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6945:59:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 916,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 903,
                        "src": "7023:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5769746864726177616c206661696c6564",
                        "id": 917,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7032:19:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_ec24209b271cd4d65181d9e8c6d9d718c94d28a7972011b1be42ea8d094a1a88",
                          "typeString": "literal_string \"Withdrawal failed\""
                        },
                        "value": "Withdrawal failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_ec24209b271cd4d65181d9e8c6d9d718c94d28a7972011b1be42ea8d094a1a88",
                          "typeString": "literal_string \"Withdrawal failed\""
                        }
                      ],
                      "id": 915,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "7015:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 918,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7015:37:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 919,
                  "nodeType": "ExpressionStatement",
                  "src": "7015:37:4"
                }
              ]
            },
            "functionSelector": "64613807",
            "id": 921,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 883,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 882,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "6734:9:4"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58,
                  "src": "6734:9:4"
                },
                "nodeType": "ModifierInvocation",
                "src": "6734:9:4"
              },
              {
                "id": 885,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 884,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "6744:12:4"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 318,
                  "src": "6744:12:4"
                },
                "nodeType": "ModifierInvocation",
                "src": "6744:12:4"
              }
            ],
            "name": "withdrawAdminFunds",
            "nameLocation": "6704:18:4",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 881,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6722:2:4"
            },
            "returnParameters": {
              "id": 886,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6757:0:4"
            },
            "scope": 1060,
            "src": "6695:365:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 933,
              "nodeType": "Block",
              "src": "7173:49:4",
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "id": 929,
                      "name": "farmerPolicies",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 410,
                      "src": "7191:14:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                        "typeString": "mapping(address => uint256[] storage ref)"
                      }
                    },
                    "id": 931,
                    "indexExpression": {
                      "id": 930,
                      "name": "_farmer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 923,
                      "src": "7206:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "7191:23:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                      "typeString": "uint256[] storage ref"
                    }
                  },
                  "functionReturnParameters": 928,
                  "id": 932,
                  "nodeType": "Return",
                  "src": "7184:30:4"
                }
              ]
            },
            "functionSelector": "9339dd5d",
            "id": 934,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getFarmerPolicies",
            "nameLocation": "7100:17:4",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 924,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 923,
                  "mutability": "mutable",
                  "name": "_farmer",
                  "nameLocation": "7126:7:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 934,
                  "src": "7118:15:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 922,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7118:7:4",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7117:17:4"
            },
            "returnParameters": {
              "id": 928,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 927,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 934,
                  "src": "7158:13:4",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 925,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "7158:4:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 926,
                    "nodeType": "ArrayTypeName",
                    "src": "7158:6:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7157:15:4"
            },
            "scope": 1060,
            "src": "7091:131:4",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 960,
              "nodeType": "Block",
              "src": "7431:215:4",
              "statements": [
                {
                  "expression": {
                    "components": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 949,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 947,
                          "name": "nextPolicyId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 367,
                          "src": "7464:12:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "hexValue": "31",
                          "id": 948,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7479:1:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "7464:16:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 950,
                        "name": "totalPremiumsCollected",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 412,
                        "src": "7495:22:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 951,
                        "name": "totalPayoutsProcessed",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 414,
                        "src": "7532:21:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 954,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967268,
                              "src": "7576:4:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_CropInsurance_$1060",
                                "typeString": "contract CropInsurance"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_CropInsurance_$1060",
                                "typeString": "contract CropInsurance"
                              }
                            ],
                            "id": 953,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7568:7:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 952,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "7568:7:4",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 955,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7568:13:4",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 956,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7582:7:4",
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "src": "7568:21:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 957,
                        "name": "adminWithdrawableAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 416,
                        "src": "7604:23:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 958,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "7449:189:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256,uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 946,
                  "id": 959,
                  "nodeType": "Return",
                  "src": "7442:196:4"
                }
              ]
            },
            "functionSelector": "dfe6b5d6",
            "id": 961,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getContractStats",
            "nameLocation": "7239:16:4",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 935,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7255:2:4"
            },
            "returnParameters": {
              "id": 946,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 937,
                  "mutability": "mutable",
                  "name": "totalPolicies",
                  "nameLocation": "7296:13:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 961,
                  "src": "7291:18:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 936,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "7291:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 939,
                  "mutability": "mutable",
                  "name": "totalPremiums",
                  "nameLocation": "7325:13:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 961,
                  "src": "7320:18:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 938,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "7320:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 941,
                  "mutability": "mutable",
                  "name": "totalPayouts",
                  "nameLocation": "7354:12:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 961,
                  "src": "7349:17:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 940,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "7349:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 943,
                  "mutability": "mutable",
                  "name": "contractBalance",
                  "nameLocation": "7382:15:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 961,
                  "src": "7377:20:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 942,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "7377:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 945,
                  "mutability": "mutable",
                  "name": "adminFunds",
                  "nameLocation": "7413:10:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 961,
                  "src": "7408:15:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 944,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "7408:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7280:150:4"
            },
            "scope": 1060,
            "src": "7230:416:4",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 1002,
              "nodeType": "Block",
              "src": "7723:298:4",
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 974,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 970,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 968,
                        "name": "_policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 963,
                        "src": "7738:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 969,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7751:1:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "7738:14:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 973,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 971,
                        "name": "_policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 963,
                        "src": "7756:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">=",
                      "rightExpression": {
                        "id": 972,
                        "name": "nextPolicyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 367,
                        "src": "7769:12:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "7756:25:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "7738:43:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 977,
                  "nodeType": "IfStatement",
                  "src": "7734:61:4",
                  "trueBody": {
                    "expression": {
                      "hexValue": "66616c7365",
                      "id": 975,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7790:5:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "functionReturnParameters": 967,
                    "id": 976,
                    "nodeType": "Return",
                    "src": "7783:12:4"
                  }
                },
                {
                  "assignments": [
                    980
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 980,
                      "mutability": "mutable",
                      "name": "policy",
                      "nameLocation": "7820:6:4",
                      "nodeType": "VariableDeclaration",
                      "scope": 1002,
                      "src": "7806:20:4",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Policy_$400_memory_ptr",
                        "typeString": "struct CropInsurance.Policy"
                      },
                      "typeName": {
                        "id": 979,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 978,
                          "name": "Policy",
                          "nameLocations": [
                            "7806:6:4"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 400,
                          "src": "7806:6:4"
                        },
                        "referencedDeclaration": 400,
                        "src": "7806:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Policy_$400_storage_ptr",
                          "typeString": "struct CropInsurance.Policy"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 984,
                  "initialValue": {
                    "baseExpression": {
                      "id": 981,
                      "name": "policies",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 405,
                      "src": "7829:8:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Policy_$400_storage_$",
                        "typeString": "mapping(uint256 => struct CropInsurance.Policy storage ref)"
                      }
                    },
                    "id": 983,
                    "indexExpression": {
                      "id": 982,
                      "name": "_policyId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 963,
                      "src": "7838:9:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "7829:19:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Policy_$400_storage",
                      "typeString": "struct CropInsurance.Policy storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7806:42:4"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 1000,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 994,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 990,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 985,
                            "name": "policy",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 980,
                            "src": "7866:6:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Policy_$400_memory_ptr",
                              "typeString": "struct CropInsurance.Policy memory"
                            }
                          },
                          "id": 986,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7873:10:4",
                          "memberName": "isAccepted",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 395,
                          "src": "7866:17:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "id": 989,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "7904:14:4",
                          "subExpression": {
                            "expression": {
                              "id": 987,
                              "name": "policy",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 980,
                              "src": "7905:6:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Policy_$400_memory_ptr",
                                "typeString": "struct CropInsurance.Policy memory"
                              }
                            },
                            "id": 988,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "7912:6:4",
                            "memberName": "isPaid",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 397,
                            "src": "7905:13:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "7866:52:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "&&",
                      "rightExpression": {
                        "id": 993,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "7939:17:4",
                        "subExpression": {
                          "expression": {
                            "id": 991,
                            "name": "policy",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 980,
                            "src": "7940:6:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Policy_$400_memory_ptr",
                              "typeString": "struct CropInsurance.Policy memory"
                            }
                          },
                          "id": 992,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7947:9:4",
                          "memberName": "isExpired",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 399,
                          "src": "7940:16:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "7866:90:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 999,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 995,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967292,
                          "src": "7977:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 996,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7983:9:4",
                        "memberName": "timestamp",
                        "nodeType": "MemberAccess",
                        "src": "7977:15:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<=",
                      "rightExpression": {
                        "expression": {
                          "id": 997,
                          "name": "policy",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 980,
                          "src": "7996:6:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Policy_$400_memory_ptr",
                            "typeString": "struct CropInsurance.Policy memory"
                          }
                        },
                        "id": 998,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8003:10:4",
                        "memberName": "expiryDate",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 385,
                        "src": "7996:17:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "7977:36:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "7866:147:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 967,
                  "id": 1001,
                  "nodeType": "Return",
                  "src": "7859:154:4"
                }
              ]
            },
            "functionSelector": "bd8afa46",
            "id": 1003,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isPolicyActive",
            "nameLocation": "7663:14:4",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 964,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 963,
                  "mutability": "mutable",
                  "name": "_policyId",
                  "nameLocation": "7683:9:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 1003,
                  "src": "7678:14:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 962,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "7678:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7677:16:4"
            },
            "returnParameters": {
              "id": 967,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 966,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1003,
                  "src": "7717:4:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 965,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7717:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7716:6:4"
            },
            "scope": 1060,
            "src": "7654:367:4",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 1011,
              "nodeType": "Block",
              "src": "8093:27:4",
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 1008,
                      "name": "_pause",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 268,
                      "src": "8104:6:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 1009,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8104:8:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1010,
                  "nodeType": "ExpressionStatement",
                  "src": "8104:8:4"
                }
              ]
            },
            "functionSelector": "8456cb59",
            "id": 1012,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 1006,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 1005,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "8083:9:4"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58,
                  "src": "8083:9:4"
                },
                "nodeType": "ModifierInvocation",
                "src": "8083:9:4"
              }
            ],
            "name": "pause",
            "nameLocation": "8066:5:4",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1004,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8071:2:4"
            },
            "returnParameters": {
              "id": 1007,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8093:0:4"
            },
            "scope": 1060,
            "src": "8057:63:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 1020,
              "nodeType": "Block",
              "src": "8166:29:4",
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 1017,
                      "name": "_unpause",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 284,
                      "src": "8177:8:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 1018,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8177:10:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1019,
                  "nodeType": "ExpressionStatement",
                  "src": "8177:10:4"
                }
              ]
            },
            "functionSelector": "3f4ba83a",
            "id": 1021,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 1015,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 1014,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "8156:9:4"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58,
                  "src": "8156:9:4"
                },
                "nodeType": "ModifierInvocation",
                "src": "8156:9:4"
              }
            ],
            "name": "unpause",
            "nameLocation": "8137:7:4",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1013,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8144:2:4"
            },
            "returnParameters": {
              "id": 1016,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8166:0:4"
            },
            "scope": 1060,
            "src": "8128:67:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 1054,
              "nodeType": "Block",
              "src": "8309:206:4",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 1027,
                          "name": "paused",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 227,
                          "src": "8328:6:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 1028,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8328:8:4",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "436f6e7472616374206d75737420626520706175736564",
                        "id": 1029,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8338:25:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_793bd548180b58d09020929dc6dd31b7de4a27f256cc22a3d49f2374e778e855",
                          "typeString": "literal_string \"Contract must be paused\""
                        },
                        "value": "Contract must be paused"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_793bd548180b58d09020929dc6dd31b7de4a27f256cc22a3d49f2374e778e855",
                          "typeString": "literal_string \"Contract must be paused\""
                        }
                      ],
                      "id": 1026,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "8320:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1030,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8320:44:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1031,
                  "nodeType": "ExpressionStatement",
                  "src": "8320:44:4"
                },
                {
                  "assignments": [
                    1033,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1033,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "8381:7:4",
                      "nodeType": "VariableDeclaration",
                      "scope": 1054,
                      "src": "8376:12:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 1032,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "8376:4:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 1048,
                  "initialValue": {
                    "arguments": [
                      {
                        "hexValue": "",
                        "id": 1046,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8446:2:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          }
                        ],
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 1036,
                                "name": "owner",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 67,
                                "src": "8402:5:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                  "typeString": "function () view returns (address)"
                                }
                              },
                              "id": 1037,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8402:7:4",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 1035,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "8394:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_payable_$",
                              "typeString": "type(address payable)"
                            },
                            "typeName": {
                              "id": 1034,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "8394:8:4",
                              "stateMutability": "payable",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 1038,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8394:16:4",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "id": 1039,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8411:4:4",
                        "memberName": "call",
                        "nodeType": "MemberAccess",
                        "src": "8394:21:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                          "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                        }
                      },
                      "id": 1045,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "names": [
                        "value"
                      ],
                      "nodeType": "FunctionCallOptions",
                      "options": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "id": 1042,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967268,
                                "src": "8431:4:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_CropInsurance_$1060",
                                  "typeString": "contract CropInsurance"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_CropInsurance_$1060",
                                  "typeString": "contract CropInsurance"
                                }
                              ],
                              "id": 1041,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "8423:7:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 1040,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "8423:7:4",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 1043,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8423:13:4",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 1044,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8437:7:4",
                          "memberName": "balance",
                          "nodeType": "MemberAccess",
                          "src": "8423:21:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "src": "8394:51:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 1047,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8394:55:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8375:74:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1050,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1033,
                        "src": "8468:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "456d657267656e6379207769746864726177616c206661696c6564",
                        "id": 1051,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8477:29:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_bebce1acbd721ba064bed4bcb96d237355e9f4d6213d2899b887808ad9a9e358",
                          "typeString": "literal_string \"Emergency withdrawal failed\""
                        },
                        "value": "Emergency withdrawal failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_bebce1acbd721ba064bed4bcb96d237355e9f4d6213d2899b887808ad9a9e358",
                          "typeString": "literal_string \"Emergency withdrawal failed\""
                        }
                      ],
                      "id": 1049,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "8460:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1052,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8460:47:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1053,
                  "nodeType": "ExpressionStatement",
                  "src": "8460:47:4"
                }
              ]
            },
            "functionSelector": "db2e21bc",
            "id": 1055,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 1024,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 1023,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "8299:9:4"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58,
                  "src": "8299:9:4"
                },
                "nodeType": "ModifierInvocation",
                "src": "8299:9:4"
              }
            ],
            "name": "emergencyWithdraw",
            "nameLocation": "8270:17:4",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1022,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8287:2:4"
            },
            "returnParameters": {
              "id": 1025,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8309:0:4"
            },
            "scope": 1060,
            "src": "8261:254:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 1058,
              "nodeType": "Block",
              "src": "8550:56:4",
              "statements": []
            },
            "id": 1059,
            "implemented": true,
            "kind": "receive",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1056,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8530:2:4"
            },
            "returnParameters": {
              "id": 1057,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8550:0:4"
            },
            "scope": 1060,
            "src": "8523:83:4",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 1061,
        "src": "476:8133:4",
        "usedErrors": [
          13,
          18,
          199,
          202,
          299
        ],
        "usedEvents": [
          24,
          191,
          196,
          430,
          438,
          446,
          450
        ]
      }
    ],
    "src": "35:8574:4"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.20+commit.a1b79de6.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {
        "0x6be34a1120241c5f6625e795abf306aa8714d41f93573373e1011f1568122c14": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "policyId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "farmerAddress",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "premiumPaid",
              "type": "uint256"
            }
          ],
          "name": "InsuranceAccepted",
          "type": "event"
        },
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        "0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "Paused",
          "type": "event"
        },
        "0x7884580f743f908c98258afac53f9e0929cd6787b3488df80e096df15409ef8f": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "policyId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "farmerAddress",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "payoutAmount",
              "type": "uint256"
            }
          ],
          "name": "PayoutTriggered",
          "type": "event"
        },
        "0xb22aa541487fc93d989bb5b17d1e3a967f649c4979cfd658c0849e070ae0dca0": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "policyId",
              "type": "uint256"
            }
          ],
          "name": "PolicyExpired",
          "type": "event"
        },
        "0x8387951bdfe67d74dcb3a426eb171d96410dd6e5e615c498f1a61e3d2cdc6a71": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "policyId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "farmerAddress",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "farmerName",
              "type": "string"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "cropType",
              "type": "string"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "premiumAmount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "expiryDate",
              "type": "uint256"
            }
          ],
          "name": "PolicyRegistered",
          "type": "event"
        },
        "0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "Unpaused",
          "type": "event"
        }
      },
      "links": {},
      "address": "0xb311a1B092328399A54d4beb3D249Ce6eEfc7070",
      "transactionHash": "0x6756f1b45cf144a3dcb068f867e39d562260d4159c3bbb394931f19340960057"
    }
  },
  "schemaVersion": "3.4.16",
  "updatedAt": "2025-08-07T06:24:03.171Z",
  "networkType": "ethereum",
  "devdoc": {
    "errors": {
      "EnforcedPause()": [
        {
          "details": "The operation failed because the contract is paused."
        }
      ],
      "ExpectedPause()": [
        {
          "details": "The operation failed because the contract is not paused."
        }
      ],
      "OwnableInvalidOwner(address)": [
        {
          "details": "The owner is not a valid owner account. (eg. `address(0)`)"
        }
      ],
      "OwnableUnauthorizedAccount(address)": [
        {
          "details": "The caller account is not authorized to perform an operation."
        }
      ],
      "ReentrancyGuardReentrantCall()": [
        {
          "details": "Unauthorized reentrant call."
        }
      ]
    },
    "events": {
      "Paused(address)": {
        "details": "Emitted when the pause is triggered by `account`."
      },
      "Unpaused(address)": {
        "details": "Emitted when the pause is lifted by `account`."
      }
    },
    "kind": "dev",
    "methods": {
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "paused()": {
        "details": "Returns true if the contract is paused, and false otherwise."
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}
];
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { AllocateStakingToken } from "./AllocateStakingToken";

export class AllocateStakingTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _name: string,
    _symbol: string,
    initialSupply: BigNumberish,
    overrides?: Overrides
  ): Promise<AllocateStakingToken> {
    return super.deploy(
      _name,
      _symbol,
      initialSupply,
      overrides || {}
    ) as Promise<AllocateStakingToken>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    initialSupply: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      initialSupply,
      overrides || {}
    );
  }
  attach(address: string): AllocateStakingToken {
    return super.attach(address) as AllocateStakingToken;
  }
  connect(signer: Signer): AllocateStakingTokenFactory {
    return super.connect(signer) as AllocateStakingTokenFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AllocateStakingToken {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AllocateStakingToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_stakeId",
        type: "uint256",
      },
    ],
    name: "checkDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_stake",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
    ],
    name: "createStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_staker",
        type: "address",
      },
    ],
    name: "fetchStakerDetails",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "totalInvested",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalRewards",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalCreatedStakes",
            type: "uint256",
          },
        ],
        internalType: "struct AllocateStakingToken.Child",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_staker",
        type: "address",
      },
    ],
    name: "fetchStakes",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "stakeId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stakeStartTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stakeEndTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
        ],
        internalType: "struct AllocateStakingToken.Stake[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405266b1a2bc2ec500006007553480156200001c57600080fd5b5060405162002a2938038062002a2983398181016040528101906200004291906200043d565b828281600390805190602001906200005c92919062000304565b5080600490805190602001906200007592919062000304565b505050620000986200008c620000b360201b60201c565b620000bb60201b60201c565b620000aa33826200018160201b60201c565b50505062000796565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620001f4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001eb90620004fd565b60405180910390fd5b6200020860008383620002fa60201b60201c565b80600260008282546200021c9190620005ac565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620002739190620005ac565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620002da91906200051f565b60405180910390a3620002f660008383620002ff60201b60201c565b5050565b505050565b505050565b828054620003129062000649565b90600052602060002090601f01602090048101928262000336576000855562000382565b82601f106200035157805160ff191683800117855562000382565b8280016001018555821562000382579182015b828111156200038157825182559160200191906001019062000364565b5b50905062000391919062000395565b5090565b5b80821115620003b057600081600090555060010162000396565b5090565b6000620003cb620003c58462000565565b6200053c565b905082815260208101848484011115620003e457600080fd5b620003f184828562000613565b509392505050565b600082601f8301126200040b57600080fd5b81516200041d848260208601620003b4565b91505092915050565b60008151905062000437816200077c565b92915050565b6000806000606084860312156200045357600080fd5b600084015167ffffffffffffffff8111156200046e57600080fd5b6200047c86828701620003f9565b935050602084015167ffffffffffffffff8111156200049a57600080fd5b620004a886828701620003f9565b9250506040620004bb8682870162000426565b9150509250925092565b6000620004d4601f836200059b565b9150620004e18262000753565b602082019050919050565b620004f78162000609565b82525050565b600060208201905081810360008301526200051881620004c5565b9050919050565b6000602082019050620005366000830184620004ec565b92915050565b6000620005486200055b565b90506200055682826200067f565b919050565b6000604051905090565b600067ffffffffffffffff82111562000583576200058262000713565b5b6200058e8262000742565b9050602081019050919050565b600082825260208201905092915050565b6000620005b98262000609565b9150620005c68362000609565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620005fe57620005fd620006b5565b5b828201905092915050565b6000819050919050565b60005b838110156200063357808201518184015260208101905062000616565b8381111562000643576000848401525b50505050565b600060028204905060018216806200066257607f821691505b60208210811415620006795762000678620006e4565b5b50919050565b6200068a8262000742565b810181811067ffffffffffffffff82111715620006ac57620006ab62000713565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b620007878162000609565b81146200079357600080fd5b50565b61228380620007a66000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063715018a6116100a2578063a9059cbb11610071578063a9059cbb1461030b578063d7fa023d1461033b578063dd62ed3e14610357578063e145257414610387578063f2fde38b146103b757610116565b8063715018a6146102955780638da5cb5b1461029f57806395d89b41146102bd578063a457c2d7146102db57610116565b806323b872dd116100e957806323b872dd146101b7578063313ce567146101e7578063395093511461020557806340bad2ee1461023557806370a082311461026557610116565b806306fdde031461011b578063095ea7b31461013957806318160ddd14610169578063205a090314610187575b600080fd5b6101236103d3565b6040516101309190611b29565b60405180910390f35b610153600480360381019061014e91906116f1565b610465565b6040516101609190611b0e565b60405180910390f35b610171610483565b60405161017e9190611c86565b60405180910390f35b6101a1600480360381019061019c919061163d565b61048d565b6040516101ae9190611c6b565b60405180910390f35b6101d160048036038101906101cc91906116a2565b610504565b6040516101de9190611b0e565b60405180910390f35b6101ef6105fc565b6040516101fc9190611ca1565b60405180910390f35b61021f600480360381019061021a91906116f1565b610605565b60405161022c9190611b0e565b60405180910390f35b61024f600480360381019061024a9190611756565b6106b1565b60405161025c9190611c86565b60405180910390f35b61027f600480360381019061027a919061163d565b610739565b60405161028c9190611c86565b60405180910390f35b61029d610781565b005b6102a7610809565b6040516102b49190611a9a565b60405180910390f35b6102c5610833565b6040516102d29190611b29565b60405180910390f35b6102f560048036038101906102f091906116f1565b6108c5565b6040516103029190611b0e565b60405180910390f35b610325600480360381019061032091906116f1565b6109b0565b6040516103329190611b0e565b60405180910390f35b6103556004803603810190610350919061177f565b6109ce565b005b610371600480360381019061036c9190611666565b610d10565b60405161037e9190611c86565b60405180910390f35b6103a1600480360381019061039c919061163d565b610d97565b6040516103ae9190611aec565b60405180910390f35b6103d160048036038101906103cc919061163d565b610f64565b005b6060600380546103e290611e7d565b80601f016020809104026020016040519081016040528092919081815260200182805461040e90611e7d565b801561045b5780601f106104305761010080835404028352916020019161045b565b820191906000526020600020905b81548152906001019060200180831161043e57829003601f168201915b5050505050905090565b600061047961047261105c565b8484611064565b6001905092915050565b6000600254905090565b6104956115ae565b600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180606001604052908160008201548152602001600182015481526020016002820154815250509050919050565b600061051184848461122f565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061055c61105c565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156105dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d390611bcb565b60405180910390fd5b6105f0856105e861105c565b858403611064565b60019150509392505050565b60006012905090565b60006106a761061261105c565b84846001600061062061105c565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546106a29190611d11565b611064565b6001905092915050565b600080600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000848152602001908152602001600020600201549050600042826107189190611dc1565b9050600081101561072e57600092505050610734565b80925050505b919050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61078961105c565b73ffffffffffffffffffffffffffffffffffffffff166107a7610809565b73ffffffffffffffffffffffffffffffffffffffff16146107fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f490611beb565b60405180910390fd5b61080760006114b0565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461084290611e7d565b80601f016020809104026020016040519081016040528092919081815260200182805461086e90611e7d565b80156108bb5780601f10610890576101008083540402835291602001916108bb565b820191906000526020600020905b81548152906001019060200180831161089e57829003601f168201915b5050505050905090565b600080600160006108d461105c565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610991576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098890611c4b565b60405180910390fd5b6109a561099c61105c565b85858403611064565b600191505092915050565b60006109c46109bd61105c565b848461122f565b6001905092915050565b7342bb40bf79730451b11f6de1cba222f17b87afd773ffffffffffffffffffffffffffffffffffffffff166323b872dd30739d324d73a6d43a6c66e080e65bf705f4e078495e856040518463ffffffff1660e01b8152600401610a3393929190611ab5565b602060405180830381600087803b158015610a4d57600080fd5b505af1158015610a61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a85919061172d565b506000806000831415610aac5742620d2f00610aa19190611d11565b915060019050610ae6565b6001831415610acf574262093a80610ac49190611d11565b915060079050610ae5565b4262b89200610ade9190611d11565b9150600e90505b5b6000610af28583611576565b9050610aff303383610504565b5080600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000828254610b529190611d11565b9250508190555060006001600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002016000828254610bae9190611d11565b925050819055905080600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018190555060006040518060a0016040528083815260200142815260200186815260200188815260200185815250905080600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000848152602001908152602001600020600082015181600001556020820151816001015560408201518160020155606082015181600301556080820151816004015590505086600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254610d009190611d11565b9250508190555050505050505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60606000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154905060008167ffffffffffffffff811115610e22577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015610e5b57816020015b610e486115cf565b815260200190600190039081610e405790505b50905060005b82811015610f5957600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600183610eb79190611d11565b81526020019081526020016000206040518060a001604052908160008201548152602001600182015481526020016002820154815260200160038201548152602001600482015481525050828281518110610f3b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101819052508080610f5190611eaf565b915050610e61565b508092505050919050565b610f6c61105c565b73ffffffffffffffffffffffffffffffffffffffff16610f8a610809565b73ffffffffffffffffffffffffffffffffffffffff1614610fe0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fd790611beb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611050576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161104790611b6b565b60405180910390fd5b611059816114b0565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156110d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110cb90611c2b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611144576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113b90611b8b565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516112229190611c86565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561129f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129690611c0b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561130f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161130690611b4b565b60405180910390fd5b61131a8383836115a4565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156113a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161139790611bab565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546114339190611d11565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516114979190611c86565b60405180910390a36114aa8484846115a9565b50505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080600754846115879190611d67565b9050600083826115979190611d67565b9050809250505092915050565b505050565b505050565b60405180606001604052806000815260200160008152602001600081525090565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b60008135905061160d81612208565b92915050565b6000815190506116228161221f565b92915050565b60008135905061163781612236565b92915050565b60006020828403121561164f57600080fd5b600061165d848285016115fe565b91505092915050565b6000806040838503121561167957600080fd5b6000611687858286016115fe565b9250506020611698858286016115fe565b9150509250929050565b6000806000606084860312156116b757600080fd5b60006116c5868287016115fe565b93505060206116d6868287016115fe565b92505060406116e786828701611628565b9150509250925092565b6000806040838503121561170457600080fd5b6000611712858286016115fe565b925050602061172385828601611628565b9150509250929050565b60006020828403121561173f57600080fd5b600061174d84828501611613565b91505092915050565b60006020828403121561176857600080fd5b600061177684828501611628565b91505092915050565b6000806040838503121561179257600080fd5b60006117a085828601611628565b92505060206117b185828601611628565b9150509250929050565b60006117c78383611a05565b60a08301905092915050565b6117dc81611df5565b82525050565b60006117ed82611ccc565b6117f78185611cef565b935061180283611cbc565b8060005b8381101561183357815161181a88826117bb565b975061182583611ce2565b925050600181019050611806565b5085935050505092915050565b61184981611e07565b82525050565b600061185a82611cd7565b6118648185611d00565b9350611874818560208601611e4a565b61187d81611f56565b840191505092915050565b6000611895602383611d00565b91506118a082611f67565b604082019050919050565b60006118b8602683611d00565b91506118c382611fb6565b604082019050919050565b60006118db602283611d00565b91506118e682612005565b604082019050919050565b60006118fe602683611d00565b915061190982612054565b604082019050919050565b6000611921602883611d00565b915061192c826120a3565b604082019050919050565b6000611944602083611d00565b915061194f826120f2565b602082019050919050565b6000611967602583611d00565b91506119728261211b565b604082019050919050565b600061198a602483611d00565b91506119958261216a565b604082019050919050565b60006119ad602583611d00565b91506119b8826121b9565b604082019050919050565b6060820160008201516119d96000850182611a6d565b5060208201516119ec6020850182611a6d565b5060408201516119ff6040850182611a6d565b50505050565b60a082016000820151611a1b6000850182611a6d565b506020820151611a2e6020850182611a6d565b506040820151611a416040850182611a6d565b506060820151611a546060850182611a6d565b506080820151611a676080850182611a6d565b50505050565b611a7681611e33565b82525050565b611a8581611e33565b82525050565b611a9481611e3d565b82525050565b6000602082019050611aaf60008301846117d3565b92915050565b6000606082019050611aca60008301866117d3565b611ad760208301856117d3565b611ae46040830184611a7c565b949350505050565b60006020820190508181036000830152611b0681846117e2565b905092915050565b6000602082019050611b236000830184611840565b92915050565b60006020820190508181036000830152611b43818461184f565b905092915050565b60006020820190508181036000830152611b6481611888565b9050919050565b60006020820190508181036000830152611b84816118ab565b9050919050565b60006020820190508181036000830152611ba4816118ce565b9050919050565b60006020820190508181036000830152611bc4816118f1565b9050919050565b60006020820190508181036000830152611be481611914565b9050919050565b60006020820190508181036000830152611c0481611937565b9050919050565b60006020820190508181036000830152611c248161195a565b9050919050565b60006020820190508181036000830152611c448161197d565b9050919050565b60006020820190508181036000830152611c64816119a0565b9050919050565b6000606082019050611c8060008301846119c3565b92915050565b6000602082019050611c9b6000830184611a7c565b92915050565b6000602082019050611cb66000830184611a8b565b92915050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000611d1c82611e33565b9150611d2783611e33565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611d5c57611d5b611ef8565b5b828201905092915050565b6000611d7282611e33565b9150611d7d83611e33565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611db657611db5611ef8565b5b828202905092915050565b6000611dcc82611e33565b9150611dd783611e33565b925082821015611dea57611de9611ef8565b5b828203905092915050565b6000611e0082611e13565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611e68578082015181840152602081019050611e4d565b83811115611e77576000848401525b50505050565b60006002820490506001821680611e9557607f821691505b60208210811415611ea957611ea8611f27565b5b50919050565b6000611eba82611e33565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611eed57611eec611ef8565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b61221181611df5565b811461221c57600080fd5b50565b61222881611e07565b811461223357600080fd5b50565b61223f81611e33565b811461224a57600080fd5b5056fea26469706673582212205a747dda78930723adbb648d960dde6e9bbe490cd385368bd583909eff41f89b64736f6c63430008040033";
import { ethers } from "ethers";
import { AllocateStakingToken } from "../types/ethers-contracts";
import HOST_ABI from "../artifacts/contracts/staking.sol/AllocateStakingToken.json";

const CONTRACT_ADDRESS = "0xDf7C5cD1E21bc83573D69B971937affcfdE4B209";

export interface IStake {
  stakeId: number;
  stakeStartTime: number;
  stakeEndTime: number;
  amount: number;
  duration: number;
}

export enum IStakeDuration {
  DAY = 0,
  WEEK = 1,
  FORTNIGHT = 2,
}

export const REWARD_RATE = 0.05;

class StakeContract {
  private contract: AllocateStakingToken;
  private wallet: string;

  constructor(contract: AllocateStakingToken, wallet: string) {
    this.contract = contract;
    this.wallet = wallet;
  }

  getWallet() {
    return this.wallet;
  }

  static async fromProvider(
    provider: ethers.providers.Web3Provider,
    address?: string
  ) {
    let wallet = address;
    if (!address) {
      const accounts = await provider.send("eth_requestAccounts", []);
      wallet = accounts[0];
    }
    const signer = provider.getSigner(wallet);
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      HOST_ABI.abi,
      signer
    ) as AllocateStakingToken;
    return new StakeContract(contract, wallet);
  }

  async fetchStakes() {
    return this.contract.fetchStakes(this.wallet);
  }

  async createStake(amount: number, duration: IStakeDuration) {
    return this.contract.createStake(amount, duration);
  }

  static calculateDays(duration: IStakeDuration) {
    let days = 0;
    switch (duration) {
      case IStakeDuration.DAY:
        days = 1;
        break;
      case IStakeDuration.WEEK:
        days = 7;
        break;
      case IStakeDuration.FORTNIGHT:
        days = 14;
        break;
    }
    return days;
  }

  static calculateAllocateReward(amount: number, duration: IStakeDuration) {
    const days = this.calculateDays(duration);
    return parseFloat((days * REWARD_RATE * amount).toFixed(2));
  }

  static calculateUSDCReward(amount: number, duration: IStakeDuration) {
    const days = this.calculateDays(duration);
    console.log((days * REWARD_RATE * amount) / 365);
    return parseFloat(((days * REWARD_RATE * amount) / 365).toFixed(2));
  }
}

export default StakeContract;

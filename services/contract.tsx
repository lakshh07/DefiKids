import { ethers } from "ethers";
import { Host } from "../types/ethers-contracts";
import HOST_ABI from "../artifacts/contracts/Host.sol/Host.json";

const CONTRACT_ADDRESS = "0x10Bf7ef60A9577b4fB1fe429C122d252F89d272d";

export enum UserType {
  PARENT = 1,
  CHILD = 2,
  UNREGISTERED = 3,
}

export interface IChild {
  name: string;
  address: string;
  access: 0 | 1;
}

class HostContract {
  private contract: Host;
  private wallet: string;

  constructor(contract: Host, wallet: string) {
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
    ) as Host;
    return new HostContract(contract, wallet);
  }

  async getUserType(): Promise<UserType> {
    const result = await this.contract.getUserType(this.wallet);
    const userType = parseInt(result._hex, 16);
    return userType;
  }

  async createParent() {
    return this.contract.createParent();
  }

  async fetchChildren() {
    return this.contract.fetchChildren();
  }

  async addMember(wallet: string, username: string) {
    return this.contract.addMember(wallet, username);
  }

  async changeAccess(wallet: string) {
    return this.contract.changeAccess(wallet);
  }
}

export default HostContract;

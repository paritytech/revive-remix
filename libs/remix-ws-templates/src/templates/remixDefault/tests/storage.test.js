/* eslint-disable no-undef */
// Right click on the script name and hit "Run" to execute
// Please set the provider to the MetaMask-based provider in the "Deploy" tab.
const { expect } = require("chai");
import { ethers } from 'ethers'

describe("Storage", function () {
  it("test initial value", async function () {
    const artifactsPath = `browser/contracts/artifacts/Storage.json`
    const metadata = JSON.parse(await remix.call('fileManager', 'getFile', artifactsPath))
    const signer = (new ethers.providers.Web3Provider(web3Provider)).getSigner(0)
    const factory = new ethers.ContractFactory(metadata.abi, metadata.data.bytecode.object, signer)
    const storage = await factory.deploy()
    await storage.deployed()
    console.log("storage deployed at:" + storage.address);
    expect((await storage.retrieve()).toNumber()).to.equal(0);
  });
  it("test updating and retrieving updated value", async function () {
    const artifactsPath = `browser/contracts/artifacts/Storage.json`
    const metadata = JSON.parse(await remix.call('fileManager', 'getFile', artifactsPath))
    const signer = (new ethers.providers.Web3Provider(web3Provider)).getSigner(0)
    const factory = new ethers.ContractFactory(metadata.abi, metadata.data.bytecode.object, signer)
    const storage = await factory.deploy()
    await storage.deployed();
    const storage2 = await ethers.getContractAt("Storage", storage.address);
    const setValue = await storage2.store(56);
    await setValue.wait();
    expect((await storage2.retrieve()).toNumber()).to.equal(56);
  });
});
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[314],{

/***/ 40314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* eslint-disable no-undef */\n// Right click on the script name and hit \"Run\" to execute\n// Please set the provider to the MetaMask-based provider in the \"Deploy\" tab.\nconst { expect } = require(\"chai\");\nimport { ethers } from 'ethers'\n\ndescribe(\"Storage\", function () {\n  it(\"test initial value\", async function () {\n    const artifactsPath = `browser/contracts/artifacts/Storage.json`\n    const metadata = JSON.parse(await remix.call('fileManager', 'getFile', artifactsPath))\n    const signer = (new ethers.providers.Web3Provider(web3Provider)).getSigner(0)\n    const factory = new ethers.ContractFactory(metadata.abi, metadata.data.bytecode.object, signer)\n    const storage = await factory.deploy()\n    await storage.deployed()\n    console.log(\"storage deployed at:\" + storage.address);\n    expect((await storage.retrieve()).toNumber()).to.equal(0);\n  });\n  it(\"test updating and retrieving updated value\", async function () {\n    const artifactsPath = `browser/contracts/artifacts/Storage.json`\n    const metadata = JSON.parse(await remix.call('fileManager', 'getFile', artifactsPath))\n    const signer = (new ethers.providers.Web3Provider(web3Provider)).getSigner(0)\n    const factory = new ethers.ContractFactory(metadata.abi, metadata.data.bytecode.object, signer)\n    const storage = await factory.deploy()\n    await storage.deployed();\n    const storage2 = await ethers.getContractAt(\"Storage\", storage.address);\n    const setValue = await storage2.store(56);\n    await setValue.wait();\n    expect((await storage2.retrieve()).toNumber()).to.equal(56);\n  });\n});");

/***/ })

}]);
//# sourceMappingURL=314.plugin-etherscan.1730377757769.js.map
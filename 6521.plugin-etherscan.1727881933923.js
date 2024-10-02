"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6521],{

/***/ 26521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("// SPDX-License-Identifier: GPL-3.0\n\npragma solidity >=0.7.0 <0.9.0;\n\nimport \"hardhat/console.sol\";\n\n/**\n * @title Owner\n * @dev Set & change owner\n */\ncontract Owner {\n\n    address private owner;\n\n    // event for EVM logging\n    event OwnerSet(address indexed oldOwner, address indexed newOwner);\n\n    // modifier to check if caller is owner\n    modifier isOwner() {\n        // If the first argument of 'require' evaluates to 'false', execution terminates and all\n        // changes to the state and to Ether balances are reverted.\n        // This used to consume all gas in old EVM versions, but not anymore.\n        // It is often a good idea to use 'require' to check if functions are called correctly.\n        // As a second argument, you can also provide an explanation about what went wrong.\n        require(msg.sender == owner, \"Caller is not owner\");\n        _;\n    }\n\n    /**\n     * @dev Set contract deployer as owner\n     */\n    constructor() {\n        console.log(\"Owner contract deployed by:\", msg.sender);\n        owner = msg.sender; // 'msg.sender' is sender of current call, contract deployer for a constructor\n        emit OwnerSet(address(0), owner);\n    }\n\n    /**\n     * @dev Change owner\n     * @param newOwner address of new owner\n     */\n    function changeOwner(address newOwner) public isOwner {\n        require(newOwner != address(0), \"New owner should not be the zero address\");\n        emit OwnerSet(owner, newOwner);\n        owner = newOwner;\n    }\n\n    /**\n     * @dev Return owner address \n     * @return address of owner\n     */\n    function getOwner() external view returns (address) {\n        return owner;\n    }\n} \n");

/***/ })

}]);
//# sourceMappingURL=6521.plugin-etherscan.1727881933923.js.map
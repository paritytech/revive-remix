"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[947],{

/***/ 70947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("pragma circom 2.0.0;\n\ninclude \"circomlib/circuits/poseidon.circom\";\n\ntemplate CalculateHash() {\n    signal input value1;\n    signal input value2;\n    signal input value3;\n    signal input value4;\n    signal output out;\n\n    component poseidon = Poseidon(4);\n\n    poseidon.inputs[0] <== value1;\n    poseidon.inputs[1] <== value2;\n    poseidon.inputs[2] <== value3;\n    poseidon.inputs[3] <== value4;\n\n    out <== poseidon.out;\n}\ntemplate HashChecker() {\n    signal input value1;\n    signal input value2;\n    signal input value3;\n    signal input value4;\n    signal input hash;\n\n    component calculateSecret = CalculateHash();\n    calculateSecret.value1 <== value1;\n    calculateSecret.value2 <== value2;\n    calculateSecret.value3 <== value3;\n    calculateSecret.value4 <== value4;\n\n    signal calculatedHash;\n    calculatedHash <== calculateSecret.out;\n\n    assert(hash == calculatedHash);\n    \n}\n\ncomponent main {public [hash]} = HashChecker();\n");

/***/ })

}]);
//# sourceMappingURL=947.plugin-etherscan.1727881933923.js.map
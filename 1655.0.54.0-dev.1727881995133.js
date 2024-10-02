"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[1655],{81655:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__='pragma circom 2.1.0;\n\ninclude "circomlib/circuits/poseidon.circom";\n\ntemplate Withdraw() {\n    signal input identitySecret;\n    signal input address;\n\n    signal output identityCommitment <== Poseidon(1)([identitySecret]);\n\n    // Dummy constraint to prevent compiler optimizing it\n    signal addressSquared <== address * address;\n}\n\ncomponent main { public [address] } = Withdraw();\n'}}]);
//# sourceMappingURL=1655.0.54.0-dev.1727881995133.js.map
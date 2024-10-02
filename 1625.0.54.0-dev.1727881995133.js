"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[1625],{21625:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__='pragma circom 2.1.0;\n\ninclude "./utils.circom";\ninclude "circomlib/circuits/poseidon.circom";\n\ntemplate RLN(DEPTH, LIMIT_BIT_SIZE) {\n    // Private signals\n    signal input identitySecret;\n    signal input userMessageLimit;\n    signal input messageId;\n    signal input pathElements[DEPTH];\n    signal input identityPathIndex[DEPTH];\n\n    // Public signals\n    signal input x;\n    signal input externalNullifier;\n\n    // Outputs\n    signal output y;\n    signal output root;\n    signal output nullifier;\n\n    signal identityCommitment <== Poseidon(1)([identitySecret]);\n    signal rateCommitment <== Poseidon(2)([identityCommitment, userMessageLimit]);\n\n    // Membership check\n    root <== MerkleTreeInclusionProof(DEPTH)(rateCommitment, identityPathIndex, pathElements);\n\n    // messageId range check\n    RangeCheck(LIMIT_BIT_SIZE)(messageId, userMessageLimit);\n\n    // SSS share calculations\n    signal a1 <== Poseidon(3)([identitySecret, externalNullifier, messageId]);\n    y <== identitySecret + a1 * x;\n\n    // nullifier calculation\n    nullifier <== Poseidon(1)([a1]);\n}\n\ncomponent main { public [x, externalNullifier] } = RLN(20, 16);'}}]);
//# sourceMappingURL=1625.0.54.0-dev.1727881995133.js.map
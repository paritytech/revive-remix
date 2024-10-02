"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[7869],{27869:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__='export declare type Bytes = ArrayLike<number>;\nexport declare type BytesLike = Bytes | string;\nexport declare type DataOptions = {\n    allowMissingPrefix?: boolean;\n    hexPad?: "left" | "right" | null;\n};\nexport interface Hexable {\n    toHexString(): string;\n}\nexport declare type SignatureLike = {\n    r: string;\n    s?: string;\n    _vs?: string;\n    recoveryParam?: number;\n    v?: number;\n} | BytesLike;\nexport interface Signature {\n    r: string;\n    s: string;\n    _vs: string;\n    recoveryParam: number;\n    v: number;\n    yParityAndS: string;\n    compact: string;\n}\nexport declare function isBytesLike(value: any): value is BytesLike;\nexport declare function isBytes(value: any): value is Bytes;\nexport declare function arrayify(value: BytesLike | Hexable | number, options?: DataOptions): Uint8Array;\nexport declare function concat(items: ReadonlyArray<BytesLike>): Uint8Array;\nexport declare function stripZeros(value: BytesLike): Uint8Array;\nexport declare function zeroPad(value: BytesLike, length: number): Uint8Array;\nexport declare function isHexString(value: any, length?: number): boolean;\nexport declare function hexlify(value: BytesLike | Hexable | number | bigint, options?: DataOptions): string;\nexport declare function hexDataLength(data: BytesLike): number;\nexport declare function hexDataSlice(data: BytesLike, offset: number, endOffset?: number): string;\nexport declare function hexConcat(items: ReadonlyArray<BytesLike>): string;\nexport declare function hexValue(value: BytesLike | Hexable | number | bigint): string;\nexport declare function hexStripZeros(value: BytesLike): string;\nexport declare function hexZeroPad(value: BytesLike, length: number): string;\nexport declare function splitSignature(signature: SignatureLike): Signature;\nexport declare function joinSignature(signature: SignatureLike): string;\n//# sourceMappingURL=index.d.ts.map'}}]);
//# sourceMappingURL=7869.0.54.0-dev.1727881995133.js.map
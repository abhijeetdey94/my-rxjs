"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = __importStar(require("rxjs"));
var outer = Rx.from(['A', 'B', 'C', 'D']);
var inner = Rx.interval(1000).pipe(Rx.take(4));
var switchedObs = outer.pipe(Rx.switchMap(function (outerVal) {
    return inner.pipe(Rx.map(function (innerVal) {
        return outerVal + "-" + innerVal;
    }));
}));
switchedObs.subscribe(function (val) {
    // switchedObs prints D-0 D-1 D-2 D-3
    console.log(val);
});

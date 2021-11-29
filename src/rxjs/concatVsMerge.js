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
var source = Rx.of(2000, 1000);
var concatExample = source.pipe(Rx.concatMap(function (delayValue) {
    // console.log(`Delay value ${delayValue} is starting`);
    return Rx.of("Delay of " + delayValue + " is now completed").pipe(Rx.delay(delayValue));
}));
concatExample.subscribe(console.log);
var mergeExample = source.pipe(Rx.delay(5000), Rx.mergeMap(function (delayValue) {
    // console.log(`Delay value ${delayValue} is starting`);
    return Rx.of("Delay of " + delayValue + " is now completed").pipe(Rx.delay(delayValue));
}));
mergeExample.subscribe(console.log);

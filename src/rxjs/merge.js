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
//emit every 2.5 seconds
var first = Rx.interval(1000);
//emit every 2 seconds
var second = Rx.interval(1000);
//emit every 1.5 seconds
var third = Rx.interval(1000);
//emit every 1 second
var fourth = Rx.interval(1000);
//emit outputs from one observable
var example = Rx.merge(first.pipe(Rx.mapTo('FIRST!')), second.pipe(Rx.mapTo('SECOND!')), third.pipe(Rx.mapTo('THIRD')), fourth.pipe(Rx.mapTo('FOURTH')));
//output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
var subscribe = example.subscribe(function (val) { return console.log(val); });

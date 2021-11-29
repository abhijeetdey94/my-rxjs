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
// timerOne emits first value at 1s, then once every 4s
var timerOne$ = Rx.timer(1000, 4000);
// timerTwo emits first value at 2s, then once every 4s
var timerTwo$ = Rx.timer(2000, 4000);
// timerThree emits first value at 3s, then once every 4s
var timerThree$ = Rx.timer(3000, 4000);
// when one timer emits, emit the latest values from each timer as an array
Rx.combineLatest(timerOne$, timerTwo$, timerThree$).subscribe(function (_a) {
    var timerValOne = _a[0], timerValTwo = _a[1], timerValThree = _a[2];
    /*
      Example:
    timerThree first tick: 'Timer One Latest: 0, Timer Two Latest: 0, Timer Three Latest: 0
    timerOne second tick: 'Timer One Latest: 1, Timer Two Latest: 0, Timer Three Latest: 0
    timerTwo second tick: 'Timer One Latest: 1, Timer Two Latest: 1, Timer Three Latest: 0
  */
    console.log("Timer One Latest: " + timerValOne + ",\n     Timer Two Latest: " + timerValTwo + ",\n     Timer Three Latest: " + timerValThree);
});

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
var innerObsCounter = 0;
var outer = Rx.from(['#1', '#2']).pipe(Rx.tap(function (val) {
    console.log(val);
}), Rx.finalize(function () {
    console.log('______Source observable completed.______');
}));
var inner = Rx.interval(1000).pipe(Rx.take(4));
var concatenatedObs = outer.pipe(Rx.concatMap(function (outerVal) {
    var id = ++innerObsCounter;
    return inner.pipe(Rx.map(function (innerVal) {
        return "Inner Observable #" + id + " emitted         =>" + innerVal;
    }), Rx.finalize(function () {
        console.log("****Inner Observable #" + id + " completed.****");
    }));
}));
concatenatedObs.subscribe(function (val) {
    console.log(val);
}, Rx.noop, function () {
    console.log('Inner observables are now completed');
});

import * as Rx from "rxjs";

let numbers$ = Rx.from([1,2,3,4,5]);

let doubleNumbers$ = numbers$.pipe(Rx.map((num: number) => {
    return num * 2;
}));

let quadNumbers$ = doubleNumbers$.pipe(Rx.map((num: number) => {
    return num * 2;
}));

quadNumbers$.subscribe((val) => { console.log(val) });
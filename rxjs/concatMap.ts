import * as Rx from "rxjs";

let outer: Rx.Observable<any> = Rx.from(['A','B','C','D']);
let inner = Rx.interval(1000).pipe(Rx.take(4));

let concatenatedObs = outer.pipe(
    Rx.concatMap((outerVal) => {
        return inner.pipe(
            Rx.map((innerVal) => {
                return `${outerVal}-${innerVal}`
            })
        )
    })
);

concatenatedObs.subscribe((val) => {
    // concatenatedObs prints (A-0 A-1 A-2 A-3) (B-0 B-1 B-2 B-3) (C-0 C-1 C-2 C-3) ...
    console.log(val);
});
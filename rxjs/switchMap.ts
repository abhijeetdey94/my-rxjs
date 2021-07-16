import * as Rx from "rxjs";

let outer: Rx.Observable<any> = Rx.from(['A','B','C','D']);
let inner = Rx.interval(1000).pipe(Rx.take(4));

let switchedObs = outer.pipe(
    Rx.switchMap((outerVal) => {
        return inner.pipe(
            Rx.map((innerVal) => {
                return `${outerVal}-${innerVal}`
            })
        )
    })
);

switchedObs.subscribe((val) => {
    // switchedObs prints D-0 D-1 D-2 D-3
    console.log(val);
});
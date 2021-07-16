import * as Rx from "rxjs";

let outer: Rx.Observable<any> = Rx.from(['A','B','C','D']);
let inner = Rx.interval(1000).pipe(Rx.take(4));

let mergedObs = outer.pipe(
    Rx.mergeMap((outerVal) => {
        return inner.pipe(
            Rx.map((innerVal) => {
                return `${outerVal}-${innerVal}`
            })
        )
    })
);

mergedObs.subscribe((val) => {
    // mergedObs prints (A-0 B-0 C-0 D-0) (A-1 B-1 C-1 D-1) (A-2 B-2 C-2 D-2) ...
    console.log(val);
});
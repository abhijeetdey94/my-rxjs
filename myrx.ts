import * as Rx from "rxjs";

let outer: Rx.Observable<any> = Rx.from(['A','B','C','D']);
let inner = Rx.interval(1000).pipe(Rx.take(4));


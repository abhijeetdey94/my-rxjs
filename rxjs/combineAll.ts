import * as Rx from 'rxjs';

let outer: Rx.Observable<string> = Rx.from(['Outer-start', 'Outer-second', 'Outer-end']);
let inner: Rx.Observable<string> = Rx.from([
  'Inner-start',
  'Inner-second',
  'Inner-third',
  'Inner-end',
]);

const obs$ = outer.pipe(
  Rx.map((outerVal: string) => {
    return inner.pipe(
      Rx.map((innerVal: string) => {
        return `${outerVal}   ${innerVal}`;
      })
    );
  })
);

obs$.pipe(Rx.combineAll()).subscribe((val: string[]) => {
  console.log(val);
});

import * as Rx from 'rxjs';

let innerObsCounter = 0;
let outer: Rx.Observable<any> = Rx.from(['#1', '#2']).pipe(
  Rx.tap((val) => {
    console.log(val);
  }),
  Rx.finalize(() => {
    console.log('______Source observable completed.______');
  })
);
let inner = Rx.interval(1000).pipe(Rx.take(4));

let concatenatedObs = outer.pipe(
  Rx.concatMap((outerVal) => {
    let id = ++innerObsCounter;
    return inner.pipe(
      Rx.map((innerVal) => {
        return `Inner Observable #${id} emitted         =>${innerVal}`;
      }),
      Rx.finalize(() => {
        console.log(`****Inner Observable #${id} completed.****`);
      })
    );
  })
);

concatenatedObs.subscribe(
  (val) => {
    console.log(val);
  },
  Rx.noop,
  () => {
    console.log('Inner observables are now completed');
  }
);

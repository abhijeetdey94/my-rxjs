import * as Rx from 'rxjs';

console.log('MERGEMAP DEMO')
let innerObsCounter = 0;
// let outer: Rx.Observable<any> = Rx.from(['#1', '#2', '#3', '#4']).pipe(
//   Rx.delay(2000),
//   Rx.tap((value) => {
//     console.log(value);
//   }),
//   Rx.finalize(() => {
//     console.log('______Outer observable has completed.______');
//   })
// );

let outer: Rx.Observable<any> = Rx.interval(1000).pipe(
    Rx.tap((value) => {
      console.log(value);
    }),
    Rx.take(10),
    Rx.finalize(() => {
      console.log('______Outer observable has completed.______');
    })
  );
let inner = Rx.interval(3000).pipe(Rx.take(3));

let mergedObs = outer.pipe(
  Rx.mergeMap((outerVal) => {
    let id = ++innerObsCounter;
    return inner.pipe(
      Rx.map((innerVal) => {
        return `Inner Observable #${id} emitted            =>${innerVal}`;
      }),
      Rx.finalize(() => {
        console.log(`****Inner Observable #${id} completed.****`);
      })
    );
  })
);

mergedObs.subscribe(
  (val) => {
    console.log(val);
  },
  Rx.noop,
  () => {
    console.log('Inner observables have also finished parallely..');
  }
);

import * as Rx from 'rxjs';

let outer: Rx.Observable<string> = Rx.from(['Outer-start', 'Outer-second', 'Outer-end']);
let inner: Rx.Observable<string> = Rx.from([
  'Inner-start',
  'Inner-second',
  'Inner-third',
  'Inner-end',
]);

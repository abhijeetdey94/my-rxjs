import * as Rx from "rxjs";

//emit every 2.5 seconds
const first = Rx.interval(1000);
//emit every 2 seconds
const second = Rx.interval(1000);
//emit every 1.5 seconds
const third = Rx.interval(1000);
//emit every 1 second
const fourth = Rx.interval(1000);

//emit outputs from one observable
const example = Rx.merge(
  first.pipe(Rx.mapTo('FIRST!')),
  second.pipe(Rx.mapTo('SECOND!')),
  third.pipe(Rx.mapTo('THIRD')),
  fourth.pipe(Rx.mapTo('FOURTH'))
);
//output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
const subscribe = example.subscribe(val => console.log(val));
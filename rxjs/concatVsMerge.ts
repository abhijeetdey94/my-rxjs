import * as Rx from 'rxjs';

const source = Rx.of(2000, 1000);
const concatExample = source.pipe(Rx.concatMap( delayValue => {
    // console.log(`Delay value ${delayValue} is starting`);
    return Rx.of(`Delay of ${delayValue} is now completed`).pipe(Rx.delay(delayValue));
}));

concatExample.subscribe(console.log);

const mergeExample = source.pipe(
    Rx.delay(5000),
    Rx.mergeMap(delayValue => {
        // console.log(`Delay value ${delayValue} is starting`);
        return Rx.of(`Delay of ${delayValue} is now completed`).pipe(Rx.delay(delayValue));
    })
);

mergeExample.subscribe(console.log);


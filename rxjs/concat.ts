import * as Rx from 'rxjs';

Rx.concat(
    Rx.of(1,2,3),
    Rx.of(4,5,6),
    Rx.of(7,8,9)
).subscribe(console.log);
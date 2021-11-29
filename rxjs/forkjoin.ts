import * as Rx from 'rxjs';


const obs1 = Rx.from(['a1', 'b1', 'c1']);
const obs2 = Rx.from(['a2', 'b2', 'c2']);
const obs3 = Rx.from(['a3', 'b3', 'c3']);

const forkjoinExample = Rx.forkJoin(obs1, obs2, obs3);

forkjoinExample.subscribe(console.log);

/**
 * [ 'c1', 'c2', 'c3' ]
 */
import * as Rx from 'rxjs';

const obs1 = Rx.from(['a1', 'b1', 'c1']);
const obs2 = Rx.from(['a2', 'b2', 'c2']);
const obs3 = Rx.from(['a3', 'b3', 'c3']);

const zipExample = Rx.zip(obs1, obs2, obs3);

zipExample.subscribe(console.log);

/**
 * [ 'a1', 'a2', 'a3' ]
 * [ 'b1', 'b2', 'b3' ]
 * [ 'c1', 'c2', 'c3' ]
 */

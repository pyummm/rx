import * as Rx from 'rxjs';

const obs$ = interval(1000);
const subscription = obs$.pipe(
    take(4),
    shareReplay(3)
);
subscription.subscribe(x => console.log('source A: ', x));
subscription.subscribe(y => console.log('source B: ', y));
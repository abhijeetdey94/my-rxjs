// let startBtn$ = fromEvent(this.startBtn.nativeElement, 'click').pipe(
    //   mapTo(true)
    // );
    // let stopBtn$ = fromEvent(this.stopBtn.nativeElement, 'click').pipe(
    //   mapTo(false)
    // );

    // this.counter$ = merge(startBtn$, stopBtn$).pipe(
    //   switchMap((isTicking: boolean) => {
    //     return isTicking ? interval(1000) : NEVER;
    //   }),
    //   scan((accumulator) => {
    //     console.log(accumulator);
    //     return ++accumulator
    //   }, 0)
    // );
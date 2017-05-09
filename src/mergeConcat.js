import $ from 'jquery'
import { Observable } from 'rxjs/Rx'

/*
Observable.of('Hello')
  .merge(Obserable.of('Everyone'))
  .subscribe(x => console.log(x))

Observable.interval(2000)
  .merge(Observable.interval(1000))
  .take(25)
  .subscribe(x => console.log(x))

// Merge runs in parallel (non-blocking)

const source1$ = Observable.interval(2000).map(x => 'Merge 1: ' + x)
const source2$ = Observable.interval(500).map(x => 'Merge 2: ' + x)

Observable.merge(source1$, source2$)
  .take(25)
  .subscribe(x => console.log(x))
*/

// Concat runs one after the other (blocking)

const source1$ = Observable.range(0, 5).map(x => 'Source 1: ' + x)
const source2$ = Observable.range(6, 5).map(x => 'Source 2: ' + x)

Observable.concat(source1$, source2$)
  .subscribe(x => console.log(x))

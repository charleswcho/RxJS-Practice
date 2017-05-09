import $ from 'jquery'
import { Observable } from 'rxjs/Rx'

/*
Observable.of('Hello')
  .subscribe(x => {
    Observable.of(x + ' Everyone')
      .subscribe(y => console.log(y))
  })
*/

Observable.of('Hello')
  .mergeMap(x => {
    return Observable.of(x + ' Everyone')
  })
  .subscribe(y => console.log(y))

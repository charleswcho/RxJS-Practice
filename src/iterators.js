import $ from 'jquery'
import { Observable } from 'rxjs/Rx'

const source$ = new Observable(observer => {
  console.log('Creating Observable')

  observer.next('Hello World')
  observer.next('Another Value')

  // observer.error(new Error('Error: Something went wrong'))

  setTimeout(() => {
    observer.next('Yet another value')
    observer.complete()
  }, 1000)
})

source$
  .catch(err => Observable.of(err))
  .subscribe(
    res => console.log(res),
    err => console.log(err),
    complete => console.log('Completed')
  )

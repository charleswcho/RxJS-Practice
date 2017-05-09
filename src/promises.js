import $ from 'jquery'
import { Observable } from 'rxjs/Rx'

const myPromise = new Promise((resolve, reject) => {
  console.log('Creating Promise')

  setTimeout(() => resolve('Hello from promise'), 1000)
})

/*
myPromise.then(x => {
  console.log(x)
})
*/

const source$ = Observable.fromPromise(myPromise)

source$.subscribe(x => console.log(x))


const getUser = username => fetch('https://api.github.com/users/' + username).then(res => res.json())

Observable.fromPromise(getUser('bradtraversy')).subscribe(x => console.log(x))

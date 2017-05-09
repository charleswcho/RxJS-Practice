import $ from 'jquery'
import { Observable } from 'rxjs/Rx'

const numbers = [33, 44, 55, 66, 77]

const numbers$ = Observable.from(numbers)

setTimeout(() => numbers.push(88), 1000)
setTimeout(() => numbers.push(99), 1000)

numbers$.subscribe(
  res => console.log(res),
  err => console.log(err),
  complete => console.log('Completed')
)


const posts = [
  { title: 'Post 1', body: 'This is the body' },
  { title: 'Post 2', body: 'This is the body' },
  { title: 'Post 3', body: 'This is the body' },
]

const posts$ = Observable.from(posts)

posts$.subscribe(
  post => {
    $('#posts').append(`<li><h3>${post.title}</h3><p>${post.body}</p></li>`)
  },
  err => console.log(err),
  complete => console.log('Completed')
)

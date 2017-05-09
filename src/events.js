import $ from 'jquery'
import { Observable } from 'rxjs/Rx'


const btn = $('#btn')
const input = $('#input')
const output = $('#output')


const btnStream$ = Observable.fromEvent(btn, 'click')

btnStream$.subscribe(
  res => console.log(res.target.innerHTML),
  err => console.log(err)
)


const inputStream$ = Observable.fromEvent(input, 'keyup')

inputStream$.subscribe(
  res => {
    console.log(res.target.value)
    output.html(res.target.value)
  },
  err => console.log(err),
)


const moveStream$ = Observable.fromEvent(document, 'mousemove')

moveStream$.filter(e => e.clientX > 500 && e.clientY > 500)
  .subscribe(
    res => {
      output.html('X: ' + res.clientX + ' Y: ' + res.clientY)
    },
    err => console.log(err)
  )

// This does the same thing but using jQuery only

// $(document).on('mousemove', e => {
//   if (e.clientX > 500 && e.clientY > 500) {
//     return
//   }
//
//   output.html('X: ' + e.clientX + ' Y: ' + e.clientY)
// })

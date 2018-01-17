
const $ = e => document.querySelector(e)
const $$ = e => document.querySelectorAll(e)

const play = (e) => e.target.innerHTML = 'X'

let player = 0

$$('#hole').forEach(element => {
  element.addEventListener('click', play)
})
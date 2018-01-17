
const $ = e => document.querySelector(e)
const $$ = e => document.querySelectorAll(e)

let player = 0

const play = (e) => {
  // skip if the box is already filled
  if (e.target.innerHTML) return ;
  e.target.innerHTML = player ? 'X' : '0'
  // change the player
  player = player ? 0 : 1
  $('#turn').innerHTML = `Player ${player} it's your turn. &curarr;`
}


$$('#hole').forEach(element => {
  element.addEventListener('click', play)
})
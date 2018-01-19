
const $ = e => document.querySelector(e)
const $$ = e => document.querySelectorAll(e)

let player = 0
const board = Array(9).fill(null)

const play = (e) => {
  // skip if the box is already filled
  if (e.target.innerHTML) return ;
  // skip if someone won
  if (calculateWinner(board)) return ;

  board[e.target.dataset.index] = player ? 'X' : '0'
  e.target.innerHTML = player ? 'X' : '0'
// if someone won after the move
  if (calculateWinner(board)) {
    render(null, calculateWinner(board))
    return;
  }

  // change the player
  player = player ? 0 : 1
  // show the user about whom to play
  $('#status').innerHTML = `player ${player} its your turn.`
}

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const render = (arr, winner = null, reset = null) => {
  if (winner) {
    $('#status').innerHTML = `player ${winner} won`
    return ;
  }

  else if (reset) {
    $$('#hole').forEach( element => element.innerHTML = '' )
    return ;
  }


}

$$('#hole').forEach(element => {
  element.addEventListener('click', play)
})

$('#reset').addEventListener('click', reset)
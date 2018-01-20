// OMG

const state = {
  zeroShouldPlay: true,
  board: Array(9).fill(null),
}

const play = (index) => {
  // skip if the box is already filled or someone already won
  if (calculateWinner(state.board) || state.board[index]) return ;
  // what should I play ?
  state.board[index] = state.zeroShouldPlay ? '0' : 'X'
  // debug
  console.log(state.board, state.zeroShouldPlay, calculateWinner(state.board))
  // change the player
  state.zeroShouldPlay = !state.zeroShouldPlay
  // handle the DOM for me :)
  render(state.board)
}

const render = (arr) => {
  const $ = s => document.querySelector(s)
  const $$ = s => document.querySelectorAll(s)
  const playerName = state.zeroShouldPlay ? '0' : 'X';

  // hell the dom
  $$('#hole').forEach( (element, index) => element.innerHTML = arr[index] )
  $('#status').innerHTML = `Player ${playerName} should play!`
  // finally give up if someone won
  if (calculateWinner(state.board))  $('#status').innerHTML = `player ${calculateWinner(state.board)} Won!`
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


document.querySelectorAll('#hole')
.forEach(element => { element.addEventListener('click', (e) => play(e.target.dataset.index)) })

document.querySelector('#reset')
.addEventListener('click', () => render(Array(9).fill(null)))

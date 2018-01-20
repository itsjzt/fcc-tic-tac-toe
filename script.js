
const $ = e => document.querySelector(e)
const $$ = e => document.querySelectorAll(e)

let zeroShouldPlay = true
const board = Array(9).fill(null)

const play = (e) => {
  const index = e.target.dataset.index
  // skip if the box is already filled
  if (board[index]) return ;
  board[index] = zeroShouldPlay ? '0' : 'X'
  // change the player
  zeroShouldPlay = !zeroShouldPlay
  console.log(board, zeroShouldPlay)
  render(board)
}


const render = (arr, mount = null, unmount = null) => {
  if (mount) {
    // clear
    $$('#hole').forEach( element => element.innerHTML = '' )
    // event listners
    $$('#hole').forEach(element => { element.addEventListener('click', play) })
    $('#reset').addEventListener('click', () => render(null, true))
    return ;
  }

  if (unmount) {
    $('#status').innerHTML = `Game won by ${calculateWinner(arr)}, Reset to play again`
  }

  $$('#hole').forEach( (element, index) => element.innerHTML = arr[index] )
// calculate the winner after play
  if (calculateWinner(arr)) render(arr, null, true)
}

// winning algo
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


// call init for adding event listeners
render(null, true)
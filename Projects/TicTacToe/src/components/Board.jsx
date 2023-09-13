/* eslint-disable react/prop-types */
import Square from "./Square";

const Board = ({isXNext, squares, onPlay}) => {
  
  function calculateWinner(squares) {
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

    for (let i in lines) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }


  const handleClick = (i) => {
    const nextSquares = squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    if (isXNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares)
  };
  
  const val =squares?.every(ele => ele!==null)

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    if(!val){
      status = `Next Player: ${isXNext ? "X" : "O"}`;
    }
    else{
      status=`No one win !`
    }
  }

  let classes
  if(winner){
    classes = 'winner-winner'
  }else {
    if(val){
      classes='noOneWin'
    }else{
      classes=''
    }
  }

  return (
    <>
      <h1 className={classes}>{status} </h1>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} val={val}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} val={val}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} val={val}/>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} val={val}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} val={val}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} val={val}/>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} val={val}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} val={val}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} val={val}/>
      </div>
    </>
  );
};

export default Board;

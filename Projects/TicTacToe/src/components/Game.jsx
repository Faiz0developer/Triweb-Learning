import { useState } from "react";
import Board from "./Board";
import Styles from './Game.module.css'

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove,setCurrentMove] = useState(0)
  const [isXNext, setIsXNext] = useState(true);
  const currentSquare = history[currentMove];
  console.log(history)

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0,currentMove+1),nextSquares]
    console.log(nextHistory)
    // setHistory([...history, nextSquares]);
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length-1)
    setIsXNext(!isXNext);
  };

  
  const jumpTo = (nextMove) =>{
    setCurrentMove(nextMove)
    setIsXNext(nextMove%2===0)
  }

  const moves = history.map((squares,move) => {
    let description;
    if(move>0){
        description = `Go to move # ${move}`
    }else{
        description=`Go to game start`
    }
    return(
        <li key={move}>
            <button onClick={()=>jumpTo(move) }>{description} </button>
        </li>
    )
  })   

  return (
    <div className={Styles.game_container}>
      <Board
        isXNext={isXNext}
        squares={currentSquare}
        onPlay={handlePlay}
        setHistory={setHistory}
        />
        <ol className={Styles.moves}>{moves} </ol>
    </div>
  );
};

export default Game;

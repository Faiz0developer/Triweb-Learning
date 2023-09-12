import { useState } from "react";
import Board from "./Board";
import Styles from './Game.module.css'

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [isXNext, setIsXNext] = useState(true);
  const currentSquare = history[history.length - 1];

  const handlePlay = (nextSquares) => {
    setHistory([...history, nextSquares]);
    setIsXNext(!isXNext);
  };

  const moves = history.map((squares,move) => {
    let description;
    if(move>0){
        description = `Go to move # ${move}`
    }else{
        description=`Go to game start`
    }
    return(
        <li key={move}>
            <button>{description} </button>
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

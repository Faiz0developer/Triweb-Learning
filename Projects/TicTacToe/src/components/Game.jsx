import { useState } from "react";
import Board from "./Board";
import Styles from "./Game.module.css";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isXNext, setIsXNext] = useState(true);
  const [gameMoves, setGameMoves] = useState([]);
  const currentSquare = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setIsXNext(!isXNext);
    setGameMoves(nextHistory);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
    setIsXNext(nextMove % 2 === 0);
  };

  const playAgain = () => {
    setCurrentMove(0);
    setIsXNext(true);
    setGameMoves([]);
  };

  const moves = gameMoves?.map((squares, move) => {
    let gameDescription;
    if (move > 0) {
      gameDescription = `Go to move # ${move}`;
    } else {
      return;
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{gameDescription} </button>
      </li>
    );
  });

  return (
    <div className={Styles.game_container}>
      <div className="container">
        <Board
          isXNext={isXNext}
          squares={currentSquare}
          onPlay={handlePlay}
          setHistory={setHistory}
        />
        <button className="reset-btn" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <div className={Styles.moves}>
        <h4>Moves:</h4>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;

/* eslint-disable react/prop-types */
import Styles from "./Square.module.css";

const Square = ({ value, onSquareClick,val }) => {
  return (
    <button
      className={`${Styles.square} ${val?`${Styles.square_noOneWin}`:''}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;

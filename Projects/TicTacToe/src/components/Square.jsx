/* eslint-disable react/prop-types */
import Styles from "./Square.module.css";

const Square = ({ value, onSquareClick }) => {
  return (
    <button
      className={Styles.square}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;

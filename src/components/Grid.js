import React, { useEffect } from "react";
import Word from "./Word";

const Grid = ({ currentGuess, turn, history, getLetterStatus }) => {


  return (
    <aside className="gridGame">
      {history && history.map((word, index) =>
        <Word getLetterStatus={getLetterStatus} word={turn - 1 === index ? currentGuess : word} isCurrent={turn - 1 === index} key={index} />
      )}
    </aside>
  );
};

export default Grid;

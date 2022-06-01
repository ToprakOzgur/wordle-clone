import React, { useEffect } from "react";
import Word from "./Word";

const Grid = ({ currentGuess, turn, history, getLetterStatus }) => {


  return (
    <aside className="grid flex gap-2">

      {/* {
        (turn === 1) && <Word getLetterStatus={getLetterStatus} word={currentGuess} />
      } */}
      {history && history.map((word, index) => {
        if (turn - 1 === index)
          return <Word getLetterStatus={getLetterStatus} word={currentGuess} isCurrent={true} key={index} />
        return <Word getLetterStatus={getLetterStatus} word={word} key={index} />
      })}


    </aside>
  );
};

export default Grid;

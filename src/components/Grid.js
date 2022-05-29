import React from "react";
import Word from "./Word";

const Grid = ({ currentGuess, turn, history, getLetterStatus }) => {
  return (
    <aside className="grid flex gap-2">
      <Word getLetterStatus={getLetterStatus} />
      <Word getLetterStatus={getLetterStatus} />
      <Word getLetterStatus={getLetterStatus} />
      <Word getLetterStatus={getLetterStatus} />
      <Word getLetterStatus={getLetterStatus} />
      <Word getLetterStatus={getLetterStatus} />
    </aside>
  );
};

export default Grid;

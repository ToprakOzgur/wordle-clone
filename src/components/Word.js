import React from "react";
import Letter from "./Letter";

const Word = ({ getLetterStatus }) => {
  return (
    <div className="flex flex-row gap-2">
      <Letter letter="a" getLetterStatus={getLetterStatus} index={1} />
      <Letter letter="a" getLetterStatus={getLetterStatus} index={2} />
      <Letter letter="c" getLetterStatus={getLetterStatus} index={3} />
      <Letter letter="d" getLetterStatus={getLetterStatus} index={4} />
      <Letter letter="e" getLetterStatus={getLetterStatus} index={5} />
    </div>
  );
};

export default Word;

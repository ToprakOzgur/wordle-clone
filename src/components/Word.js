import React from "react";
import Letter from "./Letter";

const Word = ({ getLetterStatus }) => {
  return (
    <div className="flex flex-row gap-2">
      <Letter letter="A" getLetterStatus={getLetterStatus} index={1} />
      <Letter letter="B" getLetterStatus={getLetterStatus} index={1} />
      <Letter letter="C" getLetterStatus={getLetterStatus} index={1} />
      <Letter letter="D" getLetterStatus={getLetterStatus} index={1} />
      <Letter letter="E" getLetterStatus={getLetterStatus} index={1} />
    </div>
  );
};

export default Word;

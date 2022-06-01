import React from "react";
import Letter from "./Letter";

const Word = ({ getLetterStatus, word, isCurrent }) => {

  return (
    <div className="flex flex-row gap-2">

      {word && word.map((letter, index) => {
        return <Letter letter={letter} getLetterStatus={getLetterStatus} index={index} key={index} isCurrent={isCurrent} />
      })}

      {word && [...Array(5 - word.length)].map((_, i) => (
        <Letter letter="" getLetterStatus={getLetterStatus} index={i} key={i} isCurrent={isCurrent} />
      ))}
      {!word && [...Array(5)].map((_, i) => (
        <Letter letter="" getLetterStatus={getLetterStatus} index={i} key={i} isCurrent={isCurrent} />
      ))}
    </div>
  );
};

export default Word;

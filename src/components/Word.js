import React from "react";
import Letter from "./Letter";

const Word = ({ getLetterStatus, word, isCurrent }) => {

  return (
    <div className="flex gap-2 mb-2 justify-center items-center" >

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

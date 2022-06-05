import React, { useEffect } from "react";

const keys = [["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"], ["a", "s", "d", "f", "g", "h", "j", "k", "l"], ["enter", "z", "x", "c", "v", "b", "n", "m", "del"]];


const Keyboard = ({ handleKeyUp, history }) => {

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, history]);

  function checkUsedKeys(letter) {
    console.log(letter);
    for (const guess of history) {
      if (guess && Array.isArray(guess) && guess.includes(letter)) {
        return "used";
      }
    }
    return "";
  }

  return <div className="text-center mt-2 flex justify-center flex-col gap-2">
    {keys.map((guess) => {
      return <div className="row flex justify-center gap-2">
        {guess.map((b) => { return <span key={b} className={`button ${checkUsedKeys(b)}`} onClick={() => handleKeyUp({ "key": `${b}` })}>{b}</span> })}
      </div>
    })}
  </div>;
};

export default Keyboard;
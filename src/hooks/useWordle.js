import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(1);
  const [currentGuess, setCurrentGuess] = useState([]);
  const [history, setHistory] = useState(Array(5).fill(null));
  const [isWinner, setIsWinner] = useState(false);

  function getLetterStatus(letter, index) {
    // if (solution.includes(letter)) {
    //   if (index === solution.indexOf(letter))
    //     return "match";
    //   return "exists";
    // }
    // return '';
  }

  function handleKeyUp(e) {
    if (isWinner) return;
    if (turn > 6) return;

    if (e.key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
    }
    else if (e.key === "Enter" && currentGuess.length === 5) {

      checkWinner();
    }
    if (/^[A-Za-z]$/.test(e.key) && currentGuess.length < 5) {
      setCurrentGuess((prev) => [...prev, e.key]);
    }
  }

  function checkWinner() {
    if (currentGuess.join("") === solution) {
      console.log("winner");
      setIsWinner(true);
    } else {
      setHistory((prev) => [...prev, currentGuess]);
      setCurrentGuess([]);
      setTurn((prev) => prev + 1);
    }
  }
  return [turn, handleKeyUp, currentGuess, history, getLetterStatus];
};

export default useWordle;

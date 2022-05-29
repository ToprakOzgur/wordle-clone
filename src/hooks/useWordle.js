import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(1);
  const [currentGuess, setCurrentGuess] = useState([]);
  const [history, setHistory] = useState(Array(5).fill(null));
  const [isWinner, setIsWinner] = useState(false);

  function handleKeyUp(e) {
    if (isWinner) return;
    if (turn > 6) return;

    if (e.key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
    }
    else if (e.key === "Enter" && currentGuess.length === 5) {
      console.log("currentGuess", currentGuess);
      console.log(currentGuess.join(""));
      console.log(solution);
      if (currentGuess.join("") === solution) {
        console.log("winner");
        setIsWinner(true);
      }

      setHistory((prev) => [...prev, currentGuess]);
      setCurrentGuess([]);
      setTurn((prev) => prev + 1);
    }
    if (/^[A-Za-z]$/.test(e.key) && currentGuess.length < 5) {
      setCurrentGuess((prev) => [...prev, e.key]);
    }
  }

  return [turn, handleKeyUp, currentGuess, history];
};

export default useWordle;

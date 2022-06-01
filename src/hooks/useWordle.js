import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(1);
  const [currentGuess, setCurrentGuess] = useState([]);
  const [history, setHistory] = useState(Array(6).fill(undefined));
  const [isWinner, setIsWinner] = useState(false);

  function getLetterStatus(letter, index) {

    const filtered = solution.split("").filter((x, i) => x === letter && i === index);
    if (filtered.length > 0)
      return "match";
    if (solution.includes(letter))
      return "exists";
    return '';
  }

  function handleKeyUp(e) {
    if (isWinner) return;
    if (turn > 6) return;

    if (e.key === "Backspace")
      setCurrentGuess((prev) => prev.slice(0, -1));
    else if (e.key === "Enter" && currentGuess.length === 5)
      checkWinner();
    if (/^[A-Za-z]$/.test(e.key) && currentGuess.length < 5)
      setCurrentGuess((prev) => [...prev, e.key]);

  }

  function checkWinner() {
    setHistory(() => {
      let his = [...history];
      his[turn - 1] = currentGuess;
      return his;
    });
    setTurn((prev) => prev + 1);

    if (currentGuess.join("") === solution) {
      console.log("winner");
      setIsWinner(true);
    }
    setCurrentGuess([]);

  }
  return [turn, handleKeyUp, currentGuess, history, getLetterStatus];
};

export default useWordle;

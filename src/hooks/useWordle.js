import { useState } from "react";
import data from "../data/data";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(1);
  const [currentGuess, setCurrentGuess] = useState([]);
  const [history, setHistory] = useState(Array(6).fill(undefined));
  const [isWinner, setIsWinner] = useState(false);
  const [wordNotValid, setWordNotValid] = useState(false);

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

    if (e.key === "Backspace" || e.key === "del") {

      setCurrentGuess((prev) => prev.slice(0, -1));
      setWordNotValid(false)
    }
    else if (e.key === "Enter" && currentGuess.length === 5)
      checkWinner();
    if (/^[A-Za-z]$/.test(e.key) && currentGuess.length < 5)
      setCurrentGuess((prev) => [...prev, e.key]);

  }

  function checkWinner() {

    if (!data.includes(currentGuess.join(""))) {
      setWordNotValid(true)
      return;
    }
    setHistory(() => {
      let his = [...history];
      his[turn - 1] = currentGuess;
      return his;
    });
    setTurn((prev) => prev + 1);

    if (currentGuess.join("") === solution) {
      console.log("winner");
      setIsWinner(true);
    } else if (turn === 6) {
      setCurrentGuess([]);
      setHistory(Array(6).fill(undefined));
      setTurn(1);
    }
    setCurrentGuess([]);

  }
  return [turn, handleKeyUp, currentGuess, history, getLetterStatus, isWinner, wordNotValid];
};

export default useWordle;

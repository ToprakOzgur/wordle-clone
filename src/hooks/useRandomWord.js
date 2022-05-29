import data from "../data/data";
import { useEffect, useState } from "react";

const useRandomWord = () => {
  const [randomWord, setRandomWord] = useState("");

  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
  }
  function generateNewWord() {
    setRandomWord(getRandomWord());
  }

  useEffect(() => {
    generateNewWord();
  }, []);

  return [randomWord, generateNewWord];
};

export default useRandomWord;

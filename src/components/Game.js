import React from "react";
import Grid from "./Grid";
import Keyboard from "./Keyboard";
import useWordle from "../hooks/useWordle";

const Game = ({ solution }) => {
  const [turn, handleKeyUp, currentGuess, history] = useWordle(solution);
  return (
    <section className="grid flex gap-2">
      <h2>{currentGuess}</h2>
      <Grid />
      <Keyboard handleKeyUp={handleKeyUp} />
    </section>
  );
};

export default Game;

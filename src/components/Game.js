import React, { useEffect, useRef } from "react";
import Grid from "./Grid";
import Keyboard from "./Keyboard";
import useWordle from "../hooks/useWordle";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Game = ({ solution }) => {
  const [turn, handleKeyUp, currentGuess, history, getLetterStatus, isWinner, wordNotValid] = useWordle(solution);
  const prevTurnRef = useRef();

  useEffect(() => {
    if (isWinner)
      notifyWinner();
    if (wordNotValid === true)
      notifyNotValidWord();
  }, [isWinner, wordNotValid])

  useEffect(() => {
    if (turn === 1 && prevTurnRef.current === 6) {
      console.log("you lost");
      notifyLost();
    }
    prevTurnRef.current = turn;

  }, [turn])

  const notifyWinner = () => toast.success('Congratulations!', {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  const notifyNotValidWord = () => toast.warn('Word Not Found!', {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  const notifyLost = () => toast.error('You Lost!', {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  return (
    <section className="w-full">
      <Grid currentGuess={currentGuess} turn={turn} history={history} getLetterStatus={getLetterStatus} />
      <Keyboard handleKeyUp={handleKeyUp} history={history} />
      <ToastContainer />
    </section>
  );
};

export default Game;

import React from "react";
import Game from "./components/Game";
import useRandomWord from "./hooks/useRandomWord";

function App() {
  const [solution, getNewSolution] = useRandomWord();

  return (
    <div className="h-full flex flex-col app justify-center items-center ">
      <h1 className="text-3xl font-bold underline text-gray-200 mb-6  mt-2 text-center">WORDLE</h1>
      <Game solution={solution} />
    </div>
  );
}

export default App;

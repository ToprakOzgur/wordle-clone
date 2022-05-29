import React from "react";
import Game from "./components/Game";
import useRandomWord from "./hooks/useRandomWord";

function App() {
  const [solution, getNewSolution] = useRandomWord();

  return (
    <div className="bg-cyan-200 h-full flex justify-start items-center flex-col">
      <h1 className="text-3xl font-bold underline">{solution}</h1>
      <Game solution={solution} />
    </div>
  );
}

export default App;

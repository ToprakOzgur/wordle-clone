import React from "react";
import Letter from "./Letter";

const Word = () => {
  return (
    <div className="flex flex-row gap-2">
      <Letter letter="A" />
      <Letter letter="B" />
      <Letter letter="C" />
      <Letter letter="D" />
      <Letter letter="E" />
    </div>
  );
};

export default Word;

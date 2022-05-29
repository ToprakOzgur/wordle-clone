import React, { useEffect } from "react";

const Letter = ({ letter, getLetterStatus, index }) => {
  useEffect(() => {

    getLetterStatus(letter, index);
  }, [letter, index, getLetterStatus])

  return <div className="h-20 w-20 text-center bg-slate-400 grid items-center">{letter}</div>;
};

export default Letter;

import React, { useEffect, useState } from "react";

const Letter = ({ letter, getLetterStatus, index }) => {
  const [letterClass, setLetterClass] = useState("");

  useEffect(() => {
    setLetterClass(getLetterStatus(letter, index));

  }, [letter, index, getLetterStatus])

  return <div className={`h-20 w-20 text-center bg-slate-400 grid items-center ${letterClass}`} > {letter}</div >;
};

export default Letter;

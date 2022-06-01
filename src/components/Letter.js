import React, { useEffect, useState } from "react";

const Letter = ({ letter, getLetterStatus, index, isCurrent }) => {
  const [letterClass, setLetterClass] = useState("");

  useEffect(() => {

    console.log(letter);
    if (letter !== "")
      setLetterClass(getLetterStatus(letter, index));

  }, [letter, index, getLetterStatus])
  if (!isCurrent)
    return <div className={`h-20 w-20 text-center bg-slate-400 grid items-center ${letterClass}`} > {letter}</div >;
  return <div className={`h-20 w-20 text-center bg-slate-400 grid items-center`} > {letter}</div >;
};

export default Letter;

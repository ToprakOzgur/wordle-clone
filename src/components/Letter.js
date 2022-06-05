import React, { useEffect, useState } from "react";

const Letter = ({ letter, getLetterStatus, index, isCurrent }) => {
  const [letterClass, setLetterClass] = useState("");

  useEffect(() => {

    if (letter !== "")
      setLetterClass(getLetterStatus(letter, index));

  }, [letter, index, getLetterStatus])
  if (!isCurrent)
    return <div className={`bg-slate-200 letter ${letterClass}`} > {letter.toUpperCase()}</div >;
  return <div className={`bg-slate-400 letter`} > {letter.toUpperCase()}</div >;
};

export default Letter;

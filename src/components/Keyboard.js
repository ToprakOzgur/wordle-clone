import React, { useEffect } from "react";

const Keyboard = ({ handleKeyUp }) => {
  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  return <div></div>;
};

export default Keyboard;

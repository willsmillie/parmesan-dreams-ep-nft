import { GlobalHotKeys } from "react-hotkeys";
import React from "react";

let seq = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
].join(" ");

const KonamiCode = ({ handler, children }) => {
  const keyMap = {
    KONAMI_CODE: seq,
  };
  const handlers = {
    KONAMI_CODE: (event) => handler(event),
  };

  return (
    <GlobalHotKeys keyMap={keyMap} handlers={handlers} children={children} />
  );
};

export default KonamiCode;

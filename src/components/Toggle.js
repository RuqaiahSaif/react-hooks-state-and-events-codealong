import React from "react";
import { useState } from "react";
function Toggle() {
  const [isOn, setIson] = useState(false);
  function handelclick() {
    setIson((isOn) => !isOn)
    console.log(isOn);
  }
  const color = isOn ? "red" : "white";
  return <button style={{ backgroundColor: color }}
  onClick={handelclick}>{!isOn ?"OFF":"ON"}</button>;
}

export default Toggle;

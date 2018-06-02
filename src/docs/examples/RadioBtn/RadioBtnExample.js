import React from "react";
import RadioBtn from "react-ultra-instinct/RadioBtn";

export default () => {
  return (
    <RadioBtn
      value={"example"}
      label={"example 1"}
      onChange={e => console.log(e.target.value)}
    />
  );
};

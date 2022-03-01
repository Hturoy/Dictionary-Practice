import React from "react";
import { Meaning } from "./Meaning";

export const WordsParent = ({ object }) => {
  const meanings = object.meanings;
  console.log(meanings);
  return (
    <>
      <h2>{object.word}</h2>
      <p>{object.phonetic}</p>

      {meanings.map((meaning, idx) => {
        return <Meaning key={idx} object={meaning} />;
      })}
    </>
  );
};

import React from "react";
import { Meaning } from "./Meaning";
import Definition from "./Definition";
import { StyledLink } from "./navigation/StyledLink";

export const WordsParent = ({ object }) => {
  const meanings = object.meanings;
  console.log(meanings);
  return (
    <>
      <h2>{object.word}</h2>
      <p>{object.phonetic}</p>

      {meanings.map((meaning, idx) => {
        return (
          <>
            <Meaning object={meaning} />
            <StyledLink to={`/${object.word}`}>
              More about <strong>"{object.word}"</strong>
            </StyledLink>
          </>
        );
      })}
    </>
  );
};

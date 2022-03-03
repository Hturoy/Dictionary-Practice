import React from "react";

const Definition = ({ object }) => {
  return (
    <div>
      <p>Definition: {object.definition}</p>

      <p>Example: {object.example}</p>
    </div>
  );
};

export default Definition;

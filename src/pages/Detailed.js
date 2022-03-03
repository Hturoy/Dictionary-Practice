import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/Api";

import React from "react";

export default function Detailed(props) {
  const { location } = useParams();
  const [word, setWord] = useState({});
  console.log({ location });

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(BASE_URL + location);
      console.log(data);
      setWord(data.data[0]);
    };
    fetchData().catch(console.error);
  }, [location]);

  if (!word.hasOwnProperty("word")) {
    return (
      <div>
        <strong>{location}</strong> Loading...
      </div>
    );
  }
  return (
    <div>
      <h1>{word.word}</h1>
    </div>
  );
}

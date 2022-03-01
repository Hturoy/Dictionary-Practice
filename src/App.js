import axios from "axios";
import { useEffect, useState } from "react";
import { WordsParent } from "./components/WordsParent";
import { BASE_URL } from "./utils/Api";

function App() {
  const [word, setWord] = useState("");
  const [query, setQuery] = useState("Discovery"); //search data!!
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(BASE_URL + query);
      console.log(data);
      setWord(data.data[0]);
    };
    fetchData().catch(console.error);
  }, [query]);

  const handleFiltering = (e) => {
    setFilter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(filter);
    setFilter("");
  };

  if (word === "") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search for any english word</label>

        <input
          className={"search"}
          type={"text"}
          placeholder={"Search..."}
          value={filter}
          onChange={handleFiltering}
        />
      </form>
      <h2>Results: </h2>
      <WordsParent object={word} />
    </div>
  );
}

export default App;

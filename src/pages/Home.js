import axios from "axios";
import { useEffect, useState } from "react";
import { WordsParent } from "../components/WordsParent";
import { BASE_URL } from "../utils/Api";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 800px;
  max-width: 500px;
  margin: auto;
  padding: 20px;
  background-color: teal;
  border-radius: 12px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  label {
    font-weight: 600;
    font-size: 30px;
  }

  input {
    height: 20px;
    border: 0;
    border-radius: 2px;
    margin-bottom: 20px;
  }
`;

const Home = () => {
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
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="search">Search for any english word</label>

        <input
          className={"search"}
          type={"text"}
          placeholder={"Search..."}
          value={filter}
          onChange={handleFiltering}
        />
      </StyledForm>
      <h2>Results: </h2>
      <WordsParent object={word} />
    </Container>
  );
};

export default Home;

import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import "./Home.css";
import { useGifs } from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";

const POPULAR_GIFS = ["Dogs", "Cats"];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, setPath] = useLocation();
  const { loading, gifs } = useGifs();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log(keyword);
    setPath(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <div className="container-home">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          placeholder="Search a gif..."
          type="text"
          value={keyword}
        />
      </form>
      <h3>The most popular Gifs</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}> {popularGif}</Link>
          </li>
        ))}
      </ul>

      <h3>Last Results:</h3>
      <ListOfGifs gifs={gifs} />
    </div>
  );
}

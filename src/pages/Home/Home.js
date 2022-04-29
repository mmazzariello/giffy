import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import "./Home.css";

const POPULAR_GIFS = ["Dogs", "Cats"];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, setPath] = useLocation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
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
    </div>
  );
}

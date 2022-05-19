import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import "./Home.css";
import { useGifs } from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import TrendingSearches from "../../components/TrendigSearches/TrendingSearches";

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
      <TrendingSearches />
      <h3>Last Results:</h3>
      <ListOfGifs gifs={gifs} />
    </div>
  );
}

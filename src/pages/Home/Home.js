import React, { useCallback } from "react";
import { Link, useLocation } from "wouter";
import "./Home.css";
import { useGifs } from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import TrendingSearches from "../../components/TrendigSearches/TrendingSearches";
import SearchForm from "../../components/SearchForm/SearchForm";

export default function Home() {
  const { loading, gifs } = useGifs();
  const [path, setPath] = useLocation();

  const handleSubmit = useCallback(
    ({ keyword }) => {
      setPath(`/search/${keyword}`);
    },
    [setPath]
  );

  return (
    <div className="container-home">
      <SearchForm onSubmit={handleSubmit} />
      <TrendingSearches />
      <h3>Last Results:</h3>
      <ListOfGifs gifs={gifs} />
    </div>
  );
}

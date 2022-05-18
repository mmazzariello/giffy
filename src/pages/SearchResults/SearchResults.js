import React from "react";
import Spinner from "./../../components/Spinner/Spinner";
import ListOfGifs from "./../../components/ListOfGifs/ListOfGifs";
import "./SearchResults.css";
import { useGifs } from "./../../hooks/useGifs";

function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });

  return <div>{loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}</div>;
}

export default React.memo(SearchResults);

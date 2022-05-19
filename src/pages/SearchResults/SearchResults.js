import React from "react";
import Spinner from "./../../components/Spinner/Spinner";
import ListOfGifs from "./../../components/ListOfGifs/ListOfGifs";
import "./SearchResults.css";
import { useGifs } from "./../../hooks/useGifs";

function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3>{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
        </>
      )}
      <br />
      <button onClick={handleNextPage}>Get next page</button>
    </div>
  );
}

export default React.memo(SearchResults);

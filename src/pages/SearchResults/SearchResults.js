import React, { useRef } from "react";
import Spinner from "./../../components/Spinner/Spinner";
import ListOfGifs from "./../../components/ListOfGifs/ListOfGifs";
import "./SearchResults.css";
import { useGifs } from "./../../hooks/useGifs";
import useNearScreen from "../../hooks/useNearScreen";

function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({ externalRef });

  // const handleNextPage = () => setPage((prevPage) => prevPage + 1);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3>{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </>
      )}
      <br />
      {/* <button onClick={handleNextPage}>Get next page</button> */}
    </div>
  );
}

export default React.memo(SearchResults);

import React, { useCallback, useEffect, useRef } from "react";
import Spinner from "./../../components/Spinner/Spinner";
import ListOfGifs from "./../../components/ListOfGifs/ListOfGifs";
import "./SearchResults.css";
import { useGifs } from "./../../hooks/useGifs";
import useNearScreen from "../../hooks/useNearScreen";
import debounce from "just-debounce-it";
import useSEO from "../../hooks/useSEO";

function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const title = gifs ? `${gifs.length} resultados de ${keyword}` : loading ? "Cargando..." : "";
  useSEO({ title });

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  );

  useEffect(
    function () {
      console.log(isNearScreen);
      if (isNearScreen) debounceHandleNextPage();
    },
    [debounceHandleNextPage, isNearScreen]
  );

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

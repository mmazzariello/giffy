import React, { useState, useEffect } from "react";
import Gif from "./Gif";
import getGifs from "./../services/getGifs";
import "./ListOfGifs.css";

export default function ListOfGifs({ params }) {
  const { keyword } = params;

  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      getGifs({ keyword }).then((gifs) => setGifs(gifs));
    },
    [keyword]
  );

  return (
    <div>
      {gifs.map(({ title, id, url }) => (
        <Gif key={id} url={url} title={title} id={id} />
      ))}
    </div>
  );
}

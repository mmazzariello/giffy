import React, { useState, useEffect } from "react";
import Gif from "../../components/Gif";
import getGifs from "../../services/getGifs";
import "./ListOfGifs.css";

export default function ListOfGifs({ params }) {
  const { keyword } = params;

  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      setLoading(true);
      getGifs({ keyword }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
      });
    },
    [keyword]
  );

  // if (loading) return <i>Cargando</i>;

  return (
    <div>
      {gifs.map(({ title, id, url }) => (
        <Gif key={id} url={url} title={title} id={id} />
      ))}
    </div>
  );
}

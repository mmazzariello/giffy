import React from "react";
import GifsContext from "./../../context/GifsContext";
import "./Detail.css";
import Gif from "./../../components/Gif/Gif";
import useGlobalGifs from "../../hooks/useGlobalGifs";

export default function Detail({ params }) {
  const gifs = useGlobalGifs();
  console.log(gifs);

  const gif = gifs.find((singleGif) => singleGif.id === params.id);

  return <Gif {...gif} />;
}

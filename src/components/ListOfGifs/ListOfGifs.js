import React from "react";
import Gif from "./../Gif/Gif";

export default function ListOfGifs({ gifs }) {
  return (
    <div>
      {gifs.map(({ id, title, url, key }) => (
        <Gif id={id} key={key} title={title} url={url} />
      ))}
    </div>
  );
}

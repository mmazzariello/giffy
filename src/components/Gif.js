import React from "react";
import "./Gif.css";

export default function Gif({ title, id, url }) {
  return (
    <a href={`#${id}`} className="container">
      <img src={url} alt="" />
      <p>{title}</p>
    </a>
  );
}

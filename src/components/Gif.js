import React from "react";

export default function Gif({ url, title }) {
  return (
    <div className="container">
      <img src={url} alt="" />
      <p>{title}</p>
    </div>
  );
}

import React from "react";
import { Link } from "wouter";
import "./Gif.css";

export default function Gif({ title, id, url }) {
  return (
    <div>
      <div className="container">
        <Link to={`/gif/${id}`}>
          <img loading="lazy" src={url} alt="" />
          <p>{title}</p>
        </Link>
      </div>
    </div>
  );
}

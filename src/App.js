import React, { useState } from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

// const GIFS = [
//   "https://media4.giphy.com/media/jxODdkVOIGFgc/giphy.webp?cid=ecf05e479casxzac6ktwem47j0q5b0jg66jxge3xm41vh262&rid=giphy.webp&ct=g",
//   "https://media4.giphy.com/media/EatwJZRUIv41G/giphy.gif?cid=ecf05e47r7e963wtgysmdinlcgeexffy3i6y7y3ilbnjqgc8&rid=giphy.gif&ct=g",
// ];

// const DIFF_GIFS = [
//   "https://media1.giphy.com/media/H2SRCPod2Bfos/200w.webp?cid=ecf05e479casxzac6ktwem47j0q5b0jg66jxge3xm41vh262&rid=200w.webp&ct=g",
// ];

export default function App() {
  const [keyword, setKeyword] = useState("panda");
  return (
    <div className="App">
      <h1>Animals</h1>
      <button onClick={() => setKeyword("dog")}>Change Animal</button>
      <section className="App-content">
        <ListOfGifs keyword={keyword} />
      </section>
    </div>
  );
}

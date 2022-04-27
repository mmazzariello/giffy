import React, { useState, useEffect } from "react";
import "./App.css";
import getGifs from "./services/getGifs";

// const GIFS = [
//   "https://media4.giphy.com/media/jxODdkVOIGFgc/giphy.webp?cid=ecf05e479casxzac6ktwem47j0q5b0jg66jxge3xm41vh262&rid=giphy.webp&ct=g",
//   "https://media4.giphy.com/media/EatwJZRUIv41G/giphy.gif?cid=ecf05e47r7e963wtgysmdinlcgeexffy3i6y7y3ilbnjqgc8&rid=giphy.gif&ct=g",
// ];

// const DIFF_GIFS = [
//   "https://media1.giphy.com/media/H2SRCPod2Bfos/200w.webp?cid=ecf05e479casxzac6ktwem47j0q5b0jg66jxge3xm41vh262&rid=200w.webp&ct=g",
// ];

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    console.log("new effect");
    getGifs({ keyword: "panda" }).then((gifs) => setGifs(gifs));
  }, []);

  return (
    <div className="App">
      <h1>Panda love</h1>
      <section className="App-content">
        {gifs.map((singleGif) => {
          return (
            <div>
              <img src={singleGif.url} alt="" />
              <p>{singleGif.title}</p>
              {/* <small>{singleGif.id}</small> */}
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;

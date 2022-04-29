import React from "react";
import "./App.css";
import SearchResults from "./pages/SearchResults/ListOfGifs";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import { Link, Route } from "wouter";

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <i>Home</i>
        </Link>
        {/* <Link to="/gif/animals">Animals</Link>
        <Link to="/gif/dog">Dogs</Link>
        <Link to="/gif/cat">Cats</Link> */}
        <Route component={Home} path="/" />
        <Route component={SearchResults} path="/search/:keyword" />
        <Route component={Detail} path="/gif/:id" />
      </section>
    </div>
  );
}

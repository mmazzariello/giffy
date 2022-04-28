import React from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Link, Route } from "wouter";

export default function App() {
  return (
    <div className="App">
      <h1>Animals</h1>
      <section className="App-content">
        <Link to="/gif/animals">Animals</Link>
        <Link to="/gif/dog">Dogs</Link>
        <Link to="/gif/cat">Cats</Link>
        <Route component={ListOfGifs} path="/gif/:keyword" />
      </section>
    </div>
  );
}

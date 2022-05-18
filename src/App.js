import React, { useState } from "react";
import "./App.css";
import SearchResults from "./pages/SearchResults/SearchResults";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import { Link, Route } from "wouter";
import Context from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";
// import ListOfGifs from "./components/ListOfGifs/ListOfGifs";

export default function App() {
  return (
    <Context.Provider value={{ name: "midu", suscribeteAlCanal: true }}>
      <div className="general-container-app">
        <Link to="/">
          <i>🏠</i>
        </Link>
        <div className="App">
          <section className="App-content">
            {/* <h1>App</h1> */}
            <GifsContextProvider>
              <Route component={Home} path="/" />
              <Route component={SearchResults} path="/search/:keyword" />
              <Route component={Detail} path="/gif/:id" />
            </GifsContextProvider>
          </section>
        </div>
      </div>
    </Context.Provider>
    // <Context.Provider value={{ name: "midu", suscribeteAlCanal: true }}>
    //   <div className="App">
    //     <section className="App-content">
    // <h1>App</h1>
    //       <Link to="/">
    //         <i>Home</i>
    //       </Link>
    //       <GifsContextProvider>
    //         <Route component={Home} path="/" />
    //         <Route component={SearchResults} path="/search/:keyword" />
    //         <Route component={Detail} path="/gif/:id" />
    //       </GifsContextProvider>
    //     </section>
    //   </div>
    // </Context.Provider>
  );
}

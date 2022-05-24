import React, { Suspense } from "react";
import "./App.css";
import SearchResults from "./pages/SearchResults/SearchResults";
import Detail from "./pages/Detail/Detail";
import { Link, Route } from "wouter";
import Context from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";
// import ListOfGifs from "./components/ListOfGifs/ListOfGifs";

const HomePage = React.lazy(() => import("./pages/Home/Home"));

export default function App() {
  return (
    <Context.Provider value={{ name: "midu", suscribeteAlCanal: true }}>
      <div className="general-container-app">
        <Link to="/">
          <i>GIPHY</i>app
        </Link>
        <div className="App">
          <Suspense fallback={null}>
            <section className="App-content">
              {/* <h1>App</h1> */}
              <GifsContextProvider>
                <Route component={HomePage} path="/" />
                <Route component={SearchResults} path="/search/:keyword" />
                <Route component={Detail} path="/gif/:id" />
                <Route component={() => <h1>404 ERROR</h1>} path="/404" />
              </GifsContextProvider>
            </section>
          </Suspense>
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

import React, { useEffect, useState, useRef } from "react";
import getTrendingTerms from "../../services/getTrendinTermsServices";
import Category from "./../../components/Category/Category";

function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(function () {
    getTrendingTerms().then(setTrends);
  }, []);

  return <Category name="Trendings" options={trends} />;
}

export default function LazyTrending() {
  const [show, setShow] = useState(false);
  const elementRef = useRef();

  useEffect(function () {
    let observer;

    const onChange = (entries, observer) => {
      // console.log("entries", entries);
      const el = entries[0];
      // console.log("el", el);
      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer").then(() => {
            observer = new IntersectionObserver(onChange, {
              rootMargin: "100px",
            });
            observer.observe(elementRef.current);
          })
    );

    return () => observer && observer.disconnect();
  });
  return <div ref={elementRef}>{show ? <TrendingSearches /> : null}</div>;
}

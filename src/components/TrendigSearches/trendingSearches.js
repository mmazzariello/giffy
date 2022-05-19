import React, { useEffect, useState } from "react";
import getTrendingTerms from "../../services/getTrendinTermsServices";
import Category from "./../../components/Category/Category";
import useNearScreen from "./../../hooks/useNearScreen";

function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(function () {
    getTrendingTerms().then(setTrends);
  }, []);

  return <Category name="Trendings" options={trends} />;
}

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "200px" });

  return <div ref={fromRef}>{isNearScreen ? <TrendingSearches /> : null}</div>;
}

import React, { useEffect, useState } from "react";
import getTrendingTerms from "../../services/getTrendinTermsServices";
import Category from "./../../components/Category/Category";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(function () {
    getTrendingTerms().then(setTrends);
  }, []);

  return <Category name="Trendings" options={trends} />;
}

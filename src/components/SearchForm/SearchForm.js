import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log(keyword);
    onSubmit({
      keyword,
    });
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} placeholder="Search a gif..." type="text" value={keyword} />
    </form>
  );
}

export default React.memo(SearchForm);

import { getSuggestedQuery } from "@testing-library/react";
import React, { useState } from "react";

const Search = () => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          placeholder="Search Characters"
          className="form-control"
          value={text}
          onChange={(event) => {
            onChange(event.target.value);
          }}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;

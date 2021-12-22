import React, { useState } from "react";

const Search = (props) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    props.getQuery(q);
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

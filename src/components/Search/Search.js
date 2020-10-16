import React from "react";
import "./Search.css";

const Search = props => {
  let searchInputStyle = "form-input";
  if (props.hasError) {
    searchInputStyle += " form-input-error";
  }
  return (
    <div className="search-wrapper">
      <h1 className="search-title">Today's Weather</h1>
      <form className="form-wrapper">
        <label htmlFor="search" className="form-label-text">
          Search by zip code:
        </label>
        <input
          type="text"
          placeholder="example: 02921"
          id="search"
          name="search"
          className={searchInputStyle}
          onChange={props.onChange}
          value={props.textValue}
          ref={props.inputRef}
        />
        <input
          type="submit"
          value="Search"
          className="form-submit"
          onClick={props.onSubmit}
        />
      </form>
    </div>
  );
};

export default Search;

import React from "react";
import "./Header.css";
const Header = props => {
  return (
    <div className="header-wrapper">
      <h1 className="header-title">Today's Weather</h1>
      <form className="form-wrapper">
        <label htmlFor="search" className="form-label-text">
          Search by zip code:
        </label>
        <input
          type="text"
          placeholder="example: 02921"
          id="search"
          name="search"
          className="form-label-input"
          onChange={props.onChange}
          value={props.textValue}
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

export default Header;

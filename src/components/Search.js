import React from 'react';
import { MdSearch } from 'react-icons/md';
import PropTypes from 'prop-types';

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="Type to search ..."></input>
    </div>
  );
};
Search.propTypes = {
  handleSearchNote: PropTypes.func
};
export default Search;

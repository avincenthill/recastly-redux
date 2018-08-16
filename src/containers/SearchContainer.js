import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';
import handleVideoSearch from '../actions/search.js';

const mapDispatchToProps = dispatch => {
  return {
    handleSearchInputChange: q => dispatch(handleVideoSearch(q))
  };
};

const SearchContainer = connect(
  null,
  mapDispatchToProps
)(Search);

export default SearchContainer;

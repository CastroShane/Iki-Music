import React, { useContext, useEffect } from "react";
import SearchContext from "../../../context/SearchContext";

const SearchResultPage = () => {
  const { userQuery, setUserQuery, searchDispatch, searchState } =
    useContext(SearchContext);
  console.log("searchState:", searchState);
  return <div>SearchResultPage</div>;
};

export default SearchResultPage;

import React, { useContext, useState } from "react";
import styled from "styled-components";
import { BsSearch, BsXLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import SearchContext from "../../../context/SearchContext";
const fetchArtist = async (userQuery, dispatcher) => {
  try {
    const response = await fetch(`/search-artist/?q=${userQuery}`);
    const data = await response.json();
    dispatcher({ type: "search-artist", data: data.data });
  } catch (err) {
    console.log(err);
  }
};

const fetchAlbum = async (userQuery, dispatcher) => {
  try {
    const response = await fetch(
      `https://iki-music.onrender.com/search-albums/?q=${userQuery}`
    );
    const data = await response.json();
    dispatcher({ type: "search-albums", data: data.data });
  } catch (err) {
    console.log(err);
  }
};

const fetchSongs = async (userQuery, dispatcher) => {
  try {
    const response = await fetch(
      `https://iki-music.onrender.com/search-songs/?q=${userQuery}`
    );
    const data = await response.json();
    dispatcher({ type: "search-songs", data: data.data });
  } catch (err) {
    console.log(err);
  }
};
const SearchBar = () => {
  const { userQuery, setUserQuery, searchDispatch, searchState } =
    useContext(SearchContext);

  const handleFilter = (event) => {
    const itemSearched = event.target.value;
    setUserQuery(itemSearched);
  };

  const handleSearch = async () => {
    await fetchArtist(userQuery, searchDispatch);
    await fetchAlbum(userQuery, searchDispatch);
    await fetchSongs(userQuery, searchDispatch);
  };
  return (
    <Container>
      <InputWrapper>
        <StyledInput
          type="text"
          placeholder="What do you want to listen to?"
          onChange={handleFilter}
          value={userQuery}
        />
        <SearchIcon>
          <Link to={`/search/?q=${userQuery}`} onClick={handleSearch}>
            <BsSearch />
          </Link>
        </SearchIcon>
      </InputWrapper>
    </Container>
  );
};

const StyledInput = styled.input`
  background-color: white;
  border: 0;
  border-radius: 2px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  font-size: 18px;
  padding: 15px;
  height: 6vh;
  width: 40vw;

  &:focus {
    outline: none;
  }
`;
const StyledLink = styled(Link)`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: black;

  &:hover {
    background-color: lightgrey;
  }
  p {
    margin-left: 10px;
  }
`;
const SearchIcon = styled.div`
  height: 6vh;
  width: 50px;
  background-color: white;
  display: grid;
  place-items: center;
`;
const Container = styled.div``;

const InputWrapper = styled.div`
  margin-top: 10px;
  display: flex;
`;

const ResultWrapper = styled.div`
  position: fixed;
  margin-top: 5px;
  width: 42vw;
  height: 200px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default SearchBar;

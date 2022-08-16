import React, { useContext } from "react";
import styled from "styled-components";
import { GenreContext } from "../../context/GenreContext";

const GenreFilter = () => {
  const { filteredGenre, setFilteredGenre } = useContext(GenreContext);
  const handleAtoZ = () => {
    const newGenreArray = [...filteredGenre];
    newGenreArray.sort((a, b) => (a.name > b.name ? 1 : -1));
    setFilteredGenre(newGenreArray);
  };

  const handleZtoA = () => {
    const newGenreArray = [...filteredGenre];
    newGenreArray.sort((a, b) => (a.name > b.name ? -1 : 1));
    setFilteredGenre(newGenreArray);
  };
  return (
    <>
      <Wrapper>
        <h3>Sort by:</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button onClick={() => handleAtoZ()}>A - Z</Button>
          <Button onClick={() => handleZtoA()}>Z - A</Button>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 0px;
  margin-bottom: 10px;
  text-align: center;
  align-items: center;
  width: 15%;
  font-size: smaller;
  display: flex;
`;
const Button = styled.button`
  margin: 5px;
  background-color: #564d4d;
  border: 2px solid #564d4d;
  border-radius: 20px;
  cursor: pointer;

  &:active,
  :focus {
    background-color: #db0000;
    border: 2px solid #db0000;

    color: #14213d;
  }
`;

export default GenreFilter;

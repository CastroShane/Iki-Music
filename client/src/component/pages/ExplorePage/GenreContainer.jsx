import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GenreContext } from "../../context/GenreContext";
import GenreFilter from "./GenreFilter";
import { motion, AnimatePresence } from "framer-motion";

const GenreContainer = () => {
  const { loaded, filteredGenre } = useContext(GenreContext);

  return (
    <>
      <Wrapper>
        <GenreFilter />
        <CardsWrapper layout>
          <AnimatePresence>
            {loaded &&
              filteredGenre.map((data) => {
                return (
                  <motion.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    layout
                    key={data.id}
                  >
                    <StyledLink to={`/genre/${data.id}`}>
                      <Card>
                        <Img src={data.picture_medium} alt={data.name} />
                        <StyledDiv>{data.name}</StyledDiv>
                      </Card>
                    </StyledLink>
                  </motion.div>
                );
              })}
          </AnimatePresence>
        </CardsWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardsWrapper = styled(motion.div)`
  width: 80%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 1rem;
`;

const Card = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  width: fit-content;
  transition: 0.4s ease-out;

  &:hover {
    transform: translate(5px, -10px);
  }
`;
const Img = styled.img`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledDiv = styled.div`
  position: relative;
  text-align: center;
  top: -18px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  font-weight: 500;
  z-index: 999;
  color: var(--default-font-color);
  background: rgb(255, 255, 255, 0.8);
  border-bottom-left-radius: 15px;
`;
export default GenreContainer;

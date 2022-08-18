import React, { useState } from "react";
import { useContext } from "react";
import styled from "styled-components";
import EditorialContext from "../../../context/EditorialContext";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -200 : 200,
      opacity: 0,
    };
  },
};
const PopularAlbums = () => {
  const { albums } = useContext(EditorialContext);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextImg = () => {
    setDirection(1);
    if (index === albums.length - 1) {
      setIndex(0);
      return;
    }
    setIndex((prev) => prev + 1);
  };
  const prevImg = () => {
    setDirection(-1);
    if (index === 0) {
      setIndex(albums.length - 1);
      return;
    }
    setIndex((prev) => prev - 1);
  };

  return (
    <Wrapper>
      <h2>Popular Albums</h2>
      {albums && (
        <SlideShow>
          <>
            <AnimatePresence inital={false} custom={direction}>
              <Link to={`/album/${albums[index].id}`}>
                <motion.img
                  variants={variants}
                  animate="animate"
                  initial="initial"
                  exit="exit"
                  src={albums[index].cover_xl}
                  className="slides"
                  key={albums[index].id}
                  custom={direction}
                />
              </Link>
            </AnimatePresence>
            <Title style={{ fontSize: "25px", height: "auto" }}>
              {albums[index].title}
            </Title>
            <button className="prevBtn" onClick={prevImg}>
              <PrevIcon size={50} />
            </button>
            <button className="nextBtn" onClick={nextImg}>
              <NextIcon size={30} />
            </button>
          </>
        </SlideShow>
      )}
    </Wrapper>
  );
};

const PrevIcon = styled(AiFillCaretLeft)`
  background-color: transparent;
  color: purple;
`;

const NextIcon = styled(AiFillCaretRight)`
  background-color: transparent;
  color: purple;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    padding-top: 5px;
  }
`;

const SlideShow = styled.div`
  display: flex;
  margin: 15px;
  width: 100%;
  aspect-ratio: calc(16 / 9);
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  button {
    padding: 16px;
    font-size: 18px;
    width: 64px;
    aspect-ratio: 1;
    border-radius: 32;
    cursor: pointer;
    position: absolute;
    border: none;
    background-color: transparent;
  }

  .prevBtn {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
  }

  .nextBtn {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
  }

  .slides {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  img {
    &:hover {
      box-shadow: inset 0 0 0 200px rgba(0, 0, 0, 0.3);
      filter: blur(10px);
    }
  }
`;

const Title = styled.h3`
  position: absolute;
  top: 92%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 101%;
  color: var(--default-font-color);
  font-size: 2rem;
  background: rgb(255, 255, 255, 0.8);
`;

export default PopularAlbums;

import React from "react";
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";

const LoadingSpinner = () => {
  return (
    <Loading>
      <CircularProgress size={100} />
    </Loading>
  );
};

const Loading = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default LoadingSpinner;

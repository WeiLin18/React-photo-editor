import React, { useState, useContext } from "react";
import UploadSection from "../components/UploadSection";
import styled from "styled-components";
import "../style/styles.scss";

const StyledDiv = styled.div`
  height: 100vh;
`;

const PhotoPage = () => {
  return (
    <StyledDiv className="container">
      <UploadSection className="col-6 col-lg-3 col-sm-2" />
    </StyledDiv>
  );
};

export default PhotoPage;

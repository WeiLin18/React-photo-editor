import React, { useState, useContext } from "react";
import UploadSection from "../components/UploadSection";
import EditSection from "../components/EditSection";
import LogSection from "../components/LogSection";
import styled from "styled-components";
import "../style/styles.scss";

const StyledDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .section {
    background-color: #fff;
    border-radius: 0.5rem;
  }
  .upload-section {
    width: calc((100% - 40px) / 2);
    height: 100%;
  }
  .edit-section,
  .log-section {
    width: calc((100% - 40px) / 2);
    height: calc((100% - 20px) / 2);
  }
  @media (max-width: 450px) {
    flex-wrap: nowrap;
    padding-left: 16px;
    padding-right: 16px;
    .upload-section,
    .edit-section,
    .log-section {
      width: 100%;
      margin-bottom: 20px;
    }
    .edit-section {
      order: 0;
    }
  }
`;

const PhotoPage = () => {
  return (
    <StyledDiv>
      <UploadSection className="upload-section  section" />
      <EditSection className="edit-section section " />
      <LogSection className="log-section section " />
    </StyledDiv>
  );
};

export default PhotoPage;

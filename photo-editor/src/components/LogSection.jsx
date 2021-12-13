import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import "../style/styles.scss";

const StyledSection = styled.section``;

const LogSection = ({ className }) => {
  const log = useSelector((state) => state.log);
  return (
    <StyledSection className={`${className} p-4 `}>
      <p>log:</p>
      <hr />
      <p>{log}</p>
    </StyledSection>
  );
};

export default LogSection;

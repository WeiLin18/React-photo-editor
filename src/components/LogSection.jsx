import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import "../style/styles.scss";

const StyledSection = styled.section``;

const LogSection = ({ className }) => {
  return <StyledSection className={`${className} p-4 `}></StyledSection>;
};

export default LogSection;

import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { changeFrame } from "../stores";
import "../style/styles.scss";

const StyledSection = styled.section``;

const EditSection = ({ className }) => {
  const dispatch = useDispatch();
  const handleFrameChange = (e) => {
    dispatch(changeFrame(e.target.value));
  };
  return (
    <StyledSection className={`${className} p-4 `}>
      <label for="frames" className="d-block mb-2">
        Choose a frame:
      </label>

      <select id="frames" className="p-2 w-100" onChange={handleFrameChange}>
        <option value="square">square</option>
        <option value="circle">circle</option>
      </select>
    </StyledSection>
  );
};

export default EditSection;

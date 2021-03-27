import React, { useContext } from "react";
import Button from "./common/Button";
import styled from "styled-components";
import { color } from "../style/variables";
import "../style/styles.scss";

const StyledSection = styled.section`
  .frame {
    width: 200px;
    height: 200px;
    border-radius: 4px;
    background-color: #fff;
    border: 1px dashed ${color.primary};
  }
  .upload {
    outline: 1px solid #f00;
    position: relative;
    display: inline-block;

    &__file {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }
  }
`;
const UploadSection = ({ className }) => {
  const handleUploadImage = (e) => {
    let file = e.target.files[0];
    console.log(file);
  };
  return (
    <StyledSection
      className={`${className} d-flex flex-column align-items-center justify-content-center h-100`}
    >
      <div className="frame mb-3">
        <img />
      </div>
      <div className="upload">
        <Button>上傳圖片</Button>
        <input
          type="file"
          id="theFile"
          className="upload__file"
          accept="image/jpg,image/jpeg"
          onChange={handleUploadImage}
        />
      </div>
    </StyledSection>
  );
};

export default UploadSection;

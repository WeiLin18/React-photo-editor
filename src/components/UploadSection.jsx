import React, { useState } from "react";
import Button from "./common/Button";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { color } from "../style/variables";
import "../style/styles.scss";

const StyledSection = styled.section`
  .frame {
    width: 160px;
    height: 160px;
    background-color: #fff;
    border: 1px dashed ${color.primary};
    overflow: hidden;
  }
  .circle {
    border-radius: 50%;
  }
  .square {
    border-radius: 4px;
  }
  .avatar {
    max-width: 300px;
  }
  .upload {
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
  const [imgURL, setImgURL] = useState(null);
  const frame = useSelector((state) => state.frame);
  const handleUploadImage = (e) => {
    let file = e.target.files[0];
    console.log(file);
    let readFile = new FileReader();
    readFile.readAsDataURL(file);
    readFile.onload = () => {
      setImgURL(readFile.result);
    };
  };
  return (
    <StyledSection
      className={`${className} d-flex flex-column align-items-center justify-content-center p-3`}
    >
      <div className={`${frame} frame mb-3 mb-lg-5`}>
        {imgURL && <img src={imgURL} alt="avatar" className="avatar" />}
      </div>
      <div className="upload">
        <Button>上傳圖片</Button>
        <input
          type="file"
          id="theFile"
          className="upload__file"
          accept="image/*"
          onChange={handleUploadImage}
        />
      </div>
    </StyledSection>
  );
};

export default UploadSection;

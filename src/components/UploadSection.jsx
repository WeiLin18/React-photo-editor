import React, { useState } from "react";
import posed from "react-pose";
import { spring } from "popmotion";
import Button from "./common/Button";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { color } from "../style/variables";
import "../style/styles.scss";
const props = {
  draggable: true,
  dragEnd: { transition: spring }
};

const DraggableImg = posed.img(props);

const UploadSection = ({ className }) => {
  const [imgURL, setImgURL] = useState(null);
  const [imgScale, setImgScale] = useState("1");
  const frame = useSelector((state) => state.frame);
  const handleImageUpload = (e) => {
    // console.log(e.target.files);
    if (imgURL !== null) {
      setImgURL(null);
    }
    let file = e.target.files[0];
    let readFile = new FileReader();
    file && readFile.readAsDataURL(file);
    readFile.onload = () => {
      setImgURL(readFile.result);
    };
  };

  const handleSizeChange = (e) => {
    const scale = e.target.value;
    setImgScale(scale);
  };

  return (
    <StyledSection
      className={`${className} d-flex flex-column align-items-center justify-content-center p-3`}
    >
      <div className={`${frame} frame mb-3 mb-lg-5`}>
        {imgURL && (
          <div
            style={{
              transform: `scale(${imgScale}) `
            }}
          >
            <DraggableImg src={imgURL} alt="avatar" className="avatar" />
          </div>
        )}
      </div>
      <div className="upload mb-3">
        <input
          type="file"
          id="theFile"
          className="upload__file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        <Button>上傳圖片</Button>
      </div>
      <div>
        <label className="d-block mb-1 text-center">size</label>
        <input
          type="range"
          min="0.5"
          max="1.5"
          step="0.1"
          value={imgScale}
          onInput={handleSizeChange}
        />
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  .frame {
    position: relative;
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
    width: 140px;
    position: absolute;
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
      :hover + button {
        background-color: #208bba;
      }
    }
  }
`;
export default UploadSection;

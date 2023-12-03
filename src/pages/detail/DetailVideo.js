import {
  faCircleChevronDown,
  faCircleChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 50px;
  width: 100%;
  height: ${(props) => props.$height};
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  position: relative;
`;

const VideoWrap = styled.div`
  width: 100%;
  height: ${(props) => props.$height};
  overflow: ${(props) => props.$over};
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 20px;

  @media screen and (max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 799px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const VideoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const VideoTitle = styled.p`
  margin-bottom: 5px;
  font-weight: 700;

  @media screen and (max-width: 1050px) {
    font-size: 15px;
  }
  @media screen and (max-width: 799px) {
    font-size: 14px;
  }
`;

const Iframe = styled.iframe`
  width: 100%;
`;

const Btn = styled.button`
  all: unset;
  box-sizing: border-box;
  color: white;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 45px;
  background-color: #0c002f;
  border-radius: 50%;
`;

export const DetailVideo = ({ data }) => {
  const [over, setOver] = useState("hidden");
  const [isHeight, setIsHeight] = useState(0);

  const clickHandler = () => {
    if (over === "hidden") {
      setOver("visible");
      setIsHeight("auto");
    } else {
      setOver("hidden");
      setIsHeight("0");
    }
  };

  return (
    <Wrapper $height={isHeight}>
      <VideoWrap $over={over} $height={isHeight}>
        {data.map((data) => (
          <VideoBox key={data.id}>
            <VideoTitle>{data.name.slice(0, 14) + "..."}</VideoTitle>
            <Iframe
              src={`https://www.youtube.com/embed/${data.key}`}
              title={data.name}
              allowFullScreen
            />
          </VideoBox>
        ))}
      </VideoWrap>
      <Btn onClick={clickHandler}>
        {over === "hidden" ? (
          <>
            <FontAwesomeIcon icon={faCircleChevronDown} />
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faCircleChevronUp} />
          </>
        )}
      </Btn>
    </Wrapper>
  );
};

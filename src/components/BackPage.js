import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Btn = styled.button`
  all: unset;
  font-size: 36px;
  cursor: pointer;
  position: absolute;
  top: 140px;
  left: 80px;
  display: none;

  @media screen and (max-width: 1050px) {
    display: block;
    font-size: 32px;
    top: 65px;
    left: 25px;
  }
  @media screen and (max-width: 799px) {
    font-size: 30px;
    top: 60px;
    left: 20px;
  }
`;

export const BackPage = () => {
  const { pathname } = useLocation();
  const back = useNavigate();

  const clickHandler = () => {
    back(-1);
  };

  return (
    <>
      {pathname !== "/" && (
        <>
          <Btn onClick={clickHandler}>
            <FontAwesomeIcon icon={faAnglesLeft} />
          </Btn>
        </>
      )}
    </>
  );
};

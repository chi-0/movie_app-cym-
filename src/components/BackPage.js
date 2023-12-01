import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Btn = styled.button`
  all: unset;
  font-size: 36px;
  position: absolute;
  top: 120px;
  left: 80px;
  opacity: 0.6;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 1050px) {
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

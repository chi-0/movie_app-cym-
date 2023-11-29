import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 50px;
  background-color: rgba(12, 0, 47, 0.6);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  @media screen and (max-width: 1050px) {
    padding: 11px 25px;
  }

  @media screen and (max-width: 799px) {
    padding: 11px 20px;
  }
`;

const Logo = styled.h3`
  font-size: 32px;
  font-weight: 700;

  @media screen and (max-width: 1050px) {
    font-size: 28px;
  }

  @media screen and (max-width: 799px) {
    font-size: 24px;
  }
`;

const HeaderMenu = styled.div`
  font-size: 18px;
  font-weight: 500;

  a:nth-child(2) {
    font-size: 20px;
    margin-left: 50px;
  }

  @media screen and (max-width: 1050px) {
    font-size: 16px;

    a:nth-child(2) {
      font-size: 18px;
      margin-left: 30px;
    }
  }

  @media screen and (max-width: 799px) {
    font-size: 15px;

    a:nth-child(2) {
      font-size: 16px;
      margin-left: 25px;
    }
  }
`;

export const Header = () => {
  return (
    <HeaderWrap>
      <Link to="/">
        <Logo>CYM</Logo>
      </Link>

      <HeaderMenu>
        <Link to="/login">로그인</Link>
        <Link to="/search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Link>
      </HeaderMenu>
    </HeaderWrap>
  );
};

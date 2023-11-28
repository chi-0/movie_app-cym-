import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 18px 50px;
  background-color: #0c002f;
`;

const Logo = styled.h3`
  font-size: 32px;
  font-weight: 700;
`;

const HeaderMenu = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const Header = () => {
  return (
    <HeaderWrap>
      <Logo>CYM</Logo>
      <HeaderMenu>
        <Link to="/login">로그인</Link>
        <Link to="/search">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{
              fontSize: "20px",
              marginLeft: "50px",
            }}
          />
        </Link>
      </HeaderMenu>
    </HeaderWrap>
  );
};

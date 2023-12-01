import styled from "styled-components";
import { Wrap } from "../../components/Wrap";

import spotlight from "./img/spotlight.png";

const PageWrap = styled.div`
  width: 100%;
  position: relative;
`;

const BgImg = styled.img`
  display: block;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: 100px;
  font-weight: 700;
  text-align: center;
  transform: translateY(-170px);

  @media screen and (max-width: 1050px) {
    font-size: 80px;
    transform: translateY(-120px);
  }
  @media screen and (max-width: 799px) {
    font-size: 40px;
    transform: translateY(-70px);
  }
`;

const Desc = styled.p`
  font-size: 60px;
  font-weight: 700;
  text-align: center;
  transform: translateY(-140px);

  @media screen and (max-width: 1050px) {
    font-size: 45px;
    transform: translateY(-100px);
  }
  @media screen and (max-width: 799px) {
    font-size: 20px;
    transform: translateY(-60px);
  }
`;

export const PageNotFound = () => {
  return (
    <Wrap>
      <PageWrap>
        <BgImg src={spotlight} />
        <Title>404</Title>
        <Desc>
          SORRY
          <br />
          Page Not Found
        </Desc>
      </PageWrap>
    </Wrap>
  );
};

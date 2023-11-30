import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchWrap = styled.div`
  margin-top: 50px;

  @media screen and (max-width: 1050px) {
    margin-top: 40px;
  }
  @media screen and (max-width: 799px) {
    margin-top: 30px;
  }
`;

const Title = styled.h3`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;
  opacity: 0.6;

  @media screen and (max-width: 1050px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 799px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;

const PopSearchWrap = styled.div`
  display: flex;
  flex-direction: column;

  > a {
    width: fit-content;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 18px;
  }

  @media screen and (max-width: 1050px) {
    > a {
      font-size: 18px;
      margin-bottom: 15px;
    }
  }
  @media screen and (max-width: 799px) {
    > a {
      font-size: 16px;
      margin-bottom: 12px;
    }
  }
`;

export const SearchTrend = ({ data }) => {
  return (
    <SearchWrap>
      <Title>오늘의 인기 검색어</Title>
      <PopSearchWrap>
        {data.slice(0, 10).map((data) => (
          <Link key={data.id} to={`/detail/${data.id}`}>
            · {data.title}
          </Link>
        ))}
      </PopSearchWrap>
    </SearchWrap>
  );
};

import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchWrap = styled.div``;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const PopSearchWrap = styled.div`
  display: flex;
  flex-direction: column;

  > a {
    width: fit-content;
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

export const SearchTrend = ({ data }) => {
  return (
    <SearchWrap>
      <Title>오늘의 인기 검색어</Title>
      <PopSearchWrap>
        {data.slice(0, 10).map((data) => (
          <Link key={data.id} to={`/detail/${data.id}`}>
            {data.title}
          </Link>
        ))}
      </PopSearchWrap>
    </SearchWrap>
  );
};

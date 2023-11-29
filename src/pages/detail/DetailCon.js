import styled from "styled-components";
import { IMG_URL } from "../../api/api";

const DetailWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const DetailInfo = styled.ul`
  margin-right: 80px;
`;

const GenreWrap = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

const Genre = styled.li`
  font-size: 24px;
  font-weight: 500;
  margin-right: 10px;
`;

const Title = styled.li`
  font-size: 40px;
  font-weight: 700;
  line-height: 58px;
`;

const STitle = styled.li`
  font-size: 16px;
  margin-bottom: 30px;
  opacity: 0.5;
`;

const InfoWrap = styled.ul`
  display: flex;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 50px;
`;

const Rate = styled.li`
  margin-right: 25px;
`;

const Date = styled.li`
  margin-right: 25px;
`;

const RunTime = styled.li``;

const Desc = styled.li`
  max-width: 500px;
  width: 100%;
  font-size: 18px;
  line-height: 26px;
`;

const DetailImg = styled.img`
  max-width: 300px;
  width: 100%;
`;

export const DetailCon = ({ data }) => {
  return (
    <DetailWrap>
      <DetailInfo>
        <GenreWrap>
          {data.genres.map((data) => (
            <Genre key={data.id}>#{data.name}</Genre>
          ))}
        </GenreWrap>
        <Title>{data.title}</Title>
        <STitle>{data.tagline}</STitle>
        <InfoWrap>
          <Rate>★ {data.vote_average.toFixed(1)}</Rate>
          <Date>{data.release_date}</Date>
          <RunTime>{data.runtime}분</RunTime>
        </InfoWrap>
        <Desc>{data.overview}</Desc>
      </DetailInfo>
      <DetailImg src={IMG_URL + "/w500" + data.poster_path} />
    </DetailWrap>
  );
};

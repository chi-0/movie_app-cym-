import styled from "styled-components";
import { IMG_URL } from "../../api/api";

const DetailWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  @media screen and (max-width: 1050px) {
    margin-bottom: 60px;
  }
  @media screen and (max-width: 799px) {
    margin-bottom: 40px;
    flex-direction: column-reverse;
  }
`;

const DetailInfo = styled.ul`
  margin-right: 80px;

  @media screen and (max-width: 1050px) {
    margin-right: 50px;
  }
  @media screen and (max-width: 799px) {
    margin-right: 0;
  }
`;

const GenreWrap = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  @media screen and (max-width: 1050px) {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 799px) {
    margin-bottom: 15px;
  }
`;

const Genre = styled.li`
  font-size: 24px;
  font-weight: 500;
  margin-right: 10px;

  @media screen and (max-width: 1050px) {
    font-size: 18px;
    margin-right: 8px;
  }
  @media screen and (max-width: 799px) {
    font-size: 16px;
    margin-right: 6px;
  }
`;

const Title = styled.li`
  font-size: 40px;
  font-weight: 700;
  line-height: 58px;

  @media screen and (max-width: 1050px) {
    font-size: 36px;
    line-height: 52px;
  }
  @media screen and (max-width: 799px) {
    font-size: 32px;
    line-height: 46px;
  }
`;

const STitle = styled.li`
  font-size: 16px;
  margin-bottom: 30px;
  opacity: 0.5;

  @media screen and (max-width: 1050px) {
    font-size: 15px;
  }
  @media screen and (max-width: 799px) {
    font-size: 14px;
  }
`;

const InfoWrap = styled.ul`
  display: flex;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 50px;

  @media screen and (max-width: 1050px) {
    font-size: 18px;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 799px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

const Rate = styled.li`
  margin-right: 25px;

  @media screen and (max-width: 1050px) {
    margin-right: 20px;
  }
  @media screen and (max-width: 799px) {
    margin-right: 20px;
  }
`;

const Date = styled.li`
  margin-right: 25px;

  @media screen and (max-width: 1050px) {
    margin-right: 20px;
  }
  @media screen and (max-width: 799px) {
    margin-right: 20px;
  }
`;

const RunTime = styled.li``;

const Desc = styled.li`
  max-width: 500px;
  width: 100%;
  font-size: 18px;
  line-height: 26px;

  @media screen and (max-width: 1050px) {
    font-size: 16px;
    line-height: 23px;
  }
  @media screen and (max-width: 799px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const DetailImg = styled.img`
  max-width: 300px;
  width: 100%;

  @media screen and (max-width: 1050px) {
    max-width: 250px;
    width: 100%;
  }
  @media screen and (max-width: 799px) {
    max-width: 100%;
    margin-bottom: 30px;
  }
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

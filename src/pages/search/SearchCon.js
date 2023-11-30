import styled from "styled-components";
import { IMG_URL } from "../../api/api";
import { Link } from "react-router-dom";

const ImgWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 15px;
  row-gap: 30px;
  margin-top: 90px;

  @media screen and (max-width: 1050px) {
    grid-template-columns: repeat(5, 1fr);
    column-gap: 10px;
    row-gap: 20px;
    margin-top: 80px;
  }
  @media screen and (max-width: 799px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
    row-gap: 20px;
    margin-top: 60px;
  }
`;

const Img = styled.img`
  max-width: 238px;
  width: 100%;
`;

export const SearchCon = ({ data }) => {
  return (
    <ImgWrap>
      {data?.map((data) => (
        <Link key={data.id} to={`/detail/${data.id}`}>
          <Img src={IMG_URL + "/w500" + data.poster_path} />
        </Link>
      ))}
    </ImgWrap>
  );
};

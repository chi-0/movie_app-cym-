import styled from "styled-components";
import { IMG_URL } from "../../api/api";
import { Link } from "react-router-dom";

const ImgWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 15px;
  row-gap: 30px;
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

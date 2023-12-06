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
      {data.length === 0 ? (
        <p>검색하신 영화가 없습니다.</p>
      ) : (
        <>
          {data?.map((data) => (
            <Link key={data.id} to={`/detail/${data.id}`}>
              <Img
                src={
                  data.poster_path
                    ? IMG_URL + "/w500" + data.poster_path
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/640px-No-Image-Placeholder.svg.png"
                }
              />
            </Link>
          ))}
        </>
      )}
    </ImgWrap>
  );
};

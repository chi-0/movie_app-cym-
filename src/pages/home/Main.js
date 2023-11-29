import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IMG_URL } from "../../api/api";
import { Link } from "react-router-dom";

const Now = styled.div`
  margin-bottom: 120px;

  @media screen and (max-width: 1050px) {
    margin-bottom: 110px;
  }

  @media screen and (max-width: 799px) {
    margin-bottom: 90px;
  }
`;

const NowTitle = styled.h3`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;

  @media screen and (max-width: 1050px) {
    font-size: 36px;
    margin-bottom: 25px;
  }

  @media screen and (max-width: 799px) {
    font-size: 32px;
    margin-bottom: 20px;
  }
`;

const NowImg = styled.img`
  width: 100%;
  margin-bottom: 15px;
  border-radius: 10px;

  @media screen and (max-width: 1050px) {
    margin-bottom: 10px;
  }

  @media screen and (max-width: 799px) {
    margin-bottom: 8px;
    border-radius: 8px;
  }
`;

const ConTitle = styled.h4`
  font-size: 24px;
  font-weight: 500;

  @media screen and (max-width: 1050px) {
    font-size: 18px;
  }

  @media screen and (max-width: 799px) {
    font-size: 16px;
  }
`;

const nowSwiper = {
  spaceBetween: 15,
  slidesPerView: 1.3,
  breakpoints: {
    1050: {
      spaceBetween: 30,
      slidesPerView: 2.6,
    },

    799: {
      spaceBetween: 20,
      slidesPerView: 2.2,
    },
  },
};

export const Main = ({ data }) => {
  return (
    <Now>
      <NowTitle>현재 상영중</NowTitle>
      <Swiper {...nowSwiper}>
        {data.map((data) => (
          <SwiperSlide key={data.id}>
            <Link to={`/detail/${data.id}`}>
              <NowImg src={IMG_URL + "/w1280" + data.backdrop_path} />
              <ConTitle>{data.title}</ConTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Now>
  );
};

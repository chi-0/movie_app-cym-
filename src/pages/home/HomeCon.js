import styled from "styled-components";
import { IMG_URL } from "../../api/api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

const Con = styled.div`
  margin-bottom: ${(props) => props.$margin}px;

  @media screen and (max-width: 1050px) {
    margin-bottom: ${(props) =>
      props.$margin === 0 ? 0 : props.$margin - 10}px;
  }
  @media screen and (max-width: 799px) {
    margin-bottom: ${(props) =>
      props.$margin === 0 ? 0 : props.$margin - 30}px;
  }
`;

const ConTitle = styled.h3`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;

  @media screen and (max-width: 1050px) {
    font-size: 28px;
    margin-bottom: 25px;
  }
  @media screen and (max-width: 799px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const ConImg = styled.img`
  width: 100%;
  border-radius: 8px;
  @media screen and (max-width: 1050px) {
    border-radius: 5px;
  }
`;

const conSwiper = {
  spaceBetween: 10,
  slidesPerView: 2.7,
  breakpoints: {
    1050: {
      spaceBetween: 15,
      slidesPerView: 6.7,
    },

    799: {
      spaceBetween: 10,
      slidesPerView: 4.8,
    },
  },
};

export const HomeCon = ({ title, data, margin }) => {
  return (
    <Con $margin={margin}>
      <ConTitle>{title}</ConTitle>
      <Swiper {...conSwiper}>
        {data.map((data) => (
          <SwiperSlide key={data.id}>
            <Link to={`/detail/${data.id}`}>
              <ConImg src={IMG_URL + "/w500" + data.poster_path} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Con>
  );
};

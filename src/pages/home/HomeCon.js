import styled from "styled-components";
import { IMG_URL } from "../../api/api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Con = styled.div`
  margin-bottom: 120px;
`;

const ConTitle = styled.h3`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const ConImg = styled.img`
  width: 100%;
`;

const conSwiper = {
  spaceBetween: 15,
  slidesPerView: 6.7,
};

export const HomeCon = ({ title, data }) => {
  return (
    <Con>
      <ConTitle>{title}</ConTitle>
      <Swiper {...conSwiper}>
        {data.map((data) => (
          <SwiperSlide key={data.id}>
            <ConImg src={IMG_URL + "/w500" + data.poster_path} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Con>
  );
};

import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IMG_URL } from "../../api/api";

const Now = styled.div`
  margin-bottom: 120px;
`;

const NowTitle = styled.h3`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const NowImg = styled.img`
  width: 100%;
  margin-bottom: 15px;
  border-radius: 10px;
`;

const ConTitle = styled.h4`
  font-size: 24px;
  font-weight: 500;
`;

const nowSwiper = {
  spaceBetween: 30,
  slidesPerView: 2.5,
};

export const Main = ({ data }) => {
  return (
    <Now>
      <NowTitle>현재 상영중</NowTitle>
      <Swiper {...nowSwiper}>
        {data.map((data) => (
          <SwiperSlide key={data.id}>
            <NowImg src={IMG_URL + "/w500" + data.backdrop_path} />
            <ConTitle>{data.title}</ConTitle>
          </SwiperSlide>
        ))}
      </Swiper>
    </Now>
  );
};

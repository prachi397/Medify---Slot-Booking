import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CarouselImg1 from "../../Assets/carouselmg1.png";
import CarouselImg2 from "../../Assets/carouselImg2.png";
import './carouselComp.css';

const CarouselComp = () => {
  const imges = [CarouselImg1, CarouselImg2, CarouselImg1, CarouselImg2, CarouselImg1];

  return (
    <Swiper
      className="swiper-carousel"
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      slidesPerView={3} 
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10, 
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {imges.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselComp;

import { Box, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import Navigation styles
import "swiper/css/pagination"; // Import Pagination styles
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CarouselImg1 from "../../Assets/carouselmg1.png";
import CarouselImg2 from "../../Assets/carouselImg2.png";

const MedicalSpecialistCarousel = () => {
  const images = [CarouselImg1, CarouselImg2, CarouselImg1, CarouselImg2, CarouselImg1];

  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ fontSize: "26px", fontWeight: "600", color: "#1B3C74", marginBottom: 2 }}
      >
        Our Medical Specialist
      </Typography>
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
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default MedicalSpecialistCarousel;

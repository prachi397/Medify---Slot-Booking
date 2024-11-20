import { Box, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import Navigation styles
import "swiper/css/pagination"; // Import Pagination styles
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import doctor1 from "../../Assets/doctor1.png";
import doctor2 from "../../Assets/doctor2.png";
import doctor3 from "../../Assets/doctor3.png";
import doctor4 from "../../Assets/doctor4.png";
import doctor5 from "../../Assets/doctor5.png";

const MedicalSpecialistCarousel = () => {
  const images = [doctor1, doctor2, doctor3, doctor4, doctor5];

  return (
    <Box sx={{background:"#FFFFFF",  paddingTop: { xs: 2, sm: 4, lg: 6 },}}>
      <Typography
        variant="h3"
        sx={{
          fontSize: "26px",
          fontWeight: "600",
          color: "#1B3C74",
          marginBottom: 2,
        }}
      >
        Our Medical Specialist
      </Typography>
      <Swiper
        className="swiper-carousel"
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        slidesPerView={4}
        breakpoints={{
            320: {
                slidesPerView: 1,
                spaceBetween: 20, 
              },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Box 
             sx={{background: "linear-gradient(144.2deg, #E1F3FF 0%, #2AA7FF 100%)",
                paddingTop: "40px", 
                borderTopLeftRadius: "50%",
                borderTopRightRadius: "50%",
             }}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={{ width: "250px", height: "230px", borderRadius: "10px" }}
            />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default MedicalSpecialistCarousel;

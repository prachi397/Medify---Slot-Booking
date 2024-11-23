import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Box, Typography, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { startOfDay, add, isEqual, format } from "date-fns";

const DateRange = ({ selectedDate, setSelectedDate, totalSlots }) => {
  // Generate date items dynamically
  const date = startOfDay(new Date());
  const dateItems = [];
  for (let i = 0; i < 7; i++) {
    dateItems.push(add(date, { days: i }));
  }

  // Custom date formatter
  const customDateFormat = (day) => {
    if (isEqual(day, date)) {
      return "Today";
    } else if (isEqual(day, add(date, { days: 1 }))) {
      return "Tomorrow";
    } else {
      return format(day, "E, d LLL");
    }
  };

  // Create data for Swiper
  const data = dateItems.map((day, idx) => ({
    day, // Store the actual Date object
    date: customDateFormat(day), // Store the formatted date string
    slots: totalSlots[idx],
  }));
  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  return (
    <Box sx={{   width: { xs: "500px", sm: "615px" }, position: "relative", overflow: "hidden" }}>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
        }}
        modules={[Navigation]}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 5 },
          767: { slidesPerView: 3},
          1024: { slidesPerView: 3},
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                cursor: "pointer",
                p: 2,
              }}
              onClick={() => handleDateClick(item.day)}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: isEqual(item.day, selectedDate) ? "700" : "400",
                  fontSize: { xs: 11, md: 16 },
                }}
              >
                {item.date}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: 8, md: 12, color: "#01A400" } }}
              >
                {item.slots}
              </Typography>
              <Box
                sx={{
                  height: { xs: "4px", md: "5px" },
                  width: "-webkit-fill-available",
                  mt: "5px",
                  mx: "auto",
                  background: isEqual(item.day, selectedDate)
                    ? "#2AA7FF"
                    : "#F0F0F5",
                }}
              ></Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <Button
        className="swiper-prev"
        sx={{ position: "absolute", top: "40%", left: 0, zIndex: 2 }}
      >
        <ArrowBackIosIcon />
      </Button>
      <Button
        className="swiper-next"
        sx={{ position: "absolute", top: "40%", right: 0, zIndex: 2 }}
      >
        <ArrowForwardIosIcon />
      </Button>
    </Box>
  );
};

export default DateRange;

import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import topDentistInfoImg from "../../Assets/sensodyne_dweb.png.png";
import verifiedImg from "../../Assets/verified.1f87346e730e 1.png";
import { FindCentersContext } from "./FindCentersContext";
import centerImg from "../../Assets/center.png";
import thumbIcon from "../../Assets/thumb.png";
import "./findDoctors.css";

const AvailableCenters = () => {
  const { doctorsData, selectedState, selectedCity } =
    useContext(FindCentersContext);
  const [openCenters, setOpenCenters] = useState([]);
  const [selectedDateIndexes, setSelectedDateIndexes] = useState({});
  const [selectedDateIndex, setSelectedDateIndex] = useState(0); // Track selected date index
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Generate date range for the next 7 days
  const generateDateRange = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      const formattedDate =
        i === 0
          ? "Today"
          : i === 1
          ? "Tomorrow"
          : nextDate.toLocaleDateString("en-US", {
              weekday: "short",
              day: "numeric",
              month: "short",
            });
      dates.push(formattedDate);
    }
    return dates;
  };

  const dateRange = generateDateRange();
  console.log("date range", dateRange);

  // Time slots for Morning, Afternoon, and Evening
  const timeSlots = {
    morning: ["10:00 AM", "11:30 AM"],
    afternoon: ["12:00 PM", "01:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "07:30 PM", "08:30 PM"],
  };

  // Toggle the visibility of the booking section for a specific card
  const handleCardClick = (id) => {
    setOpenCenters((prev) =>
      prev.includes(id)
        ? prev.filter((centerId) => centerId !== id)
        : [...prev, id]
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        padding: { xs: 2, sm: 4 },
        justifyContent: "center",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      {selectedCity && selectedState && doctorsData ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            textAlign: "left",
            cursor: "pointer",
          }}
        >
          <Typography variant="h3" sx={{ fontSize: "24px" }}>
            {doctorsData?.length} medical centers available in {selectedState}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <img src={verifiedImg} alt="verify" />
            <Typography variant="p" sx={{ color: "#787887" }}>
              Book appointments with minimum wait-time & verified doctor details
            </Typography>
          </Box>
          <Box>
            <Grid
              container
              spacing={2}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              {doctorsData.map((ele, index) => {
                const isCenterOpen = openCenters.includes(ele["Provider ID"]);
                const selectedDateIndex =
                  selectedDateIndexes[ele["Provider ID"]] || 0;

                return (
                  <Grid item key={index} sx={{ display: "flex" }}>
                    <Card
                      sx={{
                        display: "flex",
                        maxWidth: "700px",
                        padding: 2,
                        boxShadow: 2,
                        borderRadius: 2,
                        "&:hover": { boxShadow: 4 },
                      }}
                    >
                      <CardMedia
                        component="img"
                        src={centerImg}
                        alt="center image"
                        sx={{ width: 120, height: 130 }}
                      />
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "Left",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            textAlign: "Left",
                          }}
                          onClick={() => handleCardClick(ele["Provider ID"])}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              textAlign: "Left",
                              padding: "10px",
                            }}
                          >
                            <Typography
                              variant="body1"
                              sx={{
                                fontWeight: 600,
                                color: "#14BEF0",
                                marginBottom: "5px",
                              }}
                            >
                              {ele["Hospital Name"]}
                            </Typography>
                            <Typography
                              variant="p"
                              style={{ fontWeight: "bold" }}
                            >
                              {ele.Address}
                            </Typography>
                            <Typography
                              variant="p"
                              sx={{ marginBottom: "5px" }}
                            >
                              Smilessence Center for Advanced Dentistry +1 more
                            </Typography>
                            <Typography
                              variant="p"
                              sx={{
                                display: "flex",
                                gap: "7px",
                                marginBottom: "10px",
                              }}
                            >
                              <span style={{ color: "#02A401" }}>FREE</span>
                              <span style={{ color: "#787887" }}>
                                <del>₹500</del>
                              </span>
                              <span style={{ color: "#414146" }}>
                                Consultation fee at clinic
                              </span>
                            </Typography>
                            <img
                              src={thumbIcon}
                              alt="thumbsup"
                              style={{
                                width: 50,
                                height: 25,
                                borderRadius: "3.5px",
                              }}
                            />
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "7px",
                              alignItems: "center",
                              justifyContent: "end",
                            }}
                          >
                            <Typography variant="p" sx={{ color: "#01A400" }}>
                              Available Today
                            </Typography>
                            <Button
                              sx={{ color: "white", background: "#2AA7FF" }}
                              variant="contained"
                            >
                              Book FREE Center Visit
                            </Button>
                          </Box>
                        </Box>
                        {/* Booking Section */}
                        {isCenterOpen && (
                          <Box>
                            {/* swiper for dates */}
                            <Swiper
                              style={{ width: "480px", marginTop: "20px" }}
                              className="swiper-carousel"
                              modules={[Navigation, Pagination]}
                              navigation
                              pagination={{ clickable: true }}
                              spaceBetween={8}
                              slidesPerView={2.7}
                            >
                              {dateRange.map((date, index) => (
                                <SwiperSlide key={index}>
                                  <Typography>{date}</Typography>
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          </Box>
                        )}
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      ) : (
        <Typography variant="h4" sx={{ color: "#2AA7FF" }}>
          Please select state and city.
        </Typography>
      )}

      {/* Static image section */}
      <Box sx={{ marginTop: { xs: "2px", sm: "68px" } }}>
        <img
          src={topDentistInfoImg}
          alt="top dentist info"
          height={250}
          width={330}
        />
      </Box>
    </Box>
  );
};

export default AvailableCenters;

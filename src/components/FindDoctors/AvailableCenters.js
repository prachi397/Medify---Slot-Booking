import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import topDentistInfoImg from "../../Assets/sensodyne_dweb.png.png";
import verifiedImg from "../../Assets/verified.1f87346e730e 1.png";
import { FindCentersContext } from "./FindCentersContext";
import centerImg from "../../Assets/center.png";
import thumbIcon from "../../Assets/thumb.png";
import { format, add, startOfDay, isEqual } from "date-fns";
import DateRange from "./DateRange";
import TimeSlotPicker from "./TimeSlotPicker";

const AvailableCenters = () => {
  const { doctorsData, selectedState, selectedCity } =
    useContext(FindCentersContext);
  const [openCenters, setOpenCenters] = useState([]);

  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

  const totalSlots = [
    "11 Slots Available",
    "17 Slots Available",
    "18 Slots Available",
    "15 Slots Available",
    "12 Slots Available",
    "14 Slots Available",
    "16 Slots Available",
  ];

  // Time slots for Morning, Afternoon, and Evening
  const availableSlots = {
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM","12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM","06:30 PM","07:00 PM", "07:30 PM"],
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
        paddingTop: "20px",
        justifyContent: "center",
        flexDirection: { xs: "column", sm:"column", md: "row" },
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

                return (
                  <Grid item key={index} sx={{ display: "flex" }}>
                    <Card
                      sx={{
                        display: "flex",
                        maxWidth: "750px",
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
                           <Box sx={{marginLeft:"-82px"}}>
                     {isCenterOpen && (
                          <Box>
                            {/* swiper for dates */}
                            <DateRange
                              selectedDate={selectedDate}
                              setSelectedDate={setSelectedDate}
                              totalSlots={totalSlots}
                            />

                            {/* time slots available */}
                           <TimeSlotPicker
                           availableSlots={availableSlots}
                           selectedDate={selectedDate}
                          //  details={details}
                          //  handleBooking={handleBooking}
                           />
                          </Box>
                        )}
                        </Box>
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

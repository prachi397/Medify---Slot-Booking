import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import heroImage from "../../Assets/hero_image.png";
import { Box, Button, Grid, Typography } from "@mui/material";
import FindCentersModal from "../FindCentersModal/FindCentersModal";
import CarouselComp from "../CarouselComp/CarouselComp";
import FindBySpecialisation from "../FindBySpecialisation/FindBySpecialisation";
import MedicalSpecialistCarousel from "../MedicalSpecialistCarousel/MedicalSpecialistCarousel";

const HomePage = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      <Box
        sx={{
          padding: { xs: 2, sm: 4 },
          px: { xs: 4, sm: 12, lg: 13 },
          backgroundColor: "#f0f8ff",
        }}
      >
        {/* hero section */}
        <Grid
          container
          spacing={4}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: "left",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontSize: "31px",
                mb: 2,
              }}
            >
              Skip the travel! Find Online
            </Typography>
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                fontWeight: "bold",
              }}
            >
              <span>Medical</span>{" "}
              <span style={{ color: "#2AA7FF" }}>Centers</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#555",
                mb: 4,
              }}
            >
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2AA7FF",
                padding: "10px 20px",
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              Find Centers
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <img
              src={heroImage}
              alt="doctor-img"
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "auto",
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        {/* search section */}
        <FindCentersModal />

        {/* carousel component  */}
        <CarouselComp />

        {/* find by specialisation section */}
        <FindBySpecialisation/>

        {/* medical specialist carousel */}
        <MedicalSpecialistCarousel/>
      </Box>
    </div>
  );
};

export default HomePage;

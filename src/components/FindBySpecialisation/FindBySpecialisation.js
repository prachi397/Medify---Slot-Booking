import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import laboratory from "../../Assets/Drugstore.png";
import primaryCare from "../../Assets/PrimaryCare.png";
import cardiology from "../../Assets/Cardiology.png";
import mri from "../../Assets/MRI.png";
import bloodTest from "../../Assets/BloodTest.png";
import piscologist from "../../Assets/Piscologist.png";
import xray from "../../Assets/XRay.png";

const FindBySpecialisation = () => {
  const specialisationData = [
    { icon: laboratory, value: "Dentistory" },
    { icon: primaryCare, value: "Primary Care" },
    { icon: cardiology, value: "Cardiology" },
    { icon: mri, value: "MRI Resonance" },
    { icon: bloodTest, value: "Blood Test" },
    { icon: piscologist, value: "Piscologist" },
    { icon: laboratory, value: "Laboratory" },
    { icon: xray, value: "X-Ray" },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "30px",
        alignItems: "center",
        padding: { xs: 2, sm: 5 },
        mx: { xs: 6 },
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontSize: "26px", fontWeight: "600", color: "#1B3C74" }}
      >
        Find By Specialisation
      </Typography>
      <Grid container spacing={2}>
        {specialisationData.map((tile, index) => (
          <Grid item key={index} xs={12} sm={4} md={3}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 2,
                boxShadow: 2,
                borderRadius: 2,
                "&:hover": { boxShadow: 4 },
              }}
            >
              <CardMedia
                component="img"
                src={tile.icon}
                alt={tile.value}
                sx={{ width: 50, height: 50, marginBottom: 2 }}
              />
              <CardContent sx={{ textAlign: "center", padding: 0 }}>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  {tile.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#2AA7FF",
          padding: "10px 20px",
          fontWeight: "bold",
          textTransform: "none",
        }}
      >
        Search
      </Button>
    </Box>
  );
};
export default FindBySpecialisation;

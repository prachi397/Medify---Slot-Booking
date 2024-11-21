import { Box, Typography } from "@mui/material";
import React from "react";
import care1Img from "../../Assets/care1.png";
import care2Img from "../../Assets/care2.png";
import tickImg from "../../Assets/tick.png";

const PatientCaring = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px",
        paddingBottom: "8rem",
        gap:"30px"
      }}
    >
      {/* image section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
          flexDirection: "column",
          width: "40%",
          position: "relative",
        }}
      >
        <img
          src={care1Img}
          alt="care1"
          height="230px"
          width="270px"
          style={{
            position: "absolute",
            top: "138px",
            left: "95px",
          }}
        />
        <img src={care2Img} alt="care2" height="230px" width="270px" />
      </Box>

      {/* the text section */}
      <Box
        sx={{
          display: "flex",
          textAlign: "left",
          flexDirection: "column",
          width: "60%",
          gap: "5px",
        }}
      >
        <Typography variant="h6" sx={{ color: "#2AA7FF" }}>
          HELPING PATIENTS FROM AROUND THE GLOBE!!
        </Typography>
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            fontWeight: "bold",
          }}
        >
          <span>Patient</span> <span style={{ color: "#2AA7FF" }}>Caring</span>
        </Typography>
        <Typography variant="p" sx={{ color: "#77829D", textAlign: "left" }}>
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <img src={tickImg} alt="tickImg" />
            <Typography variant="p" sx={{ color: "#1B3C74" }}>
              Stay Updated About Your Health
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <img src={tickImg} alt="tickImg" />
            <Typography variant="p" sx={{ color: "#1B3C74" }}>
              Check Your Results Online
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <img src={tickImg} alt="tickImg" />
            <Typography variant="p" sx={{ color: "#1B3C74" }}>
              Manage Your Appointments
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default PatientCaring;

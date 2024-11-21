import { Box, Typography } from "@mui/material";
import React from "react";
import doctorsImg from "../../Assets/questionImg1.png";
import emoji1 from "../../Assets/emoji1.png";
import emoji2 from "../../Assets/emoji2.png";

const FrequentlyAsked = () => {
  return (
    <Box sx={{ background: "#FFFFFF", padding: "40px" }}>
      <Typography variant="p" sx={{ color: "#2AA7FF" }}>
        Get Your Answer
      </Typography>
      <Typography variant="h3" sx={{ color: "#1B3C74", fontWeight: "550" }}>
        Frequently Asked Questions
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection:{xs:"column",sm:"row",md:"row"},
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* image */}
        <Box sx={{position:"relative"}}>
          <img src={doctorsImg} alt="doctors imgae" height={370} width={400} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems:"center",
              textAlign: "left",
              borderRadius: "8px",
              padding: "10px",
              width:"220px",
              background: "#FFFFFF",
              boxShadow: "0px 15px 35px -5px #00000012",
              position: "absolute",
              bottom: "79px",
              left: "-99px"
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src={emoji1} alt="emoji1" />
              <h3 style={{ color: "#1B3C74" }}>84k+</h3>
            </Box>
            <Typography variant="span" sx={{ color: "#77829D" }}>Happy Patients</Typography>
          </Box>
          <img src={emoji2} alt="emoji2" style={{position:"absolute", top:"70px", right:"-45px"}}/>
        </Box>
        {/* questions */}
        <Box sx={{ textAlign: "left" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", fontSize: "17px", padding: "20px" }}
          >
            <span style={{ color: "#1B3C74", marginRight: "4px" }}>
              Why choose our medical for your family?
            </span>{" "}
            <span style={{ color: "#2AA7FF" }}>+</span>
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", fontSize: "17px", padding: "20px" }}
          >
            <span style={{ color: "#1B3C74", marginRight: "4px" }}>
              Why we are different from others?
            </span>{" "}
            <span style={{ color: "#2AA7FF" }}>+</span>
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", fontSize: "17px", padding: "20px" }}
          >
            <span style={{ color: "#1B3C74", marginRight: "4px" }}>
              Trusted & experience senior care & love
            </span>{" "}
            <span style={{ color: "#2AA7FF" }}>+</span>
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", fontSize: "17px", padding: "20px" }}
          >
            <span style={{ color: "#1B3C74", marginRight: "4px" }}>
              How to get appointment for emergency cases?
            </span>{" "}
            <span style={{ color: "#2AA7FF" }}>+</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default FrequentlyAsked;

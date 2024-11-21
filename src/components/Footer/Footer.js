import { Box, Button, Typography } from "@mui/material";
import React from "react";
import googlePlay from "../../Assets/google_play.png.png";
import appStore from "../../Assets/apple_store.png.png";
import mobile1Img from "../../Assets/mobile1.png";
import mobile2Img from "../../Assets/mobile2.png";
import mobileContentImg from "../../Assets/mobileContent.png";

const Footer = () => {
  return (
    <Box>
      {/* upper section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column", 
            sm: "column",
            md: "row", 
          },
          gap: "40px",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        {/* mobile images */}
        <Box sx={{ position: "relative" }}>
          <img src={mobile2Img} alt="mobile frame" width={200} height={300} />
          <img
            style={{
              position: "absolute",
              top: "24px",
              left: "6px",
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
            }}
            src={mobileContentImg}
            alt="mobile frame"
            width={187}
            height={278}
          />
           <img
            style={{ position: "absolute", top: "50px", right: "133px" }}
            src={mobile1Img}
            alt="mobile frame"
            width={200}
            height={250}
          />
          <img
            style={{
              position: "absolute",
              top: "69px",
              left: "-126px",
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
            }}
            src={mobileContentImg}
            alt="mobile frame 2"
            width={187}
            height={235}
          />
        </Box>

        {/* content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            textAlign: "left",
          }}
        >
          <Typography variant="h4">
            <span style={{ color: "#1B3C74" }}>Download the</span>{" "}
            <span style={{ color: "#2AA8FF" }}>Medify</span>{" "}
            <span style={{ color: "#1B3C74" }}>App</span>
          </Typography>
          <Typography sx={{ color: "#1B3C74" }} variant="body1">
            Get the link to download the app
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                background: "#FFFFFF",
                border: "1px solid #F0F0F0",
                padding: "10px",
              }}
            >
              <Typography variant="p" sx={{ fontWeight: "bold" }}>
                +91
              </Typography>
            </Box>
            <input
              style={{
                border: "1px solid #F0F0F0",
                padding: "10px",
                marginRight: "10px",
              }}
              type="number"
              placeholder="Enter phone number"
            />
            <Button sx={{ background: "#2AA8FF" }} variant="contained">
              Send SMS
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <img src={googlePlay} alt="google play" width={160} height={50} />
            <img src={appStore} alt="app store" width={160} height={50} />
          </Box>
        </Box>
      </Box>

      {/* bottom section */}
      <Box></Box>
    </Box>
  );
};
export default Footer;

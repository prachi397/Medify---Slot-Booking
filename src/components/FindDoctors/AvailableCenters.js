import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import topDentistInfoImg from "../../Assets/sensodyne_dweb.png.png";
import verifiedImg from "../../Assets/verified.1f87346e730e 1.png";
import { FindCentersContext } from "./FindCentersContext";

const AvailableCenters = () => {
  const { doctorsData, selectedState } = useContext(FindCentersContext);
  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        padding: { xs: 2, sm: 4 },
        justifyContent: "center",
      }}
    >
      <Box sx={{display:"flex",flexDirection:"column",gap:"10px",textAlign:"left"}}>
        <Typography variant="h3" sx={{ fontSize: "24px" }}>
        {doctorsData?.length} medical centers available in {selectedState}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "7px" }}>
          <img src={verifiedImg} alt="verify" />
          <Typography variant="p" sx={{ color: "#787887" }}>
            Book appointments with minimum wait-time & verified doctor details
          </Typography>
        </Box>
      </Box>
      <Box>
        <img src={topDentistInfoImg} />
      </Box>
    </Box>
  );
};
export default AvailableCenters;

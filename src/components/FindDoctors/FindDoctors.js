import React from "react";
import Navbar from "../Navbar/Navbar";
import FindCentersModal from "../FindCentersModal/FindCentersModal";
import { Box } from "@mui/material";

const FindDoctors = () => {
  return (
    <div>
      <Navbar pageName="FindDoctors" />
      <Box
        sx={{
          background: "#2AA7FF",
          height: "70px",
          borderBottomRightRadius: "10px",
          borderBottomLeftRadius: "10px",
        }}
      ></Box>
      <FindCentersModal />
    </div>
  );
};
export default FindDoctors;

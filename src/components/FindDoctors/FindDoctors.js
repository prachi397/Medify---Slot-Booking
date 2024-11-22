import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import FindCentersModal from "../FindCentersModal/FindCentersModal";
import { Box } from "@mui/material";
import AvailableCenters from "./AvailableCenters";
import FrequentlyAsked from "../FrequentlyAsked/FrequentlyAsked";
import Footer from "../Footer/Footer";

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
      <FindCentersModal pageName="FindDoctors" />
      <AvailableCenters />
      {/* frequently asked questions section */}
      <FrequentlyAsked />

      {/* footer */}
      <Footer />
    </div>
  );
};
export default FindDoctors;

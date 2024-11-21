import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import FindCentersModal from "../FindCentersModal/FindCentersModal";
import { Box } from "@mui/material";

const FindDoctors = () => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [doctorsData, setDoctorsData] = useState([]);

  const handleSearch = ({ selectedState, selectedCity, doctorsData }) => {
    setState(selectedState);
    setCity(selectedCity);
    setDoctorsData(doctorsData);
  };
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
      <FindCentersModal>
      {({ selectedState, selectedCity, doctorsData }) =>
          handleSearch({ selectedState, selectedCity, doctorsData })
        }
      </FindCentersModal>
    </div>
  );
};
export default FindDoctors;

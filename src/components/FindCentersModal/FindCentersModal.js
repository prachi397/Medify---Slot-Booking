import React, { useContext, useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import DoctorIcon from "../../Assets/Doctor.png";
import LabIcon from "../../Assets/Drugstore.png";
import HospitalIcon from "../../Assets/Hospital.png";
import MedicalStoreIcon from "../../Assets/Capsule.png";
import AmbulanceIcon from "../../Assets/Ambulance.png";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { FindCentersContext } from "../FindDoctors/FindCentersContext";

const FindCentersModal = ({ pageName }) => {
  const {
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity,
    doctorsData,
    setDoctorsData,
    loading,
    setIsLoading
  } = useContext(FindCentersContext);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate("");

  //tiles data to display
  const tilesData = [
    { icon: DoctorIcon, value: "Doctors" },
    { icon: LabIcon, value: "Labs" },
    { icon: HospitalIcon, value: "Hospitals" },
    { icon: MedicalStoreIcon, value: "Medical Store" },
    { icon: AmbulanceIcon, value: "Ambulance" },
  ];

  //getting state data when page loads
  useEffect(() => {
    fetchStates();
  }, []);

  //fucntion to fetch state data
  async function fetchStates() {
    try {
      let url = "https://meddata-backend.onrender.com/states";
      let resp = await fetch(url);
      let result = await resp.json();
      setState(result);
    } catch (err) {
      enqueueSnackbar("Error in fetching state data", {
        variant: "error",
      });
    }
  }

  //fucntion to fetch city data based on the selected state
  async function fetchCity(state) {
    try {
      let url = `https://meddata-backend.onrender.com/cities/${state}`;
      let resp = await fetch(url);
      let result = await resp.json();
      setCity(result);
    } catch (err) {
      enqueueSnackbar("Error in fetching city data", {
        variant: "error",
      });
    }
  }

  // fucntion to set selected state
  const handleStateChange = (e, value) => {
    setSelectedState(value);
    fetchCity(value);
  };

  //function to set selected city
  const handleCityChange = (e, value) => {
    setSelectedCity(value);
  };

  //function to fetch doctors data based on selected city and state
  async function fetchDoctors(selectedState, selectedCity) {
    try {
      setIsLoading(true);
      let url = `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`;
      let resp = await fetch(url);
      let result = await resp.json();
      setDoctorsData(result);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      enqueueSnackbar("Error in fetching doctor data", {
        variant: "error",
      });
    }
  }

  //function to navigate another page when click on search
  function handleBtnClick() {
    if (selectedCity && selectedState) {
      fetchDoctors(selectedState, selectedCity);
      if (pageName === "HomePage") {
        navigate("/find-doctors");
      }
    } else {
      enqueueSnackbar("Please select state and city", {
        variant: "error",
      });
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "30px",
        background: "#FFFFFF",
        boxShadow: 2,
        marginTop: pageName === "HomePage" ? "-6rem" : "-2rem",
        borderRadius: pageName === "HomePage" ? "0px" : "5px",
        padding: { xs: 2, sm: 4 },
        mx: { xs: 2, sm: 4, md: 10 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          gap: "40px",
        }}
      >
        <Autocomplete
          sx={{ width: { xs: "80%", sm: "40%", lg: "30%" } }}
          freeSolo
          id="state"
          options={state.map((ele) => ele)}
          onChange={handleStateChange}
          value={selectedState}
          disableClearable
          renderInput={(params) => (
            <TextField
              {...params}
              label="State"
              slotProps={{
                input: {
                  ...params.InputProps,
                  type: "search",
                },
              }}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <Autocomplete
          sx={{ width: { xs: "80%", sm: "40%", lg: "30%" } }}
          freeSolo
          id="city"
          options={city.map((ele) => ele)}
          value={selectedCity}
          onChange={handleCityChange}
          disableClearable
          renderInput={(params) => (
            <TextField
              {...params}
              label="City"
              slotProps={{
                input: {
                  ...params.InputProps,
                  type: "search",
                },
              }}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon
                      sx={{
                        color: "black",
                        visibility: "visible",
                        display: "inline",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#2AA7FF",
            padding: "10px 20px",
            fontWeight: "bold",
            textTransform: "none",
          }}
          startIcon={<SearchIcon />}
          onClick={handleBtnClick}
        >
          Search
        </Button>
      </Box>
      {pageName === "HomePage" && (
        <>
          <Typography variant="h3" sx={{ fontSize: "26px" }}>
            You may be looking for
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {tilesData.map((tile, index) => (
              <Grid item key={index} xs={12} sm={6} md={2.4}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 2,
                    boxShadow: 2,
                    borderRadius: 2,
                    background: "#FAFBFE",
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
        </>
      )}
    </Box>
  );
};
export default FindCentersModal;

import React, { useEffect, useState } from "react";
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

const FindCentersModal = () => {
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

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
      console.log(err);
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
      console.log(err);
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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "30px",
        background: "#FFFFFF",
        boxShadow: 2,
        marginTop:"-6rem",
        padding: { xs: 2, sm: 4 },
        mx: { xs: 2, sm: 4, md: 10 }
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
          sx={{ width: { xs: "80%", sm: "40%", lg: "30%" }}}
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
           sx={{ width: { xs: "80%", sm: "40%", lg: "30%" }}}
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
        >
          Search
        </Button>
      </Box>
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
    </Box>
  );
};
export default FindCentersModal;

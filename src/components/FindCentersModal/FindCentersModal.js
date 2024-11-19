import React from "react";
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
  const tilesData = [
    { icon: DoctorIcon, value: "Doctors" },
    { icon: LabIcon, value: "Labs" },
    { icon: HospitalIcon, value: "Hospitals" },
    { icon: MedicalStoreIcon, value: "Medical Store" },
    { icon: AmbulanceIcon, value: "Ambulance" },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "30px",
        background: "#FFFFFF",
        padding: { xs: 2, sm: 4 },
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
          sx={{ width: "30%" }}
          freeSolo
          id="state"
          // options={top100Films.map((option) => option.title)}
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
          sx={{ width: "30%" }}
          freeSolo
          id="city"
          // options={top100Films.map((option) => option.title)}
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

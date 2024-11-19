import React from "react";
import "./navbar.css";
import { AppBar, Box, Button, getAppBarUtilityClass, IconButton, Toolbar } from "@mui/material";
import MedifyLogo from "../../Assets/MedifyLogo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="upper-heading">
        <span>
          {" "}
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </span>
      </div>
      <AppBar position="static" className="lower-navbar">
        <Toolbar sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems:"center",
            flexWrap: "wrap",
            px: "2"
        }}>
          <IconButton aria-label="menu" sx={{ mr: 2 }}>
            <img src={MedifyLogo} alt="logo" width={80} height={27} />
          </IconButton>
          <Box sx={{display:"flex", flexWrap:"wrap", gap:2, alignItems:"center", mt: { xs: 2, sm: 0 }}}>
          <Button color="inherit">Find Doctors</Button>
          <Button color="inherit">Hospitals</Button>
          <Button color="inherit">Medicines</Button>
          <Button color="inherit">Surgeries</Button>
          <Button color="inherit">Software for Provider</Button>
          <Button color="inherit">Facilities</Button>
          <Button className="booking-btn" variant="contained" color="primary">
            My Bookings
          </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;

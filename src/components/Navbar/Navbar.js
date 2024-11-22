import React from "react";
import "./navbar.css";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import MedifyLogo from "../../Assets/MedifyLogo.png";
import { NavLink } from "react-router-dom";

const Navbar = ({ pageName }) => {
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
      <AppBar
        position="static"
        className={pageName === "HomePage" ? "lower-navbar" : "other-navbar"}
      >
        <Toolbar
          sx={{
            display: "flex",
            gap: "35px",
            justifyContent: "center",
            alignItems: { xs: "flex-start", md: "center" },
            flexWrap: { xs: "wrap", md: "nowrap" },
            px: 2,
          }}
        >
          <IconButton aria-label="menu" sx={{ mr: 2 }}>
            <NavLink to='/'>
            <img src={MedifyLogo} alt="logo" width={80} height={27} />
            </NavLink>
          </IconButton>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              alignItems: "center",
              mt: { xs: 2, md: 0 },
            }}
          >
            <NavLink
              to="/find-doctors"
              style={({ isActive }) => ({
                color: isActive ? "#2AA7FF" : "inherit",
                borderBottom: isActive ? "2px solid #2AA7FF" : "none",
              })}
            >
              {" "}
              <Button color="inherit">Find Doctors</Button>
            </NavLink>
            <Button color="inherit">Hospitals</Button>
            <Button color="inherit">Medicines</Button>
            <Button color="inherit">Surgeries</Button>
            <Button color="inherit">Software for Provider</Button>
            <Button color="inherit">Facilities</Button>
            <Button
              component={NavLink}
              to="/my-bookings"
              className="booking-btn"
              variant="contained"
              color="primary"
            >
              My Bookings
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;

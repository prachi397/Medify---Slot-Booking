import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import FrequentlyAsked from "../FrequentlyAsked/FrequentlyAsked";
import { Box, Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);

  useEffect(() => {
    const localBookings = localStorage.getItem("bookings") || "[]";
    setBookings(JSON.parse(localBookings));
  }, []);

  console.log("bookings==>", bookings);

  return (
    <div>
      <Navbar pageName="MyBookings" />
      <Box
        sx={{
          background: "#2AA7FF",
          height: "70px",
          borderBottomRightRadius: "10px",
          borderBottomLeftRadius: "10px",
        }}
      />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            position: "relative",
            marginBottom: {xs:"80px",md:"40px"}
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: "700",
              position: "absolute",
              top: "-49px",
              left: "69px",
            }}
          >
            My Bookings
          </Typography>
          {/* search for my bookings */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              width: "100%",
              maxWidth: {xs:"314px", sm:"400px",md:"600px"},
              margin: "0 auto",
              background: "#FFFFFF",
              padding: "27px 24px 24px 27px",
              boxShadow: "6px 6px 35px 0px #1028511C",
              borderRadius: "15px",
              position: "absolute",
              right: {xs:"5px", md:"69px"},
              top:{xs:"-5px", md:"-40px"}
            }}
          >
            <TextField
              placeholder="Search By Hospital"
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                flexGrow: 1,
                background: "#FAFBFE",
                border: "1px solid #F0F0F0",
                fontSize: "10px",
              }}
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
              // onClick={handleBtnClick}
            >
              Search
            </Button>
          </Box>
        </Box>
      <FrequentlyAsked />
      <Footer />
    </div>
  );
};
export default MyBookings;

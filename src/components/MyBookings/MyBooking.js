import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import FrequentlyAsked from "../FrequentlyAsked/FrequentlyAsked";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import topDentistInfoImg from "../../Assets/sensodyne_dweb.png.png";
import centerImg from "../../Assets/center.png";
import thumbIcon from "../../Assets/thumb.png";
import { format } from "date-fns";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);

  useEffect(() => {
    const localBookings = localStorage.getItem("bookings") || "[]";
    setBookings(JSON.parse(localBookings));
  }, []);

  console.log("bookings==>", bookings);

  const formatDate = (day) => {
    if (day) {
      const date = new Date(day);
      return format(date, "E, d LLL");
    } else {
      return null;
    }
  };

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
          marginBottom: { xs: "80px",sm:"60px", md: "60px" },
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
            maxWidth: { xs: "314px", sm: "400px", md: "600px" },
            margin: "0 auto",
            background: "#FFFFFF",
            padding: "27px 24px 24px 27px",
            boxShadow: "6px 6px 35px 0px #1028511C",
            borderRadius: "15px",
            position: "absolute",
            right: { xs: "5px", md: "69px" },
            top: { xs: "-5px", md: "-40px" },
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
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          paddingTop: "20px",
          paddingX: { xs: "10px", sm: "20px" },
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "column", md: "row" },
        }}
      >
        {/* my bookings here */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            textAlign: "left",
            cursor: "pointer",
            padding:{xs:"10px",sm:"15px",md:"30px"}
          }}
        >
          <Box>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, sm: 3 },
              }}
            >
              {bookings.map((ele, index) => {
                const hospitalDetails = ele[0] || ele[1];
                return (
                  <Grid item key={index} sx={{ display: "flex" }}>
                    <Card
                      sx={{
                        display: "flex",
                        maxWidth: "750px",
                        padding: 2,
                        boxShadow: 2,
                        borderRadius: 2,
                        "&:hover": { boxShadow: 4 },
                      }}
                    >
                      <CardMedia
                        component="img"
                        src={centerImg}
                        alt="center image"
                        sx={{
                          width: { xs: 100, sm: 120 },
                          height: { xs: 100, sm: 130 },
                        }}
                      />
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "Left",
                          padding: { xs: 1, sm: 2 },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            textAlign: "Left",
                            justifyContent:"start"
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              textAlign: "Left",
                              padding: "10px",
                            }}
                          >
                            <Typography
                              variant="body1"
                              sx={{
                                fontWeight: 600,
                                color: "#14BEF0",
                                marginBottom: "10px",
                              }}
                            >
                              {hospitalDetails?.["Hospital Name"]}
                            </Typography>
                            <Typography
                              variant="p"
                              style={{ fontWeight: "bold" }}
                            >
                              {hospitalDetails?.Address}
                            </Typography>
                            <Typography
                              variant="p"
                              sx={{ marginBottom: "35px" }}
                            >
                              Smilessence Center for Advanced Dentistry +1 more
                            </Typography>
                            <img
                              src={thumbIcon}
                              alt="thumbsup"
                              style={{
                                width: 50,
                                height: 25,
                                borderRadius: "3.5px",
                              }}
                            />
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              gap: "7px",
                              alignItems: "flex-start",
                              justifyContent: "start",
                            }}
                          >
                             <Button
                              sx={{ color: "#2AA7FF", border:"1px solid #2AA7FF" }}
                            >
                              {ele.bookingTime}
                            </Button>
                            <Button
                              sx={{ color:"#007100", border:"1px solid #007100" }}
                            >
                              {formatDate(ele.bookingDate)}
                            </Button>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
        {/* Static image section */}
        <Box sx={{  paddingTop:{xs:"10px",sm:"15px",md:"30px"}}}>
          <img
            src={topDentistInfoImg}
            alt="top dentist info"
            height={230}
            width={310}
          />
        </Box>
      </Box>
      <FrequentlyAsked />
      <Footer />
    </div>
  );
};
export default MyBookings;

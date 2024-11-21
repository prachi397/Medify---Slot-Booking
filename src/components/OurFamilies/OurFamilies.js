import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import family1Icon from "../../Assets/family1.png";
import family2Icon from "../../Assets/family2.png";
import family3Icon from "../../Assets/family3.png";
import family4Icon from "../../Assets/family4.png";

const OurFamilies = () => {
  const data = [
    { icon: family1Icon, heading: "5000+", subHeading: "Happy Patients" },
    { icon: family2Icon, heading: "200+", subHeading: "Hospitals" },
    { icon: family3Icon, heading: "1000+", subHeading: "Laboratories" },
    { icon: family4Icon, heading: "700+", subHeading: "Expert Doctors" },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection:{xs:"column",sm:"row",md:"row"},
        alignItems: "center",
        justifyContent: "center",
        padding: {xs:"0",sm:"20px","md":"30px"},
      }}
    >
      {/* box for content */}
      <Box sx={{ width: "50%", textAlign: "left", padding: "40px" }}>
        <Typography variant="p" sx={{ color: "#2AA7FF" }}>
          CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
        </Typography>
        <Typography variant="h3" sx={{ color: "#1B3C74" }}>
          Our Families
        </Typography>
        <Typography variant="p" sx={{ color: "#77829D" }}>
          We will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </Typography>
      </Box>

      {/* box for the cards */}
      <Box sx={{ width: "50%" }}>
        <Grid container spacing={1} sx={{ padding: "30px" }}>
          {data.map((ele, index) => (
            <Grid item key={index} xs={12} sm={6} md={6}>
              <Card
                sx={{
                  maxWidth: 300,
                  pt: {
                    xs: "10px",  
                    sm: "20px", 
                    md: "30px",  
                  },
                  pb: {
                    xs: "10px",  
                    sm: "20px",  
                    md: "30px", 
                  },
                }}
              >
                {/* Card Image */}
                <img src={ele.icon} height={75} width={75} alt="card image" />

                {/* Card Content */}
                <CardContent>
                  <Typography variant="h4" sx={{ color: "#1B3C74" }}>
                    {ele.heading}
                  </Typography>
                  <Typography sx={{ color: "#77829D" }} variant="body2">
                    {ele.subHeading}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
export default OurFamilies;

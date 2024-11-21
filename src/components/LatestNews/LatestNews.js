import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import latestNews from "../../Assets/latestNews.png";
import doctorImg from "../../Assets/doctorImg.png";
import React from "react";

const LatestNews = () => {
  const cardArray = [
    {
      img: latestNews,
      title: "Medical",
      date: "March 31, 2022",
      text: "6 Tips To Protect Your Mental Health When You’re Sick",
      doctorImg: doctorImg,
      doctorName: "Rebecca Lee",
    },
    {
      img: latestNews,
      title: "Medical",
      date: "March 31, 2022",
      text: "6 Tips To Protect Your Mental Health When You’re Sick",
      doctorImg: doctorImg,
      doctorName: "Rebecca Lee",
    },
    {
      img: latestNews,
      title: "Medical",
      date: "March 31, 2022",
      text: "6 Tips To Protect Your Mental Health When You’re Sick",
      doctorImg: doctorImg,
      doctorName: "Rebecca Lee",
    },
  ];
  return (
    <Box sx={{background:"#FFFFFF", padding:"40px"}}>
      <Typography variant="h6" sx={{ color: "#2AA7FF" }}>
        Blog & News
      </Typography>
      <Typography variant="h4" sx={{ color: "#1B3C74", fontWeight: "bold" }}>
        Read Our Latest News
      </Typography>
      <Grid container spacing={1} sx={{ padding: "30px" }}>
        {cardArray.map((ele, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 300, textAlign: "left" }}>
              {/* Card Image */}
              <CardMedia
                component="img"
                height="200"
                image={ele.img}
                alt="card image"
              />

              {/* Card Content */}
              <CardContent>
                <Typography
                  variant="p"
                  sx={{ color: "#77829D", fontSize: "16px" }}
                >
                  <span>{ele.title}</span>
                  {" | "}
                  <span>{ele.date}</span>
                </Typography>
                <Typography variant="body2">{ele.text}</Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <img src={ele.doctorImg} />
                  <Typography variant="body2">{ele.doctorName}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default LatestNews;

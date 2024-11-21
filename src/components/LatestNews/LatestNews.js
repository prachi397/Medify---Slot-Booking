import { Box, Typography } from "@mui/material";
import latestNews from "../../Assets/latestNews.png";
import React from "react";

const LatestNews = () => {
  return (
    <Box>
      <Typography variant="h6" sx={{ color: "#2AA7FF" }}>
        Blog & News
      </Typography>
      <Typography variant="h4" sx={{ color: "#1B3C74", fontWeight: "bold" }}>
        Read Our Latest News
      </Typography>
    </Box>
  );
};
export default LatestNews;

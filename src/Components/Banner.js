import React from "react";
import { Box, Button, Typography } from "@mui/material";
import desktop from "../assets/illustration-working.svg";

export const Banner = () => {
  return (
    <Box
      sx={{
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Box sx={{ width: "40%", marginLeft: "-40px" }}>
        <Typography
          sx={{
            color: "hsl(255, 11%, 22%)",
            fontSize: "4em",
            fontWeight: 700,
            lineHeight: "80px",
          }}
        >
          More than just shorter links
        </Typography>
        <Typography
          sx={{ fontSize: "18px", fontWeight: 500, color: "hsl(0, 0%, 75%)" }}
        >
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </Typography>
        <Button
          variant="contained"
          sx={{
            padding: "10px 30px",
            borderRadius: "30px",
            color: "white",
            fontWeight: 500,
            margin: "30px 0px",
          }}
        >
          Get Started
        </Button>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${desktop})`,
          backgroundRepeat: "no-repeat",
          width: "500px",
          height: "500px",
          backgroundSize: "550px",
          position: "relative",
          left: "116px",
          top: "50px",
        }}
      ></Box>
    </Box>
  );
};

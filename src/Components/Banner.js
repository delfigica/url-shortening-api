import React from "react";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import desktop from "../assets/illustration-working.svg";

export const Banner = () => {
  const theme = useTheme();

  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={
        laptop
          ? {
              height: "70vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }
          : {
              display: "flex",
              flexDirection: "column-reverse",
            }
      }
    >
      <Box
        sx={
          laptop
            ? { width: "40%", marginLeft: "-40px" }
            : { width: "90%", margin: " 0px auto" }
        }
      >
        <Typography
          sx={
            laptop
              ? {
                  color: "hsl(255, 11%, 22%)",
                  fontSize: "4em",
                  fontWeight: 700,
                  lineHeight: "80px",
                }
              : {
                  color: "hsl(255, 11%, 22%)",
                  fontSize: "2.2em",
                  fontWeight: 700,
                  lineHeight: "40px",
                  textAlign: "center",
                }
          }
        >
          More than just shorter links
        </Typography>
        <Typography
          sx={
            laptop
              ? { fontSize: "18px", fontWeight: 500, color: "hsl(0, 0%, 75%)" }
              : {
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "hsl(0, 0%, 75%)",
                  textAlign: "center",
                  marginTop: "10px",
                }
          }
        >
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </Typography>
        <Button
          variant="contained"
          sx={
            laptop
              ? {
                  padding: "10px 30px",
                  borderRadius: "30px",
                  color: "white",
                  fontWeight: 500,
                  margin: "30px 0px",
                }
              : {
                  padding: "10px 30px",
                  borderRadius: "30px",
                  color: "white",
                  fontWeight: 500,
                  margin: "20px 60px",
                }
          }
        >
          Get Started
        </Button>
      </Box>
      <Box
        sx={
          laptop
            ? {
                backgroundImage: `url(${desktop})`,
                backgroundRepeat: "no-repeat",
                width: "500px",
                height: "500px",
                backgroundSize: "550px",
                position: "relative",
                left: "116px",
                top: "50px",
              }
            : {
                backgroundImage: `url(${desktop})`,
                backgroundRepeat: "no-repeat",
                width: "500px",
                height: "350px",
                backgroundSize: "450px",
                position: "relative",
                left: "10px",
              }
        }
      ></Box>
    </Box>
  );
};

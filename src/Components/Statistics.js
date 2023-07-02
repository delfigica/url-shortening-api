import React from "react";
import {
  Avatar,
  Box,
  Card,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import brand from "../assets/icon-brand-recognition.svg";
import detailed from "../assets/icon-detailed-records.svg";
import fully from "../assets/icon-fully-customizable.svg";

export const Statistics = () => {
  const statistics = [
    {
      id: 0,
      title: "Brand Recognition",
      image: brand,
      description:
        "Boost your brand recognition with each click. Generic links dont'n mean a thing. Branded links help instil confidence in your content.",
    },
    {
      id: 1,
      title: "Detailed Records",
      image: detailed,
      description:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      id: 2,
      title: "Fully Customizable",
      image: fully,
      description:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];

  const theme = useTheme();

  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={
        laptop
          ? { height: "60vh", backgroundColor: "#F1F1F1" }
          : { backgroundColor: "#F1F1F1", padding: "20px 0px" }
      }
    >
      <Box
        sx={
          laptop
            ? { width: "40%", textAlign: "center", margin: "auto" }
            : { backgroundColor: "#F1F1F1" }
        }
      >
        <Typography
          sx={
            laptop
              ? { fontSize: "2.5em", fontWeight: 700 }
              : { fontSize: "1.7em", fontWeight: 700, textAlign: "center" }
          }
          color="secondary"
        >
          Advanced Statistics
        </Typography>
        <Typography
          sx={
            laptop
              ? {
                  color: "hsl(0, 0%, 75%)",
                  margin: "10px 0px",
                  fontWeight: 500,
                }
              : {
                  color: "hsl(0, 0%, 75%)",
                  margin: "10px 0px",
                  fontWeight: 500,
                  textAlign: "center",
                }
          }
        >
          Track how your links are performing across the web with our advanced
          statics dashboard.
        </Typography>
      </Box>
      
        <hr
          style={{
            width: "500px",
            border: "4px solid hsl(180, 66%, 49%)",
            position: "relative",
            top: "200px",
            left: "420px",
            zIndex: 1,
          }}
        />
    
      <Box
        sx={
          laptop
            ? {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "-70px",
              }
            : {
                position: "relative",
                // top: "-700px",
                zIndex: "2",
              }
        }
      >
        {statistics.map((statistic) => (
          <Box
            sx={
              laptop
                ? {
                    width: "380px",
                    height: "250px",
                    margin: "0px 15px",
                    padding: "40px",
                    backgroundColor: "white",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    marginTop: `${statistic.id * 100}px`,
                    zIndex: 2,
                  }
                : {
                    width: "300px",
                    height: "300px",
                    margin: "50px 10px",
                    padding: "20px",
                    backgroundColor: "white",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    zIndex: 5,
                  }
            }
            key={statistic.id}
          >
            <Avatar
              src={statistic.image}
              sx={
                laptop
                  ? {
                      width: "70px",
                      height: "70px",
                      backgroundColor: "hsl(257, 27%, 26%)",
                      padding: "20px",
                      position: "relative",
                      top: "-50px",
                    }
                  : {
                      width: "70px",
                      height: "70px",
                      backgroundColor: "hsl(257, 27%, 26%)",
                      padding: "20px",
                      position: "relative",
                      top: "-50px",
                      left: "100px",
                    }
              }
            />
            <Typography
              sx={{ fontSize: "1.4em", fontWeight: 700 }}
              color="secondary"
            >
              {statistic.title}
            </Typography>
            <Typography
              sx={{
                color: "hsl(257, 7%, 63%)",
                fontWeight: 500,
                margin: "10px 0px",
              }}
            >
              {statistic.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

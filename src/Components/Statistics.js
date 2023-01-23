import React from "react";
import { Avatar, Box, Card, Typography } from "@mui/material";
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
  return (
    <Box sx={{ height: "90vh", backgroundColor: "#F1F1F1" }}>
      <Box sx={{ width: "40%", textAlign: "center", margin: "auto" }}>
        <Typography
          sx={{ fontSize: "2.5em", fontWeight: 700 }}
          color="secondary"
        >
          Advanced Statistics
        </Typography>
        <Typography
          sx={{ color: "hsl(0, 0%, 75%)", margin: "10px 0px", fontWeight: 500 }}
        >
          Track how your links are performing across the web with our advanced
          statics dashboard.
        </Typography>
      </Box>
      <hr style={{ width: '500px', border: '4px solid hsl(180, 66%, 49%)', position: "relative", top: '200px', left: '420px', zIndex: 1}} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "-70px",
        }}
      >
        {statistics.map((statistic) => (
          <Box
            sx={{
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
              zIndex: 2
              
            }}
            key={statistic.id}
          >
            <Avatar
              src={statistic.image}
              sx={{
                width: "70px",
                height: "70px",
                backgroundColor: "hsl(257, 27%, 26%)",
                padding: "20px",
                position: "relative",
                top: "-50px",
              }}
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
